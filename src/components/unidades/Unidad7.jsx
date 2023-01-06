import React from "react";
import { Link } from "react-router-dom";
import GlowingSphere from "../GlowingSphere";

function Unidad7() {
 return (
  <header className="App-header">
  <GlowingSphere />
  <div>
   <div className="containerU7">
 <div className="titLogo">
  <h2>Autoconocimiento y gestión emocional</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
 </div>
 <div className="unidadesBody2">
 <div className="textOrder">
  <h4>-Acompañamiento con terapia floral Bach</h4>
  <h4>-Sesiones de coaching para autoayuda</h4>
  <h4>-Mindfulness como herramienta de autoconocimiento y gestion emocional</h4>
  <h4>-Estilos de comunicación</h4>
  <h4>-Cualidades y habilidades</h4>
  <h4>-Botones y gatillos</h4>
  </div>
  <div className="textOrder">
  <h4>-Salga de su estilo</h4>
  <h4>-Cuidemos de nosotros mismos</h4>
  <h4>-Un terapeuta ideal</h4>
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
export default Unidad7