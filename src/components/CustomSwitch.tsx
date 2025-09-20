import React, { useState, ReactNode } from "react";

interface CustomSwitchProps {
  option1?: ReactNode;
  option2?: ReactNode;
  defaultValue?: 1 | 2;
  renderComponent?: (value: 1 | 2) => React.ComponentType;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  option1 = "Option 1",
  option2 = "Option 2",
  defaultValue = 1,
  renderComponent,
}) => {
  const [selected, setSelected] = useState<1 | 2>(defaultValue);

  const handleClick = (value: 1 | 2) => {
    setSelected(value);
  };

  const renderDynamicComponent = () => {
    if (!renderComponent) return null;
    const Component = renderComponent(selected);
    return <Component />;
  };

  return (
    <div className="flex flex-col items-center mt-6 ">
      <div className="flex w-full overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => handleClick(1)}
          className={`flex-1 py-2 text-lg font-semibold transition-all duration-200 focus:outline-hidden
            ${
              selected === 1
                ? "bg-orange-50 text-orange-500 font-semibold border border-orange-500"
                : "bg-white text-gray-800 hover:bg-gray-50 border-gray-200 border-l border-t border-b"
            }`}
        >
          {option1}
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`flex-1 py-2 text-lg font-semibold transition-all duration-200 focus:outline-hidden
            ${
              selected === 2
                ? "bg-orange-50 text-orange-500 font-semibold border border-orange-500"
                : "bg-white text-gray-800 hover:bg-gray-50 border-gray-200 border-r border-t border-b"
            }`}
        >
          {option2}
        </button>
      </div>

      {/* Render dynamic component below the switch */}
      <div className="mt-6 w-full">{renderDynamicComponent()}</div>
    </div>
  );
};

export default CustomSwitch;
