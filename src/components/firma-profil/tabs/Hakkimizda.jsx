import React from 'react'
import { motion } from 'framer-motion';

const Hakkimizda = () => {
    return (
        <motion.div
            key="tab-1"
            className='montserrat'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='flex justify-end'>
                <p className='text-[#120A8F] font-semibold text-sm'>Hakkımızda</p>
            </div>

            <img src="/images/icons/firma-profil/icons/ceo.svg" alt="" />
            <p className='text-xl font-semibold text-[#232323] my-4'>CEO <span className='text-[#1C5540]'>Mesajı</span></p>
            <p className='montserrat text-[#232323]'>
                Saygıdeğer paydaşlarımız,
                <div className='mt-3'></div>
                “Bir otomobilden fazlası” için yola çıktığımızda iki stratejik hedefimiz vardı. Birincisi, küresel boyutta rekabet edebilir ve fikri mülkiyeti Togg’a, Türkiye’mize ait bir mobilite teknoloji markası geliştirmek. İkincisi, kullanıcıyı merkeze alarak akıllı cihazımız, dijital deneyim platformumuz ve temiz enerji çözümlerimiz etrafında, herkes için erişilebilir ve herkes tarafından geliştirilebilir bir mobilite ekosisteminin çekirdeğini oluşturmak."
            </p>
            <div className='mt-2 flex justify-end'>
                <p className='allura text-3xl'>Mehmet Gürcan Karakaş</p>
            </div>
        </motion.div>
    )
}

export default Hakkimizda