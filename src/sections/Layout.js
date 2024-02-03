import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="overflow-y-auto"> {children} </div>
      <Footer/>
    </div>
  );
};

export default Layout;
