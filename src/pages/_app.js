import Footer from "@/components/Footer";
import Header from "@/components/Header";
import sms from "../../public/assets/sms.png";
import "@/styles/globals.css";
import { useState } from "react";
import { AuthProvider } from "@/components/context/AuthContext";
import Chatting from "@/components/chatting/Chatting";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AuthProvider>
        {pathname !== "/signin" && <Header />}
        <Component {...pageProps} />
        {pathname !== "/signin" && <Footer />}
        {show && <Chatting setShow={setShow} />}

        <div className="sms_btn text-end mt-4 mt-lg-0">
          <button onClick={() => setShow(!show)}>
            <img src={sms.src} alt="" /> Messages (02)
          </button>
        </div>
      </AuthProvider>
    </>
  );
}
