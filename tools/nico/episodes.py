# Học với Nico – dữ liệu 71 tập Nicos Weg A1 (DW). Chạy: python3 tools/nico/episodes.py → nico-data.js
# Mỗi tập: (số tập, video id, tên tập, chương, [kit liên quan để lấy từ vựng], [(mẫu câu, nghĩa, cách dùng), ...])
# Mẫu câu & cách dùng do app tự soạn theo chủ đề của tập (không chép lời thoại của phim).
import json, os

U = {0: "Mở đầu", 1: "Làm quen", 2: "Thông tin liên lạc", 3: "Gặp gỡ bạn bè", 4: "Đất nước & ngôn ngữ", 5: "Đồ vật",
     6: "Nhà ở", 7: "Ngày & giờ", 8: "Hẹn giờ", 9: "Công việc", 10: "Tìm đường", 11: "Ăn uống & thời gian rảnh",
     12: "Mua thực phẩm", 13: "Thời tiết & kỳ nghỉ", 14: "Quần áo", 15: "Gia đình", 16: "Thể thao", 17: "Sức khoẻ", 18: "Quê hương mới"}

E = [
 (1, "dC6ZGLzdaTs", "Hallo!", 0, [1, 4], [
   ("Guten Morgen! Wie geht es Ihnen?", "Chào buổi sáng! Ông/bà có khoẻ không?", "Lịch sự (Sie) – với người lớn, người lạ, ở chỗ làm."),
   ("Hallo! Wie geht's?", "Chào! Khoẻ không?", "Thân mật (du) – với bạn bè, người cùng tuổi."),
   ("Danke, gut. Und dir?", "Cảm ơn, khoẻ. Còn bạn?", "Trả lời rồi hỏi lại. Với Sie thì nói: Und Ihnen?")]),
 (2, "upvuC9FR-xU", "Kein Problem!", 0, [3, 5], [
   ("Entschuldigung!", "Xin lỗi! / Làm phiền chút!", "Dùng khi lỡ va vào ai hoặc muốn gọi, hỏi người lạ."),
   ("Kein Problem!", "Không sao đâu!", "Đáp lại lời xin lỗi hoặc lời cảm ơn."),
   ("Danke schön! – Bitte schön!", "Cảm ơn nhiều! – Không có gì!", "Bitte vừa là \"làm ơn\" vừa là \"không có gì\".")]),
 (3, "idFrq0H1Af0", "Tschüss!", 0, [9, 1], [
   ("Tschüss! Bis morgen!", "Tạm biệt! Mai gặp lại!", "Thân mật. Bis + thời gian: bis bald, bis später, bis Montag."),
   ("Auf Wiedersehen!", "Chào tạm biệt!", "Lịch sự, dùng với Sie, trong cửa hàng, cơ quan."),
   ("Schönen Tag noch!", "Chúc một ngày tốt lành!", "Câu chào khi rời đi, rất hay nghe ở cửa hàng.")]),
 (4, "-qAuGimugds", "Von A bis Z", 0, [29], [
   ("Wie schreibt man das?", "Cái đó viết thế nào?", "Hỏi chính tả một từ, một cái tên."),
   ("Können Sie das bitte buchstabieren?", "Ông/bà đánh vần giúp được không?", "Können Sie … bitte …? = cách nhờ lịch sự."),
   ("Mein Name ist M-I-N-H.", "Tên tôi là M-I-N-H.", "Đánh vần tên: học kỹ chữ E (ê), I (i), U (u), Y (üpsilon).")]),
 (5, "FoYSUfsLcjA", "Ich heiße Emma", 1, [11], [
   ("Ich heiße Emma. Und wie heißt du?", "Mình tên là Emma. Còn bạn tên gì?", "Thân mật. Lịch sự: Wie heißen Sie?"),
   ("Wie ist Ihr Name?", "Tên ông/bà là gì?", "Rất lịch sự, hay gặp ở cơ quan, quầy lễ tân."),
   ("Freut mich!", "Rất vui được gặp!", "Nói ngay sau khi biết tên người kia.")]),
 (6, "fZr-eVZ3YOs", "Das ist Nico", 1, [14, 11], [
   ("Das ist Nico. Er ist aus Spanien.", "Đây là Nico. Anh ấy đến từ Tây Ban Nha.", "Giới thiệu người khác: Das ist + tên."),
   ("Wer ist das?", "Đó là ai?", "Hỏi về người. Hỏi về vật: Was ist das?"),
   ("Bist du Nico? – Ja, ich bin Nico.", "Bạn là Nico à? – Ừ, mình là Nico.", "Câu hỏi Có/Không: động từ đứng đầu câu.")]),
 (7, "Q7ECRAQrzFc", "Woher kommst du?", 1, [12, 16], [
   ("Woher kommst du? – Ich komme aus Vietnam.", "Bạn đến từ đâu? – Mình đến từ Việt Nam.", "kommen aus + tên nước."),
   ("Wo wohnst du? – Ich wohne in Berlin.", "Bạn sống ở đâu? – Mình sống ở Berlin.", "wohnen in + thành phố."),
   ("Ich spreche Vietnamesisch und ein bisschen Deutsch.", "Mình nói tiếng Việt và một chút tiếng Đức.", "ein bisschen = một chút; sprechen → du sprichst, er spricht.")]),
 (8, "T89sIATrpBc", "Nico hat ein Problem", 1, [6, 5], [
   ("Ich habe ein Problem.", "Tôi gặp một vấn đề.", "haben: ich habe, du hast, er hat."),
   ("Meine Tasche ist weg!", "Túi của tôi mất rồi!", "weg = biến mất, không còn ở đây."),
   ("Können Sie mir helfen?", "Ông/bà giúp tôi được không?", "Câu nhờ giúp đỡ quan trọng nhất. Thân mật: Kannst du mir helfen?")]),
 (9, "p1dci7nBJRo", "Zahlen von 1 bis 100", 2, [21, 22, 23, 24], [
   ("Wie alt bist du? – Ich bin 25 Jahre alt.", "Bạn bao nhiêu tuổi? – Mình 25 tuổi.", "Số 21–99 đọc hàng đơn vị trước: fünfundzwanzig = 5 và 20."),
   ("Wie viel ist das? – Das ist dreißig.", "Cái đó bao nhiêu? – Ba mươi.", "dreißig viết với ß, không phải -zig."),
   ("Noch einmal, bitte!", "Làm ơn nhắc lại lần nữa!", "Dùng khi nghe số chưa rõ.")]),
 (10, "5wyalwdmpzk", "Wichtige Nummern", 2, [27], [
   ("Wie ist deine Telefonnummer?", "Số điện thoại của bạn là gì?", "Lịch sự: Wie ist Ihre Telefonnummer?"),
   ("Meine Nummer ist null-eins-sieben-sechs …", "Số của mình là 0-1-7-6 …", "Đọc số điện thoại từng chữ số; số 2 hay đọc là \"zwo\" cho rõ."),
   ("Die Notrufnummer ist 112.", "Số khẩn cấp là 112.", "112: cứu thương, cứu hoả; 110: cảnh sát.")]),
 (11, "AI9EmNzxXGE", "Adressen", 2, [28], [
   ("Wie ist deine Adresse?", "Địa chỉ của bạn là gì?", "die Adresse – nhớ: 2 chữ d, 2 chữ s."),
   ("Ich wohne in der Bergstraße 12.", "Mình sống ở số 12 phố Bergstraße.", "Tiếng Đức nói tên phố trước, số nhà sau."),
   ("Die Postleitzahl ist 10115.", "Mã bưu điện là 10115.", "Postleitzahl (PLZ) đứng trước tên thành phố: 10115 Berlin.")]),
 (12, "IhLqeX8QjSg", "Auf dem Amt", 2, [134, 28], [
   ("Ich möchte mich anmelden.", "Tôi muốn đăng ký cư trú.", "Anmeldung: thủ tục đăng ký địa chỉ khi chuyển đến Đức."),
   ("Füllen Sie bitte das Formular aus.", "Ông/bà điền vào tờ khai này nhé.", "ausfüllen là động từ tách: Ich fülle das Formular aus."),
   ("Unterschreiben Sie bitte hier.", "Ông/bà ký vào đây nhé.", "Câu mệnh lệnh lịch sự: động từ + Sie + bitte.")]),
 (13, "VWDtpIIAgAI", "Was machst du hier?", 3, [15, 14], [
   ("Was machst du hier?", "Bạn làm gì ở đây thế?", "machen: ich mache, du machst, er macht."),
   ("Ich lerne Deutsch.", "Mình đang học tiếng Đức.", "Tiếng Đức không có thì tiếp diễn: lerne = học / đang học."),
   ("Wir sind Freunde.", "Chúng mình là bạn.", "sein: wir sind, ihr seid, sie sind.")]),
 (14, "J71RxF7qU2o", "Was trinkst du?", 3, [71, 72], [
   ("Was trinkst du? – Ich trinke Wasser.", "Bạn uống gì? – Mình uống nước.", "trinken: du trinkst, er trinkt."),
   ("Möchtest du einen Kaffee?", "Bạn có muốn một ly cà phê không?", "möchte = muốn (lịch sự). der Kaffee → einen Kaffee."),
   ("Ja, gern! / Nein, danke.", "Có, rất sẵn lòng! / Không, cảm ơn.", "Nhận lời và từ chối lời mời.")]),
 (15, "w-Zea1mverM", "Eine Pizza, bitte!", 3, [75, 76], [
   ("Ich nehme eine Pizza, bitte.", "Cho tôi một cái pizza.", "nehmen (gọi món): ich nehme, du nimmst."),
   ("Ich hätte gern einen Salat.", "Tôi muốn một đĩa salad.", "Ich hätte gern … = cách gọi món rất lịch sự."),
   ("Was möchten Sie trinken?", "Quý khách muốn uống gì?", "Câu người phục vụ hay hỏi.")]),
 (16, "c7LTbMCKVNo", "Zahlen, bitte!", 3, [78], [
   ("Zahlen, bitte! / Die Rechnung, bitte!", "Tính tiền giúp! / Cho xin hoá đơn!", "Gọi tính tiền ở nhà hàng, quán cà phê."),
   ("Zusammen oder getrennt?", "Trả chung hay riêng?", "Ở Đức người ta hay trả riêng (getrennt)."),
   ("Das macht 12 Euro 50. – Stimmt so!", "Tổng là 12 euro 50. – Khỏi thối lại!", "Stimmt so = giữ tiền thừa làm tiền boa.")]),
 (17, "IQ3cDBISOao", "Ich war schon in Berlin", 4, [13], [
   ("Ich war schon in Berlin.", "Tôi đã từng đến Berlin.", "war = quá khứ của sein (ich war, du warst)."),
   ("Warst du schon in Deutschland?", "Bạn đã đến Đức bao giờ chưa?", "schon = đã/rồi; noch nie = chưa bao giờ."),
   ("Nein, ich war noch nie in Wien.", "Chưa, mình chưa bao giờ đến Vienna.", "noch nie đứng sau động từ.")]),
 (18, "3K991pj4Uic", "Wo liegt das?", 4, [12, 13], [
   ("Wo liegt Hamburg? – Im Norden.", "Hamburg nằm ở đâu? – Ở miền Bắc.", "liegen = nằm (vị trí địa lý)."),
   ("München liegt im Süden von Deutschland.", "München nằm ở miền Nam nước Đức.", "im Norden / Süden / Osten / Westen."),
   ("Das ist in der Nähe von Berlin.", "Chỗ đó gần Berlin.", "in der Nähe von = gần.")]),
 (19, "uJ6uLjJxX-8", "In Europa", 4, [16], [
   ("Welche Sprachen sprichst du?", "Bạn nói những ngôn ngữ nào?", "welche + danh từ số nhiều: welche Sprachen."),
   ("In Österreich spricht man Deutsch.", "Ở Áo người ta nói tiếng Đức.", "man = người ta, chia như er/sie/es."),
   ("Ich spreche Englisch, aber nur ein bisschen.", "Tôi nói tiếng Anh, nhưng chỉ một chút.", "aber = nhưng; nur = chỉ.")]),
 (20, "lvgs_iLBdvY", "Andere Länder", 4, [16, 12], [
   ("Ich komme aus der Schweiz.", "Tôi đến từ Thuỵ Sĩ.", "Vài nước có mạo từ: aus der Schweiz, aus der Türkei, aus den USA."),
   ("Vietnam liegt in Asien.", "Việt Nam nằm ở châu Á.", "Tên châu lục: Asien, Europa, Afrika, Amerika."),
   ("Wie ist das Wetter in deinem Land?", "Thời tiết ở nước bạn thế nào?", "Câu hỏi để bắt chuyện về quê hương.")]),
 (21, "9obS6QT10To", "Was ist das?", 5, [7, 101], [
   ("Was ist das? – Das ist ein Tisch.", "Đây là cái gì? – Đây là một cái bàn.", "ein (der/das), eine (die)."),
   ("Wie heißt das auf Deutsch?", "Cái này tiếng Đức gọi là gì?", "Câu cứu cánh khi không biết từ."),
   ("Das ist kein Stuhl, das ist ein Sessel.", "Đây không phải ghế tựa, đây là ghế bành.", "kein = không phải (phủ định danh từ).")]),
 (22, "MNx10ASRCwM", "Wem gehört das?", 5, [35], [
   ("Wem gehört die Tasche?", "Cái túi này của ai?", "gehören + Dativ: Das gehört mir / dir."),
   ("Das ist mein Handy, nicht dein Handy.", "Đây là điện thoại của tôi, không phải của bạn.", "mein/dein/sein/ihr = của tôi/bạn/anh ấy/cô ấy."),
   ("Ist das deine Jacke? – Ja, das ist meine.", "Đây là áo khoác của bạn à? – Ừ, của mình.", "die Jacke → meine/deine (thêm -e).")]),
 (23, "P1ontBJYzhI", "Ich habe kein …", 5, [32], [
   ("Ich habe keinen Stift.", "Tôi không có bút.", "der Stift → keinen (Akkusativ giống đực thêm -en)."),
   ("Hast du ein Handy? – Nein, ich habe kein Handy.", "Bạn có điện thoại không? – Không, mình không có.", "das → kein, die → keine."),
   ("Ich brauche eine Brille.", "Tôi cần một cái kính.", "brauchen = cần, đi với Akkusativ.")]),
 (24, "368pARWAzGk", "Das Auto ist rot", 5, [155], [
   ("Das Auto ist rot.", "Chiếc xe màu đỏ.", "Tính từ đứng sau sein thì không đổi đuôi."),
   ("Welche Farbe hat dein Fahrrad?", "Xe đạp của bạn màu gì?", "Welche Farbe hat …? = … màu gì?"),
   ("Der Tisch ist groß und alt.", "Cái bàn to và cũ.", "Cặp trái nghĩa: groß–klein, alt–neu.")]),
 (26, "YRWehEtSPQY", "Meine Wohnung", 6, [91, 92], [
   ("Meine Wohnung hat drei Zimmer.", "Căn hộ của tôi có ba phòng.", "das Zimmer, số nhiều không đổi: die Zimmer."),
   ("Die Küche ist klein, aber hell.", "Bếp nhỏ nhưng sáng.", "Miêu tả phòng: hell/dunkel, groß/klein."),
   ("Wo ist das Bad? – Hier rechts.", "Phòng tắm ở đâu? – Ở đây, bên phải.", "rechts = bên phải, links = bên trái.")]),
 (27, "s9y2sCNOzBk", "Sofa, Sessel und Tisch", 6, [101, 102], [
   ("Im Wohnzimmer steht ein Sofa.", "Trong phòng khách có một chiếc sofa.", "stehen dùng cho đồ vật đứng: Sofa, Schrank, Tisch."),
   ("Ich brauche noch einen Schrank.", "Tôi còn cần một cái tủ.", "noch = còn, thêm."),
   ("Das Bett ist zu klein.", "Cái giường nhỏ quá.", "zu + tính từ = quá (mang nghĩa tiêu cực).")]),
 (29, "AGwxwx3TOdg", "Emmas Tag", 7, [44, 46], [
   ("Ich stehe um sieben Uhr auf.", "Tôi dậy lúc 7 giờ.", "aufstehen là động từ tách: auf đứng cuối câu."),
   ("Am Morgen frühstücke ich.", "Buổi sáng tôi ăn sáng.", "Từ chỉ thời gian đứng đầu → động từ đứng thứ 2."),
   ("Am Abend sehe ich fern.", "Buổi tối tôi xem TV.", "fernsehen (tách): ich sehe fern.")]),
 (30, "jUElkIpQlNw", "Tageszeiten", 7, [44], [
   ("Guten Abend! / Gute Nacht!", "Chào buổi tối! / Chúc ngủ ngon!", "Gute Nacht chỉ dùng trước khi đi ngủ."),
   ("Am Nachmittag habe ich Zeit.", "Buổi chiều tôi rảnh.", "am Morgen, am Vormittag, am Mittag, am Nachmittag, am Abend – nhưng: in der Nacht."),
   ("Heute Morgen war ich müde.", "Sáng nay tôi mệt.", "heute Morgen / heute Abend = sáng nay / tối nay.")]),
 (31, "f9kkMWEOxo0", "Am Sonntag koche ich", 7, [58, 68], [
   ("Am Sonntag koche ich.", "Chủ nhật tôi nấu ăn.", "am + thứ: am Montag, am Wochenende."),
   ("Kochst du gern?", "Bạn có thích nấu ăn không?", "Động từ + gern = thích làm việc đó."),
   ("Ich kaufe ein und dann koche ich.", "Tôi đi chợ rồi sau đó nấu ăn.", "einkaufen (tách); dann = sau đó.")]),
 (32, "dqtdmvpa8D0", "Emmas Wochenende", 7, [52], [
   ("Was machst du am Wochenende?", "Cuối tuần bạn làm gì?", "Câu hỏi bắt chuyện thông dụng nhất."),
   ("Am Samstag treffe ich Freunde.", "Thứ Bảy tôi gặp bạn bè.", "treffen: ich treffe, du triffst."),
   ("Am Sonntag schlafe ich lange.", "Chủ nhật tôi ngủ nướng.", "lange schlafen = ngủ dậy muộn.")]),
 (33, "SEV3kmyQCII", "Wie spät ist es?", 8, [41, 42, 43], [
   ("Wie spät ist es? – Es ist halb drei.", "Mấy giờ rồi? – 2 giờ rưỡi.", "halb drei = nửa tiếng TRƯỚC 3 giờ = 2:30!"),
   ("Es ist Viertel nach vier.", "Bây giờ là 4 giờ 15.", "Viertel nach = hơn 15 phút; Viertel vor = kém 15."),
   ("Um wie viel Uhr? – Um acht.", "Lúc mấy giờ? – Lúc 8 giờ.", "um + giờ = lúc mấy giờ.")]),
 (34, "Vvt6H_EvGX0", "Hast du morgen Zeit?", 8, [45, 59], [
   ("Hast du morgen Zeit?", "Mai bạn có rảnh không?", "Zeit haben = có thời gian, rảnh."),
   ("Morgen kann ich leider nicht.", "Tiếc là mai mình không được.", "leider = tiếc là – từ chối lịch sự."),
   ("Wie wäre es mit Freitag?", "Thứ Sáu thì sao?", "Wie wäre es mit …? = đề xuất thời gian khác.")]),
 (35, "_VUrkdITl8U", "Wann spielen wir?", 8, [48, 51], [
   ("Wann spielen wir Fußball?", "Khi nào mình đá bóng?", "Câu hỏi W: từ hỏi + động từ + chủ ngữ."),
   ("Von zwei bis vier Uhr.", "Từ 2 đến 4 giờ.", "von … bis … = từ … đến …"),
   ("Am Dienstag habe ich Training.", "Thứ Ba tôi có buổi tập.", "das Training = buổi tập.")]),
 (36, "2v6H7fnWuts", "Zu spät?!", 8, [46, 128], [
   ("Entschuldigung, ich bin zu spät.", "Xin lỗi, tôi đến muộn.", "zu spät = (quá) muộn; pünktlich = đúng giờ."),
   ("Der Bus hatte Verspätung.", "Xe buýt bị trễ.", "die Verspätung = sự chậm trễ (tàu, xe)."),
   ("Kein Problem, wir haben noch Zeit.", "Không sao, mình vẫn còn thời gian.", "noch = vẫn còn.")]),
 (37, "rH8HMCr73RM", "Ich bin Lehrerin", 9, [131], [
   ("Ich bin Lehrerin.", "Tôi là giáo viên (nữ).", "Nói nghề KHÔNG dùng mạo từ. Nữ thêm -in: Lehrer → Lehrerin."),
   ("Was bist du von Beruf?", "Bạn làm nghề gì?", "Cũng hỏi được: Was machst du beruflich?"),
   ("Ich arbeite als Koch in einem Restaurant.", "Tôi làm đầu bếp ở một nhà hàng.", "arbeiten als + nghề.")]),
 (38, "a7LZ0QAG6DQ", "Mein Beruf", 9, [131, 132], [
   ("Ich arbeite bei Siemens.", "Tôi làm cho Siemens.", "bei + tên công ty."),
   ("Mein Beruf macht mir Spaß.", "Tôi thích công việc của mình.", "… macht mir Spaß = … làm tôi vui/thích."),
   ("Ich muss viel arbeiten.", "Tôi phải làm việc nhiều.", "müssen: động từ chính về cuối câu.")]),
 (39, "ymE5ZON70C0", "Wo ist der Aufzug?", 9, [94, 133], [
   ("Wo ist der Aufzug?", "Thang máy ở đâu?", "der Aufzug = der Fahrstuhl (thang máy)."),
   ("Das Büro ist im dritten Stock.", "Văn phòng ở tầng 3.", "im ersten, zweiten, dritten Stock."),
   ("Nehmen Sie die Treppe.", "Ông/bà đi cầu thang bộ nhé.", "die Treppe = cầu thang bộ.")]),
 (40, "qaQd9wFy1l4", "Traumberufe", 9, [131], [
   ("Mein Traumberuf ist Ärztin.", "Nghề mơ ước của tôi là bác sĩ.", "Traum (giấc mơ) + Beruf (nghề) = nghề mơ ước."),
   ("Ich möchte Pilot werden.", "Tôi muốn trở thành phi công.", "werden = trở thành; đứng cuối câu sau möchte."),
   ("Was willst du später machen?", "Sau này bạn muốn làm gì?", "wollen = muốn (mạnh hơn möchte).")]),
 (41, "Fz_AuTNFa8k", "Wo ist der Bahnhof?", 10, [115, 124], [
   ("Entschuldigung, wo ist der Bahnhof?", "Xin lỗi, nhà ga ở đâu?", "Mở đầu bằng Entschuldigung khi hỏi người lạ."),
   ("Gehen Sie geradeaus.", "Ông/bà đi thẳng.", "geradeaus = thẳng; dann links/rechts = rồi rẽ trái/phải."),
   ("Ist das weit? – Nein, nur fünf Minuten.", "Có xa không? – Không, chỉ 5 phút.", "weit = xa; nah = gần.")]),
 (42, "5_pXp3akjr4", "An der Ampel links", 10, [116, 115], [
   ("An der Ampel gehen Sie links.", "Đến đèn giao thông thì rẽ trái.", "an der Ampel / an der Kreuzung = ở đèn / ở ngã tư."),
   ("Nehmen Sie die zweite Straße rechts.", "Đi vào phố thứ hai bên phải.", "die erste, zweite, dritte Straße."),
   ("Die Post ist gegenüber vom Supermarkt.", "Bưu điện ở đối diện siêu thị.", "gegenüber von = đối diện.")]),
 (43, "4us1ZoH9K04", "Mit Bus und Bahn", 10, [121, 122, 123], [
   ("Ich fahre mit dem Bus.", "Tôi đi bằng xe buýt.", "mit dem Bus/Zug/Auto, mit der U-Bahn/S-Bahn."),
   ("Welche Linie fährt zum Zentrum?", "Tuyến nào đi vào trung tâm?", "zum (der/das), zur (die): zum Bahnhof, zur Uni."),
   ("Wo muss ich umsteigen?", "Tôi phải đổi tàu ở đâu?", "umsteigen (tách) = đổi tàu/xe.")]),
 (44, "dsPDJb2956A", "Im Büro", 10, [133], [
   ("Wo ist das Büro von Frau Weber?", "Văn phòng của bà Weber ở đâu?", "von + người = của ai đó."),
   ("Ich habe einen Termin um zehn Uhr.", "Tôi có cuộc hẹn lúc 10 giờ.", "der Termin = cuộc hẹn (công việc, bác sĩ)."),
   ("Bitte warten Sie einen Moment.", "Xin vui lòng chờ một chút.", "einen Moment = một chút, một lát.")]),
 (45, "3tq7bRB9iu0", "Lebensmittel", 11, [61, 62, 63], [
   ("Zum Frühstück esse ich Brot mit Käse.", "Bữa sáng tôi ăn bánh mì với phô mai.", "zum Frühstück/Mittagessen/Abendessen = vào bữa …"),
   ("Wir brauchen noch Milch und Eier.", "Mình còn cần sữa và trứng.", "das Ei → die Eier (số nhiều)."),
   ("Isst du Fleisch? – Nein, ich bin Vegetarier.", "Bạn có ăn thịt không? – Không, mình ăn chay.", "essen: du isst, er isst.")]),
 (46, "sEu2PqmGrgw", "Ich mag (nicht)!", 11, [63, 66], [
   ("Ich mag Äpfel, aber ich mag keine Bananen.", "Tôi thích táo nhưng không thích chuối.", "mögen + danh từ; không thích: mag kein(e) / mag … nicht."),
   ("Was isst du gern?", "Bạn thích ăn gì?", "gern đi với động từ: Ich esse gern Reis."),
   ("Ich trinke lieber Tee.", "Tôi thích uống trà hơn.", "gern → lieber (thích hơn) → am liebsten (thích nhất).")]),
 (47, "SIN9PejV-OI", "Haushaltsarbeit", 11, [109], [
   ("Ich räume die Küche auf.", "Tôi dọn dẹp bếp.", "aufräumen (tách) = dọn dẹp, sắp xếp."),
   ("Kannst du bitte abwaschen?", "Bạn rửa bát giúp được không?", "abwaschen (tách) = rửa bát."),
   ("Wer bringt den Müll raus?", "Ai đem rác ra ngoài?", "der Müll = rác; rausbringen = đem ra ngoài.")]),
 (48, "KeU3-5jr2fI", "Was macht dir Spaß?", 11, [161, 162], [
   ("Was macht dir Spaß?", "Bạn thích làm gì?", "Nghĩa đen: \"Cái gì làm bạn vui?\""),
   ("Lesen macht mir Spaß.", "Tôi thích đọc sách.", "Động từ nguyên thể viết hoa thành danh từ: das Lesen."),
   ("In meiner Freizeit spiele ich Gitarre.", "Lúc rảnh tôi chơi guitar.", "in meiner Freizeit = trong thời gian rảnh.")]),
 (49, "ySrfaSqtdfw", "Mengen und Preise", 12, [82, 85], [
   ("Was kostet ein Kilo Tomaten?", "Một ký cà chua giá bao nhiêu?", "Lượng + danh từ, không có \"von\": ein Kilo Tomaten."),
   ("Ich nehme zwei Liter Milch.", "Tôi lấy hai lít sữa.", "Đơn vị không thêm số nhiều: zwei Liter, drei Kilo."),
   ("Das ist aber teuer!", "Đắt quá vậy!", "aber ở đây để nhấn mạnh; ngược lại: billig = rẻ.")]),
 (50, "dOdHXwy0cME", "Was darf es sein?", 12, [64, 85], [
   ("Was darf es sein?", "Quý khách cần gì ạ?", "Câu người bán hàng hay hỏi ở quầy thịt, tiệm bánh."),
   ("Ich hätte gern 200 Gramm Käse.", "Cho tôi 200 gram phô mai.", "Ich hätte gern … = tôi muốn (lịch sự)."),
   ("Darf es ein bisschen mehr sein?", "Hơn một chút được không ạ?", "Trả lời: Ja, das ist okay. / Nein, bitte genau 200 Gramm.")]),
 (51, "SRAk_KZlrwY", "Sonst noch etwas?", 12, [89, 86], [
   ("Sonst noch etwas?", "Còn gì nữa không ạ?", "Người bán hỏi trước khi tính tiền."),
   ("Nein, danke. Das ist alles.", "Không, cảm ơn. Thế thôi.", "Kết thúc việc mua hàng."),
   ("Kann ich mit Karte zahlen?", "Tôi trả bằng thẻ được không?", "mit Karte / bar zahlen = trả bằng thẻ / tiền mặt.")]),
 (52, "0S3urnio_08", "Wie viel Mehl?", 12, [68, 85], [
   ("Wie viel Mehl brauchen wir?", "Mình cần bao nhiêu bột mì?", "wie viel + danh từ không đếm được; wie viele + số nhiều."),
   ("Wir brauchen 500 Gramm Mehl und drei Eier.", "Cần 500 gram bột và ba quả trứng.", "Đọc công thức nấu ăn."),
   ("Zuerst mischen wir alles.", "Đầu tiên mình trộn tất cả.", "zuerst – dann – danach – zum Schluss: kể theo thứ tự.")]),
 (54, "b4ki5lMyd4Q", "Jahreszeiten", 13, [55], [
   ("Im Winter ist es kalt.", "Mùa đông trời lạnh.", "im Frühling, im Sommer, im Herbst, im Winter."),
   ("Welche Jahreszeit magst du am liebsten?", "Bạn thích mùa nào nhất?", "am liebsten = thích nhất."),
   ("Im Sommer fahre ich gern ans Meer.", "Mùa hè tôi thích đi biển.", "ans Meer fahren = đi biển.")]),
 (55, "chmqnserFqM", "Der Ausflug", 13, [166, 171], [
   ("Wir machen am Samstag einen Ausflug.", "Thứ Bảy chúng tôi đi chơi một chuyến.", "einen Ausflug machen = đi dã ngoại, đi chơi trong ngày."),
   ("Kommst du mit?", "Bạn đi cùng không?", "mitkommen (tách) = đi cùng."),
   ("Wir haben viele Fotos gemacht.", "Chúng tôi đã chụp nhiều ảnh.", "Perfekt: haben + phân từ II (gemacht) ở cuối câu.")]),
 (56, "qL1hgrjJScY", "Wie wird das Wetter?", 13, [171, 172, 173], [
   ("Wie wird das Wetter morgen?", "Thời tiết ngày mai thế nào?", "wird (werden) = sẽ trở nên."),
   ("Es regnet. / Die Sonne scheint.", "Trời mưa. / Trời nắng.", "Thời tiết dùng chủ ngữ \"es\": es regnet, es schneit."),
   ("Es sind 25 Grad.", "Trời 25 độ.", "Grad = độ; minus 5 Grad = âm 5 độ.")]),
 (57, "DiNQle2s1lQ", "Folge 57 · Quần áo", 14, [151], [
   ("Was ziehst du heute an?", "Hôm nay bạn mặc gì?", "anziehen (tách) = mặc vào."),
   ("Ich trage gern Jeans und T-Shirts.", "Tôi thích mặc quần jeans và áo phông.", "tragen = mặc (thường xuyên): du trägst."),
   ("Ich brauche eine neue Jacke.", "Tôi cần một chiếc áo khoác mới.", "Tính từ trước danh từ thêm đuôi: eine neue Jacke.")]),
 (58, "9iJnx2PESSk", "Mein Lieblingspulli", 14, [152, 155], [
   ("Das ist mein Lieblingspulli.", "Đây là chiếc áo len tôi thích nhất.", "Lieblings- + danh từ = … yêu thích nhất."),
   ("Er ist blau und sehr warm.", "Nó màu xanh và rất ấm.", "der Pulli → er (giống đực)."),
   ("Was ist deine Lieblingsfarbe?", "Màu yêu thích của bạn là gì?", "Lieblingsessen, Lieblingsfilm, Lieblingsfarbe …")]),
 (59, "pCRS-oxE61k", "Das passt gut!", 14, [157], [
   ("Kann ich das anprobieren?", "Tôi mặc thử được không?", "anprobieren (tách) = mặc thử."),
   ("Die Hose passt gut.", "Cái quần vừa lắm.", "passen = vừa (kích cỡ)."),
   ("Das steht dir gut!", "Bạn mặc đẹp đấy!", "stehen + Dativ = hợp với ai (về kiểu dáng).")]),
 (60, "eYaoCcvPd_U", "Schick!", 14, [158, 153], [
   ("Du siehst schick aus!", "Trông bạn sành điệu quá!", "aussehen (tách) = trông có vẻ."),
   ("Ich finde das Kleid schön.", "Tôi thấy chiếc váy đẹp.", "Ich finde … + tính từ = tôi thấy … thế nào."),
   ("Der Rock ist mir zu kurz.", "Cái chân váy ngắn quá với tôi.", "zu + tính từ = quá; mir = với tôi.")]),
 (61, "6CQ32OWDyq4", "Meine Familie", 15, [31], [
   ("Das ist meine Familie.", "Đây là gia đình tôi.", "die Familie → meine."),
   ("Ich habe einen Bruder und zwei Schwestern.", "Tôi có một anh/em trai và hai chị/em gái.", "der Bruder → einen Bruder (Akkusativ)."),
   ("Hast du Geschwister?", "Bạn có anh chị em không?", "die Geschwister = anh chị em (luôn số nhiều).")]),
 (62, "KJ-icYRJ29s", "Meine Eltern", 15, [34, 35], [
   ("Meine Eltern wohnen in Hanoi.", "Bố mẹ tôi sống ở Hà Nội.", "die Eltern = bố mẹ (số nhiều)."),
   ("Mein Vater ist 60 und meine Mutter ist 58.", "Bố tôi 60 tuổi, mẹ tôi 58.", "Nói tuổi: ist + số (có thể bỏ \"Jahre alt\")."),
   ("Unsere Großeltern sind sehr nett.", "Ông bà chúng tôi rất tốt bụng.", "unser/unsere = của chúng tôi.")]),
 (64, "oJmH9eD7Lao", "Mein Bruder", 15, [32], [
   ("Mein Bruder ist älter als ich.", "Anh trai tôi lớn tuổi hơn tôi.", "So sánh hơn: alt → älter als."),
   ("Er ist verheiratet und hat ein Kind.", "Anh ấy đã kết hôn và có một đứa con.", "verheiratet / ledig = đã kết hôn / độc thân."),
   ("Wir sehen uns oft.", "Chúng tôi hay gặp nhau.", "oft = thường; selten = hiếm khi.")]),
 (65, "otY2T26FOP0", "Von Kopf bis Fuß", 16, [141, 142, 143], [
   ("Von Kopf bis Fuß.", "Từ đầu đến chân.", "der Kopf (đầu), der Fuß (bàn chân)."),
   ("Heb die Arme hoch!", "Giơ tay lên!", "Mệnh lệnh với du: bỏ -st (du hebst → heb!)."),
   ("Mir tut der Rücken weh.", "Tôi bị đau lưng.", "Mir tut … weh = tôi đau …; số nhiều: Mir tun die Füße weh.")]),
 (66, "B7MMM3SrSlg", "Bist du fit?", 16, [162, 144], [
   ("Bist du fit?", "Bạn có khoẻ không (thể lực)?", "fit = khoẻ, cân đối."),
   ("Ich jogge zweimal pro Woche.", "Tôi chạy bộ hai lần mỗi tuần.", "einmal, zweimal … pro Woche = … lần mỗi tuần."),
   ("Ich laufe jeden Morgen.", "Sáng nào tôi cũng chạy.", "laufen: du läufst, er läuft.")]),
 (67, "826-EwY51Fw", "Fitness", 16, [162], [
   ("Ich gehe ins Fitnessstudio.", "Tôi đi phòng tập gym.", "ins = in das (đi vào đâu)."),
   ("Kannst du schwimmen?", "Bạn biết bơi không?", "können = biết làm, có thể."),
   ("Sport ist gut für die Gesundheit.", "Thể thao tốt cho sức khoẻ.", "gut für + Akkusativ.")]),
 (68, "DiMQTg7D7Ao", "Ist das gesund?", 16, [69, 145], [
   ("Ist das gesund?", "Cái đó có lành mạnh không?", "gesund ↔ ungesund."),
   ("Obst und Gemüse sind gesund.", "Hoa quả và rau thì tốt cho sức khoẻ.", "das Obst, das Gemüse – không đếm được."),
   ("Du solltest weniger Zucker essen.", "Bạn nên ăn ít đường hơn.", "solltest = nên (lời khuyên).")]),
 (69, "0b66BzvKgMY", "Geht es dir gut?", 17, [145], [
   ("Geht es dir gut? – Nein, mir geht es schlecht.", "Bạn ổn chứ? – Không, mình thấy không khoẻ.", "mir/dir geht es … = tôi/bạn cảm thấy …"),
   ("Ich bin krank.", "Tôi bị ốm.", "krank ↔ gesund."),
   ("Ich habe Fieber und Kopfschmerzen.", "Tôi bị sốt và đau đầu.", "-schmerzen = đau: Bauchschmerzen, Halsschmerzen.")]),
 (70, "cTJ1KFzmhbc", "Beim Arzt", 17, [146, 147], [
   ("Was fehlt Ihnen?", "Ông/bà bị làm sao?", "Câu bác sĩ hay hỏi."),
   ("Mein Hals tut weh.", "Họng tôi đau.", "… tut weh = … đau."),
   ("Ich möchte einen Termin machen.", "Tôi muốn đặt lịch hẹn.", "Khi gọi điện đến phòng khám.")]),
 (71, "ilp0CwKxdbY", "Gute Besserung!", 17, [148], [
   ("Gute Besserung!", "Chúc mau khoẻ!", "Nói với người đang ốm."),
   ("Bleib im Bett und trink viel Tee!", "Nằm nghỉ và uống nhiều trà nhé!", "Mệnh lệnh du: bleib!, trink!"),
   ("Ich hole dir Medikamente aus der Apotheke.", "Mình đi mua thuốc ở hiệu thuốc cho bạn.", "die Apotheke = hiệu thuốc.")]),
 (72, "VWomWeeqsAk", "Nehmen Sie …", 17, [149, 148], [
   ("Nehmen Sie die Tabletten dreimal am Tag.", "Uống thuốc ba lần một ngày.", "dreimal am Tag = 3 lần/ngày."),
   ("Sie sollen viel schlafen.", "Ông/bà nên ngủ nhiều.", "sollen = bác sĩ dặn/khuyên."),
   ("Brauche ich ein Rezept?", "Tôi có cần đơn thuốc không?", "das Rezept = đơn thuốc (cũng là công thức nấu ăn).")]),
 (74, "ppIFbtiL1kQ", "Leben in Deutschland", 18, [175], [
   ("Ich lebe seit zwei Jahren in Deutschland.", "Tôi sống ở Đức được hai năm rồi.", "seit + Dativ = đã … (đến giờ vẫn còn)."),
   ("Das Leben hier gefällt mir.", "Tôi thích cuộc sống ở đây.", "gefallen + Dativ: Das gefällt mir."),
   ("Am Anfang war alles neu.", "Lúc đầu mọi thứ đều mới lạ.", "am Anfang = lúc đầu.")]),
 (75, "k8_8CA5Ls94", "Anders als zu Hause", 18, [176], [
   ("Hier ist vieles anders als zu Hause.", "Ở đây nhiều thứ khác với ở nhà.", "anders als = khác với."),
   ("In Vietnam essen wir mit Stäbchen.", "Ở Việt Nam chúng tôi ăn bằng đũa.", "mit + Dativ: mit Stäbchen, mit Messer und Gabel."),
   ("Ich vermisse meine Familie.", "Tôi nhớ gia đình.", "vermissen = nhớ (người, nơi chốn).")]),
 (76, "bgnox1SRrw8", "Ich träume von …", 18, [161, 131], [
   ("Ich träume von einer eigenen Wohnung.", "Tôi mơ về một căn hộ của riêng mình.", "träumen von + Dativ."),
   ("In fünf Jahren möchte ich gut Deutsch sprechen.", "5 năm nữa tôi muốn nói tiếng Đức giỏi.", "in + khoảng thời gian = … nữa."),
   ("Mein Ziel ist eine Ausbildung.", "Mục tiêu của tôi là học nghề.", "die Ausbildung = khoá học nghề (rất phổ biến ở Đức).")]),
]

ids = [e[0] for e in E]
assert len(ids) == len(set(ids)) == 71, len(ids)
for e in E: assert len(e[5]) == 3, e[0]
out = {"u": U, "e": [{"n": n, "id": vid, "t": t, "u": u, "k": k, "p": [list(x) for x in p]} for n, vid, t, u, k, p in E]}
root = os.path.join(os.path.dirname(__file__), "..", "..")
with open(os.path.join(root, "nico-data.js"), "w") as f:
    f.write("/* Học với Nico – 71 tập Nicos Weg A1 (DW). SINH TỰ ĐỘNG bởi tools/nico/episodes.py, đừng sửa tay.\n"
            "   Video thuộc DW (Deutsche Welle). Mẫu câu & cách dùng do app tự soạn theo chủ đề từng tập. */\n")
    f.write("window.NICO=" + json.dumps(out, ensure_ascii=False) + ";\n")
print("ok", len(E), "episodes")
