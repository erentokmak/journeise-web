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
    description: "Avrupa'nın en büyük ekonomisine sahip ülkesi, zengin kültürel mirası ve modern şehirleriyle dikkat çekiyor.",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    details: [
      "Avrupa'nın en büyük ekonomisi",
      "Zengin kültürel miras",
      "Modern şehirler",
      "Eğitim ve teknoloji merkezi"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Berlin Duvarı ve Brandenburg Kapısı",
      "Bavyera Alpleri ve Neuschwanstein Şatosu",
      "Köln Katedrali",
      "Münih Oktoberfest",
      "Romantik Yol"
    ]
  },
  {
    name: "Fransa",
    description: "Sanat, moda ve gastronominin merkezi olan Fransa, dünyanın en çok ziyaret edilen ülkelerinden biri.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    details: [
      "Sanat ve moda merkezi",
      "Zengin gastronomi kültürü",
      "Tarihi yapılar",
      "Şarap bölgeleri"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Eyfel Kulesi",
      "Louvre Müzesi",
      "Versay Sarayı",
      "Riviera Sahili",
      "Şarap Bölgeleri"
    ]
  },
  {
    name: "İtalya",
    description: "Antik Roma uygarlığından Rönesans'a, İtalya tarih ve sanatın merkezi olarak öne çıkıyor.",
    imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Antik Roma uygarlığı",
      "Rönesans sanatı",
      "Zengin mutfak kültürü",
      "Tarihi şehirler"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Roma Kolezyumu",
      "Venedik Kanalları",
      "Floransa Duomo",
      "Pisa Kulesi",
      "Toskana Şarap Bölgesi"
    ]
  },
  {
    name: "İspanya",
    description: "Akdeniz kıyısında yer alan İspanya, zengin kültürel mirası ve canlı gece hayatıyla ünlü.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Akdeniz kıyısı",
      "Zengin kültürel miras",
      "Canlı gece hayatı",
      "Flamenko dansı"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Sagrada Familia",
      "Alhambra Sarayı",
      "Madrid Prado Müzesi",
      "Barselona Plajları",
      "Flamenko Gösterileri"
    ]
  },
  {
    name: "Hollanda",
    description: "Lale tarlaları, yel değirmenleri ve bisiklet dostu şehirleriyle Hollanda, Avrupa'nın en yaşanabilir ülkelerinden biri.",
    imageUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Lale tarlaları",
      "Yel değirmenleri",
      "Bisiklet dostu şehirler",
      "Modern mimari"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Amsterdam Kanalları",
      "Keukenhof Lale Bahçeleri",
      "Zaanse Schans Yel Değirmenleri",
      "Van Gogh Müzesi",
      "Rijksmuseum"
    ]
  },
  {
    name: "Belçika",
    description: "Çikolata, waffle ve biralarıyla ünlü Belçika, Orta Çağ mimarisi ve modern sanatın buluştuğu bir ülke.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    details: [
      "Çikolata ve waffle",
      "Orta Çağ mimarisi",
      "Modern sanat",
      "Bira kültürü"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Grand Place",
      "Atomium",
      "Manneken Pis",
      "Brugge Tarihi Merkezi",
      "Belçika Çikolataları"
    ]
  },
  {
    name: "Avusturya",
    description: "Alpler'in muhteşem manzaraları, klasik müzik ve barok mimarisiyle Avusturya, Orta Avrupa'nın incisi.",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    details: [
      "Alpler manzaraları",
      "Klasik müzik",
      "Barok mimarisi",
      "Viyana kültürü"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Schönbrunn Sarayı",
      "Viyana Opera Binası",
      "Salzburg Tarihi Merkezi",
      "Hallstatt Gölü",
      "Viyana Kahve Kültürü"
    ]
  },
  {
    name: "İsviçre",
    description: "Alpler'in zirvelerinde yer alan İsviçre, doğal güzellikleri, çikolataları ve saatleriyle dünya çapında ünlü.",
    imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    details: [
      "Alpler manzaraları",
      "Çikolata üretimi",
      "Saat endüstrisi",
      "Doğal güzellikler"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Matterhorn Dağı",
      "Zürih Gölü",
      "Lüksern Gölü",
      "Bern Tarihi Merkezi",
      "İsviçre Çikolataları"
    ]
  },
  {
    name: "Yunanistan",
    description: "Antik uygarlıkların beşiği olan Yunanistan, muhteşem adaları ve tarihi zenginlikleriyle dikkat çekiyor.",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Antik uygarlıklar",
      "Muhteşem adalar",
      "Tarihi zenginlikler",
      "Akdeniz mutfağı"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Akropol",
      "Santorini Adası",
      "Mikonos Adası",
      "Atina Akropolü",
      "Yunan Mutfağı"
    ]
  },
  {
    name: "Portekiz",
    description: "Atlantik kıyısında yer alan Portekiz, tarihi şehirleri, plajları ve lezzetli mutfağıyla ziyaretçilerini büyülüyor.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    details: [
      "Atlantik kıyısı",
      "Tarihi şehirler",
      "Güzel plajlar",
      "Lezzetli mutfak"
    ],
    visaInfo: {
      processingTime: "5-15 iş günü",
      validity: "90 gün",
      requirements: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Fotoğraf",
        "Seyahat sigortası",
        "Uçak rezervasyonu",
        "Otel rezervasyonu",
        "Banko hesap dökümü"
      ]
    },
    highlights: [
      "Lizbon Tramvayları",
      "Porto Şarap Bölgesi",
      "Algarve Plajları",
      "Sintra Sarayları",
      "Portekiz Mutfağı"
    ]
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
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
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
    ]
  }
] 