import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Logo-ByteTek.png";

const Footer = () => {
  return (
    <footer>
      <div className="img">
        <img src={Logo} alt="Logo Dona Lucidia" />
      </div>

      <div className="ass">
        <p>Desenvolvido por: </p>
        <Link className="link" to="">
          <img src={Logo2} alt="Logo ByteTek" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
