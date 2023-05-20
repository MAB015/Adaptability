import React from "react";
import classes from "../layout/Header.module.css"

export default function Header() {
  return (
    <div>
      <header className={classes.headersection}>
        <div className={classes.container}>
          {/* logo */}
          <a className={classes.sitelogo} width="100px" height="100px">
            <img src="./logo.png" />
          </a>
          <div className={classes.userpanel}>
<a href="./login">Login</a> / <a href="./registrarseusuario">Registrar</a>        </div>
          {/* responsive */}
          <div className={classes.navswitch}>
          </div>
          {/* site menu */}
          <nav className={classes.mainmenu}>
            <ul>
              <li>
                <a href="./inicio">Inicio</a>
              </li>
              <li>
                <a href="./cuentanosdeti">Cuentanos</a>
              </li>
              <li>
                <a href="./contactos">Contactos</a>
              </li>
              <li>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
