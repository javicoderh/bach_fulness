import React from "react";
import { Link } from "react-router-dom";

function Unidad1() {
 return (
  <header className="App-header">
  <div>
   <div className="container">
 <div className="titLogo">
  <h2>Introducción</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
 </div>
 <div className="unidadesBody">
  <h4>-Bienvenida</h4>
  <h4>-Presentación equipo docente</h4>
  <h4>-Presentación de metas y objetivos del curso</h4>
  <h4>-Presentación de la maya curricular y estructura del curso</h4>
  <Link to="/">
  <button className="back">volver</button>
 </Link>
 </div>
 
</div>
  </div>
  </header>
 )
}
export default Unidad1