import { useState, useEffect } from "react";
import Link from "../components/Link";
import NavLink from "../components/NavLink";
import { Link as LogoLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 z-50 w-full h-24 py-4 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
      id="headerMain"
    >
      <div
        className="container flex items-center justify-between max-w-6xl px-8 mx-auto lg:justify-between xl:px-0 gap-6"
        style={{ height: "80px" }}
      >
        <LogoLink
          to="/"
          className="relative flex items-center inline-block h-full leading-none"
        >
          <img
            src="/logo.webp"
            alt="logo"
            style={{ height: "80px" }}
            className="logo-img"
          />
        </LogoLink>

        <nav
          id="nav"
          className={`fixed top-0 right-0 z-50 flex flex-col items-center justify-start w-2/3 h-full pt-16 text-sm text-gray-800 bg-white border-l border-gray-200 transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:relative md:flex-row md:h-24 md:w-auto md:bg-transparent md:border-none md:pt-0 md:translate-x-0`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/biller-partners">Biller Partners</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <div className="flex flex-col w-full font-medium border-gray-200 md:hidden">
            <Link to="/under-construction">Register Now</Link>
          </div>
        </nav>

        <div className="hidden md:flex">
          <Link to="/under-construction">Register Now</Link>
        </div>

        <div
          id="nav-mobile-btn"
          className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10"
          onClick={toggleMobileMenu}
        >
          <span
            className={`block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""
            }`}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
