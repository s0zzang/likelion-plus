import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  bgColor = "gray",
  btnSize = "sm",
  ...rest
}) => {
  const size = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-2 px-6 text-lg",
  };
  return (
    <button
      className={`bg-${bgColor}-500 hover:bg-${bgColor}-600 ${size[btnSize]} ml-2 text-white rounded-lg`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  bgColor: PropTypes.string,
  btnSize: PropTypes.string,
};

export default Button;
