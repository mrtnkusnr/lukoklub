interface IconInfoProps {
  icon: string;
  header: string;
  desc: string;
}

const IconInfo: React.FC<IconInfoProps> = ({ icon, header, desc }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 lg:min-w-[291px] bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <span className="material-symbols-outlined text-5xl text-orange-500 flex-shrink-0">
        {icon}
      </span>

      <div className="flex flex-col items-center sm:items-start">
        <span className="font-semibold text-lg text-gray-800">{header}</span>
        <span className="mt-1 text-gray-800 sm:text-left max-w-3xl">
          {desc}
        </span>
      </div>
    </div>
  );
};

export default IconInfo;
