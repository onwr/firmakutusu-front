import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";
import { FormInput } from "../../../components/common/Input";
import { BiTrash } from "react-icons/bi";

const GaleriIslem = () => {
    const { isLogin, user } = useAuth();
    const { firma } = user;
    const fileInputRef = useRef(null);

    const initialGaleriData = {
        baslik: firma.resim_galerisi?.baslik || "Resim Galerimiz",
        resimler: firma.resim_galerisi?.resimler || firma.resim_galerisi || []
    };

    const [formData, setFormData] = useState(initialGaleriData);
    const [selectedImage, setSelectedImage] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [currentEditImage, setCurrentEditImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (!editMode) {
                    const newImage = {
                        id: Date.now(),
                        resim_url: reader.result,
                        baslik: "Yeni Resim"
                    };
                    setFormData(prev => ({
                        ...prev,
                        resimler: [...prev.resimler, newImage]
                    }));
                }
                else if (currentEditImage) {
                    setFormData(prev => ({
                        ...prev,
                        resimler: prev.resimler.map(resim =>
                            resim.id === currentEditImage.id
                                ? { ...resim, resim_url: reader.result }
                                : resim
                        )
                    }));
                    setEditMode(false);
                    setCurrentEditImage(null);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditImage = (image) => {
        setCurrentEditImage(image);
        setEditMode(true);
    };

    const handleEditImageTitle = (e) => {
        const newTitle = e.target.value;
        if (currentEditImage) {
            setCurrentEditImage(prev => ({
                ...prev,
                baslik: newTitle
            }));
        }
    };

    const saveImageEdit = () => {
        if (currentEditImage) {
            setFormData(prev => ({
                ...prev,
                resimler: prev.resimler.map(resim =>
                    resim.id === currentEditImage.id
                        ? { ...resim, baslik: currentEditImage.baslik }
                        : resim
                )
            }));
            setEditMode(false);
            setCurrentEditImage(null);
        }
    };

    const handleDeleteImage = (id) => {
        setFormData(prev => ({
            ...prev,
            resimler: prev.resimler.filter(resim => resim.id !== id)
        }));
    };

    const handleSelectImage = (image) => {
        setSelectedImage(image);
    };

    const handlePrevImage = () => {
        if (selectedImage) {
            const currentIndex = formData.resimler.findIndex(img => img.id === selectedImage.id);
            const prevIndex = (currentIndex - 1 + formData.resimler.length) % formData.resimler.length;
            setSelectedImage(formData.resimler[prevIndex]);
        } else if (formData.resimler.length > 0) {
            setSelectedImage(formData.resimler[0]);
        }
    };

    const handleNextImage = () => {
        if (selectedImage) {
            const currentIndex = formData.resimler.findIndex(img => img.id === selectedImage.id);
            const nextIndex = (currentIndex + 1) % formData.resimler.length;
            setSelectedImage(formData.resimler[nextIndex]);
        } else if (formData.resimler.length > 0) {
            setSelectedImage(formData.resimler[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Galeri verileri güncellenecek:", formData);
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
                <p className="text-[#120A8F] font-semibold text-sm">Resim Galerimiz</p>
            </div>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Başlık"
                    name="baslik"
                    value={formData.baslik}
                    onChange={handleInputChange}
                    className="mt-5"
                />

                <div className="my-5 relative">
                    {selectedImage || formData.resimler.length > 0 ? (
                        <img
                            src={selectedImage ? selectedImage.resim_url : formData.resimler[0].resim_url}
                            className="w-full h-64 object-cover rounded-xl"
                            alt={selectedImage ? selectedImage.baslik : formData.resimler[0].baslik}
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-xl">
                            <p className="text-gray-500">Galeri boş</p>
                        </div>
                    )}

                    {formData.resimler.length > 0 && (
                        <>
                            <button
                                type="button"
                                className="absolute top-5 right-5 text-white bg-[#A42E2D] p-2 rounded"
                                onClick={() => handleDeleteImage(formData.resimler[0].id)}
                            >
                                <BiTrash />
                            </button>
                            <button
                                type="button"
                                className="absolute top-1/2 left-5 transform -translate-y-1/2"
                                onClick={handlePrevImage}
                            >
                                <img src="/images/icons/left-arrow-red.svg" alt="Önceki" />
                            </button>
                            <button
                                type="button"
                                className="absolute top-1/2 right-5 transform -translate-y-1/2"
                                onClick={handleNextImage}
                            >
                                <img src="/images/icons/right-arrow-red.svg" alt="Sonraki" />
                            </button>
                        </>
                    )}
                </div>

                <p className="bg-[#8B8138] rounded-t-xl px-6 py-2 text-white marcellus text-xl">Fotoğraf Albümümüz</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                    <button
                        type="button"
                        className="h-60 w-full outline-none bg-[#A2ACC7] rounded-lg gap-5 flex items-center flex-col justify-center"
                        onClick={() => fileInputRef.current.click()}
                    >
                        <img src="/images/img-upload.svg" alt="Upload" />
                        <div className="flex items-center gap-3 justify-center">
                            <img src="/images/add-black.svg" alt="Add" />
                            <p className="text-lg font-medium">Yeni Resim Yükle</p>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            className="hidden"
                            accept="image/*"
                        />
                    </button>

                    {formData.resimler.map((resim) => (
                        <div key={resim.id} className="relative h-60">
                            <img
                                src={resim.resim_url}
                                className="w-full h-full object-cover rounded-lg"
                                alt={resim.baslik}
                                onClick={() => handleSelectImage(resim)}
                            />
                            <div className="absolute top-2 right-2 flex gap-2">
                                <button
                                    type="button"
                                    className="text-white bg-[#A42E2D] p-2 rounded"
                                    onClick={() => handleDeleteImage(resim.id)}
                                >
                                    <BiTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </motion.div>
    );
};

export default GaleriIslem;