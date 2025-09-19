// src/components/ui/ReadMoreBox.tsx
import React, { useState } from "react";

interface ReadMoreBoxProps {
  children: React.ReactNode;
  readMoreColor?: string;
  readLessColor?: string;
  idx?: number;
  enableScreenSize?: string;
  disableScreenSize?: string;
}

const ReadMoreBox = ({
  children,
  textColor = "text-secondary",
  readMoreColor = "text-primary",
  readLessColor = "text-accent",
  buttonPosition = "right-0",
  idx = 0,
  enableScreenSize = "",
  disableScreenSize = "sm",
  bgButton = "bg-white",
}: ReadMoreBoxProps) => {
  const [expandedText, setExpandedText] = useState<number[]>([]);

  const toggleText = (index: number) => {
    setExpandedText((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="relative">
      <p
        className={` w-full ${textColor} ${
          expandedText.includes(idx)
            ? ""
            : "line-clamp-3 overflow-hidden text-clips"
        } relative`}
      >
        {children}
      </p>
      <span className={`block ${disableScreenSize}:hidden`}>
        {children.toString().length > 100 && !expandedText.includes(idx) && (
          <span
            className={`hover:${readLessColor} ${readMoreColor} ${bgButton} absolute ${buttonPosition} bottom-0 pl-1 pr-0 inline-block z-10 ml-1 transition-colors duration-200 font-medium cursor-pointer`}
            onClick={() => toggleText(idx)}
          >
            ...read more
          </span>
        )}
        {children.toString().length > 100 && expandedText.includes(idx) && (
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
