import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: Props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="lg:max-w-[1019px] lg:min-w-[1019px] mb-6 border border-gray-200 rounded-md shadow-md max-w-">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full p-4"
      >
        <span className="text-left font-medium">{question}</span>
        <svg
          className="fill-orange-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-800 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pb-4 pr-4 pl-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mr-6">
          <span className="font-medium">Odpoveď: </span>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
