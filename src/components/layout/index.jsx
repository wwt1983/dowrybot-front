import { Outlet } from "react-router-dom";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import NavMenu from "../navMenu/NavMenu";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        <NavMenu isOpen={isOpen} />
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
