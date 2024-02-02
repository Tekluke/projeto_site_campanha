import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Criar nova conta</h1>
      <form className="form-login">
        <input required type="text" placeholder="Nome de Usuário" />
        <input required type="email" placeholder="E-mail" />
        <input required type="password" placeholder="Senha" />
        <input required type="password" placeholder="Confirmar Senha" />
        <button>Registrar</button>
        <p>erro!</p>
        <span>
          Possuí uma conta?
          <Link to="/login" className="link">
            Faça Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
