import CustomSwitch from "./CustomSwitch";
import TrainingsSummer from "./TrainingsSummer";
import TrainingsWinter from "./TrainingsWinter";
import Heading from "./Heading";
import InfoFeature from "./InfoFeature";

const Trainings = () => {
  return (
    <>
      <div className="py-16 bg-gradient-to-b from-transparent to-gray-50 border-b border-gray-100">
        <div className="flex flex-col text-center items-center ">
          <Heading title="Tréningy"></Heading>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-24 my-12">
          <InfoFeature
            icon="sunny"
            title="Letná sezóna"
            description="Tréningy počas letnej sezóny trvajú od začiatku mája až do 27. októbra (zmena z letného času na zimný)"
          />

          <InfoFeature
            icon="ac_unit"
            title="Zimná sezóna"
            description="Zimné tréningy sa konajú od novembra až do konca apríla - podľa možností prenájmu telocvične"
          />

          <InfoFeature
            icon="rainy"
            title="Dážď"
            description="Čo robiť v daždi? V zime - nezabudnúť si dáždnik na ceste do telocvične. V lete, sleduj predpoveď, našu facebookovú skupinu alebo volaj trénerom"
          />
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
