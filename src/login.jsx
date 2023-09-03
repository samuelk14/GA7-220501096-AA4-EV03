import React, { useRef} from 'react';
import './login.css';//se importan los estilos



function Login() {

  return (
    <div>
      <section>      
        <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="foto de perfil" />
        <p>Por favor, ingrese su usuario y contraseña</p>
        {/* se consume la API creada en el componente anterior */}
        <form action="http://localhost/proyecto/formato-de-recepcion/conexion/login.php" method="POST"> 
          {/* se crea el input para el suario */}       
          <input type="text" placeholder="usuario" name="Nusuario" id="username" />
          {/* input para a contraseña */}
          <input type="password" placeholder="Ingresa contraseña" name="pass" id="password"/>
          <input type="submit" value="INICIAR SESIÓN" />
        </form>
      </section>
    </div>
  );
}

export default Login;