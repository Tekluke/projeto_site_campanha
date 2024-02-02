import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faWhatsapp,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (!name) {
      alert("O campo 'nome' é obrigatório.");
      return;
    }

    if (!email) {
      alert("O campo 'e-mail' é obrigatório.");
      return;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      alert("O campo 'e-mail' deve conter um endereço de e-mail válido.");
      return;
    }

    if (!message) {
      alert("O campo 'mensagem' é obrigatório.");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_mrbxqzp",
        "template_0wgxp3p",
        templateParams,
        "yVehr9eubC9xaAEOd"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          alert("Cadastrado com Sucesso");
        },
        (err) => {
          console.log("ERRO: ", err);
          alert("Erro ao enviar o e-mail.");
        }
      );
  }

  return (
    <div className="contato">
      <div className="redes-sociais">
        <div className="box">
          <Link className="link" to="https://www.facebook.com/">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </Link>
        </div>
        <div className="box">
          <Link className="link" to="https://www.instagram.com/">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </Link>
        </div>
        <div className="box">
          <Link className="link" to="">
            <FontAwesomeIcon className="icon" icon={faWhatsapp} />
          </Link>
        </div>
        <div className="box">
          <Link className="link" to="/">
            <FontAwesomeIcon className="icon" icon={faTelegram} />
          </Link>
        </div>
        <div className="box">
          <Link className="link" to="https://twitter.com/">
            <FontAwesomeIcon className="icon" icon={faXTwitter} />
          </Link>
        </div>
        <div className="box">
          <Link className="link" to="/">
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </Link>
        </div>
      </div>

      <div className="newsletter">
        <h1>Receba Novidades!</h1>
        <p>Cadastre-se e receba as últimas notícias sobre Lucidia Benitah:</p>
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="textarea"
            placeholder="Nos mande uma mensagem!"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Contato;
