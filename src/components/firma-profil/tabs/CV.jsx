import React from "react";
import { motion } from "framer-motion";

const CV = () => {
  return (
    <motion.div
      key="tab-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="montserrattext-[#232323]"
    >
      <div className="flex justify-end montserrat">
        <p className="text-[#120A8F] font-semibold text-sm">
          Bize Katılın | İş & Kariyer
        </p>
      </div>
      <p className="font-medium text-black">İş Başvurusu</p>
      <p className="mt-5 text-black">
        Firmamızda açık olan pozisyonlar için başvurularınızı bu form
        aracılığıyla iletebilirsiniz. Sizin gibi yetenekli ve motive
        çalışanlarla iş birliği yapmaktan mutluluk duyarız. Başvurunuzu en kısa
        sürede değerlendireceğiz.
      </p>
      <div className="py-6 max-w-4xl mx-auto mt-8">
        <p className="montserrat font-medium">İş Başvurusu Formu</p>
        <p className="text-[#232323] mt-2">
          Başvurular, pozisyon niteliklerine göre filtrelenerek uygun adaylar
          sınav ve mülakat süreçlerine davet edilmektedir. İlan dönemi dışında
          web üzerinden yapılan başvurular ise aday havuzunda saklanmaktadır.
        </p>

        <div className="py-2 mt-2 px-3 md:px-5 montserrat rounded-lg border border-[#A2ACC7] flex flex-col">
          <label htmlFor="adınız" className="text-xs md:text-sm text-[#232323]">
            Adınız
          </label>
          <input
            type="text"
            id="adınız"
            placeholder="Adınızı giriniz"
            className="text-[#232323] font-medium  outline-none mt-1"
          />
        </div>

        <div className="py-2 mt-2 px-3 md:px-5 montserrat rounded-lg border border-[#A2ACC7] flex flex-col">
          <label
            htmlFor="soyadiniz"
            className="text-xs md:text-sm text-[#232323]"
          >
            Soyadınız
          </label>
          <input
            type="text"
            id="soyadiniz"
            placeholder="Soyadınızı Giriniz"
            className="text-[#232323] font-medium  outline-none mt-1"
          />
        </div>

        <div className="py-2 mt-2 px-3 md:px-5 montserrat rounded-lg border border-[#A2ACC7] flex flex-col">
          <label htmlFor="tc" className="text-xs md:text-sm text-[#232323]">
            T.C. Kimlik Numaranız
          </label>
          <input
            type="text"
            id="tc"
            placeholder="T.C. Kimlik Numaranız"
            className="text-[#232323] font-medium  outline-none mt-1"
          />
        </div>

        <div className="py-2 mt-2 px-3 md:px-5 montserrat rounded-lg border border-[#A2ACC7] flex flex-col">
          <label htmlFor="tel" className="text-xs md:text-sm text-[#232323]">
            Telefon Numaranız
          </label>
          <input
            type="text"
            id="tel"
            placeholder="Telefon Numaranız"
            className="text-[#232323] font-medium  outline-none mt-1"
          />
        </div>

        <div className="py-2 mt-2 px-3 md:px-5 montserrat rounded-lg border border-[#A2ACC7] flex flex-col">
          <label htmlFor="email" className="text-xs md:text-sm text-[#232323]">
            Telefon Numaranız
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-Mail Adresiniz"
            className="text-[#232323] font-medium  outline-none mt-1"
          />
        </div>

        <div className="py-2 mt-2 px-3 md:px-5 montserrat rounded-lg border border-[#A2ACC7] flex flex-col">
          <label htmlFor="meslek" className="text-xs md:text-sm text-[#232323]">
            Mesleğiniz
          </label>
          <input
            type="text"
            id="meslek"
            placeholder="Mesleğiniz"
            className="text-[#232323] font-medium  outline-none mt-1"
          />
        </div>

        <div className="py-2 mt-2 px-3 md:px-5 montserrat rounded-lg border border-[#A2ACC7] flex gap-2">
          <img
            src="/images/icons/firma-profil/icons/cvekle.svg"
            className="size-6"
          />

          <p className="font-medium">
            CV Dosyanızı Yükleyin{" "}
            <span className="text-xs">
              ( Maksimum: 2 MB / Dosya Türü: txt, pdf, doc, docx, xls, xlsx )
            </span>
          </p>
        </div>

        <div className="flex items-start mt-2 gap-1">
          <input
            type="checkbox"
            id="bilgi"
            className="w-5 h-5 mt-0.5 accent-[#A2ACC7]"
          />
          <label htmlFor="bilgi">
            FirmaKutusu.com tarafından yukarıda belirtmiş olduğum bilgiler
            üzerinden benimle iletişim kurulmasını ve izinli iletişim formu‘nu
            onaylıyorum.
          </label>
        </div>

        <button className="flex items-center w-full mt-2 bg-[#1C5540] py-4 justify-center text-white rounded-lg gap-2 font-semibold">
          İş Başvuru Formumu Gönder
          <img src="/images/icons/firma-profil/icons/basvuruyolla.svg" />
        </button>
      </div>
    </motion.div>
  );
};

export default CV;
