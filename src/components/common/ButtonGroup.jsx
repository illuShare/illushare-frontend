import React from "react";
import PropTypes from "prop-types";

const ButtonGroup = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonGroup;
