const SectionInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mt-24">
      <div className="flex flex-col text-center w-96">
        <span className="material-symbols-outlined text-6xl pb-4">
          demography
        </span>
        <span className="text-xl font-semibold pb-4">Pre nových členov</span>
        <span className="text-lg">
          Pre nových členov a začiatočníkov máme pripravený 3-mesačný základný
          kurz
        </span>
      </div>

      <div className="flex flex-col text-center max-w-screen-sm	w-96">
        <span className="material-symbols-outlined text-6xl pb-4">target</span>
        <span className="text-xl font-semibold  pb-4">Tréningy</span>
        <span className="text-lg">
          Súčasťou tréningového programu sú celoročné tréningy - letné vonku a
          zimné v telocvični
        </span>
      </div>

      <div className="flex flex-col text-center max-w-screen-sm	w-96">
        <span className="material-symbols-outlined text-6xl pb-4">group</span>
        <span className="text-xl font-semibold pb-4">Komunita</span>
        <span className="text-lg">
          Skvelá skupina súťaživých ľudí, ktorí nikdy nesklamú a neváhajú pomôcť
        </span>
      </div>
    </div>
  );
};

export default SectionInfo;
