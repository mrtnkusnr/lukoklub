import InfoIcon from "./InfoIcon";

const TrainingsSummer = () => {
  const summerLocation =
    "Bývalý areál Vojenskej leteckej akadémie Milana Rastislava Štefánika - vchod cez Okresné riaditeľstvo PZ v Košiciach, Rampová 7, Košice - Mestská časť Džungľa";

  const summerDateRange1 = "09. máj - 01. júl";
  const summerDateRange2 = "01. júl - 27. okt";
  const summerSchedule1 = "16:30 - 18:00";
  const summerSchedule2 = "17:00 - 18:30";
  const summerDays = "Pondelok, Streda, Piatok*";

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-md shadow-md p-10 max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold text-gray-800 mb-16 text-center">
          Letná sezóna
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-12 border-b-2 pb-12">
          <InfoIcon icon="date_range" header="Dátumy" desc={summerDateRange1} />
          <InfoIcon icon="today" header="Dni v týždni" desc={summerDays} />
          <InfoIcon
            icon="schedule"
            header="Čas tréningu"
            desc={summerSchedule1}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-12 border-b-2 pb-12">
          <InfoIcon icon="date_range" header="Dátumy" desc={summerDateRange2} />
          <InfoIcon icon="event" header="Dni v týždni" desc={summerDays} />
          <InfoIcon
            icon="schedule"
            header="Čas tréningu"
            desc={summerSchedule2}
          />
        </div>

        <div className="w-full mb-12">
          <InfoIcon icon="location_on" header="Miesto" desc={summerLocation} />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.9192070298299!2d21.269447228329586!3d48.73537760238559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0857baf87ad%3A0xb4591f084d7c5b7f!2sPol%C3%ADcia%20SR%20-%20Okresn%C3%A9%20riadite%C4%BEstvo%20PZ%20v%20Ko%C5%A1iciach!5e0!3m2!1sen!2ssk!4v1729106767531!5m2!1sen!2ssk"
          loading="lazy"
          className="w-full h-96 border border-gray-200 rounded-md shadow-sm grayscale hover:shadow-md hover:grayscale-0 transition-all duration-300"
        ></iframe>
      </div>
    </div>
  );
};

export default TrainingsSummer;
