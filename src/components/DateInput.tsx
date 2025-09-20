import { useState } from "react";

interface Props {
  htmlFor: string;
  label: string;
  id: string;
  type: string;
  className?: string;
}

const DateInput = ({ htmlFor, label, id, type }: Props) => {
  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={date}
        className="border rounded-sm w-full py-2 px-3 leading-tight focus:border-orange-500 focus:ring-0 focus:outline-none"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateInput;
