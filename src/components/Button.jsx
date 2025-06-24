// src/components/Button.jsx

import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children }) => {
  return (
    <button
      className={`relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white border-t border-gray-200 rounded-full sm:mt-1 fold-bold lg:mx-0 bg-primary hover:opacity-40`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Button;
