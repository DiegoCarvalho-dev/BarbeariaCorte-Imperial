import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "uppercase tracking-wider font-bold text-xs py-2 px-6 transition-all duration-300 rounded-sm";

  const variants = {
    primary:
      "bg-mafia-red text-white hover:bg-red-700 hover:shadow-[0_0_10px_rgba(227,28,37,0.5)]",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    text: "text-white hover:text-mafia-red",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
