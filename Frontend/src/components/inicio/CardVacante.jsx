import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function CardVacante() {
    return (
        <Card className="shadow-5-strong " style={{ width: 'auto' }}>
            <Card.Body>
                <Card.Title className="h3">Vacante</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Persona que ayude a monitorear cámaras de seguridad</Card.Subtitle>
                <Card.Text>Servicio de comedor</Card.Text>
                <Card.Text>Prestaciones superiores a la ley</Card.Text>
                <Card.Text>Trabajo de lunes a viernes</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Empresa de seguridad AAC</Card.Subtitle>
                <Card.Link href="./registrarseusuario"  class="btn btn-danger">Postularme</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardVacante

