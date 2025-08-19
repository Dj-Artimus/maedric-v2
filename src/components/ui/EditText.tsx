"use client";
import React, { useState } from "react";

interface EditTextProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  disabled?: boolean;
  required?: boolean;
  className?: string;
  label?: string;
  error?: string;
  helperText?: string;
  size?: "sm" | "md" | "lg";
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  autoFocus?: boolean;
  readOnly?: boolean;
}

const EditText: React.FC<
  EditTextProps &
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  required = false,
  className = "",
  label,
  error,
  helperText,
  size = "md",
  variant = "outlined",
  fullWidth = false,
  multiline = false,
  rows = 3,
  maxLength,
  autoFocus = false,
  readOnly = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const variants = {
    outlined:
      "border border-black/60 bg-accent focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
    filled:
      "border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500",
    standard:
      "border-0 border-b border-gray-300 bg-transparent focus:border-blue-500 rounded-none",
  };

  const sizes = {
    sm: "px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm",
    md: "text-sm px-4 py-3 sm:text-base",
    lg: "px-4 py-3 text-base sm:text-lg",
  };

  const baseClasses = `
    transition-all
    duration-200
    ease-in-out
    focus:outline-none
    ${variants[variant]}
    ${sizes[size]}
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
