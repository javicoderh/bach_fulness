import React from "react";
import { Link } from "react-router-dom";
import GlowingSphere from "../GlowingSphere";

function Unidad5() {
 return (
  <header className="App-header">
  <GlowingSphere />
  <div>
   <div className="containerU4">
 <div className="titLogo">
  <h2>Cómo ayudar a los demás</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
 </div>
 <div className="unidadesBody2">
 <div className="textOrder">
  <h4>-Historía - Emoción - Flor</h4>
  <h4>-Recomendando flores</h4>
  <h4>-Viendo más allá de las palabras</h4>
  <h4>-Introducción a los catalizadores</h4>
  <h4>-Hacer una consulta floral Bach</h4>
  <h4>-Escuchar</h4>
  <h4>-Ficha y registro de la información</h4>
  </div>
  <div className="textOrder">
  <h4>-Barreras para una escucha efectiva</h4>
  <h4>-Cómo hacer preguntas durante la consulta</h4>
  <h4>-Profesionalizando el servicio</h4>
  <h4>-¿Cuánto debo cobrar?</h4>
  <h4>-Seguro</h4>
  <h4>-Consentimiento informado</h4>
  <h4>-Teleconsulta</h4>
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
export default Unidad5