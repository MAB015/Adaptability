import React, { useState } from "react";
import axios from 'axios'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../login/Registrarseusuario.module.css"

const Registrarseempresa = () => {
  const [userData, setUserData] = useState()
  
   const saverUser = async()=>{
    const url = 'http://localhost:5000/users/signup'
    const result = await axios.post(url, userData)
    window.location.replace("./login");
    console.log(result)
    
   }
   
   const handleChange = (e) =>{
    const {name, value} = e.target
    setUserData({
      ...userData,
      [name]: value
    })
    console.log(userData)
   }
   console.log(handleChange)
   
  return (
    <>
    <Header />
    <div>
      <div className={classes.loginandregister}>
          <a href="./registrarseempresa" className={classes.buttonreg}>Registrso Empresa</a>
          <a href="./registrarseusuario" className={classes.buttonreg}>Registro Usuario</a>
      </div>
      <section className={classes.formregister}>
        <h4>Formulario Registro Usuario</h4>
        <input
          className={classes.controls}
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          placeholder="Ingrese su Nombre"
        />
        <input
          className={classes.controls}
          type="text"
          name="lastname"
          id="lastname"
          onChange={handleChange}
          placeholder="Ingrese su Apellido"
        />
        <input
          className={classes.controls}
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          placeholder="Ingrese su usuario"
        />
        <input
          className={classes.controls}
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Ingrese su Correo"
        />
        <input
          className={classes.controls}
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="Ingrese su Contraseña"
        />
        <p>
          Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
        </p>
        <button onClick={()=> saverUser()} className={classes.botons} type="submit" defaultValue="Registrar"> Registrarse</button>
        <p>
          <a href="./iniciarsesion">¿Ya tengo Cuenta?</a>
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
}
export default Registrarseempresa;
