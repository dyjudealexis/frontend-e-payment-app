// src/components/Link.js
import { Link as RouterLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Link = ({ to, children, ...props }) => {
  return (
    <RouterLink
      to={to}
      className={`relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white border-t border-gray-200 rounded-full sm:mt-1 fold-bold lg:mx-0 bg-primary hover:opacity-40 text-center`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

