import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthContext";
import { FormInput } from "../../../components/common/Input";
import { BiTrash, BiPlayCircle } from "react-icons/bi";

const VideoIslem = () => {
    const { isLogin, user } = useAuth();
    const { firma } = user;
    const fileInputRef = useRef(null);

    // Video galerisini başlatma
    const initialVideoData = {
        baslik: firma.video_galerisi?.baslik || "Videolarımız",
        videolar: firma.video_galerisi?.videolar || firma.video_galerisi || []
    };

    const [formData, setFormData] = useState(initialVideoData);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Form değişikliklerini yönetme
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Video yükleme fonksiyonu
    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('video')) {
            const newVideo = {
                id: Date.now(),
                video_url: URL.createObjectURL(file),
                baslik: file.name || "Yeni Video"
            };

            setFormData(prev => ({
                ...prev,
                videolar: [...prev.videolar, newVideo]
            }));
        } else {
            alert("Lütfen geçerli bir video dosyası seçin!");
        }
    };

    const handleDeleteVideo = (id) => {
        setFormData(prev => ({
            ...prev,
            videolar: prev.videolar.filter(video => video.id !== id)
        }));

        if (selectedVideo && selectedVideo.id === id) {
            setSelectedVideo(null);
        }
    };

    const handleSelectVideo = (video) => {
        setSelectedVideo(video);
    };

    const handlePrevVideo = () => {
        if (selectedVideo && formData.videolar.length > 1) {
            const currentIndex = formData.videolar.findIndex(vid => vid.id === selectedVideo.id);
            const prevIndex = (currentIndex - 1 + formData.videolar.length) % formData.videolar.length;
            setSelectedVideo(formData.videolar[prevIndex]);
        } else if (formData.videolar.length > 0) {
            setSelectedVideo(formData.videolar[0]);
        }
    };

    const handleNextVideo = () => {
        if (selectedVideo && formData.videolar.length > 1) {
            const currentIndex = formData.videolar.findIndex(vid => vid.id === selectedVideo.id);
            const nextIndex = (currentIndex + 1) % formData.videolar.length;
            setSelectedVideo(formData.videolar[nextIndex]);
        } else if (formData.videolar.length > 0) {
            setSelectedVideo(formData.videolar[0]);
        }
    };

    // Form gönderme işlemi
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Video verileri güncellenecek:", formData);
        // Burada API'ye gönderme işlemi yapılacak
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
                <p className="text-[#120A8F] font-semibold text-sm">Video Galerimiz</p>
            </div>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Başlık"
                    name="baslik"
                    value={formData.baslik}
                    onChange={handleInputChange}
                    className="mt-5"
                />

                <div className="my-5 relative bg-black rounded-xl">
                    {selectedVideo || formData.videolar.length > 0 ? (
                        <video
                            src={selectedVideo ? selectedVideo.video_url : formData.videolar[0].video_url}
                            className="w-full h-60 lg:h-96 object-contain rounded-xl"
                            controls
                            poster="/images/videobaslik.png"
                        >
                            Tarayıcınız video etiketini desteklemiyor.
                        </video>
                    ) : (
                        <div className="w-full h-64 bg-gray-800 flex items-center justify-center rounded-xl text-white">
                            <p>Video galerisi boş</p>
                        </div>
                    )}

                    {(selectedVideo || formData.videolar.length > 0) && (
                        <>

                            {formData.videolar.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10"
                                        onClick={handlePrevVideo}
                                    >
                                        <img src="/images/icons/left-arrow-red.svg" alt="Önceki" />
                                    </button>
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10"
                                        onClick={handleNextVideo}
                                    >
                                        <img src="/images/icons/right-arrow-red.svg" alt="Sonraki" />
                                    </button>
                                </>
                            )}

                            <div className="absolute top-4 right-4 flex gap-2">
                                <button
                                    type="button"
                                    className="text-white bg-[#A42E2D] p-2 rounded"
                                    onClick={() => handleDeleteVideo((selectedVideo || formData.videolar[0]).id)}
                                >
                                    <BiTrash />
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <p className="bg-[#8B8138] rounded-t-xl px-6 py-2 text-white marcellus text-xl">Video Koleksiyonumuz</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                    <button
                        type="button"
                        className="h-60 w-full outline-none bg-[#A2ACC7] rounded-lg gap-5 flex items-center flex-col justify-center"
                        onClick={() => fileInputRef.current.click()}
                    >
                        <img src="/images/video-upload.svg" alt="Upload" />
                        <div className="flex items-center gap-3 justify-center">
                            <img src="/images/add-black.svg" alt="Add" />
                            <p className="text-lg font-medium">Yeni Video Yükle</p>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleVideoUpload}
                            className="hidden"
                            accept="video/*"
                        />
                    </button>

                    {formData.videolar.map((video) => (
                        <div key={video.id} className="relative h-60 group">
                            <div
                                className="w-full h-full rounded-lg bg-black cursor-pointer overflow-hidden"
                                onClick={() => handleSelectVideo(video)}
                            >
                                <video
                                    src={video.video_url}
                                    className="w-full h-full object-cover"
                                    muted
                                >
                                    Tarayıcınız video etiketini desteklemiyor.
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all">
                                    <BiPlayCircle className="text-white text-5xl" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 truncate">
                                {video.baslik}
                            </div>
                            <div className="absolute top-2 right-2 flex gap-2">
                                <button
                                    type="button"
                                    className="text-white bg-[#A42E2D] p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteVideo(video.id);
                                    }}
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

export default VideoIslem;