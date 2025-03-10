import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FirmaCard from "../home/firma-vitrin/FirmaCard";
import FirmaYatayCard from "../home/firma-vitrin/FirmaYatayCard";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const [pageKey, setPageKey] = useState(0);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setPageKey((prev) => prev + 1);
  }, [currentPage, itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFirmalar = firmalar.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(firmalar.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (items) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    return pages.filter((page, index, array) => array.indexOf(page) === index);
  };

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

  const layoutVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
        <p className="text-[#120A8F] montserrat font-semibold text-sm md:text-base">
          "Aramanızla eşleşen 3146 tesis bulundu."
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSiralama("dikey")}
              className="cursor-pointer outline-none"
            >
              <img
                src="/images/icons/firma-ara/dikey.svg"
                className={`${
                  siralama === "dikey" ? "ring ring-[#232323]/70" : "ring-0"
                } duration-300 rounded-lg w-8 md:w-auto`}
                alt="Dikey görünüm"
              />
            </button>
            <button
              onClick={() => setSiralama("yatay")}
              className="cursor-pointer hidden md:block outline-none"
            >
              <img
                src="/images/icons/firma-ara/yatay.svg"
                className={`${
                  siralama === "yatay" ? "ring ring-[#232323]/70" : "ring-0"
                } duration-300 rounded-lg w-8 md:w-auto`}
              />
            </button>
          </div>
          <div className="relative w-full md:w-auto">
            <motion.div
              className="px-3 md:px-5 py-2 w-full md:w-80 flex items-center gap-2 md:gap-5 rounded-lg border border-[#A2ACC7] montserrat text-xs md:text-sm justify-between cursor-pointer"
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

      <AnimatePresence mode="wait">
        {siralama === "dikey" ? (
          <motion.div
            key={`dikey-${pageKey}`}
            variants={layoutVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="mt-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {currentFirmalar.map((firma) => (
                <FirmaCard key={`${firma.id}-${pageKey}`} firma={firma} />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <p className="montserrat font-medium text-[#232323] text-sm">
                Her sayfada
              </p>
              {[20, 40].map((number) => (
                <button
                  key={number}
                  onClick={() => handleItemsPerPageChange(number)}
                  className={`px-4 py-2 ${
                    itemsPerPage === number
                      ? "bg-[#A2ACC7]"
                      : "border border-[#A2ACC7] hover:bg-[#A2ACC5]/60"
                  } rounded-lg font-medium montserrat duration-300`}
                >
                  {number}
                </button>
              ))}
              <p className="montserrat font-medium text-[#232323] text-sm">
                sonuç göster
              </p>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 border border-[#A2ACC7] rounded-lg ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#A2ACC5]/60 cursor-pointer"
                } duration-300`}
              >
                <img src="/images/icons/arrow-left.svg" alt="Previous" />
              </button>
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof page === "number" && handlePageChange(page)
                  }
                  className={`px-4 py-2 ${
                    page === currentPage
                      ? "bg-[#A2ACC7]"
                      : "border border-[#A2ACC7] hover:bg-[#A2ACC5]/60"
                  } rounded-lg font-medium montserrat ${
                    typeof page !== "number"
                      ? "cursor-default"
                      : "cursor-pointer"
                  } duration-300`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border border-[#A2ACC7] rounded-lg ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#A2ACC5]/60 cursor-pointer"
                } duration-300`}
              >
                <img src="/images/icons/arrow-right.svg" alt="Next" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`yatay-${pageKey}`}
            variants={layoutVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="mt-5 flex flex-col gap-4"
          >
            {currentFirmalar.map((firma) => (
              <FirmaYatayCard key={`${firma.id}-${pageKey}`} firma={firma} />
            ))}
            <div className="mt-5 flex items-center gap-2">
              <p className="montserrat font-medium text-[#232323] text-sm">
                Her sayfada
              </p>
              {[10, 20].map((number) => (
                <button
                  key={number}
                  onClick={() => handleItemsPerPageChange(number)}
                  className={`px-4 py-2 ${
                    itemsPerPage === number
                      ? "bg-[#A2ACC7]"
                      : "border border-[#A2ACC7] hover:bg-[#A2ACC5]/60"
                  } rounded-lg font-medium montserrat duration-300`}
                >
                  {number}
                </button>
              ))}
              <p className="montserrat font-medium text-[#232323] text-sm">
                sonuç göster
              </p>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 border border-[#A2ACC7] rounded-lg ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#A2ACC5]/60 cursor-pointer"
                } duration-300`}
              >
                <img src="/images/icons/arrow-left.svg" alt="Previous" />
              </button>
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof page === "number" && handlePageChange(page)
                  }
                  className={`px-4 py-2 ${
                    page === currentPage
                      ? "bg-[#A2ACC7]"
                      : "border border-[#A2ACC7] hover:bg-[#A2ACC5]/60"
                  } rounded-lg font-medium montserrat ${
                    typeof page !== "number"
                      ? "cursor-default"
                      : "cursor-pointer"
                  } duration-300`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border border-[#A2ACC7] rounded-lg ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#A2ACC5]/60 cursor-pointer"
                } duration-300`}
              >
                <img src="/images/icons/arrow-right.svg" alt="Next" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Firmalar;
