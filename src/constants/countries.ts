export interface CountryDetail {
  name: string
  description: string
  details: string[]
  visaInfo: {
    processingTime: string
    validity: string
    requirements: string[]
  }
  highlights: string[]
  imageUrl: string
}

export const COUNTRIES: CountryDetail[] = [
  {
    name: "Amerika Birleşik Devletleri",
    description: "Özgürlükler ülkesi Amerika, dünyanın en büyük ekonomisine sahip ve kültürel çeşitliliği ile ünlü bir ülkedir.",
    details: [
      "50 eyaletten oluşan federal bir cumhuriyet",
      "Dünyanın en büyük ekonomisi",
      "Silicon Valley ve teknoloji merkezi",
      "Hollywood ve eğlence endüstrisi"
    ],
    visaInfo: {
      processingTime: "3-5 iş günü",
      validity: "10 yıl",
      requirements: [
        "Geçerli pasaport",
        "DS-160 formu",
        "Fotoğraf",
        "Vize ücreti ödemesi",
        "Mülakat randevusu"
      ]
    },
    highlights: [
      "New York'ta Times Square",
      "Las Vegas'ta eğlence",
      "Grand Canyon'da doğal güzellikler",
      "Disney World'de eğlence"
    ],
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "İngiltere",
    description: "Kraliyet ailesi, tarihi yapıları ve köklü eğitim sistemi ile dünyanın en prestijli ülkelerinden biri.",
    details: [
      "Köklü tarihi ve kültürel miras",
      "Dünyanın en iyi üniversiteleri",
      "Zengin sanat ve müzik sahnesi",
      "Çok kültürlü toplum yapısı"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "6 ay - 10 yıl",
      requirements: [
        "Geçerli pasaport",
        "Online vize başvurusu",
        "Biyometrik veri",
        "Finansal belgeler",
        "İş/öğrenci belgeleri"
      ]
    },
    highlights: [
      "Londra'da Big Ben",
      "Oxford ve Cambridge üniversiteleri",
      "Stonehenge'de tarih",
      "Lake District'te doğa"
    ],
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Almanya",
    description: "Avrupa'nın ekonomik gücü, mühendislik ve teknoloji alanında dünya lideri.",
    details: [
      "Güçlü ekonomi ve sanayi",
      "Yüksek yaşam kalitesi",
      "Ücretsiz üniversite eğitimi",
      "Gelişmiş sosyal sistem"
    ],
    visaInfo: {
      processingTime: "10-15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Berlin Duvarı kalıntıları",
      "Oktoberfest festivali",
      "Neuschwanstein Şatosu",
      "Karayip Denizi sahilleri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Fransa",
    description: "Sanat, moda ve gastronominin başkenti, romantik şehirleri ve zengin kültürel mirası ile ünlü.",
    details: [
      "Dünya moda başkenti",
      "Zengin sanat koleksiyonları",
      "Eşsiz mutfak kültürü",
      "Tarihi şatolar ve müzeler"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Uçuş rezervasyonu",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Eyfel Kulesi",
      "Louvre Müzesi",
      "Versay Sarayı",
      "Riviera sahilleri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
  },
  {
    name: "İtalya",
    description: "Rönesans'ın beşiği, tarihi şehirleri ve dünya çapında ünlü mutfağı ile büyüleyici bir ülke.",
    details: [
      "Zengin tarihi miras",
      "Dünya çapında ünlü mutfak",
      "Sanat ve mimari hazineler",
      "Akdeniz iklimi"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Roma Kolezyum",
      "Venedik kanalları",
      "Floransa katedrali",
      "Toskana şarapları"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "İspanya",
    description: "Flamenko, tapas ve güneşin ülkesi, canlı kültürü ve tarihi zenginlikleri ile dikkat çekiyor.",
    details: [
      "Zengin kültürel miras",
      "Canlı gece hayatı",
      "Akdeniz mutfağı",
      "Güzel plajlar"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Sagrada Familia",
      "Alhambra Sarayı",
      "Madrid Prado Müzesi",
      "Barselona plajları"
    ],
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Hollanda",
    description: "Lale bahçeleri, yel değirmenleri ve özgürlükçü kültürü ile tanınan modern bir ülke.",
    details: [
      "Gelişmiş bisiklet kültürü",
      "Özgürlükçü toplum yapısı",
      "Zengin sanat koleksiyonları",
      "Modern şehir planlaması"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Amsterdam kanalları",
      "Keukenhof bahçeleri",
      "Van Gogh Müzesi",
      "Zaanse Schans değirmenleri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Belçika",
    description: "Çikolata, waffle ve biraları ile ünlü, tarihi şehirleri ve Avrupa Birliği'nin kalbi.",
    details: [
      "Zengin çikolata kültürü",
      "Tarihi şehir merkezleri",
      "AB kurumları",
      "Sanat ve mimari"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Grand Place",
      "Atomium",
      "Bruges kanalları",
      "Manneken Pis"
    ],
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Avusturya",
    description: "Alpler'in muhteşem manzaraları, klasik müzik ve tarihi şehirleri ile büyüleyici bir ülke.",
    details: [
      "Zengin müzik kültürü",
      "Alp dağları",
      "Tarihi şehirler",
      "Yüksek yaşam kalitesi"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Viyana Opera Binası",
      "Schönbrunn Sarayı",
      "Salzburg şehri",
      "Alp kayak merkezleri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516550135131-fe0b9b9b9b9b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "İsviçre",
    description: "Alpler'in kalbi, çikolata, saat ve bankacılık merkezi olarak dünya çapında ünlü.",
    details: [
      "Yüksek yaşam standardı",
      "Doğal güzellikler",
      "Finans merkezi",
      "Çok dilli toplum"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Matterhorn dağı",
      "Zürih gölü",
      "Lüksern gölü",
      "Cenevre çeşmesi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1530126483408-aa53355b1932?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Yunanistan",
    description: "Antik medeniyetlerin beşiği, muhteşem adaları ve zengin kültürel mirası ile dikkat çekiyor.",
    details: [
      "Antik Yunan medeniyeti",
      "Güzel adalar",
      "Akdeniz mutfağı",
      "Tarihi yapılar"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Akropol",
      "Santorini adası",
      "Mikonos adası",
      "Atina Akropolü"
    ],
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Portekiz",
    description: "Atlantik kıyıları, tarihi şehirleri ve lezzetli mutfağı ile keşfedilmeyi bekleyen bir ülke.",
    details: [
      "Tarihi liman şehirleri",
      "Porto şarabı",
      "Güzel plajlar",
      "Zengin kültür"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Lizbon tramvayları",
      "Porto köprüleri",
      "Algarve plajları",
      "Madeira adası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1555881300-74d7acac1df5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "İrlanda",
    description: "Yeşil vadileri, tarihi kaleleri ve canlı pub kültürü ile büyüleyici bir ada ülkesi.",
    details: [
      "Yeşil doğal manzaralar",
      "Zengin kültürel miras",
      "Teknoloji merkezi",
      "Canlı pub kültürü"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Cliffs of Moher",
      "Dublin şehri",
      "Ring of Kerry",
      "Blarney Kalesi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Norveç",
    description: "Fiyortları, Kuzey ışıkları ve doğal güzellikleri ile etkileyici bir İskandinav ülkesi.",
    details: [
      "Muhteşem fiyortlar",
      "Kuzey ışıkları",
      "Yüksek yaşam standardı",
      "Doğal güzellikler"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Geirangerfjord",
      "Tromsø şehri",
      "Bergen limanı",
      "Oslo operası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "İsveç",
    description: "Modern tasarım, yenilikçi teknoloji ve doğal güzellikleri ile öne çıkan bir İskandinav ülkesi.",
    details: [
      "Yenilikçi teknoloji",
      "Modern tasarım",
      "Doğal güzellikler",
      "Yüksek yaşam kalitesi"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Stockholm takımadaları",
      "Gamla Stan",
      "ABBA Müzesi",
      "Lapland doğası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Danimarka",
    description: "Hygge kültürü, modern tasarım ve mutlu insanları ile tanınan bir İskandinav ülkesi.",
    details: [
      "Hygge yaşam tarzı",
      "Modern tasarım",
      "Bisiklet kültürü",
      "Yüksek mutluluk endeksi"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Nyhavn limanı",
      "Tivoli bahçeleri",
      "Küçük Deniz Kızı",
      "Kopenhag şehri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Finlandiya",
    description: "Sauna kültürü, eğitim sistemi ve doğal güzellikleri ile öne çıkan bir İskandinav ülkesi.",
    details: [
      "Dünyanın en iyi eğitim sistemi",
      "Sauna kültürü",
      "Doğal güzellikler",
      "Yüksek teknoloji"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Helsinki katedrali",
      "Santa Claus köyü",
      "Lakeland bölgesi",
      "Aurora ışıkları"
    ],
    imageUrl: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Polonya",
    description: "Zengin tarihi, kültürel mirası ve uygun fiyatları ile keşfedilmeyi bekleyen bir ülke.",
    details: [
      "Tarihi şehirler",
      "Zengin kültür",
      "Uygun fiyatlar",
      "Güzel mimari"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Krakow şehri",
      "Auschwitz-Birkenau",
      "Warsaw şehri",
      "Wieliczka tuz madeni"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Çek Cumhuriyeti",
    description: "Tarihi şehirleri, biraları ve uygun fiyatları ile popüler bir turizm destinasyonu.",
    details: [
      "Tarihi merkezler",
      "Bira kültürü",
      "Uygun fiyatlar",
      "Güzel mimari"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Prag astronomik saat",
      "Karlovy Vary",
      "Český Krumlov",
      "Pilsen birası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Macaristan",
    description: "Termal hamamları, tarihi şehirleri ve zengin kültürel mirası ile dikkat çeken bir ülke.",
    details: [
      "Termal hamamlar",
      "Tarihi şehirler",
      "Zengin kültür",
      "Uygun fiyatlar"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Parlamento binası",
      "Széchenyi hamamı",
      "Buda Kalesi",
      "Tuna nehri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Slovakya",
    description: "Doğal güzellikleri, tarihi şehirleri ve uygun fiyatları ile keşfedilmeyi bekleyen bir ülke.",
    details: [
      "Tarihi şehirler",
      "Doğal güzellikler",
      "Uygun fiyatlar",
      "Zengin kültür"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün - 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Seyahat sigortası",
        "Konaklama belgeleri",
        "Finansal belgeler"
      ]
    },
    highlights: [
      "Bratislava şehri",
      "Tatra dağları",
      "Bojnice şatosu",
      "Devín kalesi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=2070&auto=format&fit=crop"
  }
] 