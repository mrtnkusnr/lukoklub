import React, { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="p-6 md:min-w-[816px] bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
      {description && <div className="text-gray-800 mb-4">{description}</div>}
      {children}
    </div>
  );
};

export default InfoCard;
