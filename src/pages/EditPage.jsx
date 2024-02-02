import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Titulo" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Status:</b> Rascunho
          </span>
          <span>
            <b>Visibilidade: </b> Público
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className="file" htmlFor="file">
            Carregar Imagem
          </label>
          <div className="buttons">
            <button>Salvar Rascunho</button>
            <button>Atualizar</button>
          </div>
        </div>
        
        <div className="item">
          <h1>Categoria</h1>
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
    </div>
  );
};

export default Write;
