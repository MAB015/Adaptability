import React from 'react'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../login/Login.module.css";


const login = () => {
  return (
    <>
    <Header/>
    <div>
      <section className={classes.formlogin}>
        <h5>Login</h5>
        <a href="" >Eres Reclutador?</a>
        <input
          className={classes.controls}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className={classes.controls}
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        <button className={classes.buttons}>
          Enviar
        </button>
        <p>
          <a href="./registrarse">¿Olvidastes tu Contraseña?</a>
          <br />
          <a href="./registrarseempresa">Registrarse</a>
        </p>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default login
