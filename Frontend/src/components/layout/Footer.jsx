import React from 'react'
import classes from '../layout/Footer.module.css'


export default function Footer() {
  return (
    <div className={classes.footerfin}>
      <footer className={classes.footersection}>
  <div className="container">
    <ul className={classes.footermenu}>
      <li><a href="./inicio">Inicio</a></li>
      <li><a href="./productos">Productos</a></li>
      <li><a href="./contactos">Contactos</a></li>
    </ul>
  </div>
</footer>
    </div>
  )
}
