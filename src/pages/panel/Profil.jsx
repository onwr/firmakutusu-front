import React from "react";
import Header from "../../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../../components/firma-profil/Hero";
import FirmaBilgiHero from "../../components/firma-profil/FirmaBilgiHero";

const Profil = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div>
      <Header />

      <div className="relative z-10 pb-10">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/images/icons/graident-bg.svg"
          className="absolute -z-10 top-0 w-full h-[550px] object-cover"
        />

        <div className="container mx-auto px-4 lg:px-2 z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="marcellus pt-5 text-white "
          >
            Profilim \ Resmi Firma Bilgilerimiz \ Düzenle
          </motion.p>

          <div className="flex mt-5 flex-col border bg-white border-[#A2ACC7] rounded-xl">
            <Hero isLogin={true} />
            <FirmaBilgiHero isLogin={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
