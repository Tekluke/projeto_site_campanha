import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/Avatar.png";

const BioHome = () => {
  return (
    <div className="bio-home">
      <div className="content-bio-home">
        <div className="titulos">
          <h3>Biografia</h3>
          <h2>Lucidia Benitah</h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos
          numquam nihil earum quo officia nobis, aperiam laudantium dolorem quas
          nulla iste quaerat rerum, et architecto illo, odit sint maiores veniam
          magnam. Temporibus animi sapiente ut eligendi? Expedita quos illo
          ipsam labore quae culpa nam incidunt accusamus necessitatibus sed id,
          iusto ex, voluptatibus et, quia amet cupiditate molestias nulla
          suscipit. Minus, maxime magnam corporis temporibus, omnis magni
          dignissimos eveniet provident voluptate sunt ad iure, numquam delectus
          repudiandae perferendis ipsam doloremque pariatur ullam architecto
          dicta odit sequi illum aspernatur? Vel nam beatae facere excepturi eum
          non earum aliquam reprehenderit sunt repellendus! Vel nam beatae
          facere excepturi eum non earum aliquam reprehenderit sunt repellendus!
          facere excepturi eum non earum aliquam reprehenderit sunt repellendus!
          facere excepturi eum non earum aliquam reprehenderit sunt repellendus!
          facere excepturi eum non earum aliquam reprehenderit sunt repellendus!
          facere excepturi eum non earum aliquam reprehenderit sunt repellendus!
        </p>

        <Link className="link" to="/biografia">
          <button to="/biografia">Continue lendo..</button>
        </Link>
      </div>

      <div className="avatar-bio">
        <img src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default BioHome;
