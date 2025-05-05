export interface CountryDetail {
  name: string
  description: string
  details: string[]
  visaInfo: {
    processingTime: string
    validity: string
    requirements: string[]
    embassyWebsite?: string
  }
  highlights: string[]
  imageUrl: string
}

export const COUNTRIES: CountryDetail[] = [
  {
    name: "Afganistan",
    description: "Tarihi ve kültürel zenginlikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Kültürel miras",
      "Doğal güzellikler",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "2-4 hafta",
      validity: "30 gün (tek giriş)",
      requirements: [
        "Online form",
        "Gerekli belgeler",
        "Dubai'deki Afganistan Başkonsolosluğu başvurusu"
      ],
      embassyWebsite: "https://afghanconsulate.ae/"
    },
    highlights: [
      "Kabil şehri",
      "Bamiyan Vadisi",
      "Herat şehri",
      "Geleneksel pazarlar"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Arnavutluk",
    description: "Akdeniz kıyısında yer alan, tarihi ve doğal güzellikleriyle ünlü bir ülke.",
    details: [
      "Akdeniz kıyısı",
      "Tarihi şehirler",
      "Doğal güzellikler",
      "Uygun fiyatlar"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün (180 gün içinde)",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://punetejashtme.gov.al/en/regjimi-i-vizave-per-te-huajt/"
    },
    highlights: [
      "Tiran şehri",
      "Berat şehri",
      "Gjirokastër şehri",
      "Adriyatik sahilleri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cezayir",
    description: "Kuzey Afrika'da yer alan, zengin tarihi ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Sahra Çölü",
      "Tarihi şehirler",
      "Akdeniz kıyısı",
      "Kültürel miras"
    ],
    visaInfo: {
      processingTime: "2-3 hafta",
      validity: "30 gün (tek giriş)",
      requirements: [
        "Pasaport",
        "Davet mektubu",
        "Diğer belgeler",
        "Ankara'daki Büyükelçilik başvurusu"
      ],
      embassyWebsite: "https://embankara.mfa.gov.dz/"
    },
    highlights: [
      "Cezayir şehri",
      "Tassili n'Ajjer",
      "Timgad antik kenti",
      "Sahra Çölü"
    ],
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
  },
  {
    name: "Angola",
    description: "Güneybatı Afrika'da yer alan, doğal kaynakları ve kültürel çeşitliliğiyle dikkat çeken bir ülke.",
    details: [
      "Zengin doğal kaynaklar",
      "Kültürel çeşitlilik",
      "Doğal güzellikler",
      "Tarihi miras"
    ],
    visaInfo: {
      processingTime: "3 iş günü",
      validity: "30 gün (tek giriş)",
      requirements: [
        "Online e-Visa başvurusu",
        "Havalimanında veya elçilikten basım"
      ],
      embassyWebsite: "https://www.embassyangolatr.org/"
    },
    highlights: [
      "Luanda şehri",
      "Kissama Milli Parkı",
      "Kalandula Şelaleleri",
      "Benguela sahilleri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Arjantin",
    description: "Güney Amerika'nın en büyük ikinci ülkesi, tango dansı ve doğal güzellikleriyle ünlü.",
    details: [
      "Tango kültürü",
      "Doğal güzellikler",
      "Zengin mutfak",
      "Tarihi şehirler"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün (tek giriş)",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://eturq.cancilleria.gob.ar/en"
    },
    highlights: [
      "Buenos Aires",
      "Iguazu Şelaleleri",
      "Patagonya",
      "Mendoza şarap bölgesi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Avustralya",
    description: "Dünyanın en büyük adası ve en küçük kıtası, benzersiz doğal güzellikleri ve yaşam tarzıyla ünlü.",
    details: [
      "Benzersiz doğal güzellikler",
      "Modern şehirler",
      "Zengin kültür",
      "Çeşitli iklimler"
    ],
    visaInfo: {
      processingTime: "1-2 iş günü",
      validity: "3 ay (eVisitor) / 12 ay (ETA)",
      requirements: [
        "Online eVisitor veya ETA başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://turkey.embassy.gov.au/"
    },
    highlights: [
      "Sydney Opera Binası",
      "Great Barrier Reef",
      "Uluru",
      "Melbourne şehri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Avusturya",
    description: "Alpler'in kalbinde yer alan, klasik müzik ve tarihi mirasıyla ünlü bir ülke.",
    details: [
      "Alp dağları",
      "Klasik müzik mirası",
      "Tarihi şehirler",
      "Kültürel zenginlik"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "90 gün/180 gün",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://www.bmeia.gv.at/oeb-ankara/"
    },
    highlights: [
      "Viyana",
      "Salzburg",
      "Innsbruck",
      "Hallstatt"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2072&auto=format&fit=crop"
  },
  {
    name: "Azerbaycan",
    description: "Kafkasya'da yer alan, petrol zengini ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Modern şehirler",
      "Tarihi miras",
      "Doğal güzellikler",
      "Zengin mutfak"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün (180 gün içinde)",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://ankara.mfa.gov.az/"
    },
    highlights: [
      "Bakü şehri",
      "Gobustan Milli Parkı",
      "Şeki Han Sarayı",
      "Yanar Dağ"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Bahreyn",
    description: "Körfez ülkesi, modern mimarisi ve zengin kültürel mirasıyla dikkat çekiyor.",
    details: [
      "Modern mimari",
      "Kültürel miras",
      "Lüks yaşam",
      "Ticaret merkezi"
    ],
    visaInfo: {
      processingTime: "48 saat",
      validity: "30 gün (çok girişli)",
      requirements: [
        "Online e-Visa başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.mofa.gov.bh/"
    },
    highlights: [
      "Manama şehri",
      "Bahreyn Kalesi",
      "Tree of Life",
      "Al Fateh Camii"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Bangladeş",
    description: "Güney Asya'da yer alan, zengin kültürü ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Kültürel zenginlik",
      "Doğal güzellikler",
      "Tarihi miras",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "7 iş günü",
      validity: "30 gün (tek giriş)",
      requirements: [
        "Ankara'daki Büyükelçilik başvurusu",
        "Geçerli pasaport",
        "Gerekli belgeler"
      ],
      embassyWebsite: "https://ankara.mfa.gov.bd/"
    },
    highlights: [
      "Dhaka şehri",
      "Sundarbans Milli Parkı",
      "Cox's Bazar plajı",
      "Tarihi camiler"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
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
  },
  {
    name: "Slovenya",
    description: "Orta Avrupa'da yer alan, doğal güzellikleri ve tarihi şehirleriyle dikkat çeken bir ülke.",
    details: [
      "Doğal güzellikler",
      "Tarihi şehirler",
      "Termal hamamlar",
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
      "Bled Gölü",
      "Ljubljana şehri",
      "Postojna Mağarası",
      "Piran limanı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hırvatistan",
    description: "Adriyatik Denizi kıyısında yer alan, tarihi şehirleri ve güzel plajlarıyla ünlü bir ülke.",
    details: [
      "Adriyatik kıyısı",
      "Tarihi şehirler",
      "Güzel plajlar",
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
      "Dubrovnik şehri",
      "Split şehri",
      "Plitvice Gölleri",
      "Hvar Adası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sırbistan",
    description: "Balkanlar'da yer alan, zengin tarihi ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Kültürel miras",
      "Doğal güzellikler",
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
      "Belgrad şehri",
      "Novi Sad şehri",
      "Niş şehri",
      "Tara Dağı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Karadağ",
    description: "Adriyatik Denizi kıyısında yer alan, doğal güzellikleri ve tarihi şehirleriyle ünlü bir ülke.",
    details: [
      "Adriyatik kıyısı",
      "Tarihi şehirler",
      "Doğal güzellikler",
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
      "Kotor şehri",
      "Budva şehri",
      "Durmitor Milli Parkı",
      "Sveti Stefan Adası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Kuzey Makedonya",
    description: "Balkanlar'da yer alan, tarihi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Doğal güzellikler",
      "Kültürel miras",
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
      "Ohrid Gölü",
      "Üsküp şehri",
      "Bitola şehri",
      "Mavrovo Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bosna Hersek",
    description: "Balkanlar'da yer alan, tarihi ve kültürel zenginlikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Kültürel miras",
      "Doğal güzellikler",
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
      "Mostar şehri",
      "Sarajevo şehri",
      "Travnik şehri",
      "Una Nehri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bulgaristan",
    description: "Balkanlar'da yer alan, tarihi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Doğal güzellikler",
      "Kültürel miras",
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
      "Sofya şehri",
      "Plovdiv şehri",
      "Varna şehri",
      "Rila Manastırı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Romanya",
    description: "Doğu Avrupa'da yer alan, tarihi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Doğal güzellikler",
      "Kültürel miras",
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
      "Bükreş şehri",
      "Braşov şehri",
      "Sibiu şehri",
      "Transilvanya bölgesi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Moldova",
    description: "Doğu Avrupa'da yer alan, şarap üretimi ve tarihi şehirleriyle dikkat çeken bir ülke.",
    details: [
      "Şarap üretimi",
      "Tarihi şehirler",
      "Kültürel miras",
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
      "Kişinev şehri",
      "Orhei Vechi",
      "Cricova şarap mahzenleri",
      "Soroca şehri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ukrayna",
    description: "Doğu Avrupa'da yer alan, tarihi ve kültürel zenginlikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Kültürel miras",
      "Doğal güzellikler",
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
      "Kiev şehri",
      "Lviv şehri",
      "Odessa şehri",
      "Karpat Dağları"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Beyaz Rusya",
    description: "Doğu Avrupa'da yer alan, tarihi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Doğal güzellikler",
      "Kültürel miras",
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
      "Minsk şehri",
      "Brest şehri",
      "Grodno şehri",
      "Braslav Gölleri"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rusya",
    description: "Dünyanın en büyük ülkesi, zengin tarihi ve kültürel mirasıyla dikkat çekiyor.",
    details: [
      "Tarihi şehirler",
      "Kültürel miras",
      "Doğal güzellikler",
      "Zengin sanat"
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
      "Moskova şehri",
      "St. Petersburg şehri",
      "Altın Halka",
      "Trans-Sibirya Demiryolu"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ermenistan",
    description: "Kafkasya'da yer alan, tarihi ve kültürel zenginlikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Kültürel miras",
      "Doğal güzellikler",
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
      "Erivan şehri",
      "Eçmiadzin Katedrali",
      "Garni Tapınağı",
      "Sevan Gölü"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Gürcistan",
    description: "Kafkasya'da yer alan, tarihi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Doğal güzellikler",
      "Kültürel miras",
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
      "Tiflis şehri",
      "Batum şehri",
      "Kazbegi Dağı",
      "Svaneti bölgesi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Azerbaycan",
    description: "Kafkasya'da yer alan, petrol zengini ve modern şehirleriyle dikkat çeken bir ülke.",
    details: [
      "Modern şehirler",
      "Tarihi miras",
      "Doğal güzellikler",
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
      "Bakü şehri",
      "Gobustan Milli Parkı",
      "Şeki şehri",
      "Yanar Dağ"
    ],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Belarus",
    description: "Doğu Avrupa'da yer alan, zengin tarihi ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Kültürel miras",
      "Doğal güzellikler",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "30 gün (yıllık toplam 90 günü aşmamak şartıyla)",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://turkey.mfa.gov.by/en/embassy/"
    },
    highlights: [
      "Minsk şehri",
      "Mir Kalesi",
      "Nesvizh Sarayı",
      "Brest Kalesi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Belçika",
    description: "Avrupa'nın kalbinde yer alan, çikolatası ve biralarıyla ünlü bir ülke.",
    details: [
      "Tarihi şehirler",
      "Gastronomi",
      "Kültürel miras",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://ankara.diplomatie.belgium.be/"
    },
    highlights: [
      "Brüksel",
      "Brugge",
      "Gent",
      "Antwerp"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Bolivya",
    description: "Güney Amerika'da yer alan, And Dağları ve Uyuni Tuz Gölü ile ünlü bir ülke.",
    details: [
      "And Dağları",
      "Tuz gölleri",
      "Kültürel miras",
      "Doğal güzellikler"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassypages.com/bolivia-embassy-ankara-turkey"
    },
    highlights: [
      "Uyuni Tuz Gölü",
      "La Paz",
      "Sucre",
      "Titicaca Gölü"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Bosna-Hersek",
    description: "Balkanlar'da yer alan, zengin tarihi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi şehirler",
      "Doğal güzellikler",
      "Kültürel miras",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün (180 gün içinde)",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://saraybosna-be.mfa.gov.tr/Mission"
    },
    highlights: [
      "Saraybosna",
      "Mostar",
      "Travnik",
      "Sutjeska Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Brezilya",
    description: "Güney Amerika'nın en büyük ülkesi, karnavalları ve doğal güzellikleriyle ünlü.",
    details: [
      "Karnavallar",
      "Doğal güzellikler",
      "Plajlar",
      "Kültürel zenginlik"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün (180 gün içinde)",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://brezilya-be.mfa.gov.tr/Mission"
    },
    highlights: [
      "Rio de Janeiro",
      "Amazon Yağmur Ormanları",
      "Iguazu Şelaleleri",
      "Salvador"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Brunei",
    description: "Borneo adasında yer alan, zengin petrol kaynakları ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Modern yaşam",
      "Doğal güzellikler",
      "Kültürel miras",
      "Lüks yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "30 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.mfa.gov.bn/Pages/embassy-of-brunei-darussalam-in-ankara-turkey.aspx"
    },
    highlights: [
      "Bandar Seri Begawan",
      "Kampong Ayer",
      "Ulu Temburong Milli Parkı",
      "Sultan Omar Ali Saifuddin Camii"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Kamboçya",
    description: "Güneydoğu Asya'da yer alan, Angkor Wat tapınakları ve zengin tarihiyle ünlü bir ülke.",
    details: [
      "Tarihi tapınaklar",
      "Doğal güzellikler",
      "Kültürel miras",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "3 iş günü",
      validity: "30 gün",
      requirements: [
        "Online e-Visa veya varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://embassies.info/EmbassyofCambodiainAnkaraTurkey"
    },
    highlights: [
      "Angkor Wat",
      "Phnom Penh",
      "Siem Reap",
      "Tonle Sap Gölü"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Kamerun",
    description: "Orta Afrika'da yer alan, zengin kültürü ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Doğal güzellikler",
      "Kültürel zenginlik",
      "Vahşi yaşam",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "90 gün",
      requirements: [
        "Online e-Visa başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassycameroon.org/"
    },
    highlights: [
      "Yaoundé",
      "Douala",
      "Waza Milli Parkı",
      "Korup Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Kanada",
    description: "Kuzey Amerika'da yer alan, doğal güzellikleri ve yüksek yaşam standardıyla ünlü bir ülke.",
    details: [
      "Doğal güzellikler",
      "Modern yaşam",
      "Kültürel çeşitlilik",
      "Yüksek yaşam standardı"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "6 ay",
      requirements: [
        "Online vize başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visit.html"
    },
    highlights: [
      "Niagara Şelaleleri",
      "Toronto",
      "Vancouver",
      "Banff Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Cape Verde",
    description: "Atlantik Okyanusu'nda yer alan, muhteşem plajları ve doğal güzellikleriyle ünlü bir ada ülkesi.",
    details: [
      "Plajlar",
      "Doğal güzellikler",
      "Deniz turizmi",
      "Kültürel miras"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassycapeverde.org/"
    },
    highlights: [
      "Praia",
      "Mindelo",
      "Santo Antão",
      "Sal Adası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Orta Afrika Cumhuriyeti",
    description: "Orta Afrika'da yer alan, zengin doğal kaynakları ve vahşi yaşamıyla dikkat çeken bir ülke.",
    details: [
      "Vahşi yaşam",
      "Doğal güzellikler",
      "Kültürel miras",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassycentralafricanrepublic.org/"
    },
    highlights: [
      "Bangui",
      "Dzanga-Sangha Milli Parkı",
      "Manovo-Gounda St Floris Milli Parkı",
      "Bamingui-Bangoran Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Çad",
    description: "Orta Afrika'da yer alan, Sahra Çölü ve zengin kültürüyle dikkat çeken bir ülke.",
    details: [
      "Sahra Çölü",
      "Kültürel zenginlik",
      "Doğal güzellikler",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassychad.org/"
    },
    highlights: [
      "N'Djamena",
      "Zakouma Milli Parkı",
      "Ennedi Platosu",
      "Tibesti Dağları"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Şili",
    description: "Güney Amerika'nın batı kıyısında yer alan, uzun sahil şeridi ve doğal güzellikleriyle ünlü bir ülke.",
    details: [
      "Doğal güzellikler",
      "Sahil şeridi",
      "And Dağları",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://chile.gob.cl/turquia/"
    },
    highlights: [
      "Santiago",
      "Patagonya",
      "Atacama Çölü",
      "Paskalya Adası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Çin",
    description: "Doğu Asya'da yer alan, zengin tarihi ve modern gelişimiyle dikkat çeken bir ülke.",
    details: [
      "Tarihi miras",
      "Modern yaşam",
      "Kültürel zenginlik",
      "Doğal güzellikler"
    ],
    visaInfo: {
      processingTime: "4 iş günü",
      validity: "30 gün",
      requirements: [
        "Online vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "http://tr.china-embassy.org/chn/"
    },
    highlights: [
      "Çin Seddi",
      "Şanghay",
      "Pekin",
      "Xi'an"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Kolombiya",
    description: "Güney Amerika'da yer alan, zengin kültürü ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Doğal güzellikler",
      "Kültürel zenginlik",
      "Tarihi miras",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://turquia.embajada.gov.co/"
    },
    highlights: [
      "Bogotá",
      "Cartagena",
      "Medellín",
      "Tayrona Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Komorlar",
    description: "Hint Okyanusu'nda yer alan, muhteşem plajları ve doğal güzellikleriyle ünlü bir ada ülkesi.",
    details: [
      "Plajlar",
      "Doğal güzellikler",
      "Deniz turizmi",
      "Kültürel miras"
    ],
    visaInfo: {
      processingTime: "Varışta vize",
      validity: "45 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassycomoros.org/"
    },
    highlights: [
      "Moroni",
      "Grande Comore",
      "Anjouan",
      "Mohéli"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Kongo",
    description: "Orta Afrika'da yer alan, zengin doğal kaynakları ve vahşi yaşamıyla dikkat çeken bir ülke.",
    details: [
      "Vahşi yaşam",
      "Doğal güzellikler",
      "Kültürel miras",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassycongo.org/"
    },
    highlights: [
      "Brazzaville",
      "Odzala-Kokoua Milli Parkı",
      "Nouabalé-Ndoki Milli Parkı",
      "Conkouati-Douli Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Mısır",
    description: "Kuzey Afrika'da yer alan, antik medeniyetleri ve tarihi eserleriyle ünlü bir ülke.",
    details: [
      "Tarihi miras",
      "Antik medeniyetler",
      "Doğal güzellikler",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "Varışta vize",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassyofegypt.org.tr/"
    },
    highlights: [
      "Piramitler",
      "Lüksor",
      "Asvan",
      "Şarm El-Şeyh"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "El Salvador",
    description: "Orta Amerika'da yer alan, volkanları ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Volkanlar",
      "Doğal güzellikler",
      "Kültürel miras",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassyelsalvador.org/"
    },
    highlights: [
      "San Salvador",
      "Santa Ana Volkanı",
      "Suchitoto",
      "El Tunco"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Ekvator Ginesi",
    description: "Orta Afrika'da yer alan, zengin doğal kaynakları ve vahşi yaşamıyla dikkat çeken bir ülke.",
    details: [
      "Vahşi yaşam",
      "Doğal güzellikler",
      "Kültürel miras",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassyequatorialguinea.org/"
    },
    highlights: [
      "Malabo",
      "Bata",
      "Monte Alen Milli Parkı",
      "Bioko Adası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Eritre",
    description: "Doğu Afrika'da yer alan, Kızıldeniz kıyısında bulunan, tarihi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Kızıldeniz kıyısı",
      "Tarihi miras",
      "Doğal güzellikler",
      "Kültürel zenginlik"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassyeritrea.org/"
    },
    highlights: [
      "Asmara",
      "Massawa",
      "Dahlak Takımadaları",
      "Debre Bizen Manastırı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Estonya",
    description: "Kuzey Avrupa'da yer alan, modern teknolojisi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Modern teknoloji",
      "Doğal güzellikler",
      "Kültürel miras",
      "Yüksek yaşam standardı"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://turkey.mfa.ee/"
    },
    highlights: [
      "Tallinn",
      "Tartu",
      "Pärnu",
      "Lahemaa Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Esvatini",
    description: "Güney Afrika'da yer alan, zengin kültürü ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Kültürel zenginlik",
      "Doğal güzellikler",
      "Vahşi yaşam",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassyeswatini.org/"
    },
    highlights: [
      "Mbabane",
      "Lobamba",
      "Mlilwane Doğa Koruma Alanı",
      "Mantenga Kültür Köyü"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Etiyopya",
    description: "Doğu Afrika'da yer alan, zengin tarihi ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Tarihi miras",
      "Kültürel zenginlik",
      "Doğal güzellikler",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "3 iş günü",
      validity: "30 gün",
      requirements: [
        "Online e-Visa başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.ethiopianembassy.org/"
    },
    highlights: [
      "Addis Ababa",
      "Lalibela",
      "Gondar",
      "Simien Dağları"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Fiji",
    description: "Güney Pasifik'te yer alan, muhteşem plajları ve doğal güzellikleriyle ünlü bir ada ülkesi.",
    details: [
      "Plajlar",
      "Doğal güzellikler",
      "Deniz turizmi",
      "Kültürel miras"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "120 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassyfiji.org/"
    },
    highlights: [
      "Suva",
      "Nadi",
      "Mamanuca Adaları",
      "Yasawa Adaları"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Finlandiya",
    description: "Kuzey Avrupa'da yer alan, doğal güzellikleri ve yüksek yaşam standardıyla ünlü bir ülke.",
    details: [
      "Doğal güzellikler",
      "Modern yaşam",
      "Kültürel miras",
      "Yüksek yaşam standardı"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://finlandabroad.fi/web/tur/"
    },
    highlights: [
      "Helsinki",
      "Rovaniemi",
      "Turku",
      "Lapland"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Fransa",
    description: "Batı Avrupa'da yer alan, zengin kültürü ve tarihi mirasıyla ünlü bir ülke.",
    details: [
      "Tarihi miras",
      "Kültürel zenginlik",
      "Modern yaşam",
      "Doğal güzellikler"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://tr.ambafrance.org/"
    },
    highlights: [
      "Paris",
      "Marsilya",
      "Nice",
      "Lyon"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Gabon",
    description: "Orta Afrika'da yer alan, zengin doğal kaynakları ve vahşi yaşamıyla dikkat çeken bir ülke.",
    details: [
      "Vahşi yaşam",
      "Doğal güzellikler",
      "Kültürel miras",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassygabon.org/"
    },
    highlights: [
      "Libreville",
      "Port-Gentil",
      "Loango Milli Parkı",
      "Ivindo Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Gambiya",
    description: "Batı Afrika'da yer alan, Gambiya Nehri etrafında kurulmuş, doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Gambiya Nehri",
      "Doğal güzellikler",
      "Kültürel miras",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "3 iş günü",
      validity: "30 gün",
      requirements: [
        "Online e-Visa başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassygambia.org/"
    },
    highlights: [
      "Banjul",
      "Serekunda",
      "Abuko Doğa Koruma Alanı",
      "Kunta Kinteh Adası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Gürcistan",
    description: "Kafkasya'da yer alan, zengin tarihi ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Tarihi miras",
      "Doğal güzellikler",
      "Kültürel zenginlik",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "1 yıl",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://turkey.mfa.gov.ge/"
    },
    highlights: [
      "Tiflis",
      "Batum",
      "Kazbegi",
      "Mtskheta"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Almanya",
    description: "Orta Avrupa'da yer alan, güçlü ekonomisi ve zengin kültürüyle ünlü bir ülke.",
    details: [
      "Modern yaşam",
      "Kültürel miras",
      "Tarihi şehirler",
      "Yüksek yaşam standardı"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://tuerkei.diplo.de/"
    },
    highlights: [
      "Berlin",
      "Münih",
      "Hamburg",
      "Frankfurt"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Gana",
    description: "Batı Afrika'da yer alan, zengin kültürü ve doğal güzellikleriyle dikkat çeken bir ülke.",
    details: [
      "Kültürel zenginlik",
      "Doğal güzellikler",
      "Tarihi miras",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "3 iş günü",
      validity: "30 gün",
      requirements: [
        "Online e-Visa başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.ghanaembassy.org/"
    },
    highlights: [
      "Akra",
      "Kumasi",
      "Cape Coast",
      "Kakum Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Yunanistan",
    description: "Güney Avrupa'da yer alan, antik medeniyetleri ve adalarıyla ünlü bir ülke.",
    details: [
      "Antik medeniyetler",
      "Adalar",
      "Doğal güzellikler",
      "Kültürel miras"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://www.mfa.gr/turkey/tr/"
    },
    highlights: [
      "Atina",
      "Santorini",
      "Mykonos",
      "Rodos"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Grenada",
    description: "Karayipler'de yer alan, muhteşem plajları ve doğal güzellikleriyle ünlü bir ada ülkesi.",
    details: [
      "Plajlar",
      "Doğal güzellikler",
      "Deniz turizmi",
      "Kültürel miras"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassygrenada.org/"
    },
    highlights: [
      "St. George's",
      "Grand Anse Plajı",
      "Levera Milli Parkı",
      "Carriacou"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Guatemala",
    description: "Orta Amerika'da yer alan, Maya uygarlığının izlerini taşıyan, doğal güzellikleriyle ünlü bir ülke.",
    details: [
      "Maya uygarlığı",
      "Doğal güzellikler",
      "Kültürel miras",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassyguatemala.org/"
    },
    highlights: [
      "Guatemala City",
      "Antigua",
      "Tikal",
      "Atitlan Gölü"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Gine",
    description: "Batı Afrika'da yer alan, zengin doğal kaynakları ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Doğal kaynaklar",
      "Kültürel miras",
      "Doğal güzellikler",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassyguinea.org/"
    },
    highlights: [
      "Conakry",
      "Fouta Djallon",
      "Mount Nimba",
      "Îles de Los"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Gine-Bissau",
    description: "Batı Afrika'da yer alan, zengin biyoçeşitliliği ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Biyoçeşitlilik",
      "Kültürel miras",
      "Doğal güzellikler",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Varışta vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.embassyguineabissau.org/"
    },
    highlights: [
      "Bissau",
      "Bijagos Takımadaları",
      "Varela",
      "Cantanhez Ormanları"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Guyana",
    description: "Güney Amerika'nın kuzeyinde yer alan, zengin yağmur ormanları ve doğal güzellikleriyle ünlü bir ülke.",
    details: [
      "Yağmur ormanları",
      "Doğal güzellikler",
      "Kültürel miras",
      "Ekoturizm"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassyguyana.org/"
    },
    highlights: [
      "Georgetown",
      "Kaieteur Şelalesi",
      "Iwokrama Ormanı",
      "Shell Beach"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Haiti",
    description: "Karayipler'de yer alan, zengin kültürü ve tarihi mirasıyla dikkat çeken bir ülke.",
    details: [
      "Kültürel miras",
      "Tarihi zenginlik",
      "Plajlar",
      "Geleneksel yaşam"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassyhaiti.org/"
    },
    highlights: [
      "Port-au-Prince",
      "Citadelle Laferrière",
      "Labadee",
      "Jacmel"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Honduras",
    description: "Orta Amerika'da yer alan, Maya uygarlığının izlerini taşıyan, doğal güzellikleriyle ünlü bir ülke.",
    details: [
      "Maya uygarlığı",
      "Doğal güzellikler",
      "Plajlar",
      "Kültürel miras"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "90 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://www.embassyhonduras.org/"
    },
    highlights: [
      "Tegucigalpa",
      "Roatan",
      "Copán",
      "La Ceiba"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Macaristan",
    description: "Orta Avrupa'da yer alan, zengin tarihi ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Tarihi miras",
      "Kültürel zenginlik",
      "Modern yaşam",
      "Termal kaynaklar"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://ankara.mfa.gov.hu/"
    },
    highlights: [
      "Budapeşte",
      "Balaton Gölü",
      "Eger",
      "Pécs"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "İzlanda",
    description: "Kuzey Avrupa'da yer alan, volkanik aktiviteleri ve doğal güzellikleriyle ünlü bir ada ülkesi.",
    details: [
      "Volkanik aktiviteler",
      "Doğal güzellikler",
      "Modern yaşam",
      "Kuzey ışıkları"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Schengen vizesi başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://www.government.is/diplomatic-missions/embassy-of-iceland-in-ankara/"
    },
    highlights: [
      "Reykjavik",
      "Blue Lagoon",
      "Gullfoss Şelalesi",
      "Vatnajökull Milli Parkı"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Hindistan",
    description: "Güney Asya'da yer alan, zengin kültürü ve tarihi mirasıyla dikkat çeken bir ülke.",
    details: [
      "Kültürel zenginlik",
      "Tarihi miras",
      "Modern yaşam",
      "Doğal güzellikler"
    ],
    visaInfo: {
      processingTime: "3 iş günü",
      validity: "1 ay – 5 yıl",
      requirements: [
        "Online e-Visa başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "https://www.indembassyankara.gov.in/"
    },
    highlights: [
      "Taj Mahal",
      "Yeni Delhi",
      "Mumbai",
      "Varanasi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Endonezya",
    description: "Güneydoğu Asya'da yer alan, binlerce adadan oluşan, doğal güzellikleriyle ünlü bir ülke.",
    details: [
      "Adalar",
      "Doğal güzellikler",
      "Kültürel miras",
      "Plajlar"
    ],
    visaInfo: {
      processingTime: "Vizesiz",
      validity: "30 gün",
      requirements: [
        "Geçerli pasaport",
        "Vize gerekmez"
      ],
      embassyWebsite: "https://kemlu.go.id/ankara/en"
    },
    highlights: [
      "Bali",
      "Jakarta",
      "Borobudur",
      "Komodo Adası"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "İran",
    description: "Orta Doğu'da yer alan, zengin tarihi ve kültürel mirasıyla dikkat çeken bir ülke.",
    details: [
      "Tarihi miras",
      "Kültürel zenginlik",
      "Modern yaşam",
      "Doğal güzellikler"
    ],
    visaInfo: {
      processingTime: "5 iş günü",
      validity: "30 gün",
      requirements: [
        "Vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "http://ankara.mfa.ir/"
    },
    highlights: [
      "Tahran",
      "İsfahan",
      "Şiraz",
      "Persepolis"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Irak",
    description: "Orta Doğu'da yer alan, antik medeniyetlerin beşiği olan bir ülke.",
    details: [
      "Antik medeniyetler",
      "Tarihi miras",
      "Kültürel zenginlik",
      "Modern yaşam"
    ],
    visaInfo: {
      processingTime: "7 iş günü",
      validity: "30 gün",
      requirements: [
        "Vize başvurusu",
        "Geçerli pasaport"
      ],
      embassyWebsite: "http://www.mofamission.gov.iq/en/Turkey"
    },
    highlights: [
      "Bağdat",
      "Babil",
      "Erbil",
      "Ur"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "İrlanda",
    description: "Kuzey Avrupa'da yer alan, yeşil doğası ve zengin kültürüyle ünlü bir ada ülkesi.",
    details: [
      "Yeşil doğa",
      "Kültürel miras",
      "Modern yaşam",
      "Tarihi zenginlik"
    ],
    visaInfo: {
      processingTime: "15 iş günü",
      validity: "1 hafta – 5 yıl",
      requirements: [
        "Vize başvurusu",
        "Geçerli pasaport",
        "Seyahat sigortası"
      ],
      embassyWebsite: "https://www.dfa.ie/irish-embassy/turkey/"
    },
    highlights: [
      "Dublin",
      "Galway",
      "Cork",
      "Cliffs of Moher"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop"
  }
] 