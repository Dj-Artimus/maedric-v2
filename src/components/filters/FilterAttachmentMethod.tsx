// src/components/filters/FilterAttachmentMethod.tsx

"use client";

import { RotateCcw } from "lucide-react"; // Only RotateCcw is needed, Check is not used in this design
import React, { useState } from "react";

interface FilterAttachmentMethodProps {
  selectedMethods: string[];
  onChange: (selected: string[]) => void;
  onReset: () => void;
}

export const FilterAttachmentMethod: React.FC<FilterAttachmentMethodProps> = ({
  selectedMethods,
  onChange,
  onReset,
}) => {
  const [isResetFilterAnimating, setIsResetFilterAnimating] = useState(false);

  const methods = [
    { id: "clip-on", label: "Clip On" },
    { id: "post-and-back", label: "Post and Back" },
  ];

  const resetFilter = () => {
    onReset();
    setIsResetFilterAnimating(true);
    setTimeout(() => setIsResetFilterAnimating(false), 1000); // Match the duration in your CSS
  };

  /**
   * MODIFIED FUNCTION: Allows multiple selections.
   * If the method is already selected, remove it.
   * If the method is not selected, add it to the list.
   */
  const toggleMethod = (id: string) => {
    if (selectedMethods.includes(id)) {
      // If already selected, remove it (unselect)
      const newSelected = selectedMethods.filter((methodId) => methodId !== id);
      onChange(newSelected);
    } else {
      // If not selected, add it (select)
      const newSelected = [...selectedMethods, id];
      onChange(newSelected);
    }
  };

  return (
    <div className="relative flex flex-col border bg-white p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        {" "}
        {/* Increased margin-bottom */}
        <h3 className="font-figtree font-medium text-primary">
          Attachment Method
        </h3>
        <button
          onClick={resetFilter}
          className="p-1 text-secondary hover:text-primary rounded"
        >
          <RotateCcw
            className={`w-4 h-4 ${
              isResetFilterAnimating ? "resetFilterAnimation" : ""
            }`}
          />
        </button>
      </div>
      {/* Options */}
      <div className="flex w-full gap-2 p-2">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => toggleMethod(method.id)}
            className={`
              flex-1 py-2 px-4 text-center font-figtree text-sm transition-colors duration-200 
              ${
                selectedMethods.includes(method.id)
                  ? "bg-accent text-white " // Gold background for selected
                  : "bg-white text-primary border" // White background, border for unselected
              }
            `}
          >
            {method.label}
          </button>
        ))}
      </div>
    </div>
  );
};
