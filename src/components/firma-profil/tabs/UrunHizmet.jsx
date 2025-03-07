import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UrunHizmet = () => {
  const sliderRef = React.useRef(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <motion.div
      key="tab-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="montserrat"
    >
      <div className="flex justify-end montserrat">
        <p className="text-[#120A8F] font-semibold text-sm">
          Ürün & Hizmetlerimiz
        </p>
      </div>
      <p className="font-medium">Ürün ve Hizmet Kataloglarımız</p>
      <p className="mt-5">
        Ürün ve hizmetlerimizle ilgili detaylı bilgi almak için kataloğumuzu
        inceleyebilirsiniz. Size en uygun çözümleri keşfetmek için kataloğumuza
        göz atın.
      </p>
      <img
        src="/images/icons/firma-profil/icons/afis.svg"
        className="mt-5 w-full"
      />
      <div className="mt-10 flex items-center justify-between">
        <button onClick={previous} className="focus:outline-none">
          <img
            src="/images/icons/firma-profil/icons/arrow.svg"
            className="w-6 h-6"
          />
        </button>
        <Slider ref={sliderRef} {...settings} className="w-64 lg:w-[90vh]">
          <div className="px-2">
            <img
              src="/images/icons/firma-profil/icons/urun-resim.svg"
              className="rounded-t-xl w-full"
            />
            <div className="bg-[#51596C] rounded-b-xl p-4">
              <p className="montserrat font-semibold text-white">
                2022 Kırtasiye Ürünleri Kataloğu
              </p>
              <div className="flex gap-5 mt-4">
                <button className="flex justify-center text-white text-sm items-center gap-2 w-full py-2 border border-white rounded-[4px]">
                  <img src="/images/icons/firma-profil/icons/goster.svg" />
                  Göster
                </button>
                <button className="flex justify-center text-white text-sm items-center gap-2 w-full py-2 border border-white rounded-[4px]">
                  <img src="/images/icons/firma-profil/icons/download.svg" />
                  İndir
                </button>
              </div>
            </div>
          </div>
          <div className="px-2">
            <img
              src="/images/icons/firma-profil/icons/urun-resim.svg"
              className="rounded-t-xl w-full"
            />
            <div className="bg-[#51596C] rounded-b-xl p-4">
              <p className="montserrat font-semibold text-white">
                2022 Kırtasiye Ürünleri Kataloğu
              </p>
              <div className="flex gap-5 mt-4">
                <button className="flex justify-center text-white text-sm items-center gap-2 w-full py-2 border border-white rounded-[4px]">
                  <img src="/images/icons/firma-profil/icons/goster.svg" />
                  Göster
                </button>
                <button className="flex justify-center text-white text-sm items-center gap-2 w-full py-2 border border-white rounded-[4px]">
                  <img src="/images/icons/firma-profil/icons/download.svg" />
                  İndir
                </button>
              </div>
            </div>
          </div>
          <div className="px-2">
            <img
              src="/images/icons/firma-profil/icons/urun-resim.svg"
              className="rounded-t-xl w-full"
            />
            <div className="bg-[#51596C] rounded-b-xl p-4">
              <p className="montserrat font-semibold text-white">
                2022 Kırtasiye Ürünleri Kataloğu
              </p>
              <div className="flex gap-5 mt-4">
                <button className="flex justify-center text-white text-sm items-center gap-2 w-full py-2 border border-white rounded-[4px]">
                  <img src="/images/icons/firma-profil/icons/goster.svg" />
                  Göster
                </button>
                <button className="flex justify-center text-white text-sm items-center gap-2 w-full py-2 border border-white rounded-[4px]">
                  <img src="/images/icons/firma-profil/icons/download.svg" />
                  İndir
                </button>
              </div>
            </div>
          </div>
        </Slider>
        <button onClick={next} className="focus:outline-none">
          <img
            src="/images/icons/firma-profil/icons/arrow.svg"
            className="w-6 h-6 rotate-180"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default UrunHizmet;
