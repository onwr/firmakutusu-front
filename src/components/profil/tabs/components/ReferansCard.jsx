import React from "react";
import { motion } from "framer-motion";

const ReferansCard = ({ renk, menurenk }) => {
    const item = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col border border-[#CED4DA] rounded-xl"
        >
            <div className="relative h-32">
                <motion.img
                    src="/images/icons/home/firma-vitrin/cizgilikare.svg"
                    className="rounded-t-xl w-full h-32 object-cover"
                />
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 right-1/2 translate-x-1/2 translate-y-6"
                >
                    <img src="/images/icons/home/firma-vitrin/logo.svg" />
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-3 cursor-pointer left-5"
                >
                    <img
                        src="/images/icons/home/firma-vitrin/heart.svg"
                        alt="Favorilere ekle"
                    />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={
                        {
                            backgroundColor: menurenk
                        }
                    }
                    className="absolute p-1 rounded-sm top-3 cursor-pointer right-5"
                >
                    <img
                        src="/images/icons/menu.svg"
                        alt="Menü"

                        className="size-5"
                    />
                </motion.button>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={
                    {
                        backgroundColor: renk,
                    }
                }
                className={`pt-6 h-full px-4 pb-3 text-[#232323] flex montserrat items-center flex-col`}
            >
                <p className="line-clamp-2 text-sm text-center font-semibold">
                    Firma Adı
                </p>
                <p className="my-2 text-xs text-center font-medium">Sektörü: -</p>
                <p className="text-xs text-center line-clamp-3">Adres</p>
                <p className="text-xs text-center mt-1">Tel: -</p>
            </motion.div>
        </motion.div>
    );
};

export default ReferansCard;
