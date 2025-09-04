/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 12-08-2025 - 04-09-2025
 *
 * 📌 Description:
 *   A customizable text input component that supports various styles, validation states,
 *   and input types including multiline text areas.
 * --------------------------------------------------------
 */

"use client";
import React from "react";

/**
 * VariantType
 * 
 * Defines the visual style variants available for the EditText component.
 * @type {('outlined' | 'filled' | 'standard')}
 */
type VariantType = 'outlined' | 'filled' | 'standard';

/**
 * EditTextProps Interface
 * 
 * @interface EditTextProps
 * @property {string} value - Current value of the input
 * @property {(value: string) => void} onValueChange - Handler function for value changes
 * @property {string} [placeholder] - Placeholder text when input is empty
 * @property {string} [type] - HTML input type (e.g., 'text', 'email', 'password')
 * @property {boolean} [disabled] - Whether the input is disabled
 * @property {boolean} [required] - Whether the input is required
 * @property {string} [className] - Additional CSS classes
 * @property {string} [label] - Label text for the input
 * @property {boolean} [error] - Whether the input has an error state
 * @property {string} [helperText] - Helper or error text to display below input
 * @property {VariantType} [variant] - Visual style variant
 * @property {boolean} [fullWidth] - Whether input should take full width
 * @property {boolean} [multiline] - Whether input should be a multiline textarea
 * @property {number} [rows] - Number of rows for multiline textarea
 * @property {number} [maxLength] - Maximum character length
 * @property {boolean} [autoFocus] - Whether input should auto-focus
 * @property {boolean} [readOnly] - Whether input is read-only
 */
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

/**
 * EditText Component
 * 
 * A customizable text input component that supports various styles, validation states,
 * and input types including multiline text areas.
 * 
 * @param {EditTextProps & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>} props - Component props
 * @returns {JSX.Element} Rendered EditText component
 * 
 * @example
 * // Basic usage
 * <EditText value={email} onValueChange={setEmail} placeholder="Enter email" />
 * 
 * @example
 * // With validation
 * <EditText 
 *   value={email} 
 *   onValueChange={setEmail} 
 *   error={!isValidEmail} 
 *   helperText="Please enter a valid email"
 * />
 */
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
