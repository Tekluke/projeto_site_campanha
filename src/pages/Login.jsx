import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>

      <form className="form-login">
        <input required type="text" placeholder="Nome de Usuário" />
        <input required type="password" placeholder="Senha" />
        <button>Login</button>
        <p>erro!</p>
        <span>
          Não tem uma conta?
          <Link to="/register" className="link">
            Registre-se
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
