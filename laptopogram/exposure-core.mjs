export const MIN_EXPOSURE_MS = 50;
export const MAX_EXPOSURE_MS = 30000;

export function exposureDurations(base, strip = false) {
  const maxBase = strip ? MAX_EXPOSURE_MS / 4 : MAX_EXPOSURE_MS;
  const duration = Math.round(Number(base));
  if (!Number.isFinite(duration) || duration < MIN_EXPOSURE_MS || duration > maxBase) {
    throw new RangeError(`Välj en tid mellan ${MIN_EXPOSURE_MS} och ${maxBase} ms.`);
  }
  return strip ? [duration, duration * 2, duration * 3, duration * 4] : [duration];
}

export function fitImage(viewWidth, viewHeight, imageWidth, imageHeight, scale = 1) {
  const factor = Math.min(viewWidth / imageWidth, viewHeight / imageHeight) * scale;
  const width = imageWidth * factor;
  const height = imageHeight * factor;
  return { x: (viewWidth - width) / 2, y: (viewHeight - height) / 2, width, height };
}

export function processPixels(data, { invert = true, light = 100 } = {}) {
  const multiplier = Math.max(0, Math.min(100, light)) / 100;
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3] / 255;
    const luminance = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) * alpha + 255 * (1 - alpha);
    const value = Math.round((invert ? 255 - luminance : luminance) * multiplier);
    data[i] = data[i + 1] = data[i + 2] = value;
    data[i + 3] = 255;
  }
  return data;
}

// All visible transitions happen in animation frames. Report frame times, not
// physical monitor-on times, which a browser cannot measure or guarantee.
export class ExposureTimer {
  constructor({ requestFrame, cancelFrame, allowed, onFrame, onPhase, onFinish, onCountdown, maxFrameGap = 120 }) {
    Object.assign(this, { requestFrame, cancelFrame, allowed, onFrame, onPhase, onFinish, onCountdown, maxFrameGap });
    this.running = false;
    this.handle = null;
    this.phase = 'idle';
  }

  start({ durations, delay = 0 }, now) {
    if (this.running) return false;
    if (!this.allowed()) return false;
    if (!durations.length || durations.some(d => !Number.isFinite(d) || d < MIN_EXPOSURE_MS || d > MAX_EXPOSURE_MS)) {
      throw new RangeError('Ogiltig exponeringstid.');
    }
    this.durations = [...durations];
    this.closedAt = durations.map(() => null);
    this.lastActive = durations.map(() => false);
    this.startAt = null;
    this.lastFrame = now;
    if (!Number.isFinite(delay) || delay < 0) throw new RangeError('Ogiltig fördröjning.');
    this.waitUntil = now + delay;
    this.countdownSecond = null;
    this.running = true;
    this.phase = 'waiting';
    this.onFrame(durations.map(() => false));
    this.onPhase('waiting');
    this.schedule();
    return true;
  }

  schedule() { this.handle = this.requestFrame(t => this.tick(t)); }

  tick(now) {
    this.handle = null;
    if (!this.running) return;
    if (!this.allowed()) { this.abort('Fliken eller fönstret tappade fokus.', now); return; }
    const gap = now - this.lastFrame;
    this.lastFrame = now;
    if (this.phase === 'exposing' && gap > this.maxFrameGap) {
      this.abort('Exponeringen avbröts efter ett långt avbrott i bildrutorna.', now);
      return;
    }
    if (now < this.waitUntil) {
      const remaining = Math.ceil((this.waitUntil - now) / 1000);
      if (remaining !== this.countdownSecond) {
        this.countdownSecond = remaining;
        this.onCountdown?.(remaining);
      }
      this.schedule();
      return;
    }
    if (this.startAt === null) {
      this.startAt = now;
      this.phase = 'exposing';
      this.onPhase('exposing');
    }
    const elapsed = now - this.startAt;
    const active = this.durations.map((duration, i) => {
      const visible = elapsed < duration;
      if (!visible && this.closedAt[i] === null) this.closedAt[i] = elapsed;
      return visible;
    });
    if (active.some((value, i) => value !== this.lastActive[i])) this.onFrame(active);
    this.lastActive = active;
    if (!active.some(Boolean)) {
      this.running = false;
      this.phase = 'complete';
      this.onPhase('complete');
      this.onFinish({ valid: true, requested: this.durations, frameDurations: this.closedAt, reason: '' });
      return;
    }
    this.schedule();
  }

  abort(reason = 'Avbruten med Esc.', now = this.lastFrame) {
    if (!this.running) return false;
    if (this.handle !== null) this.cancelFrame(this.handle);
    this.handle = null;
    this.running = false;
    this.phase = 'aborted';
    this.onFrame(this.durations.map(() => false));
    this.onPhase('aborted');
    const elapsed = this.startAt === null ? 0 : Math.max(0, now - this.startAt);
    this.onFinish({ valid: false, requested: this.durations, frameDurations: this.closedAt.map(d => d ?? elapsed), reason });
    return true;
  }
}
