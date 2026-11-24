/* Lộ trình 0 → A2 · Tháng 1 (tuần 1–4): 16 buổi học mới + 3 buổi ôn tuần + kiểm tra tháng.
   Soạn tay theo tài liệu "Gia sư tiếng Đức – Lộ trình 0 → A2 trong 6 tháng", mục 7. course.js đọc và dựng bài.
   Cú pháp mỗi dòng  khoá: giá trị  (các phần cách nhau bằng " | "):
   ## id tiêu đề · goal · nico · kind(review/test) · i/iq: mở đầu · words/+w: từ mới · g/gt/gx: ngữ pháp
   x: luyện tập · lt/l/lq/ld: nghe · rt/r/rq: đọc · t: đoạn nói đầu ra · ans: trả lời bằng lời · w: viết
   Dạng bài: mc fill fmc ord tr ty lmc snd art dict nl nw nmc calc sp ph lty say */
window.COURSE_M1=`
#W 1 | Âm tiếng Đức & chào hỏi | Chào hỏi đúng lúc, hỏi thăm lịch sự hoặc thân mật, đánh vần tên mình, đọc số 0–12.
#W 2 | Giới thiệu bản thân | Tự giới thiệu 6 câu, hỏi lại người khác và giới thiệu một người bạn.
#W 3 | Số đếm & liên lạc | Nói và nghe hiểu số đến 1000, tuổi, số điện thoại, email, địa chỉ; điền tờ khai.
#W 4 | Gia đình + Kiểm tra tháng 1 | Giới thiệu gia đình 8 câu: der/die/das, ein/eine, kein, mein/dein, số nhiều.

## 1.1 Chào hỏi & nguyên âm
goal: Chào và tạm biệt đúng buổi trong ngày.
nico: 1
i: Lena | Guten Morgen, Minh! | Chào buổi sáng, Minh!
i: Minh | Hallo, Lena! Guten Morgen! | Chào Lena! Chào buổi sáng!
i: Lena | Tschüss, bis bald! | Tạm biệt, hẹn sớm gặp lại!
i: Minh | Tschüss! | Tạm biệt!
iq: Lena và Minh gặp nhau lúc nào? | buổi sáng | buổi tối | ban đêm
iq: Câu nào dùng để tạm biệt? | Tschüss | Guten Morgen | Hallo
iq: "Bis bald" nghĩa là gì? | hẹn sớm gặp lại | chúc ngủ ngon | xin chào
words: Hallo; Guten Morgen; Guten Tag; Guten Abend; Gute Nacht; Tschüss; Auf Wiedersehen; bis bald; ja; nein
g: <b>5 nguyên âm</b> a e i o u đọc gần như tiếng Việt: <b>a</b> = a, <b>e</b> = ê, <b>i</b> = i, <b>o</b> = ô, <b>u</b> = u.
g: <b>Dài hay ngắn?</b> Nguyên âm thường <b>dài</b> khi đứng trước một phụ âm, trước <b>h</b>, hoặc viết đôi: T<b>a</b>g, <b>A</b>bend, g<b>u</b>t, s<b>eh</b>r, B<b>oo</b>t. Nguyên âm <b>ngắn</b> khi đứng trước hai phụ âm trở lên: N<b>a</b>cht, M<b>o</b>rgen, b<b>i</b>tte.
gt: Từ | Nguyên âm | Đọc gần như
gt: Tag | a dài | "taak"
gt: Nacht | a ngắn | "nakht"
gt: gut | u dài | "guut"
gt: bitte | i ngắn | "bi-tơ"
g: <b>Lỗi hay gặp của người Việt:</b> nuốt phụ âm cuối. Tag phải nghe rõ [k] ở cuối, Nacht có [xt], Abend có [nt]. Chữ <b>-e</b> cuối từ đọc nhẹ "ơ", không bỏ.
gx: snd: Tag | a dài | a ngắn
gx: snd: Nacht | a ngắn | a dài
gx: snd: gut | u dài | u ngắn
gx: snd: bitte | i ngắn | i dài
gx: snd: sehr | e dài | e ngắn
gx: snd: Morgen | o ngắn | o dài
x: lmc: Guten Morgen! | 🕖 7 giờ sáng | 🕗 8 giờ tối | 🕛 nửa đêm
x: lmc: Guten Abend! | 🕗 8 giờ tối | 🕖 7 giờ sáng | 🕑 2 giờ chiều
x: lmc: Gute Nacht! | 🛏 11 giờ đêm, đi ngủ | 🕖 7 giờ sáng | 🕑 2 giờ chiều
x: lmc: Guten Tag! | 🕑 2 giờ chiều | 🛏 11 giờ đêm | 🕖 6 giờ sáng
x: lmc: Auf Wiedersehen! | 👋 tạm biệt (lịch sự) | 🙋 xin chào | 🛏 chúc ngủ ngon
x: lmc: Tschüss! | 👋 tạm biệt (thân mật) | 🙋 chào buổi sáng | 🙏 cảm ơn
x: mc: 🌅 Sáng sớm, bạn gặp hàng xóm ở cầu thang. | Guten Morgen! | Gute Nacht! | Guten Abend!
x: mc: 🌙 Tối, bạn bước vào nhà hàng. | Guten Abend! | Guten Morgen! | Gute Nacht!
x: mc: 🛏 Bạn chúc em gái đi ngủ. | Gute Nacht! | Guten Abend! | Hallo!
x: mc: 🧑‍🤝‍🧑 Bạn chào tạm biệt một người bạn thân. | Tschüss! | Guten Tag! | Gute Nacht!
x: mc: 🏢 Bạn chào tạm biệt bà giám đốc. | Auf Wiedersehen! | Tschüss, bis bald! | Hallo!
x: fill: Gute N___t! | ach | (chúc ngủ ngon)
x: fill: Guten A___d! | ben | (chào buổi tối)
x: fill: Tsch___! | üss | (tạm biệt)
x: fill: Auf Wieder___! | sehen | (tạm biệt, lịch sự)
lt: Gặp nhau buổi tối
l: Frau Schmidt | Guten Abend, Herr Weber! | Chào ông Weber!
l: Herr Weber | Guten Abend, Frau Schmidt! | Chào bà Schmidt!
l: Frau Schmidt | Auf Wiedersehen! | Tạm biệt!
l: Herr Weber | Auf Wiedersehen! Gute Nacht! | Tạm biệt! Chúc ngủ ngon!
lq: Hai người gặp nhau lúc nào? | buổi tối | buổi sáng | buổi trưa
lq: Họ nói chuyện kiểu gì? | lịch sự | thân mật | không rõ
lq: Câu cuối cùng là gì? | Gute Nacht | Guten Morgen | Bis bald
ld: Guten Abend, Frau Schmidt!
rt: Tin nhắn
r: SMS | Hallo Minh! Guten Morgen! Bis bald, Lena | Chào Minh! Chào buổi sáng! Hẹn sớm gặp, Lena
rq: Lena viết tin nhắn vào buổi tối. | F
rq: Lena chào Minh. | R
rq: Lena hẹn sớm gặp lại Minh. | R
t: Lena | Guten Morgen, Minh! | Chào buổi sáng, Minh!
t: Minh | Hallo, Lena! Guten Morgen! | Chào Lena! Chào buổi sáng!
t: Lena | Tschüss, bis bald! | Tạm biệt, hẹn sớm gặp lại!
t: Minh | Tschüss, Lena! | Tạm biệt Lena!
w: 8 giờ sáng bạn gặp cô giáo Frau Schmidt. Viết câu chào. | Guten Morgen, Frau Schmidt! | Guten Morgen

## 1.2 ä ö ü ß, cảm ơn, xin lỗi
goal: Cảm ơn, đáp lại lời cảm ơn và xin lỗi.
nico: 2
i: Lena | Hier, bitte schön! | Đây, xin mời!
i: Minh | Danke schön! | Cảm ơn nhiều!
i: Lena | Bitte schön! | Không có gì!
i: Minh | Oh, Entschuldigung! | Ôi, xin lỗi!
i: Lena | Kein Problem! | Không sao!
iq: Minh nói gì để cảm ơn? | Danke schön | Bitte schön | Kein Problem
iq: Lena đáp lại lời cảm ơn thế nào? | Bitte schön | Danke | Entschuldigung
iq: "Kein Problem" nghĩa là gì? | không sao | xin lỗi | cảm ơn
words: danke; vielen Dank; bitte; bitte schön; Entschuldigung; Es tut mir leid.; kein Problem; Gern geschehen!
+w: phr | - | Gern geschehen! | | Không có gì! (rất sẵn lòng) | Danke für die Hilfe! – [Gern geschehen]! | Cảm ơn đã giúp! – Không có gì!
g: <b>ä</b> đọc gần "e" (miệng mở): M<b>ä</b>dchen, K<b>ä</b>se.
g: <b>ö</b>: tròn môi như nói "ô" nhưng lưỡi đặt như "ê": sch<b>ö</b>n, <b>Ö</b>sterreich. <b>ü</b>: tròn môi như "u", lưỡi như "i": Tsch<b>ü</b>ss, T<b>ü</b>r.
g: <b>ß</b> = "s" mạnh, không rung: hei<b>ß</b>en, Stra<b>ß</b>e. <b>ei</b> luôn đọc "ai" (n<b>ei</b>n, dr<b>ei</b>), <b>ie</b> đọc "i" dài (w<b>ie</b>, S<b>ie</b>).
gt: Chữ | Đọc như | Ví dụ
gt: ä | e | Mädchen
gt: ö | ô + ê | schön
gt: ü | u + i | Tschüss
gt: ei | ai | nein
gt: ie | i dài | wie
g: <b>Lỗi hay gặp:</b> đọc ü thành "u", ö thành "ô". Nhưng <i>schön</i> (đẹp) ≠ <i>schon</i> (đã), <i>Mütter</i> (các bà mẹ) ≠ <i>Mutter</i> (mẹ).
gx: snd: schön | ö | o
gx: snd: schon | o | ö
gx: snd: nein | ei | ie
gx: snd: wie | ie | ei
gx: snd: Mädchen | ä | a
gx: fmc: Danke ___! | schön | schon | schen
x: snd: Mutter | u | ü
x: snd: Mütter | ü | u
x: snd: Bruder | u | ü
x: snd: Brüder | ü | u
x: snd: Tochter | o | ö
x: snd: Töchter | ö | o
x: mc: Ai đó nói: "Danke schön!" Bạn đáp: | Bitte schön! | Guten Abend! | Nein!
x: mc: Bạn giẫm vào chân người khác. Bạn nói: | Entschuldigung! | Danke! | Tschüss!
x: mc: Ai đó xin lỗi bạn. Bạn đáp: | Kein Problem! | Danke schön! | Gute Nacht!
x: mc: Bạn không thể đến dự tiệc của bạn. Bạn nói: | Es tut mir leid. | Bitte schön! | Gern geschehen!
x: mc: Bạn giúp ai đó và họ cảm ơn. Bạn đáp: | Gern geschehen! | Es tut mir leid. | Entschuldigung!
x: fill: Tsch___ss! | ü | (tạm biệt)
x: fill: Das M___dchen | ä | (cô bé)
x: fill: hei___en | ß | (tên là)
x: fill: Bitte sch___n! | ö | (không có gì)
lt: Nhầm người
l: Anna | Entschuldigung, sind Sie Herr Weber? | Xin lỗi, ông có phải ông Weber không?
l: Mann | Nein, es tut mir leid. | Không, tôi rất tiếc.
l: Anna | Oh, Entschuldigung! | Ôi, xin lỗi!
l: Mann | Kein Problem! | Không sao!
lq: Người đàn ông có phải ông Weber không? | không | có | không rõ
lq: Anna nói gì khi nhầm người? | Entschuldigung | Danke | Tschüss
lq: Người đàn ông đáp lại thế nào? | Kein Problem | Bitte schön | Gute Nacht
ld: Es tut mir leid.
rt: Tin nhắn
r: SMS | Danke für den Kaffee, Lena! Bis bald, Minh | Cảm ơn vì cốc cà phê nhé Lena! Hẹn sớm gặp, Minh
rq: Minh cảm ơn Lena vì cà phê. | R
rq: Lena viết tin nhắn này. | F
rq: Minh chào tạm biệt ở cuối tin. | R
t: Minh | Danke schön! | Cảm ơn nhiều!
t: Lena | Bitte schön! | Không có gì!
t: Minh | Oh, Entschuldigung! | Ôi, xin lỗi!
t: Lena | Kein Problem! | Không sao!
w: Bạn làm đổ cà phê của bạn mình. Viết lời xin lỗi và câu bạn ấy đáp lại. | Entschuldigung! – Kein Problem! | Entschuldigung/tut mir leid, kein Problem

## 1.3 du hay Sie
goal: Hỏi thăm thân mật và lịch sự, trả lời được.
nico: 3
i: Frau Schmidt | Guten Tag, Herr Nguyen! Wie geht es Ihnen? | Chào anh Nguyễn! Anh có khoẻ không?
i: Minh | Danke, sehr gut. Und Ihnen? | Cảm ơn, rất khoẻ. Còn cô?
i: Frau Schmidt | Auch gut, danke. | Cũng khoẻ, cảm ơn.
iq: Hai người nói chuyện kiểu gì? | lịch sự (Sie) | thân mật (du) | không rõ
iq: Minh khoẻ không? | rất khoẻ | không khoẻ lắm | tạm được
iq: "Und Ihnen?" nghĩa là gì? | Còn cô (ông/bà) thì sao? | Còn bạn thì sao? | Tạm biệt
words: Wie geht's?; Wie geht es Ihnen?; gut; sehr gut; es geht; nicht so gut; Und dir?; Und Ihnen?; Herr; Frau
+w: phr | - | Wie geht's? | | Khoẻ không? (thân mật) | Hallo Tom, [wie geht's]? | Chào Tom, khoẻ không?
+w: phr | - | es geht | | tạm được | Wie geht's? – [Es geht]. | Khoẻ không? – Tạm được.
+w: phr | - | nicht so gut | | không khoẻ lắm | Mir geht es [nicht so gut]. | Tôi không khoẻ lắm.
+w: phr | - | sehr gut | | rất tốt, rất khoẻ | Danke, [sehr gut]! | Cảm ơn, rất khoẻ!
+w: phr | - | Und dir? | | Còn bạn? (thân mật) | Mir geht es gut. [Und dir]? | Mình khoẻ. Còn bạn?
+w: phr | - | Und Ihnen? | | Còn ông/bà? (lịch sự) | Danke, gut. [Und Ihnen]? | Cảm ơn, khoẻ. Còn ông?
g: <b>du</b> = bạn (thân mật): bạn bè, gia đình, trẻ em, người trẻ cùng lứa. <b>Sie</b> (luôn viết hoa) = ông/bà/anh/chị (lịch sự): người lạ, thầy cô, đồng nghiệp mới, cơ quan.
gt: | Thân mật (du) | Lịch sự (Sie)
gt: Chào | Hallo! · Tschüss! | Guten Tag! · Auf Wiedersehen!
gt: Hỏi thăm | Wie geht's? | Wie geht es Ihnen?
gt: Hỏi lại | Und dir? | Und Ihnen?
gt: Gọi | tên riêng: Lena | Herr/Frau + HỌ: Frau Schmidt
g: <b>Lỗi hay gặp:</b> gọi "Herr Minh" theo tên như tiếng Việt. Người Đức dùng Herr/Frau + họ: <b>Herr Nguyen</b>. Không dùng Herr/Frau với du.
gx: mc: Bạn hỏi thăm sếp mới. | Wie geht es Ihnen? | Wie geht's? | Und dir?
gx: mc: Bạn hỏi thăm em họ 15 tuổi. | Wie geht's? | Wie geht es Ihnen? | Und Ihnen?
gx: mc: Cô giáo hỏi "Wie geht es Ihnen?". Bạn hỏi lại: | Und Ihnen? | Und dir? | Und du?
gx: mc: Cách gọi lịch sự với ông Klaus Weber là: | Herr Weber | Herr Klaus | Klaus
x: mc: Ở quầy ngân hàng, bạn nói với nhân viên: | Guten Tag! Wie geht es Ihnen? | Hallo! Wie geht's? | Tschüss!
x: mc: Gặp bạn cùng lớp ở quán cà phê: | Hallo! Wie geht's? | Guten Tag! Wie geht es Ihnen? | Auf Wiedersehen!
x: mc: Bạn hỏi thăm bà hàng xóm 70 tuổi: | Wie geht es Ihnen? | Wie geht's? | Und dir?
x: mc: Mẹ của bạn hỏi "Wie geht's?". Bạn đáp: | Gut, danke. Und dir? | Gut, danke. Und Ihnen? | Auf Wiedersehen!
x: mc: "Es geht" nghĩa là: | tạm được | rất khoẻ | không sao
x: mc: Bạn thấy không khoẻ. Bạn nói: | Nicht so gut. | Sehr gut! | Gern geschehen!
x: ord: Wie geht es Ihnen? | Ông/bà khoẻ không?
x: ord: Danke, sehr gut. | Cảm ơn, rất khoẻ.
x: ord: Mir geht es gut. | Tôi khoẻ.
x: ord: Guten Tag, Frau Schmidt! | Chào cô Schmidt!
x: ord: Und dir? | Còn bạn?
x: tr: Chào Lena! Khoẻ không? | Hallo Lena, wie geht's? / Hallo Lena! Wie geht's? / Hallo Lena, wie geht es dir?
x: tr: Cảm ơn, khoẻ. Còn ông? | Danke, gut. Und Ihnen?
x: tr: Tạm được. | Es geht.
x: tr: Chào ông Weber! | Guten Tag, Herr Weber! / Hallo, Herr Weber!
lt: Hai người bạn
l: Tom | Hallo Lena! Wie geht's? | Chào Lena! Khoẻ không?
l: Lena | Hallo Tom! Es geht. Und dir? | Chào Tom! Tạm được. Còn cậu?
l: Tom | Nicht so gut. Ich bin müde. | Không khoẻ lắm. Mình mệt.
l: Lena | Oh, schade! Bis morgen, Tom! | Ôi, tiếc quá! Mai gặp nhé, Tom!
lq: Lena khoẻ không? | tạm được | rất khoẻ | không khoẻ
lq: Tom thế nào? | không khoẻ lắm, mệt | rất khoẻ | tạm được
lq: Họ nói chuyện kiểu gì? | thân mật (du) | lịch sự (Sie) | không rõ
ld: Es geht. Und dir?
rt: Email
r: E-Mail | Liebe Lena, wie geht es dir? Mir geht es gut. Viele Grüße, Anna | Lena thân mến, bạn khoẻ không? Mình khoẻ. Thân chào, Anna
rq: Anna viết thư lịch sự với Sie. | F
rq: Anna khoẻ. | R
rq: Anna hỏi thăm Lena. | R
t: Minh | Guten Tag, Frau Schmidt! Wie geht es Ihnen? | Chào cô Schmidt! Cô khoẻ không?
t: Frau Schmidt | Danke, gut. Und Ihnen? | Cảm ơn, khoẻ. Còn anh?
t: Minh | Sehr gut, danke. | Rất khoẻ, cảm ơn.
t: Frau Schmidt | Auf Wiedersehen, Herr Nguyen! | Tạm biệt anh Nguyễn!
t: Minh | Auf Wiedersehen! | Tạm biệt!
ans: Wie geht es Ihnen? | Danke, gut. Und Ihnen? | gut, Ihnen | Trả lời lịch sự rồi hỏi lại.
w: Viết 2 câu hỏi thăm: một câu cho bạn thân Tom, một câu cho cô giáo Frau Schmidt. | Hallo Tom, wie geht's? Guten Tag, Frau Schmidt, wie geht es Ihnen? | geht's/dir, Ihnen

## 1.4 Đánh vần & số 0–12
goal: Hỏi tên, đánh vần tên, đọc số điện thoại ngắn.
nico: 4
i: Frau Schmidt | Wie heißen Sie? | Anh tên gì?
i: Minh | Ich heiße Minh. | Tôi tên là Minh.
i: Frau Schmidt | Wie schreibt man das? | Viết thế nào?
i: Minh | M – I – N – H. | M – I – N – H.
iq: Tên Minh có mấy chữ cái? | 4 | 3 | 5
iq: "Wie schreibt man das?" nghĩa là gì? | Viết như thế nào? | Bạn tên gì? | Bạn khoẻ không?
iq: Cô giáo hỏi tên Minh kiểu gì? | lịch sự (Sie) | thân mật (du) | không hỏi
words: Wie heißt du?; heißen; Wie schreibt man das?; buchstabieren; null; eins; zwei; drei; vier; fünf; sechs; sieben; acht; neun; zehn; elf; zwölf
+w: phr | - | Wie heißt du? | | Bạn tên gì? | Hallo! [Wie heißt du]? | Chào! Bạn tên gì?
+w: phr | - | Wie schreibt man das? | | Viết cái đó thế nào? | Nguyen? [Wie schreibt man das]? | Nguyễn à? Viết thế nào?
g: <b>Bảng chữ cái</b> — tên các chữ đọc như sau:
gtn: A a | B be | C tse | D de | E ê | F ef | G ghê
gtn: H ha | I i | J jót | K ka | L el | M em | N en
gtn: O ô | P pê | Q ku | R er | S ét | T tê | U u
gtn: V phau | W vê | X iks | Y úp-xi-lon | Z tset | ß ét-tset | Ä Ö Ü
g: <b>Chữ dễ nhầm:</b> E (ê) ≠ I (i) · J = "jót" · V = "phau" · W = "vê" · Y = "úp-xi-lon" · Z = "tset". Khi đánh vần ü nói "u Umlaut".
g: <b>Số 0–12:</b> null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf. Khi đọc số điện thoại hay nói <b>zwo</b> thay cho zwei để khỏi nhầm với drei.
gx: lmc: jott | J | G | I
gx: lmc: fau | V | F | W
gx: lmc: weh | W | V | B
gx: lmc: zett | Z | C | S
gx: lmc: i | I | E | J
gx: lmc: ha | H | A | K
x: sp: Lena
x: sp: Hoa
x: sp: Weber
x: sp: Vy
x: sp: Jung
x: sp: Quang
x: nmc: 0-12
x: nmc: 0-12
x: nmc: 0-12
x: nmc: 0-12
x: nmc: 0-12
x: nw: 0-12
x: nw: 0-12
x: nw: 0-12
x: nw: 0-12
lt: Ở quầy lễ tân
l: Herr Weber | Wie ist Ihr Name, bitte? | Xin cho biết tên chị?
l: Anna | Anna Wolf. | Anna Wolf.
l: Herr Weber | Wie schreibt man das? | Viết thế nào ạ?
l: Anna | W – O – L – F. | W – O – L – F.
l: Herr Weber | Danke. Und die Telefonnummer? | Cảm ơn. Còn số điện thoại?
l: Anna | Null – eins – sieben – drei – neun. | Không – một – bảy – ba – chín.
lq: Họ của Anna là gì? | Wolf | Wulf | Volf
lq: Số điện thoại bắt đầu bằng? | 017 | 071 | 019
lq: Số cuối cùng là? | 9 | 5 | 3
ld: Wie schreibt man das?
rt: Tờ khai
r: | Vorname: Hoa | Tên: Hoa
r: | Familienname: Tran | Họ: Trần
r: | Telefon: 0176 8312 | Điện thoại: 0176 8312
rq: Họ của người này là Hoa. | F
rq: Số điện thoại có số 8. | R
rq: Tên của người này là Hoa. | R
t: Minh | Hallo! Ich heiße Minh. Wie heißt du? | Chào! Mình tên Minh. Bạn tên gì?
t: Lena | Ich heiße Lena. | Mình tên Lena.
t: Minh | Eins, zwei, drei, vier, fünf, sechs! | Một, hai, ba, bốn, năm, sáu!
t: Lena | Sieben, acht, neun, zehn, elf, zwölf! | Bảy, tám, chín, mười, mười một, mười hai!
w: Viết tên bạn rồi đánh vần bằng chữ cái (vd: M – I – N – H). | Ich heiße Minh. M – I – N – H. | heiße

## 1.5 Ôn tuần 1
kind: review
goal: Nói trọn hội thoại: chào → hỏi thăm → hỏi tên → tạm biệt.
nico: 1,2,3,4
x: nmc: 0-12
x: nmc: 0-12
x: sp: Minh
t: Herr Weber | Guten Morgen! Wie heißen Sie? | Chào buổi sáng! Anh tên gì?
t: Minh | Ich heiße Minh Nguyen. Und Sie? | Tôi tên Minh Nguyễn. Còn ông?
t: Herr Weber | Ich heiße Weber. Wie geht es Ihnen? | Tôi tên Weber. Anh khoẻ không?
t: Minh | Danke, gut. Und Ihnen? | Cảm ơn, khoẻ. Còn ông?
t: Herr Weber | Auch gut, danke. Auf Wiedersehen! | Cũng khoẻ, cảm ơn. Tạm biệt!
t: Minh | Auf Wiedersehen, Herr Weber! | Tạm biệt ông Weber!
w: Viết 3 câu cho 3 tình huống: 7 giờ sáng gặp hàng xóm; chia tay bạn thân; chúc em trai đi ngủ. | Guten Morgen! Tschüss, bis bald! Gute Nacht! | Guten Morgen, Tschüss/bis bald, Gute Nacht

## 2.1 Tên & quê quán
goal: Nói tên, quê quán và hỏi lại người khác.
nico: 5
i: Lena | Hallo! Ich heiße Lena. Wie heißt du? | Chào! Mình tên Lena. Bạn tên gì?
i: Minh | Ich heiße Minh. | Mình tên Minh.
i: Lena | Woher kommst du, Minh? | Minh đến từ đâu?
i: Minh | Ich komme aus Vietnam. Und du? | Mình đến từ Việt Nam. Còn bạn?
i: Lena | Ich komme aus Deutschland. | Mình đến từ Đức.
iq: Minh đến từ đâu? | Việt Nam | Đức | Áo
iq: Lena đến từ đâu? | Đức | Việt Nam | Thụy Sĩ
iq: "Woher kommst du?" nghĩa là gì? | Bạn đến từ đâu? | Bạn tên gì? | Bạn sống ở đâu?
words: heißen; kommen; aus; woher; wie; Vietnam; Deutschland; Österreich; Schweiz; Land
+w: prep | - | aus | | từ (nơi nào đến) | Ich komme [aus] Vietnam. | Tôi đến từ Việt Nam.
+w: adv | - | woher | | từ đâu | [Woher] kommst du? | Bạn đến từ đâu?
+w: adv | - | wie | | như thế nào; gì (hỏi tên) | [Wie] heißt du? | Bạn tên gì?
g: <b>Chia động từ ở hiện tại:</b> bỏ đuôi <b>-en</b> của động từ nguyên mẫu rồi thêm đuôi theo ngôi.
gt: Ngôi | đuôi | kommen | heißen
gt: ich | -e | ich komme | ich heiße
gt: du | -st | du kommst | du heißt (ß + st → ßt)
gt: Sie | -en | Sie kommen | Sie heißen
g: <b>Woher? → aus + nước:</b> Ich komme aus Vietnam. Vài nước có mạo từ: aus <b>der</b> Schweiz.
g: <b>Lỗi hay gặp:</b> "Ich kommen aus…" (quên đổi đuôi), "du heißst" (đúng: du heißt).
gx: fill: Ich ___ Minh. | heiße | (heißen)
gx: fill: Woher ___ du? | kommst | (kommen)
gx: fill: Wie ___ Sie? | heißen | (heißen)
gx: fill: Ich ___ aus Vietnam. | komme | (kommen)
gx: fmc: Ich komme ___ der Schweiz. | aus | in | von
gx: fill: Wie ___ du? | heißt | (heißen)
x: fill: Ich komm___ aus Vietnam. | e
x: fill: Du komm___ aus Österreich. | st
x: fill: Woher komm___ Sie? | en
x: fill: Ich heiß___ Lan. | e
x: fill: Wie heiß___ du? | t
x: fill: Kommen Sie aus Deutschland? – Nein, ich komm___ aus Vietnam. | e
x: mc: Câu trả lời: "Ich heiße Tom." — Câu hỏi là gì? | Wie heißt du? | Woher kommst du? | Wie geht's?
x: mc: Câu trả lời: "Aus Österreich." — Câu hỏi là gì? | Woher kommen Sie? | Wie heißen Sie? | Wie geht es Ihnen?
x: mc: Câu trả lời: "Danke, gut." — Câu hỏi là gì? | Wie geht es Ihnen? | Woher kommen Sie? | Wie heißen Sie?
x: mc: Câu trả lời: "Ich komme aus der Schweiz." — Câu hỏi là gì? | Woher kommst du? | Wie heißt du? | Wie schreibt man das?
x: mc: Câu trả lời: "Ich heiße Weber." — Câu hỏi là gì? | Wie heißen Sie? | Woher kommen Sie? | Und Ihnen?
x: ord: Ich komme aus Vietnam. | Tôi đến từ Việt Nam.
x: ord: Woher kommst du? | Bạn đến từ đâu?
x: ord: Wie heißen Sie? | Ông/bà tên gì?
x: ord: Ich komme aus der Schweiz. | Tôi đến từ Thụy Sĩ.
lt: Ngày đầu ở lớp
l: Frau Schmidt | Guten Tag! Wie heißen Sie? | Chào chị! Chị tên gì?
l: Anna | Ich heiße Anna Berger. | Tôi tên Anna Berger.
l: Frau Schmidt | Woher kommen Sie, Frau Berger? | Chị Berger đến từ đâu?
l: Anna | Ich komme aus Österreich, aus Wien. | Tôi đến từ Áo, từ Wien.
lq: Anna đến từ nước nào? | Áo | Đức | Thụy Sĩ
lq: Họ của Anna là gì? | Berger | Weber | Schmidt
lq: Hai người nói chuyện kiểu gì? | lịch sự (Sie) | thân mật (du) | không rõ
ld: Woher kommen Sie?
rt: Hồ sơ trên nhóm lớp
r: | Hallo! Ich heiße Tom. Ich komme aus der Schweiz. Und woher kommst du? | Chào! Mình tên Tom. Mình đến từ Thụy Sĩ. Còn bạn đến từ đâu?
rq: Tom đến từ Thụy Sĩ. | R
rq: Tom đến từ Đức. | F
rq: Tom hỏi bạn đến từ đâu. | R
t: Minh | Hallo! Ich heiße Minh. Wie heißt du? | Chào! Mình tên Minh. Bạn tên gì?
t: Lena | Ich heiße Lena. Woher kommst du? | Mình tên Lena. Bạn đến từ đâu?
t: Minh | Ich komme aus Vietnam. Und du? | Mình đến từ Việt Nam. Còn bạn?
t: Lena | Ich komme aus Deutschland. | Mình đến từ Đức.
ans: Woher kommst du? | Ich komme aus Vietnam. | komme, aus
w: Viết 2 câu: tên của bạn và bạn đến từ đâu. | Ich heiße Minh. Ich komme aus Vietnam. | heiße, komme, aus

## 2.2 Nơi ở & ngôn ngữ
goal: Nói mình sống ở đâu và nói những thứ tiếng nào.
nico: 7
i: Tom | Wo wohnst du, Minh? | Minh sống ở đâu?
i: Minh | Ich wohne in Berlin. | Mình sống ở Berlin.
i: Tom | Sprichst du Deutsch? | Bạn có nói tiếng Đức không?
i: Minh | Ja, ein bisschen. Ich spreche Vietnamesisch und Englisch. | Có, một chút. Mình nói tiếng Việt và tiếng Anh.
iq: Minh sống ở đâu? | Berlin | Wien | Hamburg
iq: Minh nói tiếng Đức thế nào? | một chút | rất giỏi | không biết
iq: Minh còn nói thứ tiếng nào? | tiếng Việt và tiếng Anh | tiếng Pháp | chỉ tiếng Việt
words: wohnen; sprechen; Stadt; Deutsch; Englisch; Vietnamesisch; ein bisschen; gut; auch; wo
+w: n | - | Vietnamesisch | — | tiếng Việt | Ich spreche [Vietnamesisch]. | Tôi nói tiếng Việt.
+w: phr | - | ein bisschen | | một chút | Ich spreche [ein bisschen] Deutsch. | Tôi nói một chút tiếng Đức.
+w: adv | - | auch | | cũng | Ich wohne [auch] in Berlin. | Tôi cũng sống ở Berlin.
+w: adv | - | wo | | ở đâu | [Wo] wohnst du? | Bạn sống ở đâu?
g: <b>wohnen</b> chia đều: ich wohne, du wohnst, er/sie wohnt, wir wohnen, Sie wohnen.
g: <b>sprechen</b> đổi nguyên âm <b>e → i</b> ở ngôi du và er/sie:
gt: ich | du | er/sie | wir | Sie
gt: spreche | sprichst | spricht | sprechen | sprechen
g: <b>aus hay in?</b> Woher? (từ đâu đến) → <b>aus</b>: Ich komme aus Vietnam. Wo? (đang ở đâu) → <b>in</b>: Ich wohne in Berlin.
g: <b>Lỗi hay gặp:</b> "Ich wohne aus Berlin", "du sprechst" (đúng: du sprichst). Tên ngôn ngữ không cần mạo từ: Ich spreche Deutsch.
gx: fill: Du ___ gut Deutsch. | sprichst | (sprechen)
gx: fill: Er ___ Englisch. | spricht | (sprechen)
gx: fill: Ich ___ Vietnamesisch. | spreche | (sprechen)
gx: fill: Wo ___ du? | wohnst | (wohnen)
gx: fill: Sie ___ in Wien. | wohnt | (wohnen – cô ấy)
gx: fill: Wir ___ in Hamburg. | wohnen | (wohnen)
x: fmc: Ich komme ___ Vietnam. | aus | in | von
x: fmc: Ich wohne ___ Berlin. | in | aus | an
x: fmc: Lena kommt ___ Deutschland. | aus | in | wo
x: fmc: Tom wohnt ___ Zürich. | in | aus | auf
x: fmc: Anna kommt ___ Österreich, aber sie wohnt ___ Berlin. | aus … in | in … aus | aus … aus
x: fmc: ___ wohnst du? – In Hamburg. | Wo | Woher | Wie
x: fill: Ich spr___che Deutsch. | e
x: fill: Du spr___chst Englisch. | i
x: fill: ___ du Vietnamesisch? | Sprichst | (sprechen)
x: fill: Sie (ông/bà) ___ sehr gut Deutsch. | sprechen | (sprechen)
x: fill: Minh ___ ein bisschen Deutsch. | spricht | (sprechen)
x: lmc: Ich wohne in Hamburg. | Hamburg | Berlin | Bremen
x: lmc: Ich wohne in München. | München | Münster | Mannheim
x: lmc: Anna wohnt in Wien. | Wien | Bern | Köln
x: lmc: Tom kommt aus Zürich. | Zürich | Berlin | Hanoi
lt: Hai bạn mới quen
l: Lena | Hallo Anna! Wo wohnst du? | Chào Anna! Bạn sống ở đâu?
l: Anna | Ich wohne in Wien. Und du? | Mình sống ở Wien. Còn bạn?
l: Lena | In Hamburg. Sprichst du Englisch? | Ở Hamburg. Bạn nói tiếng Anh không?
l: Anna | Ja, ich spreche gut Englisch und auch ein bisschen Spanisch. | Có, mình nói tiếng Anh giỏi và cũng nói một chút tiếng Tây Ban Nha.
lq: Anna sống ở đâu? | Wien | Hamburg | Berlin
lq: Lena sống ở đâu? | Hamburg | Wien | München
lq: Anna nói tiếng Anh thế nào? | giỏi | một chút | không biết
ld: Ich wohne in Hamburg.
rt: Giới thiệu của Mai
r: | Ich heiße Mai. Ich komme aus Vietnam, aus Hanoi. Jetzt wohne ich in München. Ich spreche Vietnamesisch, Englisch und ein bisschen Deutsch. | Tôi tên Mai. Tôi đến từ Việt Nam, từ Hà Nội. Bây giờ tôi sống ở München. Tôi nói tiếng Việt, tiếng Anh và một chút tiếng Đức.
rq: Mai sống ở Hà Nội. | F
rq: Mai nói một chút tiếng Đức. | R
rq: Mai đến từ Việt Nam. | R
t: Tom | Wo wohnst du? | Bạn sống ở đâu?
t: Minh | Ich wohne in Berlin. Und du? | Mình sống ở Berlin. Còn bạn?
t: Tom | Ich wohne auch in Berlin. Sprichst du Deutsch? | Mình cũng sống ở Berlin. Bạn nói tiếng Đức không?
t: Minh | Ja, ein bisschen. Ich spreche Vietnamesisch und Englisch. | Có, một chút. Mình nói tiếng Việt và tiếng Anh.
ans: Wo wohnen Sie? | Ich wohne in Berlin. | wohne, in
w: Viết 3 câu: bạn sống ở đâu, nói những thứ tiếng nào. | Ich wohne in Berlin. Ich spreche Vietnamesisch und Englisch. Ich spreche ein bisschen Deutsch. | wohne, in, spreche

## 2.3 Câu hỏi W & Có/Không
goal: Đặt 5 câu hỏi làm quen và trả lời ja/nein.
nico: 6
i: Anna | Wer ist das? | Đó là ai?
i: Lena | Das ist Minh. | Đó là Minh.
i: Anna | Kommt er aus China? | Anh ấy đến từ Trung Quốc à?
i: Lena | Nein, nicht aus China. Er kommt aus Vietnam. | Không, không phải từ Trung Quốc. Anh ấy đến từ Việt Nam.
iq: Minh đến từ Trung Quốc phải không? | không, từ Việt Nam | đúng | không rõ
iq: "Wer ist das?" nghĩa là gì? | Đó là ai? | Đó là cái gì? | Ở đâu?
iq: "Kommt er aus China?" là loại câu gì? | câu hỏi Có/Không | câu hỏi W | câu kể
words: wer; was; wo; woher; wie; oder; nicht; ja; nein
+w: pron | - | wer | | ai | [Wer] ist das? | Đó là ai?
+w: pron | - | was | | cái gì | [Was] ist das? | Đó là cái gì?
+w: conj | - | oder | | hay, hoặc | Kommst du aus Vietnam [oder] aus China? | Bạn đến từ Việt Nam hay Trung Quốc?
+w: adv | - | nicht | | không (phủ định) | Ich wohne [nicht] in Berlin. | Tôi không sống ở Berlin.
g: <b>Câu hỏi W:</b> từ hỏi + <b>động từ</b> + chủ ngữ … ? Động từ luôn đứng <b>thứ 2</b>.
g: <b>Câu hỏi Có/Không:</b> <b>động từ đứng đầu</b> + chủ ngữ … ? Trả lời ja / nein.
gt: Loại | Vị trí 1 | Vị trí 2 | Phần còn lại
gt: Câu kể | Du | wohnst | in Berlin.
gt: Câu hỏi W | Wo | wohnst | du?
gt: Có/Không | Wohnst | du | in Berlin?
g: Từ hỏi: <b>wer</b> (ai), <b>was</b> (gì), <b>wo</b> (ở đâu), <b>woher</b> (từ đâu), <b>wie</b> (thế nào).
g: <b>Lỗi hay gặp:</b> "Wo du wohnst?" (thiếu đảo động từ), "Du wohnst in Berlin?" chỉ dùng khi nói thân mật để hỏi lại, không phải câu hỏi chuẩn.
gx: fmc: ___ ist das? – Das ist Lena. | Wer | Was | Wo
gx: fmc: ___ wohnst du? – In Berlin. | Wo | Woher | Wer
gx: fmc: ___ kommen Sie? – Aus Vietnam. | Woher | Wo | Wie
gx: fmc: ___ heißt du? – Minh. | Wie | Was | Wer
gx: fmc: ___ sprichst du? – Deutsch und Englisch. | Was | Wer | Wo
gx: ord: Wohnst du in Berlin? | Bạn sống ở Berlin à?
x: ty: Biến thành câu hỏi Có/Không | Du wohnst in Berlin. | Wohnst du in Berlin?
x: ty: Biến thành câu hỏi Có/Không | Sie kommen aus Vietnam. | Kommen Sie aus Vietnam?
x: ty: Biến thành câu hỏi Có/Không | Du sprichst Englisch. | Sprichst du Englisch?
x: ty: Hỏi phần in đậm (câu hỏi W) | Ich wohne <b>in Hamburg</b>. (du) | Wo wohnst du?
x: ty: Hỏi phần in đậm (câu hỏi W) | Ich komme <b>aus Österreich</b>. (du) | Woher kommst du?
x: ty: Hỏi phần in đậm (câu hỏi W) | Das ist <b>Tom</b>. | Wer ist das?
x: mc: Wohnst du in Berlin? | Ja, in Berlin. | Aus Berlin. | Ich heiße Berlin.
x: mc: Wer ist das? | Das ist Frau Schmidt. | In Hamburg. | Danke, gut.
x: mc: Sprechen Sie Deutsch? | Ja, ein bisschen. | Aus Deutschland. | Ich heiße Deutsch.
x: mc: Woher kommt Lena? | Aus Deutschland. | In Hamburg. | Ja.
x: mc: Kommst du aus China? | Nein, aus Vietnam. | Ja, in Vietnam. | Wer?
x: lmc: Kommst du aus Deutschland? – Nein, aus Vietnam. | Nein | Ja
x: lmc: Wohnen Sie in Berlin? – Ja, in Berlin. | Ja | Nein
x: lmc: Sprichst du Englisch? – Nein, nicht so gut. | Nein | Ja
x: lmc: Ist das Tom? – Ja, das ist Tom. | Ja | Nein
lt: Ở sân bay
l: Herr Weber | Sind Sie Frau Berger? | Chị là chị Berger phải không?
l: Anna | Ja. Und wer sind Sie? | Vâng. Còn ông là ai?
l: Herr Weber | Weber, Klaus Weber. Wohnen Sie in Wien? | Weber, Klaus Weber. Chị sống ở Wien à?
l: Anna | Nein, ich wohne in Salzburg. | Không, tôi sống ở Salzburg.
lq: Người phụ nữ có phải là chị Berger không? | đúng | không | không rõ
lq: Anna sống ở Wien phải không? | không, ở Salzburg | đúng | không rõ
lq: Tên riêng của ông Weber là gì? | Klaus | Tom | Lukas
ld: Wohnen Sie in Wien?
rt: Thẻ thông tin
r: | Wer? – Lena. | Ai? – Lena.
r: | Woher? – Aus Deutschland. | Từ đâu? – Từ Đức.
r: | Wo? – In Hamburg. | Ở đâu? – Ở Hamburg.
r: | Was spricht sie? – Deutsch und Englisch. | Cô ấy nói gì? – Tiếng Đức và tiếng Anh.
rq: Lena sống ở Hamburg. | R
rq: Lena đến từ Áo. | F
rq: Lena nói tiếng Anh. | R
t: Minh | Wie heißt du? | Bạn tên gì?
t: Anna | Ich heiße Anna. | Mình tên Anna.
t: Minh | Woher kommst du? | Bạn đến từ đâu?
t: Anna | Aus Österreich. | Từ Áo.
t: Minh | Wohnst du in Wien? | Bạn sống ở Wien à?
t: Anna | Nein, ich wohne in Berlin. | Không, mình sống ở Berlin.
ans: Wohnst du in Berlin? | Ja, ich wohne in Berlin. / Nein, ich wohne in … | ja/nein, wohne
w: Viết 3 câu hỏi để làm quen một người bạn (ít nhất 1 câu Có/Không). | Wie heißt du? Woher kommst du? Wohnst du in Berlin? | wie, woher

## 2.4 Giới thiệu người khác
goal: Giới thiệu một người: tên, quê, nghề.
nico: 19
i: Minh | Lena, das ist Anna. Sie kommt aus Österreich. | Lena, đây là Anna. Cô ấy đến từ Áo.
i: Lena | Hallo Anna! Freut mich. | Chào Anna! Rất vui được gặp.
i: Anna | Hallo! Freut mich auch. | Chào! Mình cũng rất vui.
i: Minh | Anna ist Lehrerin. | Anna là giáo viên.
iq: Anna đến từ đâu? | Áo | Đức | Việt Nam
iq: Anna làm nghề gì? | giáo viên | sinh viên | bác sĩ
iq: "Das ist Anna" dùng để làm gì? | giới thiệu một người | hỏi tên | chào tạm biệt
words: er; sie; das ist; Freund; Freundin; Lehrer; Lehrerin; Student; Studentin; nett; Freut mich.
+w: n | die | Studentin | die Studentinnen | sinh viên (nữ) | Mai ist [Studentin]. | Mai là sinh viên.
+w: pron | - | er | | anh ấy, ông ấy | Das ist Tom. [Er] kommt aus Zürich. | Đây là Tom. Anh ấy đến từ Zürich.
+w: pron | - | sie | | cô ấy, bà ấy | Das ist Anna. [Sie] ist Lehrerin. | Đây là Anna. Cô ấy là giáo viên.
+w: phr | - | das ist | | đây là, đó là | [Das ist] mein Freund Tom. | Đây là bạn tôi, Tom.
+w: adj | - | nett | | dễ mến, tốt bụng | Frau Schmidt ist sehr [nett]. | Cô Schmidt rất dễ mến.
g: <b>er</b> (anh ấy) và <b>sie</b> (cô ấy): động từ thêm đuôi <b>-t</b>: er komm<b>t</b>, sie wohn<b>t</b>, er heiß<b>t</b>, sie sprich<b>t</b>. Động từ sein: er/sie <b>ist</b>.
gt: | ich | du | er/sie | Sie
gt: kommen | komme | kommst | kommt | kommen
gt: wohnen | wohne | wohnst | wohnt | wohnen
gt: sein | bin | bist | ist | sind
g: <b>Nghề nghiệp không dùng mạo từ:</b> Sie ist Lehrerin. Er ist Student. Nữ thường thêm <b>-in</b>: Lehrer → Lehrerin, Student → Studentin, Freund → Freundin.
g: <b>Lỗi hay gặp:</b> "Sie kommst" (đúng: sie kommt). Nhầm <b>sie</b> (cô ấy, viết thường) với <b>Sie</b> (ông/bà, viết hoa).
gx: fill: Das ist Tom. Er ___ aus der Schweiz. | kommt | (kommen)
gx: fill: Das ist Anna. Sie ___ in Berlin. | wohnt | (wohnen)
gx: fill: Lukas ___ Student. | ist | (sein)
gx: fill: Lena ___ Deutsch und Englisch. | spricht | (sprechen)
gx: fmc: Anna ist ___. | Lehrerin | Lehrer | eine Lehrerin
gx: fmc: Tom ist mein ___. (bạn nam) | Freund | Freundin | Lehrerin
x: ty: Chuyển sang er/sie | Ich komme aus Vietnam. (Minh → er) | Er kommt aus Vietnam.
x: ty: Chuyển sang er/sie | Ich wohne in Berlin. (Lena → sie) | Sie wohnt in Berlin.
x: ty: Chuyển sang er/sie | Ich heiße Tom. (Tom → er) | Er heißt Tom.
x: ty: Chuyển sang er/sie | Ich bin Studentin. (Mai → sie) | Sie ist Studentin.
x: ty: Chuyển sang er/sie | Ich spreche Englisch. (Lukas → er) | Er spricht Englisch.
x: ty: Chuyển sang er/sie | Ich bin nett. (Anna → sie) | Sie ist nett.
x: fill: Hồ sơ: Tom · Schweiz · Student · Zürich → Tom ___ aus der Schweiz. | kommt
x: fill: Hồ sơ: Tom · Schweiz · Student · Zürich → Er ___ in Zürich. | wohnt
x: fill: Hồ sơ: Tom · Schweiz · Student · Zürich → Er ist ___. | Student
x: fill: Hồ sơ: Mai · Vietnam · Lehrerin · Köln → Mai ist ___. | Lehrerin
x: fill: Hồ sơ: Mai · Vietnam · Lehrerin · Köln → Sie ___ in Köln. | wohnt
x: tr: Đây là Lena. Cô ấy đến từ Đức. | Das ist Lena. Sie kommt aus Deutschland.
x: tr: Anh ấy là sinh viên. | Er ist Student.
x: tr: Rất vui được gặp. | Freut mich.
lt: Bạn của Tom
l: Lena | Wer ist das? | Đó là ai?
l: Tom | Das ist mein Freund Lukas. Er ist Student. | Đó là bạn mình, Lukas. Cậu ấy là sinh viên.
l: Lena | Woher kommt er? | Cậu ấy đến từ đâu?
l: Tom | Er kommt aus Deutschland, aber er wohnt in Wien. | Cậu ấy đến từ Đức, nhưng sống ở Wien.
lq: Lukas là ai? | bạn của Tom | thầy giáo | anh trai Lena
lq: Lukas làm gì? | sinh viên | giáo viên | bác sĩ
lq: Lukas sống ở đâu? | Wien | Đức | Berlin
ld: Er ist Student.
rt: Cô giáo của chúng tôi
r: | Das ist Frau Schmidt. Sie kommt aus Hamburg. Sie wohnt in Berlin. Sie ist Lehrerin. Sie spricht Deutsch, Englisch und Französisch. Sie ist sehr nett. | Đây là cô Schmidt. Cô đến từ Hamburg. Cô sống ở Berlin. Cô là giáo viên. Cô nói tiếng Đức, tiếng Anh và tiếng Pháp. Cô rất dễ mến.
rq: Cô Schmidt sống ở Hamburg. | F
rq: Cô Schmidt là giáo viên. | R
rq: Cô Schmidt nói ba thứ tiếng. | R
t: Minh | Lena, das ist Anna. | Lena, đây là Anna.
t: Lena | Hallo Anna! Freut mich. | Chào Anna! Rất vui được gặp.
t: Minh | Anna kommt aus Österreich. Sie wohnt in Berlin. | Anna đến từ Áo. Cô ấy sống ở Berlin.
t: Lena | Spricht sie Englisch? | Cô ấy nói tiếng Anh không?
t: Minh | Ja. Sie ist Lehrerin. Sie ist sehr nett. | Có. Cô ấy là giáo viên. Cô ấy rất dễ mến.
w: Viết 3 câu giới thiệu một người bạn: tên, quê, nghề. | Das ist Tom. Er kommt aus der Schweiz. Er ist Student. | das ist, kommt/wohnt, ist

## 2.5 Ôn tuần 2
kind: review
goal: Tự giới thiệu 6 câu và giới thiệu một người bạn 3 câu, không nhìn chữ.
nico: 5,6,7
t: Minh | Hallo! Ich heiße Minh. | Xin chào! Tôi tên Minh.
t: Minh | Ich komme aus Vietnam, aus Hanoi. | Tôi đến từ Việt Nam, từ Hà Nội.
t: Minh | Ich wohne in Berlin. | Tôi sống ở Berlin.
t: Minh | Ich spreche Vietnamesisch, Englisch und ein bisschen Deutsch. | Tôi nói tiếng Việt, tiếng Anh và một chút tiếng Đức.
t: Minh | Ich bin Student. | Tôi là sinh viên.
t: Minh | Das ist Lena. Sie kommt aus Hamburg. Sie ist Lehrerin. | Đây là Lena. Cô ấy đến từ Hamburg. Cô ấy là giáo viên.
w: Viết hồ sơ cá nhân 5 câu: tên, quê, nơi ở, ngôn ngữ, nghề. | Ich heiße Minh. Ich komme aus Vietnam. Ich wohne in Berlin. Ich spreche Vietnamesisch und ein bisschen Deutsch. Ich bin Student. | heiße, komme, wohne, spreche, bin

## 3.1 Số 13–100
goal: Đọc mọi số đến 100 và làm phép tính đơn giản.
nico: 9
i: Lena | Wie viel ist dreizehn plus zwanzig? | Mười ba cộng hai mươi là bao nhiêu?
i: Minh | Dreizehn plus zwanzig ist dreiunddreißig. | Mười ba cộng hai mươi là ba mươi ba.
i: Lena | Richtig! Und hundert minus eins? | Đúng! Còn một trăm trừ một?
i: Minh | Neunundneunzig! | Chín mươi chín!
iq: 13 + 20 = ? | 33 | 23 | 30
iq: 100 − 1 = ? | 99 | 90 | 101
iq: "plus" và "minus" là gì? | cộng và trừ | nhân và chia | lớn và nhỏ
words: dreizehn; sechzehn; siebzehn; zwanzig; einundzwanzig; dreißig; hundert; plus; minus; wie viel
+w: num | - | sechzehn | | mười sáu | Lena ist [sechzehn]. | Lena mười sáu tuổi.
+w: num | - | siebzehn | | mười bảy | Bus [siebzehn] kommt. | Xe buýt 17 đến rồi.
+w: num | - | einundzwanzig | | hai mươi mốt | Ich bin [einundzwanzig]. | Tôi 21 tuổi.
+w: num | - | dreißig | | ba mươi | Der Kurs hat [dreißig] Stunden. | Khoá học có 30 buổi.
+w: phr | - | plus | | cộng | Zwei [plus] zwei ist vier. | Hai cộng hai là bốn.
+w: phr | - | minus | | trừ | Zehn [minus] drei ist sieben. | Mười trừ ba là bảy.
+w: phr | - | wie viel | | bao nhiêu | [Wie viel] ist zwei plus drei? | Hai cộng ba là bao nhiêu?
g: <b>13–19:</b> số + zehn: dreizehn, vierzehn, fünfzehn, achtzehn, neunzehn. Ngoại lệ: <b>sechzehn</b> (mất s), <b>siebzehn</b> (mất en).
g: <b>Số chục:</b> zwanzig, <b>dreißig</b> (viết ß), vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig, hundert.
g: <b>21–99 đọc hàng đơn vị trước</b>: đơn vị + und + chục, viết liền một chữ.
gt: Số | Đọc | Nghĩa đen
gt: 21 | einundzwanzig | một và hai mươi
gt: 24 | vierundzwanzig | bốn và hai mươi
gt: 37 | siebenunddreißig | bảy và ba mươi
gt: 99 | neunundneunzig | chín và chín mươi
g: <b>Lỗi hay gặp:</b> nói "zwanzigvier" theo kiểu tiếng Việt; nghe 42 (zweiundvierzig) mà viết 24.
gx: nw: 13-19
gx: nw: 20-90
gx: nw: 21-99
gx: nw: 21-99
gx: nl: 21-99
gx: nl: 21-99
x: nmc: 13-99
x: nmc: 13-99
x: nmc: 13-99
x: nmc: 21-99
x: nmc: 21-99
x: nmc: 21-99
x: nw: 13-99
x: nw: 13-99
x: nw: 21-99
x: nw: 21-99
x: nw: 21-99
x: calc: 12+8
x: calc: 13+20
x: calc: 50-7
x: calc: 100-1
lt: Chơi lô tô
l: Frau Schmidt | Wir spielen Bingo! Die Zahlen sind: siebzehn, zweiundvierzig, achtundsechzig. | Chúng ta chơi lô tô! Các số là: mười bảy, bốn mươi hai, sáu mươi tám.
l: Minh | Siebzehn, zweiundvierzig … und? | Mười bảy, bốn mươi hai… và?
l: Frau Schmidt | Achtundsechzig. Und jetzt: neunzig! | Sáu mươi tám. Và bây giờ: chín mươi!
l: Minh | Bingo! | Lô tô!
lq: Số đầu tiên là? | 17 | 70 | 7
lq: Số thứ hai là? | 42 | 24 | 52
lq: Số cuối cùng là? | 90 | 19 | 80
ld: Die Zahlen sind siebzehn und neunzig.
rt: Thông báo khoá học
r: | Deutschkurs A1 | Khoá tiếng Đức A1
r: | Raum: 23 | Phòng: 23
r: | Personen: 16 | Số người: 16
r: | Preis: 99 Euro | Giá: 99 euro
rq: Lớp học ở phòng 32. | F
rq: Lớp có 16 người. | R
rq: Khoá học giá 99 euro. | R
t: Lena | Wie viel ist zwölf plus acht? | Mười hai cộng tám là bao nhiêu?
t: Minh | Zwölf plus acht ist zwanzig. | Mười hai cộng tám là hai mươi.
t: Lena | Und fünfzig minus sieben? | Còn năm mươi trừ bảy?
t: Minh | Fünfzig minus sieben ist dreiundvierzig. | Năm mươi trừ bảy là bốn mươi ba.
w: Viết bằng chữ: 17, 36, 99. | siebzehn, sechsunddreißig, neunundneunzig | siebzehn, sechsunddreißig, neunundneunzig

## 3.2 Tuổi & động từ sein
goal: Hỏi và nói tuổi; chia sein đủ 6 ngôi.
i: Tom | Wie alt bist du, Minh? | Minh bao nhiêu tuổi?
i: Minh | Ich bin fünfundzwanzig Jahre alt. Und du? | Mình 25 tuổi. Còn bạn?
i: Tom | Ich bin dreißig. Meine Schwester ist neunzehn. | Mình 30. Em gái mình 19.
iq: Minh bao nhiêu tuổi? | 25 | 52 | 35
iq: Tom bao nhiêu tuổi? | 30 | 13 | 33
iq: Em gái Tom bao nhiêu tuổi? | 19 | 9 | 90
words: alt; jung; Jahr; Wie alt bist du?; sein; wir; ihr; sie (họ)
+w: phr | - | Wie alt bist du? | | Bạn bao nhiêu tuổi? | [Wie alt bist du]? – Ich bin 25. | Bạn bao nhiêu tuổi? – Tôi 25.
+w: v | - | sein | | là; thì, ở | Ich [bin] Student. | Tôi là sinh viên.
+w: pron | - | wir | | chúng tôi, chúng ta | [Wir] sind Studenten. | Chúng tôi là sinh viên.
+w: pron | - | ihr | | các bạn | Wie alt seid [ihr]? | Các bạn bao nhiêu tuổi?
+w: pron | - | sie (họ) | | họ | Lena und Tom? [Sie] sind dreißig. | Lena và Tom à? Họ 30 tuổi.
g: <b>sein</b> (là) là động từ bất quy tắc quan trọng nhất — học thuộc cả bảng:
gt: ich bin | du bist | er/sie/es ist
gt: wir sind | ihr seid | sie/Sie sind
g: <b>Hỏi tuổi:</b> Wie alt bist du? / Wie alt sind Sie? → Ich bin 25 (Jahre alt).
g: <b>Lỗi hay gặp:</b> "Ich habe 25 Jahre" (dịch từ "tôi có 25 tuổi"). Tiếng Đức dùng <b>sein</b>: Ich <b>bin</b> 25.
gx: fill: Ich ___ 25 Jahre alt. | bin | (sein)
gx: fill: Wie alt ___ du? | bist | (sein)
gx: fill: Lena ___ neunzehn. | ist | (sein)
gx: fill: Wir ___ Studenten. | sind | (sein)
gx: fill: Wie alt ___ ihr? | seid | (sein)
gx: fill: Wie alt ___ Sie, Herr Weber? | sind | (sein)
x: fmc: Tom und Anna ___ dreißig. | sind | ist | seid
x: fmc: Du ___ sehr jung! | bist | bin | ist
x: fmc: Ich ___ achtzehn Jahre alt. | bin | habe | ist
x: fmc: Mein Opa ___ achtzig. | ist | sind | bist
x: fmc: Ihr ___ nett. | seid | sind | ist
x: fmc: ___ alt sind Sie? | Wie | Wer | Was
x: lmc: Ich bin zweiundvierzig Jahre alt. | 42 | 24 | 52
x: lmc: Er ist siebzehn. | 17 | 70 | 7
x: lmc: Sie ist dreiundsechzig. | 63 | 36 | 73
x: lmc: Wir sind neunzehn. | 19 | 90 | 9
x: lmc: Oma ist achtundachtzig. | 88 | 80 | 18
x: ty: Hỏi tuổi | bạn thân Tom (du) | Wie alt bist du?
x: ty: Hỏi tuổi | ông Weber (Sie) | Wie alt sind Sie?
x: ty: Hỏi tuổi | hai bạn nhỏ (ihr) | Wie alt seid ihr?
x: tr: Tôi 25 tuổi. | Ich bin 25. / Ich bin fünfundzwanzig. / Ich bin 25 Jahre alt. / Ich bin fünfundzwanzig Jahre alt.
lt: Ở lớp học
l: Frau Schmidt | Wie alt sind Sie, Frau Berger? | Chị Berger bao nhiêu tuổi?
l: Anna | Ich bin achtunddreißig. | Tôi 38 tuổi.
l: Frau Schmidt | Und Ihre Kinder? | Còn các con chị?
l: Anna | Sie sind elf und vierzehn. | Chúng 11 và 14 tuổi.
lq: Anna bao nhiêu tuổi? | 38 | 83 | 28
lq: Các con của Anna bao nhiêu tuổi? | 11 và 14 | 12 và 14 | 11 và 40
lq: "Sie sind elf" — "sie" ở đây là ai? | các con (họ) | cô ấy | bà (lịch sự)
ld: Wie alt sind Sie?
rt: Nhóm học
r: | Wir sind eine Lerngruppe. Minh ist fünfundzwanzig, Lena ist neunzehn und Tom ist dreißig. Wir sind Studenten. Und ihr? Wie alt seid ihr? | Chúng tôi là một nhóm học. Minh 25, Lena 19 và Tom 30. Chúng tôi là sinh viên. Còn các bạn? Các bạn bao nhiêu tuổi?
rq: Lena nhiều tuổi nhất. | F
rq: Minh 25 tuổi. | R
rq: Câu cuối hỏi tuổi của nhiều người. | R
t: Tom | Wie alt bist du? | Bạn bao nhiêu tuổi?
t: Minh | Ich bin fünfundzwanzig. Und du? | Mình 25. Còn bạn?
t: Tom | Ich bin dreißig. Wie alt ist Lena? | Mình 30. Lena bao nhiêu tuổi?
t: Minh | Sie ist neunzehn. Sie ist sehr jung. | Cô ấy 19. Cô ấy rất trẻ.
ans: Wie alt sind Sie? | Ich bin fünfundzwanzig Jahre alt. | bin
w: Viết 3 câu về tuổi của bạn và hai người khác. | Ich bin fünfundzwanzig. Lena ist neunzehn. Tom und Anna sind dreißig. | bin, ist, sind

## 3.3 Điện thoại, email & haben
goal: Đọc số điện thoại và email của mình.
nico: 10
i: Lena | Hast du ein Handy? | Bạn có điện thoại di động không?
i: Minh | Ja. Meine Handynummer ist null eins sieben sechs, drei vier fünf, zwo acht. | Có. Số di động của mình là 0176 345 28.
i: Lena | Und hast du eine E-Mail-Adresse? | Bạn có địa chỉ email không?
i: Minh | Ja: minh punkt nguyen at web punkt de. | Có: minh.nguyen@web.de
iq: Số điện thoại của Minh bắt đầu bằng? | 0176 | 0167 | 0716
iq: "zwo" là số mấy? | 2 | 3 | 12
iq: Email của Minh có đuôi gì? | web.de | gmail.com | web.com
words: Telefonnummer; Handynummer; E-Mail-Adresse; Punkt; Handy; haben; E-Mail
+w: n | die | Handynummer | die Handynummern | số điện thoại di động | Wie ist deine [Handynummer]? | Số di động của bạn là gì?
+w: n | die | E-Mail-Adresse | die E-Mail-Adressen | địa chỉ email | Meine [E-Mail-Adresse] ist lan@web.de. | Địa chỉ email của tôi là lan@web.de.
+w: n | der | Punkt | die Punkte | dấu chấm | lan [Punkt] tran at web [Punkt] de | lan.tran@web.de
+w: v | - | haben | | có | Ich [habe] ein Handy. | Tôi có một chiếc điện thoại di động.
g: <b>haben</b> (có) — chú ý du <b>hast</b>, er <b>hat</b> (mất chữ b):
gt: ich habe | du hast | er/sie hat
gt: wir haben | ihr habt | sie/Sie haben
g: <b>Đọc số điện thoại:</b> đọc từng số hoặc từng cặp; số 2 đọc <b>zwo</b> cho rõ. Trong email: @ = <b>at</b>, . = <b>Punkt</b>, - = <b>Bindestrich</b>.
g: <b>Lỗi hay gặp:</b> "du habst", "er habt" (đúng: du hast, er hat).
gx: fill: Ich ___ ein Handy. | habe | (haben)
gx: fill: ___ du eine E-Mail-Adresse? | Hast | (haben)
gx: fill: Lena ___ eine Handynummer. | hat | (haben)
gx: fill: Wir ___ ein Telefon. | haben | (haben)
gx: fill: ___ ihr ein Handy? | Habt | (haben)
gx: fill: ___ Sie eine Telefonnummer? | Haben | (haben)
x: ph: 0176 345 28
x: ph: 030 46 29 18
x: ph: 0151 47 82 39
x: ph: 089 71 22 05
x: ph: 0172 909 63
x: ph: 040 33 18 52
x: fmc: Er ___ ein Handy. | hat | habt | hast
x: fmc: Du ___ eine E-Mail-Adresse. | hast | hat | habe
x: fmc: Sie (ông/bà) ___ eine Telefonnummer. | haben | hat | habt
x: fmc: Ich ___ kein Handy. | habe | hat | hast
x: fmc: Ihr ___ ein Telefon. | habt | haben | hat
x: mc: Danh thiếp: <b>Klaus Weber · Handy: 0171 502398 · k.weber@web.de</b> — Họ của người này là? | Weber | Klaus | Web
x: mc: Danh thiếp: <b>Klaus Weber · Handy: 0171 502398 · k.weber@web.de</b> — Số Handy bắt đầu bằng? | 0171 | 0711 | 0117
x: mc: Danh thiếp: <b>Klaus Weber · Handy: 0171 502398 · k.weber@web.de</b> — Đọc email thế nào? | k Punkt weber at web Punkt de | k weber Punkt web at de | k at weber Punkt web de
x: mc: "@" trong email đọc là: | at | Punkt | Bindestrich
lt: Ở văn phòng
l: Herr Weber | Wie ist Ihre Telefonnummer, Frau Berger? | Số điện thoại của chị là gì, chị Berger?
l: Anna | Null drei null, vier sechs, zwo neun, eins acht. | 030 46 29 18.
l: Herr Weber | Und Ihre E-Mail-Adresse? | Còn địa chỉ email?
l: Anna | anna punkt berger at gmx punkt de. | anna.berger@gmx.de
lq: Số điện thoại bắt đầu bằng? | 030 | 033 | 003
lq: Số điện thoại kết thúc bằng? | 18 | 81 | 80
lq: Email của Anna là? | anna.berger@gmx.de | anna.berger@gmx.com | berger.anna@gmx.de
ld: Wie ist Ihre Telefonnummer?
rt: Danh thiếp
r: | Dr. Klaus Weber | Tiến sĩ Klaus Weber
r: | Telefon: 089 / 41 27 66 | Điện thoại: 089 / 41 27 66
r: | Handy: 0171 / 50 23 98 | Di động: 0171 / 50 23 98
r: | E-Mail: k.weber@web.de | Email: k.weber@web.de
rq: Ông Weber có điện thoại di động. | R
rq: Số Handy bắt đầu bằng 0171. | R
rq: Email của ông kết thúc bằng gmx.de. | F
t: Lena | Hast du ein Handy? | Bạn có điện thoại di động không?
t: Minh | Ja, ich habe ein Handy. | Có, mình có một chiếc.
t: Lena | Wie ist deine Handynummer? | Số di động của bạn là gì?
t: Minh | Null eins sieben sechs, drei vier fünf, zwo acht. | 0176 345 28.
t: Lena | Danke! | Cảm ơn!
w: Viết số điện thoại và email của bạn bằng chữ (vd: null eins sieben sechs …). | Meine Telefonnummer ist null eins sieben sechs, drei vier fünf, zwo acht. Meine E-Mail-Adresse ist minh punkt nguyen at web punkt de. | Telefonnummer/Handynummer, E-Mail

## 3.4 Địa chỉ & tờ khai
goal: Nói địa chỉ và điền tờ khai cá nhân.
nico: 11,12
i: Herr Weber | Wie ist Ihre Adresse? | Địa chỉ của anh là gì?
i: Minh | Ich wohne in der Bergstraße zwölf. | Tôi sống ở số 12 phố Bergstraße.
i: Herr Weber | Und die Postleitzahl? | Còn mã bưu chính?
i: Minh | Eins null eins eins fünf, Berlin. | 10115 Berlin.
iq: Minh sống ở phố nào? | Bergstraße | Berlinstraße | Bachstraße
iq: Số nhà của Minh là? | 12 | 20 | 2
iq: Mã bưu chính là? | 10115 | 11015 | 10150
words: Adresse; Straße; Hausnummer; Postleitzahl; Wohnort; Vorname; Nachname; Formular; ausfüllen; tausend
+w: n | die | Straße | die Straßen | đường phố | Ich wohne in der [Straße] Unter den Linden. | Tôi sống ở phố Unter den Linden.
+w: n | der | Nachname | die Nachnamen | họ | Mein [Nachname] ist Nguyen. | Họ của tôi là Nguyễn.
+w: n | das | Formular | die Formulare | tờ khai, mẫu đơn | Bitte füllen Sie das [Formular] aus. | Vui lòng điền tờ khai.
+w: v | - | ausfüllen | | điền (tờ khai) | Ich [fülle] das Formular [aus]. | Tôi điền tờ khai.
+w: num | - | tausend | | một nghìn | Das kostet [tausend] Euro. | Cái đó giá một nghìn euro.
g: <b>Hỏi lịch sự:</b> Wie ist <b>Ihr</b> Name? (der Name) · Wie ist <b>Ihre</b> Adresse? (die Adresse). Danh từ giống cái (die) → <b>Ihre</b>.
gt: Ô trong tờ khai | Câu hỏi
gt: der Vorname / der Nachname | Wie ist Ihr Vorname / Nachname?
gt: die Adresse / die Telefonnummer | Wie ist Ihre Adresse / Telefonnummer?
gt: der Wohnort | Wo wohnen Sie?
g: <b>Địa chỉ Đức:</b> tên phố trước, số nhà sau, rồi mã bưu chính và thành phố: <b>Bergstraße 12, 10115 Berlin</b>. Trong câu: Ich wohne in der Bergstraße 12.
g: <b>Số đến 1000:</b> hundert, zweihundert … tausend. 345 = <b>dreihundertfünfundvierzig</b> (trăm + đơn vị + und + chục, viết liền).
g: <b>Lỗi hay gặp:</b> viết số nhà trước tên phố như tiếng Việt ("12 Bergstraße").
gx: fmc: Wie ist ___ Adresse? | Ihre | Ihr | Sie
gx: fmc: Wie ist ___ Vorname? | Ihr | Ihre | Sie
gx: fmc: Wie ist ___ Telefonnummer? | Ihre | Ihr | Sie
gx: fmc: Wie ist ___ Nachname? | Ihr | Ihre | Sie
gx: nw: 100-999
gx: nl: 100-999
x: lty: Mein Vorname ist Hoa. | Hoa | Nghe rồi điền ô "Vorname"
x: lty: Mein Nachname ist Tran. T – R – A – N. | Tran | Nghe rồi điền ô "Nachname"
x: lty: Ich wohne in der Gartenstraße acht. | Gartenstraße 8 / Gartenstraße acht | Nghe rồi điền ô "Straße, Hausnummer"
x: lty: Die Postleitzahl ist zwei null null neun fünf. | 20095 | Nghe rồi điền ô "PLZ" (bằng số)
x: lty: Ich wohne in Hamburg. | Hamburg | Nghe rồi điền ô "Wohnort"
x: lty: Ich bin zweiunddreißig Jahre alt. | 32 | Nghe rồi điền ô "Alter" (bằng số)
x: mc: Ô "Vorname" là gì? | tên | họ | nơi ở
x: mc: Ô "Nachname" là gì? | họ | tên | tuổi
x: mc: Ô "Wohnort" là gì? | nơi ở (thành phố) | số nhà | quê quán
x: mc: Ô "PLZ (Postleitzahl)" là gì? | mã bưu chính | số điện thoại | số nhà
x: mc: Ô "Hausnummer" là gì? | số nhà | số điện thoại | mã bưu chính
x: say: Ich wohne in der Bergstraße zwölf. | Tôi sống ở số 12 phố Bergstraße.
x: say: Die Postleitzahl ist eins null eins eins fünf. | Mã bưu chính là 10115.
x: say: Gartenstraße acht, Hamburg. | Số 8 phố Gartenstraße, Hamburg.
x: nw: 100-999
lt: Đăng ký ở văn phòng
l: Sekretärin | Ihr Familienname, bitte? | Xin cho biết họ của chị?
l: Anna | Berger. B – E – R – G – E – R. | Berger. B – E – R – G – E – R.
l: Sekretärin | Und Ihr Vorname? | Còn tên?
l: Anna | Anna. | Anna.
l: Sekretärin | Ihre Adresse? | Địa chỉ của chị?
l: Anna | Lindenstraße siebenundvierzig, acht null drei drei eins München. | Số 47 phố Lindenstraße, 80331 München.
lq: Họ của người phụ nữ là gì? | Berger | Weber | Bergner
lq: Chị ấy sống ở số nhà mấy? | 47 | 74 | 17
lq: Chị ấy sống ở thành phố nào? | München | Berlin | Hamburg
ld: Wie ist Ihre Adresse?
rt: Tờ khai đăng ký
r: | Familienname: Tran | Họ: Trần
r: | Vorname: Hoa | Tên: Hoa
r: | Straße, Hausnummer: Gartenstraße 8 | Phố, số nhà: Gartenstraße 8
r: | PLZ, Wohnort: 20095 Hamburg | Mã bưu chính, nơi ở: 20095 Hamburg
r: | Telefon: 040 33 18 52 | Điện thoại: 040 33 18 52
rq: Tên của người này là Tran. | F
rq: Người này sống ở Hamburg. | R
rq: Số nhà là 8. | R
t: Herr Weber | Wie ist Ihr Name? | Anh tên gì?
t: Minh | Minh Nguyen. | Minh Nguyễn.
t: Herr Weber | Wie ist Ihre Adresse? | Địa chỉ của anh là gì?
t: Minh | Ich wohne in der Bergstraße zwölf, in Berlin. | Tôi sống ở số 12 phố Bergstraße, ở Berlin.
t: Herr Weber | Und Ihre Telefonnummer? | Còn số điện thoại?
t: Minh | Null eins sieben sechs, drei vier fünf, zwo acht. | 0176 345 28.
w: Điền tờ khai của bạn: Vorname, Nachname, Adresse (mỗi ô một dòng). | Vorname: Minh. Nachname: Nguyen. Adresse: Bergstraße 12, 10115 Berlin. | Vorname, Nachname, Adresse/Straße

## 3.5 Ôn tuần 3
kind: review
goal: Đóng vai ở quầy đăng ký: hỏi và trả lời tên, tuổi, địa chỉ, số điện thoại.
nico: 9,10,11,12
x: nmc: 13-99
x: nmc: 13-99
x: nl: 21-99
x: nl: 100-999
x: ph: 0176 345 28
x: ph: 030 46 29 18
x: lmc: Ich bin zweiundvierzig Jahre alt. | 42 | 24 | 52
x: calc: 50-7
t: Sekretärin | Guten Tag! Wie heißen Sie? | Chào anh! Anh tên gì?
t: Minh | Ich heiße Minh Nguyen. | Tôi tên Minh Nguyễn.
t: Sekretärin | Wie alt sind Sie? | Anh bao nhiêu tuổi?
t: Minh | Ich bin fünfundzwanzig Jahre alt. | Tôi 25 tuổi.
t: Sekretärin | Wie ist Ihre Adresse? | Địa chỉ của anh là gì?
t: Minh | Bergstraße zwölf, eins null eins eins fünf Berlin. | Số 12 phố Bergstraße, 10115 Berlin.
t: Sekretärin | Und Ihre Telefonnummer? | Còn số điện thoại?
t: Minh | Null eins sieben sechs, drei vier fünf, zwo acht. | 0176 345 28.
w: Điền tờ khai 8 ô về bạn: Vorname, Nachname, Alter, Straße, PLZ, Wohnort, Telefon, E-Mail. | Vorname: Minh · Nachname: Nguyen · Alter: 25 · Straße: Bergstraße 12 · PLZ: 10115 · Wohnort: Berlin · Telefon: 0176 34528 · E-Mail: minh.nguyen@web.de | Vorname, Nachname, Alter, Straße, PLZ, Wohnort, Telefon, E-Mail

## 4.1 Thành viên gia đình
goal: Nói mình có anh chị em không, đã kết hôn chưa.
nico: 61
i: Lena | Hast du Geschwister, Minh? | Minh có anh chị em không?
i: Minh | Ja, ich habe einen Bruder und eine Schwester. | Có, mình có một anh trai và một em gái.
i: Lena | Bist du verheiratet? | Bạn đã kết hôn chưa?
i: Minh | Nein, ich bin ledig. | Chưa, mình độc thân.
iq: Minh có mấy anh chị em? | 2 | 1 | 3
iq: Minh đã kết hôn chưa? | chưa, độc thân | rồi | không rõ
iq: "Geschwister" nghĩa là gì? | anh chị em | bố mẹ | con cái
words: Familie; Mutter; Vater; Eltern; Bruder; Schwester; Geschwister; Sohn; Tochter; Kind; verheiratet; ledig
g: <b>Ich habe + einen / eine / ein:</b> danh từ giống đực đổi ein → <b>einen</b> sau haben: Ich habe <b>einen</b> Bruder, <b>eine</b> Schwester, <b>ein</b> Kind. (Tuần 5 học kỹ cách 4.)
gt: der Bruder | die Schwester | das Kind | số nhiều
gt: einen Bruder | eine Schwester | ein Kind | zwei Brüder
g: <b>Từ đi theo cặp:</b> Vater – Mutter, Sohn – Tochter, Bruder – Schwester. <b>Eltern</b> (bố mẹ) và <b>Geschwister</b> (anh chị em) chỉ dùng số nhiều.
g: <b>Lỗi hay gặp:</b> "Ich habe ein Bruder" (đúng: einen Bruder).
gx: fmc: Ich habe ___ Bruder. | einen | ein | eine
gx: fmc: Ich habe ___ Schwester. | eine | einen | ein
gx: fmc: Wir haben ___ Kind. | ein | eine | einen
gx: fmc: Hast du ___? (anh chị em) | Geschwister | Geschwist | Schwester
gx: fmc: Meine ___ wohnen in Hanoi. (bố mẹ) | Eltern | Elter | Vater
gx: fmc: Er hat ___ Sohn und ___ Tochter. | einen … eine | ein … ein | eine … einen
x: lmc: Das ist mein Vater. | 👨 bố | 👩 mẹ | 👦 con trai
x: lmc: Das ist meine Mutter. | 👩 mẹ | 👧 con gái | 👵 bà
x: lmc: Das ist mein Sohn. | 👦 con trai | 👨 bố | 👧 con gái
x: lmc: Das ist meine Tochter. | 👧 con gái | 👩 mẹ | 👦 con trai
x: lmc: Das sind meine Eltern. | 👨‍👩 bố mẹ | 👦👧 anh chị em | 👴👵 ông bà
x: lmc: Das sind meine Geschwister. | 👦👧 anh chị em | 👨‍👩 bố mẹ | 👶 em bé
x: mc: Vater ↔ ? | Mutter | Tochter | Schwester
x: mc: Sohn ↔ ? | Tochter | Mutter | Kind
x: mc: Bruder ↔ ? | Schwester | Tochter | Eltern
x: mc: verheiratet ↔ ? | ledig | alt | nett
x: mc: Bruder + Schwester = ? | Geschwister | Eltern | Kinder
x: fill: Der Vater und die Mutter sind die ___. | Eltern
x: fill: Der Sohn und die Tochter sind die ___. | Kinder
x: fill: Mein Bruder und meine Schwester sind meine ___. | Geschwister
x: fill: Ich habe einen Mann. Ich bin ___. | verheiratet
lt: Ảnh gia đình của Anna
l: Anna | Das ist meine Familie. Das ist mein Mann Lukas. | Đây là gia đình tôi. Đây là chồng tôi, Lukas.
l: Tom | Und die Kinder? | Còn các con?
l: Anna | Das ist mein Sohn Max, er ist elf. Und das ist meine Tochter Mia, sie ist vierzehn. | Đây là con trai tôi Max, 11 tuổi. Còn đây là con gái tôi Mia, 14 tuổi.
l: Tom | Schön! | Đẹp quá!
lq: Chồng Anna tên gì? | Lukas | Max | Tom
lq: Con trai Anna bao nhiêu tuổi? | 11 | 14 | 4
lq: Anna có mấy con? | 2 | 1 | 3
ld: Das ist meine Familie.
rt: Gia đình của Hoa
r: | Ich heiße Hoa. Ich bin verheiratet. Mein Mann heißt Nam. Wir haben zwei Kinder: einen Sohn und eine Tochter. Meine Eltern wohnen in Hanoi. | Tôi tên Hoa. Tôi đã kết hôn. Chồng tôi tên Nam. Chúng tôi có hai con: một trai một gái. Bố mẹ tôi sống ở Hà Nội.
rq: Hoa độc thân. | F
rq: Hoa có một con trai và một con gái. | R
rq: Bố mẹ Hoa sống ở Hà Nội. | R
t: Lena | Hast du Geschwister? | Bạn có anh chị em không?
t: Minh | Ja, ich habe einen Bruder und eine Schwester. | Có, mình có một anh trai và một em gái.
t: Lena | Bist du verheiratet? | Bạn đã kết hôn chưa?
t: Minh | Nein, ich bin ledig. Und du? | Chưa, mình độc thân. Còn bạn?
t: Lena | Ich bin verheiratet. Ich habe ein Kind. | Mình đã kết hôn. Mình có một con.
ans: Haben Sie Geschwister? | Ja, ich habe einen Bruder und eine Schwester. | habe
w: Viết 3 câu về gia đình bạn. | Ich habe einen Bruder. Meine Eltern wohnen in Hanoi. Ich bin ledig. | habe

## 4.2 der, die, das – ein, eine
goal: Dùng đúng der/die/das và ein/eine khi nói về người trong ảnh.
i: Minh | Das ist ein Foto von meiner Familie. | Đây là một tấm ảnh gia đình mình.
i: Lena | Wer ist der Mann? | Người đàn ông là ai?
i: Minh | Das ist der Opa. Und die Frau ist die Oma. | Đó là ông. Còn người phụ nữ là bà.
i: Lena | Und das Baby? | Còn em bé?
i: Minh | Das ist das Baby von meiner Tante. | Đó là em bé của cô mình.
iq: Minh cho Lena xem gì? | ảnh gia đình | điện thoại | tờ khai
iq: Người đàn ông trong ảnh là ai? | ông | bố | chú
iq: Em bé là con của ai? | cô của Minh | Minh | bà
words: Großmutter; Großvater; Oma; Opa; Onkel; Tante; Baby; Foto
+w: n | das | Foto | die Fotos | tấm ảnh | Das ist ein [Foto] von meiner Familie. | Đây là một tấm ảnh gia đình tôi.
g: Danh từ tiếng Đức có <b>3 giống</b>. Số nhiều luôn dùng <b>die</b>.
gt: | giống đực | giống cái | giống trung | số nhiều
gt: xác định | der Opa | die Oma | das Baby | die Babys
gt: không xác định | ein Opa | eine Oma | ein Baby | (Babys)
g: Dùng <b>ein/eine</b> khi nhắc đến lần đầu, <b>der/die/das</b> khi đã biết là cái nào: Das ist <b>ein</b> Foto. <b>Das</b> Foto ist schön.
g: <b>Mẹo nhớ giống:</b> người nam thường der, người nữ thường die; đuôi <b>-e</b> thường là die (die Tante); đuôi <b>-chen</b> luôn là das (das Mädchen). Luôn học danh từ <b>kèm mạo từ</b>.
g: <b>Lỗi hay gặp:</b> đoán giống theo nghĩa: <b>das</b> Mädchen (cô bé) là giống trung dù chỉ con gái.
gx: art: Opa | der
gx: art: Oma | die
gx: art: Baby | das
gx: art: Mädchen | das
gx: art: Onkel | der
gx: art: Tante | die
gx: art: Foto | das
gx: art: Familie | die
x: art: Kind | das
x: art: Vater | der
x: art: Mutter | die
x: art: Großvater | der
x: art: Schwester | die
x: art: Handy | das
x: fmc: der Onkel → ___ Onkel | ein | eine | einen
x: fmc: die Tante → ___ Tante | eine | ein | einen
x: fmc: das Foto → ___ Foto | ein | eine | einen
x: fmc: Das ist ___ Foto. ___ Foto ist schön. | ein … Das | das … Ein | eine … Die
x: fmc: Das ist ___ Baby. ___ Baby heißt Emma. | ein … Das | eine … Die | ein … Der
x: lmc: die Tante | die | der | das
x: lmc: der Opa | der | die | das
x: lmc: das Mädchen | das | die | der
x: lmc: das Baby | das | der | die
lt: Ảnh của Anna
l: Tom | Ist das ein Foto von deiner Familie? | Đây là ảnh gia đình cậu à?
l: Anna | Ja. Das ist der Onkel, und das ist die Tante. | Ừ. Đây là chú, còn đây là cô.
l: Tom | Und das Mädchen? | Còn cô bé?
l: Anna | Das ist meine Tochter Mia. | Đó là con gái mình, Mia.
lq: Đó là ảnh gì? | ảnh gia đình Anna | ảnh lớp học | ảnh thành phố
lq: Cô bé là ai? | con gái Anna | cô của Anna | em gái Tom
lq: Mạo từ của "Mädchen" là? | das | die | der
ld: Das ist der Onkel.
rt: Một tấm ảnh
r: | Das ist ein Foto. Auf dem Foto sind der Opa, die Oma und ein Baby. Das Baby heißt Emma. Der Opa ist achtzig, die Oma ist sechsundsiebzig. | Đây là một tấm ảnh. Trong ảnh có ông, bà và một em bé. Em bé tên Emma. Ông 80 tuổi, bà 76 tuổi.
rq: Em bé tên là Emma. | R
rq: Ông 76 tuổi. | F
rq: Trong ảnh có ông, bà và một em bé. | R
t: Lena | Ist das ein Foto? | Đây là một tấm ảnh à?
t: Minh | Ja, das ist ein Foto von meiner Familie. | Ừ, đây là ảnh gia đình mình.
t: Lena | Wer ist der Mann? | Người đàn ông là ai?
t: Minh | Das ist der Opa. Er ist achtzig. | Đó là ông. Ông 80 tuổi.
t: Lena | Und die Frau? | Còn người phụ nữ?
t: Minh | Das ist die Oma. | Đó là bà.
w: Viết 3 câu tả một tấm ảnh gia đình (dùng ein/eine và der/die/das). | Das ist ein Foto. Das ist der Opa und das ist die Oma. Das Baby heißt Emma. | das ist, ein

## 4.3 kein và nicht
goal: Phủ định đúng: kein với danh từ, nicht với động từ và tính từ.
nico: 23
i: Tom | Hast du Kinder, Minh? | Minh có con chưa?
i: Minh | Nein, ich habe keine Kinder. Ich bin nicht verheiratet. | Chưa, mình không có con. Mình chưa kết hôn.
i: Tom | Hast du ein Haustier? | Bạn có nuôi thú cưng không?
i: Minh | Ja, ich habe eine Katze. Ich wohne nicht allein! | Có, mình có một con mèo. Mình không sống một mình!
iq: Minh có con không? | không | có 1 con | có 2 con
iq: Minh nuôi con gì? | mèo | chó | không nuôi
iq: "nicht allein" nghĩa là gì? | không một mình | một mình | cùng nhau
words: kein; keine; nicht; allein; zusammen; Haustier; Hund; Katze
+w: art | - | kein | | không (một) … nào (với der/das) | Das ist [kein] Hund. | Đó không phải là con chó.
+w: art | - | keine | | không … nào (với die, số nhiều) | Ich habe [keine] Kinder. | Tôi không có con.
+w: adv | - | allein | | một mình | Ich wohne [allein]. | Tôi sống một mình.
+w: adv | - | zusammen | | cùng nhau | Wir wohnen [zusammen]. | Chúng tôi sống cùng nhau.
+w: n | das | Haustier | die Haustiere | thú cưng | Hast du ein [Haustier]? | Bạn có nuôi thú cưng không?
g: <b>kein / keine</b> phủ định <b>danh từ</b> (thay cho ein/eine, hoặc danh từ không có mạo từ):
gt: Khẳng định | Phủ định
gt: Das ist ein Hund. | Das ist kein Hund.
gt: Das ist eine Katze. | Das ist keine Katze.
gt: Ich habe Kinder. | Ich habe keine Kinder.
g: <b>nicht</b> phủ định <b>động từ, tính từ, tên riêng</b>: Ich wohne <b>nicht</b> allein. Er ist <b>nicht</b> verheiratet. Das ist <b>nicht</b> Tom.
g: Sau haben, giống đực dùng <b>keinen</b>: Ich habe keinen Bruder (giống "einen Bruder").
g: <b>Lỗi hay gặp:</b> "Ich habe nicht Kinder" (đúng: keine Kinder), "Ich bin kein verheiratet" (đúng: nicht verheiratet).
gx: fmc: Das ist ___ Hund. | kein | keine | nicht
gx: fmc: Das ist ___ Katze. | keine | kein | nicht
gx: fmc: Ich habe ___ Kinder. | keine | kein | nicht
gx: fmc: Er ist ___ verheiratet. | nicht | kein | keine
gx: fmc: Ich wohne ___ allein. | nicht | kein | keine
gx: fmc: Das ist ___ Tom, das ist Lukas. | nicht | kein | keine
x: fmc: Wir haben ___ Haustier. | kein | keine | nicht
x: fmc: Sie spricht ___ Englisch. | kein | nicht | keine
x: fmc: Lena ist ___ alt, sie ist jung. | nicht | kein | keine
x: fmc: Ich habe ___ Geschwister. | keine | kein | nicht
x: fmc: Tom wohnt ___ in Berlin. | nicht | kein | keine
x: fmc: Das ist ___ Foto, das ist ein Handy. | kein | keine | nicht
x: ty: Trả lời phủ định | Ist das ein Hund? – Nein, das ist … | kein Hund / das ist kein Hund / nein, das ist kein Hund
x: ty: Trả lời phủ định | Hast du Kinder? – Nein, ich habe … | keine Kinder / ich habe keine Kinder / nein, ich habe keine Kinder
x: ty: Trả lời phủ định | Bist du verheiratet? – Nein, ich bin … | nicht verheiratet / ich bin nicht verheiratet / nein, ich bin nicht verheiratet
x: ty: Trả lời phủ định | Wohnst du allein? – Nein, ich wohne … | nicht allein / ich wohne nicht allein / nein, ich wohne nicht allein
x: ty: Trả lời phủ định | Ist das eine Katze? – Nein, das ist … | keine Katze / das ist keine Katze / nein, das ist keine Katze
x: mc: Câu nào đúng? | Ich habe keine Kinder. | Ich habe nicht Kinder. | Ich habe kein Kinder.
x: mc: Câu nào đúng? | Er ist nicht verheiratet. | Er ist kein verheiratet. | Er ist keine verheiratet.
x: mc: Câu nào đúng? | Das ist keine Katze. | Das ist kein Katze. | Das ist nicht Katze.
x: mc: Câu nào đúng? | Wir wohnen nicht zusammen. | Wir wohnen kein zusammen. | Wir nicht wohnen zusammen.
lt: Sống cùng ai?
l: Lena | Wohnst du allein, Tom? | Tom sống một mình à?
l: Tom | Nein, ich wohne nicht allein. Ich wohne zusammen mit Lukas. | Không, mình không sống một mình. Mình sống cùng Lukas.
l: Lena | Habt ihr ein Haustier? | Các cậu có nuôi thú cưng không?
l: Tom | Nein, wir haben kein Haustier. Lukas mag keine Katzen. | Không, bọn mình không nuôi. Lukas không thích mèo.
lq: Tom sống một mình phải không? | không, sống với Lukas | đúng | sống với Lena
lq: Họ có nuôi thú cưng không? | không | có mèo | có chó
lq: Lukas không thích gì? | mèo | chó | trẻ con
ld: Ich wohne nicht allein.
rt: Tin rao
r: Anzeige | Familie sucht Babysitter. Wir haben zwei Kinder und einen Hund. Wir haben keine Katze. Telefon: 030 41 22 87 | Gia đình tìm người trông trẻ. Chúng tôi có hai con và một con chó. Chúng tôi không nuôi mèo. Điện thoại: 030 41 22 87
rq: Gia đình có ba con. | F
rq: Họ có một con chó. | R
rq: Họ có nuôi mèo. | F
t: Tom | Hast du Kinder? | Bạn có con chưa?
t: Minh | Nein, ich habe keine Kinder. | Chưa, mình không có con.
t: Tom | Bist du verheiratet? | Bạn đã kết hôn chưa?
t: Minh | Nein, ich bin nicht verheiratet. | Chưa, mình chưa kết hôn.
t: Tom | Wohnst du allein? | Bạn sống một mình à?
t: Minh | Nein, ich wohne nicht allein. Ich habe eine Katze. | Không, mình không sống một mình. Mình có một con mèo.
w: Viết 3 câu phủ định về bạn (dùng kein/keine và nicht). | Ich habe keine Kinder. Ich bin nicht verheiratet. Ich habe kein Haustier. | kein/keine, nicht

## 4.4 Sở hữu & số nhiều
goal: Nói về người trong gia đình bằng mein/dein/sein/ihr và số nhiều.
nico: 62,22
i: Lena | Wie heißt deine Schwester? | Em gái bạn tên gì?
i: Minh | Meine Schwester heißt Lan. Sie ist verheiratet. | Em gái mình tên Lan. Em ấy đã kết hôn.
i: Lena | Und ihr Mann? | Còn chồng em ấy?
i: Minh | Ihr Mann heißt Tuan. Er kommt aus Hanoi. Sie haben zwei Kinder. | Chồng em ấy tên Tuấn. Anh ấy đến từ Hà Nội. Họ có hai con.
iq: Em gái Minh tên gì? | Lan | Tuấn | Hoa
iq: Chồng của Lan đến từ đâu? | Hà Nội | Berlin | Huế
iq: "ihr Mann" nghĩa là gì? | chồng cô ấy | chồng tôi | chồng bạn
words: mein; dein; sein (của anh ấy); ihr (của cô ấy); unser; Ihr (của ông/bà); Brüder; Schwestern; Kinder; Großeltern
+w: pron | - | mein | | của tôi | Das ist [mein] Bruder. | Đây là anh trai tôi.
+w: pron | - | dein | | của bạn | Wie heißt [dein] Vater? | Bố bạn tên gì?
+w: pron | - | sein (của anh ấy) | | của anh ấy | Tom und [seine] Schwester. | Tom và em gái anh ấy.
+w: pron | - | ihr (của cô ấy) | | của cô ấy | Lan und [ihr] Mann. | Lan và chồng cô ấy.
+w: pron | - | unser | | của chúng tôi | Das ist [unser] Kind. | Đây là con của chúng tôi.
+w: pron | - | Ihr (của ông/bà) | | của ông/bà (lịch sự) | Wie ist [Ihr] Name? | Tên ông/bà là gì?
+w: n | die | Brüder | (số nhiều) | các anh/em trai | Ich habe zwei [Brüder]. | Tôi có hai anh trai.
+w: n | die | Schwestern | (số nhiều) | các chị/em gái | Meine [Schwestern] wohnen in Hanoi. | Các chị gái tôi sống ở Hà Nội.
+w: n | die | Kinder | (số nhiều) | những đứa trẻ, các con | Wir haben drei [Kinder]. | Chúng tôi có ba con.
g: <b>Đại từ sở hữu</b> đứng trước danh từ:
gt: ich → mein | du → dein | er → sein
gt: sie → ihr | wir → unser | Sie → Ihr
g: Danh từ giống cái (die) hoặc số nhiều → thêm <b>-e</b>: mein Bruder, mein Kind, nhưng <b>meine</b> Schwester, <b>meine</b> Eltern.
g: <b>Số nhiều</b> có nhiều kiểu, luôn đi với <b>die</b>:
gt: Kiểu | Ví dụ
gt: -e (đôi khi thêm ¨) | Freund → Freunde · Sohn → Söhne
gt: -er (thêm ¨ nếu được) | Kind → Kinder · Mann → Männer
gt: -n / -en | Schwester → Schwestern · Frau → Frauen
gt: -s | Foto → Fotos · Oma → Omas
gt: không đổi / chỉ thêm ¨ | Onkel → Onkel · Bruder → Brüder · Vater → Väter
g: <b>Lỗi hay gặp:</b> "mein Schwester" (đúng: meine Schwester). <b>sein</b> (của anh ấy) khác <b>ihr</b> (của cô ấy) — tiếng Việt đều có thể nói "của nó".
gx: fmc: Das ist ___ Bruder. (của tôi) | mein | meine | meinen
gx: fmc: Das ist ___ Schwester. (của tôi) | meine | mein | meinen
gx: fmc: Wie heißt ___ Mutter? (của bạn) | deine | dein | deinen
gx: fmc: Tom und ___ Frau. (của anh ấy) | seine | ihre | sein
gx: fmc: Lan und ___ Mann. (của cô ấy) | ihr | sein | ihre
gx: fmc: Das sind ___ Kinder. (của chúng tôi) | unsere | unser | unseren
x: fmc: ___ Eltern wohnen in Hanoi. (của tôi) | Meine | Mein | Meinen
x: fmc: Wie heißt ___ Vater? (của bạn) | dein | deine | deinen
x: fmc: Das ist ___ Kind. (của tôi) | mein | meine | meinen
x: fmc: Wie ist ___ Adresse? (của ông/bà) | Ihre | Ihr | Sie
x: fmc: Anna und ___ Tochter. (của cô ấy) | ihre | seine | ihr
x: fmc: Lukas und ___ Sohn. (của anh ấy) | sein | ihr | seine
x: ty: Viết dạng số nhiều | der Bruder | die Brüder / Brüder
x: ty: Viết dạng số nhiều | die Schwester | die Schwestern / Schwestern
x: ty: Viết dạng số nhiều | das Kind | die Kinder / Kinder
x: ty: Viết dạng số nhiều | der Sohn | die Söhne / Söhne
x: ty: Viết dạng số nhiều | das Foto | die Fotos / Fotos
x: mc: Cây gia đình: <b>Hung + Mai → Minh, Nam, Lan · Lan + Tuan → Bao, Vy</b>. Bao là gì của Lan? | con trai | anh trai | bố
x: mc: Cây gia đình: <b>Hung + Mai → Minh, Nam, Lan · Lan + Tuan → Bao, Vy</b>. Hung và Mai là gì của Minh? | bố mẹ | ông bà | anh chị
x: mc: Cây gia đình: <b>Hung + Mai → Minh, Nam, Lan · Lan + Tuan → Bao, Vy</b>. Minh có mấy anh chị em? | 2 | 3 | 1
x: mc: Cây gia đình: <b>Hung + Mai → Minh, Nam, Lan · Lan + Tuan → Bao, Vy</b>. Tuan là "___ Mann" của Lan. | ihr | sein | mein
lt: Gia đình Anna
l: Tom | Ist das deine Familie, Anna? | Đây là gia đình cậu à, Anna?
l: Anna | Ja. Das sind meine Eltern und meine Brüder. | Ừ. Đây là bố mẹ mình và các anh trai mình.
l: Tom | Wie viele Brüder hast du? | Cậu có mấy anh trai?
l: Anna | Drei! Und meine Großeltern wohnen auch bei uns. | Ba! Và ông bà mình cũng sống cùng nhà.
lq: Anna có mấy anh trai? | 3 | 2 | 1
lq: Ai sống cùng nhà với Anna? | ông bà | cô chú | bạn bè
lq: "meine Brüder" nghĩa là? | các anh trai của tôi | anh trai của bạn | anh trai của cô ấy
ld: Das sind meine Eltern.
rt: Gia đình của Minh
r: | Mein Name ist Minh. Meine Eltern heißen Hung und Mai. Mein Bruder heißt Nam, er ist Student. Meine Schwester Lan ist verheiratet. Ihr Mann heißt Tuan. Ihre Kinder heißen Bao und Vy. | Tôi tên Minh. Bố mẹ tôi tên Hùng và Mai. Anh trai tôi tên Nam, anh ấy là sinh viên. Em gái tôi Lan đã kết hôn. Chồng em ấy tên Tuấn. Các con em ấy tên Bảo và Vy.
rq: Bố mẹ Minh tên Hùng và Mai. | R
rq: Nam đã có vợ. | F
rq: Lan có hai con. | R
t: Lena | Wie heißt deine Schwester? | Em gái bạn tên gì?
t: Minh | Meine Schwester heißt Lan. | Em gái mình tên Lan.
t: Lena | Ist sie verheiratet? | Em ấy đã kết hôn chưa?
t: Minh | Ja. Ihr Mann heißt Tuan. Er kommt aus Hanoi. | Rồi. Chồng em ấy tên Tuấn. Anh ấy đến từ Hà Nội.
t: Lena | Haben sie Kinder? | Họ có con chưa?
t: Minh | Ja, ihre Kinder heißen Bao und Vy. | Có, các con họ tên Bảo và Vy.
w: Viết 4 câu về gia đình bạn, dùng mein/meine và số nhiều. | Meine Eltern wohnen in Hanoi. Mein Bruder heißt Nam. Meine Schwester ist verheiratet. Ihre Kinder sind fünf und sieben. | mein/meine

## 4.5 Kiểm tra tháng 1
kind: test
goal: Nói 1 phút về bản thân và gia đình (8–10 câu) không nhìn chữ; bài kiểm tra 40 câu ≥ 75%.
nico: 64
t: Minh | Hallo! Ich heiße Minh Nguyen. | Xin chào! Tôi tên Minh Nguyễn.
t: Minh | Ich bin fünfundzwanzig Jahre alt. | Tôi 25 tuổi.
t: Minh | Ich komme aus Vietnam, aus Hanoi. | Tôi đến từ Việt Nam, từ Hà Nội.
t: Minh | Ich wohne in Berlin, in der Bergstraße zwölf. | Tôi sống ở Berlin, số 12 phố Bergstraße.
t: Minh | Ich spreche Vietnamesisch, Englisch und ein bisschen Deutsch. | Tôi nói tiếng Việt, tiếng Anh và một chút tiếng Đức.
t: Minh | Ich bin ledig. Ich habe keine Kinder. | Tôi độc thân. Tôi không có con.
t: Minh | Meine Eltern wohnen in Hanoi. | Bố mẹ tôi sống ở Hà Nội.
t: Minh | Ich habe einen Bruder und eine Schwester. | Tôi có một anh trai và một em gái.
t: Minh | Mein Bruder heißt Nam. Er ist Student. | Anh trai tôi tên Nam. Anh ấy là sinh viên.
t: Minh | Meine Schwester Lan ist verheiratet. Sie hat zwei Kinder. | Em gái tôi Lan đã kết hôn. Em ấy có hai con.
w: Viết một đoạn khoảng 50 từ về bạn và gia đình: tên, tuổi, nơi ở và ít nhất 3 người trong gia đình. | Ich heiße Minh Nguyen und ich bin fünfundzwanzig Jahre alt. Ich komme aus Vietnam und wohne jetzt in Berlin. Meine Eltern wohnen in Hanoi. Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Nam, er ist Student. Meine Schwester ist verheiratet. Ihr Mann heißt Tuan. | heiße, bin, wohne, mein/meine
`;
