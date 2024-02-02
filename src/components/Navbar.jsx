import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-items">
          <div className="logo">
            <Link className="link" to="/">
              <img src={Logo} alt="Logo Dona Lucída" />
            </Link>
          </div>
          <div className={`links ${isOpen ? "open" : ""}`}>
            <Link to="/" onClick={toggleMenu} className="link">
              {pathname === "/biografia" ||
              pathname === "/edit" ||
              pathname === "/noticias" ||
              pathname.startsWith("/post") ? (
                <h6>Home</h6>
              ) : null}
            </Link>

            {pathname === "/" ? (
              <a className="link" href="#biografiaHome" onClick={toggleMenu}>
                <h6>Biografia</h6>
              </a>
            ) : null}

            {pathname.startsWith("/post") ||
            pathname === "/edit" ||
            pathname === "/noticias" ? (
              <a className="link" href="/biografia" onClick={toggleMenu}>
                <h6>Biografia</h6>
              </a>
            ) : null}

            {pathname === "/" ? (
              <a className="link" href="#noticiasHome" onClick={toggleMenu}>
                <h6>Notícias</h6>
              </a>
            ) : null}

            {pathname === "/biografia" || pathname === "/edit" ? (
              <a className="link" href="/noticias" onClick={toggleMenu}>
                <h6>Notícias</h6>
              </a>
            ) : null}

            {pathname.startsWith("/post") ? (
              <a className="link" href="/noticias" onClick={toggleMenu}>
                <h6>Todas as notícias</h6>
              </a>
            ) : null}

            {pathname === "/" ? (
              <a className="link" href="#galeriaHome" onClick={toggleMenu}>
                <h6>Galeria</h6>
              </a>
            ) : null}

            {pathname === "/" ? (
              <a className="link" href="#contatoHome" onClick={toggleMenu}>
                <h6>Contato</h6>
              </a>
            ) : null}

            <div className="close-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </div>

          {pathname === "/noticias" ? (
            <div className="search-box">
              <a className="search-btn" href="#">
                <FontAwesomeIcon className="icon" icon={faSearch} />
              </a>
              <input className="search-txt" type="text" placeholder="Buscar" />
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
