/**
 * --------------------------------------------------------
 * ✏️ Author: Maedric Team
 * 📅 Created: July 2025
 *
 * 📌 Description:
 *   A versatile Button component with various styles, sizes, and states including loading.
 * --------------------------------------------------------
 */

'use client';
import React from 'react';

/**
 * ButtonProps Interface
 * 
 * @interface ButtonProps
 * @property {React.ReactNode} children - Content to be displayed inside the button
 * @property {() => void} [onClick] - Function to be called when button is clicked
 * @property {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'} [variant='primary'] - Visual style variant
 * @property {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size='md'] - Size of the button
 * @property {boolean} [disabled=false] - Whether the button is disabled
 * @property {'button' | 'submit' | 'reset'} [type='button'] - HTML button type
 * @property {string} [className=''] - Additional CSS classes
 * @property {boolean} [fullWidth=false] - Whether button should take full width
 * @property {boolean} [loading=false] - Whether to show loading state
 */
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
}

/**
 * Button Component
 * 
 * A versatile button component with various styles, sizes, and states.
 * 
 * @param {ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>} props - Button properties
 * @returns {JSX.Element} Rendered Button component
 * 
 * @example
 * // Primary button
 * <Button>Click Me</Button>
 * 
 * @example
 * // Disabled secondary button
 * <Button variant="secondary" disabled>Disabled</Button>
 * 
 * @example
 * // Loading button with full width
 * <Button loading fullWidth>Processing...</Button>
 */
const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  loading = false,
  ...props
}) => {
  // Style variants mapping
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-300',
    outline: 'border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300',
    ghost: 'text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500'
  };

  // Mobile-first responsive sizes
  const sizes = {
    xs: 'px-2 py-1 text-xs sm:px-2.5 sm:py-1.5 sm:text-xs',
    sm: 'px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm md:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base md:text-base',
    lg: 'px-4 py-2.5 text-base sm:px-5 sm:py-3 sm:text-lg md:text-lg lg:text-xl',
    xl: 'px-5 py-3 text-lg sm:px-6 sm:py-4 sm:text-xl md:text-xl lg:text-2xl'
  };

  // Responsive border radius
  const responsiveRadius = 'rounded sm:rounded-md md:rounded-lg';

  // Responsive focus ring
  const responsiveFocus = 'focus:ring-2 sm:focus:ring-2 md:focus:ring-4';

  /**
   * LoadingSpinner Component
   * 
   * Renders an animated spinner for loading state
   * 
   * @returns {JSX.Element} SVG spinner animation
   */
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={`
        ${responsiveRadius}
        transition-all 
        duration-200 
        ease-in-out
        focus:outline-none 
        ${responsiveFocus}
        focus:ring-opacity-50
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'} 
        ${loading ? 'relative' : ''}
        font-medium
        inline-flex
        items-center
        justify-center
        min-h-[44px] sm:min-h-[48px]
        touch-manipulation
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'opacity-75' : ''}>{children}</span>
    </button>
  );
};

export default Button;