// src/components/NavLink.jsx
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const NavLink = ({ to, children, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <RouterLink
      to={to}
      className={`text-[16px] md:mb-0 mb-6 text-center mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color nav-link ${
        isActive ? "active" : ""
      }`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default NavLink;

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
