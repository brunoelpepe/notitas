import React from "react";

const Inicio =(props) => {
    return (
    <> 
        <div className="container text-center mt-5 pb-5">
        <h1 className="display-4 text-white text-center my-5">Bienvenido</h1>
        {/* Spinners */}
       <div className="spinner-grow gray-100" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow gray-200" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow gray-300" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow gray-400" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow gray-500" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow gray-600" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow gray-700" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow gray-800" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>     
    </>

    );
}

export default Inicio;