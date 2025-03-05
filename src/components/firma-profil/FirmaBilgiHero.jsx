import React from 'react';
import { motion } from 'framer-motion';

const FirmaBilgiHero = () => {
    return (
        <div className='flex flex-col md:flex-row px-5 md:px-20 md:gap-10 pb-5'>
            <motion.div
                className='w-full md:w-1/6 flex flex-col items-center montserrat'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src="/images/icons/firma-profil/firma-logo.svg"
                    className='rounded-full border-6 border-[#01A4BD] -translate-y-10'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.p
                    className="text-center -translate-y-8 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Kullanıcı <br />
                    Değerlendirme Puanı
                </motion.p>
                <motion.div
                    className='flex flex-row gap-1 items-center justify-center -translate-y-6'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    {Array(4).fill().map((_, i) => (
                        <img key={i} src="/images/icons/firma-profil/star-sari.svg" alt="" />
                    ))}
                    <img src="/images/icons/firma-profil/star-bos.svg" alt="" />
                </motion.div>
                <motion.p
                    className='-translate-y-3 text-center text-sm montserrat'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    FK Üye No: <span className='audiowide font-semibold'>12345678</span>
                </motion.p>
                <motion.img
                    src="/images/icons/firma-profil/qr.svg"
                    className='w-16 mx-auto -translate-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                />
            </motion.div>
            <motion.div
                className='w-full pt-5'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.p
                    className='text-[#A42E2D] marcellus text-lg text-center md:text-left md:text-xl lg:text-2xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    AYYILDIZ TÜNEL EKİPMANLARI
                </motion.p>
                <motion.p
                    className='marcellus text-[#232323] text-lg text-center md:text-left md:text-2xl lg:text-3xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    AYYILDIZ TÜNEL EKİPMANLARI İMALATI MÜHENDİSLİK SAN. VE TİC. A.Ş.
                </motion.p>
                <div className='mt-8 flex flex-col gap-2 md:gap-1'>
                    {[
                        { label: 'Hizmet Alanı', value: 'Demir Çelik İmalatı' },
                        { label: 'Kuruluş Tarihi', value: '05.05.2024' },
                        { label: 'Kuruluş Şehri', value: 'Ankara' },
                        { label: 'Merkez Adresi', value: 'Finanskent Mahallesi Finans Caddesi No:42/1 34760 Ümraniye/İSTANBUL' },
                        { label: 'KEP Adresi', value: 'Mevcut Değil' },
                        { label: 'E-Posta Adresi', value: 'UzunmailadresiAUzunmailadresi.Com.Tr' },
                        { label: 'Resmi Web Adresi', value: 'wwwUzunmailadresi.Com.Tr' },
                        { label: 'İletişim Telefonu', value: '0312 123 4567' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className='flex md:flex-row flex-col md:items-center md:justify-between'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 + index * 0.2 }}
                        >
                            <p className='montserrat font-medium w-1/3 md:w-1/5'>{item.label}</p>
                            <p className='montserrat w-full'>{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default FirmaBilgiHero;