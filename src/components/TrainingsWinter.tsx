import IconInfo from "./IconInfo";

const TrainingsWinter = () => {
  const winterDateRange = "01. nov - 09. máj";
  const winterDays = "Streda";
  const winterSchedule = "16:30 - 18:00";
  const winterLocation =
    "Telocvičňa Základnej školy Kežmarská 30, Košice - Mestská časť Západ (Terasa - Luník IV)";

  return (
    <div className="mt-24">
      <div className="flex flex-col text-center items-center p-10 border border-gray-200 shadow-sm ">
        <h1 className="text-5xl font-semibold mt-6 mb-14">Zimná sezóna</h1>
        <div className="flex flex-row w-full justify-between pb-12 border-b-2">
          <IconInfo icon="date_range" header="Dátumy" desc={winterDateRange} />
          <IconInfo icon="today" header="Dni v týždni" desc={winterDays} />
          <IconInfo
            icon="schedule"
            header="Čas tréningu"
            desc={winterSchedule}
          />
        </div>

        <div className="py-12">
          <IconInfo icon="location_on" header="Miesto" desc={winterLocation} />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.9836618204077!2d21.22860265801324!3d48.71176677263977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee13b82383657%3A0x13b09063eff8cda9!2zxaBrb2xza8OpIGlocmlza28gS2XFvm1hcnNrw6EgMzA!5e0!3m2!1sen!2ssk!4v1730219554274!5m2!1sen!2ssk"
          loading="lazy"
          className="border border-gray-200 rounded-md shadow-sm w-full mb-8 grayscale hover:grayscale-0"
        ></iframe>
      </div>
    </div>
  );
};

export default TrainingsWinter;
