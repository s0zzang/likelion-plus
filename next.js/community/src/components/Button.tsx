import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  color?: "orange" | "black" | "red";
}

export const btnSize = {
  sm: "py-1 px-2 text-sm",
  md: "py-1 px-4 text-base",
  lg: "py-2 px-6 text-lg",
};
export const btnColor = {
  orange: "bg-orange-500",
  black: "bg-gray-900",
  red: "bg-red-500",
};

const Button = ({
  children,
  type = "button",
  size = "md",
  color = "orange",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${btnSize[size]} ${btnColor[color]} text-white font-semibold ml-2 hover:bg-amber-400 rounded`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
