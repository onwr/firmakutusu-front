import React from "react";
import { motion } from "framer-motion";

const FirmaBilgileri = ({ isLogin }) => {
  return (
    <motion.div
      key="tab-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="montserrat px-4 lg:px-0"
    >
      <div className="flex justify-end">
        <p className="text-[#120A8F] font-semibold text-xs sm:text-sm">
          Resmi Firma Bilgilerimiz
        </p>
      </div>

      <p className="font-medium text-base sm:text-lg">
        Resmi Firma Bilgilerimiz
      </p>
      <p className="my-3 text-sm sm:text-base">
        Ürün ve hizmetlerimizle ilgili detaylı bilgi almak için kataloğumuzu
        inceleyebilirsiniz. Size en uygun çözümleri keşfetmek için kataloğumuza
        göz atın.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          {!isLogin ? (
            <>
              <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
                Firma Unvanı
              </p>
              <p className="text-[#232323] w-full text-base sm:text-xl">
                AYYILDIZ TÜNEL EKİPMANLARI İMALATI MÜHENDİSLİK SANAYİ VE TİCARET
                ANONİM ŞİRKETİ
              </p>
            </>
          ) : (
            <>
              <p className="text-[#232323] flex items-center gap-1.5 font-medium w-full sm:w-1/3 text-base sm:text-xl">
                <img src="/images/icons/profil/kilitli.svg" /> Firma Unvanı
              </p>
              <p className="w-full placeholder-[#1D547D] text-[#1D547D] text-base py-3 px-[10px] border border-[#A2ACC7] border-dashed rounded-sm">
                AYYILDIZ TÜNEL EKİPMANLARI İMALATI MÜHENDİSLİK SANAYİ VE TİCARET
                ANONİM ŞİRKETİ
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Marka Adı
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            AYYILDIZ TÜNEL EKİPMANLARI
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Hizmet Sektörü
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            Demir Çelik İmalatı
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Faaliyet Alanı
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="border w-32 sm:w-40 border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-center">
                    Faaliyet Türü
                  </th>
                  <th className="border border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-left">
                    Faaliyet Alanı
                  </th>
                  <th className="border w-32 sm:w-40 border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-center">
                    NACE Kodu
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                    Ana Faaliyet
                  </td>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                    Metallerin Makinede İşlenmesi (Torna Tesfiye İşleri, Metal
                    Parçaları Delme, Tornalama, Frezeleme, Rendeleme, Parlatma,
                    Oluk Açma, Perdahlama, Birleştirme, Kaynak Yapma Vb.
                    Faaliyetler) (Metallerin Lazerle Kesilmesi Hariç)
                  </td>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm text-center">
                    25.62.02
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                    EK Faaliyet - 1
                  </td>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                    Demir/Çelikten Haddelenmiş/Soğuk Çekilmiş Yassı Ürünlerin
                    Toptan Ticareti
                  </td>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm text-center">
                    46.72.08
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                    EK Faaliyet - 2
                  </td>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                    Demir/çelikten bar ve çubukların, profillerin, levha
                    kazıkların (palplanş), tüp ve boruların toptan ticareti
                    (filmaşin, inşaat demiri, sondaj borusu, petrol, gaz vb.
                    hatlar için borular, vb. ile tel dahil)
                  </td>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm text-center">
                    46.72.09
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                    EK Faaliyet - 3
                  </td>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                    Demir/çelikten bar ve çubukların, profillerin, levha
                    kazıkların (palplanş), tüp ve boruların toptan ticareti
                    (filmaşin, inşaat demiri, sondaj borusu, petrol, gaz vb.
                    hatlar için borular, vb. ile tel dahil)
                  </td>
                  <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm text-center">
                    46.72.09
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Faaliyet Durumu
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">Faal</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Kuruluş Tarihi
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            05.09.2022
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Kuruluş Şehri
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">Ankara</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Vergi Kimlik Numarası
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            1260941872
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Vergi Dairesi Adı
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            Ulus Vergi Dairesi
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            MERSİS No
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            123456789012
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            E-Fatura Kullanımı
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">Evet</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            E-Arşiv Kullanımı
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">Evet</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            E-İrsaliye Kullanımı
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">Evet</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            E-Defter Kullanımı
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">Evet</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Merkez Adresi
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl break-words">
            Finanskent Mahallesi Finans Caddesi No:42/1 34760 Ümraniye/İSTANBUL
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            KEP Adresi
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            Mevcut Değil
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            E-Posta Adresi
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            UzunmailadresiAUzunmailadresi.Com.Tr
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Resmi Web Adresi
          </p>
          <p className="text-[#120A8F] w-full text-base sm:text-xl">
            wwwUzunmailadresi.Com.Tr
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            İletişim Telefonu
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            0312 123 4567
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Fax Numarası
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            0312 123 5566
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Banka IBAN Numarası
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            TR11 0000 0000 0000 0000 0000 00
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Banka IBAN Numarası
          </p>
          <p className="text-[#232323] w-full text-base sm:text-xl">
            KuveytTürk
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FirmaBilgileri;
