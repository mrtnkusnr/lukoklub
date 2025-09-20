import CustomSwitch from "./CustomSwitch";
import TrainingsSummer from "./TrainingsSummer";
import TrainingsWinter from "./TrainingsWinter";
import Heading from "./Heading";

const Trainings = () => {
  return (
    <>
      <div className="py-16 bg-gradient-to-b from-transparent to-gray-50 border-b border-gray-100">
        <div className="flex flex-col text-center items-center ">
          <Heading title="Tréningy"></Heading>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-24 my-12">
          <div className="flex flex-col text-center w-96">
            <span className="material-symbols-outlined text-6xl pb-4">
              sunny
            </span>
            <span className="text-xl font-semibold pb-4">Letná sezóna</span>
            <span className="">
              Tréningy počas letnej sezóny trvajú od začiatku mája až do 27.
              októbra (zmena z letného času na zimný)
            </span>
          </div>

          <div className="flex flex-col text-center max-w-screen-sm w-96">
            <span className="material-symbols-outlined text-6xl pb-4">
              ac_unit
            </span>
            <span className="text-xl font-semibold  pb-4">Zimná sezóna</span>
            <span className="">
              Zimné tréningy sa konajú od novembra až do konca apríla - podľa
              možností prenájmu telocvične
            </span>
          </div>

          <div className="flex flex-col text-center max-w-screen-sm w-96">
            <span className="material-symbols-outlined text-6xl pb-4">
              rainy
            </span>
            <span className="text-xl font-semibold  pb-4">Dážď</span>
            <span className="">
              Čo robiť v daždi? V zime - nezabudnúť si dáždnik na ceste do
              telocvične. V lete, sleduj predpoveď, našu facebookovú skupinu
              alebo volaj trénerom
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center p-6 mt-24">
        <CustomSwitch
          option1={
            <div className="flex flex-row sm:px-14 justify-center items-center">
              <span className="material-symbols-outlined">sunny</span>
              <span className="pl-2"> Letná sezóna </span>
            </div>
          }
          option2={
            <div className="flex flex-row sm:px-14 justify-center items-center">
              <span className="material-symbols-outlined">ac_unit</span>
              <span className="pl-2"> Zimná sezóna </span>
            </div>
          }
          defaultValue={1}
          renderComponent={(value: 1 | 2) => {
            return value === 1
              ? () => <TrainingsSummer />
              : () => <TrainingsWinter />;
          }}
        />
      </div>
    </>
  );
};

export default Trainings;
