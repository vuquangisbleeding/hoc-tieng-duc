/* Lộ trình 0 → A2 · Tháng 3 (tuần 9–13) — A1.3 Ra ngoài và thi A1. Cú pháp: xem course-data.js */
window.COURSE_M3=`
#M 3 | A1.3 – Ra ngoài và thi A1 | Sở thích và hẹn hò, nhà ở, thành phố và chỉ đường, giao thông, kể cuối tuần; tuần 13 ôn tập và thi thử A1. Ngữ pháp: động từ khuyết thiếu (können, wollen, müssen) và khung câu, es gibt, giới từ + cách 3, mệnh lệnh với Sie, Perfekt với haben.
#W 9 | Thời gian rảnh & hẹn hò | Hẹn một buổi đi chơi qua điện thoại: rủ, nhận lời hoặc từ chối.
#W 10 | Nhà ở | Tả căn hộ của mình 8 câu: phòng, đồ đạc, đồ ở đâu.
#W 11 | Thành phố & chỉ đường | Chỉ đường từ nhà đến ga; hỏi việc ở bưu điện và cơ quan.
#W 12 | Giao thông & cuối tuần vừa qua | Mua vé, hỏi giờ tàu; kể cuối tuần vừa rồi 8 câu (Perfekt).
#W 13 | Ôn tập A1 & thi thử | Thi thử A1 đủ 4 kỹ năng, mỗi phần ≥ 60%.

## 9.1 Sở thích
goal: Nói sở thích của mình và hỏi sở thích người khác.
nico: 48
i: Lena | Was machst du gern in deiner Freizeit? | Lúc rảnh bạn thích làm gì?
i: Felix | Ich spiele gern Fußball und ich höre gern Musik. | Mình thích đá bóng và nghe nhạc.
i: Lena | Ich tanze gern. Und am Wochenende gehe ich oft wandern. | Mình thích nhảy. Cuối tuần mình hay đi leo núi.
i: Felix | Wandern? Das mache ich nicht so gern. | Leo núi à? Mình không thích lắm.
iq: Felix thích làm gì? | đá bóng và nghe nhạc | nhảy | leo núi
iq: Lena hay làm gì cuối tuần? | đi leo núi | đá bóng | xem phim
iq: Felix có thích leo núi không? | không thích lắm | rất thích | thích nhất
words: Freizeit; Hobby; spielen; Fußball; schwimmen; tanzen; singen; fotografieren; wandern; Sport; Spaß
g: <b>Hỏi sở thích:</b> Was machst du gern (in deiner Freizeit)? / Was ist dein Hobby? → Ich + động từ + <b>gern</b> … · Mein Hobby ist Fotografieren.
g: <b>spielen</b> + môn/nhạc cụ: Fußball spielen, Gitarre spielen. Đi làm hoạt động: <b>gehen</b> + động từ nguyên mẫu ở cuối: Ich gehe gern schwimmen / wandern / tanzen.
gt: Câu | Nghĩa
gt: Ich spiele gern Fußball. | Tôi thích đá bóng.
gt: Ich gehe oft schwimmen. | Tôi hay đi bơi.
gt: Das macht Spaß! | Vui lắm!
g: <b>Lỗi hay gặp:</b> "Ich gehe schwimmen gern" (đúng: Ich gehe gern schwimmen); "Ich mache Fußball" (đúng: Ich spiele Fußball).
gx: fmc: Ich ___ gern Fußball. | spiele | mache | gehe
gx: fmc: Am Samstag gehe ich ___. | schwimmen | schwimme | Schwimmen gehen
gx: fmc: Was machst du gern in ___ Freizeit? | deiner | dein | du
gx: fmc: Ich gehe ___ tanzen. | gern | gern zu | zu gern
gx: fmc: Fußball ___ Spaß! | macht | ist | hat
x: ord: Ich spiele gern Fußball. | Tôi thích đá bóng.
x: ord: Am Wochenende gehe ich oft wandern. | Cuối tuần tôi hay đi leo núi.
x: ord: Was machst du gern in deiner Freizeit? | Lúc rảnh bạn thích làm gì?
x: lmc: Ich fotografiere sehr gern. | 📷 chụp ảnh | 🎤 hát | 🏊 bơi
x: lmc: Meine Schwester singt gern. | 🎤 hát | 💃 nhảy | ⚽ đá bóng
x: lmc: Wir gehen am Sonntag schwimmen. | 🏊 đi bơi | 🥾 leo núi | 💃 đi nhảy
x: lmc: Tanzen macht mir keinen Spaß. | không thích nhảy | rất thích nhảy | nhảy giỏi
x: tr: Lúc rảnh bạn thích làm gì? | Was machst du gern in deiner Freizeit? / Was machst du gern?
x: tr: Tôi thích nghe nhạc. | Ich höre gern Musik.
x: tr: Vui lắm! | Das macht Spaß!
x: fill: Mein ___ ist Fotografieren. (sở thích) | Hobby
x: fill: Ich gehe gern ___. (leo núi) | wandern
lt: Làm quen ở câu lạc bộ
l: Anna | Was machst du in deiner Freizeit, Tom? | Lúc rảnh Tom làm gì?
l: Tom | Ich spiele Gitarre und ich fotografiere gern. Und du? | Mình chơi ghi-ta và thích chụp ảnh. Còn bạn?
l: Anna | Ich mache viel Sport. Ich schwimme zweimal pro Woche. | Mình chơi thể thao nhiều. Mình bơi hai lần một tuần.
l: Tom | Toll! Schwimmen macht mir keinen Spaß, das Wasser ist immer so kalt. | Tuyệt! Mình không thích bơi, nước lúc nào cũng lạnh quá.
lq: Tom có sở thích gì? | chơi ghi-ta và chụp ảnh | bơi | đá bóng
lq: Anna bơi bao lâu một lần? | 2 lần/tuần | mỗi ngày | 1 lần/tuần
lq: Tại sao Tom không thích bơi? | nước lạnh | không biết bơi | không có thời gian
ld: Ich spiele Gitarre und ich fotografiere gern.
rt: Hồ sơ trên ứng dụng làm quen
r: | Hallo, ich bin Mia, 24, aus Köln. Meine Hobbys: Tanzen, Kochen und Reisen. Ich gehe gern ins Kino, aber ich mache nicht gern Sport. | Chào, mình là Mia, 24 tuổi, ở Köln. Sở thích: nhảy, nấu ăn và du lịch. Mình thích đi xem phim, nhưng không thích chơi thể thao.
rq: Mia thích chơi thể thao. | F
rq: Mia thích nấu ăn. | R
rq: Mia sống ở Köln. | R
t: Lena | Was machst du gern in deiner Freizeit? | Lúc rảnh bạn thích làm gì?
t: Felix | Ich spiele gern Fußball und ich höre gern Musik. | Mình thích đá bóng và nghe nhạc.
t: Lena | Gehst du auch gern schwimmen? | Bạn có thích đi bơi không?
t: Felix | Nein, nicht so gern. Und du? Was ist dein Hobby? | Không thích lắm. Còn bạn? Sở thích của bạn là gì?
t: Lena | Ich tanze gern. Das macht Spaß! | Mình thích nhảy. Vui lắm!
w: Viết 4 câu về sở thích của bạn (một câu có "gehe … gern …", một câu "macht Spaß"). | Ich spiele gern Badminton. Ich höre gern Musik. Am Wochenende gehe ich gern schwimmen. Fotografieren macht mir Spaß. | gern, Spaß

## 9.2 können
goal: Nói mình biết/có thể làm gì và không làm được gì (können + khung câu).
nico: 48,35
i: Tom | Kannst du Gitarre spielen, Felix? | Felix biết chơi ghi-ta không?
i: Felix | Nein, leider nicht. Aber ich kann gut kochen. | Không, tiếc là không. Nhưng mình nấu ăn giỏi.
i: Tom | Super! Kannst du am Samstag für uns kochen? | Tuyệt! Thứ Bảy bạn nấu cho bọn mình được không?
i: Felix | Ja, natürlich kann ich das. | Được chứ, tất nhiên rồi.
iq: Felix có biết chơi ghi-ta không? | không | có | một chút
iq: Felix giỏi làm gì? | nấu ăn | chơi ghi-ta | hát
iq: Thứ Bảy Felix làm gì? | nấu ăn cho bạn | chơi ghi-ta | đi làm
words: können; Gitarre; Klavier; Schach; Ski fahren; Fahrrad fahren; leider; natürlich; gar nicht
+w: n | die | Gitarre | die Gitarren | đàn ghi-ta | Ich spiele [Gitarre]. | Tôi chơi ghi-ta.
+w: n | das | Klavier | die Klaviere | đàn piano | Kannst du [Klavier] spielen? | Bạn biết chơi piano không?
+w: n | das | Schach | — | cờ vua | Wir spielen [Schach]. | Chúng tôi chơi cờ vua.
+w: phr | - | Ski fahren | | trượt tuyết | Kannst du [Ski fahren]? | Bạn biết trượt tuyết không?
+w: phr | - | Fahrrad fahren | | đi xe đạp | Ich kann gut [Fahrrad fahren]. | Tôi đi xe đạp giỏi.
+w: phr | - | gar nicht | | hoàn toàn không | Ich kann [gar nicht] singen. | Tôi hoàn toàn không biết hát.
g: <b>können</b> (biết, có thể) là động từ khuyết thiếu: ich <b>kann</b>, du <b>kannst</b>, er <b>kann</b>, wir können, ihr könnt, Sie können (ich và er giống nhau, không có -t).
g: <b>Khung câu:</b> können ở vị trí 2, động từ chính ở <b>nguyên mẫu, cuối câu</b>.
gt: Vị trí 1 | Vị trí 2 | Giữa | Cuối câu
gt: Ich | kann | gut | kochen.
gt: Am Samstag | kann | ich nicht | kommen.
gt: Kannst | du | Gitarre | spielen?
g: Mức độ: sehr gut · gut · ein bisschen · nicht so gut · gar nicht. <b>Lỗi hay gặp:</b> "Ich kann spiele Gitarre", "Ich kann Gitarre spielen gut".
gx: fmc: Ich ___ gut schwimmen. | kann | kannst | könnt
gx: fmc: ___ du Klavier spielen? | Kannst | Kann | Könnt
gx: fmc: Er ___ nicht Ski fahren. | kann | kannt | kannst
gx: fmc: Ich kann gut ___. | kochen | koche | kocht
gx: fmc: Wir ___ am Samstag nicht kommen. | können | kann | könnt
gx: ord: Kannst du Gitarre spielen? | Bạn biết chơi ghi-ta không?
x: ord: Ich kann sehr gut kochen. | Tôi nấu ăn rất giỏi.
x: ord: Am Sonntag kann ich nicht kommen. | Chủ nhật tôi không đến được.
x: ord: Lena kann ein bisschen Klavier spielen. | Lena biết chơi piano một chút.
x: ty: Viết lại với können | Ich spiele Schach. | Ich kann Schach spielen.
x: ty: Viết lại với können | Tom fährt Ski. | Tom kann Ski fahren.
x: ty: Viết lại với können | Singst du? (câu hỏi) | Kannst du singen?
x: fill: Ihr ___ gut tanzen! | könnt
x: fill: Ich kann ___ singen. (hoàn toàn không) | gar nicht
x: tr: Tôi không biết bơi. | Ich kann nicht schwimmen.
x: tr: Bạn biết đi xe đạp không? | Kannst du Fahrrad fahren?
x: lmc: Ich kann leider nicht schwimmen. | không biết bơi | bơi giỏi | thích bơi
x: lmc: Kannst du morgen kommen? | ngày mai đến được không | hôm nay đến được không | có thích đến không
x: lmc: Lena kann sehr gut Englisch sprechen. | nói tiếng Anh rất giỏi | nói tiếng Anh một chút | không nói tiếng Anh
lt: Chuẩn bị bữa tiệc
l: Lena | Wir machen am Samstag eine Party. Wer kann Musik machen? | Thứ Bảy bọn mình tổ chức tiệc. Ai có thể chơi nhạc?
l: Tom | Ich kann Gitarre spielen. | Mình chơi ghi-ta được.
l: Lena | Super! Und Anna, kannst du einen Kuchen backen? | Tuyệt! Còn Anna, bạn làm bánh được không?
l: Anna | Ich kann gar nicht backen. Aber ich kann Getränke kaufen. | Mình hoàn toàn không biết làm bánh. Nhưng mình có thể mua đồ uống.
lq: Bữa tiệc vào ngày nào? | thứ Bảy | Chủ nhật | thứ Sáu
lq: Tom làm gì cho bữa tiệc? | chơi ghi-ta | làm bánh | mua đồ uống
lq: Anna làm gì? | mua đồ uống | làm bánh | chơi nhạc
ld: Ich kann gar nicht backen.
rt: Tin rao tìm người
r: Anzeige | Band sucht Musiker! Kannst du Gitarre oder Klavier spielen? Kannst du gut singen? Wir proben jeden Freitag um 19 Uhr. Ruf an: 0157 228 41 | Ban nhạc tìm người! Bạn biết chơi ghi-ta hoặc piano? Bạn hát hay? Bọn mình tập mỗi thứ Sáu lúc 19 giờ. Gọi: 0157 228 41
rq: Ban nhạc tìm người chơi trống. | F
rq: Họ tập vào thứ Sáu. | R
rq: Người biết hát hay cũng có thể gọi. | R
t: Tom | Kannst du Gitarre spielen? | Bạn biết chơi ghi-ta không?
t: Felix | Nein, leider nicht. Aber ich kann gut kochen. | Không, tiếc là không. Nhưng mình nấu ăn giỏi.
t: Tom | Kannst du am Samstag für uns kochen? | Thứ Bảy bạn nấu cho bọn mình được không?
t: Felix | Ja, natürlich. Am Samstag kann ich kochen. | Được chứ. Thứ Bảy mình nấu được.
ans: Was können Sie gut? | Ich kann gut kochen und ein bisschen Gitarre spielen. | kann | Dùng können, động từ chính ở cuối câu.
w: Viết 3 câu: 2 việc bạn làm được và 1 việc bạn không làm được (können). | Ich kann gut kochen. Ich kann ein bisschen Klavier spielen. Ich kann nicht Ski fahren. | kann

## 9.3 wollen, müssen
goal: Nói việc mình muốn làm và việc phải làm.
nico: 34
i: Lena | Willst du heute Abend ins Kino gehen? | Tối nay bạn muốn đi xem phim không?
i: Felix | Ich will gern, aber ich kann nicht. Ich muss lernen. | Mình muốn lắm, nhưng không đi được. Mình phải học.
i: Lena | Warum? | Tại sao?
i: Felix | Morgen habe ich eine Prüfung. Und ich muss früh aufstehen. | Mai mình có bài thi. Và mình phải dậy sớm.
iq: Lena rủ Felix đi đâu? | xem phim | ăn tối | đi bơi
iq: Tại sao Felix không đi được? | phải học | bị ốm | phải làm việc
iq: Ngày mai Felix có gì? | bài thi | buổi hẹn | đi làm sớm
words: wollen; müssen; lernen; Prüfung; Hausaufgabe; heute Abend; aufräumen; Arzt; Termin; warum
+w: phr | - | heute Abend | | tối nay | [Heute Abend] muss ich lernen. | Tối nay tôi phải học.
+w: v | - | aufräumen | | dọn dẹp | Ich muss mein Zimmer [aufräumen]. | Tôi phải dọn phòng.
g: <b>wollen</b> (muốn — ý định mạnh): ich <b>will</b>, du <b>willst</b>, er <b>will</b>, wir wollen, ihr wollt, Sie wollen. <b>müssen</b> (phải): ich <b>muss</b>, du <b>musst</b>, er <b>muss</b>, wir müssen, ihr müsst, Sie müssen.
g: Giống können: động từ chính <b>nguyên mẫu ở cuối câu</b>. Động từ tách không tách nữa: Ich muss früh <b>aufstehen</b>.
gt: | ich | du | er/sie | wir
gt: können | kann | kannst | kann | können
gt: wollen | will | willst | will | wollen
gt: müssen | muss | musst | muss | müssen
g: <b>Lỗi hay gặp:</b> "ich wille", "er musst"; "Ich muss früh stehe auf" (đúng: Ich muss früh aufstehen). <b>will</b> không phải "sẽ" như tiếng Anh "will".
gx: fmc: Ich ___ heute lernen. (phải) | muss | musst | müsst
gx: fmc: ___ du ins Kino gehen? (muốn) | Willst | Will | Wollt
gx: fmc: Er ___ einen Termin beim Arzt machen. | muss | müsst | musst
gx: fmc: Ich muss morgen früh ___. | aufstehen | stehe auf | auf stehen
gx: fmc: Wir ___ am Wochenende wandern. (muốn) | wollen | will | wollt
gx: fmc: ___ musst du lernen? – Ich habe eine Prüfung. | Warum | Wann | Wo
x: ord: Ich muss heute Abend lernen. | Tối nay tôi phải học.
x: ord: Willst du mit ins Kino kommen? | Bạn muốn đi xem phim cùng không?
x: ord: Morgen muss ich früh aufstehen. | Mai tôi phải dậy sớm.
x: ty: Viết lại với müssen | Ich räume mein Zimmer auf. | Ich muss mein Zimmer aufräumen.
x: ty: Viết lại với wollen | Wir fahren nach Berlin. | Wir wollen nach Berlin fahren.
x: ty: Viết lại với müssen | Du machst die Hausaufgaben. | Du musst die Hausaufgaben machen.
x: fill: Ihr ___ jetzt nach Hause gehen. (phải) | müsst
x: fill: Lena ___ Ärztin werden. (muốn) | will
x: tr: Tôi phải làm việc. | Ich muss arbeiten.
x: tr: Bạn muốn uống gì? | Was willst du trinken?
x: lmc: Ich muss heute arbeiten. | phải làm việc | muốn làm việc | được nghỉ
x: lmc: Tom will Deutsch lernen. | muốn học tiếng Đức | phải học tiếng Đức | đã học tiếng Đức
x: lmc: Wir müssen um sechs Uhr aufstehen. | phải dậy lúc 6 giờ | muốn dậy lúc 6 giờ | ngủ lúc 6 giờ
lt: Kế hoạch cuối tuần
l: Anna | Was willst du am Wochenende machen? | Cuối tuần bạn muốn làm gì?
l: Tom | Ich will wandern gehen. Aber zuerst muss ich meine Wohnung aufräumen. | Mình muốn đi leo núi. Nhưng trước tiên phải dọn nhà.
l: Anna | Ich muss am Samstag arbeiten. Am Sonntag will ich nur schlafen! | Mình phải làm việc thứ Bảy. Chủ nhật mình chỉ muốn ngủ!
lq: Tom muốn làm gì? | đi leo núi | ngủ | làm việc
lq: Trước tiên Tom phải làm gì? | dọn nhà | đi chợ | làm việc
lq: Chủ nhật Anna muốn làm gì? | ngủ | đi leo núi | làm việc
ld: Zuerst muss ich meine Wohnung aufräumen.
rt: Danh sách việc cần làm
r: | Heute muss ich: Hausaufgaben machen, einkaufen, Mama anrufen. Am Wochenende will ich: ins Kino gehen, schwimmen, lange schlafen! | Hôm nay tôi phải: làm bài tập, đi chợ, gọi điện cho mẹ. Cuối tuần tôi muốn: đi xem phim, đi bơi, ngủ thật lâu!
rq: Hôm nay phải gọi điện cho mẹ. | R
rq: Hôm nay muốn đi bơi. | F
rq: Cuối tuần muốn ngủ lâu. | R
t: Lena | Willst du heute Abend ins Kino gehen? | Tối nay bạn muốn đi xem phim không?
t: Felix | Ich will gern, aber ich muss lernen. | Mình muốn lắm, nhưng mình phải học.
t: Lena | Warum? | Tại sao?
t: Felix | Morgen habe ich eine Prüfung. Ich muss auch früh aufstehen. | Mai mình có bài thi. Mình cũng phải dậy sớm.
t: Lena | Schade! Viel Glück! | Tiếc quá! Chúc may mắn!
w: Viết 4 câu: 2 việc bạn phải làm tuần này, 2 việc bạn muốn làm. | Ich muss viel arbeiten. Ich muss einkaufen. Am Samstag will ich schwimmen gehen. Ich will meine Freunde treffen. | muss, will

## 9.4 Rủ đi chơi, nhận lời và từ chối
goal: Rủ ai đó đi chơi, hẹn giờ và chỗ; nhận lời hoặc từ chối lịch sự.
nico: 34,35
i: Felix | Hast du am Samstag Zeit? Wollen wir ins Konzert gehen? | Thứ Bảy bạn rảnh không? Mình đi xem hoà nhạc nhé?
i: Lena | Am Samstag kann ich leider nicht. Ich muss arbeiten. Und am Sonntag? | Thứ Bảy tiếc là mình không đi được. Mình phải làm việc. Chủ nhật thì sao?
i: Felix | Sonntag ist gut. Treffen wir uns um sieben vor dem Konzerthaus? | Chủ nhật được. Mình gặp nhau lúc 7 giờ trước nhà hát nhé?
i: Lena | Gute Idee! Bis Sonntag! | Ý hay! Hẹn Chủ nhật!
iq: Felix rủ Lena đi đâu? | xem hoà nhạc | xem phim | ăn tối
iq: Tại sao thứ Bảy Lena không đi được? | phải làm việc | bị ốm | đi du lịch
iq: Họ gặp nhau khi nào và ở đâu? | Chủ nhật, 7 giờ, trước nhà hát | thứ Bảy, 7 giờ, ở nhà | Chủ nhật, 8 giờ, ở ga
words: Lust; Kino; Konzert; Party; einladen; treffen; Hast du Lust?; Leider kann ich nicht.; Gute Idee!; vielleicht
+w: phr | - | Hast du Lust? | | Bạn có muốn không? | [Hast du Lust], ins Kino zu gehen? | Bạn có muốn đi xem phim không?
+w: phr | - | Leider kann ich nicht. | | Tiếc là tôi không đi được. | Am Freitag? [Leider kann ich nicht]. | Thứ Sáu à? Tiếc là mình không đi được.
+w: phr | - | Gute Idee! | | Ý hay đấy! | Kino am Sonntag? [Gute Idee]! | Xem phim Chủ nhật à? Ý hay!
g: <b>Rủ:</b> Hast du (am Samstag) Zeit? · Hast du Lust? · <b>Wollen wir</b> ins Kino gehen? · Kommst du mit? <b>Hẹn:</b> Wann/Wo treffen wir uns? – Um sieben vor dem Kino.
gt: Nhận lời | Từ chối (lịch sự)
gt: Ja, gern! / Gute Idee! | Leider kann ich nicht.
gt: Super, ich komme mit! | Tut mir leid, ich muss arbeiten.
gt: Okay, bis Samstag! | Vielleicht ein anderes Mal?
g: Từ chối thì nên nói lý do (ich muss …) và đề nghị khác (Und am Sonntag?). <b>ins</b> = in das: ins Kino, ins Konzert; <b>zur</b> Party.
g: <b>Lỗi hay gặp:</b> chỉ nói "Nein." — người Đức thấy hơi cộc; thêm "leider" và lý do.
gx: fmc: Hast du am Freitag ___? | Zeit | Uhr | Lust zu
gx: fmc: ___ wir ins Kino gehen? | Wollen | Willst | Will
gx: fmc: Gehen wir ___ Kino? | ins | in | im
gx: fmc: Tut mir leid, am Samstag ___ ich arbeiten. | muss | kann | will
gx: fmc: Wo treffen wir ___? | uns | wir | ihr
x: mc: Bạn nhận lời: | Ja, gern! Gute Idee! | Leider kann ich nicht. | Vielleicht ein anderes Mal.
x: mc: Bạn từ chối lịch sự: | Tut mir leid, ich muss arbeiten. | Nein. | Ich will nicht.
x: mc: Đề nghị ngày khác: | Und am Sonntag? | Bis Sonntag! | Gute Nacht!
x: ord: Hast du am Samstag Zeit? | Thứ Bảy bạn có rảnh không?
x: ord: Wollen wir ins Kino gehen? | Mình đi xem phim nhé?
x: ord: Treffen wir uns um sieben vor dem Kino. | Mình gặp nhau lúc 7 giờ trước rạp phim nhé.
x: tr: Tiếc là tôi không đi được. | Leider kann ich nicht.
x: tr: Mình gặp nhau ở đâu? | Wo treffen wir uns?
x: tr: Bạn đi cùng không? | Kommst du mit?
x: lmc: Am Freitag habe ich leider keine Zeit. | thứ Sáu không rảnh | thứ Sáu rảnh | thứ Bảy không rảnh
x: lmc: Treffen wir uns um halb acht am Bahnhof? | 7:30 ở ga | 8:30 ở ga | 7:30 ở rạp phim
x: lmc: Ich lade dich zu meiner Party ein. | mời đến tiệc | không đến tiệc | tổ chức tiệc ở nhà bạn
lt: Gọi điện rủ đi chơi
l: Tom | Hallo Anna, hier ist Tom. Hast du am Freitagabend Zeit? | Chào Anna, Tom đây. Tối thứ Sáu bạn rảnh không?
l: Anna | Hm, warum? | Hừm, có chuyện gì?
l: Tom | Ich habe zwei Karten für das Konzert. Kommst du mit? | Mình có hai vé xem hoà nhạc. Bạn đi cùng không?
l: Anna | Ja, sehr gern! Wann beginnt es? | Có, rất sẵn lòng! Mấy giờ bắt đầu?
l: Tom | Um acht. Treffen wir uns um halb acht vor dem Eingang. | 8 giờ. Mình gặp nhau lúc 7 rưỡi trước cửa vào.
lq: Tom có gì? | hai vé hoà nhạc | hai vé xem phim | vé tàu
lq: Anna có nhận lời không? | có | không | chưa biết
lq: Họ gặp nhau lúc mấy giờ? | 7:30 | 8:00 | 8:30
ld: Hast du am Freitagabend Zeit?
rt: Thiệp mời
r: E-Mail | Liebe Freunde, ich habe am Samstag Geburtstag und mache eine Party! Wann? Samstag, 20 Uhr. Wo? Bei mir, Bergstraße 12. Bitte bringt Getränke mit. Könnt ihr kommen? Liebe Grüße, Felix | Các bạn thân mến, thứ Bảy là sinh nhật mình và mình tổ chức tiệc! Khi nào? Thứ Bảy, 20 giờ. Ở đâu? Nhà mình, số 12 phố Bergstraße. Nhớ mang đồ uống nhé. Các bạn đến được không? Thân, Felix
rq: Bữa tiệc vào tối Chủ nhật. | F
rq: Bữa tiệc ở nhà Felix. | R
rq: Khách nên mang đồ uống. | R
t: Felix | Hallo Lena! Hast du am Samstag Zeit? | Chào Lena! Thứ Bảy bạn rảnh không?
t: Lena | Am Samstag kann ich leider nicht, ich muss arbeiten. | Thứ Bảy tiếc là mình không đi được, mình phải làm việc.
t: Felix | Schade. Und am Sonntag? Wollen wir ins Kino gehen? | Tiếc quá. Còn Chủ nhật? Mình đi xem phim nhé?
t: Lena | Ja, gern! Wann treffen wir uns? | Ừ, rất thích! Mấy giờ mình gặp nhau?
t: Felix | Um sieben vor dem Kino. | 7 giờ trước rạp phim.
t: Lena | Gute Idee! Bis Sonntag! | Ý hay! Hẹn Chủ nhật!
w: Viết tin nhắn ngắn (3–4 câu) rủ một người bạn đi chơi: hỏi có rảnh không, đi đâu, gặp lúc mấy giờ, ở đâu. | Hallo Tom! Hast du am Freitag Zeit? Wollen wir ins Kino gehen? Treffen wir uns um acht vor dem Kino. | Zeit, wollen wir, treffen

## 9.5 Ôn tuần 9
kind: review
goal: Hẹn một buổi đi chơi qua điện thoại: rủ, từ chối một ngày, đề nghị ngày khác, hẹn giờ và chỗ.
nico: 34,35,48
x: fmc: Ich ___ heute nicht kommen. | kann | kannst | könnt
x: fmc: Am Sonntag ___ ich lange schlafen. | will | wille | willst
t: Tom | Hallo Felix, hier ist Tom. Hast du am Freitag Zeit? | Chào Felix, Tom đây. Thứ Sáu bạn rảnh không?
t: Felix | Am Freitag kann ich leider nicht. Ich muss lange arbeiten. | Thứ Sáu tiếc là mình không được. Mình phải làm muộn.
t: Tom | Schade. Und am Samstag? Wollen wir Fußball spielen? | Tiếc thế. Còn thứ Bảy? Mình đi đá bóng nhé?
t: Felix | Ja, gern! Fußball macht Spaß. Wann denn? | Ừ, thích lắm! Đá bóng vui mà. Mấy giờ?
t: Tom | Um drei Uhr im Park. | 3 giờ ở công viên.
t: Felix | Super, ich komme. Kann Lena auch mitkommen? | Tuyệt, mình đến. Lena đi cùng được không?
t: Tom | Natürlich! Bis Samstag! | Tất nhiên! Hẹn thứ Bảy!
w: Viết email ngắn (khoảng 30 từ) trả lời lời mời đi tiệc: cảm ơn, nói đến được hay không, lý do, hỏi một câu. | Lieber Felix, vielen Dank für die Einladung! Leider kann ich am Samstag nicht kommen, ich muss arbeiten. Kann ich dich am Sonntag besuchen? Viele Grüße, Anna | danke, kann, muss

## 10.1 Các phòng
goal: Nói nhà mình có những phòng nào, ở tầng mấy, rộng bao nhiêu.
nico: 26
i: Anna | Wie ist deine neue Wohnung, Felix? | Căn hộ mới của Felix thế nào?
i: Felix | Sie ist schön! Sie hat zwei Zimmer, eine Küche und ein Bad. | Đẹp lắm! Có hai phòng, một bếp và một phòng tắm.
i: Anna | Hat sie auch einen Balkon? | Có ban công không?
i: Felix | Ja, einen kleinen Balkon. Die Wohnung ist im dritten Stock. | Có, một ban công nhỏ. Căn hộ ở tầng ba.
iq: Căn hộ có mấy phòng? | 2 phòng + bếp + phòng tắm | 3 phòng | 1 phòng
iq: Căn hộ có ban công không? | có, nhỏ | không | có, lớn
iq: Căn hộ ở tầng mấy? | tầng 3 | tầng 2 | tầng trệt
words: Wohnung; Zimmer; Küche; Bad; Wohnzimmer; Schlafzimmer; Flur; Balkon; Garten; Stock; Erdgeschoss; Haus
g: <b>Nhà có phòng gì:</b> Die Wohnung <b>hat</b> + cách 4: zwei Zimmer, eine Küche, ein Bad, <b>einen</b> Balkon. <b>Không có:</b> keinen Garten.
g: <b>Tầng:</b> das Erdgeschoss (tầng trệt) · im ersten Stock (tầng 1 = tầng 2 kiểu Việt Nam) · im zweiten / dritten Stock.
gt: Phòng | Làm gì
gt: das Wohnzimmer | ngồi chơi, xem TV
gt: das Schlafzimmer | ngủ
gt: die Küche | nấu ăn
gt: das Bad | tắm, vệ sinh
g: <b>Diện tích:</b> 60 Quadratmeter (m²). <b>Lỗi hay gặp:</b> "Die Wohnung hat ein Balkon" (der Balkon → einen Balkon); hiểu "erster Stock" là tầng trệt.
gx: fmc: Die Wohnung hat ___ Balkon. | einen | ein | eine
gx: fmc: Wir haben ___ Garten. | keinen | kein | keine
gx: fmc: Ich wohne ___ dritten Stock. | im | am | in
gx: fmc: Im ___ schlafe ich. | Schlafzimmer | Wohnzimmer | Bad
gx: fmc: In der ___ koche ich. | Küche | Bad | Flur
gx: art: Bad | das
x: art: Küche | die
x: art: Balkon | der
x: art: Zimmer | das
x: art: Flur | der
x: lmc: Die Wohnung hat drei Zimmer und einen Balkon. | 3 phòng + ban công | 2 phòng + vườn | 3 phòng, không ban công
x: lmc: Ich wohne im Erdgeschoss. | tầng trệt | tầng 1 | tầng 3
x: lmc: Das Bad ist sehr klein. | phòng tắm nhỏ | bếp nhỏ | phòng khách nhỏ
x: fill: Wo siehst du fern? – Im ___. (phòng khách) | Wohnzimmer
x: fill: Die Wohnung ist im zweiten ___. | Stock
x: tr: Căn hộ có hai phòng. | Die Wohnung hat zwei Zimmer.
x: tr: Chúng tôi không có vườn. | Wir haben keinen Garten.
lt: Xem nhà
l: Herr Weber | Hier ist der Flur. Links ist das Bad, rechts die Küche. | Đây là hành lang. Bên trái là phòng tắm, bên phải là bếp.
l: Felix | Und das Wohnzimmer? | Còn phòng khách?
l: Herr Weber | Geradeaus. Es ist groß, fünfundzwanzig Quadratmeter. Und daneben ist das Schlafzimmer. | Đi thẳng. Phòng rộng, 25 mét vuông. Bên cạnh là phòng ngủ.
lq: Phòng tắm ở đâu? | bên trái | bên phải | đi thẳng
lq: Phòng khách rộng bao nhiêu? | 25 m² | 52 m² | 15 m²
lq: Phòng ngủ ở đâu? | bên cạnh phòng khách | bên cạnh bếp | trên tầng
ld: Links ist das Bad, rechts die Küche.
rt: Email kể về nhà mới
r: E-Mail | Liebe Mama, meine neue Wohnung ist toll! Sie hat zwei Zimmer, eine Küche, ein Bad und einen Balkon. Sie ist im vierten Stock, aber es gibt einen Aufzug. Viele Grüße, Felix | Mẹ thân yêu, căn hộ mới của con tuyệt lắm! Có hai phòng, một bếp, một phòng tắm và một ban công. Ở tầng bốn nhưng có thang máy. Con, Felix
rq: Căn hộ có ban công. | R
rq: Căn hộ ở tầng ba. | F
rq: Toà nhà có thang máy. | R
t: Anna | Wie ist deine Wohnung? | Căn hộ của bạn thế nào?
t: Felix | Sie hat zwei Zimmer, eine Küche und ein Bad. | Có hai phòng, một bếp và một phòng tắm.
t: Anna | Hast du einen Balkon? | Bạn có ban công không?
t: Felix | Ja, einen kleinen Balkon, aber keinen Garten. | Có, một ban công nhỏ, nhưng không có vườn.
t: Felix | Die Wohnung ist im dritten Stock. | Căn hộ ở tầng ba.
w: Viết 3 câu về nhà bạn: có những phòng nào, ở tầng mấy, có/không có gì. | Meine Wohnung hat drei Zimmer. Sie ist im ersten Stock. Wir haben keinen Balkon. | hat, Stock, keinen

## 10.2 es gibt, tính từ miêu tả
goal: Tả căn hộ: có gì (es gibt), rộng/nhỏ, sáng/tối, yên tĩnh/ồn.
nico: 24,26
i: Lena | Wie ist dein Zimmer? | Phòng bạn thế nào?
i: Felix | Es ist klein, aber sehr hell und ruhig. | Phòng nhỏ, nhưng rất sáng và yên tĩnh.
i: Lena | Gibt es eine Waschmaschine? | Có máy giặt không?
i: Felix | Nein, es gibt keine Waschmaschine. Aber es gibt einen Park in der Nähe. | Không, không có máy giặt. Nhưng gần đó có một công viên.
iq: Phòng của Felix thế nào? | nhỏ, sáng, yên tĩnh | to, tối | ồn ào
iq: Có máy giặt không? | không | có | có hai cái
iq: Gần nhà có gì? | công viên | siêu thị | nhà ga
words: es gibt; groß; klein; hell; dunkel; ruhig; laut; gemütlich; schön; modern
+w: adj | - | modern | | hiện đại | Die Küche ist sehr [modern]. | Bếp rất hiện đại.
g: <b>es gibt + cách 4</b> = có (tồn tại ở đâu đó): Es gibt <b>einen</b> Park / <b>eine</b> Küche / <b>ein</b> Bad / <b>keinen</b> Aufzug. Hỏi: <b>Gibt es</b> hier einen Supermarkt?
g: <b>Tính từ đứng sau sein</b> không đổi đuôi: Die Küche ist hell. Das Zimmer ist klein. Thêm mức độ: <b>sehr</b> (rất), <b>ziemlich</b> (khá), <b>zu</b> (quá).
gt: Cặp trái nghĩa | |
gt: groß – klein | hell – dunkel | ruhig – laut
gt: neu – alt | teuer – billig | modern – alt
g: <b>Lỗi hay gặp:</b> "Es gibt ein Balkon" (đúng: einen Balkon); "Es hat einen Park" (không dùng es hat theo nghĩa "có").
gx: fmc: Es gibt ___ Balkon. | einen | ein | eine
gx: fmc: ___ es hier eine Bank? | Gibt | Hat | Ist
gx: fmc: Es gibt ___ Aufzug. | keinen | kein | nicht
gx: fmc: Das Zimmer ist nicht hell, es ist ___. | dunkel | ruhig | groß
gx: fmc: Die Straße ist sehr ___. Ich kann nicht schlafen. | laut | ruhig | gemütlich
gx: fmc: 900 Euro für ein Zimmer? Das ist ___ teuer. | zu | sehr gut | ziemlich billig
x: ord: Es gibt einen Park in der Nähe. | Gần đây có một công viên.
x: ord: Gibt es eine Waschmaschine? | Có máy giặt không?
x: ord: Das Wohnzimmer ist groß und hell. | Phòng khách rộng và sáng.
x: ty: Viết câu với "es gibt" | ein Balkon | Es gibt einen Balkon.
x: ty: Viết câu phủ định với "es gibt" | ein Garten | Es gibt keinen Garten.
x: ty: Viết câu hỏi với "es gibt" | eine Bank / hier | Gibt es hier eine Bank?
x: mc: Trái nghĩa với "ruhig" là: | laut | hell | klein
x: mc: Trái nghĩa với "hell" là: | dunkel | ruhig | modern
x: fill: Mein Zimmer ist sehr ___. Ich fühle mich wohl. (ấm cúng) | gemütlich
x: tr: Phòng nhỏ nhưng sáng. | Das Zimmer ist klein, aber hell.
x: lmc: Die Küche ist ziemlich dunkel. | khá tối | rất sáng | quá nhỏ
x: lmc: Es gibt leider keinen Aufzug. | không có thang máy | có thang máy | thang máy hỏng
lt: So sánh hai căn hộ
l: Anna | Welche Wohnung nimmst du? | Bạn chọn căn nào?
l: Tom | Die Wohnung in der Gartenstraße ist groß und billig, aber sehr laut. | Căn ở phố Gartenstraße to và rẻ, nhưng rất ồn.
l: Anna | Und die andere? | Còn căn kia?
l: Tom | Sie ist klein, aber ruhig und hell. Und es gibt einen Balkon. Ich nehme die kleine! | Căn đó nhỏ, nhưng yên tĩnh và sáng. Lại có ban công. Mình lấy căn nhỏ!
lq: Căn ở Gartenstraße thế nào? | to, rẻ, nhưng ồn | nhỏ, yên tĩnh | đắt, tối
lq: Căn kia có gì đặc biệt? | ban công | vườn | thang máy
lq: Tom chọn căn nào? | căn nhỏ | căn to | chưa chọn
ld: Sie ist klein, aber ruhig und hell.
rt: Tin rao cho thuê
r: Anzeige | Schöne 2-Zimmer-Wohnung, 55 m², hell und ruhig, moderne Küche, Balkon. Es gibt keinen Aufzug (3. Stock). Miete: 650 € | Căn hộ 2 phòng đẹp, 55 m², sáng và yên tĩnh, bếp hiện đại, ban công. Không có thang máy (tầng 3). Tiền thuê: 650 €
rq: Căn hộ có thang máy. | F
rq: Căn hộ rộng 55 m². | R
rq: Bếp hiện đại. | R
t: Lena | Wie ist deine Wohnung? | Căn hộ của bạn thế nào?
t: Felix | Sie ist klein, aber sehr hell und ruhig. | Nhỏ, nhưng rất sáng và yên tĩnh.
t: Lena | Gibt es eine Waschmaschine? | Có máy giặt không?
t: Felix | Nein, es gibt keine Waschmaschine, aber es gibt einen Balkon. | Không có máy giặt, nhưng có ban công.
t: Felix | Und es gibt einen Park in der Nähe. | Và gần đó có công viên.
w: Viết 4 câu tả phòng/căn hộ của bạn: 2 câu với "es gibt", 2 câu với tính từ. | Es gibt ein Bett und einen Schrank. Es gibt keinen Fernseher. Mein Zimmer ist klein. Es ist hell und gemütlich. | es gibt, ist

## 10.3 Đồ đạc: Wo? in, auf, unter, neben (cách 3)
goal: Nói đồ đạc ở đâu: auf dem Tisch, in der Küche, neben dem Bett.
nico: 27
i: Felix | Lena, wo ist mein Handy? | Lena, điện thoại của mình đâu?
i: Lena | Es liegt auf dem Tisch, neben der Lampe. | Nó nằm trên bàn, cạnh cái đèn.
i: Felix | Und meine Schlüssel? | Còn chìa khoá của mình?
i: Lena | Die Schlüssel sind in der Tasche, im Flur. | Chìa khoá ở trong túi, ngoài hành lang.
iq: Điện thoại ở đâu? | trên bàn, cạnh đèn | trong túi | dưới giường
iq: Chìa khoá ở đâu? | trong túi, ngoài hành lang | trên bàn | trong bếp
iq: "neben" nghĩa là? | bên cạnh | bên trên | bên dưới
words: Sofa; Bett; Schrank; Regal; Kühlschrank; Herd; Bild; stehen; liegen; hängen; neben; unter
+w: v | - | hängen | | treo | Das Bild [hängt] an der Wand. | Bức tranh treo trên tường.
g: <b>Wo?</b> (ở đâu, đứng yên) + giới từ <b>in, auf, unter, neben, an, vor, hinter, zwischen</b> + <b>cách 3 (Dativ)</b>.
gt: | der | die | das | số nhiều
gt: Cách 3 | <b>dem</b> Tisch | <b>der</b> Lampe | <b>dem</b> Bett | <b>den</b> Stühlen
gt: Ví dụ | auf dem Tisch | neben der Lampe | unter dem Bett | auf den Stühlen
g: Rút gọn: <b>in dem → im</b> (im Bad, im Flur), <b>an dem → am</b>. Động từ: <b>stehen</b> (đứng: Schrank, Lampe), <b>liegen</b> (nằm: Handy, Buch), <b>hängen</b> (treo: Bild).
g: <b>Lỗi hay gặp:</b> "auf der Tisch" (der Tisch → dem Tisch), "in die Küche" khi nói ở đâu (đúng: in der Küche).
gx: fmc: Das Handy liegt auf ___ Tisch. | dem | der | den
gx: fmc: Die Lampe steht neben ___ Sofa. | dem | der | das
gx: fmc: Der Kühlschrank ist in ___ Küche. | der | dem | die
gx: fmc: Die Katze schläft unter ___ Bett. | dem | der | das
gx: fmc: Das Bild hängt ___ der Wand. | an | auf | unter
gx: fmc: Ich bin ___ Bad. | im | in | ins
x: fmc: Das Buch liegt ___ Regal. | im | in | in die
x: fmc: Der Schrank ___ im Schlafzimmer. | steht | liegt | hängt
x: fmc: Das Handy ___ auf dem Sofa. | liegt | steht | hängt
x: fmc: Das Bild ___ über dem Sofa. | hängt | liegt | steht
x: ty: Trả lời: Wo ist …? | Wo ist der Kuli? (auf / der Tisch) | Der Kuli ist auf dem Tisch. / Er ist auf dem Tisch. / Er liegt auf dem Tisch.
x: ty: Trả lời: Wo ist …? | Wo ist die Katze? (unter / das Sofa) | Die Katze ist unter dem Sofa. / Sie ist unter dem Sofa.
x: ty: Trả lời: Wo ist …? | Wo ist die Milch? (in / der Kühlschrank) | Die Milch ist im Kühlschrank. / Sie ist im Kühlschrank.
x: lmc: Die Brille liegt neben dem Bett. | cạnh giường | dưới giường | trên giường
x: lmc: Der Fernseher steht im Wohnzimmer. | phòng khách | phòng ngủ | bếp
x: lmc: Die Schuhe sind unter dem Tisch. | dưới bàn | trên bàn | cạnh bàn
x: tr: Chìa khoá ở trên bàn. | Der Schlüssel ist auf dem Tisch. / Der Schlüssel liegt auf dem Tisch. / Die Schlüssel sind auf dem Tisch. / Die Schlüssel liegen auf dem Tisch.
x: tr: Tôi đang ở trong bếp. | Ich bin in der Küche.
lt: Tìm đồ
l: Tom | Anna, wo ist die Fernbedienung? | Anna, cái điều khiển TV đâu rồi?
l: Anna | Liegt sie nicht auf dem Sofa? | Không phải nó nằm trên ghế sofa à?
l: Tom | Nein. Auch nicht unter dem Sofa. | Không. Dưới ghế sofa cũng không có.
l: Anna | Ah, sie ist in der Küche, neben dem Kühlschrank! | À, nó ở trong bếp, cạnh tủ lạnh!
lq: Tom tìm gì? | điều khiển TV | chìa khoá | điện thoại
lq: Nó có ở trên sofa không? | không | có | không rõ
lq: Cuối cùng nó ở đâu? | trong bếp, cạnh tủ lạnh | dưới sofa | trong phòng ngủ
ld: Sie ist in der Küche, neben dem Kühlschrank.
rt: Tả phòng
r: | In meinem Zimmer steht ein Bett neben dem Fenster. Der Schrank steht links an der Wand. Auf dem Schreibtisch liegen meine Bücher. Über dem Bett hängt ein Bild von meiner Familie. | Trong phòng tôi có một cái giường cạnh cửa sổ. Tủ quần áo đặt bên trái sát tường. Trên bàn học là sách của tôi. Phía trên giường treo một bức ảnh gia đình tôi.
rq: Cái giường ở cạnh cửa sổ. | R
rq: Sách nằm trên giường. | F
rq: Bức ảnh treo phía trên giường. | R
t: Felix | Lena, wo ist mein Handy? | Lena, điện thoại của mình đâu?
t: Lena | Es liegt auf dem Tisch, neben der Lampe. | Nó nằm trên bàn, cạnh đèn.
t: Felix | Und wo sind meine Schlüssel? | Còn chìa khoá của mình đâu?
t: Lena | Sie sind in der Tasche im Flur. | Ở trong túi ngoài hành lang.
t: Felix | Danke! Und meine Jacke hängt im Schrank. | Cảm ơn! Còn áo khoác của mình treo trong tủ.
w: Viết 4 câu: trong phòng bạn, đồ đạc ở đâu (dùng stehen/liegen/hängen + auf/neben/in/unter). | Das Bett steht neben dem Fenster. Der Computer steht auf dem Tisch. Meine Bücher liegen im Regal. Ein Bild hängt an der Wand. | steht/liegt/hängt, dem/der

## 10.4 Tìm nhà, đọc tin rao
goal: Đọc hiểu tin rao thuê nhà và gọi điện hỏi thông tin.
nico: 39
i: Felix | Guten Tag, ich rufe wegen der Wohnung an. Ist sie noch frei? | Chào ông, tôi gọi về căn hộ. Còn trống không ạ?
i: Herr Weber | Ja, sie ist ab erstem Mai frei. | Có, từ ngày 1 tháng 5 sẽ trống.
i: Felix | Wie hoch ist die Miete? | Tiền thuê bao nhiêu ạ?
i: Herr Weber | Sechshundert Euro plus hundertzwanzig Euro Nebenkosten. | 600 euro cộng 120 euro phí dịch vụ.
iq: Căn hộ còn trống không? | có, từ 1/5 | không | đã có người thuê
iq: Tiền thuê chưa tính phí bao nhiêu? | 600 € | 120 € | 720 €
iq: "Nebenkosten" là gì? | phí dịch vụ (điện, nước, sưởi…) | tiền đặt cọc | tiền thuê
words: Miete; mieten; Vermieter; Quadratmeter; Nebenkosten; Anzeige; frei; ab; möbliert; umziehen
+w: n | der | Quadratmeter | die Quadratmeter | mét vuông (m²) | Die Wohnung hat 60 [Quadratmeter]. | Căn hộ rộng 60 m².
+w: n | die | Nebenkosten | (số nhiều) | phí dịch vụ (nước, sưởi, rác…) | Die [Nebenkosten] sind 150 Euro. | Phí dịch vụ là 150 euro.
+w: n | die | Anzeige | die Anzeigen | tin rao, quảng cáo | Ich lese die [Anzeigen]. | Tôi đọc tin rao.
+w: prep | - | ab | | từ (thời điểm trở đi) | Die Wohnung ist [ab] Mai frei. | Căn hộ trống từ tháng 5.
+w: adj | - | möbliert | | có sẵn đồ đạc | Das Zimmer ist [möbliert]. | Phòng có sẵn đồ đạc.
g: <b>Đọc tin rao:</b> chữ viết tắt hay gặp.
gt: Viết tắt | Nghĩa
gt: 2-Zi.-Whg. | căn hộ 2 phòng
gt: m² / qm | mét vuông
gt: NK / KM / WM | phí dịch vụ / tiền thuê chưa phí / tiền thuê gồm phí
gt: EG / 2. OG | tầng trệt / tầng 2
gt: ab sofort / ab 1.5. | trống ngay / từ 1/5
g: <b>Hỏi khi gọi điện:</b> Ist die Wohnung noch frei? · Wie hoch ist die Miete? · Wie hoch sind die Nebenkosten? · Wann kann ich die Wohnung sehen?
g: <b>Lỗi hay gặp:</b> nhầm Kaltmiete (chưa phí) với Warmmiete (đã gồm sưởi, nước…).
gx: fmc: Ist die Wohnung noch ___? | frei | leer | besetzt
gx: fmc: Wie hoch ist die ___? | Miete | Mieter | mieten
gx: fmc: Die Wohnung ist ___ sofort frei. | ab | um | am
gx: fmc: "möbliert" nghĩa là: | có sẵn đồ đạc | không có đồ đạc | mới xây
gx: fmc: "3-Zi.-Whg." là: | căn hộ 3 phòng | tầng 3 | 3 người
x: mc: "WM 750 €" nghĩa là: | tiền thuê gồm phí 750 € | tiền thuê chưa phí 750 € | phí dịch vụ 750 €
x: mc: "EG" là tầng: | trệt | 1 | trên cùng
x: mc: Câu hỏi để hẹn xem nhà: | Wann kann ich die Wohnung sehen? | Wie hoch ist die Miete? | Ist die Wohnung groß?
x: ord: Ist die Wohnung noch frei? | Căn hộ còn trống không?
x: ord: Wann kann ich die Wohnung sehen? | Khi nào tôi có thể xem nhà?
x: ord: Wie hoch sind die Nebenkosten? | Phí dịch vụ bao nhiêu?
x: tr: Tiền thuê bao nhiêu? | Wie hoch ist die Miete? / Was kostet die Miete?
x: tr: Tôi đang tìm một căn hộ. | Ich suche eine Wohnung.
x: lmc: Die Miete ist fünfhundertachtzig Euro warm. | 580 € gồm phí | 850 € gồm phí | 580 € chưa phí
x: lmc: Sie können die Wohnung am Donnerstag um fünf sehen. | thứ Năm 5 giờ | thứ Ba 5 giờ | thứ Năm 15 giờ 30
x: nl: 400-990
lt: Hẹn xem nhà
l: Felix | Wann kann ich die Wohnung sehen? | Khi nào tôi có thể xem căn hộ?
l: Vermieterin | Morgen um achtzehn Uhr? | Ngày mai lúc 18 giờ được không?
l: Felix | Ja, das passt. Wie ist die Adresse? | Vâng, được ạ. Địa chỉ là gì ạ?
l: Vermieterin | Lindenstraße fünfzehn, im zweiten Stock. Klingeln Sie bei Müller. | Số 15 phố Lindenstraße, tầng hai. Anh bấm chuông nhà Müller.
lq: Họ hẹn xem nhà lúc nào? | ngày mai 18 giờ | hôm nay 8 giờ | ngày mai 8 giờ
lq: Căn hộ ở tầng mấy? | tầng 2 | tầng 15 | tầng trệt
lq: Felix phải bấm chuông nhà ai? | Müller | Weber | Linden
ld: Wann kann ich die Wohnung sehen?
rt: Tin rao
r: Anzeige | 2-Zi.-Whg., 48 m², 1. OG, Balkon, ruhige Lage, KM 520 € + NK 130 €, ab 1.6. frei. Tel. 030 871 42 59 | Căn hộ 2 phòng, 48 m², tầng 1, ban công, khu yên tĩnh, tiền thuê 520 € + phí 130 €, trống từ 1/6. ĐT 030 871 42 59
rq: Tổng tiền thuê gồm phí là 650 €. | R
rq: Căn hộ trống ngay. | F
rq: Căn hộ có ban công. | R
t: Felix | Guten Tag, ich rufe wegen der Wohnung an. Ist sie noch frei? | Chào ông, tôi gọi về căn hộ. Còn trống không ạ?
t: Herr Weber | Ja, ab erstem Mai. | Có, từ ngày 1 tháng 5.
t: Felix | Wie hoch ist die Miete? | Tiền thuê bao nhiêu ạ?
t: Herr Weber | Sechshundert Euro kalt, die Nebenkosten sind hundertzwanzig Euro. | 600 euro chưa phí, phí dịch vụ là 120 euro.
t: Felix | Wann kann ich die Wohnung sehen? | Khi nào tôi có thể xem căn hộ?
t: Herr Weber | Am Samstag um zehn Uhr. | Thứ Bảy lúc 10 giờ.
w: Viết 3 câu hỏi khi gọi điện hỏi thuê nhà. | Ist die Wohnung noch frei? Wie hoch ist die Miete? Wann kann ich die Wohnung sehen? | frei, Miete, sehen

## 10.5 Ôn tuần 10
kind: review
goal: Tả căn hộ của mình 8 câu: phòng, tầng, có gì, đồ ở đâu, thế nào.
nico: 26,27,39
x: fmc: Das Bild hängt an ___ Wand. | der | dem | die
x: fmc: Es gibt ___ Aufzug. | keinen | kein | nicht
t: Felix | Ich wohne in einer Wohnung in Berlin. | Tôi sống trong một căn hộ ở Berlin.
t: Felix | Die Wohnung ist im dritten Stock und hat zwei Zimmer. | Căn hộ ở tầng ba và có hai phòng.
t: Felix | Es gibt eine Küche, ein Bad und einen kleinen Balkon. | Có một bếp, một phòng tắm và một ban công nhỏ.
t: Felix | Das Wohnzimmer ist groß und hell. | Phòng khách rộng và sáng.
t: Felix | Im Wohnzimmer steht ein Sofa neben dem Fenster. | Trong phòng khách có ghế sofa cạnh cửa sổ.
t: Felix | Mein Bett steht im Schlafzimmer, und über dem Bett hängt ein Bild. | Giường tôi ở phòng ngủ, phía trên giường treo một bức tranh.
t: Felix | Es gibt keinen Garten, aber es gibt einen Park in der Nähe. | Không có vườn, nhưng gần đó có công viên.
t: Felix | Die Miete ist nicht billig, aber die Wohnung ist sehr gemütlich. | Tiền thuê không rẻ, nhưng căn hộ rất ấm cúng.
w: Viết đoạn khoảng 50 từ tả căn hộ hoặc phòng của bạn. | Ich wohne in einer kleinen Wohnung. Sie ist im zweiten Stock und hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist hell. Dort steht ein Sofa neben dem Fenster. Im Schlafzimmer gibt es ein Bett und einen Schrank. Es gibt keinen Balkon. Die Wohnung ist ruhig und gemütlich. | es gibt, steht, ist

## 11.1 Nơi chốn trong thành phố
goal: Gọi tên các nơi trong thành phố và hỏi gần đây có … không.
nico: 41
i: Felix | Entschuldigung, gibt es hier in der Nähe eine Apotheke? | Xin lỗi, gần đây có hiệu thuốc không?
i: Frau | Ja, neben der Post. | Có, cạnh bưu điện.
i: Felix | Und eine Bank? | Còn ngân hàng?
i: Frau | Die Bank ist am Marktplatz, gegenüber vom Rathaus. | Ngân hàng ở quảng trường chợ, đối diện toà thị chính.
iq: Hiệu thuốc ở đâu? | cạnh bưu điện | cạnh ngân hàng | ở quảng trường
iq: Ngân hàng ở đâu? | quảng trường chợ | cạnh bưu điện | gần ga
iq: "gegenüber vom Rathaus" nghĩa là? | đối diện toà thị chính | sau toà thị chính | trong toà thị chính
words: Bank; Post; Apotheke; Krankenhaus; Supermarkt; Bäckerei; Kino; Museum; Park; Rathaus; Bibliothek; Bahnhof
g: <b>Hỏi có … không:</b> Gibt es hier (in der Nähe) <b>einen</b> Supermarkt / <b>eine</b> Apotheke / <b>ein</b> Kino? → Ja, … / Nein, leider nicht.
g: <b>Hỏi vị trí:</b> Wo ist die Post? → Die Post ist <b>neben</b> der Bank / <b>gegenüber vom</b> Bahnhof / <b>am</b> Marktplatz / <b>in der</b> Goethestraße.
gt: Nơi | Làm gì ở đó
gt: die Apotheke | mua thuốc
gt: die Post | gửi thư, gói hàng
gt: die Bibliothek | mượn sách
gt: das Rathaus | làm giấy tờ
g: <b>Lỗi hay gặp:</b> "Gibt es hier ein Supermarkt?" (der Supermarkt → einen Supermarkt).
gx: fmc: Gibt es hier ___ Supermarkt? | einen | ein | eine
gx: fmc: Gibt es hier ___ Apotheke? | eine | einen | ein
gx: fmc: Die Post ist neben ___ Bank. | der | die | dem
gx: fmc: Bücher leiht man in der ___. | Bibliothek | Bäckerei | Apotheke
gx: fmc: Brot kauft man in der ___. | Bäckerei | Bank | Post
gx: art: Krankenhaus | das
x: art: Bahnhof | der
x: art: Post | die
x: art: Museum | das
x: art: Park | der
x: mc: Bạn bị ốm, cần mua thuốc. Bạn đi đến: | die Apotheke | die Bank | das Kino
x: mc: Bạn muốn gửi gói hàng về Việt Nam. Bạn đi đến: | die Post | die Bibliothek | das Museum
x: mc: Bạn muốn xem phim. Bạn đi đến: | das Kino | das Rathaus | der Bahnhof
x: lmc: Die Apotheke ist gegenüber vom Bahnhof. | đối diện nhà ga | cạnh nhà ga | trong nhà ga
x: lmc: Gibt es hier ein Krankenhaus? | bệnh viện | hiệu thuốc | ngân hàng
x: lmc: Der Supermarkt ist neben dem Park. | cạnh công viên | đối diện công viên | trong công viên
x: tr: Gần đây có ngân hàng không? | Gibt es hier in der Nähe eine Bank? / Gibt es hier eine Bank?
x: tr: Bưu điện ở đâu? | Wo ist die Post?
x: fill: Das Museum ist ___ vom Rathaus. (đối diện) | gegenüber
lt: Hỏi thăm khu phố mới
l: Anna | Wie ist dein neues Viertel? | Khu phố mới của bạn thế nào?
l: Felix | Super! Es gibt einen Supermarkt, eine Bäckerei und ein Kino. | Tuyệt! Có siêu thị, tiệm bánh và rạp phim.
l: Anna | Und eine Bibliothek? | Còn thư viện?
l: Felix | Nein, leider nicht. Die Bibliothek ist im Zentrum, aber der Bus fährt direkt dorthin. | Tiếc là không. Thư viện ở trung tâm, nhưng có xe buýt đi thẳng đến đó.
lq: Khu phố có gì? | siêu thị, tiệm bánh, rạp phim | thư viện, bảo tàng | bệnh viện
lq: Có thư viện gần nhà không? | không | có | không rõ
lq: Thư viện ở đâu? | trung tâm | cạnh nhà | gần ga
ld: Es gibt einen Supermarkt, eine Bäckerei und ein Kino.
rt: Bản đồ khu phố
r: | Am Marktplatz: Rathaus, Bank, Café. In der Goethestraße: Post, Apotheke (neben der Post), Bäckerei. Am Bahnhof: Supermarkt, Kino. | Ở quảng trường chợ: toà thị chính, ngân hàng, quán cà phê. Ở phố Goethestraße: bưu điện, hiệu thuốc (cạnh bưu điện), tiệm bánh. Ở nhà ga: siêu thị, rạp phim.
rq: Hiệu thuốc ở cạnh bưu điện. | R
rq: Rạp phim ở quảng trường chợ. | F
rq: Ngân hàng ở quảng trường chợ. | R
t: Felix | Entschuldigung, gibt es hier eine Apotheke? | Xin lỗi, ở đây có hiệu thuốc không?
t: Frau | Ja, in der Goethestraße, neben der Post. | Có, ở phố Goethestraße, cạnh bưu điện.
t: Felix | Und wo ist die Bank? | Còn ngân hàng ở đâu?
t: Frau | Am Marktplatz, gegenüber vom Rathaus. | Ở quảng trường chợ, đối diện toà thị chính.
t: Felix | Vielen Dank! | Cảm ơn nhiều!
w: Viết 4 câu về khu phố của bạn: có gì, không có gì, ở đâu. | In meinem Viertel gibt es einen Supermarkt und eine Bäckerei. Es gibt kein Kino. Die Post ist neben der Bank. | gibt es, neben

## 11.2 Hỏi đường, mệnh lệnh với Sie
goal: Hỏi đường và chỉ đường: geradeaus, links, rechts, dùng mệnh lệnh lịch sự.
nico: 42
i: Felix | Entschuldigung, wie komme ich zum Bahnhof? | Xin lỗi, đến nhà ga đi đường nào ạ?
i: Mann | Gehen Sie geradeaus bis zur Ampel. Dann gehen Sie links. | Anh đi thẳng đến đèn giao thông. Rồi rẽ trái.
i: Felix | Ist es weit? | Có xa không ạ?
i: Mann | Nein, nur fünf Minuten zu Fuß. | Không, chỉ 5 phút đi bộ.
iq: Felix muốn đi đâu? | nhà ga | bưu điện | ngân hàng
iq: Đến đèn giao thông thì làm gì? | rẽ trái | rẽ phải | đi thẳng
iq: Có xa không? | 5 phút đi bộ | 15 phút | rất xa
words: links; rechts; geradeaus; Ampel; Kreuzung; Ecke; weit; nah; Wie komme ich zum …?; erste; zweite; Straße
g: <b>Hỏi đường:</b> Wie komme ich <b>zum</b> Bahnhof / <b>zur</b> Post? (der/das → zum, die → zur) · Wo ist …? · Ist es weit?
g: <b>Mệnh lệnh lịch sự (Sie):</b> động từ đứng đầu + Sie: <b>Gehen Sie</b> geradeaus! <b>Nehmen Sie</b> die zweite Straße rechts! <b>Fahren Sie</b> mit dem Bus!
gt: Chỉ đường | Nghĩa
gt: Gehen Sie geradeaus. | Đi thẳng.
gt: Gehen Sie an der Ampel links. | Đến đèn giao thông rẽ trái.
gt: Nehmen Sie die erste Straße rechts. | Rẽ vào đường thứ nhất bên phải.
gt: Dann sehen Sie den Bahnhof. | Rồi anh sẽ thấy nhà ga.
g: <b>Lỗi hay gặp:</b> "Sie gehen geradeaus!" (câu kể, không phải mệnh lệnh); quên "Sie": "Gehen geradeaus!".
gx: fmc: ___ Sie geradeaus! | Gehen | Geht | Gehst
gx: fmc: Nehmen ___ die zweite Straße links. | Sie | du | wir
gx: fmc: Wie komme ich ___ Bahnhof? | zum | zur | zu
gx: fmc: Wie komme ich ___ Post? | zur | zum | zu der
gx: fmc: ___ Sie an der Ampel rechts! | Gehen | Sie gehen | Geh
gx: ty: Viết mệnh lệnh với Sie | geradeaus gehen | Gehen Sie geradeaus!
x: ty: Viết mệnh lệnh với Sie | die erste Straße links nehmen | Nehmen Sie die erste Straße links!
x: ty: Viết mệnh lệnh với Sie | mit dem Bus fahren | Fahren Sie mit dem Bus!
x: ty: Viết mệnh lệnh với Sie | an der Kreuzung rechts gehen | Gehen Sie an der Kreuzung rechts!
x: lmc: Gehen Sie die zweite Straße links. | đường thứ 2, rẽ trái | đường thứ 2, rẽ phải | đường thứ 1, rẽ trái
x: lmc: An der Kreuzung gehen Sie rechts. | ngã tư rẽ phải | ngã tư rẽ trái | đèn giao thông rẽ phải
x: lmc: Gehen Sie immer geradeaus. | đi thẳng mãi | quay lại | rẽ trái
x: lmc: Das ist ziemlich weit. Nehmen Sie den Bus. | khá xa, đi xe buýt | gần, đi bộ | rất gần
x: mc: Trái nghĩa với "weit" là: | nah | links | geradeaus
x: ord: Wie komme ich zum Bahnhof? | Đến nhà ga đi đường nào?
x: ord: Gehen Sie an der Ampel links. | Đến đèn giao thông thì rẽ trái.
x: tr: Đi thẳng! (lịch sự) | Gehen Sie geradeaus!
x: tr: Có xa không? | Ist es weit?
lt: Hỏi đường đến bảo tàng
l: Touristin | Entschuldigung, wie komme ich zum Museum? | Xin lỗi, đến bảo tàng đi thế nào ạ?
l: Felix | Gehen Sie hier geradeaus bis zur Kreuzung. Dann nehmen Sie die zweite Straße rechts. | Chị đi thẳng đến ngã tư. Rồi rẽ vào đường thứ hai bên phải.
l: Touristin | Die zweite rechts. Und dann? | Đường thứ hai bên phải. Rồi sao nữa?
l: Felix | Das Museum ist an der Ecke, neben dem Park. | Bảo tàng ở góc đường, cạnh công viên.
lq: Đầu tiên đi đến đâu? | ngã tư | đèn giao thông | công viên
lq: Rẽ vào đường nào? | đường thứ hai bên phải | đường thứ nhất bên trái | đường thứ hai bên trái
lq: Bảo tàng ở đâu? | góc đường, cạnh công viên | đối diện ga | trong công viên
ld: Nehmen Sie die zweite Straße rechts.
rt: Tin nhắn chỉ đường
r: SMS | Hallo Anna! Vom Bahnhof gehst du geradeaus bis zur Ampel. Dort links. Mein Haus ist das dritte Haus rechts, Nummer 12. Bis gleich! Felix | Chào Anna! Từ ga bạn đi thẳng đến đèn giao thông. Ở đó rẽ trái. Nhà mình là ngôi nhà thứ ba bên phải, số 12. Gặp sau nhé! Felix
rq: Đến đèn giao thông rẽ phải. | F
rq: Nhà Felix là số 12. | R
rq: Nhà Felix ở bên phải. | R
t: Felix | Entschuldigung, wie komme ich zum Bahnhof? | Xin lỗi, đến nhà ga đi thế nào ạ?
t: Mann | Gehen Sie geradeaus bis zur Ampel. | Anh đi thẳng đến đèn giao thông.
t: Mann | Dann nehmen Sie die erste Straße links. | Rồi rẽ vào đường thứ nhất bên trái.
t: Felix | Ist es weit? | Có xa không ạ?
t: Mann | Nein, nur fünf Minuten zu Fuß. | Không, chỉ 5 phút đi bộ.
t: Felix | Vielen Dank! | Cảm ơn nhiều!
w: Viết 3 câu chỉ đường cho một người lạ (dùng mệnh lệnh với Sie). | Gehen Sie geradeaus. Nehmen Sie die zweite Straße rechts. Dann sehen Sie die Post. | Gehen Sie, Nehmen Sie

## 11.3 zu, bei, mit + cách 3
goal: Nói đi đến đâu, ở chỗ ai, đi bằng gì: zum Arzt, beim Nachbarn, mit dem Bus.
nico: 43,22
i: Lena | Wohin gehst du? | Bạn đi đâu đấy?
i: Felix | Ich gehe zum Arzt. Dann fahre ich mit dem Bus zur Arbeit. | Mình đi bác sĩ. Rồi đi xe buýt đến chỗ làm.
i: Lena | Und heute Abend? | Còn tối nay?
i: Felix | Heute Abend esse ich bei meinem Kollegen. | Tối nay mình ăn ở nhà đồng nghiệp.
iq: Felix đi đâu trước? | bác sĩ | chỗ làm | nhà đồng nghiệp
iq: Felix đến chỗ làm bằng gì? | xe buýt | xe đạp | đi bộ
iq: Tối nay Felix ăn ở đâu? | nhà đồng nghiệp | nhà hàng | nhà mình
words: zu; bei; mit; zum; zur; beim; Nachbar; Kollege; Chef; Praxis
+w: prep | - | zum | | đến (= zu dem) | Ich gehe [zum] Arzt. | Tôi đi bác sĩ.
+w: prep | - | zur | | đến (= zu der) | Ich gehe [zur] Post. | Tôi đi bưu điện.
+w: prep | - | beim | | ở chỗ (= bei dem) | Ich bin [beim] Arzt. | Tôi đang ở chỗ bác sĩ.
g: <b>zu</b> (đến chỗ ai/nơi nào) · <b>bei</b> (ở chỗ ai, tại) · <b>mit</b> (với, bằng phương tiện) luôn đi với <b>cách 3</b>.
gt: | der | die | das | số nhiều
gt: cách 3 | dem | der | dem | den (+n)
gt: zu | zum Arzt | zur Post | zum Kino | zu den Eltern
gt: bei | beim Arzt | bei der Bank | beim Bäcker | bei den Eltern
gt: mit | mit dem Bus | mit der U-Bahn | mit dem Auto | mit den Kindern
g: Đại từ sở hữu cũng đổi: mit mein<b>em</b> Bruder, bei mein<b>er</b> Mutter. Ngoại lệ hay dùng: <b>nach Hause</b> (về nhà), <b>zu Hause</b> (ở nhà).
g: <b>Lỗi hay gặp:</b> "Ich gehe zu der Arzt", "mit der Bus" (der Bus → mit dem Bus).
gx: fmc: Ich gehe ___ Arzt. | zum | zur | zu
gx: fmc: Wir fahren ___ Bus. | mit dem | mit der | mit
gx: fmc: Sie geht ___ Post. | zur | zum | zu
gx: fmc: Ich wohne ___ meinen Eltern. | bei | mit | zu
gx: fmc: Heute Abend esse ich ___ Freund. | bei meinem | bei mein | mit mein
gx: fmc: Er fährt mit ___ U-Bahn. | der | dem | die
x: fmc: Ich bin heute ___ Arzt. (đang ở chỗ bác sĩ) | beim | zum | mit dem
x: fmc: Kommst du ___ uns? | zu | mit | bei
x: fmc: Ich spreche ___ meinem Chef. | mit | zu | bei
x: fmc: Wir fahren mit ___ Auto. | dem | der | das
x: ty: Viết câu (đi đến) | ich / gehen / zu + die Bank | Ich gehe zur Bank.
x: ty: Viết câu (phương tiện) | Lena / fahren / mit + das Fahrrad | Lena fährt mit dem Fahrrad.
x: ty: Viết câu (ở chỗ ai) | ich / sein / bei + der Nachbar | Ich bin beim Nachbarn.
x: lmc: Ich fahre mit der S-Bahn zur Arbeit. | tàu S-Bahn | xe buýt | xe đạp
x: lmc: Morgen gehe ich zum Zahnarzt. | nha sĩ | bưu điện | bạn bè
x: lmc: Am Wochenende bin ich bei meinen Eltern. | ở nhà bố mẹ | đi với bố mẹ | gọi cho bố mẹ
x: tr: Tôi đi làm bằng xe buýt. | Ich fahre mit dem Bus zur Arbeit.
x: tr: Tôi đi bưu điện. | Ich gehe zur Post.
lt: Lịch hôm nay
l: Anna | Was machst du heute, Tom? | Hôm nay Tom làm gì?
l: Tom | Um zehn gehe ich zur Bank. Dann fahre ich mit dem Fahrrad zum Supermarkt. | 10 giờ mình đi ngân hàng. Rồi đạp xe đến siêu thị.
l: Anna | Und am Nachmittag? | Còn buổi chiều?
l: Tom | Am Nachmittag bin ich bei meiner Oma. Ich fahre mit dem Zug zu ihr. | Chiều mình ở nhà bà. Mình đi tàu đến chỗ bà.
lq: 10 giờ Tom đi đâu? | ngân hàng | siêu thị | nhà bà
lq: Tom đến siêu thị bằng gì? | xe đạp | tàu | xe buýt
lq: Buổi chiều Tom ở đâu? | nhà bà | ngân hàng | nhà Anna
ld: Am Nachmittag bin ich bei meiner Oma.
rt: Ghi chú trên tủ lạnh
r: | Montag: 9 Uhr zum Arzt (Praxis Dr. Klein). Dienstag: mit Lena zum Deutschkurs. Mittwoch: Abendessen bei Familie Weber. Freitag: mit dem Zug zu Mama. | Thứ Hai: 9 giờ đi bác sĩ (phòng khám bác sĩ Klein). Thứ Ba: cùng Lena đi học tiếng Đức. Thứ Tư: ăn tối ở nhà Weber. Thứ Sáu: đi tàu về thăm mẹ.
rq: Thứ Tư ăn tối ở nhà Weber. | R
rq: Thứ Hai đi học tiếng Đức. | F
rq: Thứ Sáu đi tàu về thăm mẹ. | R
t: Lena | Wohin gehst du? | Bạn đi đâu đấy?
t: Felix | Ich gehe zum Arzt. | Mình đi bác sĩ.
t: Felix | Dann fahre ich mit dem Bus zur Arbeit. | Rồi mình đi xe buýt đến chỗ làm.
t: Lena | Und heute Abend? | Còn tối nay?
t: Felix | Heute Abend esse ich bei meinem Kollegen. | Tối nay mình ăn ở nhà đồng nghiệp.
w: Viết 3 câu về hôm nay của bạn với zu, bei, mit. | Ich fahre mit dem Fahrrad zur Arbeit. Am Nachmittag gehe ich zum Supermarkt. Am Abend bin ich bei meiner Freundin. | zum/zur, mit dem/der, bei

## 11.4 Cơ quan, bưu điện
goal: Làm việc ở bưu điện và văn phòng hành chính: gửi đồ, đăng ký, xin lịch hẹn.
nico: 12,44
i: Beamtin | Guten Tag, was kann ich für Sie tun? | Chào anh, tôi có thể giúp gì?
i: Felix | Ich möchte ein Paket nach Vietnam schicken. Was kostet das? | Tôi muốn gửi một gói hàng về Việt Nam. Hết bao nhiêu ạ?
i: Beamtin | Wie schwer ist es? … Drei Kilo, das kostet achtundvierzig Euro. | Nặng bao nhiêu? … Ba ký, hết 48 euro.
i: Felix | Gut. Und ich brauche noch zehn Briefmarken, bitte. | Được. Và tôi cần thêm mười con tem.
iq: Felix gửi gói hàng đi đâu? | Việt Nam | Berlin | Áo
iq: Gói hàng nặng bao nhiêu? | 3 ký | 8 ký | 48 ký
iq: Felix mua thêm gì? | 10 con tem | phong bì | hộp
words: Brief; Paket; Briefmarke; schicken; Bürgeramt; anmelden; Termin; Formular; Ausweis; Pass; unterschreiben
+w: n | der | Brief | die Briefe | lá thư | Ich schreibe einen [Brief]. | Tôi viết một lá thư.
+w: n | das | Paket | die Pakete | gói hàng, bưu kiện | Ich schicke ein [Paket] nach Vietnam. | Tôi gửi một gói hàng về Việt Nam.
+w: n | die | Briefmarke | die Briefmarken | con tem | Zwei [Briefmarken], bitte. | Cho tôi hai con tem.
+w: n | das | Bürgeramt | die Bürgerämter | văn phòng hành chính (phường) | Ich gehe zum [Bürgeramt]. | Tôi đi văn phòng hành chính.
+w: v | - | anmelden | | đăng ký (cư trú, khoá học) | Ich muss die Wohnung [anmelden]. | Tôi phải đăng ký cư trú.
g: <b>Ở cơ quan</b> hay nghe mệnh lệnh lịch sự: <b>Füllen Sie</b> bitte das Formular <b>aus</b>. <b>Unterschreiben Sie</b> hier. <b>Zeigen Sie</b> mir bitte Ihren Ausweis.
g: <b>Nói yêu cầu:</b> Ich möchte … schicken / anmelden. · Ich brauche einen Termin. · <b>Können Sie</b> mir helfen? · Wo muss ich unterschreiben?
gt: Bạn cần | Câu nói
gt: gửi gói hàng | Ich möchte ein Paket nach Vietnam schicken.
gt: đăng ký cư trú | Ich möchte meine Wohnung anmelden.
gt: lịch hẹn | Ich brauche einen Termin.
gt: không hiểu | Können Sie das bitte wiederholen?
g: <b>nach</b> + tên nước/thành phố (không mạo từ): nach Vietnam, nach Berlin. <b>Lỗi hay gặp:</b> "zu Vietnam".
gx: fmc: Ich möchte ein Paket ___ Vietnam schicken. | nach | zu | in
gx: fmc: Füllen Sie bitte das Formular ___. | aus | an | ein
gx: fmc: ___ Sie bitte hier. | Unterschreiben | Unterschreibst | Unterschreibt
gx: fmc: ___ Sie mir helfen? | Können | Kann | Könnt
gx: fmc: Ich ___ einen Termin. | brauche | brauchen | braucht
x: mc: Nhân viên nói "Zeigen Sie mir bitte Ihren Ausweis." Bạn cần: | đưa giấy tờ tuỳ thân | điền tờ khai | ký tên
x: mc: Bạn không hiểu, nói: | Können Sie das bitte wiederholen? | Das ist alles. | Stimmt so.
x: mc: Bạn muốn đăng ký cư trú, đi đến: | das Bürgeramt | die Post | die Bank
x: ord: Ich möchte meine Wohnung anmelden. | Tôi muốn đăng ký cư trú.
x: ord: Füllen Sie bitte das Formular aus. | Vui lòng điền tờ khai.
x: ord: Wo muss ich unterschreiben? | Tôi phải ký ở đâu?
x: tr: Tôi muốn gửi một lá thư về Việt Nam. | Ich möchte einen Brief nach Vietnam schicken.
x: tr: Ông/bà có thể giúp tôi không? | Können Sie mir helfen?
x: pr: 48,00
x: pr: 0,95
x: lmc: Ein Brief nach Vietnam kostet drei Euro siebzig. | 3,70 € | 7,30 € | 3,17 €
x: lmc: Sie brauchen einen Termin. Kommen Sie am Dienstag um neun. | thứ Ba 9 giờ | thứ Năm 9 giờ | thứ Ba 19 giờ
lt: Ở văn phòng hành chính
l: Beamter | Guten Morgen! Was möchten Sie? | Chào anh! Anh cần gì?
l: Felix | Ich bin neu in Berlin und möchte meine Wohnung anmelden. | Tôi mới đến Berlin và muốn đăng ký cư trú.
l: Beamter | Haben Sie einen Termin? | Anh có lịch hẹn không?
l: Felix | Ja, um zehn Uhr. | Có, lúc 10 giờ.
l: Beamter | Gut. Füllen Sie bitte dieses Formular aus und zeigen Sie mir Ihren Pass. | Tốt. Anh điền tờ khai này và cho tôi xem hộ chiếu.
lq: Felix muốn làm gì? | đăng ký cư trú | gửi thư | làm hộ chiếu
lq: Felix có lịch hẹn lúc mấy giờ? | 10 giờ | 9 giờ | 11 giờ
lq: Nhân viên yêu cầu gì? | điền tờ khai và đưa hộ chiếu | ký tên | trả tiền
ld: Ich möchte meine Wohnung anmelden.
rt: Thông báo ở bưu điện
r: | Öffnungszeiten: Mo–Fr 8–18 Uhr, Sa 9–12 Uhr. Pakete ins Ausland: bitte am Schalter 3. Briefmarken bekommen Sie auch am Automaten. | Giờ mở cửa: T2–T6 8–18 giờ, T7 9–12 giờ. Gói hàng ra nước ngoài: xin đến quầy số 3. Tem cũng có thể mua ở máy bán tự động.
rq: Thứ Bảy bưu điện mở cửa đến 12 giờ. | R
rq: Gửi hàng ra nước ngoài ở quầy số 1. | F
rq: Có thể mua tem ở máy tự động. | R
t: Beamtin | Guten Tag, was kann ich für Sie tun? | Chào anh, tôi có thể giúp gì?
t: Felix | Ich möchte ein Paket nach Vietnam schicken. | Tôi muốn gửi một gói hàng về Việt Nam.
t: Beamtin | Füllen Sie bitte das Formular aus. | Anh điền tờ khai này nhé.
t: Felix | Wo muss ich unterschreiben? | Tôi phải ký ở đâu ạ?
t: Beamtin | Hier unten. Das kostet achtundvierzig Euro. | Ở dưới đây. Hết 48 euro.
t: Felix | Kann ich mit Karte bezahlen? | Tôi trả bằng thẻ được không?
w: Viết 3 câu bạn nói ở bưu điện hoặc văn phòng hành chính. | Ich möchte ein Paket nach Vietnam schicken. Ich brauche einen Termin. Können Sie das bitte wiederholen? | möchte, Termin/Paket

## 11.5 Ôn tuần 11
kind: review
goal: Chỉ đường từ nhà mình đến nhà ga (không nhìn chữ).
nico: 41,42,43
x: fmc: Ich fahre ___ U-Bahn. | mit der | mit dem | mit
x: fmc: ___ Sie die zweite Straße links! | Nehmen | Nimmst | Nehmt
t: Lena | Felix, wie komme ich von deiner Wohnung zum Bahnhof? | Felix, từ nhà bạn đến ga đi thế nào?
t: Felix | Das ist einfach. Du gehst aus dem Haus und dann links. | Dễ lắm. Bạn ra khỏi nhà rồi rẽ trái.
t: Felix | Du gehst geradeaus bis zur Ampel. | Bạn đi thẳng đến đèn giao thông.
t: Felix | An der Ampel gehst du rechts, neben der Bäckerei. | Đến đèn giao thông bạn rẽ phải, cạnh tiệm bánh.
t: Felix | Dann nimmst du die zweite Straße links. | Rồi bạn rẽ vào đường thứ hai bên trái.
t: Felix | Der Bahnhof ist gegenüber vom Supermarkt. | Nhà ga đối diện siêu thị.
t: Lena | Ist es weit? | Có xa không?
t: Felix | Nein, zehn Minuten zu Fuß. Oder du fährst mit dem Bus. | Không, 10 phút đi bộ. Hoặc bạn đi xe buýt.
w: Viết đoạn khoảng 40 từ chỉ đường từ nhà bạn đến một nơi (ga, siêu thị, trường). | Von meiner Wohnung gehst du zuerst geradeaus. An der Kreuzung gehst du links. Dann nimmst du die erste Straße rechts. Der Supermarkt ist neben der Post. Es ist nicht weit, nur fünf Minuten zu Fuß. | geradeaus, links/rechts

## 12.1 Phương tiện, mit dem Bus
goal: Nói đi đâu bằng phương tiện gì và mất bao lâu.
nico: 43
i: Anna | Wie fährst du zur Arbeit, Felix? | Felix đi làm bằng gì?
i: Felix | Meistens mit der U-Bahn. Das dauert zwanzig Minuten. | Thường là tàu điện ngầm. Mất 20 phút.
i: Anna | Ich fahre mit dem Fahrrad. Und wenn es regnet, gehe ich zu Fuß. | Mình đi xe đạp. Khi trời mưa thì mình đi bộ.
i: Felix | Zu Fuß? Das ist aber gesund! | Đi bộ ư? Khoẻ đấy!
iq: Felix đi làm bằng gì? | tàu điện ngầm | xe đạp | đi bộ
iq: Felix đi mất bao lâu? | 20 phút | 2 phút | 12 phút
iq: Khi trời mưa Anna làm gì? | đi bộ | đi xe buýt | ở nhà
words: Bus; Zug; U-Bahn; S-Bahn; Straßenbahn; Auto; Fahrrad; Taxi; Flugzeug; zu Fuß; fahren; fliegen
g: <b>mit</b> + cách 3: mit <b>dem</b> Bus / Zug / Auto / Fahrrad / Taxi, mit <b>der</b> U-Bahn / S-Bahn / Straßenbahn. Ngoại lệ: <b>zu Fuß</b> gehen (đi bộ), <b>fliegen</b> (bay).
g: <b>fahren</b>: ich fahre, du <b>fährst</b>, er <b>fährt</b>. <b>Hỏi bao lâu:</b> Wie lange dauert das? – Das dauert zwanzig Minuten / eine Stunde.
gt: der → mit dem | die → mit der | das → mit dem
gt: der Bus, der Zug | die U-Bahn, die Straßenbahn | das Auto, das Fahrrad
g: <b>Lỗi hay gặp:</b> "Ich fahre mit Bus" (thiếu dem), "Ich gehe mit dem Auto" (xe thì dùng fahren).
gx: fmc: Ich fahre mit ___ Bus. | dem | der | den
gx: fmc: Wir fahren mit ___ Straßenbahn. | der | dem | die
gx: fmc: Ich gehe ___. | zu Fuß | mit Fuß | mit dem Fuß
gx: fmc: Er ___ mit dem Auto. | fährt | geht | fahrt
gx: fmc: Wie lange ___ das? | dauert | dauern | kostet
gx: fmc: Nach Vietnam ___ ich. | fliege | fahre | gehe
x: art: Zug | der
x: art: U-Bahn | die
x: art: Auto | das
x: art: Straßenbahn | die
x: lmc: Ich fahre mit dem Fahrrad zur Uni. | 🚲 xe đạp | 🚌 xe buýt | 🚇 tàu điện ngầm
x: lmc: Das dauert ungefähr eine Stunde. | khoảng 1 tiếng | khoảng 10 phút | 2 tiếng
x: lmc: Wir fliegen im Sommer nach Hanoi. | bay về Hà Nội | đi tàu về Hà Nội | lái xe về Hà Nội
x: ty: Trả lời: Wie fährst du zur Arbeit? | (die S-Bahn) | Ich fahre mit der S-Bahn. / Mit der S-Bahn.
x: ty: Trả lời: Wie fährst du zur Arbeit? | (das Auto) | Ich fahre mit dem Auto. / Mit dem Auto.
x: tr: Tôi đi bộ đến trường. | Ich gehe zu Fuß zur Schule.
x: tr: Mất bao lâu? | Wie lange dauert das?
x: fill: Du ___ (fahren) mit dem Zug. | fährst
lt: Đi làm bằng gì?
l: Tom | Fährst du jeden Tag mit dem Auto, Lena? | Lena ngày nào cũng đi ô tô à?
l: Lena | Nein, das ist zu teuer. Ich fahre mit der Straßenbahn. | Không, đắt quá. Mình đi tàu điện.
l: Tom | Wie lange dauert das? | Mất bao lâu?
l: Lena | Fünfunddreißig Minuten. Mit dem Auto sind es nur fünfzehn, aber das Parken kostet viel. | 35 phút. Ô tô chỉ 15 phút, nhưng gửi xe tốn nhiều.
lq: Lena đi làm bằng gì? | tàu điện | ô tô | xe đạp
lq: Đi tàu điện mất bao lâu? | 35 phút | 15 phút | 53 phút
lq: Tại sao Lena không đi ô tô? | đắt | chậm | không có xe
ld: Ich fahre mit der Straßenbahn.
rt: Khảo sát nhỏ
r: | Wie kommen die Kursteilnehmer zum Deutschkurs? 6 Personen fahren mit der U-Bahn, 4 mit dem Bus, 3 mit dem Fahrrad und 2 gehen zu Fuß. Niemand kommt mit dem Auto. | Học viên đến lớp bằng gì? 6 người đi tàu điện ngầm, 4 người xe buýt, 3 người xe đạp và 2 người đi bộ. Không ai đi ô tô.
rq: Phần lớn học viên đi tàu điện ngầm. | R
rq: 4 người đi xe đạp. | F
rq: Không ai đi ô tô. | R
t: Anna | Wie fährst du zur Arbeit? | Bạn đi làm bằng gì?
t: Felix | Meistens mit der U-Bahn. | Thường là tàu điện ngầm.
t: Anna | Wie lange dauert das? | Mất bao lâu?
t: Felix | Ungefähr zwanzig Minuten. Und du? | Khoảng 20 phút. Còn bạn?
t: Anna | Ich fahre mit dem Fahrrad, oder ich gehe zu Fuß. | Mình đi xe đạp, hoặc đi bộ.
w: Viết 3 câu: bạn đi làm/đi học bằng gì, mất bao lâu, cuối tuần đi đâu bằng gì. | Ich fahre mit dem Bus zur Arbeit. Das dauert dreißig Minuten. Am Wochenende fahre ich mit dem Zug zu meinen Freunden. | mit dem/der, dauert

## 12.2 Mua vé, giờ tàu
goal: Mua vé tàu, hỏi giờ chạy, sân ga, có phải đổi tàu không.
nico: 43
i: Felix | Eine Fahrkarte nach München, bitte. | Cho tôi một vé đi München.
i: Mitarbeiterin | Einfach oder hin und zurück? | Một chiều hay khứ hồi ạ?
i: Felix | Hin und zurück. Wann fährt der nächste Zug ab? | Khứ hồi. Chuyến tàu tiếp theo chạy lúc mấy giờ?
i: Mitarbeiterin | Um zehn Uhr zwölf von Gleis sieben. Sie müssen in Nürnberg umsteigen. | Lúc 10 giờ 12 ở sân ga số 7. Anh phải đổi tàu ở Nürnberg.
iq: Felix mua vé loại nào? | khứ hồi | một chiều | vé tháng
iq: Tàu chạy lúc mấy giờ? | 10:12 | 12:10 | 10:20
iq: Felix phải đổi tàu ở đâu? | Nürnberg | München | không phải đổi
words: Fahrkarte; Fahrplan; Abfahrt; Ankunft; Gleis; abfahren; ankommen; umsteigen; Verspätung; pünktlich; hin und zurück; einfach
+w: phr | - | hin und zurück | | khứ hồi | Eine Fahrkarte [hin und zurück], bitte. | Cho tôi một vé khứ hồi.
g: <b>Mua vé:</b> Eine Fahrkarte nach …, bitte. → Einfach oder hin und zurück? <b>Hỏi:</b> Wann fährt der Zug (nach …) <b>ab</b>? · Wann <b>kommt</b> er in … <b>an</b>? · Von welchem Gleis? · Muss ich umsteigen?
g: Đây là các <b>động từ tách</b>: ab|fahren, an|kommen, um|steigen, ein|steigen, aus|steigen — tiền tố ra cuối câu: Der Zug <b>fährt</b> um 10 Uhr <b>ab</b>.
gt: Bảng giờ tàu | Nghĩa
gt: Abfahrt 10:12 | giờ chạy
gt: Ankunft 14:35 | giờ đến
gt: Gleis 7 | sân ga số 7
gt: +15 Min. Verspätung | trễ 15 phút
g: <b>Lỗi hay gặp:</b> "Wann abfährt der Zug?" (đúng: Wann fährt der Zug ab?).
gx: fmc: Wann ___ der Zug ___? | fährt … ab | abfährt … – | ab … fährt
gx: fmc: Der Zug ___ um 14 Uhr in München ___. | kommt … an | ankommt … – | kommt … ab
gx: fmc: Sie müssen in Köln ___. | umsteigen | steigen um | umsteigt
gx: fmc: Der Zug hat zehn Minuten ___. | Verspätung | Abfahrt | Gleis
gx: fmc: Einfach oder ___? | hin und zurück | hin und her | zurück
gx: tmo: 10:12
x: tmo: 14:35
x: tmo: 7:48
x: tmo: 19:06
x: mc: "Ankunft" nghĩa là: | giờ đến | giờ chạy | sân ga
x: mc: "Der Zug ist pünktlich" nghĩa là: | tàu đúng giờ | tàu trễ | tàu bị huỷ
x: ord: Wann fährt der nächste Zug ab? | Chuyến tàu tiếp theo chạy lúc mấy giờ?
x: ord: Muss ich umsteigen? | Tôi có phải đổi tàu không?
x: ord: Der Zug kommt um elf Uhr an. | Tàu đến lúc 11 giờ.
x: tr: Cho tôi một vé đi Berlin. | Eine Fahrkarte nach Berlin, bitte.
x: tr: Từ sân ga nào? | Von welchem Gleis?
x: lmc: Der Zug nach Hamburg fährt heute von Gleis zwölf ab. | sân ga 12 | sân ga 2 | sân ga 20
x: lmc: Der ICE hat zwanzig Minuten Verspätung. | trễ 20 phút | trễ 2 phút | đúng giờ
x: pr: 89,90
lt: Thông báo ở ga
l: Durchsage | Achtung an Gleis drei: Der Regionalexpress nach Potsdam, Abfahrt neun Uhr vierzig, hat heute circa fünfzehn Minuten Verspätung. | Chú ý tại sân ga số 3: tàu RE đi Potsdam, giờ chạy 9 giờ 40, hôm nay trễ khoảng 15 phút.
l: Felix | Oh nein! Dann komme ich zu spät zur Arbeit. | Ôi không! Vậy mình sẽ đi làm muộn.
lq: Tàu đi đâu? | Potsdam | Berlin | Hamburg
lq: Giờ chạy theo lịch? | 9:40 | 9:15 | 9:55
lq: Tàu trễ bao lâu? | khoảng 15 phút | 40 phút | 5 phút
ld: Dann komme ich zu spät zur Arbeit.
rt: Bảng giờ tàu
r: | Berlin Hbf → Dresden Hbf · Ab 08:15 Gleis 11 · An 10:05 · direkt · Preis: einfach 39,90 € | Berlin ga chính → Dresden ga chính · Chạy 08:15 sân ga 11 · Đến 10:05 · đi thẳng · Giá: một chiều 39,90 €
rq: Phải đổi tàu một lần. | F
rq: Tàu đến Dresden lúc 10:05. | R
rq: Vé một chiều giá 39,90 €. | R
t: Felix | Eine Fahrkarte nach München, bitte. | Cho tôi một vé đi München.
t: Mitarbeiterin | Einfach oder hin und zurück? | Một chiều hay khứ hồi ạ?
t: Felix | Hin und zurück, bitte. Wann fährt der nächste Zug ab? | Khứ hồi. Chuyến tàu tiếp theo chạy lúc mấy giờ?
t: Mitarbeiterin | Um zehn Uhr zwölf von Gleis sieben. | Lúc 10 giờ 12 ở sân ga số 7.
t: Felix | Muss ich umsteigen? | Tôi có phải đổi tàu không?
t: Mitarbeiterin | Ja, in Nürnberg. | Có, ở Nürnberg.
w: Viết 4 câu hỏi/nói khi mua vé tàu. | Eine Fahrkarte nach Hamburg, bitte. Hin und zurück. Wann fährt der Zug ab? Von welchem Gleis? | Fahrkarte, fährt … ab, Gleis

## 12.3 Perfekt với haben
goal: Kể việc đã làm bằng Perfekt: haben + phân từ II (gemacht, gekauft…).
nico: 17
i: Lena | Was hast du gestern gemacht? | Hôm qua bạn làm gì?
i: Felix | Ich habe eingekauft und dann habe ich gekocht. | Mình đi chợ rồi nấu ăn.
i: Lena | Was hast du gekocht? | Bạn nấu món gì?
i: Felix | Ich habe Pho gekocht. Und am Abend habe ich mit meiner Mutter telefoniert. | Mình nấu phở. Buổi tối mình gọi điện cho mẹ.
iq: Hôm qua Felix làm gì trước? | đi chợ | nấu ăn | gọi điện
iq: Felix nấu món gì? | phở | mì | súp
iq: Buổi tối Felix làm gì? | gọi điện cho mẹ | xem phim | đi chơi
words: gemacht; gekauft; gespielt; gekocht; gelernt; gearbeitet; gehört; besucht; telefoniert; eingekauft; gestern; letzte Woche
+w: v | - | gemacht | | đã làm (machen) | Was hast du gestern [gemacht]? | Hôm qua bạn đã làm gì?
+w: v | - | gekauft | | đã mua (kaufen) | Ich habe ein Buch [gekauft]. | Tôi đã mua một quyển sách.
+w: v | - | gespielt | | đã chơi (spielen) | Wir haben Fußball [gespielt]. | Chúng tôi đã đá bóng.
+w: v | - | gekocht | | đã nấu (kochen) | Ich habe Reis [gekocht]. | Tôi đã nấu cơm.
+w: v | - | gelernt | | đã học (lernen) | Ich habe Deutsch [gelernt]. | Tôi đã học tiếng Đức.
+w: v | - | gearbeitet | | đã làm việc (arbeiten) | Er hat viel [gearbeitet]. | Anh ấy đã làm việc nhiều.
+w: v | - | gehört | | đã nghe (hören) | Ich habe Musik [gehört]. | Tôi đã nghe nhạc.
+w: v | - | besucht | | đã thăm (besuchen) | Ich habe meine Oma [besucht]. | Tôi đã thăm bà.
+w: v | - | telefoniert | | đã gọi điện (telefonieren) | Ich habe mit Lena [telefoniert]. | Tôi đã gọi điện với Lena.
+w: v | - | eingekauft | | đã đi mua sắm (einkaufen) | Wir haben [eingekauft]. | Chúng tôi đã đi chợ.
+w: phr | - | letzte Woche | | tuần trước | [Letzte Woche] habe ich viel gearbeitet. | Tuần trước tôi làm việc nhiều.
g: <b>Perfekt</b> dùng để kể chuyện đã qua khi nói: <b>haben</b> (vị trí 2) + <b>phân từ II</b> (cuối câu): Ich <b>habe</b> gestern Fußball <b>gespielt</b>.
g: <b>Phân từ II của động từ có quy tắc:</b> ge + gốc + t.
gt: Kiểu | Nguyên mẫu → Phân từ II
gt: thường | machen → <b>ge</b>mach<b>t</b>, kaufen → gekauft, spielen → gespielt
gt: gốc tận cùng -t/-d | arbeiten → gearbeit<b>et</b>, warten → gewartet
gt: động từ tách | einkaufen → ein<b>ge</b>kauft, aufräumen → aufgeräumt
gt: -ieren, be-, ver- (không ge) | telefonieren → telefoniert, besuchen → besucht
g: <b>Lỗi hay gặp:</b> "Ich habe gemacht meine Hausaufgaben" (phân từ phải ở cuối câu); "getelefoniert", "gebesucht" (không có ge).
gx: fmc: Ich ___ Fußball gespielt. | habe | bin | hat
gx: fmc: Was hast du gestern ___? | gemacht | machen | macht
gx: fmc: Er hat viel ___. | gearbeitet | gearbeit | arbeitet
gx: fmc: Ich habe mit Mama ___. | telefoniert | getelefoniert | telefonieren
gx: fmc: Wir haben am Samstag ___. | eingekauft | geeinkauft | einkauft
gx: fmc: Sie hat ihre Oma ___. | besucht | gebesucht | besuchen
x: ty: Viết phân từ II | kochen | gekocht
x: ty: Viết phân từ II | lernen | gelernt
x: ty: Viết phân từ II | arbeiten | gearbeitet
x: ty: Viết phân từ II | aufräumen | aufgeräumt
x: ty: Viết phân từ II | fotografieren | fotografiert
x: ty: Đổi sang Perfekt | Ich kaufe ein Buch. | Ich habe ein Buch gekauft.
x: ty: Đổi sang Perfekt | Wir spielen Fußball. | Wir haben Fußball gespielt.
x: ty: Đổi sang Perfekt | Lena hört Musik. | Lena hat Musik gehört.
x: ord: Ich habe gestern Pho gekocht. | Hôm qua tôi đã nấu phở.
x: ord: Was hast du am Wochenende gemacht? | Cuối tuần bạn đã làm gì?
x: lmc: Ich habe gestern lange gearbeitet. | hôm qua làm việc muộn | hôm nay làm việc muộn | ngày mai làm việc
x: lmc: Wir haben im Park Fußball gespielt. | đã đá bóng | sẽ đá bóng | không đá bóng
lt: Hôm qua
l: Tom | Hast du gestern für die Prüfung gelernt? | Hôm qua bạn có ôn thi không?
l: Anna | Ja, ich habe den ganzen Tag gelernt. Und du? | Có, mình học cả ngày. Còn bạn?
l: Tom | Ich habe nicht gelernt. Ich habe Fußball gespielt und dann habe ich Musik gehört. | Mình không học. Mình đá bóng rồi nghe nhạc.
l: Anna | Oh, Tom! | Ôi, Tom!
lq: Anna hôm qua làm gì? | học cả ngày | đá bóng | nghe nhạc
lq: Tom có ôn thi không? | không | có | một chút
lq: Tom đã làm gì? | đá bóng và nghe nhạc | học | ngủ
ld: Ich habe den ganzen Tag gelernt.
rt: Nhật ký
r: | Montag: Ich habe bis sechs gearbeitet. Dann habe ich eingekauft und gekocht. Am Abend habe ich mit meiner Schwester telefoniert. | Thứ Hai: Tôi làm việc đến 6 giờ. Rồi đi chợ và nấu ăn. Buổi tối tôi gọi điện với chị gái.
rq: Người viết làm việc đến 6 giờ. | R
rq: Người viết đi nhà hàng. | F
rq: Buổi tối người viết gọi điện với chị gái. | R
t: Lena | Was hast du gestern gemacht? | Hôm qua bạn làm gì?
t: Felix | Ich habe eingekauft und dann habe ich gekocht. | Mình đi chợ rồi nấu ăn.
t: Lena | Was hast du gekocht? | Bạn nấu món gì?
t: Felix | Ich habe Pho gekocht. Am Abend habe ich mit meiner Mutter telefoniert. | Mình nấu phở. Buổi tối mình gọi điện cho mẹ.
w: Viết 4 câu về hôm qua của bạn bằng Perfekt. | Gestern habe ich gearbeitet. Dann habe ich eingekauft. Am Abend habe ich gekocht. Ich habe Musik gehört. | habe, ge…t

## 12.4 Kể cuối tuần
goal: Kể cuối tuần vừa rồi bằng Perfekt, theo thứ tự và có cảm nhận.
nico: 32,55
i: Tom | Wie war dein Wochenende? | Cuối tuần của bạn thế nào?
i: Felix | Super! Am Samstag habe ich mit Freunden gefeiert. Wir haben getanzt. | Tuyệt! Thứ Bảy mình tiệc với bạn bè. Bọn mình nhảy.
i: Tom | Und am Sonntag? | Còn Chủ nhật?
i: Felix | Am Sonntag habe ich meine Wohnung geputzt und im Park fotografiert. Es hat viel Spaß gemacht. | Chủ nhật mình dọn nhà và chụp ảnh ở công viên. Vui lắm.
iq: Thứ Bảy Felix làm gì? | tiệc với bạn bè | dọn nhà | đi làm
iq: Chủ nhật Felix làm gì? | dọn nhà và chụp ảnh | đi tiệc | ngủ cả ngày
iq: Cuối tuần của Felix thế nào? | tuyệt | chán | mệt
words: Wochenende; gestern; letzte; gefeiert; getanzt; geputzt; fotografiert; gezeigt; geschenkt; Es hat Spaß gemacht.
+w: adj | - | letzte | | trước, vừa qua | [Letztes] Wochenende war super. | Cuối tuần vừa rồi tuyệt lắm.
+w: v | - | gefeiert | | đã tổ chức tiệc, ăn mừng (feiern) | Wir haben Geburtstag [gefeiert]. | Chúng tôi đã mừng sinh nhật.
+w: v | - | getanzt | | đã nhảy (tanzen) | Wir haben viel [getanzt]. | Chúng tôi đã nhảy nhiều.
+w: v | - | geputzt | | đã lau dọn (putzen) | Ich habe das Bad [geputzt]. | Tôi đã lau phòng tắm.
+w: v | - | fotografiert | | đã chụp ảnh (fotografieren) | Ich habe im Park [fotografiert]. | Tôi đã chụp ảnh ở công viên.
+w: v | - | gezeigt | | đã cho xem (zeigen) | Ich habe ihm die Stadt [gezeigt]. | Tôi đã dẫn anh ấy đi xem thành phố.
+w: v | - | geschenkt | | đã tặng (schenken) | Ich habe ihr Blumen [geschenkt]. | Tôi đã tặng cô ấy hoa.
+w: phr | - | Es hat Spaß gemacht. | | Đã rất vui. | Die Party war toll. [Es hat Spaß gemacht]. | Bữa tiệc tuyệt lắm. Rất vui.
g: <b>Kể cuối tuần:</b> mở đầu bằng thời gian → haben ở vị trí 2: <b>Am Samstag habe ich</b> … gefeiert. <b>Danach habe ich</b> … geputzt.
g: <b>Nói cảm nhận</b> (dùng quá khứ của sein/haben, học thuộc như cụm): Wie <b>war</b> dein Wochenende? – Es <b>war</b> super / langweilig. Es hat Spaß gemacht. Ich <b>hatte</b> keine Zeit.
gt: Câu hỏi | Trả lời
gt: Wie war dein Wochenende? | Es war toll! / Es war ruhig.
gt: Was hast du gemacht? | Ich habe … gefeiert / geputzt.
gt: Hat es Spaß gemacht? | Ja, sehr! / Nein, es war langweilig.
g: Đi đâu (gehen, fahren) dùng <b>sein</b> + phân từ bất quy tắc (ich bin gefahren) — sẽ học ở tháng 4. <b>Lỗi hay gặp:</b> "Wie ist dein Wochenende gewesen?" — đúng nhưng dài; dùng "Wie war …?".
gx: fmc: Wie ___ dein Wochenende? | war | ist | hat
gx: fmc: Am Samstag ___ ich gefeiert. | habe | bin | war
gx: fmc: Wir haben viel ___. | getanzt | tanzen | getanzen
gx: fmc: Es hat viel Spaß ___. | gemacht | gemachen | macht
gx: fmc: ___ Wochenende war super. (vừa rồi) | Letztes | Letzte | Nächstes
gx: fmc: Ich habe meiner Mutter Blumen ___. | geschenkt | schenkt | geschenken
x: ord: Am Samstag habe ich mit Freunden gefeiert. | Thứ Bảy tôi đã tiệc với bạn bè.
x: ord: Danach habe ich die Wohnung geputzt. | Sau đó tôi đã dọn nhà.
x: ord: Wie war dein Wochenende? | Cuối tuần của bạn thế nào?
x: ty: Đổi sang Perfekt | Am Sonntag putze ich die Küche. | Am Sonntag habe ich die Küche geputzt.
x: ty: Đổi sang Perfekt | Wir feiern Geburtstag. | Wir haben Geburtstag gefeiert.
x: ty: Đổi sang Perfekt | Ich zeige Tom die Stadt. | Ich habe Tom die Stadt gezeigt.
x: tr: Cuối tuần của bạn thế nào? | Wie war dein Wochenende?
x: tr: Đã rất vui! | Es hat Spaß gemacht! / Es hat viel Spaß gemacht!
x: lmc: Mein Wochenende war leider langweilig. | chán | tuyệt | bận
x: lmc: Am Sonntag habe ich lange geschlafen und dann geputzt. | ngủ muộn rồi dọn nhà | đi tiệc | làm việc
x: lmc: Wir haben auf der Party bis zwei Uhr getanzt. | nhảy đến 2 giờ | nhảy 2 tiếng | đến lúc 2 giờ
lt: Thứ Hai ở lớp
l: Frau Schmidt | Wie war Ihr Wochenende, Frau Berger? | Cuối tuần của chị thế nào, chị Berger?
l: Anna | Sehr schön! Mein Bruder hat mich besucht. Ich habe ihm die Stadt gezeigt. | Rất vui! Em trai tôi đến thăm. Tôi dẫn em ấy đi xem thành phố.
l: Frau Schmidt | Und was haben Sie am Sonntag gemacht? | Còn Chủ nhật chị làm gì?
l: Anna | Wir haben zusammen gekocht und Fotos gemacht. Es hat viel Spaß gemacht. | Chúng tôi cùng nấu ăn và chụp ảnh. Rất vui.
lq: Ai đến thăm Anna? | em trai | bố mẹ | bạn bè
lq: Thứ Bảy Anna làm gì? | dẫn em đi xem thành phố | dọn nhà | làm việc
lq: Chủ nhật họ làm gì? | nấu ăn và chụp ảnh | đi tiệc | đá bóng
ld: Es hat viel Spaß gemacht.
rt: Email cho bạn
r: E-Mail | Hallo Lena, mein Wochenende war toll! Am Samstag habe ich Geburtstag gefeiert. Meine Freunde haben mir ein Fahrrad geschenkt! Wir haben bis Mitternacht getanzt. Am Sonntag habe ich nur geputzt. Und dein Wochenende? Liebe Grüße, Tom | Chào Lena, cuối tuần của mình tuyệt lắm! Thứ Bảy mình tổ chức sinh nhật. Bạn bè tặng mình một chiếc xe đạp! Bọn mình nhảy đến nửa đêm. Chủ nhật mình chỉ dọn nhà. Còn cuối tuần của bạn? Thân, Tom
rq: Tom được tặng một chiếc xe đạp. | R
rq: Chủ nhật Tom đi chơi. | F
rq: Họ nhảy đến nửa đêm. | R
t: Tom | Wie war dein Wochenende? | Cuối tuần của bạn thế nào?
t: Felix | Super! Am Samstag habe ich mit Freunden gefeiert. | Tuyệt! Thứ Bảy mình tiệc với bạn bè.
t: Felix | Wir haben gekocht und viel getanzt. | Bọn mình nấu ăn và nhảy nhiều.
t: Tom | Und am Sonntag? | Còn Chủ nhật?
t: Felix | Am Sonntag habe ich die Wohnung geputzt und im Park fotografiert. | Chủ nhật mình dọn nhà và chụp ảnh ở công viên.
t: Felix | Es hat viel Spaß gemacht. | Rất vui.
w: Viết email ngắn (khoảng 40 từ) kể cuối tuần vừa rồi cho một người bạn. | Hallo Anna, mein Wochenende war schön. Am Samstag habe ich eingekauft und gekocht. Am Abend habe ich mit Freunden gefeiert. Am Sonntag habe ich meine Eltern besucht. Es hat Spaß gemacht! Viele Grüße, Felix | war, habe, ge…t

## 12.5 Ôn tuần 12
kind: review
goal: Kể cuối tuần vừa rồi 8 câu bằng Perfekt (không nhìn chữ).
nico: 17,32,55
x: tmo: 16:45
x: fmc: Ich habe mit Lena ___. | telefoniert | getelefoniert | telefonieren
x: fmc: Wann ___ der Zug ___? | fährt … ab | abfährt … – | fährt … an
t: Felix | Mein Wochenende war wunderbar. | Cuối tuần của tôi tuyệt vời.
t: Felix | Am Samstag habe ich lange geschlafen. | Thứ Bảy tôi ngủ dậy muộn.
t: Felix | Dann habe ich eingekauft und gekocht. | Rồi tôi đi chợ và nấu ăn.
t: Felix | Am Nachmittag habe ich mit Tom Fußball gespielt. | Buổi chiều tôi đá bóng với Tom.
t: Felix | Am Abend haben wir bei Lena gefeiert und getanzt. | Buổi tối chúng tôi tiệc và nhảy ở nhà Lena.
t: Felix | Am Sonntag habe ich die Wohnung geputzt. | Chủ nhật tôi dọn nhà.
t: Felix | Danach habe ich mit meiner Familie in Vietnam telefoniert. | Sau đó tôi gọi điện cho gia đình ở Việt Nam.
t: Felix | Es hat viel Spaß gemacht! | Rất vui!
w: Viết đoạn khoảng 50 từ kể cuối tuần vừa rồi của bạn bằng Perfekt. | Letztes Wochenende war toll. Am Samstag habe ich lange geschlafen. Dann habe ich eingekauft. Am Nachmittag habe ich meine Freundin besucht. Wir haben zusammen gekocht und Musik gehört. Am Sonntag habe ich die Wohnung aufgeräumt und für den Deutschkurs gelernt. | habe, ge…t, war

## 13.1 Ôn ngữ pháp A1
kind: exam
parts: c_tn
goal: Tổng ôn ngữ pháp A1: 20 câu từ cả 3 tháng (chia động từ, mạo từ, cách 4, cách 3, động từ khuyết thiếu, động từ tách, Perfekt).

## 13.2 Thi thử: Nghe + Đọc
kind: exam
parts: nghe,doc
goal: Thi thử phần Nghe (15 câu) và Đọc (15 câu) như Start Deutsch 1; mỗi phần ≥ 60%.

## 13.3 Thi thử: Viết
kind: exam
parts: viet,c_nv
goal: Thi thử phần Viết: điền tờ khai và viết một tin nhắn khoảng 30 từ.
w: Teil 1 – Điền tờ khai đăng ký khoá học cho bạn của bạn: Name, Vorname, Land, Wohnort, Straße, Telefon, Kurs (Montag/Mittwoch), Bezahlung (bar/Karte). | Name: Tran · Vorname: Hoa · Land: Vietnam · Wohnort: Berlin · Straße: Bergstraße 12 · Telefon: 0176 34528 · Kurs: Montag · Bezahlung: bar | Name, Vorname, Land, Wohnort, Telefon
w: Teil 2 – Bạn không đến được buổi học tiếng Đức ngày mai. Viết email cho cô giáo Frau Schmidt (khoảng 30 từ): xin lỗi, lý do, hỏi bài tập về nhà. | Liebe Frau Schmidt, leider kann ich morgen nicht zum Kurs kommen. Ich bin krank und muss zum Arzt gehen. Welche Hausaufgaben haben wir? Viele Grüße, Felix | Liebe/Sehr geehrte, leider, kann, Hausaufgaben, Grüße
w: Teil 2 – Bạn mời bạn bè đến tiệc sinh nhật. Viết tin nhắn (khoảng 30 từ): khi nào, ở đâu, mang gì, xin trả lời. | Hallo Leute, am Samstag habe ich Geburtstag! Ich mache um 19 Uhr eine Party bei mir, Bergstraße 12. Bitte bringt Getränke mit. Könnt ihr kommen? Bitte antwortet bis Donnerstag. Felix | Samstag/Uhr, Party, mitbringen/bringt, kommen

## 13.4 Thi thử: Nói
kind: exam
parts: c_nv
goal: Thi thử phần Nói 3 phần: tự giới thiệu; hỏi và trả lời theo chủ đề; đề nghị và đáp lại. Mỗi câu cần đạt mức nói trong ⚙.
nico: 74
t: Felix | Mein Name ist Felix Nguyen. | Tên tôi là Felix Nguyen.
t: Felix | Ich bin fünfundzwanzig Jahre alt. | Tôi 25 tuổi.
t: Felix | Ich komme aus Vietnam und wohne jetzt in Berlin. | Tôi đến từ Việt Nam và hiện sống ở Berlin.
t: Felix | Ich spreche Vietnamesisch, Englisch und ein bisschen Deutsch. | Tôi nói tiếng Việt, tiếng Anh và một chút tiếng Đức.
t: Felix | Ich bin Student und arbeite manchmal in einem Café. | Tôi là sinh viên và thỉnh thoảng làm thêm ở quán cà phê.
t: Felix | Meine Hobbys sind Fußball und Kochen. | Sở thích của tôi là bóng đá và nấu ăn.
t: Felix | Meine Telefonnummer ist null eins sieben sechs, drei vier fünf, zwo acht. | Số điện thoại của tôi là 0176 345 28.
ans: Teil 2 · Thema Essen · Thẻ "Frühstück": hãy đặt một câu hỏi. (Bạn hỏi bạn thi.) | Was isst du zum Frühstück? | was, Frühstück | Câu hỏi W + động từ ở vị trí 2.
ans: Teil 2 · Thema Essen · Người kia hỏi: "Was isst du gern?" Hãy trả lời. | Ich esse gern Reis mit Gemüse. Am liebsten esse ich Pho. | esse gern
ans: Teil 2 · Thema Freizeit · Thẻ "Wochenende": hãy đặt một câu hỏi. | Was machst du am Wochenende? | Wochenende | Câu hỏi về cuối tuần.
ans: Teil 2 · Thema Freizeit · Người kia hỏi: "Was hast du letztes Wochenende gemacht?" Hãy trả lời. | Ich habe meine Freunde besucht und wir haben gekocht. | habe, ge…t
ans: Teil 3 · Thẻ có hình 🪟 (cửa sổ): hãy nhờ người kia một việc. | Können Sie bitte das Fenster aufmachen? / Machen Sie bitte das Fenster auf! | bitte, Fenster | Nhờ lịch sự: Können Sie bitte …? / mệnh lệnh với Sie + bitte.
ans: Teil 3 · Người kia nhờ: "Können Sie mir bitte helfen?" Hãy đáp lại. | Ja, natürlich. Was kann ich für Sie tun? | ja, natürlich/gern
ans: Teil 3 · Thẻ có hình 💧 (nước): hãy nhờ người kia một việc. | Können Sie mir bitte ein Glas Wasser geben? | bitte, Wasser
`;
