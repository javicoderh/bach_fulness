import React from "react";
import { Link } from "react-router-dom";
import GlowingSphere from "../GlowingSphere";

function Unidad6() {
 return (
  <header className="App-header">
  <GlowingSphere />
  <div>
   <div className="container">
 <div className="titLogo">
  <h2>Estados emocionales</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
 </div>
 <div className="unidadesBody">
  <h4>-Comparando los grupos emocionales</h4>
  <h4>-tipos y estados de ánimo</h4>
  <h4>-Identificando los remedios en la vida cotidiana</h4>
  <h4>-Navegando a través de las capas emocionales</h4>
  <Link to="/">
  <button className="back">volver</button>
 </Link>
 </div>
 
</div>
  </div>
  </header>
 )
}
export default Unidad6