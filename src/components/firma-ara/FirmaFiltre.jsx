import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import illerData from "../../utils/il.json";
import ilcelerData from "../../utils/ilceler.json";

const FirmaFiltre = () => {
  const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);
  const [isIlDropdownOpen, setIsIlDropdownOpen] = useState(false);
  const [isIlceDropdownOpen, setIsIlceDropdownOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState("İnşaat & Tadilat");
  const [selectedIl, setSelectedIl] = useState("Seçiniz");
  const [selectedIlce, setSelectedIlce] = useState("Seçiniz");
  const [availableIlceler, setAvailableIlceler] = useState([]);

  const sectors = [
    "İnşaat & Tadilat",
    "Otomotiv",
    "Sağlık",
    "Eğitim",
    "Teknoloji",
    "Gıda",
    "Tekstil",
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  const handleIlSelect = (il) => {
    setSelectedIl(il);
    setSelectedIlce("Seçiniz");
    setAvailableIlceler(ilcelerData[il] || []);
    setIsIlDropdownOpen(false);
  };

  return (
    <div className="border border-[#A2ACC7] rounded-[10px] p-6">
      <div className="flex montserrat items-center gap-2">
        <img src="/images/icons/filtre.svg" alt="Filtre" />
        <p className="font-semibold">Aramanızı özelleştirin.</p>
      </div>

      <div className="mt-5 flex montserrat flex-col gap-2">
        <div className="relative">
          <motion.div
            className="py-2 px-5 rounded-lg border border-[#A2ACC7] flex items-center justify-between cursor-pointer"
            onClick={() => setIsSectorDropdownOpen(!isSectorDropdownOpen)}
          >
            <div className="flex flex-col">
              <p className="text-sm text-[#232323]">Sektör</p>
              <p className="text-[#232323] font-medium">{selectedSector}</p>
            </div>
            <motion.img
              src="/images/icons/down.svg"
              animate={{ rotate: isSectorDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              alt=""
            />
          </motion.div>
          <AnimatePresence>
            {isSectorDropdownOpen && (
              <motion.div
                className="absolute w-full mt-1 bg-white rounded-lg shadow-lg z-50 py-2 max-h-60 overflow-y-auto border border-[#A2ACC7]"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {sectors.map((sector, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    onClick={() => {
                      setSelectedSector(sector);
                      setIsSectorDropdownOpen(false);
                    }}
                    className="w-full px-5 py-3 text-left hover:bg-gray-100 text-[#232323]"
                  >
                    {sector}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <motion.div
            className="py-2 px-5 rounded-lg border border-[#A2ACC7] flex items-center justify-between cursor-pointer"
            onClick={() => setIsIlDropdownOpen(!isIlDropdownOpen)}
          >
            <div className="flex flex-col">
              <p className="text-sm text-[#232323]">İl</p>
              <p className="text-[#232323] font-medium">{selectedIl}</p>
            </div>
            <motion.img
              src="/images/icons/down.svg"
              animate={{ rotate: isIlDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              alt=""
            />
          </motion.div>
          <AnimatePresence>
            {isIlDropdownOpen && (
              <motion.div
                className="absolute w-full mt-1 bg-white rounded-lg shadow-lg z-50 py-2 max-h-60 overflow-y-auto border border-[#A2ACC7]"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {illerData.iller.map((il, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    onClick={() => handleIlSelect(il)}
                    className="w-full px-5 py-3 text-left hover:bg-gray-100 text-[#232323]"
                  >
                    {il}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <motion.div
            className="py-2 px-5 rounded-lg border border-[#A2ACC7] flex items-center justify-between cursor-pointer"
            onClick={() => setIsIlceDropdownOpen(!isIlceDropdownOpen)}
          >
            <div className="flex flex-col">
              <p className="text-sm text-[#232323]">İlçe</p>
              <p className="text-[#232323] font-medium">{selectedIlce}</p>
            </div>
            <motion.img
              src="/images/icons/down.svg"
              animate={{ rotate: isIlceDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              alt=""
            />
          </motion.div>
          <AnimatePresence>
            {isIlceDropdownOpen && (
              <motion.div
                className="absolute w-full mt-1 bg-white rounded-lg shadow-lg z-50 py-2 max-h-60 overflow-y-auto border border-[#A2ACC7]"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {availableIlceler.map((ilce, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    onClick={() => {
                      setSelectedIlce(ilce);
                      setIsIlceDropdownOpen(false);
                    }}
                    className="w-full px-5 py-3 text-left hover:bg-gray-100 text-[#232323]"
                  >
                    {ilce}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="py-2 px-5 montserrat rounded-lg border border-[#A2ACC7] flex flex-col">
          <label htmlFor="anahtarKelime" className="text-sm text-[#232323]">
            Anahtar Kelime
          </label>
          <input
            type="text"
            id="anahtarKelime"
            placeholder="Firma Unvanı, Vergi No, NACE Kodu"
            className="text-xs text-[#232323] outline-none mt-1"
          />
        </div>
      </div>
      <button className="rounded-[10px] w-full mt-5 text-white montserrat font-medium py-2 px-5 duration-300 cursor-pointer hover:bg-[#232323] bg-[#1C5540] border border-[#A2ACC7] flex items-center gap-1 justify-center">
        Firma Ara <img src="/images/icons/find.svg" alt="" />
      </button>

      <p className="font-semibold montserrat mt-8">Metin Başlığı</p>
      <p className="text-xs text-[#232323]">
        Finanskent Mahallesi Finans Caddesi No:42/1 34760 Ümraniye/İSTANBUL
        Finanskent Maha..Finanskent Mahallesi Finans Caddesi No:42/1 34760
        Ümraniye/İSTANBUL Finanskent Maha..Finanskent Mahallesi Finans Caddesi
        No:42/1 34760 Ümraniye/İSTANBUL Finanskent Maha..
      </p>
    </div>
  );
};

export default FirmaFiltre;
