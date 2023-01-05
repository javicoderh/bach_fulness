import React from "react";
import { Link } from "react-router-dom";

function Unidad4() {
 return (
  <header className="App-header">
  <div>
   <div className="containerU4">
 <div className="titLogo">
  <h2>Aplicación de las flores de Bach</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
 </div>
 <div className="unidadesBody">
  <h4>-Flores de Bach en la vida cotidiana</h4>
  <h4>-Plantas</h4>
  <h4>-Animales</h4>
  <h4>-Crisis o emergencias</h4>
  <h4>-Estados pasajeros</h4>
  <h4>-Tratamiento</h4>
  <Link to="/">
  <button className="back">volver</button>
 </Link>
 </div>
 
</div>
  </div>
  </header>
 )
}
export default Unidad4