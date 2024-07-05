import PropTypes from "prop-types";
import Button from "./Button";

const Submit = ({ children, ...rest }) => {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  );
};

Submit.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Submit;
