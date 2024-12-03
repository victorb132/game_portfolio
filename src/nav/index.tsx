import "./nav.css";

import { Link, useLocation } from "react-router-dom";

import React from "react";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import envelope from "../assets/envelope.png";
import stack from "../assets/stack.png";

const Nav: React.FC = () => {
  const location = useLocation();

  const getNavPositionClass = (): string => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = (): string => {
    switch (location.pathname) {
      case "/":
        return "Sobre mim";
      case "/skills":
        return "Skills";
      case "/projects":
        return "Projetos";
      case "/contact":
        return "Contato";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass: string): boolean => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (
    to: string,
    imgSrc: string,
    altText: string,
    navClass: string
  ): JSX.Element => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink(
        "/",
        astronautHelmet,
        "astronaut helmet icon",
        "nav-about"
      )}
      {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
      {renderNavLink("/contact", envelope, "envelope icon", "nav-contact")}
    </nav>
  );
};

export default Nav;
