import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { motion } from "framer-motion";

const SubeIslemleri = () => {
    const { user } = useAuth();
    const { subeler } = user.firma;

    const haftaninGunleri = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    const saatler = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, "0")}:00`);

    const [formData, setFormData] = useState({
        baslik: subeler.baslik || "",
        metin: subeler.metin || "",
        subeler: subeler.subelerimiz?.map((sube) => ({
            id: sube.id,
            kapak_resmi_url: sube.kapak_resmi_url,
            sube_adi: sube.sube_adi,
            sube_adresi: sube.sube_adresi,
            mail_adresi: sube.mail_adresi,
            telefon_numarasi: sube.telefon_numarasi,
            calisma_saatleri: sube.calisma_saatleri?.map((saat) => ({
                gun: saat.gun,
                acilis_saati: saat.acilis_saati,
                kapanis_saati: saat.kapanis_saati,
                kapali: saat.kapali,
            })) || [],
        })) || [],
    });

    const [yeniSube, setYeniSube] = useState({
        kapak_resmi_url: "",
        sube_adi: "",
        sube_adresi: "",
        mail_adresi: "",
        telefon_numarasi: "",
        calisma_saatleri: [],
    });

    const [showTimePicker, setShowTimePicker] = useState({
        subeIndex: null,
        visible: false,
        selectedGun: "",
    });

    // Ana form için veri değişikliği
    const handleBaslikMetinChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Mevcut şubeler için değişiklik
    const handleInputChange = (e, subeIndex) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updatedSubeler = [...prev.subeler];
            updatedSubeler[subeIndex] = {
                ...updatedSubeler[subeIndex],
                [name]: value,
            };
            return { ...prev, subeler: updatedSubeler };
        });
    };

    // Yeni şube için değişiklik
    const handleYeniSubeChange = (e) => {
        const { name, value } = e.target;
        setYeniSube(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Çalışma saati değişimi
    const handleCalismaSaatiChange = (e, subeIndex, gunIndex) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => {
            const updatedSubeler = [...prev.subeler];
            const updatedSaatler = [...updatedSubeler[subeIndex].calisma_saatleri];

            updatedSaatler[gunIndex] = {
                ...updatedSaatler[gunIndex],
                [name]: type === "checkbox" ? checked : value,
            };

            updatedSubeler[subeIndex] = {
                ...updatedSubeler[subeIndex],
                calisma_saatleri: updatedSaatler,
            };

            return { ...prev, subeler: updatedSubeler };
        });
    };

    // Yeni şube için çalışma saati ekleme
    const handleYeniCalismaSaatiChange = (gun, field, value) => {
        setYeniSube(prev => {
            const gunIndex = prev.calisma_saatleri.findIndex(item => item.gun === gun);

            if (gunIndex === -1) {
                // Eğer gün yoksa yeni ekleyelim
                return {
                    ...prev,
                    calisma_saatleri: [
                        ...prev.calisma_saatleri,
                        {
                            gun,
                            acilis_saati: field === "acilis_saati" ? value : "09:00",
                            kapanis_saati: field === "kapanis_saati" ? value : "18:00",
                            kapali: field === "kapali" ? value : false
                        }
                    ]
                };
            } else {
                // Gün varsa güncelle
                const updatedSaatler = [...prev.calisma_saatleri];
                updatedSaatler[gunIndex] = {
                    ...updatedSaatler[gunIndex],
                    [field]: value
                };
                return {
                    ...prev,
                    calisma_saatleri: updatedSaatler
                };
            }
        });
    };

    // Yeni şubeyi kaydet
    const handleYeniSubeKaydet = () => {
        const yeniId = Date.now().toString(); // Basit bir id oluşturma

        setFormData(prev => ({
            ...prev,
            subeler: [...prev.subeler, { ...yeniSube, id: yeniId }]
        }));

        // Formu temizle
        setYeniSube({
            kapak_resmi_url: "",
            sube_adi: "",
            sube_adresi: "",
            mail_adresi: "",
            telefon_numarasi: "",
            calisma_saatleri: [],
        });
    };

    // Şube silme
    const handleSubeSil = (subeIndex) => {
        setFormData(prev => ({
            ...prev,
            subeler: prev.subeler.filter((_, index) => index !== subeIndex)
        }));
    };

    // Çalışma saati günü ekle
    const handleGunEkle = (subeIndex, gun) => {
        if (subeIndex === "yeni") {
            handleYeniCalismaSaatiChange(gun, "acilis_saati", "09:00");
        } else {
            setFormData(prev => {
                const updatedSubeler = [...prev.subeler];
                const subeItem = updatedSubeler[subeIndex];

                // Eğer bu gün zaten ekliyse, ekleme
                if (subeItem.calisma_saatleri.some(item => item.gun === gun)) {
                    return prev;
                }

                subeItem.calisma_saatleri.push({
                    gun,
                    acilis_saati: "09:00",
                    kapanis_saati: "18:00",
                    kapali: false
                });

                return { ...prev, subeler: updatedSubeler };
            });
        }
        setShowTimePicker({ subeIndex: null, visible: false, selectedGun: "" });
    };

    // Resim yükleme fonksiyonu (gerçekte bir API çağrısı yapabilir)
    const handleResimYukle = (subeIndex) => {
        alert(`${subeIndex === "yeni" ? "Yeni şube" : (subeIndex + 1) + ". şube"} için resim yükleme başlatılacak`);
    };

    // Değişiklikleri kaydetme fonksiyonu
    const handleDegisiklikleriKaydet = (subeIndex) => {
        alert(`${subeIndex + 1}. şube için değişiklikler kaydedildi`);
        // Burada API çağrısı yapılabilir
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
                <p className="text-[#120A8F] font-semibold text-sm">Hakkımızda</p>
            </div>

            {/* Başlık */}
            <div className="flex flex-col sm:items-center mt-5 gap-2 sm:gap-5 sm:flex-row">
                <p className="flex w-32 items-center gap-1.5 text-[#007356] montserrat font-medium">
                    <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
                    Başlık
                </p>
                <input
                    type="text"
                    name="baslik"
                    value={formData.baslik}
                    onChange={handleBaslikMetinChange}
                    className="py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                />
            </div>

            {/* Metin */}
            <div className="flex mt-2 flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row">
                <p className="flex w-32 items-center gap-1.5 text-[#007356] montserrat font-medium">
                    <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
                    Metin
                </p>
                <textarea
                    name="metin"
                    value={formData.metin}
                    onChange={handleBaslikMetinChange}
                    className="py-3 px-[10px] border w-full border-[#A2ACC7] border-dashed outline-0 rounded-lg text-[#1D547D]"
                ></textarea>
            </div>

            {/* Yeni Şube Ekle */}
            <div className="flex flex-col sm:items-start mt-2 gap-2 sm:gap-5 sm:flex-row">
                <p className="flex w-32 items-start gap-1.5 text-[#A42E2D] montserrat font-medium">
                    <img src="/images/icons/profil/add-red.svg" alt="" />
                    Yeni Şube
                    Ekle
                </p>
                <div className="p-6 rounded-xl gap-5 flex md:flex-row flex-col bg-[#FFF2F2] border border-[#A2ACC7] w-full border-dashed">
                    <div className="flex-1 text-[#232323]">
                        {/* Kapak Resmi */}
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold text-sm">Kapak Resmi</p>
                            <img src="/images/icons/firma-profil/icons/sube-resim.svg" className="mt-1" />
                            <div className="flex mt-2 items-center gap-2">
                                <button
                                    onClick={() => handleResimYukle("yeni")}
                                    className="w-full py-3 bg-[#CED4DA] flex items-center gap-1 text-[#10069F] text-sm justify-center rounded-sm"
                                >
                                    <img src="/images/icons/profil/ekle-yesil.svg" alt="" />
                                    Yükle
                                </button>
                                <button className="w-full py-3 bg-[#CED4DA] flex items-center gap-1 text-[#10069F] text-sm justify-center rounded-sm">
                                    <img src="/images/icons/profil/ekle-yesil.svg" alt="" />
                                    Sil
                                </button>
                            </div>
                        </div>

                        {/* Şube Adı */}
                        <div className="flex flex-col gap-1 mt-3">
                            <p className="font-semibold text-sm">Şube Adı</p>
                            <input
                                type="text"
                                name="sube_adi"
                                value={yeniSube.sube_adi}
                                onChange={handleYeniSubeChange}
                                placeholder="Şube Adı"
                                className="py-3 px-[10px] border bg-white mt-1 border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                            />
                        </div>

                        {/* Şube Adresi */}
                        <div className="flex flex-col gap-1 mt-3">
                            <p className="font-semibold text-sm">Şube Adresi</p>
                            <input
                                type="text"
                                name="sube_adresi"
                                value={yeniSube.sube_adresi}
                                onChange={handleYeniSubeChange}
                                placeholder="Şube Adresi"
                                className="py-3 px-[10px] border bg-white mt-1 border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                            />
                        </div>

                        {/* Mail Adresi */}
                        <div className="flex flex-col gap-1 mt-3">
                            <p className="font-semibold text-sm">Mail Adresi</p>
                            <input
                                type="text"
                                name="mail_adresi"
                                value={yeniSube.mail_adresi}
                                onChange={handleYeniSubeChange}
                                placeholder="Mail Adresi"
                                className="py-3 px-[10px] border bg-white mt-1 border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                            />
                        </div>

                        {/* Telefon Numarası */}
                        <div className="flex flex-col gap-1 mt-3">
                            <p className="font-semibold text-sm">Telefon Numarası</p>
                            <input
                                type="text"
                                name="telefon_numarasi"
                                value={yeniSube.telefon_numarasi}
                                onChange={handleYeniSubeChange}
                                placeholder="Telefon Numarası"
                                className="py-3 px-[10px] border bg-white mt-1 border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                            />
                        </div>
                    </div>

                    {/* Çalışma Saatleri */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-1 mt-3">
                            <p className="font-semibold text-sm">Çalışma Saatleri</p>

                            {/* Gün Ekleme Dropdown */}
                            <div
                                onClick={() => setShowTimePicker({ subeIndex: "yeni", visible: !showTimePicker.visible, selectedGun: "" })}
                                className="py-3 px-[12px] border bg-white mt-1 flex items-center justify-between border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
                            >
                                <p>Ekle</p>
                                <button>
                                    <img src="/images/arrow-down.svg" />
                                </button>
                            </div>

                            {/* Gün Seçici Dropdown */}
                            {showTimePicker.visible &&
                                showTimePicker.subeIndex === "yeni" &&
                                showTimePicker.selectedGun === "" && ( // Bu satırı ekleyin
                                    <div className="bg-white border mt-24 border-[#A2ACC7] border-dashed rounded-lg shadow-md absolute z-10">
                                        {haftaninGunleri.map((gun) => (
                                            <div
                                                key={gun}
                                                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleGunEkle("yeni", gun)}
                                            >
                                                {gun}
                                            </div>
                                        ))}
                                    </div>
                                )}

                            {/* Çalışma Saatleri Listesi */}
                            {yeniSube.calisma_saatleri.map((saat, gunIndex) => (
                                <div key={saat.gun} className="flex md:flex-row flex-col mt-3 items-center gap-2">
                                    <p className="text-[#1D547D] font-medium w-full">{saat.gun}</p>

                                    {/* Açılış Saati */}
                                    <div className="relative w-full">
                                        <div
                                            onClick={() => setShowTimePicker({
                                                subeIndex: "yeni",
                                                visible: !showTimePicker.visible,
                                                selectedGun: `${saat.gun}-acilis`
                                            })}
                                            className="py-3 text-sm px-[12px] border bg-white mt-1 flex items-center justify-between border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
                                        >
                                            <p>{saat.acilis_saati || "Açılış"}</p>
                                            <button>
                                                <img src="/images/arrow-down.svg" />
                                            </button>
                                        </div>

                                        {/* Saat Dropdown */}
                                        {showTimePicker.visible && showTimePicker.selectedGun === `${saat.gun}-acilis` && (
                                            <div className="bg-white border border-[#A2ACC7] border-dashed rounded-lg shadow-md absolute z-10 max-h-40 overflow-y-auto">
                                                {saatler.map((s) => (
                                                    <div
                                                        key={s}
                                                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => {
                                                            handleYeniCalismaSaatiChange(saat.gun, "acilis_saati", s);
                                                            setShowTimePicker({ subeIndex: null, visible: false, selectedGun: "" });
                                                        }}
                                                    >
                                                        {s}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative w-full">
                                        <div
                                            onClick={() => setShowTimePicker({
                                                subeIndex: "yeni",
                                                visible: !showTimePicker.visible,
                                                selectedGun: `${saat.gun}-kapanis`
                                            })}
                                            className="py-3 text-sm px-[12px] border bg-white mt-1 flex items-center justify-between border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
                                        >
                                            <p>{saat.kapanis_saati || "Kapanış"}</p>
                                            <button>
                                                <img src="/images/arrow-down.svg" />
                                            </button>
                                        </div>

                                        {showTimePicker.visible && showTimePicker.selectedGun === `${saat.gun}-kapanis` && (
                                            <div className="bg-white border border-[#A2ACC7] border-dashed rounded-lg shadow-md absolute z-10 max-h-40 overflow-y-auto">
                                                {saatler.map((s) => (
                                                    <div
                                                        key={s}
                                                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => {
                                                            handleYeniCalismaSaatiChange(saat.gun, "kapanis_saati", s);
                                                            setShowTimePicker({ subeIndex: null, visible: false, selectedGun: "" });
                                                        }}
                                                    >
                                                        {s}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2 ml-2">
                                        <input
                                            type="checkbox"
                                            id={`yeni-${saat.gun}-kapali`}
                                            checked={saat.kapali}
                                            onChange={(e) => handleYeniCalismaSaatiChange(saat.gun, "kapali", e.target.checked)}
                                            className="w-4 h-4"
                                        />
                                        <label htmlFor={`yeni-${saat.gun}-kapali`} className="text-sm">Kapalı</label>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={handleYeniSubeKaydet}
                                className="w-full mt-5 py-4 bg-[#1C5540] rounded-lg text-white flex items-center justify-center gap-2"
                            >
                                <img src="/images/icons/profil/arti-beyaz.svg" alt="" />
                                Yeni Şubeyi Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {formData.subeler.map((sube, subeIndex) => (
                <div key={sube.id} className="flex flex-col sm:items-start mt-2 gap-2 sm:gap-5 sm:flex-row">
                    <p className="flex w-32 items-start gap-1.5 text-[#007356] montserrat font-medium">
                        <img src="/images/icons/profil/duzenlenebilir.svg" alt="" />
                        Şube - {subeIndex + 1}
                    </p>
                    <div className="p-3 md:p-6 rounded-xl gap-5 flex md:flex-row flex-col bg-white border border-[#A2ACC7] w-full border-dashed">
                        <div className="flex-1 text-[#232323]">
                            {/* Kapak Resmi */}
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-sm">Kapak Resmi</p>
                                {sube.kapak_resmi_url ? (
                                    <img src={sube.kapak_resmi_url} alt="Şube Resmi" className="mt-1 max-h-60 object-cover" />
                                ) : (
                                    <img src="/images/icons/firma-profil/icons/sube-resim.svg" className="mt-1" />
                                )}
                                <div className="flex mt-2 items-center gap-2">
                                    <button
                                        onClick={() => handleResimYukle(subeIndex)}
                                        className="w-full py-3 bg-[#CED4DA] flex items-center gap-1 text-[#10069F] text-sm justify-center rounded-sm"
                                    >
                                        <img src="/images/icons/profil/ekle-yesil.svg" alt="" />
                                        Yükle
                                    </button>
                                    <button className="w-full py-3 bg-[#CED4DA] flex items-center gap-1 text-[#10069F] text-sm justify-center rounded-sm">
                                        <img src="/images/icons/profil/ekle-yesil.svg" alt="" />
                                        Sil
                                    </button>
                                </div>
                            </div>

                            {/* Şube Adı */}
                            <div className="flex flex-col gap-1 mt-3">
                                <p className="font-semibold text-sm">Şube Adı</p>
                                <input
                                    type="text"
                                    name="sube_adi"
                                    value={sube.sube_adi || ""}
                                    onChange={(e) => handleInputChange(e, subeIndex)}
                                    placeholder="Şube Adı"
                                    className="py-3 px-[10px] border bg-white mt-1 border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                                />
                            </div>

                            {/* Şube Adresi */}
                            <div className="flex flex-col gap-1 mt-3">
                                <p className="font-semibold text-sm">Şube Adresi</p>
                                <input
                                    type="text"
                                    name="sube_adresi"
                                    value={sube.sube_adresi || ""}
                                    onChange={(e) => handleInputChange(e, subeIndex)}
                                    placeholder="Şube Adresi"
                                    className="py-3 px-[10px] border bg-white mt-1 border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                                />
                            </div>

                            {/* Mail Adresi */}
                            <div className="flex flex-col gap-1 mt-3">
                                <p className="font-semibold text-sm">Mail Adresi</p>
                                <input
                                    type="text"
                                    name="mail_adresi"
                                    value={sube.mail_adresi || ""}
                                    onChange={(e) => handleInputChange(e, subeIndex)}
                                    placeholder="Mail Adresi"
                                    className="py-3 px-[10px] border bg-white mt-1 border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                                />
                            </div>

                            {/* Telefon Numarası */}
                            <div className="flex flex-col gap-1 mt-3">
                                <p className="font-semibold text-sm">Telefon Numarası</p>
                                <input
                                    type="text"
                                    name="telefon_numarasi"
                                    value={sube.telefon_numarasi || ""}
                                    onChange={(e) => handleInputChange(e, subeIndex)}
                                    placeholder="Telefon Numarası"
                                    className="py-3 px-[10px] border bg-white mt-1 border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D]"
                                />
                            </div>
                        </div>

                        {/* Çalışma Saatleri */}
                        <div className="flex-1">
                            <div className="flex flex-col gap-1 mt-3">
                                <p className="font-semibold text-sm">Çalışma Saatleri</p>

                                {/* Gün Ekleme Dropdown */}
                                <div
                                    onClick={() => setShowTimePicker({ subeIndex, visible: !showTimePicker.visible, selectedGun: "" })}
                                    className="py-3 px-[12px] border bg-white mt-1 flex items-center justify-between border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
                                >
                                    <p>Ekle</p>
                                    <button>
                                        <img src="/images/arrow-down.svg" />
                                    </button>
                                </div>

                                {showTimePicker.visible && showTimePicker.subeIndex === subeIndex && !showTimePicker.selectedGun && (
                                    <div className="bg-white mt-24 w-60 border border-[#A2ACC7] border-dashed rounded-lg shadow-md absolute z-10">
                                        {haftaninGunleri.map((gun) => (
                                            <div
                                                key={gun}
                                                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleGunEkle(subeIndex, gun)}
                                            >
                                                {gun}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Çalışma Saatleri Listesi */}
                                {sube.calisma_saatleri.map((saat, gunIndex) => (
                                    <div key={saat.gun} className="flex md:flex-row flex-col mt-3 items-center gap-2">
                                        <p className="text-[#1D547D] font-medium w-full">{saat.gun}</p>

                                        {/* Açılış Saati */}
                                        <div className="relative w-full">
                                            <div
                                                onClick={() => setShowTimePicker({
                                                    subeIndex,
                                                    visible: !showTimePicker.visible,
                                                    selectedGun: `${subeIndex}-${saat.gun}-acilis`
                                                })}
                                                className="py-3 text-sm px-[12px] border bg-white mt-1 flex items-center justify-between border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
                                            >
                                                <p>{saat.acilis_saati || "Açılış"}</p>
                                                <button>
                                                    <img src="/images/arrow-down.svg" />
                                                </button>
                                            </div>

                                            {/* Saat Dropdown */}
                                            {showTimePicker.visible && showTimePicker.selectedGun === `${subeIndex}-${saat.gun}-acilis` && (
                                                <div className="bg-white border border-[#A2ACC7] border-dashed rounded-lg shadow-md absolute z-10 max-h-40 overflow-y-auto">
                                                    {saatler.map((s) => (
                                                        <div
                                                            key={s}
                                                            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                                            onClick={() => {
                                                                handleCalismaSaatiChange(
                                                                    { target: { name: "acilis_saati", value: s } },
                                                                    subeIndex,
                                                                    gunIndex
                                                                );
                                                                setShowTimePicker({ subeIndex: null, visible: false, selectedGun: "" });
                                                            }}
                                                        >
                                                            {s}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Kapanış Saati */}
                                        <div className="relative w-full">
                                            <div
                                                onClick={() => setShowTimePicker({
                                                    subeIndex,
                                                    visible: !showTimePicker.visible,
                                                    selectedGun: `${subeIndex}-${saat.gun}-kapanis`
                                                })}
                                                className="py-3 text-sm px-[12px] border bg-white mt-1 flex items-center justify-between border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D] cursor-pointer"
                                            >
                                                <p>{saat.kapanis_saati || "Kapanış"}</p>
                                                <button>
                                                    <img src="/images/arrow-down.svg" />
                                                </button>
                                            </div>

                                            {/* Saat Dropdown */}
                                            {showTimePicker.visible && showTimePicker.selectedGun === `${subeIndex}-${saat.gun}-kapanis` && (
                                                <div className="bg-white border border-[#A2ACC7] border-dashed rounded-lg shadow-md absolute z-10 max-h-40 overflow-y-auto">
                                                    {saatler.map((s) => (
                                                        <div
                                                            key={s}
                                                            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                                            onClick={() => {
                                                                handleCalismaSaatiChange(
                                                                    { target: { name: "kapanis_saati", value: s } },
                                                                    subeIndex,
                                                                    gunIndex
                                                                );
                                                                setShowTimePicker({ subeIndex: null, visible: false, selectedGun: "" });
                                                            }}
                                                        >
                                                            {s}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Kapalı Checkbox */}
                                        <div className="flex items-center gap-2 ml-2">
                                            <input
                                                type="checkbox"
                                                id={`${subeIndex}-${saat.gun}-kapali`}
                                                name="kapali"
                                                checked={saat.kapali || false}
                                                onChange={(e) => handleCalismaSaatiChange(e, subeIndex, gunIndex)}
                                                className="w-4 h-4"
                                            />
                                            <label htmlFor={`${subeIndex}-${saat.gun}-kapali`} className="text-sm">Kapalı</label>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex md:flex-row flex-col mt-5 gap-1 md:gap-3">

                                    <button onClick={() => handleSubeSil(subeIndex)}
                                        className="w-full  py-4 bg-[#F1EEE6] font-medium rounded-lg text-[#1C5540] flex items-center justify-center gap-2">
                                        <img src="/images/icons/profil/arti-yesil.svg" alt="" />
                                        Şubeyi Sil</button>
                                    <button onClick={() => handleDegisiklikleriKaydet(subeIndex)}
                                        className="w-full py-4 font-medium bg-[#1C5540] rounded-lg text-white flex items-center justify-center gap-2">
                                        <img src="/images/icons/profil/arti-beyaz.svg" alt="" />
                                        Değişiklikleri Kaydet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default SubeIslemleri;