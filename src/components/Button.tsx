
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline"; 
  size?: "sm" | "md" | "lg"; 
  disabled?: boolean;
  className?: string; 
  icon?: ReactNode; 
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  icon,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition duration-300 ease-in-out focus:outline-none";
  
  const variants = {
    primary: "bg-primary-theme hover:bg-secondary-theme text-white uppercase focus:bg-secondary-theme focus:text-primary-1 focus:border-none font-bold",
    secondary: "bg-white text-primary-theme hover:bg-secondary-theme hover:text-white uppercase leading-4 tracking-wider focus:bg-secondary-theme focus:text-white",
    outline: "bg-transparent border border-primary-theme uppercase text-primary-theme hover:bg-primary-theme hover:text-primary-1 focus:bg-secondary-theme focus:text-primary-1 focus:border-none",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabledStyles,
        className 
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
