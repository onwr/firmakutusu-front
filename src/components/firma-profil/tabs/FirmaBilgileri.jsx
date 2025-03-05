import React from 'react'
import { motion } from 'framer-motion';

const FirmaBilgileri = () => {
    return (
        <motion.div
            key="tab-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='montserrat'
        >
            <div className='flex justify-end'>
                <p className='text-[#120A8F] font-semibold text-sm'>Resmi Firma Bilgilerimiz</p>
            </div>

            <p className='font-medium '>Resmi Firma Bilgilerimiz</p>
            <p className='my-3'>Ürün ve hizmetlerimizle ilgili detaylı bilgi almak için kataloğumuzu inceleyebilirsiniz. Size en uygun çözümleri keşfetmek için kataloğumuza göz atın.</p>
            <div className='flex flex-col gap-4'>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Firma Unvanı</p>
                    <p className='text-[#232323] w-full text-xl'>AYYILDIZ TÜNEL EKİPMANLARI İMALATI MÜHENDİSLİK SANAYİ VE TİCARET ANONİM ŞİRKETİ</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Marka Adı</p>
                    <p className='text-[#232323] w-full text-xl'>AYYILDIZ TÜNEL EKİPMANLARI</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Hizmet Sektörü</p>
                    <p className='text-[#232323] w-full text-xl'>Demir Çelik İmalatı</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Faaliyet Alanı</p>
                    <div className='w-full'>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr>
                                    <th className='border w-40 border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-center'>Faaliyet Türü</th>
                                    <th className='border border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-left'>Faaliyet Alanı</th>
                                    <th className='border w-40 border-[#A2ACC7] bg-[#F1EEE6] text-[#232323] p-2 text-center'>NACE Kodu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border border-[#A2ACC7] p-2'>Ana Faaliyet</td>
                                    <td className='border border-[#A2ACC7] p-2'>
                                        Metallerin Makinede İşlenmesi (Torna Tesfiye İşleri, Metal Parçaları Delme, Tornalama, Frezeleme, Rendeleme, Parlatma, Oluk Açma, Perdahlama, Birleştirme, Kaynak Yapma Vb. Faaliyetler) (Metallerin Lazerle Kesilmesi Hariç)
                                    </td>
                                    <td className='border border-[#A2ACC7] p-2 text-center'>25.62.02</td>
                                </tr>
                                <tr>
                                    <td className='border border-[#A2ACC7] p-2'>EK Faaliyet - 1</td>
                                    <td className='border border-[#A2ACC7] p-2'>
                                        Demir/Çelikten Haddelenmiş/Soğuk Çekilmiş Yassı Ürünlerin Toptan Ticareti
                                    </td>
                                    <td className='border border-[#A2ACC7] p-2 text-center'>46.72.08</td>
                                </tr>
                                <tr>
                                    <td className='border border-[#A2ACC7] p-2'>EK Faaliyet - 2</td>
                                    <td className='border border-[#A2ACC7] p-2'>
                                        Demir/çelikten bar ve çubukların, profillerin, levha kazıkların (palplanş), tüp ve boruların toptan ticareti (filmaşin, inşaat demiri, sondaj borusu, petrol, gaz vb. hatlar için borular, vb. ile tel dahil)
                                    </td>
                                    <td className='border border-[#A2ACC7] p-2 text-center'>46.72.09</td>
                                </tr>
                                <tr>
                                    <td className='border border-[#A2ACC7] p-2'>EK Faaliyet - 3</td>
                                    <td className='border border-[#A2ACC7] p-2'>
                                        Demir/çelikten bar ve çubukların, profillerin, levha kazıkların (palplanş), tüp ve boruların toptan ticareti (filmaşin, inşaat demiri, sondaj borusu, petrol, gaz vb. hatlar için borular, vb. ile tel dahil)
                                    </td>
                                    <td className='border border-[#A2ACC7] p-2 text-center'>46.72.09</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Faaliyet Durumu</p>
                    <p className='text-[#232323] w-full text-xl'>Faal</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Kuruluş Tarihi</p>
                    <p className='text-[#232323] w-full text-xl'>05.09.2022</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Kuruluş Şehri</p>
                    <p className='text-[#232323] w-full text-xl'>Ankara</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Vergi Kimlik Numarası</p>
                    <p className='text-[#232323] w-full text-xl'>1260941872</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Vergi Dairesi Adı</p>
                    <p className='text-[#232323] w-full text-xl'>Ulus Vergi Dairesi</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>MERSİS No</p>
                    <p className='text-[#232323] w-full text-xl'>123456789012</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>E-Fatura Kullanımı</p>
                    <p className='text-[#232323] w-full text-xl'>Evet</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>E-Arşiv Kullanımı</p>
                    <p className='text-[#232323] w-full text-xl'>Evet</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>E-İrsaliye Kullanımı</p>
                    <p className='text-[#232323] w-full text-xl'>Evet</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>E-Defter Kullanımı</p>
                    <p className='text-[#232323] w-full text-xl'>Evet</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Merkez Adresi</p>
                    <p className='text-[#232323] w-full text-xl'>Finanskent Mahallesi Finans Caddesi No:42/1 34760 Ümraniye/İSTANBUL Finanskent Maha..</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>KEP Adresi</p>
                    <p className='text-[#232323] w-full text-xl'>Mevcut Değil</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>E-Posta Adresi</p>
                    <p className='text-[#232323] w-full text-xl'>UzunmailadresiAUzunmailadresi.Com.Tr</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Resmi Web Adresi</p>
                    <p className='text-[#120A8F] w-full text-xl'>wwwUzunmailadresi.Com.Tr</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>İletişim Telefonu</p>
                    <p className='text-[#232323] w-full text-xl'>0312 123 4567</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Fax Numarası</p>
                    <p className='text-[#232323] w-full text-xl'>0312 123 5566</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Banka IBAN Numarası</p>
                    <p className='text-[#232323] w-full text-xl'>TR11 0000 0000 0000 0000 0000 00</p>
                </div>
                <div className='flex items-start justify-between'>
                    <p className='text-[#232323] font-medium w-1/3 text-xl'>Banka IBAN Numarası</p>
                    <p className='text-[#232323] w-full text-xl'>KuveytTürk</p>
                </div>
            </div>
        </motion.div>
    )
}

export default FirmaBilgileri