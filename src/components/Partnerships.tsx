import LogoWorldArchery from "../assets/logo-world-archery.svg";
import LogoSLZ from "../assets/logo-szl.svg";
import LogoArcheryStrike from "../assets/logo-archery-strike.svg";
import LogoJasov from "../assets/logo-jasov.svg";
import LogoLukostrelba from "../assets/logo-lukostrelba-sk.svg";

const Partnerships = () => {
  return (
    <div className="flex flex-wrap justify-center sm:gap-12 md:gap-14 lg:gap-16 items-center ">
      <img
        className="h-36 w-60 grayscale transform transition duration-500 hover:scale-105 hover:grayscale-0"
        src={LogoWorldArchery}
      ></img>
      <img
        className="h-36 w-60 grayscale transform transition duration-500 hover:scale-105 hover:grayscale-0"
        src={LogoSLZ}
      ></img>
      <img
        className="h-36 w-60 grayscale transform transition duration-500 hover:scale-105 hover:grayscale-0"
        src={LogoJasov}
      ></img>
      <img
        className="h-36 w-52 grayscale transform transition duration-500 hover:scale-105 hover:grayscale-0"
        src={LogoArcheryStrike}
      ></img>
      <img
        className="h-36 w-60 grayscale transform transition duration-500 hover:scale-105 hover:grayscale-0"
        src={LogoLukostrelba}
      ></img>
    </div>
  );
};

export default Partnerships;
