import React from "react";

const Barra = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-0">
            <div className="d-flex flex-grow-1 p-3 m-0 w-100">
                <a className="navbar-brand" href="#">
                Mi Aplicación
                </a>
                <div className="d-flex justify-content-between w-100">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        Inicio
                    </a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <span className="nav-link">Usuario123</span>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./login.html">
                        Cerrar Sesión
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>           
        </>
    )
}

export default Barra;