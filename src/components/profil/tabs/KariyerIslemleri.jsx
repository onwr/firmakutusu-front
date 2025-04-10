import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";
import { FormInput, FormTextarea, FormInputLock } from "../../../components/common/Input";

const KariyerIslemleri = () => {
    const { isLogin, user } = useAuth();
    const { firma } = user;

    const [formData, setFormData] = useState({
        baslik: firma.is_kariyer.baslik,
        metin: firma.is_kariyer.metin,
        basvuru_gonderilecek_email: firma.is_kariyer.email_adresi,
        aydinlatma_metni: firma.is_kariyer.aydinlatma_metni,
        kariyer_sorulari: firma.is_kariyer.sorular.map(soru => ({ ...soru }))
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Soru değişikliklerini yönetmek için yeni fonksiyon
    const handleSoruChange = (id, value) => {
        setFormData(prev => ({
            ...prev,
            kariyer_sorulari: prev.kariyer_sorulari.map(soru =>
                soru.id === id ? { ...soru, soru_metni: value } : soru
            )
        }));
    };

    // Soruların sıralanmasını düzenlemek için fonksiyon
    const handleSiraChange = (id, direction) => {
        const sorular = [...formData.kariyer_sorulari];
        const index = sorular.findIndex(soru => soru.id === id);

        if (direction === 'up' && index > 0) {
            // Soruyu yukarı taşı
            [sorular[index - 1], sorular[index]] = [sorular[index], sorular[index - 1]];
            // Sıra numaralarını güncelle
            sorular[index - 1].sira = index;
            sorular[index].sira = index + 1;
        } else if (direction === 'down' && index < sorular.length - 1) {
            // Soruyu aşağı taşı
            [sorular[index], sorular[index + 1]] = [sorular[index + 1], sorular[index]];
            // Sıra numaralarını güncelle
            sorular[index].sira = index + 1;
            sorular[index + 1].sira = index + 2;
        }

        setFormData(prev => ({
            ...prev,
            kariyer_sorulari: sorular
        }));
    };

    // Formu kaydetme işlemi
    const handleSubmit = (e) => {
        e.preventDefault();
        // API'ye kaydetme işlemleri burada gerçekleştirilecek
        console.log("Form data güncellenecek:", formData);
        // API çağrısı burada olacak
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
                <p className="text-[#120A8F] font-semibold text-sm">Bize Katılın | İş & Kariyer</p>
            </div>

            <form onSubmit={handleSubmit}>
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

                <FormInput
                    label="Başvuruların Gönderileceği E-Posta"
                    name="basvuru_gonderilecek_email"
                    value={formData.basvuru_gonderilecek_email}
                    onChange={handleInputChange}
                    itemsStart={true}
                    className="mt-5 text-sm"
                />

                <FormTextarea
                    label="Aydınlatma Metni"
                    name="aydinlatma_metni"
                    value={formData.aydinlatma_metni}
                    onChange={handleInputChange}
                    itemsStart={true}
                    className="mt-5 text-sm"
                />

                <div className="mt-8">

                    {formData.kariyer_sorulari
                        .filter(soru => soru.sabit)
                        .sort((a, b) => a.sira - b.sira)
                        .map((soru) => (
                            <div key={soru.id} className="mb-4">
                                <div className="flex justify-between items-center">
                                    <FormInputLock
                                        label={`${soru.sira}. Soru`}
                                        value={soru.soru_metni}
                                        className="w-full"
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        ))}

                    {formData.kariyer_sorulari
                        .filter(soru => !soru.sabit)
                        .sort((a, b) => a.sira - b.sira)
                        .map((soru) => (
                            <div key={soru.id} className="mb-4">
                                <div className="flex justify-between items-center">
                                    <FormInput
                                        label={`${soru.sira}. Soru`}
                                        value={soru.soru_metni}
                                        onChange={(e) => handleSoruChange(soru.id, e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </form>
        </motion.div>
    );
};

export default KariyerIslemleri;