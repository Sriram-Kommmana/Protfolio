import React, { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'minimal' | 'bracket' | 'arrow';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'minimal',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = `
    roboto-mono-regular
    transition-all duration-200 ease-out
    cursor-pointer select-none
    bg-transparent
    border-none
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    minimal: `
      text-white opacity-80
      hover:opacity-100
      underline decoration-1 underline-offset-4
      hover:decoration-2
    `,
    bracket: `
      text-white opacity-80
      hover:opacity-100
      before:content-['['] after:content-[']']
      before:opacity-50 after:opacity-50
      hover:before:opacity-100 hover:after:opacity-100
    `,
    arrow: `
      text-white opacity-80
      hover:opacity-100
      relative
      after:content-['→'] after:ml-2
      hover:after:translate-x-1
      after:transition-transform after:duration-200
    `
  };

  const sizeStyles = {
    sm: '!text-lg',
    md: '!text-xl', 
    lg: '!text-2xl'
  };

  const hoverEffect = isHovered ? 'tracking-wide' : '';

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${hoverEffect}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;