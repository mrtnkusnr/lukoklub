import InfoFeature from "./InfoFeature";

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mt-24">
      <InfoFeature
        icon="demography"
        title="Pre nových členov"
        description="Pre nových členov a začiatočníkov máme pripravený 3-mesačný základný kurz"
      />

      <InfoFeature
        icon="target"
        title="Tréningy"
        description="Súčasťou tréningového programu sú celoročné tréningy - letné vonku a zimné v telocvični"
      />

      <InfoFeature
        icon="group"
        title="Komunita"
        description="Skvelá skupina súťaživých ľudí, ktorí nikdy nesklamú a neváhajú pomôcť"
      />
    </div>
  );
};

export default InfoSection;
