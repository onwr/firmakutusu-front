import React from "react";
import { motion } from "framer-motion";
import ReferansCard from "./components/referanslar/ReferansCard";
import YorumCard from "./components/referanslar/YorumCard";

const Referanslar = () => {
  return (
    <motion.div
      key="tab-4"
      className="montserrat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-end">
        <p className="text-[#120A8F] font-semibold text-sm">Referanslarımız</p>
      </div>

      <p className="font-medium">Referanslarımız</p>

      <p className="mt-5">
        Firmamızın sunduğu hizmet ve ürünlere güvenen iş ortaklarımızı ve
        müşterilerimizi aşağıda bulabilirsiniz. Hayata geçirdiğimiz projeler ve
        kurduğumuz iş birlikleri, kaliteye verdiğimiz önemin ve müşteri
        memnuniyetine olan bağlılığımızın bir yansımasıdır.
      </p>

      <p className="font-medium mt-5">
        İş Ortaklarımız ve Çözüm Sağladığımız Firmalar
      </p>

      <p className="mt-2">
        Firmamızın iş birliği yaptığı ve hizmet sunduğu değerli iş ortaklarımızı
        aşağıda görebilirsiniz.
      </p>

      <div className="grid mt-5 grid-cols-3 gap-5">
        <ReferansCard />
      </div>

      <p className="font-medium mt-8">Hizmet Verdiğimiz Müşterilerimiz</p>

      <p className="mt-2">
        Ürün ve hizmetlerimize güvenen müşterilerimiz, başarımızın en büyük
        kanıtıdır.
      </p>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <YorumCard />
      </div>
    </motion.div>
  );
};

export default Referanslar;
