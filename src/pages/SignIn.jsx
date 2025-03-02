import React, { useState } from "react";

const SignIn = () => {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTekrar, setPasswordTekrar] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [kvkkOnay, setKvkkOnay] = useState(false);
  const [sozlesme, setSozlesme] = useState(false);
  const [rizaMetni, setRizaMetni] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, password, passwordTekrar, kvkkOnay, sozlesme, rizaMetni);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:justify-normal lg:flex-row">
      <div className="w-full  bg-[#1C5540] relative hidden lg:flex items-center justify-center">
        <img src="/images/logo-500.png" />
        <div className="absolute text-white font-light montserrat items-center flex flex-col gap-1 bottom-5 right-1/2 translate-x-1/2">
          <p className="text-sm">© 2025 www.firmakutusu.com</p>
          <p className="text-sm">HEDA Teknoloji Bilişim A.Ş. markasıdır.</p>
          <p className="text-sm">Tüm hakları saklıdır.</p>
        </div>
      </div>
      <div className="lg:w-full xl:w-1/3 flex flex-col items-center justify-center">
        <img src="/images/diklogo.svg" alt="" />
        <div className="max-w-xs montserrat mx-auto w-full mt-8">
          <div className="flex w-full gap-1">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 flex items-center text-[#232323] font-medium justify-center gap-2 cursor-pointer hover:bg-[#DFFF00]/60 duration-300  w-full ${
                tab === "login" ? "bg-[#DFFF00]" : "bg-[#F1EEE6]"
              } rounded-l-xl h-[60px]`}
            >
              <img src="/images/icons/login.svg" alt="" />
              Giriş Yap
            </button>
            <button
              onClick={() => setTab("register")}
              className={`flex-1 flex items-center text-[#232323] font-medium justify-center gap-2 cursor-pointer hover:bg-[#DFFF00]/60 duration-300  w-full ${
                tab === "register" ? "bg-[#DFFF00]" : "bg-[#F1EEE6]"
              } rounded-r-xl h-[60px]`}
            >
              <img src="/images/icons/kayit.svg" alt="" />
              Kayıt Ol
            </button>
          </div>

          <div className="w-full mt-3">
            {tab === "login" && (
              <form
                onSubmit={handleLogin}
                className="flex flex-col gap-3 items-center justify-center"
              >
                <div class="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    class="block px-2.5 pb-2.5 font-semibold pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#A2ACC7] appearance-none focus:outline-none focus:ring-0 focus:border-[#A2ACC7] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="email"
                    class="absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#232323] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    E-Mail
                  </label>
                </div>
                <div class="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="sifre"
                    class="block px-2.5 font-semibold pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#A2ACC7] appearance-none focus:outline-none focus:ring-0 focus:border-[#A2ACC7] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="sifre"
                    class="absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#232323] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Şifre
                  </label>
                  <img
                    src="/images/icons/goster.svg"
                    alt="Şifreyi göster/gizle"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <div className="flex w-full text-sm items-center justify-between">
                  <div className="flex items-center gap-1">
                    <input
                      id="oturum"
                      type="checkbox"
                      className="w-4 h-4 accent-[#ddff00]"
                    />
                    <label htmlFor="oturum" className="text-[#232323]">
                      Oturum açık kalsın
                    </label>
                  </div>
                  <a href="" className="font-semibold text-[#120A8F] ">
                    Şifre Sıfırlama
                  </a>
                </div>
                <button
                  type="submit"
                  className="flex cursor-pointer h-[60px] w-full bg-[#1C5540] rounded-lg justify-center text-white font-semibold items-center gap-1"
                >
                  <img src="/images/icons/power.png" alt="" />
                  Giriş
                </button>
              </form>
            )}
            {tab === "register" && (
              <form
                onSubmit={handleRegister}
                className="flex flex-col gap-3 items-center justify-center"
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    class="block px-2.5 font-semibold pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#A2ACC7] appearance-none focus:outline-none focus:ring-0 focus:border-[#A2ACC7] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    class="absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#232323] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    E-Mail
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="sifre"
                    class="block px-2.5 pb-2.5 font-medium pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#A2ACC7] appearance-none focus:outline-none focus:ring-0 focus:border-[#A2ACC7] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="sifre"
                    class="absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#232323] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Şifre Belirleyin
                  </label>
                  <img
                    src="/images/icons/goster.svg"
                    alt="Şifreyi göster/gizle"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passwordTekrar}
                    onChange={(e) => setPasswordTekrar(e.target.value)}
                    id="sifretekrar"
                    class="block px-2.5 pb-2.5 pt-4 font-medium w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#A2ACC7] appearance-none focus:outline-none focus:ring-0 focus:border-[#A2ACC7] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="sifretekrar"
                    class="absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#232323] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Şifreyi Tekrar Girin
                  </label>
                  <img
                    src="/images/icons/goster.svg"
                    alt="Şifreyi göster/gizle"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <div className="flex w-full text-xs flex-col gap-2">
                  <div className="flex items-start gap-1">
                    <input
                      id="kvkk"
                      type="checkbox"
                      required
                      onChange={() => setKvkkOnay(!kvkkOnay)}
                      className="w-3 h-3 mt-1 accent-[#ddff00]"
                    />
                    <label htmlFor="kvkk" className="text-[#232323]">
                      Kişisel verilerimin,{" "}
                      <span className="font-semibold">KVKK</span> Aydınlatma
                      Metni'nde belirtilen şekilde elde edilmesine, saklanmasına
                      ve işlenmesine açık rızamla onay veriyorum.
                    </label>
                  </div>
                  <div className="flex items-start gap-1">
                    <input
                      id="sozlesme"
                      type="checkbox"
                      onChange={() => setSozlesme(!sozlesme)}
                      className="w-3 h-3 mt-1 accent-[#ddff00]"
                      required
                    />
                    <label htmlFor="sozlesme" className="text-[#232323]">
                      FirmaKutusu.com Üyelik Sözleşmesi'ni ve Gizlilik
                      Politikası'nı okudum, kabul ediyorum.
                    </label>
                  </div>
                  <div className="flex items-start gap-1">
                    <input
                      id="riza"
                      type="checkbox"
                      onChange={() => setRizaMetni(!rizaMetni)}
                      className="w-3 h-3 mt-1 accent-[#ddff00]"
                      required
                    />
                    <label htmlFor="riza" className="text-[#232323]">
                      Aydınlatma ve rıza metnini kabul ediyorum ve iletişim
                      bilgilerimin paylaşılmasını ve tarafıma elektronik ileti
                      gönderilmesini onaylıyorum.
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex cursor-pointer h-[60px] w-full bg-[#1C5540] rounded-lg justify-center text-white font-semibold items-center gap-1"
                >
                  <img src="/images/icons/power.png" alt="" />
                  Kayıt Ol
                </button>
              </form>
            )}
            <div className="mt-7 flex flex-col w-full gap-2">
              <button className="flex h-[60px] w-full rounded-lg border border-[#A2ACC7] items-center justify-center gap-2">
                <img src="/images/icons/google.svg" alt="" />
                Google ile Devam Et
              </button>
              <button className="flex h-[60px] w-full rounded-lg border border-[#A2ACC7] items-center justify-center gap-2">
                <img src="/images/icons/apple.svg" alt="" />
                Apple ile Devam Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
