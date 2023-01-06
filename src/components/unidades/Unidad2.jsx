import React from "react";
import { Link } from "react-router-dom";
import GlowingSphere from "../GlowingSphere";

function Unidad2() {
 return (
  <header className="App-header">
  <GlowingSphere />
  <div>
   <div className="container">
 <div className="titLogo">
  <h2>filosofía</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
 </div>
 <div className="unidadesBody2">
  <div className="textOrder">
  <h4>-Biografía Dr. Edward Bach</h4>
  <h4>-Creencias</h4>
  <h4>-Sencillez</h4>
  <h4>-El alma</h4>
  <h4>-La mente</h4>
  </div>
  <div className="textOrder">
  <h4>-La personalidad</h4>
  <h4>-Visión salud y enfermedad</h4>
  <h4>-Cuento sobre salud</h4>
  <h4>-Los escrito de Edward Bach</h4>
  <h4>-El hospital del futuro</h4>
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
export default Unidad2