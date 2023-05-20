import React from 'react';
import classes from "../cuentanos/cuentanos.module.css"
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Button from 'react-bootstrap/Button';

const cuentanosdeti = () => {
  return (
    <>
      <Header/>

      <section className={classes.section_content}>
        <div className={classes.Tabla1}>
          <div className={classes.cuadro}>
            <p className="texto">Cuentanos más de ti</p>
            <div className={classes.circulo}>
              <div>1</div>
              <div>2</div>
            </div>
            <div className={classes.ventanacheckbox}>
          </div>
        </div>

        <div className='container-tipo-discapacidad'>
          <p className='text-tipo-discapacidad'>Tipo de discapacidad</p>
          <div className={classes.formcheck}>
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
            Discapacidad motora o física
            </label>
          </div>
          <div className={classes.formcheck}>
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
            <label className="form-check-label" htmlFor="flexCheckChecked">
            Discapacidad auditiva
            </label>
          </div>
          <div className={classes.formcheck}>
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
            <label className="form-check-label" htmlFor="flexCheckChecked">
            Discapacidad de extremidades superiores
            </label>
          </div>
          <div className={classes.formcheck}>
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
            <label className="form-check-label" htmlFor="flexCheckChecked">
            Discapacidad de extremidades inferiores
            </label>
          </div>
          <div className={classes.formcheck}>
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
            <label className="form-check-label" htmlFor="flexCheckChecked">
            Otros
            </label>
          </div>
          <Button variant="primary" size="lg" active className={classes.btnSiguiente} href='./experiencia'>
              Siguiente
          </Button>
        </div>
      </div>
      </section>

    <Footer/>
    </>

  )
}

export default cuentanosdeti
