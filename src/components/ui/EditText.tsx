"use client";
import React from "react";

type VariantType = 'outlined' | 'filled' | 'standard';

export interface EditTextProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  variant?: VariantType;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  autoFocus?: boolean;
  readOnly?: boolean;
}

const EditText: React.FC<
  EditTextProps & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
> = ({
  value,
  onValueChange,
  placeholder = "",
  type = "text",
  disabled = false,
  required = false,
  className = "",
  label,
  error,
  helperText,
  variant = "outlined",
  fullWidth = false,
  multiline = false,
  rows = 3,
  maxLength,
  autoFocus = false,
  readOnly = false,
  ...props
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onValueChange) {
      onValueChange(e.target.value);
    }
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const variants: Record<VariantType, string> = {
    outlined:
      "border border-black/60 bg-accent focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
    filled:
      "border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500",
    standard:
      "border-0 border-b border-gray-300 bg-transparent focus:border-blue-500 rounded-none",
  };

  const baseClasses = `
    transition-all
    duration-200
    ease-in-out
    focus:outline-none
    ${variants[variant]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : ""}
    ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
    ${variant !== "standard" ? "" : ""}
    font-figtree
    placeholder:text-gray-400
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const InputComponent = multiline ? "textarea" : "input";

  return (
    <div className={`${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <InputComponent
          {...(multiline ? {} : { type })}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          autoFocus={autoFocus}
          readOnly={readOnly}
          {...(multiline ? { rows } : {})}
          className={baseClasses}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error
              ? `${props.id || "input"}-error`
              : helperText
                ? `${props.id || "input"}-helper`
                : undefined
          }
          {...props}
        />

        {maxLength && (
          <div className="absolute right-2 top-2 text-xs text-gray-400">
            {value?.length || 0}/{maxLength}
          </div>
        )}
      </div>

      {error && (
        <p
          id={`${props.id || "input"}-error`}
          className="mt-1 text-xs sm:text-sm text-red-600"
        >
          {error}
        </p>
      )}

      {helperText && !error && (
        <p
          id={`${props.id || "input"}-helper`}
          className="mt-1 text-xs sm:text-sm text-gray-500"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default EditText;
