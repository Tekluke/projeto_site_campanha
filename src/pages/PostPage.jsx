import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import image1 from "../images/img1.jpg";
import image4 from "../images/img4.jpg";
import Menu from "../components/MenuPost";

const Single = () => {
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setCarregado(true);
  }, []);

  if (!carregado) {
    return null;
  }

  return (
    <div className="single">
      <div className="content">
        <img src={image4} alt="" />
        <div className="user">
          <img src={image1} alt="" />
          <div className="info">
            <span>ADMIN</span>
            <p>Postado há 2 dias</p>
          </div>
          <div className="edit">
            <Link to="/edit?edit=2">
              <FontAwesomeIcon className="icon" icon={faPenToSquare} />
            </Link>
          </div>
          <div className="delete">
            <Link to="/write?delete=2">
              <FontAwesomeIcon className="icon" icon={faTrashCan} />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          libero repellendus esse. Dolorum veritatis quia laudantium
          voluptatibus architecto eaque numquam reiciendis, dignissimos,
          assumenda itaque inventore, esse autem sunt maxime tempore! Totam,
          exercitationem aliquam! Excepturi eaque officiis soluta modi in vitae
          ipsum doloribus laboriosam, porro quae nisi hic impedit, quasi
          repellat quod facere dolorem esse reprehenderit dolore fugit? Laborum,
          culpa doloribus. Eius, hic, facilis rem tempore quibusdam nemo unde
          eligendi quas provident distinctio delectus autem cumque, sit corporis
          enim? Hic, quasi dolores pariatur eum alias quod libero veniam. Enim,
          asperiores modi. Nesciunt enim maiores earum tempora, doloremque quo
          vitae ea necessitatibus distinctio harum porro deserunt officiis
          voluptate quas, similique assumenda? Necessitatibus fuga nisi cumque
          illo, reprehenderit eligendi maxime provident minima sint. Et tempore
          <br /> <br />
          nesciunt quos explicabo sit repellendus ipsum ad molestias magni
          aliquid molestiae nobis ea incidunt repudiandae voluptate voluptatibus
          obcaecati, officiis deleniti asperiores sapiente. Ullam quos quia
          itaque corporis officia. Consequatur at officia neque corrupti error
          laborum est corporis quibusdam harum, repellendus deserunt
          exercitationem sapiente eos. Voluptate recusandae corporis, aperiam
          harum vero magnam assumenda alias veniam animi molestias esse facere.
          <br /> <br />
          Dolorum distinctio dolore impedit architecto hic? Molestiae quia
          architecto nemo ullam illo. Explicabo, optio repellat? Sequi beatae
          quia corrupti rem, ut dolore dicta. Magni fugiat, nostrum voluptatibus
          dolorum alias culpa. Tempore quod, expedita rem dolor tempora enim est
          deleniti beatae, fugiat libero nam voluptate magnam pariatur! Quia
          nihil ipsa, velit in quaerat ratione praesentium dolor facere
          distinctio, minus asperiores voluptatum! Debitis suscipit unde quae
          obcaecati minus at doloribus beatae cumque, vel veritatis
          necessitatibus consequatur doloremque distinctio pariatur amet
          voluptate aliquid. Commodi recusandae odio cupiditate ipsum, neque eum
          eveniet ut illo. Quos nulla hic modi eveniet, facilis ducimus
          perspiciatis dolores adipisci culpa officiis labore eius sed
          exercitationem, inventore corporis repudiandae officia, enim
          temporibus natus voluptatibus rerum molestias architecto porro ipsum
          doloribus laboriosam, porro quae nisi hic impedit, quasi repellat quod
          facere dolorem esse reprehenderit dolore fugit? Laborum,
          <br /> <br />
          culpa doloribus. Eius, hic, facilis rem tempore quibusdam nemo unde
          eligendi quas provident distinctio delectus autem cumque, sit corporis
          enim? Hic, quasi dolores pariatur eum alias quod libero veniam. Enim,
          asperiores modi. Nesciunt enim maiores earum tempora, doloremque quo
          vitae ea necessitatibus distinctio harum porro deserunt officiis
          voluptate quas, similique assumenda? Necessitatibus fuga nisi cumque
          illo, reprehenderit eligendi maxime provident minima sint. Et tempore
          nesciunt quos explicabo sit repellendus ipsum ad molestias magni
          aliquid molestiae nobis ea incidunt repudiandae voluptate voluptatibus
          <br /> <br />
          obcaecati, officiis deleniti asperiores sapiente. Ullam quos quia
          itaque corporis officia. Consequatur at officia neque corrupti error
          laborum est corporis quibusdam harum, repellendus deserunt
          exercitationem sapiente eos. Voluptate recusandae corporis, aperiam
          harum vero magnam assumenda alias veniam animi molestias esse facere.
          Dolorum distinctio dolore impedit architecto hic? Molestiae quia
          architecto nemo ullam illo. Explicabo, optio repellat? Sequi beatae
          quia corrupti rem, ut dolore dicta. Magni fugiat, nostrum voluptatibus
          dolorum alias culpa. Tempore quod, expedita rem dolor t
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
