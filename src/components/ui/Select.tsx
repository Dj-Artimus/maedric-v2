import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../../utils/helpers";

interface SelectContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  onValueChange?: (value: string) => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelect must be used within a Select provider");
  }
  return context;
};

const Select = ({
  children,
  value,
  onValueChange,
}: {
  children: React.ReactNode;
  value: string;
  onValueChange?: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const contextValue = {
    isOpen,
    setIsOpen,
    selectedValue,
    setSelectedValue,
    onValueChange,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOpen, setIsOpen } = useSelect();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <button
      ref={triggerRef}
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
};

const SelectValue = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const SelectContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSelect();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md">
      {children}
    </div>
  );
};

const SelectItem = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  const { selectedValue, setSelectedValue, setIsOpen, onValueChange } =
    useSelect();

  const handleSelect = () => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div
      onClick={handleSelect}
      className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground"
    >
      {selectedValue === value && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Check className="h-4 w-4" />
        </span>
      )}
      {children}
    </div>
  );
};

const SelectGroup = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
const SelectLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="py-1.5 pl-8 pr-2 text-sm font-semibold">{children}</div>
);
const SelectSeparator = () => <div className="-mx-1 my-1 h-px bg-muted" />;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};