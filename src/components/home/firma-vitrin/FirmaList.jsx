import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FirmaCard from "./FirmaCard";
import Hero from "./Hero";

const FirmaList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const itemsPerPage = 15;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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

  const pageVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const [pageDirection, setPageDirection] = useState(0);
  const indexOfLastFirma = currentPage * itemsPerPage;
  const indexOfFirstFirma = indexOfLastFirma - itemsPerPage;
  const currentFirmalar = firmalar.slice(indexOfFirstFirma, indexOfLastFirma);
  const totalPages = Math.ceil(firmalar.length / itemsPerPage);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setPageDirection(1);
        setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalPages]);

  const handlePageChange = (pageNumber) => {
    setPageDirection(pageNumber > currentPage ? 1 : -1);
    setCurrentPage(pageNumber);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setPageDirection(1);
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setPageDirection(-1);
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Hero
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onNext={handleNext}
        onPrev={handlePrev}
        onPlay={togglePlay}
        isPlaying={isPlaying}
      />
      <AnimatePresence initial={false} custom={pageDirection} mode="wait">
        <motion.div
          key={currentPage}
          custom={pageDirection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {currentFirmalar.map((firma) => (
            <FirmaCard key={firma.id} firma={firma} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FirmaList;
