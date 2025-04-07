import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";
import ReferansCard from './components/ReferansCard'

const Hakkimizda = () => {
    const { isLogin, user } = useAuth();
    const { firma } = user;

    const [formData, setFormData] = useState({

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <motion.div
            key="tab-1"
            className="montserrat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex justify-end">
                <p className="text-[#120A8F] font-semibold text-sm">Referanslarımız</p>
            </div>


            <div className="flex flex-col sm:items-center mt-5 gap-2 sm:gap-5 sm:flex-row">
                <p
                    className="flex w-32
         items-center gap-1.5 text-[#007356] montserrat font-medium"
                >
                    <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
                    Başlık
                </p>
                <input
                    type="text"
                    name="baslik"
                    value={formData.baslik}
                    onChange={handleInputChange}
                    className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                />
            </div>
            <div className="flex mt-2 flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row">
                <p className="flex w-32  items-center gap-1.5 text-[#007356] montserrat font-medium">
                    <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
                    Metin
                </p>
                <textarea
                    type="text"
                    name="mesaj"
                    value={formData.mesaj}
                    onChange={handleInputChange}
                    className="py-3 px-[10px] border w-full border-[#A2ACC7] border-dashed outline-0 rounded-lg text-[#1D547D]"
                ></textarea>
            </div>

            <div className="flex mt-2 flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row">
                <p className="flex w-32  items-start gap-1.5 text-[#A42E2D] montserrat font-medium">
                    <img src="/images/icons/profil/add-red.svg" alt="" />
                    Yeni Referans
                    Talebi
                </p>
                <div className="p-6 border w-full border-[#A2ACC7] border-dashed bg-[#FFF2F2] rounded-lg ">
                    <p className="text-[#1D547D] font-medium">Referansı Talep Edilecek Firmanın</p>
                    <form className="mt-5 flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="vkn" className="font-semibold text-sm text-[#232323]">Vergi Kimlik Numarası</label>
                            <div className="flex items-center md:flex-row flex-col justify-between py-2 px-5 md:px-4 bg-white border-dashed  rounded-sm border border-[#A2ACC7]">
                                <input type="text" name="vkn" placeholder="Vergi Kimlik Numarası" className="outline-none py-2 md:py-0 w-full text-[#1D547D]" />
                                <button className="w-full md:w-1/3 bg-[#BCF6D9] rounded-[10px] text-xs md:text-base text-[#1C5540] py-3">VKN Numaramı Sorgula</button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="firmaunvan">Firma Unvanı</label>
                            <input
                                type="text"
                                name="firmaunvan"
                                onChange={handleInputChange}
                                className="py-3 px-[10px] bg-white border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="firmaunvan">Mesaj</label>
                            <textarea
                                type="text"
                                name="mektub"
                                onChange={handleInputChange}
                                placeholder="Referans Mektubu"
                                className="py-3 px-[10px] bg-white border w-full border-[#A2ACC7] border-dashed outline-0 rounded-lg text-[#1D547D]"
                            ></textarea>
                        </div>

                        <button type="submit" className="bg-[#1C5540] text-sm font-medium text-white flex justify-center rounded-lg items-center gap-1 w-full py-5 mt-5">
                            <img src="/images/icons/profil/arti-beyaz.svg" />
                            Referans Talebimi Gönder
                        </button>
                    </form>
                </div>
            </div>


            <div className="mt-5">
                <p className="bg-[#8B8138] rounded-t-xl  px-6 py-2 text-white marcellus text-xl">Alınan Referanslarım <span className="text-sm">(Bana verilen referanslar)</span></p>

                <div className="grid grid-cols-3 gap-5 mt-4">
                    <ReferansCard renk={"#e8e6d7"} menurenk={"#8B8138"} />
                </div>

            </div>

            <div className="mt-5">
                <p className="bg-[#7512A2] rounded-t-xl  px-6 py-2 text-white marcellus text-xl">Referans Verilen Firmalar <span className="text-sm">(Benim referans olduğum firmalar)</span></p>

                <div className="grid grid-cols-3 gap-5 mt-4">
                    <ReferansCard renk={"#e3d0ec"} menurenk={"#7512A2"} />
                </div>

            </div>

            <div className="mt-5">
                <p className="bg-[#10069F] rounded-t-xl  px-6 py-2 text-white marcellus text-xl">Referans Verilen Firmalar <span className="text-sm">(Benim referans olduğum firmalar)</span></p>

                <div className="grid grid-cols-3 gap-5 mt-4">
                    <ReferansCard renk={"#dfe7ee"} menurenk={"#10069F"} />
                </div>

            </div>

            <div className="mt-5">
                <p className="bg-[#80CC28] rounded-t-xl  px-6 py-2 text-white marcellus text-xl">Referans Verilen Firmalar <span className="text-sm">(Benim referans olduğum firmalar)</span></p>

                <div className="grid grid-cols-3 gap-5 mt-4">
                    <ReferansCard renk={"#e6f5d4"} menurenk={"#80CC28"} />
                </div>

            </div>

        </motion.div>
    );
};

export default Hakkimizda;
