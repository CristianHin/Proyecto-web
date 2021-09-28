import "./Login.css";
import logo from './../Img/Codebox.jpg'
import GoogleLogin from 'react-google-login';

const RespuestaGoogle = (respuesta) =>{
  console.log(respuesta.profileObj)
}

const Login = () => {
  return <div className="login">
    <img src={logo} alt=""></img>
    <h1>Ingresar</h1>
    
    <GoogleLogin
      clientId="404246774425-re4of1e59glskmhntem3t8hk8uthdm42.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={RespuestaGoogle}
      onFailure={RespuestaGoogle}
      cookiePolicy={'single_host_origin'}
    />

  </div>
}

export default Login;
