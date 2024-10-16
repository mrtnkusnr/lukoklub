import TrainingsSummer from "./TrainingsSummer";

const Trainings = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col text-center items-center">
        <h1 className="text-6xl">Tréningy</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-24 mt-20">
        <div className="flex flex-col text-center w-96">
          <span className="material-symbols-outlined text-6xl pb-4">sunny</span>
          <span className="text-lg font-semibold pb-4">Letná sezóna</span>
          <span className="">
            Tréningy počas letnej sezóny trvajú od začiatku mája až do 27.
            októbra (zmena z letného času na zimný)
          </span>
        </div>

        <div className="flex flex-col text-center max-w-screen-sm w-96">
          <span className="material-symbols-outlined text-6xl pb-4">
            ac_unit
          </span>
          <span className="text-lg font-semibold  pb-4">Zimná sezóna</span>
          <span className="">
            Zimné tréningy sa konajú od novembra až do konca apríla - podľa
            možností prenájmu telocvične
          </span>
        </div>

        <div className="flex flex-col text-center max-w-screen-sm w-96">
          <span className="material-symbols-outlined text-6xl pb-4">rainy</span>
          <span className="text-lg font-semibold  pb-4">Dážď</span>
          <span className="">
            Čo robiť v daždi? V zime - nezabudnúť si dáždnik na ceste do
            telocvične. V lete, sleduj predpoveď, našu facebookovú skupinu alebo
            volaj trénerom
          </span>
        </div>
      </div>

      <TrainingsSummer />
    </div>
  );
};

export default Trainings;
