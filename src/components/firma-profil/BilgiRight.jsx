import React from "react";
import { AnimatePresence } from "framer-motion";
import FirmaBilgileri from "./tabs/FirmaBilgileri";
import Hakkimizda from "./tabs/Hakkimizda";
import UrunHizmet from "./tabs/UrunHizmet";
import Subelerimiz from "./tabs/Subelerimiz";
import KaliteBelge from "./tabs/KaliteBelge";
import Referanslar from "./tabs/Referanslar";
import Kampanyalarimiz from "./tabs/Kampanyalarimiz";

const BilgiRight = ({ tab }) => {
  return (
    <div className="w-full p-[42px] h-fit border border-[#A2ACC7] montserrat rounded-xl">
      <AnimatePresence>
        {tab === 0 && <FirmaBilgileri />}
        {tab === 1 && <Hakkimizda />}
        {tab === 2 && <UrunHizmet />}
        {tab === 3 && <Subelerimiz />}
        {tab === 4 && <KaliteBelge />}
        {tab === 5 && <Referanslar />}
        {tab === 6 && <Kampanyalarimiz />}
      </AnimatePresence>
    </div>
  );
};

export default BilgiRight;
