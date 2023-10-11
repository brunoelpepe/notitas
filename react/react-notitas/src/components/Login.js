import React from "react";

const Login = (props) => {
     document.getElementById("loginForm").addEventListener("submit", function (event) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        if (username.trim() === "" || password.trim() === "") {
            alert("Por favor, complete todos los campos.");
            event.preventDefault(); // Evitar que el formulario se envíe
        }
    });
    return (    
       <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 mb-5">
                    <h2 className="text-center my-5">Inicio de Sesión</h2>
                    <form id="loginForm">
                        <div className="form-group">
                        <label className="text-white" htmlFor="username">
                            Nombre de Usuario:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            required=""
                        />
                        </div>
                        <div className="form-group mt-3">
                        <label className="text-white" htmlFor="password">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            required=""
                        />
                        </div>
                        <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary">
                            Iniciar Sesión
                        </button>
                        </div>
                    </form>
                    <div className="register-link text-white text-center mt-5">
                        ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
                    </div>
                </div>
            </div>
        </div>
       </> 
    )
}

export default Login;