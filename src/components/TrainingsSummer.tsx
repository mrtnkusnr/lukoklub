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
          <div className="flex sm:flex-row gap-3 items-center">
            <span className="material-symbols-outlined text-5xl">
              date_range
            </span>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Dátumy:</span>
              <span className="sm:text-left"> {summerDateRange1}</span>
            </div>
          </div>
          <div className="flex sm:flex-row gap-3 items-center">
            <span className="material-symbols-outlined text-5xl">today</span>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Dni v týždni:</span>
              <span className="sm:text-left"> {summerDays}</span>
            </div>
          </div>
          <div className="flex sm:flex-row gap-3 items-center">
            <span className="material-symbols-outlined text-5xl">schedule</span>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Čas tréningu:</span>
              <span className="sm:text-left"> {summerSchedule1}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between mt-12 pb-12 border-b-2">
          <div className="flex sm:flex-row gap-3 items-center">
            <span className="material-symbols-outlined text-5xl">
              date_range
            </span>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Dátumy:</span>
              <span className="sm:text-left"> {summerDateRange2}</span>
            </div>
          </div>
          <div className="flex sm:flex-row gap-3 items-center">
            <span className="material-symbols-outlined text-5xl">event</span>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Dni v týždni:</span>
              <span className="sm:text-left"> {summerDays}</span>
            </div>
          </div>
          <div className="flex sm:flex-row gap-3 items-center">
            <span className="material-symbols-outlined text-5xl">schedule</span>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Čas tréningu:</span>
              <span className="sm:text-left"> {summerSchedule2}</span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row gap-3 mt-12 items-center">
          <span className="material-symbols-outlined text-5xl">
            location_on
          </span>
          <div className="flex flex-col items-start">
            <span className="font-semibold text-lg">Miesto:</span>
            <span className="sm:text-left max-w-xl"> {summerLocation}</span>
          </div>
        </div>
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
