/* Lộ trình 0 → A2 · Tháng 2 (tuần 5–8) — A1.2 Đời sống hằng ngày. Cú pháp: xem course-data.js */
window.COURSE_M2=`
#M 2 | A1.2 – Đời sống hằng ngày | Mua sắm, giá tiền, giờ giấc, lịch tuần, một ngày của tôi, ăn uống ở quán và nhà hàng. Ngữ pháp: cách 4 (Akkusativ), möchten, đảo động từ vị trí 2, động từ tách, trạng từ tần suất, mögen/gern/lieber, nehmen.
#W 5 | Đồ vật & mua sắm cơ bản | Mua 3 món, hỏi giá, trả tiền.
#W 6 | Giờ giấc & ngày trong tuần | Nói giờ (chính thức và thông thường) và lịch một tuần của mình.
#W 7 | Một ngày của tôi | Kể một ngày của mình 10 câu, dùng động từ tách và trạng từ tần suất.
#W 8 | Ăn uống + Kiểm tra tháng 2 | Gọi món trọn vẹn một bữa ở nhà hàng; nói mình thích ăn gì.

## 5.1 Đồ vật quanh ta
goal: Hỏi "Cái này là gì?" và gọi tên đồ vật quanh mình.
nico: 21
i: Felix | Lena, was ist das? | Lena, cái này là gì?
i: Lena | Das ist ein Kuli. Und das ist ein Heft. | Đây là cái bút bi. Còn đây là quyển vở.
i: Felix | Und wie heißt das auf Deutsch? | Còn cái này tiếng Đức gọi là gì?
i: Lena | Das ist eine Lampe. Sie ist neu. | Đây là cái đèn. Nó mới.
iq: Felix hỏi gì? | tên đồ vật | giá tiền | giờ
iq: Cái đèn thế nào? | mới | cũ | hỏng
iq: "Wie heißt das auf Deutsch?" nghĩa là? | Cái này tiếng Đức gọi là gì? | Bạn tên gì? | Cái này giá bao nhiêu?
words: Tasche; Schlüssel; Buch; Heft; Kuli; Bleistift; Lampe; Tisch; Stuhl; Uhr; Computer; Was ist das?
+w: phr | - | Was ist das? | | Cái này là gì? | [Was ist das]? – Das ist ein Kuli. | Cái này là gì? – Đây là cái bút bi.
g: <b>Hỏi tên đồ vật:</b> Was ist das? → Das ist <b>ein</b> Kuli / <b>eine</b> Tasche / <b>ein</b> Buch. Số nhiều: Das sind Bücher.
g: <b>Thay danh từ bằng đại từ</b> theo giống của từ, không theo "người hay vật": der Tisch → <b>er</b>, die Lampe → <b>sie</b>, das Buch → <b>es</b>.
gt: der | die | das | số nhiều
gt: Der Tisch ist neu. → Er ist neu. | Die Lampe ist alt. → Sie ist alt. | Das Buch ist gut. → Es ist gut. | Die Stühle sind neu. → Sie sind neu.
g: <b>Lỗi hay gặp:</b> dùng "es" cho mọi đồ vật như "nó" tiếng Việt. Chiếc bàn (der Tisch) là <b>er</b>.
gx: fmc: Das ist ___ Tasche. | eine | ein | einen
gx: fmc: Das ist ___ Schlüssel. | ein | eine | einen
gx: fmc: Der Computer ist neu. ___ ist teuer. | Er | Sie | Es
gx: fmc: Die Uhr ist schön. ___ ist alt. | Sie | Er | Es
gx: fmc: Das Buch ist gut. ___ ist interessant. | Es | Er | Sie
gx: art: Stuhl | der
x: art: Tasche | die
x: art: Heft | das
x: art: Kuli | der
x: art: Uhr | die
x: art: Computer | der
x: lmc: Das ist eine Lampe. | 💡 đèn | 🔑 chìa khoá | 📕 sách
x: lmc: Das ist ein Schlüssel. | 🔑 chìa khoá | 👜 túi | ⌚ đồng hồ
x: lmc: Das sind Bücher. | 📚 những quyển sách | 📕 một quyển sách | 📓 vở
x: lmc: Das ist ein Stuhl. | 🪑 ghế | 🛏 giường | 🖥 máy tính
x: fill: Was ist ___? – Das ist ein Heft. | das
x: fill: Das ist ein Bleistift. ___ ist neu. | Er
x: tr: Cái này là gì? | Was ist das?
x: tr: Đây là một cái túi. | Das ist eine Tasche.
lt: Trong lớp học
l: Frau Schmidt | Ist das Ihre Tasche, Herr Wolf? | Đây là túi của anh phải không, anh Wolf?
l: Tom | Nein, das ist nicht meine Tasche. Meine Tasche ist schwarz. | Không, đây không phải túi của tôi. Túi của tôi màu đen.
l: Frau Schmidt | Und der Schlüssel? | Còn chùm chìa khoá?
l: Tom | Ja, der Schlüssel ist von mir. Danke! | Vâng, chìa khoá là của tôi. Cảm ơn!
lq: Cái túi có phải của Tom không? | không | có | không rõ
lq: Túi của Tom màu gì? | đen | trắng | đỏ
lq: Cái gì là của Tom? | chìa khoá | quyển sách | đồng hồ
ld: Das ist nicht meine Tasche.
rt: Tin rao bán đồ cũ
r: Anzeige | Verkaufe: Tisch und vier Stühle, sehr gut, 80 Euro. Eine Lampe, neu, 15 Euro. Telefon: 0176 557 23 | Bán: bàn và bốn ghế, rất tốt, 80 euro. Một cái đèn, mới, 15 euro. Điện thoại: 0176 557 23
rq: Có bán ba cái ghế. | F
rq: Cái đèn còn mới. | R
rq: Bàn và ghế giá 80 euro. | R
t: Felix | Lena, was ist das? | Lena, cái này là gì?
t: Lena | Das ist eine Uhr. Sie ist neu. | Đây là cái đồng hồ. Nó mới.
t: Felix | Und das? Wie heißt das auf Deutsch? | Còn cái này? Tiếng Đức gọi là gì?
t: Lena | Das ist ein Schlüssel. Er ist alt. | Đây là chìa khoá. Nó cũ.
w: Viết 3 câu về 3 đồ vật trên bàn của bạn (dùng er/sie/es). | Das ist ein Computer. Er ist neu. Das ist eine Lampe. Sie ist klein. | das ist, er/sie/es

## 5.2 Cách 4: einen, eine, ein
goal: Nói mình có, cần, tìm, mua cái gì (Akkusativ).
nico: 23,22
i: Lena | Was brauchst du für den Kurs? | Bạn cần gì cho khoá học?
i: Felix | Ich brauche einen Kuli, eine Tasche und ein Heft. | Mình cần một cái bút bi, một cái túi và một quyển vở.
i: Lena | Hast du einen Computer? | Bạn có máy tính không?
i: Felix | Nein, ich habe keinen Computer. Ich suche einen. | Không, mình không có máy tính. Mình đang tìm một cái.
iq: Felix cần mấy món? | 3 | 2 | 4
iq: Felix có máy tính không? | không | có | có hai cái
iq: "Ich suche einen" nghĩa là? | mình đang tìm một cái | mình có một cái | mình mua một cái
words: brauchen; suchen; kaufen; finden; sehen; Fahrrad; Fernseher; Schrank; Regal; Bett
g: <b>Cách 4 (Akkusativ)</b> là tân ngữ — vật bị "có, cần, tìm, mua, thấy". Chỉ <b>giống đực</b> đổi: der → <b>den</b>, ein → <b>einen</b>, kein → <b>keinen</b>. Giống cái, trung, số nhiều giữ nguyên.
gt: | der (đực) | die (cái) | das (trung) | số nhiều
gt: Chủ ngữ | der / ein Tisch | die / eine Lampe | das / ein Bett | die Stühle
gt: Tân ngữ | <b>den / einen</b> Tisch | die / eine Lampe | das / ein Bett | die Stühle
g: Động từ hay đi với cách 4: haben, brauchen, suchen, kaufen, finden, sehen, nehmen, möchten.
g: <b>Lỗi hay gặp:</b> "Ich habe ein Bruder", "Ich brauche ein Schrank" (đúng: einen Bruder, einen Schrank).
gx: fmc: Ich brauche ___ Schrank. | einen | ein | eine
gx: fmc: Wir kaufen ___ Bett. | ein | einen | eine
gx: fmc: Er sucht ___ Lampe. | eine | einen | ein
gx: fmc: Ich habe ___ Fernseher. | keinen | kein | keine
gx: fmc: Siehst du ___ Tisch? | den | der | dem
gx: fmc: Wir brauchen ___ Stühle. | — (không mạo từ) | einen | eine
x: fmc: Ich suche ___ Regal. (das Regal) | ein | einen | eine
x: fill: Ich brauche ein___ Kuli. | en | (der Kuli)
x: fill: Hast du ein___ Tasche? | e | (die Tasche)
x: fmc: Ich habe ___ Fahrrad. (das Fahrrad) | kein | keinen | keine
x: fill: Wir kaufen kein___ Fernseher. | en | (der Fernseher)
x: fmc: Ich finde ___ Schlüssel nicht. | den | der | die
x: fmc: Wo ist ___ Schlüssel? | der | den | dem
x: ty: Viết câu với cách 4 | ich / brauchen / ein Schrank | Ich brauche einen Schrank.
x: ty: Viết câu với cách 4 | wir / kaufen / ein Bett | Wir kaufen ein Bett.
x: ty: Viết câu với cách 4 | er / suchen / eine Lampe | Er sucht eine Lampe.
x: lmc: Ich brauche einen Tisch. | 🪑 bàn (cần) | 🛏 giường | 📚 kệ sách
x: lmc: Wir haben keinen Fernseher. | không có TV | có một TV | cần một TV
x: lmc: Ich kaufe ein Fahrrad. | 🚲 mua xe đạp | 🚗 mua ô tô | 🚲 bán xe đạp
lt: Nhà mới của Tom
l: Anna | Ist deine Wohnung schon fertig? | Nhà bạn xong chưa?
l: Tom | Nein. Ich habe ein Bett und einen Tisch, aber ich brauche noch einen Schrank. | Chưa. Mình có giường và bàn, nhưng còn cần một cái tủ.
l: Anna | Und einen Fernseher? | Còn TV?
l: Tom | Nein, ich brauche keinen Fernseher. Ich habe einen Computer. | Không, mình không cần TV. Mình có máy tính.
lq: Tom đã có gì? | giường và bàn | tủ và TV | ghế và đèn
lq: Tom còn cần gì? | một cái tủ | một cái TV | một cái giường
lq: Tại sao Tom không cần TV? | có máy tính rồi | không thích xem | không có tiền
ld: Ich brauche noch einen Schrank.
rt: Danh sách cần mua
r: | Einkaufsliste für die Wohnung: einen Schrank, ein Regal, eine Lampe, zwei Stühle. Nicht kaufen: ein Bett – das haben wir schon! | Danh sách đồ cần mua cho căn hộ: một cái tủ, một cái kệ, một cái đèn, hai cái ghế. Không mua: giường – cái này đã có rồi!
rq: Họ cần mua một cái giường. | F
rq: Họ cần hai cái ghế. | R
rq: Trong danh sách có một cái đèn. | R
t: Lena | Was brauchst du? | Bạn cần gì?
t: Felix | Ich brauche einen Schrank und eine Lampe. | Mình cần một cái tủ và một cái đèn.
t: Lena | Hast du einen Tisch? | Bạn có bàn không?
t: Felix | Ja, ich habe einen Tisch, aber ich habe keinen Stuhl. | Có, mình có bàn, nhưng không có ghế.
w: Viết 3 câu: bạn có gì, cần gì, không có gì trong phòng (dùng einen/eine/ein, keinen). | Ich habe ein Bett. Ich brauche einen Schrank. Ich habe keinen Fernseher. | habe, brauche, einen/keinen

## 5.3 Hỏi giá, đắt và rẻ
goal: Hỏi giá, nghe hiểu giá tiền, nói đắt hay rẻ.
nico: 49
i: Felix | Entschuldigung, was kostet die Lampe? | Xin lỗi, cái đèn giá bao nhiêu?
i: Verkäuferin | Die Lampe kostet neunzehn Euro neunundneunzig. | Cái đèn giá 19,99 euro.
i: Felix | Oh, das ist zu teuer. Und die Tasche? | Ôi, đắt quá. Còn cái túi?
i: Verkäuferin | Die Tasche ist im Angebot: nur acht Euro. | Cái túi đang khuyến mãi: chỉ 8 euro.
iq: Cái đèn giá bao nhiêu? | 19,99 € | 9,99 € | 90,99 €
iq: Felix thấy cái đèn thế nào? | đắt quá | rẻ | đẹp
iq: Cái túi giá bao nhiêu? | 8 € | 18 € | 80 €
words: kosten; Preis; Euro; Cent; teuer; billig; Geld; Angebot; zu; wie viel
g: <b>Hỏi giá:</b> Was kostet …? / Wie viel kostet …? Số nhiều: Was kost<b>en</b> die Schuhe? → Sie kosten 40 Euro.
g: <b>Đọc giá:</b> 3,49 € = <b>drei Euro neunundvierzig</b> (không đọc "Cent" ở giữa). 0,80 € = achtzig Cent. 1,– € = ein Euro.
g: <b>teuer</b> (đắt) ↔ <b>billig</b> (rẻ); <b>zu teuer</b> = đắt quá (mức không chấp nhận). <b>im Angebot</b> = đang giảm giá.
g: <b>Lỗi hay gặp:</b> "Wie viel kostet die Schuhe?" (số nhiều phải là kosten).
gx: fmc: Was ___ die Tasche? | kostet | kosten | kostest
gx: fmc: Was ___ die Äpfel? | kosten | kostet | koste
gx: fmc: Das ist nicht teuer, das ist ___. | billig | teuer | groß
gx: fmc: 100 Euro für eine Tasse? Das ist ___ teuer! | zu | sehr gut | auch
gx: fmc: Die Lampe ist ___ Angebot. | im | in | am
x: pr: 3,49
x: pr: 19,99
x: pr: 8,50
x: pr: 1,20
x: pr: 45,00
x: pr: 2,79
x: mc: "zwölf Euro fünfzig" là: | 12,50 € | 12,15 € | 20,50 €
x: mc: "neunundneunzig Cent" là: | 0,99 € | 9,90 € | 99 €
x: fill: Wie viel ___ das? | kostet
x: fill: Die Schuhe ___ 60 Euro. | kosten
x: tr: Cái túi giá bao nhiêu? | Was kostet die Tasche? / Wie viel kostet die Tasche?
x: tr: Đắt quá! | Das ist zu teuer! / Zu teuer!
x: ty: Đọc giá bằng chữ | 4,50 € | vier Euro fünfzig
lt: Ở chợ đồ cũ
l: Anna | Wie viel kostet das Fahrrad? | Chiếc xe đạp giá bao nhiêu?
l: Verkäufer | Fünfundachtzig Euro. | 85 euro.
l: Anna | Hm, das ist ziemlich teuer. Siebzig? | Hừm, khá đắt. 70 nhé?
l: Verkäufer | Na gut, achtzig Euro. | Thôi được, 80 euro.
lq: Giá ban đầu của chiếc xe đạp? | 85 € | 58 € | 75 €
lq: Anna trả giá bao nhiêu? | 70 € | 80 € | 17 €
lq: Cuối cùng giá là bao nhiêu? | 80 € | 70 € | 85 €
ld: Das ist ziemlich teuer.
rt: Bảng giá ở cửa hàng
r: | Angebot der Woche: Kaffee 4,99 € statt 6,49 €. Tee 1,79 €. Schokolade 0,89 €. | Khuyến mãi tuần: cà phê 4,99 € thay vì 6,49 €. Trà 1,79 €. Sô-cô-la 0,89 €.
rq: Cà phê bây giờ giá 6,49 €. | F
rq: Sô-cô-la rẻ hơn 1 euro. | R
rq: Trà giá 1,79 €. | R
t: Felix | Entschuldigung, was kostet die Tasche? | Xin lỗi, cái túi giá bao nhiêu?
t: Verkäuferin | Die Tasche kostet zwanzig Euro. | Cái túi giá 20 euro.
t: Felix | Das ist zu teuer. Und das Heft? | Đắt quá. Còn quyển vở?
t: Verkäuferin | Das Heft kostet nur ein Euro fünfzig. | Quyển vở chỉ 1,50 euro.
t: Felix | Gut, dann nehme ich das Heft. | Được, vậy tôi lấy quyển vở.
w: Viết 2 câu hỏi giá và 1 câu nói đắt/rẻ. | Was kostet die Lampe? Wie viel kosten die Stühle? Das ist billig! | kostet/kosten, teuer/billig

## 5.4 Ở cửa hàng: brauchen, möchten
goal: Mua đồ ở siêu thị: nói muốn mua gì, bao nhiêu, trả tiền.
nico: 50,51
i: Verkäuferin | Guten Tag! Was möchten Sie? | Chào anh! Anh muốn mua gì?
i: Felix | Ich möchte ein Kilo Äpfel und zwei Flaschen Wasser. | Tôi muốn một ký táo và hai chai nước.
i: Verkäuferin | Sonst noch etwas? | Còn gì nữa không?
i: Felix | Nein, danke. Das ist alles. Kann ich mit Karte bezahlen? | Không, cảm ơn. Thế thôi. Tôi trả bằng thẻ được không?
iq: Felix mua bao nhiêu táo? | 1 ký | 2 ký | 1 quả
iq: Felix mua mấy chai nước? | 2 | 1 | 3
iq: Felix muốn trả tiền thế nào? | bằng thẻ | tiền mặt | không trả
words: möchten; Kilo; Gramm; Stück; Packung; Flasche; Tüte; bezahlen; bar; Karte; Kasse; Das ist alles.
+w: phr | - | Sonst noch etwas? | | Còn gì nữa không? | [Sonst noch etwas]? – Nein, danke. | Còn gì nữa không? – Không, cảm ơn.
g: <b>möchten</b> (muốn, lịch sự) + cách 4: ich möcht<b>e</b>, du möcht<b>est</b>, er/sie möcht<b>e</b>, wir/Sie möcht<b>en</b>. Ich möchte <b>einen</b> Kaffee.
g: <b>Số lượng + danh từ, không cần mạo từ:</b> ein Kilo Äpfel, 200 Gramm Käse, zwei Flaschen Wasser, eine Packung Milch, drei Stück Kuchen.
gt: Người bán | Bạn
gt: Was möchten Sie? / Bitte schön? | Ich möchte … / Ich brauche …
gt: Sonst noch etwas? | Nein, danke. Das ist alles.
gt: Das macht 7,40 Euro. | Kann ich mit Karte bezahlen? / Bar, bitte.
g: <b>Lỗi hay gặp:</b> "Ich möchte ein Kilo von Äpfel" (không cần von), "er möchtet" (đúng: er möchte).
gx: fmc: Ich ___ einen Kaffee. | möchte | möchtest | möchten
gx: fmc: Was ___ du? | möchtest | möchte | möchtet
gx: fmc: Er ___ zwei Brötchen. | möchte | möchtet | möchtest
gx: fmc: Ich möchte ein Kilo ___. | Äpfel | von Äpfel | Apfel von
gx: fmc: Zwei ___ Wasser, bitte. | Flaschen | Flasche | Flaschens
x: pr: 7,40
x: pr: 12,35
x: pr: 0,99
x: mc: Người bán hỏi "Sonst noch etwas?". Bạn không cần thêm gì: | Nein, danke. Das ist alles. | Ja, bitte schön. | Das macht 5 Euro.
x: mc: Bạn muốn trả bằng tiền mặt: | Bar, bitte. | Mit Karte, bitte. | Die Kasse, bitte.
x: mc: Người bán nói "Das macht 7,40 Euro." nghĩa là: | tổng cộng 7,40 € | còn 7,40 € | 7,40 € một ký
x: fill: Ich möchte 200 ___ Käse. | Gramm
x: fill: Eine ___ Milch, bitte. | Packung / Flasche
x: ord: Ich möchte ein Kilo Äpfel. | Tôi muốn một ký táo.
x: ord: Kann ich mit Karte bezahlen? | Tôi trả bằng thẻ được không?
x: tr: Tôi muốn hai chai nước. | Ich möchte zwei Flaschen Wasser.
x: tr: Thế thôi, cảm ơn. | Das ist alles, danke. / Danke, das ist alles.
lt: Ở tiệm bánh
l: Verkäuferin | Guten Morgen! Bitte schön? | Chào buổi sáng! Chị cần gì ạ?
l: Anna | Ich möchte vier Brötchen und ein Brot, bitte. | Cho tôi bốn bánh mì nhỏ và một ổ bánh mì.
l: Verkäuferin | Sonst noch etwas? | Còn gì nữa không ạ?
l: Anna | Ja, zwei Stück Kuchen. Was macht das? | Có, hai miếng bánh ngọt. Hết bao nhiêu?
l: Verkäuferin | Das macht neun Euro zwanzig. | Hết 9,20 euro.
lq: Anna mua mấy bánh mì nhỏ? | 4 | 2 | 1
lq: Anna mua thêm gì? | hai miếng bánh ngọt | một chai nước | cà phê
lq: Tổng cộng bao nhiêu? | 9,20 € | 2,90 € | 9,12 €
ld: Ich möchte vier Brötchen, bitte.
rt: Hoá đơn
r: Kassenbon | 1 kg Äpfel 2,49 · 2 Fl. Wasser 1,38 · 1 Packung Milch 1,19 · Summe 5,06 € · bar | 1 kg táo 2,49 · 2 chai nước 1,38 · 1 hộp sữa 1,19 · Tổng 5,06 € · tiền mặt
rq: Người mua trả bằng thẻ. | F
rq: Tổng cộng là 5,06 €. | R
rq: Người mua mua hai chai nước. | R
t: Verkäuferin | Guten Tag! Was möchten Sie? | Chào anh! Anh muốn mua gì?
t: Felix | Ich möchte ein Kilo Äpfel und eine Packung Milch. | Tôi muốn một ký táo và một hộp sữa.
t: Verkäuferin | Sonst noch etwas? | Còn gì nữa không?
t: Felix | Nein, danke. Das ist alles. | Không, cảm ơn. Thế thôi.
t: Verkäuferin | Das macht drei Euro sechzig. | Hết 3,60 euro.
t: Felix | Kann ich mit Karte bezahlen? | Tôi trả bằng thẻ được không?
w: Viết danh sách mua sắm 4 món có số lượng, rồi 1 câu bạn nói ở quầy. | ein Kilo Äpfel, zwei Flaschen Wasser, 200 Gramm Käse, eine Packung Milch. Ich möchte ein Kilo Äpfel, bitte. | Kilo/Flasche/Gramm/Packung, möchte

## 5.5 Ôn tuần 5
kind: review
goal: Mua 3 món ở cửa hàng: nói muốn gì, hỏi giá, trả tiền.
nico: 21,23,49,51
x: pr: 6,80
x: pr: 14,99
x: fmc: Ich brauche ___ Tisch. | einen | ein | eine
x: fmc: Was ___ die Schuhe? | kosten | kostet | kostest
t: Verkäufer | Guten Tag! Bitte schön? | Chào chị! Chị cần gì ạ?
t: Felix | Ich möchte eine Tasche und zwei Hefte. Was kostet die Tasche? | Tôi muốn một cái túi và hai quyển vở. Cái túi giá bao nhiêu?
t: Verkäufer | Die Tasche kostet fünfzehn Euro. | Cái túi giá 15 euro.
t: Felix | Gut. Und ich brauche einen Kuli. | Được. Và tôi cần một cái bút bi.
t: Verkäufer | Sonst noch etwas? | Còn gì nữa không?
t: Felix | Nein, das ist alles. Kann ich bar bezahlen? | Không, thế thôi. Tôi trả tiền mặt được không?
t: Verkäufer | Natürlich. Das macht neunzehn Euro. | Tất nhiên. Hết 19 euro.
w: Viết một đoạn hội thoại ngắn (4 câu) ở cửa hàng: bạn muốn mua 2 món, hỏi giá, trả tiền. | Ich möchte einen Kuli und ein Heft. Was kostet das Heft? Das ist billig. Kann ich mit Karte bezahlen? | möchte, kostet, bezahlen

## 6.1 Giờ chính thức
goal: Hỏi giờ và nói giờ kiểu chính thức (14:30 = vierzehn Uhr dreißig).
nico: 33
i: Felix | Entschuldigung, wie spät ist es? | Xin lỗi, mấy giờ rồi?
i: Anna | Es ist vierzehn Uhr dreißig. | Bây giờ là 14 giờ 30.
i: Felix | Oh, mein Kurs beginnt um fünfzehn Uhr. | Ôi, lớp của mình bắt đầu lúc 15 giờ.
i: Anna | Kein Problem, du hast noch eine halbe Stunde Zeit. | Không sao, bạn còn nửa tiếng nữa.
iq: Bây giờ là mấy giờ? | 14:30 | 4:30 | 13:30
iq: Lớp của Felix bắt đầu lúc mấy giờ? | 15:00 | 16:00 | 14:00
iq: Felix còn bao nhiêu thời gian? | nửa tiếng | một tiếng | 15 phút
words: Uhr; Stunde; Minute; Wie spät ist es?; Zeit; jetzt; wann; beginnen; um; früh; spät
g: <b>Giờ chính thức</b> (đài, ga tàu, lịch hẹn): giờ (0–24) + <b>Uhr</b> + phút. 14:30 = vierzehn Uhr dreißig; 8:05 = acht Uhr fünf; 1:00 = ein Uhr.
g: <b>Hỏi giờ:</b> Wie spät ist es? / Wie viel Uhr ist es? → Es ist … <b>Hỏi lúc nào:</b> Wann …? → <b>um</b> + giờ: Der Kurs beginnt um 15 Uhr.
gt: Viết | Đọc
gt: 7:00 | sieben Uhr
gt: 9:15 | neun Uhr fünfzehn
gt: 18:45 | achtzehn Uhr fünfundvierzig
gt: 20:10 | zwanzig Uhr zehn
g: <b>Lỗi hay gặp:</b> "die Uhr" (đồng hồ, giờ) khác "die Stunde" (một tiếng đồng hồ): Der Film dauert zwei <b>Stunden</b> (không nói "zwei Uhr").
gx: fmc: Der Kurs beginnt ___ neun Uhr. | um | am | im
gx: fmc: ___ ist es? – Es ist zehn Uhr. | Wie spät | Wann | Wie viel
gx: fmc: Der Film dauert zwei ___. | Stunden | Uhr | Uhren
gx: fmc: 13:20 = dreizehn Uhr ___ | zwanzig | zwölf | dreißig
gx: tmo: 14:30
gx: tmo: 8:05
x: tmo: 7:45
x: tmo: 16:20
x: tmo: 21:10
x: tmo: 12:00
x: tmo: 18:30
x: tmo: 9:15
x: mc: 23:00 đọc là: | dreiundzwanzig Uhr | elf Uhr dreiundzwanzig | zwanzig Uhr drei
x: mc: "sechzehn Uhr fünfzig" là: | 16:50 | 6:50 | 16:15
x: fill: Es ist zehn ___ dreißig. | Uhr
x: fill: Wann beginnt der Film? – ___ acht Uhr. | Um
x: tr: Mấy giờ rồi? | Wie spät ist es? / Wie viel Uhr ist es?
x: ty: Viết giờ chính thức bằng chữ | 19:30 | neunzehn Uhr dreißig
lt: Thông báo ở ga
l: Durchsage | Der ICE nach München fährt heute um elf Uhr fünfundzwanzig. | Tàu ICE đi München hôm nay chạy lúc 11 giờ 25.
l: Felix | Elf Uhr fünfundzwanzig? Und wie spät ist es jetzt? | 11 giờ 25 à? Bây giờ mấy giờ rồi?
l: Lena | Es ist elf Uhr zehn. Wir haben noch fünfzehn Minuten. | 11 giờ 10. Còn 15 phút nữa.
lq: Tàu chạy lúc mấy giờ? | 11:25 | 11:52 | 12:25
lq: Bây giờ mấy giờ? | 11:10 | 10:11 | 11:15
lq: Họ còn bao nhiêu phút? | 15 | 25 | 50
ld: Wir haben noch fünfzehn Minuten.
rt: Giờ mở cửa
r: | Bibliothek: Montag bis Freitag 9:00 – 18:30 Uhr. Samstag 10:00 – 14:00 Uhr. Sonntag geschlossen. | Thư viện: thứ Hai đến thứ Sáu 9:00 – 18:30. Thứ Bảy 10:00 – 14:00. Chủ nhật đóng cửa.
rq: Thư viện mở cửa ngày Chủ nhật. | F
rq: Thứ Bảy thư viện đóng cửa lúc 14 giờ. | R
rq: Thứ Hai thư viện mở cửa lúc 9 giờ. | R
t: Felix | Entschuldigung, wie spät ist es? | Xin lỗi, mấy giờ rồi?
t: Anna | Es ist vierzehn Uhr dreißig. | Bây giờ là 14 giờ 30.
t: Felix | Danke. Wann beginnt der Kurs? | Cảm ơn. Khi nào lớp bắt đầu?
t: Anna | Der Kurs beginnt um fünfzehn Uhr. | Lớp bắt đầu lúc 15 giờ.
w: Viết giờ bằng chữ (kiểu chính thức): 7:30, 12:15, 20:45. | sieben Uhr dreißig, zwölf Uhr fünfzehn, zwanzig Uhr fünfundvierzig | Uhr

## 6.2 Giờ thông thường: halb, Viertel
goal: Nói và nghe hiểu giờ kiểu nói hằng ngày (halb acht, Viertel nach drei).
nico: 36
i: Lena | Wann treffen wir uns? | Khi nào mình gặp nhau?
i: Felix | Um halb acht? | Lúc bảy rưỡi nhé?
i: Lena | Halb acht ist zu früh. Viertel nach acht? | Bảy rưỡi sớm quá. Tám giờ mười lăm nhé?
i: Felix | Okay, um Viertel nach acht. Bis dann! | Được, lúc tám giờ mười lăm. Hẹn gặp!
iq: "halb acht" là mấy giờ? | 7:30 | 8:30 | 8:00
iq: Họ gặp nhau lúc mấy giờ? | 8:15 | 7:30 | 7:45
iq: Tại sao Lena không muốn gặp lúc 7:30? | quá sớm | quá muộn | bận
words: halb; Viertel; vor; nach; gleich; bald; später; pünktlich
+w: prep | - | vor | | trước (… kém) | Es ist zehn [vor] acht. | Bây giờ là tám giờ kém mười.
+w: prep | - | nach | | sau (… hơn) | Es ist zehn [nach] acht. | Bây giờ là tám giờ mười.
g: <b>Giờ nói hằng ngày</b> dùng 1–12 và các từ: <b>nach</b> (hơn), <b>vor</b> (kém), <b>Viertel</b> (15 phút), <b>halb</b> (rưỡi).
gt: Giờ | Cách nói | Mẹo
gt: 8:10 | zehn nach acht | 10 phút sau 8 giờ
gt: 8:15 | Viertel nach acht | 1/4 sau 8 giờ
gt: 8:30 | <b>halb neun</b> | "nửa (đường tới) 9 giờ" ⚠️
gt: 8:45 | Viertel vor neun | 9 giờ kém 15
gt: 8:50 | zehn vor neun | 9 giờ kém 10
g: <b>Bẫy lớn nhất với người Việt:</b> halb + giờ <b>sau</b>: halb neun = 8:30 (không phải 9:30).
gx: tmi: 8:30
gx: tmi: 3:15
gx: tmi: 6:45
gx: tmi: 10:10
gx: fmc: 7:30 = halb ___ | acht | sieben | neun
gx: fmc: 5:45 = Viertel vor ___ | sechs | fünf | sieben
x: tmi: 11:30
x: tmi: 4:15
x: tmi: 9:45
x: tmi: 2:50
x: tmi: 7:20
x: tmi: 12:30
x: tmw: 8:30
x: tmw: 3:15
x: tmw: 6:45
x: mc: "halb zwei" là mấy giờ? | 1:30 | 2:30 | 12:30
x: mc: "zehn vor elf" là: | 10:50 | 11:10 | 10:10
x: tr: Bây giờ là bảy giờ rưỡi. | Es ist halb acht.
lt: Hẹn bác sĩ
l: Sekretärin | Praxis Dr. Berger, guten Tag! | Phòng khám bác sĩ Berger, xin chào!
l: Felix | Guten Tag, ich brauche einen Termin, bitte. | Chào chị, tôi cần một lịch hẹn.
l: Sekretärin | Morgen um Viertel vor zehn? | Ngày mai lúc mười giờ kém mười lăm được không?
l: Felix | Das ist schlecht. Geht es später, vielleicht um halb zwölf? | Giờ đó không tiện. Muộn hơn được không, khoảng mười một rưỡi?
l: Sekretärin | Ja, halb zwölf geht. | Vâng, mười một rưỡi được.
lq: Thư ký đề nghị mấy giờ? | 9:45 | 10:45 | 10:15
lq: Felix hẹn được lúc mấy giờ? | 11:30 | 12:30 | 11:15
lq: Felix gọi cho ai? | phòng khám | ngân hàng | trường học
ld: Halb zwölf geht.
rt: Tin nhắn của Lena
r: SMS | Hallo Felix, das Kino beginnt um Viertel nach acht. Treffen wir uns um acht vor dem Kino? Sei bitte pünktlich! Lena | Chào Felix, phim bắt đầu lúc 8:15. Mình gặp lúc 8 giờ trước rạp nhé? Nhớ đúng giờ nha! Lena
rq: Phim bắt đầu lúc 8:15. | R
rq: Họ gặp nhau lúc 8:30. | F
rq: Lena nhắc Felix đến đúng giờ. | R
t: Lena | Wie spät ist es? | Mấy giờ rồi?
t: Felix | Es ist Viertel nach sieben. | Bảy giờ mười lăm.
t: Lena | Und wann beginnt der Film? | Thế khi nào phim bắt đầu?
t: Felix | Um halb neun. Wir haben noch Zeit. | Lúc tám rưỡi. Mình còn thời gian.
w: Viết giờ kiểu nói hằng ngày: 9:30, 4:15, 10:45, 2:50. | halb zehn, Viertel nach vier, Viertel vor elf, zehn vor drei | halb, Viertel

## 6.3 Thứ và buổi trong ngày
goal: Nói các thứ trong tuần, các buổi, và hôm nay/ngày mai làm gì.
nico: 30,32
i: Tom | Was machst du am Samstag? | Thứ Bảy bạn làm gì?
i: Felix | Am Samstag arbeite ich. Aber am Sonntag habe ich frei. | Thứ Bảy mình làm việc. Nhưng Chủ nhật mình rảnh.
i: Tom | Am Sonntagnachmittag spielen wir Fußball. Kommst du? | Chiều Chủ nhật bọn mình đá bóng. Bạn đến không?
i: Felix | Gern! | Rất sẵn lòng!
iq: Thứ Bảy Felix làm gì? | làm việc | đá bóng | nghỉ
iq: Ngày nào Felix rảnh? | Chủ nhật | thứ Bảy | thứ Sáu
iq: Họ đá bóng lúc nào? | chiều Chủ nhật | sáng thứ Bảy | tối Chủ nhật
words: Montag; Dienstag; Mittwoch; Donnerstag; Freitag; Samstag; Sonntag; Wochenende; Vormittag; Nachmittag; Abend; heute
g: Các thứ và các buổi đều là giống đực (der) và đi với <b>am</b>: am Montag, am Wochenende, am Abend, am Nachmittag. Ngoại lệ: <b>in der Nacht</b>.
g: Ghép thứ + buổi: <b>am Sonntagnachmittag</b> (chiều Chủ nhật). Thêm -s = mọi lần, viết thường: <b>montags</b> = thứ Hai nào cũng; <b>abends</b> = buổi tối nào cũng.
gt: hôm qua | hôm nay | ngày mai
gt: gestern | heute | morgen
gt: gestern Abend | heute Morgen | morgen Nachmittag
g: <b>Lỗi hay gặp:</b> "in Montag", "um Montag" (đúng: am Montag); nhầm <b>morgen</b> (ngày mai) và <b>der Morgen</b> (buổi sáng).
gx: fmc: ___ Montag lerne ich Deutsch. | Am | Um | Im
gx: fmc: ___ der Nacht schlafe ich. | In | Am | Um
gx: fmc: Ich arbeite ___ Wochenende. | am | um | im
gx: fmc: "Sonntags" nghĩa là: | Chủ nhật nào cũng | chỉ Chủ nhật này | Chủ nhật tuần trước
gx: fmc: Hôm qua = ___ | gestern | morgen | heute
x: mc: Ngày sau thứ Ba là: | Mittwoch | Montag | Donnerstag
x: mc: Ngày trước thứ Bảy là: | Freitag | Sonntag | Donnerstag
x: mc: "morgen Abend" nghĩa là: | tối mai | sáng nay | tối qua
x: lmc: Am Donnerstag habe ich Deutschkurs. | thứ Năm | thứ Ba | thứ Bảy
x: lmc: Am Mittwochabend koche ich. | tối thứ Tư | sáng thứ Tư | tối thứ Hai
x: lmc: Samstags gehe ich schwimmen. | thứ Bảy nào cũng | chỉ thứ Bảy này | Chủ nhật
x: fill: Heute ist Montag. Morgen ist ___. | Dienstag
x: fill: Heute ist Freitag. Gestern war ___. | Donnerstag
x: fill: Samstag und Sonntag sind das ___. | Wochenende
x: tr: Chủ nhật tôi rảnh. | Am Sonntag habe ich frei.
x: tr: chiều thứ Sáu | am Freitagnachmittag / Freitagnachmittag
lt: Lịch học của Anna
l: Tom | Wann hast du Deutschkurs, Anna? | Anna học tiếng Đức vào hôm nào?
l: Anna | Montags und mittwochs, immer am Vormittag. | Thứ Hai và thứ Tư, luôn vào buổi sáng.
l: Tom | Und am Freitag? | Còn thứ Sáu?
l: Anna | Am Freitag arbeite ich, und am Wochenende besuche ich meine Eltern. | Thứ Sáu mình làm việc, cuối tuần mình thăm bố mẹ.
lq: Anna học tiếng Đức hôm nào? | thứ Hai và thứ Tư | thứ Ba và thứ Năm | thứ Sáu
lq: Anna học vào buổi nào? | buổi sáng | buổi chiều | buổi tối
lq: Cuối tuần Anna làm gì? | thăm bố mẹ | làm việc | học
ld: Am Wochenende besuche ich meine Eltern.
rt: Lịch tuần của Tom
r: | Mo: Deutschkurs 9–12 · Di: Arbeit · Mi: Deutschkurs 9–12 · Do: Arbeit · Fr: Fußball 18 Uhr · Sa/So: frei | T2: học tiếng Đức 9–12 · T3: làm việc · T4: học tiếng Đức · T5: làm việc · T6: đá bóng 18 giờ · T7/CN: rảnh
rq: Tom học tiếng Đức hai buổi một tuần. | R
rq: Tom đá bóng vào thứ Năm. | F
rq: Cuối tuần Tom rảnh. | R
t: Tom | Was machst du am Samstag? | Thứ Bảy bạn làm gì?
t: Felix | Am Samstagvormittag arbeite ich. | Sáng thứ Bảy mình làm việc.
t: Tom | Und am Sonntag? | Còn Chủ nhật?
t: Felix | Am Sonntag habe ich frei. Am Abend koche ich. | Chủ nhật mình rảnh. Buổi tối mình nấu ăn.
w: Viết 3 câu: hôm nay là thứ mấy, ngày mai bạn làm gì, cuối tuần bạn làm gì. | Heute ist Montag. Morgen arbeite ich. Am Wochenende besuche ich Lena. | heute, morgen, am

## 6.4 am, um, von … bis
goal: Nói lịch: thứ nào, mấy giờ, từ mấy giờ đến mấy giờ — với động từ ở vị trí thứ 2.
nico: 34,35
i: Frau Schmidt | Wann haben Sie Unterricht? | Anh học vào lúc nào?
i: Felix | Am Montag und am Mittwoch, von neun bis zwölf Uhr. | Thứ Hai và thứ Tư, từ 9 đến 12 giờ.
i: Frau Schmidt | Und wann arbeiten Sie? | Còn anh làm việc lúc nào?
i: Felix | Am Dienstag arbeite ich von acht bis siebzehn Uhr. | Thứ Ba tôi làm việc từ 8 đến 17 giờ.
iq: Felix học vào những ngày nào? | thứ Hai và thứ Tư | thứ Ba | thứ Năm và thứ Sáu
iq: Giờ học của Felix? | 9–12 giờ | 8–17 giờ | 12–17 giờ
iq: Thứ Ba Felix làm gì? | làm việc | học | nghỉ
words: am; um; von; bis; Termin; Kurs; arbeiten; Pause; Unterricht; dauern
+w: prep | - | am | | vào (thứ, buổi, ngày) | [Am] Montag lerne ich Deutsch. | Thứ Hai tôi học tiếng Đức.
g: <b>am</b> + thứ/buổi · <b>um</b> + giờ · <b>von … bis …</b> = từ … đến … · <b>ab</b> + giờ = từ … trở đi.
g: <b>Động từ luôn ở vị trí thứ 2.</b> Khi câu bắt đầu bằng thời gian, chủ ngữ đứng <b>sau</b> động từ:
gt: Vị trí 1 | Vị trí 2 (động từ) | Phần còn lại
gt: Ich | arbeite | am Montag.
gt: Am Montag | arbeite | ich.
gt: Um acht Uhr | beginnt | der Kurs.
g: <b>Lỗi hay gặp:</b> "Am Montag ich arbeite" (giữ trật tự tiếng Việt). Đúng: Am Montag <b>arbeite ich</b>.
gx: fmc: Der Kurs beginnt ___ neun Uhr. | um | am | von
gx: fmc: ___ Dienstag habe ich frei. | Am | Um | Im
gx: fmc: Ich arbeite ___ acht ___ siebzehn Uhr. | von … bis | um … am | am … um
gx: fmc: Am Montag ___. | arbeite ich | ich arbeite | arbeiten ich
gx: fmc: Um zwölf Uhr ___ ich Pause. | mache | machst | mache ich
x: ord: Am Montag lerne ich Deutsch. | Thứ Hai tôi học tiếng Đức.
x: ord: Um acht Uhr beginnt der Kurs. | Lớp bắt đầu lúc 8 giờ.
x: ord: Heute Abend koche ich. | Tối nay tôi nấu ăn.
x: ord: Von neun bis zwölf habe ich Unterricht. | Từ 9 đến 12 giờ tôi có giờ học.
x: ty: Bắt đầu câu bằng phần in đậm | Ich arbeite <b>am Samstag</b>. | Am Samstag arbeite ich.
x: ty: Bắt đầu câu bằng phần in đậm | Wir essen <b>um sieben Uhr</b>. | Um sieben Uhr essen wir.
x: ty: Bắt đầu câu bằng phần in đậm | Lena hat <b>morgen</b> einen Termin. | Morgen hat Lena einen Termin.
x: fill: Der Film dauert ___ acht ___ zehn Uhr. | von … bis
x: fill: Ich habe ___ Freitag um zehn Uhr einen Termin. | am
x: lmc: Ich arbeite von neun bis siebzehn Uhr. | 9–17 giờ | 7–19 giờ | 9–7 giờ
x: lmc: Die Pause dauert von zwölf bis halb eins. | 12:00–12:30 | 12:00–13:30 | 11:30–12:00
lt: Lịch hẹn
l: Herr Weber | Haben Sie am Donnerstag Zeit? | Thứ Năm anh có thời gian không?
l: Felix | Am Donnerstag habe ich von neun bis eins Kurs. Ab zwei Uhr bin ich frei. | Thứ Năm tôi học từ 9 đến 1 giờ. Từ 2 giờ tôi rảnh.
l: Herr Weber | Gut, dann um drei Uhr? | Tốt, vậy 3 giờ nhé?
l: Felix | Ja, um drei passt gut. | Vâng, 3 giờ rất tiện.
lq: Thứ Năm Felix học đến mấy giờ? | 1 giờ | 2 giờ | 9 giờ
lq: Từ mấy giờ Felix rảnh? | 2 giờ | 3 giờ | 1 giờ
lq: Họ hẹn lúc mấy giờ? | 3 giờ | 2 giờ | 9 giờ
ld: Ab zwei Uhr bin ich frei.
rt: Lịch làm việc của Felix
r: | Montag: Kurs 9–12 Uhr, dann Arbeit 14–18 Uhr. Dienstag: Arbeit 8–17 Uhr. Mittwoch: Kurs 9–12 Uhr. Am Abend: Sport. | Thứ Hai: học 9–12 giờ, sau đó làm 14–18 giờ. Thứ Ba: làm 8–17 giờ. Thứ Tư: học 9–12 giờ. Buổi tối: thể thao.
rq: Thứ Hai Felix vừa học vừa làm. | R
rq: Thứ Ba Felix làm việc đến 18 giờ. | F
rq: Thứ Tư Felix đi học buổi sáng. | R
t: Frau Schmidt | Wann haben Sie Unterricht? | Anh học vào lúc nào?
t: Felix | Am Montag und am Mittwoch habe ich Unterricht. | Thứ Hai và thứ Tư tôi có giờ học.
t: Frau Schmidt | Um wie viel Uhr? | Lúc mấy giờ?
t: Felix | Von neun bis zwölf Uhr. Am Nachmittag arbeite ich. | Từ 9 đến 12 giờ. Buổi chiều tôi làm việc.
ans: Wann arbeiten Sie? | Am Dienstag arbeite ich von acht bis siebzehn Uhr. | am, von, bis | Bắt đầu bằng thứ, động từ ở vị trí 2.
w: Viết 3 câu về lịch của bạn, mỗi câu bắt đầu bằng thời gian (am…, um…, von…bis…). | Am Montag lerne ich Deutsch. Um sieben Uhr frühstücke ich. Von neun bis fünf arbeite ich. | am, um, von

## 6.5 Ôn tuần 6
kind: review
goal: Nói lịch một tuần của mình: thứ, giờ, từ … đến ….
nico: 33,34,35
x: tmo: 13:45
x: tmi: 7:30
x: tmi: 10:15
x: tmw: 9:30
t: Felix | Am Montag und am Mittwoch habe ich Deutschkurs. | Thứ Hai và thứ Tư tôi học tiếng Đức.
t: Felix | Der Kurs beginnt um neun Uhr und dauert bis zwölf. | Lớp bắt đầu lúc 9 giờ và kéo dài đến 12 giờ.
t: Felix | Am Dienstag und am Donnerstag arbeite ich von acht bis fünf. | Thứ Ba và thứ Năm tôi làm việc từ 8 đến 5 giờ.
t: Felix | Am Freitagabend spiele ich Fußball. | Tối thứ Sáu tôi đá bóng.
t: Felix | Am Wochenende habe ich frei. | Cuối tuần tôi rảnh.
t: Felix | Am Sonntag besuche ich um halb drei meine Freunde. | Chủ nhật lúc hai rưỡi tôi đi thăm bạn bè.
w: Viết lịch một tuần của bạn: 5 câu, mỗi câu bắt đầu bằng thời gian. | Am Montag lerne ich Deutsch. Am Dienstag arbeite ich von acht bis fünf. Am Mittwochabend koche ich. Am Freitag gehe ich ins Kino. Am Wochenende habe ich frei. | am, um/von

## 7.1 Buổi sáng
goal: Kể buổi sáng của mình theo thứ tự: zuerst, dann, danach.
nico: 29
i: Lena | Was machst du am Morgen? | Buổi sáng bạn làm gì?
i: Felix | Zuerst dusche ich, dann frühstücke ich. Ich trinke einen Kaffee und esse ein Brötchen. | Đầu tiên mình tắm, sau đó ăn sáng. Mình uống một cốc cà phê và ăn một chiếc bánh mì.
i: Lena | Und wie fährst du zur Arbeit? | Thế bạn đi làm bằng gì?
i: Felix | Ich fahre mit dem Bus. | Mình đi bằng xe buýt.
iq: Felix làm gì đầu tiên? | tắm | ăn sáng | uống cà phê
iq: Felix ăn sáng gì? | bánh mì và cà phê | cơm | trứng
iq: Felix đi làm bằng gì? | xe buýt | xe đạp | đi bộ
words: Frühstück; frühstücken; morgens; zuerst; dann; duschen; trinken; essen; gehen; fahren; Arbeit; Bus
+w: v | - | duschen | | tắm (vòi sen) | Morgens [dusche] ich. | Buổi sáng tôi tắm.
+w: adv | - | danach | | sau đó | Ich frühstücke. [Danach] gehe ich zur Arbeit. | Tôi ăn sáng. Sau đó tôi đi làm.
g: Kể theo thứ tự: <b>zuerst</b> (đầu tiên) → <b>dann</b> (rồi) → <b>danach</b> (sau đó). Các từ này đứng vị trí 1 → động từ vị trí 2: <b>Dann frühstücke ich.</b>
g: Một số động từ đổi nguyên âm ở du và er/sie: <b>essen</b> → du isst, er isst · <b>fahren</b> → du fährst, er fährt · <b>schlafen</b> → du schläfst, er schläft.
gt: | ich | du | er/sie
gt: essen | esse | isst | isst
gt: fahren | fahre | fährst | fährt
gt: nehmen | nehme | nimmst | nimmt
g: <b>Lỗi hay gặp:</b> "Dann ich frühstücke" (đúng: Dann frühstücke ich); "er fahrt" (đúng: er fährt).
gx: fmc: Zuerst ___ ich. | dusche | ich dusche | duschen
gx: fmc: Er ___ mit dem Bus. | fährt | fahrt | fahren
gx: fmc: Was ___ du zum Frühstück? | isst | esst | essen
gx: fmc: Dann ___ Lena einen Tee. | trinkt | trinken | trinkst
gx: fmc: Danach ___ wir zur Arbeit. | gehen | geht | gehst
x: ord: Zuerst dusche ich. | Đầu tiên tôi tắm.
x: ord: Dann frühstücke ich. | Rồi tôi ăn sáng.
x: ord: Danach fahre ich mit dem Bus. | Sau đó tôi đi xe buýt.
x: ty: Bắt đầu bằng "Dann" | Ich trinke einen Kaffee. | Dann trinke ich einen Kaffee.
x: ty: Bắt đầu bằng "Zuerst" | Lena duscht. | Zuerst duscht Lena.
x: fill: Du ___ (fahren) mit dem Fahrrad. | fährst
x: fill: Tom ___ (essen) ein Brötchen. | isst
x: fill: Morgens ___ (trinken) ich Tee. | trinke
x: mc: Thứ tự đúng: | zuerst → dann → danach | dann → zuerst → danach | danach → dann → zuerst
x: lmc: Zuerst frühstücke ich, dann dusche ich. | ăn sáng trước | tắm trước | không ăn sáng
x: lmc: Er fährt mit dem Fahrrad zur Arbeit. | 🚲 xe đạp | 🚌 xe buýt | 🚗 ô tô
lt: Buổi sáng của Anna
l: Tom | Frühstückst du morgens, Anna? | Buổi sáng Anna có ăn sáng không?
l: Anna | Nein, ich trinke nur einen Kaffee. Zuerst dusche ich, dann trinke ich Kaffee. | Không, mình chỉ uống một cốc cà phê. Đầu tiên mình tắm, rồi uống cà phê.
l: Tom | Und danach? | Rồi sau đó?
l: Anna | Danach gehe ich zu Fuß zur Arbeit. | Sau đó mình đi bộ đi làm.
lq: Anna có ăn sáng không? | không, chỉ uống cà phê | có | có, ăn bánh mì
lq: Anna làm gì đầu tiên? | tắm | uống cà phê | đi làm
lq: Anna đi làm bằng cách nào? | đi bộ | xe buýt | xe đạp
ld: Danach gehe ich zu Fuß zur Arbeit.
rt: Bài viết của Tom
r: | Morgens frühstücke ich immer. Ich esse zwei Brötchen mit Käse und trinke einen Tee. Dann fahre ich mit dem Fahrrad zum Kurs. | Buổi sáng tôi luôn ăn sáng. Tôi ăn hai bánh mì với phô mai và uống một cốc trà. Rồi tôi đạp xe đến lớp.
rq: Tom uống cà phê buổi sáng. | F
rq: Tom ăn bánh mì với phô mai. | R
rq: Tom đạp xe đến lớp. | R
t: Lena | Was machst du am Morgen? | Buổi sáng bạn làm gì?
t: Felix | Zuerst dusche ich. | Đầu tiên mình tắm.
t: Felix | Dann frühstücke ich. Ich esse ein Brötchen und trinke einen Kaffee. | Rồi mình ăn sáng. Mình ăn một bánh mì và uống một cốc cà phê.
t: Felix | Danach fahre ich mit dem Bus zur Arbeit. | Sau đó mình đi xe buýt đi làm.
w: Viết 3 câu về buổi sáng của bạn với zuerst, dann, danach. | Zuerst dusche ich. Dann frühstücke ich. Danach fahre ich zur Arbeit. | zuerst, dann, danach

## 7.2 Động từ tách
goal: Dùng động từ tách: aufstehen, einkaufen, anrufen, fernsehen…
nico: 47
i: Tom | Wann stehst du auf? | Bạn dậy lúc mấy giờ?
i: Felix | Ich stehe um sechs Uhr auf. | Mình dậy lúc 6 giờ.
i: Tom | So früh! Und am Abend? | Sớm thế! Còn buổi tối?
i: Felix | Am Abend kaufe ich ein und dann sehe ich fern. | Buổi tối mình đi chợ rồi xem TV.
iq: Felix dậy lúc mấy giờ? | 6 giờ | 7 giờ | 8 giờ
iq: Buổi tối Felix làm gì trước? | đi chợ | xem TV | ngủ
iq: Trong "Ich stehe um sechs Uhr auf", phần "auf" đứng ở đâu? | cuối câu | đầu câu | sau ich
words: aufstehen; einkaufen; anrufen; fernsehen; anfangen; aufhören; mitkommen; einschlafen
+w: v | - | einschlafen | | ngủ thiếp đi | Ich [schlafe] um elf Uhr [ein]. | Tôi ngủ lúc 11 giờ.
g: <b>Động từ tách</b> gồm tiền tố (auf-, ein-, an-, fern-, mit-…) + động từ. Khi chia, tiền tố <b>tách ra và đứng cuối câu</b>.
gt: Nguyên mẫu | Câu
gt: auf|stehen | Ich <b>stehe</b> um 6 Uhr <b>auf</b>.
gt: ein|kaufen | Am Samstag <b>kaufe</b> ich <b>ein</b>.
gt: an|rufen | Ich <b>rufe</b> meine Mutter <b>an</b>.
gt: fern|sehen | Er <b>sieht</b> abends <b>fern</b>.
g: Trọng âm luôn ở tiền tố: <b>AUF</b>stehen, <b>EIN</b>kaufen. <b>Lỗi hay gặp:</b> "Ich aufstehe um 6 Uhr" (quên tách).
gx: fmc: Ich ___ um sieben Uhr ___. | stehe … auf | aufstehe … – | stehe auf … –
gx: fmc: Wann ___ der Film ___? | fängt … an | anfängt … – | fängt … auf
gx: fmc: Lena ___ ihre Mutter ___. | ruft … an | anruft … – | ruft … auf
gx: fmc: Am Samstag ___ wir ___. | kaufen … ein | einkaufen … – | kaufen … an
gx: fmc: Er ___ jeden Abend ___. | sieht … fern | fernsieht … – | sieht … an
x: ord: Ich stehe um sechs Uhr auf. | Tôi dậy lúc 6 giờ.
x: ord: Am Samstag kaufe ich ein. | Thứ Bảy tôi đi chợ.
x: ord: Kommst du mit? | Bạn đi cùng không?
x: ord: Der Kurs fängt um neun Uhr an. | Lớp bắt đầu lúc 9 giờ.
x: ty: Viết câu với động từ tách | ich / aufstehen / um 7 Uhr | Ich stehe um 7 Uhr auf. / Ich stehe um sieben Uhr auf.
x: ty: Viết câu với động từ tách | Tom / fernsehen / am Abend | Tom sieht am Abend fern.
x: ty: Viết câu với động từ tách | wir / einkaufen / heute | Wir kaufen heute ein.
x: ty: Viết câu với động từ tách | du / anrufen / Lena? (câu hỏi) | Rufst du Lena an?
x: fill: Der Film hört um zehn Uhr ___. | auf
x: fill: Ich schlafe um elf Uhr ___. | ein
x: lmc: Ich stehe um halb sieben auf. | dậy lúc 6:30 | ngủ lúc 6:30 | dậy lúc 7:30
x: lmc: Rufst du mich heute Abend an? | gọi điện tối nay | gặp tối nay | xem TV tối nay
lt: Gọi điện rủ đi chợ
l: Lena | Hallo Felix! Ich kaufe heute Nachmittag ein. Kommst du mit? | Chào Felix! Chiều nay mình đi chợ. Bạn đi cùng không?
l: Felix | Wann fängst du an? | Mấy giờ bạn bắt đầu?
l: Lena | Um vier Uhr. | Lúc 4 giờ.
l: Felix | Okay, ich komme mit. Ich rufe dich um halb vier an. | Được, mình đi cùng. Mình sẽ gọi bạn lúc 3 rưỡi.
lq: Lena đi chợ lúc nào? | chiều nay | sáng mai | tối nay
lq: Họ bắt đầu lúc mấy giờ? | 4 giờ | 3:30 | 4:30
lq: Felix gọi Lena lúc mấy giờ? | 3:30 | 4:00 | 4:30
ld: Ich rufe dich um halb vier an.
rt: Thời gian biểu của Lena
r: | Ich stehe um sieben Uhr auf. Um acht fängt die Arbeit an. Um fünf hört die Arbeit auf. Dann kaufe ich ein. Abends sehe ich nicht fern, ich lese. | Tôi dậy lúc 7 giờ. 8 giờ bắt đầu làm. 5 giờ hết giờ làm. Rồi tôi đi chợ. Buổi tối tôi không xem TV, tôi đọc sách.
rq: Lena bắt đầu làm lúc 8 giờ. | R
rq: Buổi tối Lena xem TV. | F
rq: Lena đi chợ sau giờ làm. | R
t: Tom | Wann stehst du auf? | Bạn dậy lúc mấy giờ?
t: Felix | Ich stehe um sechs Uhr auf. | Mình dậy lúc 6 giờ.
t: Tom | Und wann fängt die Arbeit an? | Thế mấy giờ bắt đầu làm?
t: Felix | Um acht. Am Abend kaufe ich ein und sehe fern. | 8 giờ. Buổi tối mình đi chợ và xem TV.
w: Viết 3 câu với 3 động từ tách (aufstehen, einkaufen, fernsehen…). | Ich stehe um sechs Uhr auf. Am Samstag kaufe ich ein. Abends sehe ich fern. | auf, ein, fern

## 7.3 immer, oft, manchmal, nie
goal: Nói mình làm việc gì thường xuyên đến đâu.
nico: 32
i: Anna | Kochst du oft, Felix? | Felix có hay nấu ăn không?
i: Felix | Ja, ich koche fast jeden Tag. Aber ich koche nie am Montag. | Có, mình nấu gần như hằng ngày. Nhưng thứ Hai thì không bao giờ nấu.
i: Anna | Und Sport? | Còn thể thao?
i: Felix | Sport mache ich manchmal, meistens am Wochenende. | Thỉnh thoảng mình chơi thể thao, thường là cuối tuần.
iq: Felix có hay nấu ăn không? | gần như hằng ngày | không bao giờ | thỉnh thoảng
iq: Ngày nào Felix không nấu? | thứ Hai | Chủ nhật | thứ Sáu
iq: Felix chơi thể thao bao lâu một lần? | thỉnh thoảng | luôn luôn | không bao giờ
words: immer; oft; manchmal; nie; meistens; selten; jeden Tag; einmal; schon; noch
+w: adv | - | meistens | | thường là, phần lớn | Ich frühstücke [meistens] zu Hause. | Tôi thường ăn sáng ở nhà.
+w: adv | - | selten | | hiếm khi | Ich sehe [selten] fern. | Tôi hiếm khi xem TV.
+w: phr | - | jeden Tag | | mỗi ngày | Ich lerne [jeden Tag] Deutsch. | Tôi học tiếng Đức mỗi ngày.
g: Thang tần suất: <b>immer</b> 100% → <b>meistens</b> → <b>oft</b> → <b>manchmal</b> → <b>selten</b> → <b>nie</b> 0%. <b>einmal/zweimal pro Woche</b> = một/hai lần một tuần.
g: Vị trí: thường đứng <b>sau động từ</b>: Ich koche <b>oft</b>. Đặt lên đầu câu thì đảo: <b>Manchmal koche ich.</b> Với động từ tách: Ich stehe <b>immer</b> früh auf.
gt: Câu thường | Đảo lên đầu
gt: Ich trinke oft Tee. | Oft trinke ich Tee.
gt: Er sieht nie fern. | Nie sieht er fern. (nhấn mạnh)
g: <b>Lỗi hay gặp:</b> "Ich oft koche" (đặt trạng từ trước động từ như tiếng Việt).
gx: fmc: Ich ___ Kaffee. (luôn luôn) | trinke immer | immer trinke | trinke nie
gx: fmc: Manchmal ___ wir Pizza. | essen | wir essen | esst
gx: fmc: Er sieht ___ fern. (không bao giờ) | nie | immer | oft
gx: fmc: Ich lerne ___ Deutsch. (mỗi ngày) | jeden Tag | einmal | selten
gx: fmc: 0% = ___ | nie | selten | manchmal
x: mc: Sắp xếp từ ít đến nhiều: | nie – selten – manchmal – oft – immer | selten – nie – oft – manchmal – immer | nie – manchmal – selten – immer – oft
x: ord: Ich koche fast jeden Tag. | Tôi nấu ăn gần như mỗi ngày.
x: ord: Manchmal mache ich Sport. | Thỉnh thoảng tôi chơi thể thao.
x: ord: Ich stehe immer früh auf. | Tôi luôn dậy sớm.
x: ty: Bắt đầu bằng trạng từ | Ich gehe oft ins Kino. | Oft gehe ich ins Kino.
x: ty: Bắt đầu bằng trạng từ | Lena trinkt meistens Tee. | Meistens trinkt Lena Tee.
x: tr: Tôi hiếm khi xem TV. | Ich sehe selten fern.
x: tr: Tôi không bao giờ uống bia. | Ich trinke nie Bier.
x: lmc: Ich esse selten Fleisch. | hiếm khi | thường xuyên | luôn luôn
x: lmc: Tom spielt zweimal pro Woche Fußball. | 2 lần/tuần | mỗi ngày | 1 lần/tháng
x: lmc: Wir gehen meistens zu Fuß. | thường là | không bao giờ | hiếm khi
lt: Khảo sát nhỏ
l: Frau Schmidt | Wie oft lernen Sie Deutsch? | Anh học tiếng Đức bao lâu một lần?
l: Felix | Jeden Tag, meistens am Abend. | Mỗi ngày, thường là buổi tối.
l: Frau Schmidt | Und hören Sie oft deutsche Musik? | Anh có hay nghe nhạc Đức không?
l: Felix | Nein, selten. Aber ich sehe manchmal deutsche Filme. | Không, hiếm khi. Nhưng thỉnh thoảng tôi xem phim Đức.
lq: Felix học tiếng Đức bao lâu một lần? | mỗi ngày | thỉnh thoảng | hiếm khi
lq: Felix có hay nghe nhạc Đức không? | hiếm khi | thường xuyên | luôn luôn
lq: Felix thỉnh thoảng làm gì? | xem phim Đức | đọc sách Đức | đi Đức
ld: Ich sehe manchmal deutsche Filme.
rt: Thói quen của Anna
r: | Ich stehe immer um sechs Uhr auf. Ich frühstücke meistens zu Hause. Ins Restaurant gehe ich selten, das ist zu teuer. Fernsehen? Nie! | Tôi luôn dậy lúc 6 giờ. Tôi thường ăn sáng ở nhà. Tôi hiếm khi đi nhà hàng, đắt quá. Xem TV ư? Không bao giờ!
rq: Anna hay đi nhà hàng. | F
rq: Anna không bao giờ xem TV. | R
rq: Anna luôn dậy lúc 6 giờ. | R
t: Anna | Kochst du oft? | Bạn có hay nấu ăn không?
t: Felix | Ja, ich koche fast jeden Tag. | Có, mình nấu gần như mỗi ngày.
t: Anna | Und machst du Sport? | Còn thể thao?
t: Felix | Manchmal, meistens am Wochenende. Aber ich sehe nie fern. | Thỉnh thoảng, thường vào cuối tuần. Nhưng mình không bao giờ xem TV.
w: Viết 4 câu về thói quen của bạn với immer, oft, manchmal, nie. | Ich stehe immer früh auf. Ich koche oft. Manchmal gehe ich ins Kino. Ich trinke nie Kaffee. | immer, oft, manchmal, nie

## 7.4 Kể cả một ngày
goal: Kể một ngày từ sáng đến tối, dùng giờ, thứ tự và tần suất.
nico: 29,30
i: Lena | Wie sieht dein Tag aus? | Một ngày của bạn thế nào?
i: Felix | Ich stehe um sechs auf und arbeite von acht bis vier. | Mình dậy lúc 6 giờ và làm việc từ 8 đến 4 giờ.
i: Lena | Und nach der Arbeit? | Còn sau giờ làm?
i: Felix | Dann gehe ich nach Hause und koche. Um elf Uhr schlafe ich, ich bin immer müde! | Rồi mình về nhà và nấu ăn. 11 giờ mình đi ngủ, lúc nào cũng mệt!
iq: Felix làm việc từ mấy giờ? | 8 đến 4 giờ | 6 đến 8 giờ | 4 đến 11 giờ
iq: Sau giờ làm Felix làm gì? | về nhà và nấu ăn | đi chơi | đi học
iq: Felix ngủ lúc mấy giờ? | 11 giờ | 10 giờ | 12 giờ
words: Mittagessen; Abendessen; kochen; nach Hause; schlafen; müde; lesen; Musik; hören; Freizeit
+w: phr | - | nach Hause | | về nhà | Um fünf gehe ich [nach Hause]. | 5 giờ tôi về nhà.
+w: phr | - | zu Hause | | ở nhà | Abends bin ich [zu Hause]. | Buổi tối tôi ở nhà.
g: <b>nach Hause</b> (về nhà — có chuyển động) ≠ <b>zu Hause</b> (ở nhà — đứng yên): Ich gehe nach Hause. Ich bin zu Hause.
g: Kể một ngày: mở đầu bằng thời gian để câu đa dạng — <b>Um sieben</b> frühstücke ich. <b>Mittags</b> esse ich in der Kantine. <b>Nach der Arbeit</b> gehe ich nach Hause. Động từ luôn ở vị trí 2.
gt: Buổi | Từ | Ví dụ
gt: sáng | morgens | Morgens trinke ich Kaffee.
gt: trưa | mittags | Mittags esse ich in der Kantine.
gt: chiều | nachmittags | Nachmittags lerne ich.
gt: tối | abends | Abends lese ich.
g: <b>Lỗi hay gặp:</b> "Ich gehe zu Hause" (đúng: nach Hause).
gx: fmc: Um fünf gehe ich ___. | nach Hause | zu Hause | in Hause
gx: fmc: Am Sonntag bin ich ___. | zu Hause | nach Hause | Hause
gx: fmc: Mittags ___ ich in der Kantine. | esse | ich esse | isst
gx: fmc: Abends ___ ich Musik. | höre | hörst | ich höre
gx: fmc: Ich bin ___. Ich schlafe jetzt. | müde | spät | früh
x: ord: Nach der Arbeit gehe ich nach Hause. | Sau giờ làm tôi về nhà.
x: ord: Abends lese ich ein Buch. | Buổi tối tôi đọc sách.
x: ord: Um elf Uhr schlafe ich. | 11 giờ tôi đi ngủ.
x: ord: Mittags esse ich in der Kantine. | Buổi trưa tôi ăn ở căng-tin.
x: tr: Buổi tối tôi nghe nhạc. | Abends höre ich Musik. / Am Abend höre ich Musik. / Ich höre abends Musik.
x: tr: Tôi về nhà lúc 6 giờ. | Ich gehe um sechs Uhr nach Hause. / Um sechs Uhr gehe ich nach Hause.
x: fill: Ich bin heute Abend zu ___. | Hause
x: fill: Das ___ esse ich um sieben Uhr. (bữa tối) | Abendessen
x: mc: Câu nào đúng? | Abends lese ich. | Abends ich lese. | Ich abends lese.
x: lmc: Mittags esse ich nur einen Salat. | trưa ăn salad | tối ăn salad | trưa không ăn
x: lmc: Um zehn Uhr bin ich müde und schlafe. | 10 giờ mệt và ngủ | 10 giờ dậy | 2 giờ ngủ
lt: Một ngày của Tom
l: Anna | Was machst du nach dem Kurs, Tom? | Sau giờ học Tom làm gì?
l: Tom | Mittags esse ich in der Mensa. Dann arbeite ich bis sechs. | Trưa mình ăn ở căng-tin. Rồi mình làm việc đến 6 giờ.
l: Anna | Und abends? | Còn buổi tối?
l: Tom | Abends koche ich, und dann lese ich oder höre Musik. | Buổi tối mình nấu ăn, rồi đọc sách hoặc nghe nhạc.
lq: Trưa Tom ăn ở đâu? | căng-tin | nhà | nhà hàng
lq: Tom làm việc đến mấy giờ? | 6 giờ | 5 giờ | 7 giờ
lq: Tối Tom làm gì sau khi nấu ăn? | đọc sách hoặc nghe nhạc | xem TV | đi chơi
ld: Abends koche ich.
rt: Một ngày của Hoa
r: | Ich stehe um halb sieben auf und frühstücke. Um acht fahre ich mit der U-Bahn zur Arbeit. Mittags esse ich in der Kantine. Um fünf gehe ich nach Hause. Abends koche ich und rufe meine Familie in Vietnam an. | Tôi dậy lúc 6:30 và ăn sáng. 8 giờ tôi đi tàu điện ngầm đi làm. Trưa tôi ăn ở căng-tin. 5 giờ tôi về nhà. Buổi tối tôi nấu ăn và gọi điện cho gia đình ở Việt Nam.
rq: Hoa đi làm bằng xe buýt. | F
rq: Buổi tối Hoa gọi điện về Việt Nam. | R
rq: Hoa về nhà lúc 5 giờ. | R
t: Felix | Ich stehe um sechs Uhr auf. | Tôi dậy lúc 6 giờ.
t: Felix | Zuerst dusche ich, dann frühstücke ich. | Đầu tiên tôi tắm, rồi ăn sáng.
t: Felix | Von acht bis vier arbeite ich. Mittags esse ich in der Kantine. | Từ 8 đến 4 giờ tôi làm việc. Trưa tôi ăn ở căng-tin.
t: Felix | Nach der Arbeit kaufe ich ein und gehe nach Hause. | Sau giờ làm tôi đi chợ và về nhà.
t: Felix | Abends koche ich und lese ein bisschen. Um elf schlafe ich. | Buổi tối tôi nấu ăn và đọc sách một chút. 11 giờ tôi đi ngủ.
w: Viết 5 câu kể một ngày của bạn (có giờ, zuerst/dann, một động từ tách). | Ich stehe um sieben Uhr auf. Zuerst frühstücke ich. Dann fahre ich zur Arbeit. Um fünf gehe ich nach Hause. Abends sehe ich fern. | auf, dann, nach Hause

## 7.5 Ôn tuần 7
kind: review
goal: Kể một ngày của mình 10 câu, không nhìn chữ.
nico: 29,31,47
x: ord: Ich stehe immer um sechs Uhr auf. | Tôi luôn dậy lúc 6 giờ.
x: fmc: Am Abend ___ ich ___. | sehe … fern | fernsehe … – | sehe … an
t: Felix | Ich stehe immer um sechs Uhr auf. | Tôi luôn dậy lúc 6 giờ.
t: Felix | Zuerst dusche ich, dann frühstücke ich. | Đầu tiên tôi tắm, rồi ăn sáng.
t: Felix | Ich trinke meistens einen Kaffee und esse ein Brötchen. | Tôi thường uống cà phê và ăn một bánh mì.
t: Felix | Um halb acht fahre ich mit dem Bus zur Arbeit. | 7 rưỡi tôi đi xe buýt đi làm.
t: Felix | Ich arbeite von acht bis vier. | Tôi làm việc từ 8 đến 4 giờ.
t: Felix | Mittags esse ich in der Kantine. | Trưa tôi ăn ở căng-tin.
t: Felix | Nach der Arbeit kaufe ich ein. | Sau giờ làm tôi đi chợ.
t: Felix | Dann gehe ich nach Hause und koche. | Rồi tôi về nhà và nấu ăn.
t: Felix | Abends rufe ich manchmal meine Familie an. | Buổi tối thỉnh thoảng tôi gọi điện cho gia đình.
t: Felix | Ich sehe nie fern, ich lese lieber. Um elf schlafe ich. | Tôi không bao giờ xem TV, tôi thích đọc sách hơn. 11 giờ tôi ngủ.
w: Viết một đoạn khoảng 50 từ kể một ngày của bạn. | Ich stehe um sieben Uhr auf. Zuerst dusche ich, dann frühstücke ich. Um acht fahre ich mit dem Fahrrad zur Arbeit. Mittags esse ich in der Kantine. Um fünf gehe ich nach Hause. Abends koche ich und rufe manchmal meine Eltern an. Um elf Uhr schlafe ich. | auf, dann, nach Hause

## 8.1 Bữa ăn, món quen
goal: Nói các bữa ăn và mình thường ăn món gì.
nico: 45
i: Anna | Was isst du zum Frühstück, Felix? | Felix ăn sáng món gì?
i: Felix | Meistens Brot mit Käse. In Vietnam esse ich morgens Suppe. | Thường là bánh mì với phô mai. Ở Việt Nam buổi sáng mình ăn món nước.
i: Anna | Suppe zum Frühstück? Interessant! Und mittags? | Ăn sáng bằng súp à? Thú vị! Còn buổi trưa?
i: Felix | Mittags esse ich Reis mit Gemüse und Fisch. | Trưa mình ăn cơm với rau và cá.
iq: Felix thường ăn sáng gì ở Đức? | bánh mì với phô mai | súp | cơm
iq: Ở Việt Nam Felix ăn sáng gì? | món nước (súp) | bánh mì | trứng
iq: Bữa trưa của Felix? | cơm, rau và cá | pizza | salad
words: Brot; Brötchen; Käse; Ei; Reis; Nudel; Fleisch; Fisch; Gemüse; Obst; Apfel; Suppe
g: Ba bữa: <b>das Frühstück</b> (sáng) · <b>das Mittagessen</b> (trưa) · <b>das Abendessen</b> (tối). <b>zum</b> Frühstück = cho bữa sáng: Was isst du zum Frühstück?
g: Danh từ không đếm được (Reis, Fleisch, Käse, Gemüse, Obst) dùng <b>không mạo từ</b> và phủ định bằng <b>kein</b>: Ich esse Reis. Ich esse <b>kein</b> Fleisch.
gt: Đếm được | Không đếm được
gt: ein Ei – zwei Eier | Reis, Fleisch, Käse
gt: ein Apfel – drei Äpfel | Gemüse, Obst, Brot (nói chung)
gt: eine Nudel – Nudeln | Wasser, Milch, Kaffee
g: <b>Lỗi hay gặp:</b> "Ich esse ein Reis" (đúng: Ich esse Reis).
gx: fmc: Ich esse ___ Reis. | — (không mạo từ) | ein | einen
gx: fmc: Ich esse ___ Fleisch. Ich bin Vegetarier. | kein | nicht | keine
gx: fmc: Was isst du ___ Frühstück? | zum | am | um
gx: fmc: Ich möchte zwei ___. | Eier | Ei | Eis
gx: art: Suppe | die
x: art: Käse | der
x: art: Ei | das
x: art: Gemüse | das
x: art: Fisch | der
x: lmc: Ich esse gern Nudeln mit Tomaten. | 🍝 mì với cà chua | 🍚 cơm với cá | 🥪 bánh mì phô mai
x: lmc: Zum Frühstück esse ich ein Ei. | 🥚 một quả trứng | 🍎 một quả táo | 🧀 phô mai
x: lmc: Ich esse kein Fleisch. | không ăn thịt | thích thịt | chỉ ăn thịt
x: mc: "das Abendessen" là: | bữa tối | bữa sáng | bữa trưa
x: fill: Zum ___ esse ich Brötchen. (bữa sáng) | Frühstück
x: fill: Ich esse ___ Fisch, ich mag keinen Fisch. | keinen
x: tr: Tôi ăn cơm với rau. | Ich esse Reis mit Gemüse.
x: tr: Bữa sáng bạn ăn gì? | Was isst du zum Frühstück?
lt: Ở bếp
l: Lena | Was kochen wir heute Abend? | Tối nay mình nấu gì?
l: Felix | Vielleicht Nudeln mit Gemüse? | Có lẽ mì với rau?
l: Lena | Gute Idee. Haben wir noch Tomaten? | Ý hay. Mình còn cà chua không?
l: Felix | Nein, keine Tomaten mehr. Ich kaufe schnell Tomaten und Käse. | Không, hết cà chua rồi. Mình đi mua nhanh cà chua và phô mai.
lq: Tối nay họ nấu gì? | mì với rau | cơm với cá | súp
lq: Còn cà chua không? | hết rồi | còn | không rõ
lq: Felix đi mua gì? | cà chua và phô mai | thịt | trứng
ld: Vielleicht Nudeln mit Gemüse?
rt: Thực đơn căng-tin
r: | Kantine – Montag: Suppe 2,50 € · Fisch mit Reis 5,90 € · Nudeln mit Gemüse (vegetarisch) 4,80 € · Obst 1,00 € | Căng-tin – thứ Hai: súp 2,50 € · cá với cơm 5,90 € · mì với rau (chay) 4,80 € · hoa quả 1,00 €
rq: Món chay là mì với rau. | R
rq: Cá với cơm giá 4,80 €. | F
rq: Hoa quả giá 1 euro. | R
t: Anna | Was isst du zum Frühstück? | Bạn ăn sáng món gì?
t: Felix | Meistens Brot mit Käse und ein Ei. | Thường là bánh mì với phô mai và một quả trứng.
t: Anna | Und zum Mittagessen? | Còn bữa trưa?
t: Felix | Reis mit Gemüse und Fisch. Ich esse wenig Fleisch. | Cơm với rau và cá. Mình ăn ít thịt.
w: Viết 3 câu: bạn ăn gì vào bữa sáng, trưa, tối. | Zum Frühstück esse ich Brot. Mittags esse ich Reis mit Fisch. Zum Abendessen esse ich Suppe. | Frühstück, esse

## 8.2 gern, lieber, mögen
goal: Nói mình thích, thích hơn, thích nhất món gì.
nico: 46
i: Tom | Isst du gern scharf, Felix? | Felix có thích ăn cay không?
i: Felix | Ja, sehr gern! Ich mag Chili. Und du? | Có, rất thích! Mình thích ớt. Còn bạn?
i: Tom | Ich esse lieber süß. Am liebsten esse ich Schokolade! | Mình thích ăn ngọt hơn. Thích nhất là sô-cô-la!
i: Felix | Schokolade schmeckt gut, aber nicht zum Mittagessen! | Sô-cô-la ngon, nhưng không phải cho bữa trưa!
iq: Felix có thích ăn cay không? | rất thích | không thích | bình thường
iq: Tom thích ăn gì hơn? | đồ ngọt | đồ cay | đồ mặn
iq: Tom thích nhất món gì? | sô-cô-la | ớt | bánh mì
words: mögen; gern; lieber; am liebsten; lecker; süß; scharf; schmecken; Hunger; Durst
+w: phr | - | am liebsten | | thích nhất | [Am liebsten] trinke ich Tee. | Tôi thích uống trà nhất.
g: <b>gern</b> đứng sau động từ: Ich esse <b>gern</b> Reis. Thích hơn: <b>lieber</b>. Thích nhất: <b>am liebsten</b>. Không thích: <b>nicht gern</b>.
gt: thích | thích hơn | thích nhất
gt: Ich trinke gern Tee. | Ich trinke lieber Kaffee. | Am liebsten trinke ich Saft.
g: <b>mögen</b> + danh từ (cách 4): ich mag, du magst, er mag, wir mögen, ihr mögt, Sie mögen. Ich mag <b>keinen</b> Fisch.
g: <b>Hỏi vị:</b> Wie schmeckt das? – Das schmeckt gut / lecker / nicht gut. <b>Lỗi hay gặp:</b> "Ich gern esse Reis" (đúng: Ich esse gern Reis); "Ich mag essen Reis".
gx: fmc: Ich ___ Pizza. | mag | mögt | magst
gx: fmc: ___ du Fisch? | Magst | Mag | Mögt
gx: fmc: Ich esse ___ Reis. (thích) | gern | lieber | am liebsten
gx: fmc: Tee oder Kaffee? – Ich trinke ___ Tee. | lieber | gern | am liebsten
gx: fmc: ___ esse ich Schokolade. (thích nhất) | Am liebsten | Gern | Lieber
gx: fmc: Wie ___ die Suppe? – Sehr lecker! | schmeckt | schmecken | magst
x: ord: Ich esse gern scharf. | Tôi thích ăn cay.
x: ord: Am liebsten trinke ich Tee. | Tôi thích uống trà nhất.
x: ord: Ich mag keinen Fisch. | Tôi không thích cá.
x: ty: Dùng "lieber" | Ich trinke gern Kaffee. (Tee: thích hơn) | Ich trinke lieber Tee.
x: ty: Dùng "mögen" | Ich esse gern Äpfel. (= Ich mag …) | Ich mag Äpfel.
x: fill: Wir ___ (mögen) Pizza. | mögen
x: fill: Er ___ (mögen) keine Tomaten. | mag
x: tr: Món này rất ngon! | Das schmeckt sehr gut! / Das ist sehr lecker!
x: tr: Tôi đói. | Ich habe Hunger.
x: lmc: Ich esse nicht gern Fleisch. | không thích thịt | thích thịt | thích thịt nhất
x: lmc: Am liebsten esse ich Nudeln. | thích nhất là mì | không thích mì | thỉnh thoảng ăn mì
x: lmc: Die Suppe ist zu scharf. | cay quá | ngọt quá | nhạt quá
lt: Nói chuyện về món ăn
l: Anna | Was isst du am liebsten, Felix? | Felix thích ăn gì nhất?
l: Felix | Am liebsten esse ich Pho, das ist eine Suppe aus Vietnam. | Mình thích nhất là phở, một món nước của Việt Nam.
l: Anna | Ist sie scharf? | Có cay không?
l: Felix | Nein, aber ich esse sie gern mit Chili. Magst du scharf? | Không, nhưng mình thích ăn với ớt. Bạn có thích cay không?
l: Anna | Nicht so gern. Ich esse lieber süß. | Không thích lắm. Mình thích ăn ngọt hơn.
lq: Felix thích nhất món gì? | phở | sô-cô-la | pizza
lq: Phở có cay không? | không | có | rất cay
lq: Anna thích gì hơn? | đồ ngọt | đồ cay | phở
ld: Ich esse lieber süß.
rt: Khảo sát món ăn
r: | Was essen die Deutschen am liebsten? Platz 1: Nudeln. Platz 2: Pizza. Platz 3: Schnitzel. Viele trinken morgens lieber Kaffee als Tee. | Người Đức thích ăn gì nhất? Hạng 1: mì. Hạng 2: pizza. Hạng 3: thịt tẩm bột chiên. Nhiều người buổi sáng thích cà phê hơn trà.
rq: Pizza đứng hạng nhất. | F
rq: Mì là món được thích nhất. | R
rq: Nhiều người thích cà phê hơn trà vào buổi sáng. | R
t: Tom | Isst du gern scharf? | Bạn có thích ăn cay không?
t: Felix | Ja, sehr gern. Und du? | Có, rất thích. Còn bạn?
t: Tom | Ich esse lieber süß. | Mình thích ăn ngọt hơn.
t: Felix | Was isst du am liebsten? | Bạn thích ăn gì nhất?
t: Tom | Am liebsten esse ich Kuchen. Und ich mag keinen Fisch. | Mình thích nhất là bánh ngọt. Và mình không thích cá.
w: Viết 4 câu: món bạn thích, thích hơn, thích nhất và không thích. | Ich esse gern Reis. Ich trinke lieber Tee. Am liebsten esse ich Pho. Ich mag keine Tomaten. | gern, lieber, am liebsten, mag

## 8.3 Quán cà phê, gọi đồ uống
goal: Gọi đồ uống và bánh ở quán cà phê.
nico: 14
i: Kellnerin | Guten Tag! Was darf es sein? | Chào anh! Anh dùng gì ạ?
i: Felix | Ich hätte gern einen Kaffee mit Milch, bitte. | Cho tôi một cà phê sữa.
i: Kellnerin | Und etwas zu essen? Wir haben Apfelkuchen. | Anh dùng gì ăn không? Chúng tôi có bánh táo.
i: Felix | Ja, ich nehme ein Stück Apfelkuchen. | Có, tôi lấy một miếng bánh táo.
iq: Felix gọi đồ uống gì? | cà phê sữa | trà | nước cam
iq: Quán có bánh gì? | bánh táo | bánh sô-cô-la | bánh mì
iq: Felix có gọi bánh không? | có, một miếng | không | hai miếng
words: Kaffee; Tee; Milch; Saft; Wasser; Kuchen; Tasse; Glas; Ich hätte gern …; Café; Zucker
+w: phr | - | Was darf es sein? | | Quý khách dùng gì ạ? | Guten Tag! [Was darf es sein]? | Xin chào! Quý khách dùng gì ạ?
g: Ba cách gọi món (từ lịch sự nhất): <b>Ich hätte gern</b> … · <b>Ich möchte</b> … · <b>Ich nehme</b> … — đều + cách 4: einen Kaffee, eine Cola, ein Wasser.
g: <b>nehmen</b> đổi nguyên âm: ich nehme, du <b>nimmst</b>, er <b>nimmt</b>, wir nehmen, Sie nehmen.
gt: Đồ uống | Đựng trong
gt: eine Tasse Kaffee / Tee | Tasse (tách)
gt: ein Glas Wasser / Saft | Glas (ly)
gt: eine Flasche Wasser | Flasche (chai)
g: <b>Lỗi hay gặp:</b> "Ich hätte gern ein Kaffee" (der Kaffee → einen Kaffee); "du nehmst" (đúng: du nimmst).
gx: fmc: Ich hätte gern ___ Kaffee. | einen | ein | eine
gx: fmc: Ich nehme ___ Glas Wasser. | ein | einen | eine
gx: fmc: Was ___ du? | nimmst | nehmst | nimmt
gx: fmc: Er ___ einen Tee. | nimmt | nehmt | nimmst
gx: fmc: Eine ___ Tee, bitte. | Tasse | Glas | Stück
x: mc: Phục vụ hỏi "Was darf es sein?". Bạn đáp: | Ich hätte gern einen Tee. | Das ist alles. | Danke, gut.
x: mc: Bạn muốn uống cà phê không đường: | Einen Kaffee ohne Zucker, bitte. | Einen Kaffee mit Zucker, bitte. | Einen Zucker, bitte.
x: mc: Cách gọi lịch sự nhất: | Ich hätte gern … | Ich will … | Gib mir …
x: ord: Ich hätte gern einen Tee, bitte. | Cho tôi một cốc trà.
x: ord: Ich nehme ein Stück Kuchen. | Tôi lấy một miếng bánh.
x: fill: Ich hätte ___ einen Saft. | gern
x: fill: Einen Kaffee mit ___, bitte. (sữa) | Milch
x: tr: Cho tôi một ly nước. | Ich hätte gern ein Glas Wasser. / Ein Glas Wasser, bitte. / Ich möchte ein Glas Wasser.
x: tr: Bạn lấy gì? | Was nimmst du?
x: pr: 3,20
x: lmc: Zwei Tassen Tee und ein Stück Kuchen, bitte. | 2 trà + 1 bánh | 1 trà + 2 bánh | 2 cà phê + 1 bánh
x: lmc: Ich nehme einen Orangensaft. | nước cam | nước táo | nước lọc
lt: Ở quán cà phê
l: Kellner | Guten Tag! Was möchten Sie trinken? | Xin chào! Các chị muốn uống gì?
l: Anna | Einen Tee, bitte. Und du, Lena? | Một cốc trà. Còn Lena?
l: Lena | Ich hätte gern eine Cola. Haben Sie auch Kuchen? | Cho tôi một cola. Quán có bánh ngọt không?
l: Kellner | Ja, Schokoladenkuchen und Käsekuchen. | Có, bánh sô-cô-la và bánh phô mai.
l: Lena | Dann nehme ich ein Stück Käsekuchen. | Vậy tôi lấy một miếng bánh phô mai.
lq: Anna uống gì? | trà | cola | cà phê
lq: Lena uống gì? | cola | trà | nước
lq: Lena chọn bánh gì? | bánh phô mai | bánh sô-cô-la | không ăn
ld: Ich hätte gern eine Cola.
rt: Thực đơn quán cà phê
r: | Café Linde – Kaffee 2,80 € · Cappuccino 3,40 € · Tee 2,50 € · Orangensaft 3,20 € · Apfelkuchen 3,90 € · Käsekuchen 4,20 € | Quán Linde – cà phê 2,80 € · cappuccino 3,40 € · trà 2,50 € · nước cam 3,20 € · bánh táo 3,90 € · bánh phô mai 4,20 €
rq: Trà rẻ hơn cà phê. | R
rq: Bánh táo giá 4,20 €. | F
rq: Nước cam giá 3,20 €. | R
t: Kellnerin | Guten Tag! Was darf es sein? | Xin chào! Anh dùng gì ạ?
t: Felix | Ich hätte gern einen Kaffee mit Milch. | Cho tôi một cà phê sữa.
t: Kellnerin | Mit Zucker? | Có đường không ạ?
t: Felix | Nein, ohne Zucker. Und ich nehme ein Stück Apfelkuchen. | Không đường. Và tôi lấy một miếng bánh táo.
t: Kellnerin | Gern. Kommt sofort! | Vâng. Có ngay ạ!
w: Viết 3 câu gọi đồ ở quán cà phê cho bạn và một người bạn. | Ich hätte gern einen Tee. Mein Freund nimmt einen Kaffee. Und zwei Stück Kuchen, bitte. | hätte gern/nehme/möchte

## 8.4 Nhà hàng: gọi món, trả tiền
goal: Gọi món ở nhà hàng, gọi thanh toán, trả tiền và cho tiền boa.
nico: 15,16
i: Kellner | Haben Sie schon gewählt? | Quý khách chọn món chưa ạ?
i: Felix | Ja, ich nehme die Gemüsesuppe und dann das Hähnchen mit Reis. | Rồi, tôi lấy súp rau và sau đó gà với cơm.
i: Kellner | Und zu trinken? | Còn đồ uống?
i: Felix | Ein Wasser, bitte. | Một chai nước.
iq: Felix gọi món đầu tiên là gì? | súp rau | gà | salad
iq: Món chính của Felix? | gà với cơm | cá với khoai | mì
iq: Felix uống gì? | nước | bia | nước cam
words: Restaurant; Speisekarte; bestellen; Rechnung; Kellner; Stimmt so.; zahlen; zusammen; getrennt; Guten Appetit!; Salat; Getränk
+w: v | - | zahlen | | trả tiền, thanh toán | [Zahlen], bitte! | Tính tiền!
+w: adj | - | getrennt | | riêng (trả riêng) | Zusammen oder [getrennt]? | Trả chung hay riêng?
g: <b>Ở nhà hàng:</b> Die Speisekarte, bitte. → Ich nehme … / Ich hätte gern … → Guten Appetit! → Zahlen, bitte! / Die Rechnung, bitte!
gt: Phục vụ | Bạn
gt: Haben Sie schon gewählt? | Ja, ich nehme … / Noch nicht.
gt: Zusammen oder getrennt? | Zusammen, bitte. / Getrennt, bitte.
gt: Das macht 23,50 Euro. | 25 Euro. Stimmt so! (phần lẻ là tiền boa)
g: <b>Tiền boa (Trinkgeld)</b> ở Đức khoảng 5–10%: làm tròn rồi nói "Stimmt so" hoặc nói luôn số tiền muốn trả: "Fünfundzwanzig, bitte."
g: <b>Lỗi hay gặp:</b> gọi phục vụ bằng "Hallo!" to tiếng — lịch sự hơn: "Entschuldigung!" hoặc giơ tay.
gx: fmc: Die ___, bitte! (thực đơn) | Speisekarte | Rechnung | Kellner
gx: fmc: ___, bitte! (muốn thanh toán) | Zahlen | Bestellen | Essen
gx: fmc: Zusammen oder ___? | getrennt | allein | zurück
gx: fmc: Das macht 18,60 Euro. – 20 Euro. ___! | Stimmt so | Guten Appetit | Bitte schön
gx: fmc: Ich ___ den Salat. | nehme | nimmt | nehmst
x: mc: Món ăn được mang ra, phục vụ nói: | Guten Appetit! | Stimmt so! | Zahlen, bitte!
x: mc: Bạn và bạn bè muốn trả tiền riêng: | Getrennt, bitte. | Zusammen, bitte. | Stimmt so.
x: mc: Hoá đơn 27,40 €, bạn muốn boa và trả 30 €: | Dreißig, bitte. / Stimmt so. | Siebenundzwanzig, bitte. | Die Speisekarte, bitte.
x: ord: Ich nehme das Hähnchen mit Reis. | Tôi lấy gà với cơm.
x: ord: Die Rechnung, bitte! | Cho tôi hoá đơn!
x: ord: Zusammen oder getrennt? | Trả chung hay riêng?
x: tr: Cho tôi xem thực đơn. | Die Speisekarte, bitte.
x: tr: Tính tiền! | Zahlen, bitte! / Die Rechnung, bitte!
x: pr: 23,50
x: pr: 41,80
x: lmc: Das macht zusammen achtunddreißig Euro zwanzig. | 38,20 € | 28,30 € | 83,20 €
x: lmc: Für mich bitte den Fisch mit Kartoffeln. | cá với khoai tây | thịt với cơm | súp rau
lt: Thanh toán
l: Felix | Entschuldigung, wir möchten zahlen! | Xin lỗi, chúng tôi muốn thanh toán!
l: Kellner | Zusammen oder getrennt? | Chung hay riêng ạ?
l: Felix | Getrennt, bitte. Ich hatte die Suppe und das Hähnchen. | Riêng ạ. Tôi dùng súp và gà.
l: Kellner | Das macht vierzehn Euro sechzig. | Hết 14,60 euro.
l: Felix | Sechzehn Euro. Stimmt so! | 16 euro. Khỏi thối!
lq: Họ trả chung hay riêng? | riêng | chung | không rõ
lq: Phần của Felix bao nhiêu? | 14,60 € | 16 € | 40,60 €
lq: Felix boa bao nhiêu? | 1,40 € | 2 € | 60 cent
ld: Wir möchten zahlen.
rt: Thực đơn nhà hàng
r: | Vorspeisen: Gemüsesuppe 4,50 € · Salat 5,20 € — Hauptgerichte: Hähnchen mit Reis 12,90 € · Fisch mit Kartoffeln 14,50 € · Nudeln mit Tomatensoße (vegetarisch) 9,80 € — Getränke: Wasser 2,90 € · Saft 3,50 € | Khai vị: súp rau 4,50 € · salad 5,20 € — Món chính: gà với cơm 12,90 € · cá với khoai tây 14,50 € · mì sốt cà chua (chay) 9,80 € — Đồ uống: nước 2,90 € · nước ép 3,50 €
rq: Món chính rẻ nhất là mì sốt cà chua. | R
rq: Cá với khoai tây giá 12,90 €. | F
rq: Súp rau là món khai vị. | R
t: Kellner | Guten Abend! Haben Sie schon gewählt? | Chào anh! Anh chọn món chưa ạ?
t: Felix | Ja. Als Vorspeise nehme ich die Gemüsesuppe. | Rồi. Khai vị tôi lấy súp rau.
t: Felix | Und dann das Hähnchen mit Reis, bitte. | Rồi gà với cơm.
t: Kellner | Und was möchten Sie trinken? | Anh muốn uống gì?
t: Felix | Ein Wasser, bitte. | Một chai nước.
t: Felix | Entschuldigung, die Rechnung, bitte! | Xin lỗi, cho tôi hoá đơn!
t: Kellner | Das macht zwanzig Euro dreißig. | Hết 20,30 euro.
t: Felix | Zweiundzwanzig, bitte. Stimmt so. | 22 euro. Khỏi thối.
w: Viết đoạn hội thoại ở nhà hàng (5 câu): gọi khai vị, món chính, đồ uống, gọi tính tiền, trả tiền boa. | Die Speisekarte, bitte. Ich nehme die Suppe und den Fisch. Ein Wasser, bitte. Die Rechnung, bitte. Zwanzig Euro, stimmt so. | nehme, Rechnung, stimmt so

## 8.5 Kiểm tra tháng 2
kind: test
goal: Gọi món trọn vẹn một bữa ở nhà hàng (không nhìn chữ); bài kiểm tra 40 câu tháng 2 ≥ 75%.
nico: 15,16,46
t: Kellnerin | Guten Abend! Hier ist die Speisekarte. | Chào anh! Đây là thực đơn.
t: Felix | Danke. Was können Sie empfehlen? | Cảm ơn. Chị có thể gợi ý món gì?
t: Kellnerin | Heute ist der Fisch sehr gut. | Hôm nay món cá rất ngon.
t: Felix | Dann nehme ich den Fisch mit Kartoffeln. | Vậy tôi lấy cá với khoai tây.
t: Kellnerin | Und was möchten Sie trinken? | Anh muốn uống gì?
t: Felix | Ich hätte gern einen Apfelsaft. | Cho tôi một ly nước táo.
t: Felix | Das schmeckt sehr gut! Die Rechnung, bitte. | Rất ngon! Cho tôi hoá đơn.
t: Kellnerin | Das macht siebzehn Euro achtzig. | Hết 17,80 euro.
t: Felix | Zwanzig Euro. Stimmt so! | 20 euro. Khỏi thối!
w: Viết đoạn khoảng 50 từ: kể một ngày của bạn và bạn thích ăn uống gì. | Ich stehe um sieben Uhr auf und frühstücke. Ich esse meistens Brot und trinke Kaffee. Von neun bis fünf arbeite ich. Mittags esse ich in der Kantine. Abends koche ich gern. Am liebsten esse ich Reis mit Fisch. Am Wochenende gehe ich manchmal ins Restaurant. | auf, esse, gern
`;
