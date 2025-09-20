import { useState } from "react";

interface ReadMoreBoxProps {
  text: string[];
  readMoreColor?: string;
  readLessColor?: string;
  idx?: number;
  enableScreenSize?: string;
  disableScreenSize?: string;
  textColor?: string;
  buttonPosition?: "left-0" | "right-0" | "center";
  bgButton?: string;
}

const ReadMoreBox = ({
  text,
  textColor = "text-secondary",
  readMoreColor = "text-primary",
  readLessColor = "text-accent",
  buttonPosition = "right-0",
  idx = 0,
  disableScreenSize = "sm",
  bgButton = "bg-white",
}: ReadMoreBoxProps) => {
  const [expandedText, setExpandedText] = useState<number[]>([]);

  const toggleText = (index: number) => {
    setExpandedText((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Flatten text array to measure length
  const textContent = text.join(" ");

  return (
    <div className="relative">
      <div
        className={`w-full ${textColor} ${
          expandedText.includes(idx)
            ? ""
            : "line-clamp-3 overflow-hidden text-ellipsis"
        } relative space-y-3`}
      >
        {text.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      <span className={`block ${disableScreenSize}:hidden`}>
        {textContent.length > 100 && !expandedText.includes(idx) && (
          <span
            className={`hover:${readLessColor} ${readMoreColor} ${bgButton} absolute ${buttonPosition} bottom-0 pl-1 pr-0 inline-block z-10 ml-1 transition-colors duration-200 font-medium cursor-pointer`}
            onClick={() => toggleText(idx)}
          >
            ...read more
          </span>
        )}
        {textContent.length > 100 && expandedText.includes(idx) && (
          <span
            className={`block ${readLessColor} hover:${readMoreColor} transition-colors duration-200 font-medium cursor-pointer text-right mt-2`}
            onClick={() => toggleText(idx)}
          >
            read less
          </span>
        )}
      </span>
    </div>
  );
};

export default ReadMoreBox;
