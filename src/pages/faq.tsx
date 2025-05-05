import Head from "next/head";

const FAQS = [
  {
    question: "Vize başvurusu ne kadar sürer?",
    answer: "Genel olarak işlem süresi Schengen vizelerinde 15 iş günü, e-Visa'larda 2–5 iş günü, konsolosluk vizelerinde 7–21 iş günü arasında değişir. Başvurun yoğun sezonda (yaz dönemi gibi) uzayabileceği için mümkünse seyahatinden en az 4–6 hafta önce başvurmanı öneririz.",
  },
  {
    question: "Randevu nasıl alırım?",
    answer: "Her ülkenin konsolosluk sitesi veya yetkili başvuru merkezleri (iDATA, VFS Global vb.) üzerinden online randevu alırsın. DS-160/DS-260 gibi formlar (ABD), e-Visa portalları (Angola, Kamboçya, Katar…) ya da konsoloslukların kendi sistemleri farklı olabilir; başvuru sayfasında adım adım rehberimizi mutlaka takip et.",
  },
  {
    question: "Hangi belgeler gerekiyor?",
    answer: "Pasaport (seyahat dönüşünden sonra en az 6 ay geçerli)\n\nBiyometrik fotoğraf\n\nSeyahat sağlık sigortası (Schengen, Rusya…)\n\nUçak bileti rezervasyonu ve konaklama belgeleri\n\nFinansal durum kanıtı (banka hesap dökümü)\n\nDavet mektubu (ticari, aile ziyareti vb. durumlarda)\n\nEksik belge başvurunun reddine yol açabilir; bu yüzden listeyi konsolosluğun güncel 'Required Documents' sayfasından kontrol et.",
  },
  {
    question: "Seyahat sağlık sigortası şart mı?",
    answer: "Schengen vizesi ve birçok diğer vize türü için zorunlu. Poliçe en az 30.000 EUR teminatlı, tıbbi masrafları ve acil dönüşü kapsamalı. Başvuruna sigortanın poliçe numarasını ve kapsamını gösteren dokümanı eklemelisin.",
  },
  {
    question: "Vize ücreti nasıl ödenir?",
    answer: "Çoğu konsolosluk bankaya havale/eft, başvuru merkezleri gişe ya da kredi kartı kabul eder. e-Visa ücretleri genellikle online ödeme (PayPal/kredi kartı) ile tahsil edilir. Ödeme dekontunu mutlaka sakla ve başvuruna ekle.",
  },
  {
    question: "Biyometri (parmak izi) zorunlu mu?",
    answer: "Evet, çoğu kısa süreli (C tipi/Schengen) ve bazı uzun süreli vizeler için (ABD B1/B2, D tipi ulusal vize) biyometri alınır. İlk başvurunda alınıyor; sonraki 59 ay içinde tekrar biyometriye gerek kalmıyor.",
  },
  {
    question: "Vize reddi alırsam ne yapmalıyım?",
    answer: "Çoğu konsolosluk reddedilen başvurunun gerekçesini yazar ve itiraz veya yeniden başvuru hakkı tanır. Eksik belge, mali durum yetersizliği veya seyahat amaç belirsizliği en sık sebepler. Gerekçeyi değerlendirip ek belgeyle yeniden başvurabilirsin.",
  },
  {
    question: "Vize uzatma mümkün mü?",
    answer: "Schengen bölgesinde kısa süreli vizeler uzatılamaz (istisnai sağlık/akıntı sebepleri dışında). Ulusal vizeler (D tipi) için vize bitmeden yerel göçmenlik ofisine başvurarak kalış süreni uzatabilirsin.",
  },
  {
    question: "Çok girişli (multiple entry) vize nedir?",
    answer: "Birden fazla giriş-çıkış hakkı tanıyan vizelerdir. Örneğin 180 gün içinde 90 gün konaklamalı çok girişli Schengen vizesi, Avrupa'dan ayrılıp tekrar dönmene izin verir. Başvuru formunda 'Multiple Entry' seçeneğini işaretlemen ve gerekçeni kısa bir notta açıklaman (iş, turizm vs.) yeterli.",
  },
  {
    question: "Vizesiz seyahat edilebilen ülkeleri nasıl öğrenirim?",
    answer: "Journeise.com'daki interaktif ülke listemizde 'vizesiz' ya da 'e-Visa' filtrelerini kullanarak, Türkiye'den vizesiz veya varışta vize alarak gidilebilen tüm destinasyonları görebilirsin.",
  },
  {
    question: "Vize Türüne Nasıl Karar Verebilirim?",
    answer: "Seyahat Amacınızı Netleştirin:\n\nTuristik: Tatil, gezi, kültürel ziyaret.\n\nTicari/İş: Toplantı, konferans, fuar katılımı, sözleşme görüşmesi.\n\nAile/Ziyaret: Aile üyeleri veya akraba ziyareti.\n\nEğitim: Dil kursu, üniversite eğitimi, staj.\n\nÇalışma: Geçici iş, sözleşmeli görev, uzun dönem çalışma.\n\nKonsaolosluk veya Vize Merkezi Rehberini İnceleyin:\nHer ülkenin web sitesinde vize kategorileri ve hangi kategoriye hangi belgelerin gerektiği ayrıntılı yazılıdır. Örneğin 'Business Visa' mı yoksa 'Tourist Visa' mı olduğunu mutlaka açıklamışlardır.\n\nKalış Süresi ve Giriş Sayısını Düşünün:\n\nTek Girişli (Single Entry): Bir kez girip, çıktığınızda vizeniz sona erer.\n\nÇok Girişli (Multiple Entry): Vize süresi içinde istediğiniz kadar girip çıkabilirsiniz.\n\nUzun konaklamalar için (90+ gün) genellikle D tipi veya ulusal vizeler tercih edilir.\n\nBelgelerinizi ve Sponsor/Kurum Durumunuza Göre Değerlendirin:\n\nİş amaçlı vizede davet mektubu veya işveren yazısı;\n\nÖğrenci vizesinde okul kabul belgesi;\n\nAile birleşiminde davet ve aile bağını kanıtlayan belgeler.\n\nGerekirse Uzman Desteği Alın:\nBelirsizlik varsa Journeise danışmanlarıyla irtibata geçip, sizin durumunuza özel en doğru kategoriyi birlikte belirleyebilirsiniz.",
  },
  {
    question: "Başvuruyu Ne Kadar Önceden Yapmalıyım?",
    answer: "Schengen ve Diğer Kısa Süreli Vizeler (C/Turist, İş):\nEn erken 6 ay, en geç seyahat tarihinden 15 iş günü önce başvurabilirsiniz. Yoğun dönemlerde (yaz, tatil, fuar dönemleri) 4–6 hafta önceden yapmanız riskleri azaltır.\n\ne-Visa ve Varışta Vize:\nÇoğu e-Visa için 48 saat – 5 iş günü öngörülür. Yine de, teknik aksaklık veya ek belge talebi ihtimaline karşı 1 hafta önceden başvurmak güvenlidir.\n\nUlusal / D Tipi Uzun Süreli Vizeler (Öğrenci, Çalışma, Aile):\nİşlemler genellikle 1–3 ay sürebilir. Evrak tamamlama, dil yeterliliği, sağlık kontrolleri gibi ek adımlar için en az 2–3 ay önceden başvurmanızı öneririz.\n\nPlanlama İpuçları:\n\nRandevu kuyrukları ve biyometri işlemleri ek süre alabilir.\n\nEksik belge nedeniyle geri dönüş olursa telafisi için zaman ayırın.\n\nYoğun konsolosluk takvimlerini takip ederek, boş kontenjanları kaçırmamaya çalışın.\n\nHer zaman seyahat planınızdan en az 4–6 hafta önce başvuruyu tamamlamayı hedefleyin; böylece olası aksaklıklara karşı yeterli zamanınız kalır.",
  },
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Sık Sorulan Sorular | Journeise</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sık Sorulan Sorular</h1>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="p-4 border rounded-lg bg-white dark:bg-background shadow">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-muted-foreground whitespace-pre-line">{faq.answer}</p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
} 