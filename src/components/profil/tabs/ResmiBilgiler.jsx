import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";

const FirmaBilgileri = () => {
  const { isLogin, user } = useAuth();
  const { firma } = user;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sektorler = [
    "İnşaat",
    "Otomotiv",
    "Tekstil",
    "Gıda",
    "Teknoloji",
    "Sağlık",
    "Eğitim",
    "Enerji",
    "Demir Çelik",
    "Diğer",
  ];

  const [formData, setFormData] = useState({
    firma_unvani: firma.firma_unvani,
    marka_adi: firma.marka_adi,
    hizmet_alani: firma.hizmet_alani,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSektorSelect = (sektor) => {
    setFormData((prev) => ({
      ...prev,
      hizmet_alani: sektor,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log("Değişiklikler kaydedildi:", formData);
  };

  const loginUI = (
    <>
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#3D4D66] montserrat font-medium">
          <img src="/images/icons/profil/kilitli.svg" alt="" />
          Firma Unvanı
        </p>
        <input
          type="text"
          disabled
          name="firma_unvani"
          value={formData.firma_unvani}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Marka Adı
        </p>
        <input
          type="text"
          name="marka_adi"
          value={formData.marka_adi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row relative">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Hizmet Sektörü
        </p>
        <div className="w-full relative">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="py-3 px-[10px] border border-[#A2ACC7] flex items-center justify-between border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
          >
            <p>{formData.hizmet_alani}</p>
            <button type="button">
              <img
                src="/images/icons/down.svg"
                alt="Aşağı"
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#A2ACC7] rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {sektorler.map((sektor, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                  onClick={() => handleSektorSelect(sektor)}
                >
                  {sektor}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <>
          <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
            <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
            Faaliyet Alanı
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="border font-medium w-32 sm:w-40 border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-center">
                    Faaliyet Türü
                  </th>
                  <th className="border w-32 sm:w-40 font-medium border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-left">
                    Faaliyet Alanı
                  </th>
                  <th className="border font-medium  border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-center">
                    NACE Kodu
                  </th>
                </tr>
              </thead>
              <tbody>
                {firma.faaliyet_alanlari?.map((faaliyet, index) => (
                  <tr key={index}>
                    <td className="border text-center border-[#A2ACC7] p-2 text-xs sm:text-sm">
                      {faaliyet.tur}
                    </td>
                    <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm text-center">
                      <p className="p-2 rounded-md border border-[#A2ACC7] border-dashed">
                        {faaliyet.nace_kodu}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button className="flex items-center w-full justify-center gap-1 bg-[#CED4DA] rounded-sm border border-[#1D547D] p-2">
                          <img src="/images/icons/profil/ekle-2.svg" /> Ekle
                        </button>
                        <button className="flex items-center w-full justify-center gap-1 bg-[#CED4DA] rounded-sm border border-[#1D547D] p-2">
                          <img src="/images/icons/profil/sil-2.svg" /> Sil
                        </button>
                      </div>
                    </td>
                    <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                      {faaliyet.alan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </>
  );

  const existingViewUI = (
    <>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Firma Unvanı
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.firma_unvani}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Marka Adı
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.marka_adi}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Hizmet Sektörü
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.sektor}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <>
          <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
            Faaliyet Alanı
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="border font-medium w-32 sm:w-40 border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-center">
                    Faaliyet Türü
                  </th>
                  <th className="border font-medium border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-left">
                    Faaliyet Alanı
                  </th>
                  <th className="border font-medium w-32 sm:w-40 border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-xs sm:text-sm text-center">
                    NACE Kodu
                  </th>
                </tr>
              </thead>
              <tbody>
                {firma.faaliyet_alanlari?.map((faaliyet, index) => (
                  <tr key={index}>
                    <td className="border text-center border-[#A2ACC7] p-2 text-xs sm:text-sm">
                      {faaliyet.tur}
                    </td>
                    <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm">
                      {faaliyet.alan}
                    </td>
                    <td className="border border-[#A2ACC7] p-2 text-xs sm:text-sm text-center">
                      {faaliyet.nace_kodu}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Faaliyet Durumu
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.faaliyet_durumu ? "Faal" : "Pasif"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Kuruluş Tarihi
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.kurulus_tarihi}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Kuruluş Şehri
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.kurulus_sehri}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Vergi Kimlik Numarası
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.vergi_kimlik_no}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Vergi Dairesi Adı
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.vergi_dairesi_adi}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          MERSİS No
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.mersis_no}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          E-Fatura Kullanımı
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.e_fatura_kullanimi ? "Evet" : "Hayır"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          E-Arşiv Kullanımı
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.e_arsiv_kullanimi ? "Evet" : "Hayır"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          E-İrsaliye Kullanımı
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.e_irsaliye_kullanimi ? "Evet" : "Hayır"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          E-Defter Kullanımı
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.e_defter_kullanimi ? "Evet" : "Hayır"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Merkez Adresi
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl break-words">
          {firma.merkez_adresi}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          KEP Adresi
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.kep_adresi || "Mevcut Değil"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          E-Posta Adresi
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.email}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Resmi Web Adresi
        </p>
        <p className="text-[#120A8F] w-full text-base sm:text-xl">
          {firma.web_sitesi}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          İletişim Telefonu
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.iletisim_telefonu}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Fax Numarası
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.fax_numarasi}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Banka IBAN Numarası
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.banka_iban}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 sm:justify-between">
        <p className="text-[#232323] font-medium w-full sm:w-1/3 text-base sm:text-xl">
          Banka Adı
        </p>
        <p className="text-[#232323] w-full text-base sm:text-xl">
          {firma.resmi_bilgiler.banka_adi}
        </p>
      </div>
    </>
  );

  return (
    <motion.div
      key="tab-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="montserrat px-4 lg:px-0"
    >
      <div className="flex justify-end mb-2 sm:mb-0">
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
        {isLogin && user ? loginUI : existingViewUI}
      </div>
    </motion.div>
  );
};

export default FirmaBilgileri;
