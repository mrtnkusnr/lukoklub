interface IconInfoProps {
  icon: string;
  header: string;
  desc: string;
}

const IconInfo: React.FC<IconInfoProps> = ({ icon, header, desc }) => {
  return (
    <div className="flex sm:flex-row gap-3 items-center">
      <span className="material-symbols-outlined text-5xl">{icon}</span>
      <div className="flex flex-col items-start">
        <span className="font-semibold text-lg">{header}</span>
        <span className="sm:text-left  max-w-xl">{desc}</span>
      </div>
    </div>
  );
};

export default IconInfo;
