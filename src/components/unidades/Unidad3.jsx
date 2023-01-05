import React from "react";
import { Link } from "react-router-dom";

function Unidad3() {
 return (
  <header className="App-header">
  <div>
   <div className="container">
 <div className="titLogo">
  <h2>Sistema floral</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
 </div>
 <div className="unidadesBody2">
 <div className="textOrder">
  <h4>-Remedios Combinados</h4>
  <h4>-Rescue remedy</h4>
  <h4>-Los 12 curadores</h4>
  <h4>-Los 7 grupos emocionales</h4>
  <h4>-Los 38 remedios</h4>
  <h4>-Dosificación y uso</h4>
  </div>
  <div className="textOrder">
  <h4>-Reacciones y efectos</h4>
  <h4>-Efectos sutiles</h4>
  <h4>-Metodos de preparación</h4>
  <h4>-Tintura madre</h4>
  <h4>-Actualización de estudios científicos</h4>
  </div> 
  <Link to="/">
  <button className="back2">volver</button>
 </Link>
 </div>
 
</div>
  </div>
  </header>
 )
}
export default Unidad3