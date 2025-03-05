import React from "react";
import { motion } from "framer-motion";

const UrunHizmet = () => {
  return (
    <motion.div
      key="tab-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="montserrattext-[#232323]"
    >
      <div className="flex justify-end montserrat">
        <p className="text-[#120A8F] font-semibold text-sm">Kampanyalarımız</p>
      </div>
      <p className="font-medium text-black">Kampanyalarımız</p>
      <p className="mt-5 text-black">
        Düğün, Toplantı veya düzenleyeceğiniz kongrelerde siz ve misafirlerinizi
        yüksek kalitede ağırlayabilme misyonu ile hizmet vermeyi amaç ediniyor
        ve sizi kendi davetinize davet ediyoruz.
      </p>
      <p className="text-[#232323] font-medium flex flex-row gap-4 mt-2">
        Kampanya Başlangıç Tarihi <p>: 17.02.2024</p>
      </p>
      <p className="text-[#232323] font-medium flex flex-row gap-4">
        Kampanya Bitiş Tarihi <p>: 05.05.2024</p>
      </p>
      <img
        src="/images/icons/firma-profil/icons/kampanya-afis.svg"
        className="mt-5 w-full"
      />
    </motion.div>
  );
};

export default UrunHizmet;
