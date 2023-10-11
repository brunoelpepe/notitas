import React from "react";

const NuevaNota = (props) => {
    return (
        <>
            <div className="modal fade" id="modalNuevaNota" tabIndex={-1} aria-labelledby="modalNuevaNotaLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalNuevaNotaLabel">
                            Nueva Nota
                            </h5>
                            <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            {/* Formulario para ingresar título y contenido */}
                            <form id="formularioNuevaNota">
                            <div className="mb-3">
                                <label htmlFor="titulo" className="form-label text-white">
                                Título
                                </label>
                                <input
                                type="text"
                                className="form-control"
                                id="titulo"
                                name="titulo"
                                required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contenido" className="form-label text-white">
                                Contenido
                                </label>
                                <textarea
                                className="form-control"
                                id="contenido"
                                name="contenido"
                                rows={4}
                                required=""
                                defaultValue={""}
                                />
                            </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            >
                            Cancelar
                            </button>
                            <button type="button" className="btn btn-primary" id="guardarNota">
                            Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NuevaNota;