import React from "react";
import { motion } from "framer-motion";

const KaliteBelge = () => {
  return (
    <motion.div
      key="tab-4"
      className="montserrat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-end">
        <p className="text-[#120A8F] font-semibold text-sm">
          Kalite Belgelerimiz
        </p>
      </div>

      <p className="font-medium">Kalite Belgelerimiz</p>

      <p className="mt-5">
        Firmamızın kalite ve güvenilirlik standartlarını belgeleyen
        sertifikalarımızı aşağıda bulabilirsiniz. Hizmet ve ürünlerimizin ulusal
        ve uluslararası standartlara uygunluğunu gösteren bu belgeler, kaliteye
        verdiğimiz önemin bir göstergesidir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="px-2">
          <img
            src="/images/icons/firma-profil/icons/kalite-sertifika.svg"
            className="rounded-t-xl w-full"
          />
          <div className="bg-[#51596C] rounded-b-xl p-4">
            <p className="montserrat font-semibold text-white">
              2024 Kırtasiye Ürünleri Kataloğu
            </p>
            <div className="flex gap-5 mt-4">
              <button className="flex justify-center text-white text-sm items-center gap-2 w-full py-2 border border-white rounded-[4px]">
                <img src="/images/icons/firma-profil/icons/goster.svg" />
                Göster
              </button>
              <button className="flex justify-center text-white text-sm items-center gap-2 w-full py-2 border border-white rounded-[4px]">
                <img src="/images/icons/firma-profil/icons/download.svg" />
                İndir
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KaliteBelge;
