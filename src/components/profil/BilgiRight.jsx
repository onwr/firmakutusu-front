import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import FirmaBilgileri from "./tabs/ResmiBilgiler";
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BilgiRight;
