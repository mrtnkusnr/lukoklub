import InfoIcon from "./InfoIcon";
import Heading from "./Heading";

const TrainingsWinter = () => {
  const winterDateRange = "01. nov - 09. máj";
  const winterDays = "Streda";
  const winterSchedule = "16:30 - 18:00";
  const winterLocation =
    "Telocvičňa Základnej školy Kežmarská 30, Košice - Mestská časť Západ (Terasa - Luník IV)";

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-md shadow-lg p-10 max-w-6xl mx-auto">
        <Heading title="Zimná sezóna"></Heading>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-12 border-b-2 pb-12">
          <InfoIcon icon="date_range" header="Dátumy" desc={winterDateRange} />
          <InfoIcon icon="today" header="Dni v týždni" desc={winterDays} />
          <InfoIcon
            icon="schedule"
            header="Čas tréningu"
            desc={winterSchedule}
          />
        </div>

        <div className="w-full mb-12">
          <InfoIcon icon="location_on" header="Miesto" desc={winterLocation} />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.9836618204077!2d21.22860265801324!3d48.71176677263977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee13b82383657%3A0x13b09063eff8cda9!2zxaBrb2xza8OpIGlocmlza28gS2XFvm1hcnNrw6EgMzA!5e0!3m2!1sen!2ssk!4v1730219554274!5m2!1sen!2ssk"
          loading="lazy"
          className="w-full h-96 border border-gray-200 rounded-md shadow-sm grayscale hover:grayscale-0 transition-all duration-300"
        ></iframe>
      </div>
    </div>
  );
};

export default TrainingsWinter;
