import React, { useState, useEffect } from "react";
import Avatar from "../assets/avatar.bio.png";

const Biografia = () => {
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setCarregado(true);
  }, []);

  if (!carregado) {
    return null;
  }

  return (
    <div className="bio">
      <div className="content-bio">
        <h2>Biografia</h2>
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
          non earum aliquam reprehenderit sunt repellendus!
          <br />
          <br />
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
          non earum aliquam reprehenderit sunt repellendus!
          <br />
          <br />
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
          non earum aliquam reprehenderit sunt repellendus!
          <br />
          <br />
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
          non earum aliquam reprehenderit sunt repellendus!
          <br />
          <br />
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
          non earum aliquam reprehenderit sunt repellendus!
          <br />
          <br />
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
          non earum aliquam reprehenderit sunt repellendus!
        </p>
      </div>
      <div className="avatar-bio">
        <img src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default Biografia;
