import React from "react";
import { motion } from "framer-motion";

const FirmaCard = ({ firma }) => {
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col border border-[#CED4DA] rounded-xl"
    >
      <div className="relative h-32">
        <motion.img
          src={firma.kapak}
          className="rounded-t-xl w-full h-32 object-cover"
          alt={firma.isim}
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-0 right-1/2 translate-x-1/2 translate-y-6"
        >
          <img src={firma.logo} alt={`${firma.isim} logo`} />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 cursor-pointer right-3"
        >
          <img
            src="/images/icons/home/firma-vitrin/heart.svg"
            alt="Favorilere ekle"
          />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 h-full px-4 pb-3 text-[#232323] flex montserrat items-center flex-col"
      >
        <p className="line-clamp-2 text-sm text-center font-semibold">
          {firma.isim}
        </p>
        <p className="my-2 text-xs text-center font-medium">
          Sektörü: {firma.sektor}
        </p>
        <p className="text-xs text-center line-clamp-3">{firma.adres}</p>
        <p className="text-xs text-center mt-1">Tel: {firma.telefon}</p>
      </motion.div>
    </motion.div>
  );
};

export default FirmaCard;
