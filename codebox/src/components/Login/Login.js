import GoogleLogin from 'react-google-login';
import logo from './../Img/Codebox.jpg';
import axios from 'axios';
import "./Login.css";

const Login = () => {
  
  const RespuestaGoogle = (respuesta) =>{
    console.log(respuesta);
    axios({
      method: "POST",
      url: "https://code-box-api.herokuapp.com/api/googlelogin",
      data: { tokenId: respuesta.tokenId }
    }).then(res => {
      console.log('Google Login exitoso', res);
    });
  };

  return (
    <section className="login-container">
      <div className="login">
        <img src={logo} alt=""></img>
        <h1>Ingresar</h1>
        
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
