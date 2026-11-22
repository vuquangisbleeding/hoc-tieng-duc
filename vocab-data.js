/* Bộ từ vựng A1 – mỗi từ:
   a: mạo từ (der/die/das) · w: từ · pl: số nhiều · f: dạng chia (động từ) · t: loại từ
   m: nghĩa · i: IPA · ex: câu ví dụ, [..] = chỗ điền · exv: dịch câu · n: ghi chú phát âm / trọng âm */
window.VOCAB_SETS = [
{ id:"chao-hoi", title:"Chào hỏi & giới thiệu", level:"A1", words:[
 {t:"phr",w:"Hallo",m:"xin chào",i:"haˈloː",ex:"[Hallo], wie geht's?",exv:"Chào, khoẻ không?",n:"Thường nhấn âm cuối “ha-<b>LÔ</b>”, cũng có người nhấn đầu “<b>HA</b>-lo” — cả hai đều đúng."},
 {t:"phr",w:"Tschüss",m:"tạm biệt (thân mật)",i:"tʃʏs",ex:"[Tschüss], bis morgen!",exv:"Tạm biệt, mai gặp!",n:"<b>tsch</b> = “ch” bật mạnh; <b>ü</b> ngắn, môi tròn."},
 {t:"phr",w:"Guten Tag",m:"chào (ban ngày, lịch sự)",i:"ˈɡuːtn̩ ˈtaːk",ex:"[Guten Tag], Frau Müller!",exv:"Chào bà Müller!",n:"<b>g</b> cuối từ đọc thành <b>[k]</b>: Tag = “tak”. <b>-en</b> đọc lướt [n̩]."},
 {t:"phr",w:"danke",m:"cảm ơn",i:"ˈdaŋkə",ex:"[Danke] für die Hilfe!",exv:"Cảm ơn vì đã giúp!",n:"<b>nk</b> đọc [ŋk] như “ng-k”: “đang-kơ”."},
 {t:"phr",w:"bitte",m:"làm ơn; không có gì",i:"ˈbɪtə",ex:"Einen Kaffee, [bitte].",exv:"Cho một cà phê, làm ơn.",n:"<b>-e</b> cuối đọc nhẹ [ə] “ơ”, không bỏ đi."},
 {t:"phr",w:"Entschuldigung",m:"xin lỗi",i:"ɛntˈʃʊldɪɡʊŋ",ex:"[Entschuldigung], wo ist der Bahnhof?",exv:"Xin lỗi, nhà ga ở đâu?",n:"Tiền tố <b>ent-</b> không nhận trọng âm → nhấn <b>schul</b>. Đuôi <b>-ung</b> đọc [ʊŋ]."},
 {t:"v",w:"heißen",f:"heißt – hat geheißen",m:"tên là",i:"ˈhaɪ̯sn̩",ex:"Ich [heiße] Lan.",exv:"Tôi tên là Lan.",n:"<b>ei</b> = “ai”; <b>ß</b> = “s” mạnh (không rung)."},
 {t:"v",w:"kommen",f:"kommt – ist gekommen",m:"đến; đến từ",i:"ˈkɔmən",ex:"Ich [komme] aus Vietnam.",exv:"Tôi đến từ Việt Nam.",n:"Phụ âm đôi <b>mm</b> → <b>o</b> trước nó đọc ngắn [ɔ]."},
 {t:"v",w:"wohnen",f:"wohnt – hat gewohnt",m:"sống, cư trú",i:"ˈvoːnən",ex:"Wir [wohnen] in Berlin.",exv:"Chúng tôi sống ở Berlin.",n:"<b>W</b> = “v”. <b>h</b> sau nguyên âm là câm, chỉ báo hiệu <b>o</b> dài."},
 {t:"v",w:"sprechen",f:"spricht – hat gesprochen",m:"nói",i:"ˈʃpʁɛçn̩",ex:"[Sprechen] Sie Deutsch?",exv:"Ông/bà có nói tiếng Đức không?",n:"<b>sp</b> đầu từ = “schp”. Ngôi du/er đổi e → i: du sprichst, er spricht."},
 {t:"n",a:"der",w:"Name",pl:"die Namen",m:"tên",i:"ˈnaːmə",ex:"Wie ist Ihr [Name]?",exv:"Tên ông/bà là gì?",n:"Một nguyên âm + một phụ âm → <b>a</b> dài."},
 {t:"n",a:"das",w:"Land",pl:"die Länder",m:"đất nước",i:"lant",ex:"Vietnam ist ein schönes [Land].",exv:"Việt Nam là một đất nước đẹp.",n:"<b>d</b> cuối từ đọc thành <b>[t]</b>: “lant”. Số nhiều Länder lại đọc [d]."},
 {t:"n",a:"die",w:"Sprache",pl:"die Sprachen",m:"ngôn ngữ",i:"ˈʃpʁaːxə",ex:"Deutsch ist eine schwere [Sprache].",exv:"Tiếng Đức là một ngôn ngữ khó.",n:"<b>ch</b> sau <b>a</b> đọc khàn [x] như “kh”."},
 {t:"adv",w:"ja",m:"vâng, có",i:"jaː",ex:"[Ja], das stimmt.",exv:"Vâng, đúng vậy.",n:"<b>j</b> tiếng Đức đọc như “d” mềm/“y” [j], không phải “j” tiếng Anh."},
 {t:"adv",w:"nein",m:"không",i:"naɪ̯n",ex:"[Nein], danke.",exv:"Không, cảm ơn.",n:"<b>ei</b> luôn đọc “ai”."},
 {t:"n",a:"der",w:"Herr",pl:"die Herren",m:"ông, ngài",i:"hɛʁ",ex:"Guten Morgen, [Herr] Schmidt!",exv:"Chào buổi sáng, ông Schmidt!",n:"<b>r</b> cuối sau nguyên âm ngắn vẫn hơi nghe thấy [ʁ] nhẹ ở họng."},
 {t:"n",a:"die",w:"Frau",pl:"die Frauen",m:"bà; phụ nữ; vợ",i:"fʁaʊ̯",ex:"Das ist meine [Frau].",exv:"Đây là vợ tôi.",n:"<b>au</b> = “ao”; <b>Fr</b>: r họng ngay sau f."}
]},
{ id:"gia-dinh", title:"Gia đình", level:"A1", words:[
 {t:"n",a:"die",w:"Familie",pl:"die Familien",m:"gia đình",i:"faˈmiːli̯ə",ex:"Meine [Familie] wohnt in Hanoi.",exv:"Gia đình tôi sống ở Hà Nội.",n:"Trọng âm ở <b>mi</b>. Đuôi <b>-ie</b> ở đây đọc [i̯ə] “i-ơ” (khác Bier, nơi ie = “i” dài)."},
 {t:"n",a:"die",w:"Mutter",pl:"die Mütter",m:"mẹ",i:"ˈmʊtɐ",ex:"Meine [Mutter] ist Lehrerin.",exv:"Mẹ tôi là giáo viên.",n:"<b>-er</b> cuối đọc [ɐ] (“a” nhẹ), không cuốn r."},
 {t:"n",a:"der",w:"Vater",pl:"die Väter",m:"bố",i:"ˈfaːtɐ",ex:"Mein [Vater] arbeitet viel.",exv:"Bố tôi làm việc nhiều.",n:"<b>V</b> trong từ gốc Đức đọc “ph” [f]. <b>-er</b> cuối = [ɐ]."},
 {t:"n",a:"die",w:"Eltern",pl:"(chỉ có số nhiều)",m:"bố mẹ",i:"ˈɛltɐn",ex:"Meine [Eltern] sind sehr nett.",exv:"Bố mẹ tôi rất tốt bụng.",n:"Chỉ dùng số nhiều nên mạo từ là <b>die</b>. <b>-ern</b> đọc [ɐn]."},
 {t:"n",a:"der",w:"Bruder",pl:"die Brüder",m:"anh/em trai",i:"ˈbʁuːdɐ",ex:"Ich habe einen [Bruder].",exv:"Tôi có một anh/em trai.",n:"<b>u</b> dài; số nhiều đổi thành <b>ü</b>: Brüder."},
 {t:"n",a:"die",w:"Schwester",pl:"die Schwestern",m:"chị/em gái",i:"ˈʃvɛstɐ",ex:"Meine [Schwester] ist zehn.",exv:"Em gái tôi mười tuổi.",n:"<b>schw</b> = “schv”. <b>st</b> ở giữa từ đọc bình thường “s-t” (chỉ đầu âm tiết mới là “scht”)."},
 {t:"n",a:"das",w:"Kind",pl:"die Kinder",m:"đứa trẻ, con",i:"kɪnt",ex:"Das [Kind] spielt im Garten.",exv:"Đứa trẻ chơi trong vườn.",n:"<b>d</b> cuối từ đọc [t]: “kint”. Số nhiều Kinder đọc [d]."},
 {t:"n",a:"der",w:"Sohn",pl:"die Söhne",m:"con trai",i:"zoːn",ex:"Ihr [Sohn] heißt Minh.",exv:"Con trai bà ấy tên Minh.",n:"<b>s</b> đầu từ trước nguyên âm đọc rung [z]. <b>h</b> câm → o dài."},
 {t:"n",a:"die",w:"Tochter",pl:"die Töchter",m:"con gái",i:"ˈtɔxtɐ",ex:"Unsere [Tochter] geht zur Schule.",exv:"Con gái chúng tôi đi học.",n:"<b>ch</b> sau <b>o</b> = khàn [x]; số nhiều Töchter: <b>ch</b> sau <b>ö</b> thành xì [ç]."},
 {t:"n",a:"der",w:"Großvater",pl:"die Großväter",m:"ông",i:"ˈɡʁoːsˌfaːtɐ",ex:"Mein [Großvater] ist 80 Jahre alt.",exv:"Ông tôi 80 tuổi.",n:"Từ ghép → trọng âm ở từ đầu <b>Groß</b>. Giống theo từ cuối (der Vater)."},
 {t:"n",a:"die",w:"Großmutter",pl:"die Großmütter",m:"bà",i:"ˈɡʁoːsˌmʊtɐ",ex:"Meine [Großmutter] kocht gut.",exv:"Bà tôi nấu ăn ngon.",n:"Từ ghép → trọng âm ở <b>Groß</b>. <b>ß</b> sau o dài."},
 {t:"n",a:"der",w:"Mann",pl:"die Männer",m:"đàn ông; chồng",i:"man",ex:"Ihr [Mann] kommt aus Deutschland.",exv:"Chồng cô ấy đến từ Đức.",n:"<b>nn</b> đôi → <b>a</b> ngắn. Đừng nhầm với <i>man</i> (người ta)."},
 {t:"adj",w:"verheiratet",m:"đã kết hôn",i:"fɛɐ̯ˈhaɪ̯ʁaːtət",ex:"Sind Sie [verheiratet]?",exv:"Ông/bà đã kết hôn chưa?",n:"Tiền tố <b>ver-</b> không nhận trọng âm, đọc [fɛɐ̯] “phe-a”. Nhấn <b>hei</b>."},
 {t:"n",a:"das",w:"Baby",pl:"die Babys",m:"em bé",i:"ˈbeːbi",ex:"Das [Baby] schläft.",exv:"Em bé đang ngủ.",n:"Từ mượn tiếng Anh, đọc “bê-bi”. Số nhiều thêm <b>-s</b> (không đổi y → ies)."},
 {t:"n",a:"der",w:"Onkel",pl:"die Onkel",m:"chú, bác, cậu",i:"ˈɔŋkl̩",ex:"Mein [Onkel] wohnt in Hamburg.",exv:"Chú tôi sống ở Hamburg.",n:"<b>nk</b> = [ŋk]; <b>-el</b> cuối đọc lướt [l̩]."},
 {t:"n",a:"die",w:"Tante",pl:"die Tanten",m:"cô, dì",i:"ˈtantə",ex:"Meine [Tante] hat zwei Kinder.",exv:"Cô tôi có hai đứa con.",n:"<b>-e</b> cuối đọc nhẹ [ə]."}
]},
{ id:"do-an", title:"Đồ ăn & đồ uống", level:"A1", words:[
 {t:"n",a:"das",w:"Brot",pl:"die Brote",m:"bánh mì (ổ lớn)",i:"bʁoːt",ex:"Ich kaufe ein [Brot].",exv:"Tôi mua một ổ bánh mì.",n:"<b>o</b> dài, môi tròn chặt; <b>t</b> cuối bật rõ."},
 {t:"n",a:"das",w:"Brötchen",pl:"die Brötchen",m:"bánh mì nhỏ",i:"ˈbʁøːtçən",ex:"Zum Frühstück esse ich ein [Brötchen].",exv:"Bữa sáng tôi ăn một ổ bánh mì nhỏ.",n:"Đuôi <b>-chen</b>: luôn là <b>das</b>, số nhiều không đổi; ch xì nhẹ [ç]. <b>ö</b> dài."},
 {t:"n",a:"der",w:"Käse",pl:"die Käse",m:"phô mai",i:"ˈkɛːzə",ex:"Der [Käse] ist sehr lecker.",exv:"Phô mai rất ngon.",n:"<b>s</b> giữa hai nguyên âm đọc rung [z]: “kê-zơ”."},
 {t:"n",a:"die",w:"Milch",pl:"—",m:"sữa",i:"mɪlç",ex:"Ich trinke [Milch] mit Honig.",exv:"Tôi uống sữa với mật ong.",n:"<b>ch</b> sau <b>l</b> đọc xì [ç], không phải “kh”."},
 {t:"n",a:"das",w:"Wasser",pl:"die Wasser",m:"nước",i:"ˈvasɐ",ex:"Ein Glas [Wasser], bitte.",exv:"Cho một cốc nước.",n:"<b>W</b> = “v”; <b>ss</b> đôi → a ngắn; <b>-er</b> = [ɐ]."},
 {t:"n",a:"der",w:"Kaffee",pl:"die Kaffees",m:"cà phê",i:"ˈkafe",ex:"Trinkst du gern [Kaffee]?",exv:"Bạn có thích uống cà phê không?",n:"Ở Đức thường nhấn <b>đầu</b> “<b>KA</b>-phê”; ở Áo nhấn cuối “ka-<b>PHÊ</b>”."},
 {t:"n",a:"der",w:"Tee",pl:"die Tees",m:"trà",i:"teː",ex:"Möchtest du einen [Tee]?",exv:"Bạn có muốn uống trà không?",n:"<b>ee</b> = “ê” dài, không biến thành “ây”."},
 {t:"n",a:"das",w:"Ei",pl:"die Eier",m:"quả trứng",i:"aɪ̯",ex:"Ich esse ein [Ei] zum Frühstück.",exv:"Tôi ăn một quả trứng vào bữa sáng.",n:"<b>ei</b> = “ai”. Số nhiều Eier đọc “ai-ơ” [ˈaɪ̯ɐ]."},
 {t:"n",a:"der",w:"Apfel",pl:"die Äpfel",m:"quả táo",i:"ˈapfl̩",ex:"Der [Apfel] ist rot.",exv:"Quả táo màu đỏ.",n:"<b>pf</b> đọc liền một hơi “p+ph”. Số nhiều đổi a → <b>ä</b>."},
 {t:"n",a:"die",w:"Kartoffel",pl:"die Kartoffeln",m:"khoai tây",i:"kaʁˈtɔfl̩",ex:"Wir essen [Kartoffeln] mit Fleisch.",exv:"Chúng tôi ăn khoai tây với thịt.",n:"Ngoại lệ trọng âm: nhấn <b>tof</b> (không phải âm đầu)."},
 {t:"n",a:"das",w:"Fleisch",pl:"—",m:"thịt",i:"flaɪ̯ʃ",ex:"Ich esse kein [Fleisch].",exv:"Tôi không ăn thịt.",n:"<b>ei</b> = “ai”; <b>sch</b> cuối kéo nhẹ."},
 {t:"n",a:"der",w:"Fisch",pl:"die Fische",m:"cá",i:"fɪʃ",ex:"Der [Fisch] ist frisch.",exv:"Cá còn tươi.",n:"<b>i</b> ngắn [ɪ] vì sau nó là <b>sch</b>."},
 {t:"n",a:"das",w:"Gemüse",pl:"—",m:"rau",i:"ɡəˈmyːzə",ex:"[Gemüse] ist gesund.",exv:"Rau tốt cho sức khoẻ.",n:"Tiền tố <b>ge-</b> không nhận trọng âm → nhấn <b>mü</b>. <b>s</b> giữa nguyên âm = [z]."},
 {t:"n",a:"das",w:"Obst",pl:"—",m:"trái cây",i:"oːpst",ex:"Ich kaufe [Obst] auf dem Markt.",exv:"Tôi mua trái cây ở chợ.",n:"Bất quy tắc: <b>o</b> đọc <b>dài</b> dù có nhiều phụ âm theo sau. <b>b</b> trước s đọc [p]."},
 {t:"v",w:"essen",f:"isst – hat gegessen",m:"ăn",i:"ˈɛsn̩",ex:"Was [isst] du gern?",exv:"Bạn thích ăn gì?",n:"Đổi e → i ở du/er: du isst, er isst. Phân từ gegessen có thêm <b>-g-</b>."},
 {t:"v",w:"trinken",f:"trinkt – hat getrunken",m:"uống",i:"ˈtʁɪŋkn̩",ex:"Ich [trinke] gern Tee.",exv:"Tôi thích uống trà.",n:"<b>nk</b> = [ŋk]. Bất quy tắc: trinken – trank – getrunken."},
 {t:"n",a:"das",w:"Frühstück",pl:"die Frühstücke",m:"bữa sáng",i:"ˈfʁyːʃtʏk",ex:"Das [Frühstück] ist um sieben Uhr.",exv:"Bữa sáng lúc bảy giờ.",n:"Từ ghép (früh + Stück) → nhấn <b>Früh</b>. <b>st</b> đầu âm tiết = “scht”."},
 {t:"adj",w:"lecker",m:"ngon",i:"ˈlɛkɐ",ex:"Die Suppe ist sehr [lecker].",exv:"Món súp rất ngon.",n:"<b>ck</b> = k, làm e trước nó ngắn. <b>-er</b> = [ɐ]."}
]},
{ id:"nha-o", title:"Nhà ở", level:"A1", words:[
 {t:"n",a:"die",w:"Wohnung",pl:"die Wohnungen",m:"căn hộ",i:"ˈvoːnʊŋ",ex:"Meine [Wohnung] ist klein.",exv:"Căn hộ của tôi nhỏ.",n:"Đuôi <b>-ung</b> → luôn là <b>die</b>, đọc [ʊŋ]. <b>h</b> câm → o dài."},
 {t:"n",a:"das",w:"Haus",pl:"die Häuser",m:"ngôi nhà",i:"haʊ̯s",ex:"Das [Haus] hat einen Garten.",exv:"Ngôi nhà có một khu vườn.",n:"<b>au</b> = “ao”. Số nhiều Häuser: <b>äu</b> = “oi”, s thành [z]."},
 {t:"n",a:"das",w:"Zimmer",pl:"die Zimmer",m:"căn phòng",i:"ˈtsɪmɐ",ex:"Die Wohnung hat drei [Zimmer].",exv:"Căn hộ có ba phòng.",n:"<b>Z</b> = “ts”. Số nhiều không đổi."},
 {t:"n",a:"die",w:"Küche",pl:"die Küchen",m:"nhà bếp",i:"ˈkʏçə",ex:"Wir kochen in der [Küche].",exv:"Chúng tôi nấu ăn trong bếp.",n:"<b>ü</b> ngắn + <b>ch</b> xì [ç]. Đừng nhầm với <i>Kuchen</i> (bánh ngọt, ch khàn)."},
 {t:"n",a:"das",w:"Bad",pl:"die Bäder",m:"phòng tắm",i:"baːt",ex:"Das [Bad] ist neben der Küche.",exv:"Phòng tắm ở cạnh bếp.",n:"<b>a</b> dài; <b>d</b> cuối = [t]: “bát”."},
 {t:"n",a:"das",w:"Schlafzimmer",pl:"die Schlafzimmer",m:"phòng ngủ",i:"ˈʃlaːfˌtsɪmɐ",ex:"Das [Schlafzimmer] ist sehr hell.",exv:"Phòng ngủ rất sáng.",n:"Từ ghép → nhấn <b>Schlaf</b>; giống theo từ cuối (das Zimmer)."},
 {t:"n",a:"der",w:"Tisch",pl:"die Tische",m:"cái bàn",i:"tɪʃ",ex:"Das Buch liegt auf dem [Tisch].",exv:"Quyển sách nằm trên bàn.",n:"<b>i</b> ngắn trước <b>sch</b>."},
 {t:"n",a:"der",w:"Stuhl",pl:"die Stühle",m:"cái ghế",i:"ʃtuːl",ex:"Der [Stuhl] ist bequem.",exv:"Cái ghế thoải mái.",n:"<b>St</b> đầu từ = “scht”. <b>h</b> câm → u dài."},
 {t:"n",a:"das",w:"Bett",pl:"die Betten",m:"cái giường",i:"bɛt",ex:"Ich gehe ins [Bett].",exv:"Tôi đi ngủ.",n:"<b>tt</b> đôi → e ngắn, mở [ɛ]."},
 {t:"n",a:"das",w:"Fenster",pl:"die Fenster",m:"cửa sổ",i:"ˈfɛnstɐ",ex:"Mach bitte das [Fenster] auf!",exv:"Mở cửa sổ giúp nhé!",n:"<b>st</b> giữa từ đọc “s-t”. <b>-er</b> = [ɐ]."},
 {t:"n",a:"die",w:"Tür",pl:"die Türen",m:"cửa ra vào",i:"tyːɐ̯",ex:"Die [Tür] ist offen.",exv:"Cửa đang mở.",n:"<b>ü</b> dài; <b>r</b> cuối gần như “a” nhẹ [ɐ̯]."},
 {t:"n",a:"die",w:"Miete",pl:"die Mieten",m:"tiền thuê nhà",i:"ˈmiːtə",ex:"Die [Miete] ist zu hoch.",exv:"Tiền thuê nhà quá cao.",n:"<b>ie</b> = “i” dài."},
 {t:"adj",w:"groß",m:"to, lớn",i:"ɡʁoːs",ex:"Das Zimmer ist [groß].",exv:"Căn phòng rộng.",n:"<b>ß</b> chỉ đứng sau nguyên âm dài hoặc nguyên âm đôi."},
 {t:"adj",w:"klein",m:"nhỏ",i:"klaɪ̯n",ex:"Die Küche ist [klein].",exv:"Nhà bếp nhỏ.",n:"<b>ei</b> = “ai”."},
 {t:"adj",w:"dunkel",m:"tối",i:"ˈdʊŋkl̩",ex:"Das Bad ist ein bisschen [dunkel].",exv:"Phòng tắm hơi tối.",n:"<b>nk</b> = [ŋk]; <b>-el</b> đọc lướt [l̩]."},
 {t:"n",a:"der",w:"Balkon",pl:"die Balkone",m:"ban công",i:"balˈkɔŋ",ex:"Wir frühstücken auf dem [Balkon].",exv:"Chúng tôi ăn sáng ngoài ban công.",n:"Từ mượn tiếng Pháp → nhấn cuối “bal-<b>KONG</b>” (miền Nam Đức: “bal-<b>KÔN</b>”)."}
]},
{ id:"thoi-gian", title:"Thời gian", level:"A1", words:[
 {t:"n",a:"der",w:"Tag",pl:"die Tage",m:"ngày",i:"taːk",ex:"Ich lerne jeden [Tag] Deutsch.",exv:"Tôi học tiếng Đức mỗi ngày.",n:"<b>g</b> cuối đọc [k]: “tak”. Số nhiều Tage lại đọc [g]."},
 {t:"n",a:"die",w:"Woche",pl:"die Wochen",m:"tuần",i:"ˈvɔxə",ex:"Die [Woche] hat sieben Tage.",exv:"Một tuần có bảy ngày.",n:"<b>W</b> = “v”; <b>ch</b> sau o = khàn [x]."},
 {t:"n",a:"der",w:"Monat",pl:"die Monate",m:"tháng",i:"ˈmoːnat",ex:"Ich bin seit einem [Monat] hier.",exv:"Tôi ở đây được một tháng.",n:"Nhấn <b>âm đầu</b> “<b>MÔ</b>-nat”; a cuối ngắn."},
 {t:"n",a:"das",w:"Jahr",pl:"die Jahre",m:"năm",i:"jaːɐ̯",ex:"Ich bin 25 [Jahre] alt.",exv:"Tôi 25 tuổi.",n:"<b>J</b> = [j] “d/y” mềm; <b>ahr</b>: a dài, r cuối gần như mất."},
 {t:"adv",w:"heute",m:"hôm nay",i:"ˈhɔʏ̯tə",ex:"[Heute] ist Montag.",exv:"Hôm nay là thứ Hai.",n:"<b>eu</b> = “oi”: “hoi-tơ”."},
 {t:"adv",w:"morgen",m:"ngày mai",i:"ˈmɔʁɡn̩",ex:"[Morgen] habe ich frei.",exv:"Ngày mai tôi được nghỉ.",n:"Viết thường = <b>ngày mai</b>; <i>der Morgen</i> viết hoa = buổi sáng. <b>-en</b> đọc lướt."},
 {t:"adv",w:"gestern",m:"hôm qua",i:"ˈɡɛstɐn",ex:"[Gestern] war ich im Kino.",exv:"Hôm qua tôi đi xem phim.",n:"<b>g</b> luôn cứng “g”, không thành “gi”. <b>-ern</b> = [ɐn]."},
 {t:"n",a:"die",w:"Uhr",pl:"die Uhren",m:"đồng hồ; giờ (lúc)",i:"uːɐ̯",ex:"Es ist acht [Uhr].",exv:"Bây giờ là tám giờ.",n:"<b>h</b> câm → u dài. Dùng “Uhr” khi nói giờ đồng hồ."},
 {t:"n",a:"die",w:"Stunde",pl:"die Stunden",m:"tiếng (60 phút)",i:"ˈʃtʊndə",ex:"Der Kurs dauert zwei [Stunden].",exv:"Khoá học kéo dài hai tiếng.",n:"<b>St</b> đầu từ = “scht”. Khác <i>Uhr</i>: Stunde = khoảng thời gian."},
 {t:"n",a:"die",w:"Minute",pl:"die Minuten",m:"phút",i:"miˈnuːtə",ex:"Warte bitte fünf [Minuten].",exv:"Đợi năm phút nhé.",n:"Từ gốc Latin → nhấn <b>nu</b>: “mi-<b>NU</b>-tơ”."},
 {t:"n",a:"der",w:"Montag",pl:"die Montage",m:"thứ Hai",i:"ˈmoːnˌtaːk",ex:"Am [Montag] arbeite ich.",exv:"Thứ Hai tôi đi làm.",n:"Các thứ trong tuần đều là <b>der</b>, nhấn âm đầu; <b>g</b> cuối = [k]."},
 {t:"n",a:"der",w:"Mittwoch",pl:"die Mittwoche",m:"thứ Tư",i:"ˈmɪtˌvɔx",ex:"Am [Mittwoch] habe ich Deutschkurs.",exv:"Thứ Tư tôi có lớp tiếng Đức.",n:"Ngày duy nhất không có đuôi <b>-tag</b>; <b>ch</b> cuối = khàn [x]."},
 {t:"n",a:"das",w:"Wochenende",pl:"die Wochenenden",m:"cuối tuần",i:"ˈvɔxn̩ˌʔɛndə",ex:"Schönes [Wochenende]!",exv:"Chúc cuối tuần vui vẻ!",n:"Từ ghép → nhấn <b>Wo</b>; ngắt nhẹ [ʔ] trước <b>Ende</b>."},
 {t:"adj",w:"spät",m:"muộn",i:"ʃpɛːt",ex:"Es ist schon [spät].",exv:"Đã muộn rồi.",n:"<b>sp</b> đầu = “schp”; <b>ä</b> dài [ɛː]."},
 {t:"adj",w:"früh",m:"sớm",i:"fʁyː",ex:"Ich stehe [früh] auf.",exv:"Tôi dậy sớm.",n:"<b>h</b> câm → ü dài."},
 {t:"n",a:"der",w:"Geburtstag",pl:"die Geburtstage",m:"sinh nhật",i:"ɡəˈbuːɐ̯tsˌtaːk",ex:"Alles Gute zum [Geburtstag]!",exv:"Chúc mừng sinh nhật!",n:"<b>ge-</b> không nhận trọng âm → nhấn <b>burts</b>. <b>g</b> cuối = [k]."}
]},
{ id:"dong-tu", title:"Động từ thường dùng", level:"A1", words:[
 {t:"v",w:"sein",f:"ich bin, du bist, er ist – ist gewesen",m:"thì, là, ở",i:"zaɪ̯n",ex:"Ich [bin] Studentin.",exv:"Tôi là sinh viên.",n:"Bất quy tắc hoàn toàn — học thuộc cả bảng. <b>s</b> đầu = [z]."},
 {t:"v",w:"haben",f:"hat – hat gehabt",m:"có",i:"ˈhaːbn̩",ex:"Ich [habe] keine Zeit.",exv:"Tôi không có thời gian.",n:"Bất quy tắc: du <b>hast</b>, er <b>hat</b> (mất b)."},
 {t:"v",w:"machen",f:"macht – hat gemacht",m:"làm",i:"ˈmaxn̩",ex:"Was [machst] du heute?",exv:"Hôm nay bạn làm gì?",n:"<b>ch</b> sau a = khàn [x]. Động từ có quy tắc."},
 {t:"v",w:"gehen",f:"geht – ist gegangen",m:"đi (bộ)",i:"ˈɡeːən",ex:"Wir [gehen] ins Kino.",exv:"Chúng tôi đi xem phim.",n:"<b>h</b> câm: “ghê-ơn”. Phân từ bất quy tắc <b>gegangen</b>, dùng với <b>sein</b>."},
 {t:"v",w:"fahren",f:"fährt – ist gefahren",m:"đi (bằng xe), lái",i:"ˈfaːʁən",ex:"Ich [fahre] mit dem Bus.",exv:"Tôi đi bằng xe buýt.",n:"du/er đổi a → <b>ä</b>: du fährst, er fährt."},
 {t:"v",w:"lernen",f:"lernt – hat gelernt",m:"học",i:"ˈlɛʁnən",ex:"Ich [lerne] Deutsch.",exv:"Tôi học tiếng Đức.",n:"<b>er</b> trước phụ âm: r rất nhẹ."},
 {t:"v",w:"arbeiten",f:"arbeitet – hat gearbeitet",m:"làm việc",i:"ˈaʁbaɪ̯tn̩",ex:"Er [arbeitet] in einem Hotel.",exv:"Anh ấy làm việc ở khách sạn.",n:"Gốc kết thúc bằng <b>t</b> → thêm <b>-e-</b>: du arbeit<b>e</b>st, er arbeit<b>e</b>t."},
 {t:"v",w:"sehen",f:"sieht – hat gesehen",m:"nhìn, xem",i:"ˈzeːən",ex:"[Siehst] du das Auto?",exv:"Bạn có thấy chiếc xe không?",n:"<b>h</b> câm. du/er đổi e → <b>ie</b>: du siehst, er sieht."},
 {t:"v",w:"lesen",f:"liest – hat gelesen",m:"đọc",i:"ˈleːzn̩",ex:"Sie [liest] ein Buch.",exv:"Cô ấy đọc một quyển sách.",n:"<b>s</b> giữa nguyên âm = [z]. du/er: <b>liest</b>."},
 {t:"v",w:"schreiben",f:"schreibt – hat geschrieben",m:"viết",i:"ˈʃʁaɪ̯bn̩",ex:"Ich [schreibe] eine E-Mail.",exv:"Tôi viết một email.",n:"<b>ei</b> = “ai”, nhưng phân từ <b>geschrieben</b> có <b>ie</b> = “i” dài."},
 {t:"v",w:"verstehen",f:"versteht – hat verstanden",m:"hiểu",i:"fɛɐ̯ˈʃteːən",ex:"Ich [verstehe] das nicht.",exv:"Tôi không hiểu điều đó.",n:"<b>ver-</b> không nhận trọng âm (nhấn <b>ste</b>) và phân từ <b>không thêm ge-</b>."},
 {t:"v",w:"aufstehen",f:"steht auf – ist aufgestanden",m:"thức dậy",i:"ˈaʊ̯fˌʃteːən",ex:"Ich [stehe] um sieben Uhr [auf].",exv:"Tôi dậy lúc bảy giờ.",n:"Động từ <b>tách được</b>: nhấn <b>auf</b>, và auf chạy xuống cuối câu."},
 {t:"v",w:"kaufen",f:"kauft – hat gekauft",m:"mua",i:"ˈkaʊ̯fn̩",ex:"Ich [kaufe] Brot.",exv:"Tôi mua bánh mì.",n:"<b>au</b> = “ao”. Động từ có quy tắc."},
 {t:"v",w:"können",f:"kann – hat gekonnt",m:"có thể",i:"ˈkœnən",ex:"[Kannst] du schwimmen?",exv:"Bạn biết bơi không?",n:"<b>ö</b> ngắn [œ]. Động từ khuyết thiếu: ich/er <b>kann</b> (không có -t)."},
 {t:"v",w:"möchten",f:"möchte – (không có)",m:"muốn (lịch sự)",i:"ˈmœçtn̩",ex:"Ich [möchte] einen Kaffee.",exv:"Tôi muốn một ly cà phê.",n:"<b>ö</b> ngắn + <b>ch</b> xì [ç]. ich/er đều là <b>möchte</b>."},
 {t:"v",w:"studieren",f:"studiert – hat studiert",m:"học đại học",i:"ʃtuˈdiːʁən",ex:"Sie [studiert] Medizin.",exv:"Cô ấy học y.",n:"Đuôi <b>-ieren</b> → nhấn <b>ie</b>; phân từ <b>không thêm ge-</b>. <b>st</b> đầu = “scht”."}
]},
{ id:"thanh-pho", title:"Thành phố & đi lại", level:"A1", words:[
 {t:"n",a:"der",w:"Bahnhof",pl:"die Bahnhöfe",m:"nhà ga",i:"ˈbaːnhoːf",ex:"Wo ist der [Bahnhof]?",exv:"Nhà ga ở đâu?",n:"Từ ghép (Bahn + Hof) → nhấn <b>Bahn</b>. <b>h</b> trong Bahn câm, h trong hof đọc."},
 {t:"n",a:"der",w:"Zug",pl:"die Züge",m:"tàu hoả",i:"tsuːk",ex:"Der [Zug] kommt um zehn Uhr.",exv:"Tàu đến lúc mười giờ.",n:"<b>Z</b> = “ts”; <b>g</b> cuối = [k]: “tsuk”."},
 {t:"n",a:"der",w:"Bus",pl:"die Busse",m:"xe buýt",i:"bʊs",ex:"Ich nehme den [Bus].",exv:"Tôi đi xe buýt.",n:"<b>u</b> ngắn; số nhiều gấp đôi s: Bu<b>ss</b>e."},
 {t:"n",a:"das",w:"Auto",pl:"die Autos",m:"ô tô",i:"ˈaʊ̯to",ex:"Das [Auto] ist neu.",exv:"Chiếc xe còn mới.",n:"<b>au</b> = “ao”, nhấn âm đầu. Số nhiều thêm <b>-s</b>."},
 {t:"n",a:"die",w:"Straße",pl:"die Straßen",m:"đường phố",i:"ˈʃtʁaːsə",ex:"Ich wohne in dieser [Straße].",exv:"Tôi sống ở con đường này.",n:"<b>St</b> = “scht”; <b>ß</b> sau a dài."},
 {t:"n",a:"die",w:"Stadt",pl:"die Städte",m:"thành phố",i:"ʃtat",ex:"Berlin ist eine große [Stadt].",exv:"Berlin là một thành phố lớn.",n:"<b>dt</b> đọc [t]; <b>a</b> ngắn: “schtat”."},
 {t:"n",a:"der",w:"Supermarkt",pl:"die Supermärkte",m:"siêu thị",i:"ˈzuːpɐˌmaʁkt",ex:"Ich gehe in den [Supermarkt].",exv:"Tôi đi siêu thị.",n:"Từ ghép → nhấn <b>Su</b>. <b>S</b> đầu = [z] “du-pơ”."},
 {t:"n",a:"die",w:"Apotheke",pl:"die Apotheken",m:"hiệu thuốc",i:"apoˈteːkə",ex:"Die [Apotheke] ist um die Ecke.",exv:"Hiệu thuốc ở góc phố.",n:"<b>th</b> = [t] (không phải “th” tiếng Anh). Nhấn <b>te</b>."},
 {t:"n",a:"das",w:"Restaurant",pl:"die Restaurants",m:"nhà hàng",i:"ʁɛstoˈʁɑ̃ː",ex:"Wir essen heute im [Restaurant].",exv:"Hôm nay chúng tôi ăn ở nhà hàng.",n:"Từ mượn tiếng Pháp: <b>au</b> = “ô”, nhấn cuối, <b>-ant</b> đọc mũi [ɑ̃ː], không đọc t."},
 {t:"n",a:"die",w:"Bank",pl:"die Banken",m:"ngân hàng",i:"baŋk",ex:"Ich muss zur [Bank].",exv:"Tôi phải ra ngân hàng.",n:"<b>nk</b> = [ŋk]. Nghĩa “ghế dài” thì số nhiều là <i>die Bänke</i>."},
 {t:"adv",w:"links",m:"bên trái",i:"lɪŋks",ex:"Gehen Sie hier [links].",exv:"Ông/bà rẽ trái ở đây.",n:"<b>nk</b> = [ŋk] “ling-ks”."},
 {t:"adv",w:"rechts",m:"bên phải",i:"ʁɛçts",ex:"Die Bank ist [rechts].",exv:"Ngân hàng ở bên phải.",n:"<b>ch</b> sau e = xì [ç], rồi “ts”."},
 {t:"adv",w:"geradeaus",m:"thẳng phía trước",i:"ɡəʁaːdəˈʔaʊ̯s",ex:"Gehen Sie immer [geradeaus].",exv:"Ông/bà cứ đi thẳng.",n:"Bất ngờ: trọng âm ở cuối <b>aus</b>, ngắt nhẹ [ʔ] trước nó."},
 {t:"n",a:"die",w:"Haltestelle",pl:"die Haltestellen",m:"trạm dừng (xe buýt)",i:"ˈhaltəˌʃtɛlə",ex:"Die [Haltestelle] ist dort.",exv:"Trạm xe buýt ở đằng kia.",n:"Từ ghép (halten + Stelle) → nhấn <b>Hal</b>; giống theo từ cuối (die Stelle)."},
 {t:"n",a:"das",w:"Ticket",pl:"die Tickets",m:"vé",i:"ˈtɪkət",ex:"Ich brauche ein [Ticket].",exv:"Tôi cần một vé.",n:"Từ mượn tiếng Anh, đọc gần như tiếng Anh. Còn có <i>die Fahrkarte</i>."},
 {t:"n",a:"der",w:"Flughafen",pl:"die Flughäfen",m:"sân bay",i:"ˈfluːkˌhaːfn̩",ex:"Wie komme ich zum [Flughafen]?",exv:"Làm sao để tôi đến sân bay?",n:"Từ ghép → nhấn <b>Flug</b>; <b>g</b> cuối âm tiết = [k]."},
 {t:"n",a:"die",w:"Polizei",pl:"—",m:"cảnh sát",i:"poliˈtsaɪ̯",ex:"Rufen Sie die [Polizei]!",exv:"Hãy gọi cảnh sát!",n:"Đuôi <b>-ei</b> luôn nhận trọng âm; <b>z</b> = “ts”."}
]}
];

/* Bảng chia động từ: p = hiện tại (ich; du; er/sie/es; wir; ihr; sie/Sie), prt = quá khứ Präteritum (ngôi er),
   pf = hoàn thành Perfekt (ngôi er). Mỗi dạng "từ|IPA"; dấu * = dạng bất quy tắc (đổi gốc/khác quy tắc). */
window.VERB_CONJ = {
 "heißen":{p:"heiße|ˈhaɪ̯sə;heißt|haɪ̯st;heißt|haɪ̯st;heißen|ˈhaɪ̯sn̩;heißt|haɪ̯st;heißen|ˈhaɪ̯sn̩",prt:"*hieß|hiːs",pf:"hat geheißen|hat ɡəˈhaɪ̯sn̩"},
 "kommen":{p:"komme|ˈkɔmə;kommst|kɔmst;kommt|kɔmt;kommen|ˈkɔmən;kommt|kɔmt;kommen|ˈkɔmən",prt:"*kam|kaːm",pf:"ist gekommen|ɪst ɡəˈkɔmən"},
 "wohnen":{p:"wohne|ˈvoːnə;wohnst|voːnst;wohnt|voːnt;wohnen|ˈvoːnən;wohnt|voːnt;wohnen|ˈvoːnən",prt:"wohnte|ˈvoːntə",pf:"hat gewohnt|hat ɡəˈvoːnt"},
 "sprechen":{p:"spreche|ˈʃpʁɛçə;*sprichst|ʃpʁɪçst;*spricht|ʃpʁɪçt;sprechen|ˈʃpʁɛçn̩;sprecht|ʃpʁɛçt;sprechen|ˈʃpʁɛçn̩",prt:"*sprach|ʃpʁaːx",pf:"hat gesprochen|hat ɡəˈʃpʁɔxn̩"},
 "essen":{p:"esse|ˈɛsə;*isst|ɪst;*isst|ɪst;essen|ˈɛsn̩;esst|ɛst;essen|ˈɛsn̩",prt:"*aß|aːs",pf:"hat gegessen|hat ɡəˈɡɛsn̩"},
 "trinken":{p:"trinke|ˈtʁɪŋkə;trinkst|tʁɪŋkst;trinkt|tʁɪŋkt;trinken|ˈtʁɪŋkn̩;trinkt|tʁɪŋkt;trinken|ˈtʁɪŋkn̩",prt:"*trank|tʁaŋk",pf:"hat getrunken|hat ɡəˈtʁʊŋkn̩"},
 "sein":{p:"*bin|bɪn;*bist|bɪst;*ist|ɪst;*sind|zɪnt;*seid|zaɪ̯t;*sind|zɪnt",prt:"*war|vaːɐ̯",pf:"ist gewesen|ɪst ɡəˈveːzn̩"},
 "haben":{p:"habe|ˈhaːbə;*hast|hast;*hat|hat;haben|ˈhaːbn̩;habt|haːpt;haben|ˈhaːbn̩",prt:"*hatte|ˈhatə",pf:"hat gehabt|hat ɡəˈhaːpt"},
 "machen":{p:"mache|ˈmaxə;machst|maxst;macht|maxt;machen|ˈmaxn̩;macht|maxt;machen|ˈmaxn̩",prt:"machte|ˈmaxtə",pf:"hat gemacht|hat ɡəˈmaxt"},
 "gehen":{p:"gehe|ˈɡeːə;gehst|ɡeːst;geht|ɡeːt;gehen|ˈɡeːən;geht|ɡeːt;gehen|ˈɡeːən",prt:"*ging|ɡɪŋ",pf:"ist gegangen|ɪst ɡəˈɡaŋən"},
 "fahren":{p:"fahre|ˈfaːʁə;*fährst|fɛːɐ̯st;*fährt|fɛːɐ̯t;fahren|ˈfaːʁən;fahrt|faːɐ̯t;fahren|ˈfaːʁən",prt:"*fuhr|fuːɐ̯",pf:"ist gefahren|ɪst ɡəˈfaːʁən"},
 "lernen":{p:"lerne|ˈlɛʁnə;lernst|lɛʁnst;lernt|lɛʁnt;lernen|ˈlɛʁnən;lernt|lɛʁnt;lernen|ˈlɛʁnən",prt:"lernte|ˈlɛʁntə",pf:"hat gelernt|hat ɡəˈlɛʁnt"},
 "arbeiten":{p:"arbeite|ˈaʁbaɪ̯tə;arbeitest|ˈaʁbaɪ̯təst;arbeitet|ˈaʁbaɪ̯tət;arbeiten|ˈaʁbaɪ̯tn̩;arbeitet|ˈaʁbaɪ̯tət;arbeiten|ˈaʁbaɪ̯tn̩",prt:"arbeitete|ˈaʁbaɪ̯tətə",pf:"hat gearbeitet|hat ɡəˈʔaʁbaɪ̯tət"},
 "sehen":{p:"sehe|ˈzeːə;*siehst|ziːst;*sieht|ziːt;sehen|ˈzeːən;seht|zeːt;sehen|ˈzeːən",prt:"*sah|zaː",pf:"hat gesehen|hat ɡəˈzeːən"},
 "lesen":{p:"lese|ˈleːzə;*liest|liːst;*liest|liːst;lesen|ˈleːzn̩;lest|leːst;lesen|ˈleːzn̩",prt:"*las|laːs",pf:"hat gelesen|hat ɡəˈleːzn̩"},
 "schreiben":{p:"schreibe|ˈʃʁaɪ̯bə;schreibst|ʃʁaɪ̯pst;schreibt|ʃʁaɪ̯pt;schreiben|ˈʃʁaɪ̯bn̩;schreibt|ʃʁaɪ̯pt;schreiben|ˈʃʁaɪ̯bn̩",prt:"*schrieb|ʃʁiːp",pf:"hat geschrieben|hat ɡəˈʃʁiːbn̩"},
 "verstehen":{p:"verstehe|fɛɐ̯ˈʃteːə;verstehst|fɛɐ̯ˈʃteːst;versteht|fɛɐ̯ˈʃteːt;verstehen|fɛɐ̯ˈʃteːən;versteht|fɛɐ̯ˈʃteːt;verstehen|fɛɐ̯ˈʃteːən",prt:"*verstand|fɛɐ̯ˈʃtant",pf:"hat verstanden|hat fɛɐ̯ˈʃtandn̩"},
 "aufstehen":{p:"stehe auf|ˈʃteːə ˈʔaʊ̯f;stehst auf|ˈʃteːst ˈʔaʊ̯f;steht auf|ˈʃteːt ˈʔaʊ̯f;stehen auf|ˈʃteːən ˈʔaʊ̯f;steht auf|ˈʃteːt ˈʔaʊ̯f;stehen auf|ˈʃteːən ˈʔaʊ̯f",prt:"*stand auf|ˈʃtant ˈʔaʊ̯f",pf:"ist aufgestanden|ɪst ˈʔaʊ̯fɡəˌʃtandn̩"},
 "kaufen":{p:"kaufe|ˈkaʊ̯fə;kaufst|kaʊ̯fst;kauft|kaʊ̯ft;kaufen|ˈkaʊ̯fn̩;kauft|kaʊ̯ft;kaufen|ˈkaʊ̯fn̩",prt:"kaufte|ˈkaʊ̯ftə",pf:"hat gekauft|hat ɡəˈkaʊ̯ft"},
 "können":{p:"*kann|kan;*kannst|kanst;*kann|kan;können|ˈkœnən;könnt|kœnt;können|ˈkœnən",prt:"*konnte|ˈkɔntə",pf:"hat gekonnt|hat ɡəˈkɔnt"},
 "möchten":{p:"möchte|ˈmœçtə;möchtest|ˈmœçtəst;*möchte|ˈmœçtə;möchten|ˈmœçtn̩;möchtet|ˈmœçtət;möchten|ˈmœçtn̩",prt:"*wollte (dùng wollen)|ˈvɔltə",pf:"hat gewollt (dùng wollen)|hat ɡəˈvɔlt"},
 "studieren":{p:"studiere|ʃtuˈdiːʁə;studierst|ʃtuˈdiːɐ̯st;studiert|ʃtuˈdiːɐ̯t;studieren|ʃtuˈdiːʁən;studiert|ʃtuˈdiːɐ̯t;studieren|ʃtuˈdiːʁən",prt:"studierte|ʃtuˈdiːɐ̯tə",pf:"hat studiert|hat ʃtuˈdiːɐ̯t"}
};

/* Tách âm tiết: "chính tả|chính tả=IPA|IPA". Âm tiết có ˈ là âm tiết nhấn.
   "#id" sau âm tiết = chọn sẵn âm chính để giải thích (khi tự nhận diện không đủ). */
window.VOCAB_SYL = {
 "Hallo":"Hal|lo=ha|ˈloː","Tschüss":"Tschüss=tʃʏs","Guten Tag":"Gu|ten Tag=ˈɡuː|tn̩ ˈtaːk","danke":"dan|ke=ˈdaŋ|kə","bitte":"bit|te=ˈbɪ|tə",
 "Entschuldigung":"Ent|schul|di|gung=ɛnt|ˈʃʊl|dɪ|ɡʊŋ","heißen":"hei|ßen=ˈhaɪ̯|sn̩","kommen":"kom|men=ˈkɔ|mən","wohnen":"woh|nen=ˈvoː|nən",
 "sprechen":"spre|chen=ˈʃpʁɛ|çn̩","Name":"Na|me=ˈnaː|mə","Land":"Land=lant","Sprache":"Spra|che=ˈʃpʁaː|xə","ja":"ja=jaː","nein":"nein=naɪ̯n",
 "Herr":"Herr=hɛʁ","Frau":"Frau=fʁaʊ̯",
 "Familie":"Fa|mi|lie=fa|ˈmiː|li̯ə","Mutter":"Mut|ter=ˈmʊ|tɐ","Vater":"Va|ter=ˈfaː|tɐ","Eltern":"El|tern=ˈɛl|tɐn","Bruder":"Bru|der=ˈbʁuː|dɐ",
 "Schwester":"Schwes|ter=ˈʃvɛs|tɐ","Kind":"Kind=kɪnt","Sohn":"Sohn=zoːn","Tochter":"Toch|ter=ˈtɔx|tɐ","Großvater":"Groß|va|ter=ˈɡʁoːs|ˌfaː|tɐ",
 "Großmutter":"Groß|mut|ter=ˈɡʁoːs|ˌmʊ|tɐ","Mann":"Mann=man","verheiratet":"ver|hei|ra|tet=fɛɐ̯|ˈhaɪ̯|ʁaː|tət","Baby":"Ba|by=ˈbeː|bi",
 "Onkel":"On|kel=ˈɔŋ|kl̩","Tante":"Tan|te=ˈtan|tə",
 "Brot":"Brot=bʁoːt","Brötchen":"Bröt|chen=ˈbʁøːt|çən","Käse":"Kä|se=ˈkɛː|zə","Milch":"Milch=mɪlç","Wasser":"Was|ser=ˈva|sɐ","Kaffee":"Kaf|fee=ˈka|fe",
 "Tee":"Tee=teː","Ei":"Ei=aɪ̯","Apfel":"Ap|fel#pf=ˈap|fl̩","Kartoffel":"Kar|tof|fel=kaʁ|ˈtɔ|fl̩","Fleisch":"Fleisch=flaɪ̯ʃ","Fisch":"Fisch=fɪʃ",
 "Gemüse":"Ge|mü|se=ɡə|ˈmyː|zə","Obst":"Obst#o-long=oːpst","essen":"es|sen=ˈɛ|sn̩","trinken":"trin|ken=ˈtʁɪŋ|kn̩","Frühstück":"Früh|stück=ˈfʁyː|ʃtʏk",
 "lecker":"le|cker=ˈlɛ|kɐ",
 "Wohnung":"Woh|nung=ˈvoː|nʊŋ","Haus":"Haus=haʊ̯s","Zimmer":"Zim|mer=ˈtsɪ|mɐ","Küche":"Kü|che=ˈkʏ|çə","Bad":"Bad=baːt",
 "Schlafzimmer":"Schlaf|zim|mer=ˈʃlaːf|ˌtsɪ|mɐ","Tisch":"Tisch=tɪʃ","Stuhl":"Stuhl=ʃtuːl","Bett":"Bett=bɛt","Fenster":"Fens|ter=ˈfɛns|tɐ",
 "Tür":"Tür=tyːɐ̯","Miete":"Mie|te=ˈmiː|tə","groß":"groß=ɡʁoːs","klein":"klein=klaɪ̯n","dunkel":"dun|kel=ˈdʊŋ|kl̩","Balkon":"Bal|kon=bal|ˈkɔŋ",
 "Tag":"Tag=taːk","Woche":"Wo|che=ˈvɔ|xə","Monat":"Mo|nat=ˈmoː|nat","Jahr":"Jahr=jaːɐ̯","heute":"heu|te=ˈhɔʏ̯|tə","morgen":"mor|gen=ˈmɔʁ|ɡn̩",
 "gestern":"ges|tern=ˈɡɛs|tɐn","Uhr":"Uhr=uːɐ̯","Stunde":"Stun|de=ˈʃtʊn|də","Minute":"Mi|nu|te=mi|ˈnuː|tə","Montag":"Mon|tag=ˈmoːn|ˌtaːk",
 "Mittwoch":"Mitt|woch=ˈmɪt|ˌvɔx","Wochenende":"Wo|chen|en|de=ˈvɔ|xn̩|ˌʔɛn|də","spät":"spät=ʃpɛːt","früh":"früh=fʁyː",
 "Geburtstag":"Ge|burts|tag=ɡə|ˈbuːɐ̯ts|ˌtaːk",
 "sein":"sein=zaɪ̯n","haben":"ha|ben=ˈhaː|bn̩","machen":"ma|chen=ˈma|xn̩","gehen":"ge|hen=ˈɡeː|ən","fahren":"fah|ren=ˈfaː|ʁən",
 "lernen":"ler|nen=ˈlɛʁ|nən","arbeiten":"ar|bei|ten=ˈaʁ|baɪ̯|tn̩","sehen":"se|hen=ˈzeː|ən","lesen":"le|sen=ˈleː|zn̩","schreiben":"schrei|ben=ˈʃʁaɪ̯|bn̩",
 "verstehen":"ver|ste|hen=fɛɐ̯|ˈʃteː|ən","aufstehen":"auf|ste|hen=ˈaʊ̯f|ˌʃteː|ən","kaufen":"kau|fen=ˈkaʊ̯|fn̩","können":"kön|nen=ˈkœ|nən",
 "möchten":"möch|ten=ˈmœç|tn̩","studieren":"stu|die|ren=ʃtu|ˈdiː|ʁən",
 "Bahnhof":"Bahn|hof=ˈbaːn|hoːf","Zug":"Zug=tsuːk","Bus":"Bus=bʊs","Auto":"Au|to=ˈaʊ̯|to","Straße":"Stra|ße=ˈʃtʁaː|sə","Stadt":"Stadt=ʃtat",
 "Supermarkt":"Su|per|markt=ˈzuː|pɐ|ˌmaʁkt","Apotheke":"A|po|the|ke=a|po|ˈteː|kə","Restaurant":"Res|tau|rant=ʁɛs|to|ˈʁɑ̃ː","Bank":"Bank=baŋk",
 "links":"links=lɪŋks","rechts":"rechts=ʁɛçts","geradeaus":"ge|ra|de|aus=ɡə|ʁaː|də|ˈʔaʊ̯s","Haltestelle":"Hal|te|stel|le=ˈhal|tə|ˌʃtɛ|lə",
 "Ticket":"Ti|cket=ˈtɪ|kət","Flughafen":"Flug|ha|fen=ˈfluːk|ˌhaː|fn̩","Polizei":"Po|li|zei=po|li|ˈtsaɪ̯"
};

/* Từ mượn: [nguồn gốc, ghi chú] */
window.VOCAB_ORIGIN = {
 "Tschüss":["Tây Ban Nha / Pháp","Bắt nguồn từ lời chào “adiós”/“adieu”, đi vào tiếng Đức qua phương ngữ miền Bắc."],
 "Familie":["Latin","Từ “familia”: giữ trọng âm ở “mi”, đuôi -ie đọc “i-ơ”."],
 "Baby":["Anh","Đọc gần như tiếng Anh “bê-bi”; số nhiều chỉ thêm -s (die Babys)."],
 "Kaffee":["Pháp (gốc Ả Rập)","Qua tiếng Pháp “café”; ở Đức hay nhấn âm đầu, ở Áo nhấn âm cuối."],
 "Kartoffel":["Ý","Từ “tartufolo” (nấm truýp) – vì vậy trọng âm không rơi vào âm đầu."],
 "Balkon":["Pháp","Từ “balcon”: nhấn âm cuối, -on đọc gần như “ong”."],
 "Minute":["Latin","Từ “minuta”: nhấn âm “nu”."],
 "Restaurant":["Pháp","Giữ cách đọc Pháp: au = “ô”, -ant đọc mũi và không đọc t; nhấn âm cuối."],
 "Ticket":["Anh","Đọc như tiếng Anh. Từ Đức tương đương: die Fahrkarte."],
 "Apotheke":["Hy Lạp","Từ “apothḗkē” (kho chứa): th đọc t, nhấn “te”."],
 "Polizei":["Hy Lạp / Latin","Từ “politeia” (việc quản lý thành phố); đuôi -ei nhận trọng âm."],
 "Auto":["Hy Lạp + Latin","Rút gọn từ “das Automobil” (tự + chuyển động) – vì thế là das."],
 "Bus":["Latin","Rút gọn từ “Omnibus” (“cho tất cả mọi người”)."],
 "Bank":["Ý","Nghĩa “ngân hàng” đến từ tiếng Ý “banca” (bàn của người đổi tiền)."],
 "studieren":["Latin","Từ “studere”; mọi động từ -ieren đều nhấn “ie” và không thêm ge- ở Perfekt."],
 "Supermarkt":["Latin + Đức","“super” (Latin: trên, hơn) + der Markt."]
};

/* Mẹo nhớ giống riêng cho từng danh từ (ngoài các quy tắc đuôi từ tự động) */
window.GENDER_TRICK = (()=>{
 const t={},put=(ws,txt)=>ws.forEach(w=>t[w]=txt);
 put(["Vater","Bruder","Sohn","Mann","Herr","Onkel"],"Người giống đực → <b>der</b> (der Vater, der Bruder, der Onkel…).");
 put(["Mutter","Schwester","Tochter","Frau","Tante"],"Người giống cái → <b>die</b> (die Mutter, die Tante…). Ngoại lệ đáng nhớ: das Mädchen (vì đuôi -chen).");
 put(["Brötchen","Mädchen"],"Đuôi <b>-chen</b> (nghĩa “nhỏ”) luôn là <b>das</b> – kể cả das Mädchen (cô gái): đuôi từ quyết định giống, không phải giới tính.");
 t["Großvater"]="Từ ghép lấy giống của <b>từ cuối</b>: der Vater → <b>der</b> Großvater.";
 t["Großmutter"]="Từ ghép lấy giống của <b>từ cuối</b>: die Mutter → <b>die</b> Großmutter.";
 t["Schlafzimmer"]="Từ ghép lấy giống của từ cuối: das Zimmer → <b>das</b> Schlafzimmer.";
 t["Wochenende"]="Từ ghép lấy giống của từ cuối: das Ende → <b>das</b> Wochenende (dù die Woche).";
 t["Frühstück"]="Từ ghép lấy giống của từ cuối: das Stück → <b>das</b> Frühstück.";
 t["Bahnhof"]="Từ ghép lấy giống của từ cuối: der Hof → <b>der</b> Bahnhof (dù die Bahn).";
 t["Supermarkt"]="Từ ghép lấy giống của từ cuối: der Markt → <b>der</b> Supermarkt.";
 t["Flughafen"]="Từ ghép lấy giống của từ cuối: der Hafen → <b>der</b> Flughafen.";
 t["Haltestelle"]="Từ ghép lấy giống của từ cuối: die Stelle → <b>die</b> Haltestelle.";
 t["Geburtstag"]="Từ ghép lấy giống của từ cuối: der Tag → <b>der</b> Geburtstag (dù die Geburt).";
 put(["Montag","Mittwoch","Tag","Monat"],"Ngày, thứ, tháng, mùa đều là <b>der</b> (der Montag, der Januar, der Sommer).");
 t["Käse"]="Ngoại lệ: phần lớn danh từ đuôi -e là die, nhưng <b>der</b> Käse thì không.";
 t["Name"]="Ngoại lệ đuôi -e: <b>der</b> Name (cùng nhóm với der Junge, der Kunde).";
 put(["Kind","Baby"],"Trẻ con và con non thường là <b>das</b>: das Kind, das Baby.");
 t["Auto"]="<b>das</b> Auto vì là dạng rút gọn của das Automobil.";
 put(["Bus","Zug"],"Nhiều phương tiện giao thông là <b>der</b>: der Bus, der Zug, der Wagen – nhưng das Auto, die Bahn.");
 put(["Kaffee","Tee"],"Đồ uống nóng thường là <b>der</b>: der Kaffee, der Tee (nhưng die Milch, das Wasser).");
 t["Gemüse"]="Danh từ tập hợp có tiền tố <b>Ge-</b> thường là <b>das</b>: das Gemüse, das Gebäck, das Geschirr.";
 t["Apfel"]="Nhiều danh từ đuôi <b>-el</b> là <b>der</b>: der Apfel, der Löffel, der Onkel – ngoại lệ: die Kartoffel.";
 t["Kartoffel"]="Ngoại lệ của mẹo “đuôi -el thường là der”: <b>die</b> Kartoffel.";
 put(["Fenster","Zimmer","Wasser"],"Đuôi -er thường là der (der Lehrer), nhưng cần nhớ riêng: <b>das</b> Fenster, <b>das</b> Zimmer, <b>das</b> Wasser.");
 t["Eltern"]="Danh từ chỉ có số nhiều luôn dùng <b>die</b>: die Eltern, die Leute, die Ferien.";
 put(["Restaurant","Ticket"],"Nhiều từ mượn tiếng Pháp/Anh là <b>das</b>: das Restaurant, das Hotel, das Café, das Ticket.");
 return t;
})();

/* Kho âm: t = tên âm, d = mẹo đọc, h = phần chữ cần tô trong ví dụ, ex = [từ, nghĩa] */
window.SOUND_BANK = {
 "chen":{t:"đuôi -chen [çən]",d:"Đuôi -chen nghĩa là “nhỏ, đáng yêu”: ch xì nhẹ, -en lướt. Danh từ đuôi -chen luôn là das.",h:"chen$",ex:[["Brötchen","bánh mì nhỏ"],["Mädchen","cô gái"],["Kätzchen","mèo con"],["Häuschen","ngôi nhà nhỏ"],["Würstchen","xúc xích nhỏ"],["Hähnchen","thịt gà"],["Märchen","truyện cổ tích"]]},
 "nasal":{t:"âm mũi [ɑ̃]",d:"Âm mũi kiểu Pháp: đọc gần “ăng” nhưng không bật rõ “ng”.",h:"an|en|on",ex:[["Restaurant","nhà hàng"],["Croissant","bánh sừng bò"],["Orange","quả cam"],["Chance","cơ hội"],["Engagement","sự cam kết"]]},
 "tsch":{t:"tsch [tʃ]",d:"Như “ch” tiếng Việt nhưng bật mạnh, môi hơi chu.",h:"tsch",ex:[["tschüss","tạm biệt"],["Deutsch","tiếng Đức"],["Deutschland","nước Đức"],["Entschuldigung","xin lỗi"],["Quatsch","vớ vẩn"],["klatschen","vỗ tay"]]},
 "oe-long":{t:"ö dài [øː]",d:"Lưỡi đặt như “ê”, môi tròn như “ô”, kéo dài.",h:"ö",ex:[["schön","đẹp"],["hören","nghe"],["böse","xấu, giận"],["Öl","dầu"],["Größe","cỡ"],["Brötchen","bánh mì nhỏ"],["Löwe","sư tử"]]},
 "oe-short":{t:"ö ngắn [œ]",d:"Như ö dài nhưng ngắn, miệng mở hơn.",h:"ö",ex:[["können","có thể"],["möchte","muốn"],["öffnen","mở"],["zwölf","mười hai"],["Wörter","các từ"],["Töchter","các con gái"],["Köln","thành phố Köln"]]},
 "ue-long":{t:"ü dài [yː]",d:"Lưỡi đọc “i”, môi chu tròn như “u”, kéo dài.",h:"ü",ex:[["müde","mệt"],["Tür","cửa"],["grün","xanh lá"],["über","trên, về"],["früh","sớm"],["Bücher","những quyển sách"],["Gemüse","rau"]]},
 "ue-short":{t:"ü ngắn [ʏ]",d:"Như ü dài nhưng ngắn và lỏng hơn.",h:"ü",ex:[["fünf","năm"],["Küche","bếp"],["Glück","may mắn"],["Brücke","cây cầu"],["Stück","miếng"],["müssen","phải"],["dünn","mỏng"]]},
 "ch-front":{t:"ch xì [ç]",d:"Sau i, e, ä, ö, ü, ei, eu, l, n, r: lưỡi gần vòm miệng, thổi hơi xì như mèo phì. Không đọc “k” hay “kh”.",h:"ch",ex:[["ich","tôi"],["nicht","không"],["Milch","sữa"],["sprechen","nói"],["Licht","ánh sáng"],["rechts","bên phải"],["Küche","bếp"]]},
 "ch-back":{t:"ch khàn [x]",d:"Sau a, o, u, au: khàn ở cổ họng, gần như “kh” tiếng Việt.",h:"ch",ex:[["acht","tám"],["Buch","sách"],["Nacht","đêm"],["Woche","tuần"],["kochen","nấu ăn"],["Kuchen","bánh ngọt"],["machen","làm"]]},
 "st-sp":{t:"st-/sp- đầu âm tiết [ʃt]/[ʃp]",d:"Đứng đầu từ (hoặc đầu một phần của từ ghép): st đọc “scht”, sp đọc “schp”.",h:"s[tp]",ex:[["Straße","con đường"],["Stadt","thành phố"],["Stuhl","cái ghế"],["sprechen","nói"],["spät","muộn"],["Sport","thể thao"],["Stunde","tiếng đồng hồ"]]},
 "sch":{t:"sch [ʃ]",d:"Như “s” uốn lưỡi, môi chu ra trước.",h:"sch",ex:[["schön","đẹp"],["Tisch","cái bàn"],["Fisch","cá"],["Schule","trường học"],["Tasche","cái túi"],["schreiben","viết"],["Fleisch","thịt"]]},
 "er-prefix":{t:"ver-/er- [fɛɐ̯]/[ɛɐ̯]",d:"Tiền tố không bao giờ nhận trọng âm; r gần như thành “a” nhẹ; v đọc “ph”.",h:"^v?er",ex:[["verstehen","hiểu"],["verkaufen","bán"],["vergessen","quên"],["erklären","giải thích"],["erzählen","kể"],["verheiratet","đã kết hôn"]]},
 "s-voiced":{t:"s trước nguyên âm [z]",d:"s đứng trước nguyên âm đọc rung (như “d” nhẹ/“z”): Sohn đọc “zôn”.",h:"s(?=[aeiouäöü])",ex:[["Sohn","con trai"],["sehen","nhìn"],["sieben","bảy"],["Sonne","mặt trời"],["lesen","đọc"],["Käse","phô mai"],["Saft","nước ép"]]},
 "v-f":{t:"v đọc [f]",d:"Trong từ gốc Đức, v đọc như “ph”.",h:"v",ex:[["Vater","bố"],["vier","bốn"],["viel","nhiều"],["Vogel","con chim"],["von","từ, của"],["voll","đầy"]]},
 "w-v":{t:"w đọc [v]",d:"w tiếng Đức đọc như “v” tiếng Việt.",h:"w",ex:[["Wasser","nước"],["Wein","rượu vang"],["wohnen","sống"],["Woche","tuần"],["wir","chúng tôi"],["was","cái gì"],["wie","như thế nào"]]},
 "z":{t:"z / tz [ts]",d:"Đọc “ts” liền một hơi.",h:"tz|z",ex:[["zehn","mười"],["Zeit","thời gian"],["Zimmer","căn phòng"],["Zug","tàu hoả"],["zwei","hai"],["Katze","con mèo"],["jetzt","bây giờ"]]},
 "ss":{t:"ß [s]",d:"ß = “s” mạnh, không rung; chỉ đứng sau nguyên âm dài hoặc nguyên âm đôi.",h:"ß",ex:[["Straße","con đường"],["groß","to"],["heißen","tên là"],["Fuß","bàn chân"],["weiß","màu trắng"],["Größe","cỡ"],["süß","ngọt"]]},
 "th":{t:"th đọc [t]",d:"th trong tiếng Đức đọc như “t”, không phải “th” tiếng Anh.",h:"th",ex:[["Apotheke","hiệu thuốc"],["Theater","nhà hát"],["Thema","chủ đề"],["Mathe","môn toán"],["Bibliothek","thư viện"]]},
 "pf":{t:"pf [pf]",d:"Bật “p” rồi nối ngay sang “ph” trong một hơi.",h:"pf",ex:[["Apfel","quả táo"],["Pferd","con ngựa"],["Kopf","cái đầu"],["Pfeffer","hạt tiêu"],["Topf","cái nồi"],["Pflanze","cây trồng"]]},
 "j":{t:"j [j]",d:"j đọc như “d” mềm/“y” (gần “gi” miền Nam), không phải “j” tiếng Anh.",h:"^j",ex:[["ja","vâng"],["Jahr","năm"],["jung","trẻ"],["jetzt","bây giờ"],["Juli","tháng Bảy"],["Junge","cậu bé"]]},
 "g-hard":{t:"g luôn cứng [ɡ]",d:"g trước e, i vẫn đọc “g” cứng, không thành “gi”.",h:"^g",ex:[["gehen","đi"],["gestern","hôm qua"],["geben","cho"],["Geld","tiền"],["gern","thích"],["Gemüse","rau"],["Gitarre","đàn ghi-ta"]]},
 "devoice":{t:"b/d/g cuối → [p]/[t]/[k]",d:"Ở cuối từ hoặc cuối âm tiết, b/d/g đọc thành p/t/k (không rung).",h:"[bdg]$",ex:[["Tag","ngày"],["Kind","đứa trẻ"],["Land","đất nước"],["Zug","tàu hoả"],["Bad","phòng tắm"],["gelb","màu vàng"],["Hund","con chó"]]},
 "glottal":{t:"ngắt hơi [ʔ]",d:"Trước nguyên âm đầu một phần từ: ngắt nhẹ hơi rồi mới đọc, không nối âm như tiếng Anh.",h:"",ex:[["Wochenende","cuối tuần"],["geradeaus","thẳng phía trước"],["beantworten","trả lời"],["Abendessen","bữa tối"],["erinnern","nhớ lại"]]},
 "ie-schwa":{t:"-ie cuối [i̯ə]",d:"Trong từ gốc Latin, -ie cuối đọc lướt “i-ơ”, không kéo dài “i”.",h:"ie(?=n?$)",ex:[["Familie","gia đình"],["Ferien","kỳ nghỉ"],["Linie","tuyến, đường kẻ"],["Lilie","hoa loa kèn"],["Italien","nước Ý"]]},
 "r-uvular":{t:"r họng [ʁ]",d:"Rung nhẹ ở cuống họng (như súc miệng), không rung đầu lưỡi.",h:"r",ex:[["rot","màu đỏ"],["Brot","bánh mì"],["Frau","phụ nữ"],["drei","ba"],["richtig","đúng"],["grün","xanh lá"],["Reis","gạo"]]},
 "r-vocalic":{t:"r sau nguyên âm dài [ɐ̯]",d:"r sau nguyên âm dài gần như thành “a” nhẹ: Bier đọc “bi-a”.",h:"h?r$",ex:[["Bier","bia"],["Tür","cửa"],["Uhr","đồng hồ"],["Jahr","năm"],["hier","ở đây"],["vier","bốn"],["mehr","nhiều hơn"]]},
 "er-end":{t:"-er cuối [ɐ]",d:"-er cuối từ đọc như “a” nhẹ, không cuốn r.",h:"er(?=n?$)",ex:[["Vater","bố"],["Mutter","mẹ"],["Wasser","nước"],["Fenster","cửa sổ"],["Zimmer","căn phòng"],["aber","nhưng"],["Lehrer","giáo viên"]]},
 "r-coda":{t:"r sau nguyên âm ngắn",d:"r đứng sau nguyên âm ngắn đọc rất nhẹ ở họng, có khi gần như mất.",h:"r",ex:[["Herr","ông"],["morgen","ngày mai"],["lernen","học"],["Garten","khu vườn"],["Karte","thẻ, vé"],["Wort","từ"],["arbeiten","làm việc"]]},
 "ei":{t:"ei [aɪ̯]",d:"ei luôn đọc “ai” (ngược với tiếng Anh).",h:"ei",ex:[["Wein","rượu vang"],["nein","không"],["klein","nhỏ"],["Zeit","thời gian"],["heißen","tên là"],["drei","ba"],["arbeiten","làm việc"]]},
 "eu":{t:"eu / äu [ɔʏ̯]",d:"eu và äu đều đọc “oi”.",h:"eu|äu",ex:[["heute","hôm nay"],["Deutsch","tiếng Đức"],["neu","mới"],["Freund","người bạn"],["Häuser","những ngôi nhà"],["teuer","đắt"],["Leute","mọi người"]]},
 "au":{t:"au [aʊ̯]",d:"au đọc “ao”.",h:"au",ex:[["Haus","ngôi nhà"],["Frau","phụ nữ"],["auf","trên"],["kaufen","mua"],["Auto","ô tô"],["Baum","cái cây"],["laut","to tiếng"]]},
 "ng":{t:"ng / nk [ŋ]",d:"ng là một âm “ng” (không bật g); nk = “ng” + “k”.",h:"ng|nk",ex:[["danke","cảm ơn"],["lang","dài"],["jung","trẻ"],["Wohnung","căn hộ"],["trinken","uống"],["links","bên trái"],["Bank","ngân hàng"]]},
 "ae-long":{t:"ä dài [ɛː]",d:"ä dài đọc gần “e” mở, kéo dài.",h:"ä",ex:[["Mädchen","cô gái"],["Käse","phô mai"],["spät","muộn"],["erklären","giải thích"],["Zähne","răng"],["Bär","con gấu"],["Väter","những người bố"]]},
 "h-silent":{t:"h câm sau nguyên âm",d:"h đứng sau nguyên âm thì câm, chỉ báo nguyên âm đó đọc dài.",h:"[aeiouäöü]h",ex:[["Sohn","con trai"],["wohnen","sống"],["Uhr","đồng hồ"],["Stuhl","cái ghế"],["früh","sớm"],["Jahr","năm"],["zehn","mười"]]},
 "a-long":{t:"a dài [aː]",d:"a kéo dài (thường khi sau nó chỉ có 1 phụ âm, hoặc viết aa/ah).",h:"aa|ah|a",ex:[["Vater","bố"],["Name","tên"],["Tag","ngày"],["fahren","đi (bằng xe)"],["haben","có"],["Abend","buổi tối"],["Bahn","tàu, đường ray"]]},
 "a-short":{t:"a ngắn [a]",d:"a ngắn, gọn (thường khi sau nó có 2 phụ âm).",h:"a",ex:[["acht","tám"],["Mann","đàn ông"],["Wasser","nước"],["Land","đất nước"],["Stadt","thành phố"],["alt","già, cũ"],["Apfel","quả táo"]]},
 "e-long":{t:"e dài [eː]",d:"“ê” dài, căng – không biến thành “ây”.",h:"ee|eh|e",ex:[["zehn","mười"],["Tee","trà"],["gehen","đi"],["sehen","nhìn"],["lesen","đọc"],["See","cái hồ"],["Weg","con đường"]]},
 "e-short":{t:"e / ä ngắn [ɛ]",d:"“e” ngắn, miệng mở hơn “ê”.",h:"e|ä",ex:[["Bett","cái giường"],["essen","ăn"],["Fenster","cửa sổ"],["Mensch","con người"],["Herr","ông"],["Geld","tiền"],["Hände","đôi tay"]]},
 "i-long":{t:"i dài [iː] (ie, ih, i)",d:"“i” dài, căng, miệng hơi cười. ie luôn là i dài.",h:"ie|ih|i",ex:[["Bier","bia"],["Miete","tiền thuê nhà"],["vier","bốn"],["sieben","bảy"],["Liebe","tình yêu"],["hier","ở đây"],["Kino","rạp chiếu phim"]]},
 "i-short":{t:"i ngắn [ɪ]",d:"“i” ngắn, lỏng hơn, hơi ngả về “ê”.",h:"i",ex:[["ich","tôi"],["Milch","sữa"],["Fisch","cá"],["Tisch","cái bàn"],["Kind","đứa trẻ"],["bitte","làm ơn"],["Zimmer","căn phòng"]]},
 "o-long":{t:"o dài [oː]",d:"“ô” dài, môi tròn chặt.",h:"oo|oh|o",ex:[["rot","màu đỏ"],["Brot","bánh mì"],["Sohn","con trai"],["wohnen","sống"],["groß","to"],["Montag","thứ Hai"],["Zoo","sở thú"]]},
 "o-short":{t:"o ngắn [ɔ]",d:"“o” ngắn, miệng mở.",h:"o",ex:[["kommen","đến"],["Woche","tuần"],["Tochter","con gái"],["morgen","ngày mai"],["Sonne","mặt trời"],["oft","thường"],["Post","bưu điện"]]},
 "u-long":{t:"u dài [uː]",d:"“u” dài, môi chu.",h:"uh|u",ex:[["Kuchen","bánh ngọt"],["Bruder","anh/em trai"],["Stuhl","cái ghế"],["Zug","tàu hoả"],["Uhr","đồng hồ"],["gut","tốt"],["Buch","sách"]]},
 "u-short":{t:"u ngắn [ʊ]",d:"“u” ngắn, lỏng hơn.",h:"u",ex:[["Mutter","mẹ"],["Bus","xe buýt"],["Stunde","tiếng đồng hồ"],["und","và"],["Hund","con chó"],["dunkel","tối"],["Butter","bơ"]]},
 "en":{t:"-en cuối [ən] / [n̩]",d:"-en cuối đọc lướt “(ơ)n”, nhiều khi gần như chỉ còn “n”.",h:"en$",ex:[["Kuchen","bánh ngọt"],["essen","ăn"],["trinken","uống"],["kaufen","mua"],["haben","có"],["Garten","khu vườn"],["morgen","ngày mai"]]},
 "el":{t:"-el cuối [l̩]",d:"-el cuối đọc lướt, gần như chỉ còn “l”.",h:"el$",ex:[["Apfel","quả táo"],["Onkel","chú, bác"],["dunkel","tối"],["Kartoffel","khoai tây"],["Vogel","con chim"],["Löffel","cái thìa"],["Mantel","áo khoác"]]},
 "schwa":{t:"e không nhấn [ə]",d:"e ở âm tiết không nhấn đọc “ơ” rất nhẹ – không bỏ đi, cũng không đọc “ê”.",h:"e$",ex:[["bitte","làm ơn"],["danke","cảm ơn"],["Küche","bếp"],["müde","mệt"],["heute","hôm nay"],["Tante","cô, dì"],["Name","tên"]]}
};
