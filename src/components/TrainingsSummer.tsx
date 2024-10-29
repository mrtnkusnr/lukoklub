import IconInfo from "./IconInfo";

const TrainingsSummer = () => {
  const summerLocation =
    "Bývalý areál Vojenskej leteckej akadémie Milana Rastislava Štefánika - vchod cez Okresné riaditeľstvo PZ v Košiciach, Rampová 7, Košice";

  const summerDateRange1 = "09. máj - 01. júl";
  const summerDateRange2 = "01. júl - 27. okt";
  const summerSchedule1 = "16:30 - 18:00";
  const summerSchedule2 = "17:00 - 18:30";
  const summerDays = "Pondelok, Streda, Piatok*";

  return (
    <div className="mt-24">
      <div className="flex flex-col text-center items-center p-8 border border-gray-200 shadow-sm ">
        <h1 className="text-5xl font-semibold mt-8 mb-14">Letná sezóna</h1>
        <div className="flex flex-row w-full justify-between pb-12 border-b-2">
          <IconInfo icon="date_range" header="Dátumy" desc={summerDateRange1} />
          <IconInfo icon="today" header="Dni v týždni" desc={summerDays} />
          <IconInfo
            icon="schedule"
            header="Čas tréningu"
            desc={summerSchedule1}
          />
        </div>

        <div className="flex flex-row w-full justify-between mt-12 pb-12 border-b-2">
          <IconInfo icon="date_range" header="Dátumy" desc={summerDateRange2} />
          <IconInfo icon="event" header="Dni v týždni" desc={summerDays} />
          <IconInfo
            icon="schedule"
            header="Čas tréningu"
            desc={summerSchedule2}
          />
        </div>

        <IconInfo icon="location_on" header="Miesto" desc={summerLocation} />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.9192070298299!2d21.269447228329586!3d48.73537760238559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0857baf87ad%3A0xb4591f084d7c5b7f!2sPol%C3%ADcia%20SR%20-%20Okresn%C3%A9%20riadite%C4%BEstvo%20PZ%20v%20Ko%C5%A1iciach!5e0!3m2!1sen!2ssk!4v1729106767531!5m2!1sen!2ssk"
          loading="lazy"
          className="border border-gray-200 rounded-md shadow-sm w-full mt-12 mb-8 grayscale hover:grayscale-0"
        ></iframe>
      </div>
    </div>
  );
};

export default TrainingsSummer;
