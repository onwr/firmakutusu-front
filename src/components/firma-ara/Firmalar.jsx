import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FirmaCard from "../home/firma-vitrin/FirmaCard";
const Firmalar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(
    "Kuruluş tarihine göre ( Eskiden Yeniye )"
  );
  const [siralama, setSiralama] = useState("dikey");

  const filterOptions = [
    "Kuruluş tarihine göre ( Eskiden Yeniye )",
    "Kuruluş tarihine göre ( Yeniden Eskiye )",
  ];

  const [firmalar] = useState([
    {
      id: 1,
      isim: "AYYILDIZ TÜNEL EKİPMANLARI İMALATI MÜHENDİSLİK SAN. VE TİC. A.Ş.",
      sektor: "Teknoloji Bilişim",
      adres:
        "Finanskent Mahallesi Finans Caddesi No:42/1 34760 Ümraniye/İSTANBUL",
      telefon: "0212 123 4567",
      logo: "/images/icons/home/firma-vitrin/logo.svg",
      kapak: "/images/icons/home/firma-vitrin/cizgilikare.svg",
    },
    {
      id: 2,
      isim: "MAYA YAZILIM TEKNOLOJİLERİ A.Ş.",
      sektor: "Yazılım",
      adres: "Maslak Mahallesi Büyükdere Caddesi No:245 34485 Sarıyer/İSTANBUL",
      telefon: "0212 444 5566",
      logo: "/images/icons/home/firma-vitrin/logo.svg",
      kapak: "/images/icons/home/firma-vitrin/cizgilikare.svg",
    },
    {
      id: 3,
      isim: "YILDIZ İNŞAAT VE YAPI MALZEMELERİ LTD. ŞTİ.",
      sektor: "İnşaat",
      adres:
        "Organize Sanayi Bölgesi 15. Cadde No:12 34555 Başakşehir/İSTANBUL",
      telefon: "0212 777 8899",
      logo: "/images/icons/home/firma-vitrin/logo.svg",
      kapak: "/images/icons/home/firma-vitrin/cizgilikare.svg",
    },
    {
      id: 4,
      isim: "DELTA MEDİKAL CİHAZLAR VE EKİPMANLARI SAN. TİC. A.Ş.",
      sektor: "Sağlık",
      adres: "Kartal Mahallesi Hastane Caddesi No:78 34758 Kartal/İSTANBUL",
      telefon: "0216 333 4455",
      logo: "/images/icons/home/firma-vitrin/logo.svg",
      kapak: "/images/icons/home/firma-vitrin/cizgilikare.svg",
    },
    {
      id: 5,
      isim: "GÜNEŞ ENERJİ SİSTEMLERİ VE DANIŞMANLIK HİZMETLERİ",
      sektor: "Enerji",
      adres: "Yeşilköy Mahallesi Enerji Sokak No:25 34149 Bakırköy/İSTANBUL",
      telefon: "0212 555 6677",
      logo: "/images/icons/home/firma-vitrin/logo.svg",
      kapak: "/images/icons/home/firma-vitrin/cizgilikare.svg",
    },
  ]);

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

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[#120A8F] montserrat font-semibold">
          "Aramanızla eşleşen 3146 tesis bulundu."
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSiralama("dikey")}
            className="cursor-pointer outline-none"
          >
            <img
              src="/images/icons/firma-ara/dikey.svg"
              className={`${
                siralama === "dikey" ? "ring ring-[#232323]/70" : "ring-0"
              } duration-300 rounded-lg`}
              alt="Dikey görünüm"
            />
          </button>
          <button
            onClick={() => setSiralama("yatay")}
            className="cursor-pointer outline-none"
          >
            <img
              src="/images/icons/firma-ara/yatay.svg"
              className={`${
                siralama === "yatay" ? "ring ring-[#232323]/70" : "ring-0"
              } duration-300 rounded-lg`}
            />
          </button>
          <div className="relative">
            <motion.div
              className="px-5 py-2 w-80 flex items-center gap-5 rounded-lg border border-[#A2ACC7] montserrat text-sm justify-between cursor-pointer"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <p className="truncate">{selectedFilter}</p>
              <motion.img
                src="/images/icons/down.svg"
                animate={{ rotate: isFilterOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                alt=""
              />
            </motion.div>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  className="absolute w-full mt-1 bg-white rounded-lg shadow-lg z-50 py-2 border border-[#A2ACC7]"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {filterOptions.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ backgroundColor: "#f3f4f6" }}
                      onClick={() => {
                        setSelectedFilter(option);
                        setIsFilterOpen(false);
                      }}
                      className="w-full px-5 py-3 text-left hover:bg-gray-100 text-[#232323] text-sm"
                    >
                      {option}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {siralama === "dikey" && (
          <div className="grid grid-cols-4 gap-5">
            {firmalar.map((firma) => (
              <FirmaCard key={firma.id} firma={firma} />
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center gap-2">
          <p className="montserrat font-medium text-[#232323] text-sm">
            Her sayfada
          </p>
          <button className="px-4 py-2 bg-[#A2ACC7] rounded-lg font-medium montserrat">
            20
          </button>
          <button className="px-4 cursor-pointer hover:bg-[#A2ACC5]/60 montserrat font-medium outline-none duration-300 py-2 border border-[#A2ACC7] rounded-lg">
            40
          </button>
          <p className="montserrat font-medium text-[#232323] text-sm">
            sonuç göster
          </p>
          <button className="px-4 cursor-pointer hover:bg-[#A2ACC5]/60 montserrat font-medium outline-none duration-300 py-2 border border-[#A2ACC7] rounded-lg">
            <img src="/images/icons/arrow-left.svg" />
          </button>
          <button className="px-4 cursor-pointer hover:bg-[#A2ACC5]/60 montserrat font-medium outline-none duration-300 py-2 border border-[#A2ACC7] rounded-lg">
            1
          </button>
          <button className="px-4 cursor-pointer hover:bg-[#A2ACC5]/60 montserrat font-medium outline-none duration-300 py-2 border border-[#A2ACC7] rounded-lg">
            2
          </button>
          <button className="px-4 cursor-pointer hover:bg-[#A2ACC5]/60 montserrat font-medium outline-none duration-300 py-2 border border-[#A2ACC7] rounded-lg">
            3
          </button>
          <button className="px-4 cursor-pointer hover:bg-[#A2ACC5]/60 montserrat font-medium outline-none duration-300 py-2 border border-[#A2ACC7] rounded-lg">
            ...
          </button>
          <button className="px-4 cursor-pointer hover:bg-[#A2ACC5]/60 montserrat font-medium outline-none duration-300 py-2 border border-[#A2ACC7] rounded-lg">
            <img src="/images/icons/arrow-right.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Firmalar;
