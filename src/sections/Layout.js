import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import miFoto from "../images/GettyImages-905866230.width-880.jpg"; // Importa la imagen

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="relative mt-32">
        <img src={miFoto} alt="AI" style={{ maxHeight: "75vh",  width: "100%" }} />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mx-4 titulo1">In an era where a minute offline could cost millions,</h1>
          <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mx-4 titulo1">I'm here to ensure your company never has to pay that price</h1>
        </div>
      </div>
      <div className="overflow-y-auto">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
