import React from "react";
import { motion } from "framer-motion";

const Hero = ({ isLogin }) => {
  return (
    <div className="relative h-[200px]">
      <img
        src="/images/icons/firma-profil/firma-profilhero.svg"
        className="w-full h-full object-cover rounded-t-2xl"
      />
      <div className="absolute top-4 md:top-32 right-4">
        <div className="flex pl-5 flex-row gap-2">
          {!isLogin ? (
            <>
              {[
                "upline",
                "downline",
                "message",
                "star",
                "download",
                "share",
              ].map((icon, index) => (
                <motion.button
                  key={icon}
                  className="p-2 rounded-[4px] bg-[#078C5B] cursor-pointer hover:bg-[#077C5B] duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={`/images/icons/firma-profil/${icon}.svg`}
                    className="size-5"
                  />
                </motion.button>
              ))}
            </>
          ) : (
            <>
              {[
                { icon: "duzenle", title: "Profilimi Düzenle" },
                { icon: "kaydet", title: "Değişiklikleri Kaydet" },
                { icon: "pdf-indir", title: "Profilimi PDF İndir" },
                { icon: "paylas", title: "Profilimi Paylaş" },
              ].map((data, index) => (
                <motion.button
                  key={index}
                  className="p-2 rounded-[4px]  flex flex-col gap-1 items-center justify-center bg-[#CED4DA] cursor-pointer hover:bg-[#CED4DA]/90 duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={`/images/icons/profil/${data.icon}.svg`}
                    className="size-5"
                  />
                  <p className="text-[#10069F] text-[10px] lg:text-sm montserrat font-medium">
                    {data.title}
                  </p>
                </motion.button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
