import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpg";
import image3 from "../images/img3.jpg";
import image4 from "../images/img4.jpg";

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: image1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: image2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: image3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: image4,
  },
];

const PostIndex = () => {
  return (
    <div className="postIndex">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to="/post/${post.id}">
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link className="link" to="/post/${post.id}">
                <button>Leia mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="menu">
        <div className="titulo">
          <h1>Filtrar por Categorias:</h1>
        </div>
        <div className="cat">
          <input type="radio" name="cat" value="divers" id="divers" />
          <label htmlFor="divers"> Diversos</label>
        </div>
        <div className="cat">
          <input type="radio" name="cat" value="educ" id="educ" />
          <label htmlFor="educ"> Educação</label>
        </div>
        <div className="cat">
          <input type="radio" name="cat" value="obras" id="obras" />
          <label htmlFor="obras"> Obras</label>
        </div>
        <div className="cat">
          <input type="radio" name="cat" value="politica" id="politica" />
          <label htmlFor="politica"> Política</label>
        </div>
        <div className="cat">
          <input type="radio" name="cat" value="saude" id="saude" />
          <label htmlFor="saude"> Saúde</label>
        </div>
        <div className="cat">
          <input type="radio" name="cat" value="security" id="security" />
          <label htmlFor="security"> Segurança</label>
        </div>
      </div>
    </div>
  );
};

export default PostIndex;
