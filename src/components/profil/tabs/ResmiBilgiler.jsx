import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";

const FirmaBilgileri = () => {
  const { isLogin, user } = useAuth();
  const { firma } = user;

  const [isSektorDropdownOpen, setIsSektorDropdownOpen] = useState(false);
  const [isEFaturaDropdownOpen, setIsEFaturaDropdownOpen] = useState(false);
  const [isEArsivDropdownOpen, setIsEArsivDropdownOpen] = useState(false);
  const [isEIrsaliyeDropdownOpen, setIsEIrsaliyeDropdownOpen] = useState(false);
  const [isEDefterDropdownOpen, setIsEDefterDropdownOpen] = useState(false);

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
    faaliyet_durumu: firma.resmi_bilgiler.faaliyet_durumu,
    kurulus_tarihi: firma.kurulus_tarihi,
    kurulus_sehri: firma.kurulus_sehri,
    vkn: firma.vergi_kimlik_no,
    vergi_dairesi_adi: firma.resmi_bilgiler.vergi_dairesi_adi,
    mersis_no: firma.resmi_bilgiler.mersis_no,
    e_fatura_kullanimi: firma.resmi_bilgiler.e_fatura_kullanimi,
    e_arsiv_kullanimi: firma.resmi_bilgiler.e_arsiv_kullanimi,
    e_irsaliye_kullanimi: firma.resmi_bilgiler.e_irsaliye_kullanimi,
    e_defter_kullanimi: firma.resmi_bilgiler.e_defter_kullanimi,
    merkez_adresi: firma.merkez_adresi,
    kep_adresi: firma.kep_adresi,
    email: firma.email,
    web_sitesi: firma.web_sitesi,
    iletisim_telefonu: firma.iletisim_telefonu,
    fax_numarasi: firma.resmi_bilgiler.fax_numarasi,
    iban_numarasi: firma.resmi_bilgiler.banka_iban,
    banka_adi: firma.resmi_bilgiler.banka_adi,
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
    setIsSektorDropdownOpen(false);
  };

  const handleBooleanSelect = (field, value) => {
    const boolValue = value === "Evet";

    setFormData((prev) => ({
      ...prev,
      [field]: boolValue,
    }));

    switch (field) {
      case "e_fatura_kullanimi":
        setIsEFaturaDropdownOpen(false);
        break;
      case "e_arsiv_kullanimi":
        setIsEArsivDropdownOpen(false);
        break;
      case "e_irsaliye_kullanimi":
        setIsEIrsaliyeDropdownOpen(false);
        break;
      case "e_defter_kullanimi":
        setIsEDefterDropdownOpen(false);
        break;
      default:
        break;
    }
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
            onClick={() => setIsSektorDropdownOpen(!isSektorDropdownOpen)}
            className="py-3 px-[10px] border border-[#A2ACC7] flex items-center justify-between border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
          >
            <p>{formData.hizmet_alani}</p>
            <button type="button">
              <img
                src="/images/icons/down.svg"
                alt="Aşağı"
                className={`transition-transform duration-200 ${
                  isSektorDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {isSektorDropdownOpen && (
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

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#3D4D66] montserrat font-medium">
          <img src="/images/icons/profil/kilitli.svg" alt="" />
          Faaliyet Durumu
        </p>
        <input
          type="text"
          disabled
          name="faaliyet_durumu"
          value={formData.faaliyet_durumu ? "Faal" : "Pasif"}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#3D4D66] montserrat font-medium">
          <img src="/images/icons/profil/kilitli.svg" alt="" />
          Kuruluş Tarihi
        </p>
        <input
          type="text"
          disabled
          name="kurulus_tarihi"
          value={formData.kurulus_tarihi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#3D4D66] montserrat font-medium">
          <img src="/images/icons/profil/kilitli.svg" alt="" />
          Kuruluş Şehri
        </p>
        <input
          type="text"
          disabled
          name="kurulus_tarihi"
          value={formData.kurulus_sehri}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#3D4D66] montserrat font-medium">
          <img src="/images/icons/profil/kilitli.svg" alt="" />
          Vergi Kimlik No
        </p>
        <input
          type="text"
          disabled
          name="vkn"
          value={formData.vkn}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#3D4D66] montserrat font-medium">
          <img src="/images/icons/profil/kilitli.svg" alt="" />
          Vergi Dairesi Adı
        </p>
        <input
          type="text"
          disabled
          name="vergi_dairesi_adi"
          value={formData.vergi_dairesi_adi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          MERSİS No
        </p>
        <input
          type="text"
          name="mersis_no"
          value={formData.mersis_no}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      {/* E-Fatura Dropdown - Fixed */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row relative">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          E-Fatura Kullanımı
        </p>
        <div className="w-full relative">
          <div
            onClick={() => setIsEFaturaDropdownOpen(!isEFaturaDropdownOpen)}
            className="py-3 px-[10px] border border-[#A2ACC7] flex items-center justify-between border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
          >
            <p>{formData.e_fatura_kullanimi ? "Evet" : "Hayır"}</p>
            <button type="button">
              <img
                src="/images/icons/down.svg"
                alt="Aşağı"
                className={`transition-transform duration-200 ${
                  isEFaturaDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {isEFaturaDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#A2ACC7] rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                onClick={() =>
                  handleBooleanSelect("e_fatura_kullanimi", "Evet")
                }
              >
                Evet
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                onClick={() =>
                  handleBooleanSelect("e_fatura_kullanimi", "Hayır")
                }
              >
                Hayır
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row relative">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          E-Arşiv Kullanımı
        </p>
        <div className="w-full relative">
          <div
            onClick={() => setIsEArsivDropdownOpen(!isEArsivDropdownOpen)}
            className="py-3 px-[10px] border border-[#A2ACC7] flex items-center justify-between border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
          >
            <p>{formData.e_arsiv_kullanimi ? "Evet" : "Hayır"}</p>
            <button type="button">
              <img
                src="/images/icons/down.svg"
                alt="Aşağı"
                className={`transition-transform duration-200 ${
                  isEArsivDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {isEArsivDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#A2ACC7] rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                onClick={() => handleBooleanSelect("e_arsiv_kullanimi", "Evet")}
              >
                Evet
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                onClick={() =>
                  handleBooleanSelect("e_arsiv_kullanimi", "Hayır")
                }
              >
                Hayır
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row relative">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          E-İrsaliye Kullanımı
        </p>
        <div className="w-full relative">
          <div
            onClick={() => setIsEIrsaliyeDropdownOpen(!isEIrsaliyeDropdownOpen)}
            className="py-3 px-[10px] border border-[#A2ACC7] flex items-center justify-between border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
          >
            <p>{formData.e_irsaliye_kullanimi ? "Evet" : "Hayır"}</p>
            <button type="button">
              <img
                src="/images/icons/down.svg"
                alt="Aşağı"
                className={`transition-transform duration-200 ${
                  isEIrsaliyeDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {isEIrsaliyeDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#A2ACC7] rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                onClick={() =>
                  handleBooleanSelect("e_irsaliye_kullanimi", "Evet")
                }
              >
                Evet
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                onClick={() =>
                  handleBooleanSelect("e_irsaliye_kullanimi", "Hayır")
                }
              >
                Hayır
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row relative">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          E-Defter Kullanımı
        </p>
        <div className="w-full relative">
          <div
            onClick={() => setIsEDefterDropdownOpen(!isEDefterDropdownOpen)}
            className="py-3 px-[10px] border border-[#A2ACC7] flex items-center justify-between border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
          >
            <p>{formData.e_defter_kullanimi ? "Evet" : "Hayır"}</p>
            <button type="button">
              <img
                src="/images/icons/down.svg"
                alt="Aşağı"
                className={`transition-transform duration-200 ${
                  isEDefterDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          {isEDefterDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#A2ACC7] rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                onClick={() =>
                  handleBooleanSelect("e_defter_kullanimi", "Evet")
                }
              >
                Evet
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1D547D]"
                onClick={() =>
                  handleBooleanSelect("e_defter_kullanimi", "Hayır")
                }
              >
                Hayır
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Merkez Adresi */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Merkez Adresi
        </p>
        <input
          type="text"
          name="merkez_adresi"
          value={formData.merkez_adresi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      {/* KEP Adresi */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          KEP Adresi
        </p>
        <input
          type="text"
          name="kep_adresi"
          value={formData.kep_adresi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      {/* E-Posta Adresi */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          E-Posta Adresi
        </p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      {/* Web Sitesi */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Resmi Web Adresi
        </p>
        <input
          type="url"
          name="web_sitesi"
          value={formData.web_sitesi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      {/* İletişim Telefonu */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          İletişim Telefonu
        </p>
        <input
          type="tel"
          name="iletisim_telefonu"
          value={formData.iletisim_telefonu}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      {/* Fax Numarası */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Fax Numarası
        </p>
        <input
          type="tel"
          name="fax_numarasi"
          value={formData.fax_numarasi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      {/* Banka IBAN */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items_center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Banka IBAN Numarası
        </p>
        <input
          type="text"
          name="iban_numarasi"
          value={formData.iban_numarasi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      {/* Banka Adı */}
      <div className="flex flex-col sm:items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row">
        <p className="flex sm:w-1/3 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Banka Adı
        </p>
        <input
          type="text"
          name="banka_adi"
          value={formData.banka_adi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
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
