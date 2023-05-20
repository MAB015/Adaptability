import React, { useState } from "react";
import classes from "../cuentanos/experiencia.module.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const Experiencia = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />

      <section className={classes.section_content}>
        <div className={classes.Tabla1}>
          <div className={classes.cuadro}>
            <p className="texto">Cuentanos más de ti</p>
            <div className={classes.circulo}>
              <div>1</div>
              <div>2</div>
            </div>
            <div className={classes.ventanacheckbox}></div>
          </div>
          <p>Experiencia previa, o trabajos que piensas realizar</p>
          <div className={classes.formcheck}>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Agente de atención al cliente remoto:
            </label>
          </div>
          <div className={classes.formcheck}>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Trabajador de soporte técnico en línea
            </label>
          </div>
          <div className={classes.formcheck}>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Asistente virtual
            </label>
          </div>
          <div className={classes.formcheck}>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Recepcionista de hotel
            </label>
          </div>

          <Button
            variant="primary"
            size="lg"
            active
            className={classes.btnSiguiente}
            onClick={() => setShowModal(true)}
          >
            Registrarme
          </Button>
        </div>
      </section>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registrado!!1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Registrado exitosamente</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href='./cuentanosdeti'>
            Aplicar nuevo vacante
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
};

export default Experiencia;
