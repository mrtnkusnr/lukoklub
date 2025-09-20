import Home1 from "../assets/home-1.jpg";
import Logo from "../assets/logo.svg";

const Banner = () => {
  return (
    <div className="relative w-full h-full">
      <img
        src={Home1}
        className="object-cover w-full h-[47rem] grayscale opacity-[6%] "
        alt="Background"
      />

      <div className="absolute inset-0 flex flex-col items-center space-y-4 mt-12">
        <img src={Logo} className="w-3/5 max-h-96 sm:h-fit"></img>
        <h2 className="text-lg text-gray-800 max-w-4xl text-center p-6">
          Vstúpte do fascinujúceho sveta lukostreľby a objavte šport, ktorý
          kombinuje presnosť, sústredenie a zábavu – šport, kde každý výstrel je
          príležitosťou na zlepšenie seba samého
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-sm font-medium py-2 px-4 flex justify-center items-center group">
            <span className="pr-1">Vstúpiť</span>
            <span className="material-symbols-outlined transition-transform duration-300 transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>

          <button className="bg-white text-gray-800 border border-gray-200 rounded-sm shadow-sm font-medium py-2 px-4">
            Lukoklub since 1996
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
