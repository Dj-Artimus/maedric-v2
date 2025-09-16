import React from "react";
import { Check } from "lucide-react";
import { cn } from "../../utils/helpers";

const Checkbox = React.forwardRef<
  HTMLButtonElement,
  {
    className?: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
  } & Omit<React.ComponentProps<"button">, "onSelect">
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  const handleToggle = () => {
    if (onCheckedChange) {
      onCheckedChange(!checked);
    }
  };

  return (
    <button
      ref={ref}
      role="checkbox"
      aria-checked={checked}
      onClick={handleToggle}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-state={checked ? "checked" : "unchecked"}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-center text-current",
          checked ? "opacity-100" : "opacity-0"
        )}
      >
        <Check className="h-4 w-4" />
      </div>
    </button>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };