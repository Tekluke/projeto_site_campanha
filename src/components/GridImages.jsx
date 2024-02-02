import React from "react";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpg";
import image3 from "../images/img3.jpg";
import image4 from "../images/img4.jpg";
import image5 from "../images/img5.png";
import image6 from "../images/img6.jpg";

const GridImages = () => {
  return (
    <div className="galeria-grid">
      <figure className="grid item01">
        <img src={image1} alt="Imagens" className="imgGrid" />
      </figure>

      <figure className="grid item02">
        <img src={image2} alt="Imagens" className="imgGrid " />
      </figure>

      <figure className="grid item03">
        <img src={image3} alt="Imagens" className="imgGrid" />
      </figure>

      <figure className="grid item04">
        <img src={image4} alt="Imagens" className="imgGrid " />
      </figure>

      <figure className="grid item05">
        <img src={image5} alt="Imagens" className="imgGrid" />
      </figure>

      <figure className="grid item06">
        <img src={image6} alt="Imagens" className="imgGrid" />
      </figure>
    </div>
  );
};

export default GridImages;
