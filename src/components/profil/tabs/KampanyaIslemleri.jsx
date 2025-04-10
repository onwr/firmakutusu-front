import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";
import { FormInput, FormTextarea } from "../../../components/common/Input";

const KampanyaIslemleri = () => {
    const { isLogin, user } = useAuth();
    const { firma } = user;

    const [formData, setFormData] = useState({
        baslik: firma.kampanyalar?.baslik || "",
        metin: firma.kampanyalar?.metin || "",
    });

    const [kampanyaList, setKampanyaList] = useState(firma.kampanyalar?.kampanyalar || []);

    const [newKampanya, setNewKampanya] = useState({
        id: kampanyaList.length > 0 ? Math.max(...kampanyaList.map(k => k.id)) + 1 : 1,
        kapak_resmi_url: "/images/icons/firma-profil/icons/kampanya-afis.svg",
        aciklama: "",
        baslangic_tarihi: "",
        bitis_tarihi: "",
        acilis_katalogu: false,
        aktif: true
    });

    useEffect(() => {
        if (firma && firma.kampanyalar) {
            setFormData({
                baslik: firma.kampanyalar.baslik || "",
                metin: firma.kampanyalar.metin || "",
            });
            setKampanyaList(firma.kampanyalar.kampanyalar || []);
        }
    }, [firma]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNewKampanyaChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewKampanya((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleKampanyaChange = (id, field, value) => {
        setKampanyaList(prev => prev.map(kampanya =>
            kampanya.id === id ? { ...kampanya, [field]: value } : kampanya
        ));
    };

    const handleCheckboxChange = (id, checked) => {
        setKampanyaList(prev => prev.map(kampanya =>
            kampanya.id === id ? { ...kampanya, acilis_katalogu: checked } : kampanya
        ));
    };

    const handleAddKampanya = () => {
        setKampanyaList(prev => [...prev, newKampanya]);
        setNewKampanya({
            id: newKampanya.id + 1,
            kapak_resmi_url: "/images/icons/firma-profil/icons/kampanya-afis.svg",
            aciklama: "",
            baslangic_tarihi: "",
            bitis_tarihi: "",
            acilis_katalogu: false,
            aktif: true
        });
    };

    const handleDeleteKampanya = (id) => {
        setKampanyaList(prev => prev.filter(kampanya => kampanya.id !== id));
    };

    const handleSaveKampanya = (id) => {
        console.log("Saving kampanya changes for ID:", id);
        alert(`Kampanya ${id} başarıyla güncellendi!`);
    };

    const acilisKatalogu = kampanyaList.find(k => k.acilis_katalogu);

    return (
        <motion.div
            key="tab-1"
            className="montserrat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex justify-end">
                <p className="text-[#120A8F] font-semibold text-sm">Kampanyalarımız</p>
            </div>

            <FormInput
                label="Başlık"
                name="baslik"
                value={formData.baslik}
                onChange={handleInputChange}
                className="mt-5"
            />

            <FormTextarea
                label="Metin"
                name="metin"
                value={formData.metin}
                onChange={handleInputChange}
                className="mt-2"
            />

            <div className="flex flex-col sm:items-start mt-2 gap-2 sm:gap-5 sm:flex-row">
                <p className="flex w-32 items-start gap-1.5 text-[#A42E2D] montserrat font-medium">
                    <img src="/images/icons/profil/add-red.svg" alt="" />
                    Yeni Kampanya
                    Gir
                </p>
                <div className="p-6 rounded-xl gap-5 flex md:flex-row flex-col bg-[#FFF2F2] border border-[#A2ACC7] w-full border-dashed">
                    <div className="w-full">
                        <p className="font-semibold montserrat text-sm">Kapak Resmi</p>
                        <img src={newKampanya.kapak_resmi_url} className="mt-2 w-full rounded-lg border border-[#A2ACC7]" alt="" />
                        <div className="w-full flex items-center gap-2 mt-2">
                            <button className="flex items-center justify-center font-medium p-2 gap-2 w-full text-sm rounded-sm bg-[#CED4DA] text-[#10069F]">
                                <img src="/images/icons/profil/ekle-2.svg" alt="" /> Resim Yükle
                            </button>
                            <button className="flex items-center justify-center p-2 font-medium gap-2 w-full text-sm rounded-sm bg-[#CED4DA] text-[#10069F]">
                                <img src="/images/icons/profil/ekle-2.svg" alt="" /> Resmi Sil
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="aciklama" className="text-sm font-semibold text-[#232323]">Kampanya Açıklama Metni</label>
                            <textarea
                                name="aciklama"
                                value={newKampanya.aciklama}
                                onChange={handleNewKampanyaChange}
                                placeholder="Kampanya Açıklama Metni"
                                className="py-3 outline-none text-sm px-2 bg-white text-[#1D547D] placeholder-[#1D547D] border border-dotted border-[#A2ACC7] rounded-lg"
                            ></textarea>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="baslangic_tarihi" className="text-sm font-semibold text-[#232323]">Kampanya Başlanğıç Tarihi</label>
                            <input
                                name="baslangic_tarihi"
                                type="date"
                                value={newKampanya.baslangic_tarihi}
                                onChange={handleNewKampanyaChange}
                                className="py-3 outline-none text-sm px-2 bg-white text-[#1D547D] placeholder-[#1D547D] border border-dotted border-[#A2ACC7] rounded-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="bitis_tarihi" className="text-sm font-semibold text-[#232323]">Kampanya Bitiş Tarihi</label>
                            <input
                                name="bitis_tarihi"
                                type="date"
                                value={newKampanya.bitis_tarihi}
                                onChange={handleNewKampanyaChange}
                                className="py-3 outline-none text-sm px-2 bg-white text-[#1D547D] placeholder-[#1D547D] border border-dotted border-[#A2ACC7] rounded-lg"
                            />
                        </div>

                        <div className="mt-3 py-[10px] px-4 flex items-center gap-2 border bg-white border-[#A42E2D] rounded-sm border-dashed">
                            <input
                                type="checkbox"
                                name="acilis_katalogu"
                                checked={newKampanya.acilis_katalogu}
                                onChange={handleNewKampanyaChange}
                                className="w-5 h-5 appearance-none border-2 rounded-full border-[#45535E] checked:bg-[#45535E] checked:border-transparent"
                            />
                            <p className="text-[#A42E2D] text-sm font-semibold">
                                Açılış kataloğu yap
                            </p>
                        </div>

                        <button
                            className="w-full mt-5 py-4 bg-[#1C5540] rounded-lg text-white flex items-center justify-center gap-2"
                            onClick={handleAddKampanya}
                        >
                            <img src="/images/icons/profil/arti-beyaz.svg" alt="" />
                            Yeni Kampanyayı Ekle
                        </button>
                    </div>
                </div>
            </div>

            {acilisKatalogu && (
                <div className="flex mt-4 flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row">
                    <p className="flex w-32  items-start gap-1.5 text-[#007356] montserrat font-medium">
                        <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
                        Açılış Kataloğu
                    </p>
                    <div className="p-[10px] border border-[#A2ACC7] border-dashed rounded-lg w-full flex justify-center items-center">
                        <img
                            src={acilisKatalogu.kapak_resmi_url}
                            className="w-full rounded-xl"
                            alt="Açılış Kataloğu"
                        />
                    </div>
                </div>
            )}

            {kampanyaList.map((kampanya, index) => (
                <div key={kampanya.id} className="flex flex-col sm:items-start mt-2 gap-2 sm:gap-5 sm:flex-row">
                    <p className="flex w-32 items-start gap-1.5 text-[#007356] montserrat font-medium">
                        <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
                        Kampanya - {index + 1}
                    </p>
                    <div className="p-6 rounded-xl gap-5 flex md:flex-row flex-col bg-white border border-[#A2ACC7] w-full border-dashed">
                        <div className="w-full">
                            <p className="font-semibold montserrat text-sm">Kapak Resmi</p>
                            <img src={kampanya.kapak_resmi_url} className="mt-2 w-full rounded-lg border border-[#A2ACC7]" alt="" />
                            <div className="w-full flex items-center gap-2 mt-2">
                                <button className="flex items-center justify-center font-medium p-2 gap-2 w-full text-sm rounded-sm bg-[#CED4DA] text-[#10069F]">
                                    <img src="/images/icons/profil/ekle-2.svg" alt="" /> Resim Yükle
                                </button>
                                <button className="flex items-center justify-center p-2 font-medium gap-2 w-full text-sm rounded-sm bg-[#CED4DA] text-[#10069F]">
                                    <img src="/images/icons/profil/ekle-2.svg" alt="" /> Resmi Sil
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label htmlFor={`aciklama-${kampanya.id}`} className="text-sm font-semibold text-[#232323]">Kampanya Açıklama Metni</label>
                                <textarea
                                    id={`aciklama-${kampanya.id}`}
                                    value={kampanya.aciklama}
                                    onChange={(e) => handleKampanyaChange(kampanya.id, 'aciklama', e.target.value)}
                                    placeholder="Kampanya Açıklama Metni"
                                    className="py-3 outline-none text-sm px-2 bg-white text-[#1D547D] placeholder-[#1D547D] border border-dotted border-[#A2ACC7] rounded-lg"
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor={`baslangic-${kampanya.id}`} className="text-sm font-semibold text-[#232323]">Kampanya Başlanğıç Tarihi</label>
                                <input
                                    id={`baslangic-${kampanya.id}`}
                                    type="date"
                                    value={kampanya.baslangic_tarihi}
                                    onChange={(e) => handleKampanyaChange(kampanya.id, 'baslangic_tarihi', e.target.value)}
                                    className="py-3 outline-none text-sm px-2 bg-white text-[#1D547D] placeholder-[#1D547D] border border-dotted border-[#A2ACC7] rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor={`bitis-${kampanya.id}`} className="text-sm font-semibold text-[#232323]">Kampanya Bitiş Tarihi</label>
                                <input
                                    id={`bitis-${kampanya.id}`}
                                    type="date"
                                    value={kampanya.bitis_tarihi}
                                    onChange={(e) => handleKampanyaChange(kampanya.id, 'bitis_tarihi', e.target.value)}
                                    className="py-3 outline-none text-sm px-2 bg-white text-[#1D547D] placeholder-[#1D547D] border border-dotted border-[#A2ACC7] rounded-lg"
                                />
                            </div>

                            <div className="mt-3 py-[10px] px-4 flex items-center gap-2 border bg-white border-[#A42E2D] rounded-sm border-dashed">
                                <input
                                    type="checkbox"
                                    checked={kampanya.acilis_katalogu}
                                    onChange={(e) => handleCheckboxChange(kampanya.id, e.target.checked)}
                                    className="w-5 h-5 appearance-none border-2 rounded-full border-[#45535E] checked:bg-[#45535E] checked:border-transparent"
                                />
                                <p className="text-[#A42E2D] text-sm font-semibold">
                                    Açılış kataloğu yap
                                </p>
                            </div>

                            <div className="mt-4 md:mt-8 gap-3 flex md:flex-row flex-col">
                                <button
                                    className="flex-1 flex items-center font-medium gap-1.5 bg-[#F1EEE6] rounded-lg py-[18px] text-[#1C5540] justify-center"
                                    onClick={() => handleDeleteKampanya(kampanya.id)}
                                >
                                    <img src="/images/icons/profil/arti-yesil.svg" alt="" />
                                    <p>Belgeyi Sil</p>
                                </button>
                                <button
                                    className="flex-1 flex items-center font-medium gap-1.5 bg-[#1C5540] rounded-lg py-[18px] text-white justify-center"
                                    onClick={() => handleSaveKampanya(kampanya.id)}
                                >
                                    <img src="/images/icons/profil/arti-beyaz.svg" alt="" />
                                    <p>Değişiklikleri Kaydet</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default KampanyaIslemleri;