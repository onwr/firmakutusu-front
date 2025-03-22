import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";

const UrunHizmetler = () => {
  const { isLogin, user } = useAuth();
  const { firma } = user;
  const { urun_hizmetler } = firma;
  const { urunler } = urun_hizmetler;

  const [formData, setFormData] = useState({
    baslik: urun_hizmetler.baslik,
    mesaj: urun_hizmetler.metin,
    kataloglar: urun_hizmetler.urunler.map((urun) => ({
      id: urun.id,
      belge_adi: urun.belge_adi,
      gecerlilik_baslangic: urun.gecerlilik_baslangic,
      gecerlilik_bitis: urun.gecerlilik_bitis,
      acilis_katalogu: urun.acilis_katalogu,
      pdf_url: urun.pdf_url,
    })),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKatalogChange = (katalogId, field, value) => {
    if (field === "acilis_katalogu" && value) {
      // If setting a new catalog as açılış kataloğu, unset others
      setFormData((prev) => ({
        ...prev,
        kataloglar: prev.kataloglar.map((katalog) => ({
          ...katalog,
          acilis_katalogu: katalog.id === katalogId ? true : false,
        })),
      }));
    } else {
      // For other fields, update normally
      setFormData((prev) => ({
        ...prev,
        kataloglar: prev.kataloglar.map((katalog) =>
          katalog.id === katalogId ? { ...katalog, [field]: value } : katalog
        ),
      }));
    }
  };

  const handleFileUpload = (katalogId, file) => {
    // API'ye dosya yükleme işlemi burada yapılacak
    console.log("File upload for katalog:", katalogId, file);
  };

  const handleSubmit = () => {
    // API'ye kaydetme işlemi burada yapılacak
    console.log("Saving changes:", formData);
  };

  return (
    <motion.div
      key="tab-1"
      className="montserrat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-end">
        <p className="text-[#120A8F] font-semibold text-sm">
          Ürün & Hizmetlerimiz
        </p>
      </div>

      <div className="flex flex-col sm:items-center mt-5 gap-2 sm:gap-5 sm:flex-row">
        <p className="flex w-32 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Başlık
        </p>
        <input
          type="text"
          name="baslik"
          value={formData.baslik}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>

      <div className="flex mt-4 flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row">
        <p className="flex w-32 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Metin
        </p>
        <textarea
          type="text"
          name="mesaj"
          value={formData.mesaj}
          onChange={handleInputChange}
          className="py-3 px-[10px] border w-full border-[#A2ACC7] border-dashed outline-0 rounded-lg text-[#1D547D]"
        />
      </div>

      <div className="flex mt-4 flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row">
        <p className="flex w-32  items-start gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Açılış Kataloğu
        </p>
        <div className="p-[10px] border border-[#A2ACC7] border-dashed rounded-lg w-full flex justify-center items-center">
          <img
            src="/images/icons/firma-profil/icons/afis.svg"
            className="w-full"
          />
        </div>
      </div>

      {formData.kataloglar.map((katalog, index) => (
        <div
          key={katalog.id}
          className="flex mt-4 flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row"
        >
          <p className="flex w-32 items-center gap-1.5 text-[#007356] montserrat font-medium">
            <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
            Katalog {index + 1}
          </p>
          <div className="p-3 md:p-6 border gap-5 border-[#A2ACC7] border-dashed rounded-lg w-full md:flex-row flex-col flex">
            <div className="flex-1">
              <img
                src="/images/icons/firma-profil/icons/afis.svg"
                className="rounded-lg md:h-[55vh] mx-auto"
              />
            </div>
            <div className="flex-1">
              <p className="montserrat font-semibold text-sm text-[#232323]">
                Katalok Belgesini Yükle
              </p>
              <div className="flex mt-3 gap-4 items-center">
                <label className="w-full">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) =>
                      handleFileUpload(katalog.id, e.target.files[0])
                    }
                    className="hidden"
                  />
                  <div className="w-full bg-[#CED4DA] rounded-sm py-[10px] text-sm text-[#10069F] flex items-center justify-center gap-1 cursor-pointer">
                    <img src="/images/icons/profil/ekle-yesil.svg" alt="" />
                    Yükle
                  </div>
                </label>
                <button className="w-full bg-[#CED4DA] rounded-sm py-[10px] text-sm text-[#10069F] flex items-center justify-center gap-1">
                  <img src="/images/icons/profil/ekle-yesil.svg" alt="" />
                  Sil
                </button>
              </div>

              <div className="flex montserrat flex-col mt-3 gap-1">
                <p className="text-[#232323] font-semibold">Belgenin Adı</p>
                <textarea
                  type="text"
                  value={katalog.belge_adi}
                  onChange={(e) =>
                    handleKatalogChange(katalog.id, "belge_adi", e.target.value)
                  }
                  placeholder="Belge adı"
                  className="py-3 px-[10px] border w-full border-[#A2ACC7] border-dashed outline-0 rounded-lg text-[#1D547D] placeholder-[#1D547D]"
                />
              </div>

              <div className="flex montserrat flex-col mt-3 gap-1">
                <p className="text-[#232323] font-semibold">
                  Geçerlilik Başlanğıç Tarihi
                </p>
                <input
                  type="date"
                  value={katalog.gecerlilik_baslangic}
                  onChange={(e) =>
                    handleKatalogChange(
                      katalog.id,
                      "gecerlilik_baslangic",
                      e.target.value
                    )
                  }
                  className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                />
              </div>

              <div className="flex montserrat flex-col mt-3 gap-1">
                <p className="text-[#232323] font-semibold">
                  Son Geçerlilik Tarihi
                </p>
                <input
                  type="date"
                  value={katalog.gecerlilik_bitis}
                  onChange={(e) =>
                    handleKatalogChange(
                      katalog.id,
                      "gecerlilik_bitis",
                      e.target.value
                    )
                  }
                  className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                />
              </div>

              <div className="mt-3 py-[10px] px-4 flex  items-center gap-2 border border-[#A42E2D] rounded-sm border-dashed">
                <input
                  type="checkbox"
                  checked={katalog.acilis_katalogu}
                  onChange={(e) =>
                    handleKatalogChange(
                      katalog.id,
                      "acilis_katalogu",
                      e.target.checked
                    )
                  }
                  className="w-5 h-5 appearance-none border-2 rounded-full border-[#45535E] checked:bg-[#45535E] checked:border-transparent"
                />
                <p className="text-[#A42E2D] text-sm font-semibold">
                  Açılış kataloğu yap
                </p>
              </div>

              <div className="mt-4 md:mt-8 gap-3 flex md:flex-row flex-col">
                <button className="flex-1 flex items-center font-medium gap-1.5 bg-[#F1EEE6] rounded-lg py-[18px] text-[#1C5540] justify-center">
                  <img src="/images/icons/profil/arti-yesil.svg" alt="" />
                  <p>Belgeyi Sil</p>
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 flex items-center font-medium gap-1.5 bg-[#1C5540] rounded-lg py-[18px] text-white justify-center"
                >
                  <img src="/images/icons/profil/arti-beyaz.svg" alt="" />
                  <p>Değişiklikleri Kaydet</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default UrunHizmetler;
