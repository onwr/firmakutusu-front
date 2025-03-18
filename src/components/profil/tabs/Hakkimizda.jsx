import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";

const Hakkimizda = () => {
  const { isLogin, user } = useAuth();
  const { firma } = user;

  const [formData, setFormData] = useState({
    ceo_resmi_url: firma.hakkimizda.ceo_resmi_url,
    baslik: firma.hakkimizda.baslik,
    ceo_adi: firma.hakkimizda.ceo_adi,
    ceo_mesaji: firma.hakkimizda.ceo_mesaji,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        <p className="text-[#120A8F] font-semibold text-sm">Hakkımızda</p>
      </div>

      <div className="p-5 border mt-3 md:mt-0 border-[#A2ACC7] rounded-lg border-dashed md:w-fit">
        <img
          src="/images/icons/firma-profil/icons/ceo.svg"
          className="mx-auto"
          alt=""
        />
        <div className="flex mt-5 gap-5">
          <button className="flex p-2 gap-2 justify-center items-center bg-[#CED4DA] rounded-sm text-[#10069F] text-sm w-full">
            <img src="/images/icons/profil/sil.svg" alt="" />
            Sil
          </button>
          <button className="flex p-2 gap-2 justify-center items-center bg-[#CED4DA] rounded-sm text-[#10069F] text-sm w-full">
            <img src="/images/icons/profil/yukle.svg" alt="" />
            Yükle
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:items-center mt-5 gap-2 sm:gap-5 sm:flex-row">
        <p
          className="flex w-32
         items-center gap-1.5 text-[#007356] montserrat font-medium"
        >
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
      <div className="flex mt-2 flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row">
        <p className="flex w-32  items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          Metin
        </p>
        <textarea
          type="text"
          name="ceo_mesaji"
          value={formData.ceo_mesaji}
          onChange={handleInputChange}
          className="py-3 px-[10px] border w-full border-[#A2ACC7] border-dashed outline-0 rounded-lg text-[#1D547D]"
        ></textarea>
      </div>
      <div className="flex flex-col sm:items-center mt-2 gap-2 sm:gap-5 sm:flex-row">
        <p className="flex w-32 items-center gap-1.5 text-[#007356] montserrat font-medium">
          <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
          CEO Adı
        </p>
        <input
          type="text"
          name="ceo_adi"
          value={formData.ceo_adi}
          onChange={handleInputChange}
          className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
        />
      </div>
    </motion.div>
  );
};

export default Hakkimizda;
