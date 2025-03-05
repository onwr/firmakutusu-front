import React from "react";
import { motion } from "framer-motion";

const BilgiSidebar = ({ tab, setTab }) => {
  return (
    <div className="w-1/4 px-8 h-fit py-10 montserrat border border-[#A2ACC7] outline-none rounded-xl flex flex-col gap-4 cursor-pointer">
      <motion.button
        onClick={() => setTab(0)}
        className="flex items-center group gap-1.5"
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={
            tab === 0
              ? "/images/icons/firma-profil/icons/firmabilgi-mavi.svg"
              : "/images/icons/firma-profil/icons/firma-bilgi.svg"
          }
          alt=""
        />
        <p
          className={`font-semibold mt-1  ${
            tab === 0 ? "text-[#120A8F]" : "text-[#01A4BD]"
          } group-hover:text-[#120A8F]/80 cursor-pointer duration-300`}
        >
          Resmi Firma Bilgilerimiz
        </p>
      </motion.button>

      <motion.button
        onClick={() => setTab(1)}
        className="flex items-center group gap-1.5"
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={
            tab === 1
              ? "/images/icons/firma-profil/icons/hakkinda-mavi.svg"
              : "/images/icons/firma-profil/icons/hakkinda.svg"
          }
          alt=""
        />
        <p
          className={`font-semibold mt-1  ${
            tab === 1 ? "text-[#120A8F]" : "text-[#01A4BD]"
          } group-hover:text-[#120A8F]/80 cursor-pointer duration-300`}
        >
          Hakkımızda
        </p>
      </motion.button>

      <motion.button
        onClick={() => setTab(2)}
        className="flex items-center group gap-1.5"
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={
            tab === 2
              ? "/images/icons/firma-profil/icons/products-mavi.svg"
              : "/images/icons/firma-profil/icons/products.svg"
          }
          alt=""
        />
        <p
          className={`font-semibold mt-1  ${
            tab === 2 ? "text-[#120A8F]" : "text-[#01A4BD]"
          } group-hover:text-[#120A8F]/80 cursor-pointer duration-300`}
        >
          Ürün & Hizmetlerimiz
        </p>
      </motion.button>

      <motion.button
        onClick={() => setTab(3)}
        className="flex items-center group gap-1.5"
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={
            tab === 3
              ? "/images/icons/firma-profil/icons/sube-mavi.svg"
              : "/images/icons/firma-profil/icons/sube.svg"
          }
          alt=""
        />
        <p
          className={`font-semibold mt-1  ${
            tab === 3 ? "text-[#120A8F]" : "text-[#01A4BD]"
          } group-hover:text-[#120A8F]/80 cursor-pointer duration-300`}
        >
          Şubelerimiz
        </p>
      </motion.button>

      <motion.button
        onClick={() => setTab(4)}
        className="flex items-center group gap-1.5"
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={
            tab === 4
              ? "/images/icons/firma-profil/icons/kalite-belge-mavi.svg"
              : "/images/icons/firma-profil/icons/kalite-belge.svg"
          }
          alt=""
        />
        <p
          className={`font-semibold mt-1  ${
            tab === 4 ? "text-[#120A8F]" : "text-[#01A4BD]"
          } group-hover:text-[#120A8F]/80 cursor-pointer duration-300`}
        >
          Kalite Belgelerimiz
        </p>
      </motion.button>

      <motion.button
        onClick={() => setTab(5)}
        className="flex items-center group gap-1.5"
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={
            tab === 5
              ? "/images/icons/firma-profil/icons/referans-mavi.svg"
              : "/images/icons/firma-profil/icons/referans.svg"
          }
          alt=""
        />
        <p
          className={`font-semibold mt-1  ${
            tab === 5 ? "text-[#120A8F]" : "text-[#01A4BD]"
          } group-hover:text-[#120A8F]/80 cursor-pointer duration-300`}
        >
          Referanslarımız
        </p>
      </motion.button>

      <motion.button
        onClick={() => setTab(6)}
        className="flex items-center group gap-1.5"
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={
            tab === 6
              ? "/images/icons/firma-profil/icons/kampanya-mavi.svg"
              : "/images/icons/firma-profil/icons/kampanya.svg"
          }
          alt=""
        />
        <p
          className={`font-semibold mt-1  ${
            tab === 6 ? "text-[#120A8F]" : "text-[#01A4BD]"
          } group-hover:text-[#120A8F]/80 cursor-pointer duration-300`}
        >
          Kampanyalarımız
        </p>
      </motion.button>
    </div>
  );
};

export default BilgiSidebar;
