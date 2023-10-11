import React from "react";

const ContenidoPag = (props) => {
    return (
        <>
            <div className="container mt-5">
            <div className="row justify-content-center my-5">
                <div className="col-md-6 offset-md-3">
                {/* Botón para Agregar Nota */}
                <button
                    className="btn btn-primary btn-lg btn-block"
                    data-bs-toggle="modal"
                    data-bs-target="#modalNuevaNota"
                >
                    Agregar Nueva Nota
                </button>
                </div>
                <div className="col-md-6 offset-md-3">
                {/* Botón para Agregar Nota */}
                <button id="botonTest" className="btn btn-primary btn-lg btn-block">
                    Test Nueva Nota
                </button>
                </div>
            </div>
            </div>
        </>
    )
}

export default ContenidoPag;