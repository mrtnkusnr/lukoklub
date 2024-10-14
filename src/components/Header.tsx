import { Link } from "react-router-dom";
import LogoMini from "../assets/logo-mini.svg";
import HeaderNavLinks from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-200 bg-white p-8 max-h-fit">
      <Link to="/">
        <img
          src={LogoMini}
          alt="logo-mini"
          className="transform transition duration-500 hover:scale-110  max-w-6	max-h-6"
        ></img>
      </Link>
      <HeaderNavLinks />
    </header>
  );
};

export default Header;
