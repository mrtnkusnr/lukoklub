import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: string; // názov material icon
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  icon,
  disabled = false,
}) => {
  const baseClass = disabled
    ? "bg-white text-gray-800 border border-gray-200 rounded-sm shadow-sm font-medium py-2 px-4 flex justify-center items-center"
    : "bg-orange-500 hover:bg-orange-600 text-white rounded-sm font-medium py-2 px-4 flex justify-center items-center group";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${className}`}
    >
      <span className={`${icon && !disabled ? "pr-1" : ""}`}>{label}</span>
      {!disabled && icon && (
        <span className="material-icons transition-transform duration-300 transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
