import React from 'react'
import { motion } from 'framer-motion';

const Hakkimizda = () => {
    return (
        <motion.div
            key="tab-2"
            className='montserrat'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='flex justify-end'>
                <p className='text-[#120A8F] font-semibold text-sm'>Şubelerimiz</p>
            </div>

            <p className='font-medium'>Şubelerimiz</p>

            <p className='mt-5'>Firmamızın farklı lokasyonlardaki şubelerini aşağıda bulabilirsiniz. Size en yakın şubemizi ziyaret ederek hizmetlerimizden yerinde faydalanabilirsiniz.</p>

            <div className='grid grid-cols-2 gap-5 mt-5'>
                <div className=''>
                    <img src="/images/icons/firma-profil/icons/sube-resim.svg" className='w-full rounded-t-xl' />
                    <div className='py-4 px-8 border rounded-b-xl border-[#A2ACC7]'>
                        <p className='audiowide text-2xl bg-[#A2ACC7] py-2 px-5 rounded-lg text-white w-fit'>1</p>
                        <p className='font-semibold text-[#232323] mt-5'>ANKARA ANKAMALL AVM ŞUBE</p>
                        <div className='mt-4 flex flex-col gap-2'>
                            <div className='flex items-start gap-1.5'>
                                <img src="/images/icons/firma-profil/icons/konum.svg" />
                                <p className='text-[#232323] text-sm'>Finanskent Mahallesi Finans Caddesi No:42/1 34760 Ümraniye / İSTANBUL Finanskent Maha..</p>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <img src="/images/icons/firma-profil/icons/email.svg" />
                                <p className='text-[#232323] text-sm'>UzunmailadresQUzunmailadresi.Com.Tr</p>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <img src="/images/icons/firma-profil/icons/telefon.svg" />
                                <p className='text-[#232323] text-sm'>0312 123 4567</p>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <img src="/images/icons/firma-profil/icons/calisma-saat.svg" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#232323] text-sm'>Çalışma Saatleri</p>
                                    <div className='flex items-center'>
                                        <p className='text-[#232323] w-20 text-sm'>Pazartesi</p>
                                        <p>08:30 - 18:00</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-[#232323] w-20 text-sm'>Pazar</p>
                                        <p className='font-semibold'>Kapalı</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hakkimizda