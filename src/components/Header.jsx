import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { icon: "/images/icons/nav/anasayfa.svg", text: "Anasayfa" },
    { icon: "/images/icons/nav/firmaara.png", text: "Firma Ara" },
    { icon: "/images/icons/nav/sponsorluk.png", text: "Sponsorluk" },
    { icon: "/images/icons/nav/paketler.png", text: "Paketler" },
    { icon: "/images/icons/nav/hakkimizda.png", text: "Hakkımızda" },
    { icon: "/images/icons/nav/blog.svg", text: "Blog" },
    { icon: "/images/icons/nav/destek.svg", text: "Destek" },
  ];

  return (
    <div className="container mx-auto py-5 px-4 md:px-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="w-40 md:w-1/4 xl:w-1/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/logo.svg" alt="Logo" className="max-w-full" />
        </motion.div>

        {/* Desktop Menu - Only show on XL screens and above */}
        <div className="hidden xl:flex w-3/5 marcellus items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              className="flex flex-col items-center cursor-pointer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={item.icon} alt={item.text} />
              <p className="text-[#1C5540] mt-1">{item.text}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="hidden xl:flex w-1/5 montserrat items-start justify-end gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="mr-2">
            <img src="/images/icons/nav/notification.svg" alt="Notification" />
          </button>
          <div className="flex w-full gap-2">
            <motion.button className="text-sm cursor-pointer w-full hover:bg-[#1C5540]/40 duration-300 font-semibold text-[#1C5540] bg-[#F1EEE6] h-12 px-3 rounded-lg flex items-center justify-center gap-1">
              <img src="/images/icons/kayit.svg" alt="Register" />
              Üye Ol
            </motion.button>
            <motion.button className="text-sm font-semibold w-full text-white bg-[#1C5540] h-12 px-3 rounded-lg flex items-center justify-center gap-1">
              <img src="/images/icons/power.png" alt="Login" />
              Giriş
            </motion.button>
          </div>
        </motion.div>

        {/* Compact Buttons for MD-LG screens */}
        <motion.div
          className="hidden md:flex xl:hidden items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <img
              src="/images/icons/nav/notification.svg"
              alt="Notification"
              className="w-5 h-5"
            />
          </button>
          <motion.button
            className="text-sm cursor-pointer hover:bg-[#1C5540]/40 duration-300 font-semibold text-[#1C5540] bg-[#F1EEE6] h-10 px-3 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Üye Ol
          </motion.button>
          <motion.button
            className="text-sm font-semibold text-white bg-[#1C5540] h-10 px-3 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Giriş
          </motion.button>
        </motion.div>

        {/* Hamburger Menu Button - Mobile and Tablet */}
        <motion.button
          className="xl:hidden text-[#1C5540] p-2 hover:bg-gray-100 rounded-full"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="xl:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-[#F1EEE6] rounded-md cursor-pointer"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <img src={item.icon} alt={item.text} className="w-6 h-6" />
                  <p className="text-[#1C5540] font-medium">{item.text}</p>
                </motion.a>
              ))}
              <div className="md:hidden pt-4 border-t border-gray-200 mt-2 flex gap-2">
                <motion.button
                  className="w-full text-sm cursor-pointer hover:bg-[#1C5540]/40 duration-300 font-semibold text-[#1C5540] bg-[#F1EEE6] h-12 rounded-lg flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img
                    src="/images/icons/kayit.svg"
                    alt="Register"
                    className="w-5 h-5"
                  />
                  Üye Ol
                </motion.button>
                <motion.button
                  className="w-full text-sm font-semibold text-white bg-[#1C5540] h-12 rounded-lg flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img
                    src="/images/icons/power.png"
                    alt="Login"
                    className="w-5 h-5"
                  />
                  Giriş
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
