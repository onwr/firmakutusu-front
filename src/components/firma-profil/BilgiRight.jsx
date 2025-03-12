import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import FirmaBilgileri from "./tabs/FirmaBilgileri";
import Hakkimizda from "./tabs/Hakkimizda";
import UrunHizmet from "./tabs/UrunHizmet";
import Subelerimiz from "./tabs/Subelerimiz";
import KaliteBelge from "./tabs/KaliteBelge";
import Referanslar from "./tabs/Referanslar";
import Kampanyalarimiz from "./tabs/Kampanyalarimiz";
import CV from "./tabs/CV";

const BilgiRight = ({ tab, isLogin }) => {
  return (
    <div className="w-full p-4 lg:p-[42px] h-fit border border-[#A2ACC7] montserrat rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {tab === 0 && <FirmaBilgileri isLogin={true} />}
          {tab === 1 && <Hakkimizda />}
          {tab === 2 && <UrunHizmet />}
          {tab === 3 && <Subelerimiz />}
          {tab === 4 && <KaliteBelge />}
          {tab === 5 && <Referanslar />}
          {tab === 6 && <Kampanyalarimiz />}
          {tab === 7 && <CV />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BilgiRight;
