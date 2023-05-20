import React from "react";

function FormSearch () {
    return (
        <div className="d-flex p-5">
            <div className="form-outline p-2 flex-fill">
                <input type="search" id="form1" className="form-control" placeholder="Puesto, empresa, palabras claves" aria-label="Search" />
            </div>
            <div className="form-outline p-2 flex-fill">
                <input type="search" id="form1" className="form-control" placeholder="Colonia, Ciudad o estado" aria-label="Search" />
            </div>
            <button type="button" className="btn btn-primary p-2">
                <i className="fas fa-search">Buscar Empleo</i>
            </button>
        </div>
    )
}

export default FormSearch