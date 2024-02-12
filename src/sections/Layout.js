import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";

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
      <div className="lg:max-w-full" >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

