function Button({
  children,
  type = "button",
  bgColor = "orange",
  size = "md",
  ...rest
}) {
  let btnColor = {
    gray: `bg-gray-300`,
    black: `bg-gray-900`,
    orange: "bg-orange-400",
    red: "bg-red-500",
  };
  let btnSize = {
    sm: "py-1 px-2 text-sm",
    md: "py-1 px-4 text-base",
    lg: "py-2 px-6 text-lg",
  };

  return (
    <button
      type={type}
      className={`${btnColor[bgColor]} ${btnSize[size]} text-white font-semibold ml-2 text-base hover:bg-amber-300 rounded`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
