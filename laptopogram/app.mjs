import { ExposureTimer, exposureDurations, fitImage, processPixels } from './exposure-core.mjs?v=6';

const translations = {
  "sv": {
    "DIGITAL BILD. ANALOGT PAPPER.": "Från skärm till fotopapper.",
    "BILDEN STANNAR PÅ DIN ENHET": "BILDEN STANNAR PÅ DIN ENHET",
    "Bild": "Bild",
    "Testbild": "Testbild",
    "Exponeringsyta": "Exponeringsyta",
    "Tryck här för att välja bild": "Tryck här för att välja bild",
    "Släpp en JPG, PNG eller WebP här.": "Släpp en JPG, PNG eller WebP här.",
    "Du kan också börja med testbilden.": "Du kan också börja med testbilden.",
    "FÖRHANDSVISNING": "FÖRHANDSVISNING",
    "Ingen bild vald": "Ingen bild vald",
    "Rotation": "Rotation",
    "Invertera": "Invertera",
    "Ger en positiv papperskopia": "Ger en positiv papperskopia",
    "Spegelvänd": "Spegelvänd",
    "Rättvänd kopia mot skärmen": "Rättvänd kopia mot skärmen",
    "Bildljus": "Bildljus",
    "Bildstorlek": "Bildstorlek",
    "Bilden görs svartvit. Bildljus ändrar bildsignalen; enhetens skärmljusstyrka ställer du separat.": "Bilden görs svartvit. Bildljus ändrar bildsignalen; enhetens skärmljusstyrka ställer du separat.",
    "Exponering": "Exponering",
    "VÄLJ BILD": "VÄLJ BILD",
    "EXPONERINGSTID": "EXPONERINGSTID",
    "Fördröjning": "Fördröjning",
    "Tid att placera skärmen mot papperet": "Tid att placera skärmen mot papperet",
    "Ingen": "Ingen",
    "1 sekund": "1 sekund",
    "3 sekunder": "3 sekunder",
    "5 sekunder": "5 sekunder",
    "10 sekunder": "10 sekunder",
    "20 sekunder": "20 sekunder",
    "Exponeringssätt": "Exponeringssätt",
    "Hel bild": "Hel bild",
    "Provremsa · 4 fält": "Provremsa · 4 fält",
    "Fyra lika breda fält av bilden. Tiderna räknas från vänster. Håll samma papper stilla hela exponeringen.": "Fyra lika breda fält av bilden. Tiderna räknas från vänster. Håll samma papper stilla hela exponeringen.",
    "Ljudsignaler": "Ljudsignaler",
    "nedräkning + klar": "nedräkning + klar",
    "Tryck och lägg mobilen med skärmen mot papperet under fördröjningen. Efter klarsignalen: lyft mobilen och tryck för att öppna reglagen. Beröringar under nedräkning och exponering ignoreras.": "Tryck och lägg mobilen med skärmen mot papperet under fördröjningen. Efter klarsignalen: lyft mobilen och tryck för att öppna reglagen. Beröringar under nedräkning och exponering ignoreras.",
    "Tangentbordsläge": "Tangentbordsläge",
    "Skärmen blir svart.": "Skärmen blir svart.",
    "Mellanslag": "Mellanslag",
    "startar exponeringen.": "startar exponeringen.",
    "öppnar reglagen när papperet är borttaget.": "öppnar reglagen när papperet är borttaget.",
    "Välj en bild eller prova testbilden.": "Välj en bild eller prova testbilden.",
    "Från skärm till skål": "Från skärm till skål",
    "På mobilen: välj 5, 10 eller 20 sekunders fördröjning och tryck Exponera om … s. Lägg skärmen mot torrt fotopapper med emulsionssidan mot skärmen. Lyft efter klarsignalen. På datorn kan du använda tangentbordsläget. Framkalla sedan som vanligt.": "På mobilen: välj 5, 10 eller 20 sekunders fördröjning och tryck Exponera om … s. Lägg skärmen mot torrt fotopapper med emulsionssidan mot skärmen. Lyft efter klarsignalen. På datorn kan du använda tangentbordsläget. Framkalla sedan som vanligt.",
    "Exponera": "Exponera",
    "Avbryt till svart": "Avbryt till svart",
    "± 50 ms i vänteläget": "± 50 ms i vänteläget",
    "Tillbaka till reglagen": "Tillbaka till reglagen",
    "På iPhone: öppna appen från hemskärmen för att slippa webbläsarens ljusa fält. Ställ skärmljusstyrkan manuellt och stäng av automatisk ljusstyrka, True Tone och Night Shift för jämförbara prov.": "På iPhone: öppna appen från hemskärmen för att slippa webbläsarens ljusa fält. Ställ skärmljusstyrkan manuellt och stäng av automatisk ljusstyrka, True Tone och Night Shift för jämförbara prov.",
    "Om svartläge och korta tider": "Om svartläge och korta tider",
    "Svart bild stänger inte av LCD-bakbelysningen.": "Svart bild stänger inte av LCD-bakbelysningen.",
    "Appen kan inte släcka datorns bildskärm fysiskt. Täck eller släck skärmen mellan pappersbyten och kontrollera slöjning med en provbit. En svart skärm är inte en garanterad mörkrumsslutare.": "Appen kan inte släcka datorns bildskärm fysiskt. Täck eller släck skärmen mellan pappersbyten och kontrollera slöjning med en provbit. En svart skärm är inte en garanterad mörkrumsslutare.",
    "Bildskärmens uppdatering och webbläsaren begränsar tidsprecisionen. Vid 60 Hz är en bildruta ungefär 16,7 ms. Använd provremsor och samma skärminställningar. Byte av flik, tappat fokus eller helskärm samt långa avbrott avbryter en pågående exponering till svart.": "Bildskärmens uppdatering och webbläsaren begränsar tidsprecisionen. Vid 60 Hz är en bildruta ungefär 16,7 ms. Använd provremsor och samma skärminställningar. Byte av flik, tappat fokus eller helskärm samt långa avbrott avbryter en pågående exponering till svart.",
    "Senaste exponeringar": "Senaste exponeringar",
    "Rensa": "Rensa",
    "Loggen visar nominell tid och beräknat intervall mellan bildrutorna. Inget ljus mäts.": "Loggen visar nominell tid och beräknat intervall mellan bildrutorna. Inget ljus mäts.",
    "SKÄRMKOPIA / LOKALT ARBETE": "LAPTOPOGRAM / LOKALT ARBETE",
    "Spara appen för offlinebruk ↓": "Spara appen för offlinebruk ↓",
    "Bild och förhandsvisning": "Bild och förhandsvisning",
    "Välj eller byt bild": "Välj eller byt bild",
    "Förberedd bild, visad i samma proportioner som skärmen": "Förberedd bild, visad i samma proportioner som skärmen",
    "Exponeringsinställningar": "Exponeringsinställningar",
    "Förvalda exponeringstider": "Förvalda exponeringstider",
    "Svart exponeringsläge. Mobil: tryck efter avslut öppnar reglagen. Tangentbord: Mellanslag exponerar, Esc avbryter, C öppnar reglagen.": "Svart exponeringsläge. Mobil: tryck efter avslut öppnar reglagen. Tangentbord: Mellanslag exponerar, Esc avbryter, C öppnar reglagen.",
    "seconds": "Ange en tid",
    "duration": "{value} sekunder",
    "range": "Välj 50–{max} ms.",
    "now": "Exponera direkt",
    "start": "Exponera om {n} s",
    "portrait": "Stående skärm",
    "landscape": "Liggande skärm",
    "area": "Bildyta {w} × {h} skärmpx",
    "ready": "REDO",
    "prepared": "Bilden är förberedd. Välj fördröjning och starta exponeringen.",
    "fileType": "Välj en bildfil, exempelvis JPG eller PNG.",
    "fileError": "Bilden kunde inte öppnas. Prova JPG, PNG eller WebP.",
    "demoName": "Testbild · gråskala och linjer",
    "waiting": "Fördröjning. Skärmen visar svart.",
    "countdown": "Exponering om {n} sekunder. Skärmen visar svart.",
    "exposing": "Exponering pågår.",
    "complete": "Exponering {n} klar. Lyft mobilen och tryck, eller använd C för reglagen.",
    "aborted": "{reason} Skärmen visar svart. Exponeringen är ogiltig.",
    "idle": "Svart vänteläge. Mellanslag exponerar, C öppnar reglagen.",
    "startError": "Exponeringen kunde inte starta. Lyft mobilen och tryck för att återgå.",
    "logValid": "Fördröjning {delay} s · {mode} · nominellt {requested} · bildrutor ≈ {actual}",
    "logAbort": "AVBRUTEN · {reason} Kassera provet.",
    "strip": "Provremsa",
    "language": "Språk",
    "offline": "OFFLINEVERSION / BILDER BEHANDLAS PÅ DEN HÄR ENHETEN",
    "share": "Dela",
    "copied": "Länken är kopierad.",
    "shareError": "Länken kunde inte kopieras. Kopiera adressen från webbläsaren.",
    "Reglagen öppnades under exponeringen.": "Reglagen öppnades under exponeringen.",
    "Avbruten med Esc.": "Avbruten med Esc.",
    "Fönstret tappade fokus.": "Fönstret tappade fokus.",
    "Fliken doldes.": "Fliken doldes.",
    "Helskärmsläget avslutades.": "Helskärmsläget avslutades.",
    "Skärmytan ändrade storlek.": "Skärmytan ändrade storlek.",
    "Sidan stängdes.": "Sidan stängdes.",
    "Fliken eller fönstret tappade fokus.": "Fliken eller fönstret tappade fokus.",
    "Exponeringen avbröts efter ett långt avbrott i bildrutorna.": "Exponeringen avbröts efter ett långt avbrott i bildrutorna.",
    "Ogiltig fördröjning.": "Ogiltig fördröjning.",
    "Ogiltig exponeringstid.": "Ogiltig exponeringstid.",
    "rangeFull": "Välj {min}–{max} ms.",
    "keyboardHelp": "Mellanslag: exponera. C: tillbaka när papperet är borttaget."
  },
  "en": {
    "DIGITAL BILD. ANALOGT PAPPER.": "From screen to photographic paper.",
    "BILDEN STANNAR PÅ DIN ENHET": "YOUR IMAGE STAYS ON YOUR DEVICE",
    "Bild": "Image",
    "Testbild": "Test image",
    "Exponeringsyta": "Exposure area",
    "Tryck här för att välja bild": "Tap to choose an image",
    "Släpp en JPG, PNG eller WebP här.": "Drop a JPG, PNG or WebP here.",
    "Du kan också börja med testbilden.": "Or start with the test image.",
    "FÖRHANDSVISNING": "SCREEN PREVIEW",
    "Ingen bild vald": "No image selected",
    "Rotation": "Rotation",
    "Invertera": "Invert",
    "Ger en positiv papperskopia": "For a positive paper print",
    "Spegelvänd": "Mirror",
    "Rättvänd kopia mot skärmen": "Correct orientation against the screen",
    "Bildljus": "Image brightness",
    "Bildstorlek": "Image size",
    "Bilden görs svartvit. Bildljus ändrar bildsignalen; enhetens skärmljusstyrka ställer du separat.": "Images are converted to black and white. Image brightness changes the image signal; set display brightness separately.",
    "Exponering": "Exposure",
    "VÄLJ BILD": "CHOOSE IMAGE",
    "EXPONERINGSTID": "EXPOSURE TIME",
    "Fördröjning": "Start delay",
    "Tid att placera skärmen mot papperet": "Time to place the screen against the paper",
    "Ingen": "None",
    "1 sekund": "1 second",
    "3 sekunder": "3 seconds",
    "5 sekunder": "5 seconds",
    "10 sekunder": "10 seconds",
    "20 sekunder": "20 seconds",
    "Exponeringssätt": "Exposure mode",
    "Hel bild": "Full image",
    "Provremsa · 4 fält": "Test strip · 4 sections",
    "Fyra lika breda fält av bilden. Tiderna räknas från vänster. Håll samma papper stilla hela exponeringen.": "Four equal sections of the image. Times run from left to right. Keep the paper still throughout.",
    "Ljudsignaler": "Sound signals",
    "nedräkning + klar": "countdown + done",
    "Tryck och lägg mobilen med skärmen mot papperet under fördröjningen. Efter klarsignalen: lyft mobilen och tryck för att öppna reglagen. Beröringar under nedräkning och exponering ignoreras.": "Tap, then place the phone screen against the paper during the delay. After the completion signal, lift the phone and tap to return. Touches are ignored during countdown and exposure.",
    "Tangentbordsläge": "Keyboard mode",
    "Skärmen blir svart.": "The screen turns black.",
    "Mellanslag": "Space",
    "startar exponeringen.": "starts the exposure.",
    "öppnar reglagen när papperet är borttaget.": "returns to controls after removing the paper.",
    "Välj en bild eller prova testbilden.": "Choose an image or try the test image.",
    "Från skärm till skål": "From screen to tray",
    "På mobilen: välj 5, 10 eller 20 sekunders fördröjning och tryck Exponera om … s. Lägg skärmen mot torrt fotopapper med emulsionssidan mot skärmen. Lyft efter klarsignalen. På datorn kan du använda tangentbordsläget. Framkalla sedan som vanligt.": "On a phone: choose a 5, 10 or 20 second delay and start. Place dry photographic paper with its emulsion side against the screen. Lift after the completion signal. On a computer, use keyboard mode. Develop the paper as usual.",
    "Exponera": "Expose",
    "Avbryt till svart": "Cancel to black",
    "± 50 ms i vänteläget": "± 50 ms while idle",
    "Tillbaka till reglagen": "Return to controls",
    "På iPhone: öppna appen från hemskärmen för att slippa webbläsarens ljusa fält. Ställ skärmljusstyrkan manuellt och stäng av automatisk ljusstyrka, True Tone och Night Shift för jämförbara prov.": "On iPhone, launch from the home screen to avoid bright browser bars. For repeatable tests, set display brightness manually and turn off automatic brightness, True Tone and Night Shift.",
    "Om svartläge och korta tider": "Black screen and short exposures",
    "Svart bild stänger inte av LCD-bakbelysningen.": "Black pixels do not turn off an LCD backlight.",
    "Appen kan inte släcka datorns bildskärm fysiskt. Täck eller släck skärmen mellan pappersbyten och kontrollera slöjning med en provbit. En svart skärm är inte en garanterad mörkrumsslutare.": "The app cannot physically switch off a display. Cover or switch off the screen between paper changes and check for fogging with a test piece. A black screen is not a guaranteed darkroom shutter.",
    "Bildskärmens uppdatering och webbläsaren begränsar tidsprecisionen. Vid 60 Hz är en bildruta ungefär 16,7 ms. Använd provremsor och samma skärminställningar. Byte av flik, tappat fokus eller helskärm samt långa avbrott avbryter en pågående exponering till svart.": "Display refresh and the browser limit timing precision. At 60 Hz, a frame is about 16.7 ms. Use test strips with consistent display settings. Hidden pages, long frame stalls and changes to the exposure area cancel to black. Keyboard mode also cancels on loss of focus or fullscreen.",
    "Senaste exponeringar": "Recent exposures",
    "Rensa": "Clear",
    "Loggen visar nominell tid och beräknat intervall mellan bildrutorna. Inget ljus mäts.": "The log shows requested times and frame intervals. Light output is not measured.",
    "SKÄRMKOPIA / LOKALT ARBETE": "LAPTOPOGRAM / ON YOUR DEVICE",
    "Spara appen för offlinebruk ↓": "Download for offline use ↓",
    "Bild och förhandsvisning": "Image and preview",
    "Välj eller byt bild": "Choose or replace image",
    "Förberedd bild, visad i samma proportioner som skärmen": "Prepared image in the display proportions",
    "Exponeringsinställningar": "Exposure settings",
    "Förvalda exponeringstider": "Exposure time presets",
    "Svart exponeringsläge. Mobil: tryck efter avslut öppnar reglagen. Tangentbord: Mellanslag exponerar, Esc avbryter, C öppnar reglagen.": "Black exposure mode. Phone: tap after completion to return. Keyboard: Space exposes, Esc cancels, C opens controls.",
    "seconds": "Enter a time",
    "duration": "{value} seconds",
    "range": "Choose 50–{max} ms.",
    "now": "Expose now",
    "start": "Expose in {n} s",
    "portrait": "Portrait screen",
    "landscape": "Landscape screen",
    "area": "Image area {w} × {h} screen px",
    "ready": "READY",
    "prepared": "Image prepared. Choose a delay and start the exposure.",
    "fileType": "Choose an image file, such as JPG or PNG.",
    "fileError": "Could not open the image. Try JPG, PNG or WebP.",
    "demoName": "Test image · grayscale and lines",
    "waiting": "Waiting. The screen stays black.",
    "countdown": "Exposure in {n} seconds. The screen stays black.",
    "exposing": "Exposing.",
    "complete": "Exposure {n} complete. Lift the phone and tap, or press C for controls.",
    "aborted": "{reason} The screen is black. The exposure is invalid.",
    "idle": "Black standby. Space exposes; C opens controls.",
    "startError": "Could not start. Lift the phone and tap to return.",
    "logValid": "Delay {delay} s · {mode} · requested {requested} · frames ≈ {actual}",
    "logAbort": "CANCELLED · {reason} Discard the test print.",
    "strip": "Test strip",
    "language": "Language",
    "offline": "OFFLINE / IMAGES STAY ON THIS DEVICE",
    "share": "Share",
    "copied": "Link copied.",
    "shareError": "Could not copy the link. Copy the address from your browser.",
    "Reglagen öppnades under exponeringen.": "Controls opened during exposure.",
    "Avbruten med Esc.": "Cancelled with Esc.",
    "Fönstret tappade fokus.": "The window lost focus.",
    "Fliken doldes.": "The tab was hidden.",
    "Helskärmsläget avslutades.": "Fullscreen ended.",
    "Skärmytan ändrade storlek.": "The exposure area changed size.",
    "Sidan stängdes.": "The page was closed.",
    "Fliken eller fönstret tappade fokus.": "The page is no longer active.",
    "Exponeringen avbröts efter ett långt avbrott i bildrutorna.": "A long frame stall interrupted the exposure.",
    "Ogiltig fördröjning.": "Invalid start delay.",
    "Ogiltig exponeringstid.": "Invalid exposure time.",
    "rangeFull": "Choose {min}–{max} ms.",
    "keyboardHelp": "Space: expose. C: return after removing the paper."
  },
  "ja": {
    "DIGITAL BILD. ANALOGT PAPPER.": "画面から印画紙へ。",
    "BILDEN STANNAR PÅ DIN ENHET": "画像はこの端末内だけで処理されます",
    "Bild": "画像",
    "Testbild": "テスト画像",
    "Exponeringsyta": "露光範囲",
    "Tryck här för att välja bild": "タップして画像を選択",
    "Släpp en JPG, PNG eller WebP här.": "JPG・PNG・WebPをここにドロップ。",
    "Du kan också börja med testbilden.": "テスト画像でも試せます。",
    "FÖRHANDSVISNING": "画面プレビュー",
    "Ingen bild vald": "画像が選択されていません",
    "Rotation": "回転",
    "Invertera": "白黒反転",
    "Ger en positiv papperskopia": "ポジ画像のプリント用",
    "Spegelvänd": "左右反転",
    "Rättvänd kopia mot skärmen": "画面に密着させたときの向きを補正",
    "Bildljus": "画像の明るさ",
    "Bildstorlek": "画像サイズ",
    "Bilden görs svartvit. Bildljus ändrar bildsignalen; enhetens skärmljusstyrka ställer du separat.": "画像は白黒に変換されます。この調整は画像の明るさです。端末の画面輝度は別途設定してください。",
    "Exponering": "露光",
    "VÄLJ BILD": "画像を選択",
    "EXPONERINGSTID": "露光時間",
    "Fördröjning": "開始までの時間",
    "Tid att placera skärmen mot papperet": "画面を印画紙に重ねるための待ち時間",
    "Ingen": "なし",
    "1 sekund": "1秒",
    "3 sekunder": "3秒",
    "5 sekunder": "5秒",
    "10 sekunder": "10秒",
    "20 sekunder": "20秒",
    "Exponeringssätt": "露光モード",
    "Hel bild": "画像全体",
    "Provremsa · 4 fält": "テストストリップ・4分割",
    "Fyra lika breda fält av bilden. Tiderna räknas från vänster. Håll samma papper stilla hela exponeringen.": "画像を同じ幅の4領域に分けます。露光時間は左から順です。露光中は印画紙を動かさないでください。",
    "Ljudsignaler": "音による合図",
    "nedräkning + klar": "カウントダウン・完了",
    "Tryck och lägg mobilen med skärmen mot papperet under fördröjningen. Efter klarsignalen: lyft mobilen och tryck för att öppna reglagen. Beröringar under nedräkning och exponering ignoreras.": "開始を押し、待ち時間中に画面を印画紙に重ねます。完了音の後、端末を持ち上げてタップすると設定に戻ります。待機中と露光中のタッチ操作は無効です。",
    "Tangentbordsläge": "キーボード操作",
    "Skärmen blir svart.": "画面が黒くなります。",
    "Mellanslag": "スペース",
    "startar exponeringen.": "で露光を開始します。",
    "öppnar reglagen när papperet är borttaget.": "で設定に戻ります。先に印画紙を離してください。",
    "Välj en bild eller prova testbilden.": "画像を選択するか、テスト画像を試してください。",
    "Från skärm till skål": "画面から現像バットへ",
    "På mobilen: välj 5, 10 eller 20 sekunders fördröjning och tryck Exponera om … s. Lägg skärmen mot torrt fotopapper med emulsionssidan mot skärmen. Lyft efter klarsignalen. På datorn kan du använda tangentbordsläget. Framkalla sedan som vanligt.": "スマートフォンでは5秒・10秒・20秒の待ち時間を選び、開始します。乾いた印画紙の乳剤面を画面に向けて重ね、完了音の後に離します。パソコンではキーボード操作も使えます。その後、通常どおり現像してください。",
    "Exponera": "露光する",
    "Avbryt till svart": "中止して黒画面にする",
    "± 50 ms i vänteläget": "待機中に±50 ms",
    "Tillbaka till reglagen": "設定に戻る",
    "På iPhone: öppna appen från hemskärmen för att slippa webbläsarens ljusa fält. Ställ skärmljusstyrkan manuellt och stäng av automatisk ljusstyrka, True Tone och Night Shift för jämförbara prov.": "iPhoneではホーム画面から起動すると、ブラウザの明るいバーを避けられます。条件をそろえるため、画面輝度を手動で固定し、明るさの自動調節・True Tone・Night Shiftをオフにしてください。",
    "Om svartläge och korta tider": "黒画面と短時間露光について",
    "Svart bild stänger inte av LCD-bakbelysningen.": "黒画面でもLCDのバックライトは消えません。",
    "Appen kan inte släcka datorns bildskärm fysiskt. Täck eller släck skärmen mellan pappersbyten och kontrollera slöjning med en provbit. En svart skärm är inte en garanterad mörkrumsslutare.": "アプリで画面の電源を切ることはできません。印画紙を交換するときは画面を覆うか消灯し、試験片でカブリを確認してください。黒画面は暗室用シャッターの代わりとして完全に遮光できるものではありません。",
    "Bildskärmens uppdatering och webbläsaren begränsar tidsprecisionen. Vid 60 Hz är en bildruta ungefär 16,7 ms. Använd provremsor och samma skärminställningar. Byte av flik, tappat fokus eller helskärm samt långa avbrott avbryter en pågående exponering till svart.": "画面の更新周期とブラウザにより時間精度には限界があります。60 Hzでは1フレームは約16.7 msです。同じ画面設定でテストストリップを作ってください。ページが非表示になる、描画が長く止まる、露光範囲が変わると、露光を中止して黒画面に戻ります。キーボード操作ではフォーカスや全画面表示の解除時も中止します。",
    "Senaste exponeringar": "最近の露光",
    "Rensa": "消去",
    "Loggen visar nominell tid och beräknat intervall mellan bildrutorna. Inget ljus mäts.": "履歴には指定時間と描画フレームの間隔を表示します。実際の光量は測定していません。",
    "SKÄRMKOPIA / LOKALT ARBETE": "LAPTOPOGRAM / 端末内で処理",
    "Spara appen för offlinebruk ↓": "オフライン版を保存 ↓",
    "Bild och förhandsvisning": "画像とプレビュー",
    "Välj eller byt bild": "画像を選択・変更",
    "Förberedd bild, visad i samma proportioner som skärmen": "画面と同じ縦横比のプレビュー",
    "Exponeringsinställningar": "露光設定",
    "Förvalda exponeringstider": "露光時間のプリセット",
    "Svart exponeringsläge. Mobil: tryck efter avslut öppnar reglagen. Tangentbord: Mellanslag exponerar, Esc avbryter, C öppnar reglagen.": "黒画面の露光モード。スマートフォン：完了後にタップして設定に戻ります。キーボード：スペースで露光、Escで中止、Cで設定に戻ります。",
    "seconds": "時間を入力",
    "duration": "{value}秒",
    "range": "50〜{max} msで設定してください。",
    "now": "すぐに露光",
    "start": "{n}秒後に露光",
    "portrait": "縦向きの画面",
    "landscape": "横向きの画面",
    "area": "画像範囲 {w} × {h} 画面px",
    "ready": "準備完了",
    "prepared": "画像の準備ができました。待ち時間を選んで露光を開始してください。",
    "fileType": "JPGやPNGなどの画像ファイルを選択してください。",
    "fileError": "画像を開けませんでした。JPG・PNG・WebPをお試しください。",
    "demoName": "テスト画像・階調と線",
    "waiting": "待機中です。画面は黒いままです。",
    "countdown": "{n}秒後に露光します。画面は黒いままです。",
    "exposing": "露光中です。",
    "complete": "露光{n}が完了しました。端末を持ち上げてタップ、またはCキーで設定に戻ります。",
    "aborted": "{reason} 画面は黒くなりました。この露光は無効です。",
    "idle": "黒画面で待機中。スペースで露光、Cで設定に戻ります。",
    "startError": "開始できませんでした。端末を持ち上げてタップし、設定に戻ってください。",
    "logValid": "待ち時間 {delay}秒 · {mode} · 指定 {requested} · 描画 ≈ {actual}",
    "logAbort": "中止 · {reason} この試験片は使用しないでください。",
    "strip": "テストストリップ",
    "language": "言語",
    "offline": "オフライン版 / 画像は端末内で処理",
    "share": "共有",
    "copied": "リンクをコピーしました。",
    "shareError": "リンクをコピーできませんでした。ブラウザのアドレスをコピーしてください。",
    "Reglagen öppnades under exponeringen.": "露光中に設定画面が開かれました。",
    "Avbruten med Esc.": "Escキーで中止しました。",
    "Fönstret tappade fokus.": "ウィンドウがフォーカスを失いました。",
    "Fliken doldes.": "タブが非表示になりました。",
    "Helskärmsläget avslutades.": "全画面表示が解除されました。",
    "Skärmytan ändrade storlek.": "露光範囲のサイズが変わりました。",
    "Sidan stängdes.": "ページが閉じられました。",
    "Fliken eller fönstret tappade fokus.": "ページがアクティブでなくなりました。",
    "Exponeringen avbröts efter ett långt avbrott i bildrutorna.": "描画が長く止まったため露光を中止しました。",
    "Ogiltig fördröjning.": "待ち時間が無効です。",
    "Ogiltig exponeringstid.": "露光時間が無効です。",
    "rangeFull": "{min}〜{max} msで設定してください。",
    "keyboardHelp": "スペース：露光。C：設定に戻る（先に印画紙を離してください）。"
  }
};
const $ = id => document.getElementById(id);
const source = document.createElement('canvas');
const prepared = document.createElement('canvas');
const preview = $('preview');
const exposure = $('exposure');
const sourceContext = source.getContext('2d', { willReadFrequently: true });
const preparedContext = prepared.getContext('2d');
const previewContext = preview.getContext('2d');
const exposureContext = exposure.getContext('2d', { alpha: false });
let language = 'sv';
let currentStatus = null;
let demoActive = false;
let hasImage = false;
let dark = false;
let mobileSession = false;
let armGeneration = 0;
let audioContext;
let wakeLock;
let fullscreenWasActive = false;
let soundGeneration = 0;
let activeSegments = [false];
let startedSettings;
let imageGeneration = 0;
let exposureCount = 0;
const logEntries = [];

const milliseconds = value => `${Math.round(value)} ms`;
const seconds = value => (value / 1000).toLocaleString(language === 'ja' ? 'ja-JP' : language === 'en' ? 'en-GB' : 'sv-SE', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
const t = (key, values = {}) => (translations[language][key] ?? translations.en[key] ?? key).replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ''));
const status = (key, error = false, values = {}) => {
  currentStatus = { key, error, values };
  const range = /^Välj en tid mellan (\d+) och (\d+) ms\./.exec(key);
  $('status').textContent = range ? t('rangeFull', {min: range[1], max: range[2]}) : t(key, values.reason ? {...values, reason: t(values.reason)} : values);
  $('status').classList.toggle('error', error);
};
function applyLanguage(next) {
  if (!translations[next] || dark) return;
  language = next;
  document.documentElement.lang = language;
  $('language').value = language;
  for (const element of document.querySelectorAll('[data-i18n]')) element.textContent = t(element.dataset.i18n);
  for (const element of document.querySelectorAll('[data-i18n-aria]')) element.setAttribute('aria-label', t(element.dataset.i18nAria));
  try { localStorage.setItem('laptopogram-language', language); } catch {}
  updateSettings();
  resizeCanvases();
  if (hasImage) $('readyBadge').textContent = t('ready');
  if (demoActive) $('filename').textContent = t('demoName');
  renderLog();
  if (currentStatus) status(currentStatus.key, currentStatus.error, currentStatus.values);
}

const prefsKey = 'skarmkopia-v1';

function preferences() {
  return { duration: $('duration').value, delay: $('delay').value, mode: $('mode').value, rotation: $('rotation').value, invert: $('invert').checked, mirror: $('mirror').checked, light: $('light').value, scale: $('scale').value, sound: $('sound').checked };
}
function savePreferences() { try { localStorage.setItem(prefsKey, JSON.stringify(preferences())); } catch {} }
function restorePreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(prefsKey) || '{}');
    for (const key of ['duration', 'delay', 'mode', 'rotation', 'light', 'scale']) if (saved[key] !== undefined) $(key).value = saved[key];
    for (const key of ['invert', 'mirror', 'sound']) if (typeof saved[key] === 'boolean') $(key).checked = saved[key];
  } catch {}
}

function updateSettings() {
  const strip = $('mode').value === 'strip';
  const max = strip ? 7500 : 30000;
  $('duration').max = String(max);
  const value = Number($('duration').value);
  $('seconds').textContent = Number.isFinite(value) && value > 0 ? t('duration', {value: seconds(value)}) : t('seconds');
  $('duration').setCustomValidity(value >= 50 && value <= max && Number.isInteger(value) ? '' : t('range', {max}));
  document.querySelectorAll('[data-ms]').forEach(button => {
    const selected = Number(button.dataset.ms) === value;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
    button.textContent = `${(Number(button.dataset.ms) / 1000).toLocaleString(language === 'sv' ? 'sv-SE' : 'en-GB', {maximumFractionDigits: 2})} s`;
  });
  $('lightValue').textContent = `${$('light').value} %`;
  $('scaleValue').textContent = `${$('scale').value} %`;
  $('stripGuide').hidden = !strip;
  if (strip) {
    $('stripTimes').replaceChildren();
    for (const multiple of [1, 2, 3, 4]) {
      const element = document.createElement('span');
      element.textContent = `${seconds(value * multiple)} s`;
      $('stripTimes').append(element);
    }
  }
  const delaySeconds = Number($('delay').value) / 1000;
  $('mobileStartLabel').textContent = delaySeconds === 0 ? t('now') : t('start', {n: Number.isFinite(delaySeconds) ? delaySeconds : 10});
  savePreferences();
}

function resizeCanvases() {
  const ratio = Math.min(devicePixelRatio || 1, 2);
  const screenRatio = window.innerWidth / window.innerHeight;
  $('dropzone').style.setProperty('--screen-ratio', String(screenRatio));
  $('screenFormat').textContent = `${t(screenRatio < 1 ? 'portrait' : 'landscape')} · ${window.innerWidth} × ${window.innerHeight}`;
  const rect = $('dropzone').getBoundingClientRect();
  preview.width = Math.max(1, Math.round(rect.width * ratio));
  preview.height = Math.max(1, Math.round(rect.height * ratio));
  exposure.width = Math.round(window.innerWidth * ratio);
  exposure.height = Math.round(window.innerHeight * ratio);
  drawPreview();
  paintExposure(activeSegments);
}

function drawImageArea(context, width, height, active = [true]) {
  context.fillStyle = '#000';
  context.fillRect(0, 0, width, height);
  if (!hasImage) return;
  const frame = fitImage(width, height, prepared.width, prepared.height, Number($('scale').value) / 100);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';
  const count = active.length;
  for (let i = 0; i < count; i++) {
    if (!active[i]) continue;
    context.save();
    context.beginPath();
    context.rect(frame.x + frame.width * i / count, frame.y, frame.width / count, frame.height);
    context.clip();
    context.drawImage(prepared, frame.x, frame.y, frame.width, frame.height);
    context.restore();
  }
}

function drawPreview() {
  previewContext.fillStyle = '#10110f';
  previewContext.fillRect(0, 0, preview.width, preview.height);
  if (!hasImage) return;
  const virtual = { x: 0, y: 0, width: preview.width, height: preview.height };
  previewContext.save();
  previewContext.translate(virtual.x, virtual.y);
  drawImageArea(previewContext, virtual.width, virtual.height);
  if ($('mode').value === 'strip') {
    const frame = fitImage(virtual.width, virtual.height, prepared.width, prepared.height, Number($('scale').value) / 100);
    previewContext.strokeStyle = '#bc6042';
    previewContext.lineWidth = Math.max(1, preview.width / 650);
    for (const i of [1, 2, 3]) {
      previewContext.beginPath();
      const x = frame.x + frame.width * i / 4;
      previewContext.moveTo(x, frame.y);
      previewContext.lineTo(x, frame.y + frame.height);
      previewContext.stroke();
    }
  }
  previewContext.restore();
  const screen = fitImage(window.innerWidth, window.innerHeight, prepared.width, prepared.height, Number($('scale').value) / 100);
  $('dimensions').textContent = t('area', {w: Math.round(screen.width), h: Math.round(screen.height)});
}

function prepareImage() {
  if (!hasImage) return;
  const rotated = $('rotation').value === '90';
  const buffer = document.createElement('canvas');
  buffer.width = source.width;
  buffer.height = source.height;
  const pixels = sourceContext.getImageData(0, 0, source.width, source.height);
  processPixels(pixels.data, { invert: $('invert').checked, light: Number($('light').value) });
  buffer.getContext('2d').putImageData(pixels, 0, 0);
  prepared.width = rotated ? source.height : source.width;
  prepared.height = rotated ? source.width : source.height;
  preparedContext.save();
  // Mirror the final orientation, so the paper print reads correctly.
  if ($('mirror').checked) {
    preparedContext.translate(prepared.width, 0);
    preparedContext.scale(-1, 1);
  }
  if (rotated) {
    preparedContext.translate(prepared.width, 0);
    preparedContext.rotate(Math.PI / 2);
  }
  preparedContext.drawImage(buffer, 0, 0);
  preparedContext.restore();
  drawPreview();
}

function imageReady(filename) {
  hasImage = true;
  $('filename').textContent = filename;
  $('empty').hidden = true;
  $('arm').disabled = false;
  $('mobileStart').disabled = false;
  $('readyBadge').textContent = t('ready');
  $('readyBadge').classList.add('ready');
  prepareImage();
  status('prepared');
}

async function loadFile(file) {
  if (!file || dark) return;
  const generation = ++imageGeneration;
  if (!file.type.startsWith('image/')) { status('fileType', true); return; }
  const url = URL.createObjectURL(file);
  const image = new Image();
  try {
    image.src = url;
    await image.decode();
    if (generation !== imageGeneration) return;
    const factor = Math.min(1, 4096 / Math.max(image.naturalWidth, image.naturalHeight));
    source.width = Math.max(1, Math.round(image.naturalWidth * factor));
    source.height = Math.max(1, Math.round(image.naturalHeight * factor));
    sourceContext.drawImage(image, 0, 0, source.width, source.height);
    demoActive = false;
    imageReady(file.name);
  } catch { status('fileError', true); }
  finally { URL.revokeObjectURL(url); $('file').value = ''; }
}

function loadDemo() {
  ++imageGeneration;
  source.width = 1600;
  source.height = 1000;
  sourceContext.fillStyle = '#f4f3ef';
  sourceContext.fillRect(0, 0, 1600, 1000);
  sourceContext.fillStyle = '#222';
  sourceContext.font = 'bold 45px Arial';
  sourceContext.fillText('LAPTOPOGRAM / TONES & FORM', 100, 120);
  for (let i = 0; i < 11; i++) {
    sourceContext.fillStyle = `rgb(${i * 25.5},${i * 25.5},${i * 25.5})`;
    sourceContext.fillRect(100 + i * 127, 180, 128, 300);
    sourceContext.fillStyle = '#222';
    sourceContext.font = '24px monospace';
    sourceContext.fillText(`${i * 10}%`, 112 + i * 127, 525);
  }
  for (let i = 0; i < 14; i++) {
    sourceContext.strokeStyle = '#222';
    sourceContext.lineWidth = 2;
    sourceContext.beginPath();
    sourceContext.arc(370, 750, 20 + i * 10, 0, Math.PI * 2);
    sourceContext.stroke();
    sourceContext.fillStyle = i % 2 === 0 ? '#222' : '#e6e5dd';
    sourceContext.fillRect(690 + i * 25, 600, 25, 270);
  }
  sourceContext.fillStyle = '#222';
  sourceContext.font = '24px monospace';
  sourceContext.fillText('A B C / 1 2 3 /  ← LEFT', 100, 950);
  demoActive = true;
  imageReady(t('demoName'));
}

async function initAudio() {
  if (!$('sound').checked) return;
  try {
    audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') await audioContext.resume();
  } catch { /* Exposure must also work without sound. */ }
}

function beep(frequency = 600, length = 0.07, offset = 0) {
  if (!$('sound').checked || !audioContext || audioContext.state !== 'running') return;
  const start = audioContext.currentTime + offset;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(0.055, start + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.001, start + length);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + length + 0.02);
}


function paintExposure(active) {
  activeSegments = active;
  if (dark) drawImageArea(exposureContext, exposure.width, exposure.height, active);
  else {
    exposureContext.fillStyle = '#000';
    exposureContext.fillRect(0, 0, exposure.width, exposure.height);
  }
}

function addLog(result) {
  const stamp = new Date().toLocaleTimeString(language === 'ja' ? 'ja-JP' : language === 'en' ? 'en-GB' : 'sv-SE', { hour: '2-digit', minute: '2-digit' });
  logEntries.unshift({ ...result, time: stamp, strip: startedSettings?.strip, delay: startedSettings?.delay });
  logEntries.splice(8);
  renderLog();
}
function renderLog() {
  $('log').replaceChildren();
  $('logEmpty').hidden = logEntries.length > 0;
  for (const entry of logEntries) {
    const item = document.createElement('li');
    item.classList.toggle('invalid', !entry.valid);
    const time = document.createElement('span');
    time.textContent = entry.time;
    const description = document.createElement('span');
    description.textContent = entry.valid
      ? t('logValid', {delay: Math.round((entry.delay || 0) / 1000), mode: t(entry.strip ? 'strip' : 'Hel bild'), requested: entry.requested.map(milliseconds).join(' / '), actual: entry.frameDurations.map(milliseconds).join(' / ')})
      : t('logAbort', {reason: t(entry.reason)});
    item.append(time, description);
    $('log').append(item);
  }
}

const timer = new ExposureTimer({
  requestFrame: callback => requestAnimationFrame(callback),
  cancelFrame: id => cancelAnimationFrame(id),
  allowed: () => dark && !document.hidden && (mobileSession || document.hasFocus()),
  onFrame: paintExposure,
  onCountdown: remaining => {
    status('countdown', false, {n: remaining});
    beep(440, 0.05);
  },
  onPhase: phase => {
    if (phase === 'waiting') status('waiting');
    if (phase === 'exposing') { ++soundGeneration; status('exposing'); beep(800, 0.035); }
  },
  onFinish: result => {
    ++soundGeneration;
    addLog(result);
    if (result.valid) {
      exposureCount++;
      status('complete', false, {n: exposureCount});
      beep(660, 0.08);
      beep(880, 0.08, 0.14);
    } else {
      status('aborted', true, {reason: result.reason});
      beep(220, 0.16);
    }
  }
});

async function arm(autoStart = false) {
  if (dark || !hasImage) return;
  if (!$('duration').checkValidity()) { $('duration').reportValidity(); return; }
  const generation = ++armGeneration;
  mobileSession = autoStart;
  dark = true;
  fullscreenWasActive = false;
  activeSegments = [false];
  $('darkroom').hidden = false;
  document.body.classList.add('is-dark');
  $('controls').inert = true;
  resizeCanvases();
  $('darkroom').focus({ preventScroll: true });
  void initAudio();
  status('idle');
  // Optional browser APIs must never hold up the mobile countdown. Mobile
  // fullscreen also produces a browser overlay, so reserve it for keyboard mode.
  if (autoStart) {
    startExposure();
    requestWakeLock(generation);
    return;
  }
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
    fullscreenWasActive = !!document.fullscreenElement;
  } catch { /* Black mode remains usable without fullscreen. */ }
  if (!dark || generation !== armGeneration) return;
  resizeCanvases();
  requestWakeLock(generation);
}

function requestWakeLock(generation) {
  if (!navigator.wakeLock) return;
  try {
    Promise.resolve(navigator.wakeLock.request('screen')).then(lock => {
      if (dark && generation === armGeneration) wakeLock = lock;
      else void lock.release();
    }).catch(() => {});
  } catch { /* An unsupported wake lock must not prevent exposure. */ }
}

async function showControls() {
  if (!dark) return;
  ++armGeneration;
  timer.abort('Reglagen öppnades under exponeringen.', performance.now());
  ++soundGeneration;
  paintExposure([false]);
  dark = false;
  mobileSession = false;
  $('darkroom').hidden = true;
  $('controls').inert = false;
  document.body.classList.remove('is-dark');
  try { await wakeLock?.release(); } catch {}
  wakeLock = null;
  if (document.fullscreenElement) { try { await document.exitFullscreen(); } catch {} }
  resizeCanvases();
  $('arm').focus({ preventScroll: true });
}

function startExposure() {
  if (!dark || timer.running || !hasImage) return;
  try {
    const strip = $('mode').value === 'strip';
    const durations = exposureDurations($('duration').value, strip);
    const delay = Number($('delay').value);
    startedSettings = { strip, delay: Number.isFinite(delay) ? delay : 10000 };
    void initAudio();
    if (!timer.start({ durations, delay: startedSettings.delay }, performance.now())) status('startError', true);
  } catch (error) { status(error.message, true); beep(220, 0.16); }
}

function adjustTime(direction) {
  if (timer.running) return;
  const max = $('mode').value === 'strip' ? 7500 : 30000;
  $('duration').value = String(Math.min(max, Math.max(50, Number($('duration').value) + direction * 50)));
  updateSettings();
  if (dark) beep(direction > 0 ? 700 : 400, 0.035);
}

$('language').addEventListener('change', () => applyLanguage($('language').value));
$('share').addEventListener('click', async () => {
  const url = 'https://ikonta.github.io/laptopogram/';
  try {
    if (navigator.share) await navigator.share({title: 'Laptopogram', url});
    else { await navigator.clipboard.writeText(url); status('copied'); }
  } catch (error) { if (error.name !== 'AbortError') status('shareError', true); }
});
$('dropzone').addEventListener('click', () => { if (!dark) $('file').click(); });
$('file').addEventListener('change', event => void loadFile(event.target.files[0]));
$('demo').addEventListener('click', loadDemo);
$('arm').addEventListener('click', () => void arm());
$('mobileStart').addEventListener('click', () => void arm(true));
$('clearLog').addEventListener('click', () => { logEntries.splice(0); renderLog(); });
for (const button of document.querySelectorAll('[data-ms]')) button.addEventListener('click', () => { $('duration').value = button.dataset.ms; updateSettings(); });
for (const id of ['duration', 'delay', 'sound']) {
  $(id).addEventListener('input', updateSettings);
  $(id).addEventListener('change', updateSettings);
}
for (const id of ['invert', 'mirror', 'light', 'rotation']) $(id).addEventListener('input', () => { updateSettings(); prepareImage(); });
for (const id of ['scale', 'mode']) $(id).addEventListener('input', () => { updateSettings(); drawPreview(); });

for (const type of ['dragenter', 'dragover']) $('dropzone').addEventListener(type, event => { event.preventDefault(); $('dropzone').classList.add('dragover'); });
for (const type of ['dragleave', 'drop']) $('dropzone').addEventListener(type, event => { event.preventDefault(); $('dropzone').classList.remove('dragover'); });
$('dropzone').addEventListener('drop', event => void loadFile(event.dataTransfer.files[0]));
$('darkroom').addEventListener('click', () => {
  if (!mobileSession) return;
  // Placement against paper must not cancel the countdown or the exposure.
  if (!timer.running) void showControls();
});
$('darkroom').addEventListener('dblclick', () => { if (!mobileSession && !timer.running) void showControls(); });

window.addEventListener('keydown', event => {
  if (event.ctrlKey || event.metaKey || event.altKey || event.isComposing) return;
  if (dark) {
    if (['Space', 'Escape', 'KeyC', 'ArrowUp', 'ArrowDown', 'Tab'].includes(event.code)) event.preventDefault();
    if (event.code === 'Escape') { timer.abort('Avbruten med Esc.', performance.now()); paintExposure([false]); return; }
    if (event.repeat) return;
    if (event.code === 'Space') startExposure();
    if (event.code === 'KeyC') void showControls();
    if (event.code === 'ArrowUp') adjustTime(1);
    if (event.code === 'ArrowDown') adjustTime(-1);
    return;
  }
  if (event.target.closest?.('input,select,textarea,[contenteditable="true"]')) return;
  if (event.repeat) return;
  if (event.code === 'KeyF') { event.preventDefault(); void arm(); }
});
window.addEventListener('blur', () => { if (dark && !mobileSession) { timer.abort('Fönstret tappade fokus.', performance.now()); paintExposure([false]); } });
document.addEventListener('visibilitychange', () => { if (document.hidden && dark) { timer.abort('Fliken doldes.', performance.now()); paintExposure([false]); } });
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) fullscreenWasActive = true;
  else if (dark && fullscreenWasActive) { timer.abort('Helskärmsläget avslutades.', performance.now()); paintExposure([false]); }
  if (dark) $('darkroom').focus({ preventScroll: true });
  resizeCanvases();
});
window.addEventListener('resize', () => {
  if (timer.running && timer.phase === 'exposing') timer.abort('Skärmytan ändrade storlek.', performance.now());
  resizeCanvases();
});
window.addEventListener('pagehide', () => { timer.abort('Sidan stängdes.', performance.now()); paintExposure([false]); });

restorePreferences();
let savedLanguage;
try { savedLanguage = localStorage.getItem('laptopogram-language'); } catch {}
const browserLanguage = (navigator.languages?.[0] || navigator.language || 'en').split('-')[0];
applyLanguage(translations[savedLanguage] ? savedLanguage : translations[browserLanguage] ? browserLanguage : 'en');
