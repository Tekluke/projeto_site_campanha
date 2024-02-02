import React from "react";
import Capa from "../images/Capa.jpg";
import BioHome from "../components/BioHome";
import PostHome from "../components/PostHome";
import GridImages from "../components/GridImages";
import Contato from "../components/Contato";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src={Capa} alt="" />
      </div>

      <div id="biografiaHome">
        <BioHome />
      </div>

      <div className="scroll">
        <div id="noticiasHome" className="wall">
          <h2>
            Notícias <br />
            Lucidia Benitah
          </h2>
          <p>Acompanhe as últimas notícias </p>
        </div>
      </div>

      <div>
        <PostHome />
      </div>

      <div className="scroll">
        <div id="galeriaHome" className="wall">
          <h2>
            Galeria <br />
            de Imagens
          </h2>
        </div>
      </div>

      <div className="galeria">
        <GridImages />
      </div>

      <div className="scroll">
        <div id="contatoHome" className="wall">
          <h2>
            Redes Sociais <br />& NewsLetter
          </h2>
          <p>Se inscreva no meu NewsLetter!</p>
        </div>
      </div>

      <div>
        <Contato />
      </div>
    </div>
  );
};

export default Home;
