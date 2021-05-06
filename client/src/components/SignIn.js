import '../css/Login.css';
import { useState } from "react";
import Axios from "axios";
import App from '../App';
import { render } from "react-dom";
import * as Constants from '../constants/constants'


function SignIn({ setToken }) {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const validateUser = () => {
    Axios.get(Constants.URL_SERVER_API + "validateUser", {
      params: {
        user: user,
        password: password
      }
    }).then((response) => {
      console.log(response);
      localStorage.setItem('tokenSession', user);
      render(<App />, document.getElementById("root"));
    });
  }

  return (
    <div>
      <div className="sidenav background-color-tigo">
        <div className="login-main-text">
          <h4>Project 2021</h4>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-main">
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" className="form-control"
                onChange={(event) => {
                  setUser(event.target.value);
                }} />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" onChange={(event) => {
                setPassword(event.target.value);
              }} />
            </div>
            <button className="btn btn-primary background-color-tigo" onClick={validateUser}>Iniciar Sesion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;