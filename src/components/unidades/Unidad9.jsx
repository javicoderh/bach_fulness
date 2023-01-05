import React from "react";
import { Link } from "react-router-dom";

function Unidad9() {
 return (
  <header className="App-header">
  <div>
   <div className="containerU9">
 <div className="titLogo">
  <h2>Examen final</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
 </div>
 <div className="unidadesBody2">
 <div className="textOrder">
  <h4>-...</h4>
  <h4>-...</h4>
  <h4>-...</h4>
  <h4>-...</h4>
  <h4>-...</h4>
  <h4>-...</h4>
  </div>
  <div className="textOrder">
  <h4>-...</h4>
  <h4>-...</h4>
  <h4>-...</h4>
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
export default Unidad9