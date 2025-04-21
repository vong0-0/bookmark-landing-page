import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Accordion({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="my-4">
      <button
        className="group flex w-full items-center justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <span className="font-medium transition-colors duration-300 group-hover:text-red-400">
          {question}
        </span>
        <span
          className={`${
            isActive ? "rotate-180 text-red-400" : "rotate-0 text-blue-600"
          } transition-all duration-300`}
        >
          <ChevronDown />
        </span>
      </button>
      <p
        className={`${
          isActive ? "mt-4 max-h-[1000px]" : "max-h-0"
        } overflow-hidden leading-7 text-gray-400 transition-all duration-300`}
      >
        {answer}
      </p>
    </div>
  );
}
