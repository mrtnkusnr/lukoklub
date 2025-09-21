interface InfoFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const InfoFeature: React.FC<InfoFeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col text-center w-96">
      <span className="material-symbols-outlined text-6xl pb-4">{icon}</span>
      <span className="text-xl font-semibold pb-4">{title}</span>
      <span className="text-lg">{description}</span>
    </div>
  );
};

export default InfoFeature;
