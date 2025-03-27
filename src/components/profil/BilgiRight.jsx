import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import FirmaBilgileri from "./tabs/ResmiBilgiler";
import Hakkimizda from "./tabs/Hakkimizda";
import UrunHizmetler from "./tabs/UrunHizmetler";
import SubeIslemleri from "./tabs/SubeIslemleri";
import KaliteBelgeIslemleri from "./tabs/KaliteBelgeIslemleri";
import ReferansIslemleri from "./tabs/ReferansIslemleri";


const BilgiRight = ({ tab }) => {
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
          {tab === 0 && <FirmaBilgileri />}
          {tab === 1 && <Hakkimizda />}
          {tab === 2 && <UrunHizmetler />}
          {tab === 3 && <SubeIslemleri />}
          {tab === 4 && <KaliteBelgeIslemleri />}
          {tab === 5 && <ReferansIslemleri />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BilgiRight;
