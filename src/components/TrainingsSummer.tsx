const TrainingsSummer = () => {
  const summerLocation =
    "Bývalý areál Vojenskej leteckej akadémie generála Milana Rastislava Štefánika, Rampová 7, Košice";

  const summerDateRange = "9. máj - 1. júl";
  const summerSchedule = "16:30 - 18:00";
  const summerDays = "Pondelok, Streda, Piatok*";

  return (
    <div className="p-6 mt-24">
      <div className="flex flex-col text-center items-center border border-gray-200 w-[36rem] shadow-sm">
        <h1 className="text-5xl font-semibold my-8">Letná sezóna</h1>

        <div className="flex flex-col gap-6 sm:gap-2 my-8">
          <div className="flex flex-col items-center sm:items-start sm:flex-row">
            <div className="flex items-center">
              <span className="material-symbols-outlined">date_range</span>
              <span className="px-2 font-semibold">Dátumy:</span>
            </div>
            <span className="sm:text-left"> {summerDateRange}</span>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:flex-row">
            <div className="flex items-center">
              <span className="material-symbols-outlined">schedule</span>
              <span className="px-2 font-semibold">Čas:</span>
            </div>
            <span className="sm:text-left"> {summerSchedule}</span>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:flex-row">
            <div className="flex items-center">
              <span className="material-symbols-outlined">target</span>
              <span className="px-2 font-semibold">Dni v týždni:</span>
            </div>
            <span className="sm:text-left"> {summerDays}</span>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:flex-row">
            <div className="flex items-center">
              <span className="material-symbols-outlined">location_on</span>
              <span className="px-2 font-semibold">Miesto:</span>
            </div>
            <span className="sm:text-left"> {summerLocation}</span>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.9192070298299!2d21.269447228329586!3d48.73537760238559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0857baf87ad%3A0xb4591f084d7c5b7f!2sPol%C3%ADcia%20SR%20-%20Okresn%C3%A9%20riadite%C4%BEstvo%20PZ%20v%20Ko%C5%A1iciach!5e0!3m2!1sen!2ssk!4v1729106767531!5m2!1sen!2ssk"
          loading="lazy"
          className="border border-gray-200 rounded-md shadow-sm w-96 mt-6"
        ></iframe>
      </div>
    </div>
  );
};

export default TrainingsSummer;
