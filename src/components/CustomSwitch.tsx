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
    <div className="text-center">
      <div className="rounded-sm text-lg">
        <button
          onClick={() => handleClick(1)}
          className={`
            transition-colors
            duration-200
            py-2 px-4 
            rounded-l-sm
            ${
              selected === 1
                ? "bg-orange-50 font-semibold  text-orange-500 border border-orange-500"
                : "bg-white text-slate-600 border-l border-t border-b border-gray-200"
            }
          `}
        >
          {option1}
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`
            transition-colors
            duration-200
            py-2 px-4 
            rounded-r-sm
            ${
              selected === 2
                ? "bg-orange-50 font-semibold  text-orange-500 border border-orange-500"
                : "bg-white text-slate-600 border-r border-t border-b border-gray-200"
            }
          `}
        >
          {option2}
        </button>
      </div>
      {renderDynamicComponent()}
    </div>
  );
};

export default CustomSwitch;
