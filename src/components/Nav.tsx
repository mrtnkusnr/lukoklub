import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";

const HeaderNavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="sm:flex">
        <div className="hidden sm:flex">
          <NavLinks />
        </div>
        <div className="sm:hidden flex visible justify-end ">
          <button onClick={toggleNavbar} className="material-icons">
            {isOpen ? "close" : "menu"}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full mt-6 sm:hidden">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default HeaderNavLinks;
