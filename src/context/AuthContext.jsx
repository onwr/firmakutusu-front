import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    id: 1,
    email: "ali.atalan@ayyildiz.com.tr",
    kvkk_onayi: true,
    kayit_tarihi: "2023-09-15T10:30:45",
    aktif: true,
    yetkili_kisi: {
      id: 1,
      ad: "Ali",
      soyad: "ATALAN",
      tc_kimlik_no: "12345678901",
      telefon_no: "+90 555 123 45 67",
      telefon_dogrulandi: true,
      dogrulama_tarihi: "2023-09-15T11:15:22",
    },
    firma: {
      id: 1,
      uyelik_turu: "Kurumsal",
      marka_adi: "Ayyıldız",
      firma_unvani:
        "Ayyıldız Tünel Ekipmanları İmalatı Mühendislik San. ve Tic. A.Ş.",
      vergi_kimlik_no: "1234567890",
      sektor: "İnşaat",
      hizmet_alani: "Tünel Ekipmanları",
      profil_resmi_url: "/images/icons/firma-profil/firma-logo.svg",
      kurulus_tarihi: "05.09.2022",
      kurulus_sehri: "İstanbul",
      merkez_adresi: "Atatürk Mah. Turgut Özal Cad. No: 123 Ümraniye/İstanbul",
      kep_adresi: "ayyildiz@hs01.kep.tr",
      email: "info@ayyildiz.com.tr",
      web_sitesi: "https://www.ayyildiz.com.tr",
      iletisim_telefonu: "+90 216 555 67 89",
      olusturulma_tarihi: "2023-09-15T11:30:45",
      aktif: true,

      resmi_bilgiler: {
        faaliyet_alani: "Tünel Ekipmanları İmalatı ve Mühendislik Hizmetleri",
        faaliyet_durumu: true,
        vergi_dairesi_adi: "Ümraniye Vergi Dairesi",
        mersis_no: "0123456789000015",
        e_fatura_kullanimi: true,
        e_arsiv_kullanimi: true,
        e_irsaliye_kullanimi: true,
        e_defter_kullanimi: true,
        fax_numarasi: "+90 216 555 67 90",
        banka_iban: "TR12 0001 2345 6789 0123 4567 89",
        banka_adi: "Türkiye İş Bankası",
      },

      hakkimizda: {
        ceo_resmi_url: "/images/ceo.jpg",
        baslik: "CEO Mesajı",
        ceo_adi: "Ali ATALAN",
        ceo_mesaji:
          "Ayyıldız olarak, Türkiye'nin önde gelen tünel ekipmanları üreticisi olarak 10 yılı aşkın süredir hizmet vermekteyiz. Müşteri memnuniyeti ve kalite anlayışımızla sektörde lider konuma gelmeyi başardık.",
      },

      urun_hizmetler: {
        baslik: "Ürün & Hizmetlerimiz",
        metin:
          "Ayyıldız olarak, tünel ekipmanları konusunda geniş bir ürün yelpazesi sunmaktayız. Müşterilerimizin ihtiyaçlarına uygun çözümler üretiyoruz.",
        urunler: [
          {
            id: 1,
            belge_adi: "Tünel Delme Ekipmanları Kataloğu",
            gecerlilik_baslangic: "2023-01-01",
            gecerlilik_bitis: "2023-12-31",
            acilis_katalogu: true,
            pdf_url: "/documents/catalog-2023.pdf",
          },
          {
            id: 2,
            belge_adi: "Tünel Kaplama Sistemleri",
            gecerlilik_baslangic: "2023-01-01",
            gecerlilik_bitis: "2023-12-31",
            acilis_katalogu: false,
            pdf_url: "/documents/tunel-kaplama-2023.pdf",
          },
        ],
      },

      subeler: {
        baslik: "Baslik",
        metin: "Metin",
        subelerimiz: [
          {
            id: 1,
            kapak_resmi_url: "/images/icons/firma-profil/icons/sube-resim.svg",
            sube_adi: "İstanbul Merkez",
            sube_adresi:
              "Atatürk Mah. Turgut Özal Cad. No: 123 Ümraniye/İstanbul",
            mail_adresi: "istanbul@ayyildiz.com.tr",
            telefon_numarasi: "+90 216 555 67 89",
            calisma_saatleri: [
              {
                gun: "Pazartesi",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Salı",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Çarşamba",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Perşembe",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Cuma",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Cumartesi",
                acilis_saati: "10:00",
                kapanis_saati: "14:00",
                kapali: false,
              },
              {
                gun: "Pazar",
                acilis_saati: "00:00",
                kapanis_saati: "00:00",
                kapali: true,
              },
            ],
          },
          {
            id: 2,
            kapak_resmi_url: "/images/icons/firma-profil/icons/sube-resim.svg",
            sube_adi: "Ankara Şube",
            sube_adresi: "Çankaya Cad. No: 45 Kızılay/Ankara",
            mail_adresi: "ankara@ayyildiz.com.tr",
            telefon_numarasi: "+90 312 555 67 89",
            calisma_saatleri: [
              {
                gun: "Pazartesi",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Salı",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Çarşamba",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Perşembe",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Cuma",
                acilis_saati: "09:00",
                kapanis_saati: "18:00",
                kapali: false,
              },
              {
                gun: "Cumartesi",
                acilis_saati: "00:00",
                kapanis_saati: "00:00",
                kapali: true,
              },
              {
                gun: "Pazar",
                acilis_saati: "00:00",
                kapanis_saati: "00:00",
                kapali: true,
              },
            ],
          },
        ],
      },

      kalite_belgeleri: {
        baslik: "Kalite Belgelerimiz",
        metin:
          "Ayyıldız olarak, kalite ve müşteri memnuniyeti odaklı çalışma prensibimizle ISO 9001 ve ISO 14001 belgelerine sahibiz.",
        belgeler: [
          {
            id: 1,
            belge_resmi_url:
              "/images/icons/firma-profil/icons/kalite-sertifika.svg",
            belge_adi: "ISO 9001:2015",
            sertifika_no: "ISO9001-2023-12345",
            verilis_tarihi: "2023-01-15",
            gecerlilik_bitis: "2026-01-14",
          },
          {
            id: 2,
            belge_resmi_url:
              "/images/icons/firma-profil/icons/kalite-sertifika.svg",
            belge_adi: "ISO 14001:2015",
            sertifika_no: "ISO14001-2023-67890",
            verilis_tarihi: "2023-01-15",
            gecerlilik_bitis: "2026-01-14",
          },
        ],
      },

      referanslar: {
        baslik: "Referanslarımız",
        metin: "Ayyıldız olarak iş ortaklarımızla kurduğumuz güvenilir ilişkilerle sektörde fark yaratıyoruz. İşte referanslarımız:",
        kategoriler: [
          {
            tip: "Bana Verilen Referanslar",
            liste: [
              {
                id: 1,
                veren_firma_id: 2,
                veren_firma_adi: "Mega Yapı A.Ş.",
                referans_mesaji:
                  "Ayyıldız ile yaptığımız işbirliğinden çok memnun kaldık. Kaliteli ürünleri ve zamanında teslimat anlayışlarıyla projemize büyük katkı sağladılar.",
                durum: "Onaylandı",
                talep_tarihi: "2023-05-10T14:30:00",
                islem_tarihi: "2023-05-12T10:15:00",
              },
              {
                id: 2,
                veren_firma_id: 3,
                veren_firma_adi: "Yıldız İnşaat Ltd. Şti.",
                referans_mesaji:
                  "Marmaray Projesi'nde Ayyıldız'ın tünel ekipmanlarını kullandık. Teknik destek ve ürün kalitesi açısından tam not alıyorlar.",
                durum: "Onaylandı",
                talep_tarihi: "2023-06-20T11:45:00",
                islem_tarihi: "2023-06-21T09:30:00",
              },
            ],
          },
          {
            tip: "Benim Referans Olduğum Firmalar",
            liste: [
              {
                id: 3,
                alan_firma_id: 4,
                alan_firma_adi: "Doğu İnşaat A.Ş.",
                referans_mesaji:
                  "Doğu İnşaat ile çalışmak bir zevkti. Projelerinde profesyonel bir yaklaşım sergilediler.",
                durum: "Onaylandı",
                talep_tarihi: "2023-07-15T09:00:00",
                islem_tarihi: "2023-07-16T14:20:00",
              },
            ],
          },
          {
            tip: "Benim Gönderdiğim Talepler",
            liste: [
              {
                id: 4,
                istenen_firma_id: 5,
                istenen_firma_adi: "Batı Mühendislik Ltd. Şti.",
                referans_mesaji: "Referans talebi gönderildi.",
                durum: "Beklemede",
                talep_tarihi: "2023-08-01T13:10:00",
                islem_tarihi: null,
              },
            ],
          },
          {
            tip: "Bana Gelen Referans Talepleri",
            liste: [
              {
                id: 5,
                talep_eden_firma_id: 6,
                talep_eden_firma_adi: "Güney Yapı A.Ş.",
                referans_mesaji: "Referans talebi bekliyor.",
                durum: "Beklemede",
                talep_tarihi: "2023-09-05T16:45:00",
                islem_tarihi: null,
              },
            ],
          },
        ],
      },

      kampanyalar: [
        {
          id: 1,
          kapak_resmi_url: "/images/kampanyalar/yaz-kampanyasi.jpg",
          aciklama:
            "Yaz Kampanyası: Tüm tünel delme ekipmanlarında %15 indirim fırsatı. 30 Ağustos'a kadar geçerlidir.",
          baslangic_tarihi: "2023-06-01",
          bitis_tarihi: "2023-08-30",
          acilis_katalogu: true,
          katalog_pdf_url: "/documents/yaz-kampanyasi-2023.pdf",
          aktif: true,
        },
      ],

      is_kariyer: [
        {
          id: 1,
          baslik: "Makine Mühendisi Aranıyor",
          metin:
            "Firmamızın AR-GE departmanında çalışacak, tünel ekipmanları konusunda deneyimli Makine Mühendisi arıyoruz.",
          email_adresi: "kariyer@ayyildiz.com.tr",
          aydinlatma_metni:
            "Başvurunuz, 6698 sayılı KVKK kapsamında değerlendirilecektir.",
          aktif: true,
          sorular: [
            { id: 1, soru_metni: "Adınız", sira: 1, sabit: true },
            { id: 2, soru_metni: "Soyadınız", sira: 2, sabit: true },
            { id: 3, soru_metni: "Telefon numaranız", sira: 3, sabit: true },
            { id: 4, soru_metni: "E-Mail adresiniz", sira: 4, sabit: true },
            {
              id: 5,
              soru_metni: "Mezun olduğunuz üniversite",
              sira: 5,
              sabit: false,
            },
            {
              id: 6,
              soru_metni: "Toplam iş deneyiminiz (yıl)",
              sira: 6,
              sabit: false,
            },
            {
              id: 7,
              soru_metni: "Yabancı dil bilginiz",
              sira: 7,
              sabit: false,
            },
          ],
        },
      ],

      resim_galerisi: [
        {
          id: 1,
          resim_url: "/images/galeri/urun1.jpg",
          baslik: "Tünel Delme Makinası",
        },
        {
          id: 2,
          resim_url: "/images/galeri/urun2.jpg",
          baslik: "Segment Montaj Ekipmanı",
        },
        {
          id: 3,
          resim_url: "/images/galeri/fabrika.jpg",
          baslik: "Üretim Tesisimiz",
        },
      ],

      video_galerisi: [
        {
          id: 1,
          video_url: "/videos/tanitim.mp4",
          baslik: "Ayyıldız Tanıtım Filmi",
        },
        {
          id: 2,
          video_url: "/videos/tds2000.mp4",
          baslik: "TDS-2000 Tünel Delme Sistemi",
        },
      ],

      faaliyet_alanlari: [
        {
          tur: "Ana Faaliyet",
          alan: "Metallerin Makinede İşlenmesi (Torna Tesfiye İşleri, Metal Parçaları Delme, Tornalama, Frezeleme, Rendeleme, Parlatma, Oluk Açma, Perdahlama, Birleştirme, Kaynak Yapma Vb. Faaliyetler) (Metallerin Lazerle Kesilmesi Hariç)",
          nace_kodu: "25.62.02",
        },
        {
          tur: "EK Faaliyet - 1",
          alan: "Demir/Çelikten Haddelenmiş/Soğuk Çekilmiş Yassı Ürünlerin Toptan Ticareti",
          nace_kodu: "46.72.08",
        },
      ],
    },
  });

  const logout = () => {
    setIsLogin(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
