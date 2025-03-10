import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";

const Dogrulama = () => {
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

      <div className="relative bg-[#f6f6f6] z-10">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/images/icons/graident-bg.svg"
          className="absolute -z-10 top-0 w-full h-[550px] object-cover"
        />

        <div className="container px-2 mx-auto z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="marcellus pt-5 text-white "
          >
            Yetkili Kişi Kayıt ve Doğrulama Formu
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-5 w-full flex flex-col items-center justify-center rounded-xl py-10 md:py-20 px-4 md:px-[10px] bg-white drop-shadow-2xl"
          >
            <motion.img
              variants={itemVariants}
              src="/images/icons/auth/dogrula-hero.svg"
              className="w-48 md:w-auto"
            />

            <motion.p
              variants={itemVariants}
              className="mt-3 text-center marcellus text-xl md:text-2xl lg:text-3xl text-[#1D547D]"
            >
              Bilgilendirme! <br /> Bu Bilgileri Neden İstiyoruz?
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-2 montserrat font-semibold text-sm md:text-base text-[#1D547D] text-center"
            >
              Üyeliğinizi tamamlamak için lütfen aşağıdaki adımları takip edin
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 w-full"
            >
              {[
                {
                  title: "Kimlik Doğrulama",
                  description:
                    "Üyelik işlemlerinin güvenliğini sağlamak ve sahte hesapların önüne geçmek için yetkili kişinin kimliğini doğruluyoruz.",
                },
                {
                  title: "Hesap Güvenliği",
                  description:
                    "Kullanıcının hesabına yalnızca kendisinin erişebilmesi için SMS doğrulama sistemi ile güvenliği artırıyoruz.",
                },
                {
                  title: "Yasal Zorunluluklar",
                  description:
                    "Yasal düzenlemelere tam uyum sağlamak ve ilgili tüm gereklilikleri eksiksiz yerine getirmek için zorunludur.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="rounded-xl bg-[#F1EEE6] px-4 md:px-6 py-8 md:py-10 transition-shadow hover:shadow-lg"
                >
                  <p className="montserrat text-center font-semibold text-base md:text-lg">
                    {item.title}
                  </p>
                  <p className="mt-1 text-center font-light montserrat text-sm md:text-base">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dogrulama;
