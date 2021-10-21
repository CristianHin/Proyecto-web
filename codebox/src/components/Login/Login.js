import React, { useContext, useEffect } from 'react';
import AuthContext from "../../context/auth/AuthContext";
import GoogleLogin from 'react-google-login';
import logo from './../Img/Codebox.jpg';
import axios from 'axios';
import "./Login.css";

const Login = (props) => {

  const authsContext = useContext(AuthContext);
  const { authenticated, startSession } = authsContext;

  useEffect(() => {
    if (authenticated) {
      props.history.push('/ventas');
    }
}, [authenticated, props.history]);
  
  const RespuestaGoogle = (respuesta) =>{
    axios({
      method: "POST",
      url: "https://code-box-api.herokuapp.com/api/googlelogin",
      data: { tokenId: respuesta.tokenId }
    }).then(res => {
      startSession(res);
    });
  };

  return (
    <section className="login-container">
      <div className="login">
        <img src={logo} alt=""></img>
        
        <GoogleLogin
          clientId="205955155856-abm0lv2scjct0mpql8vlq4m6l90n5k66.apps.googleusercontent.com"
          buttonText="Acceder con Google"
          onSuccess={ RespuestaGoogle }
          onFailure={ RespuestaGoogle }
          cookiePolicy={ 'single_host_origin' }
        />
      </div>
    </section>
  )
}

export default Login;
