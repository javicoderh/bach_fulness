import { Link } from "react-router-dom"
import GlowingSphere from "./GlowingSphere"
import SoftShine from "./SoftShine"
import SoftShine2 from "./SoftShine2"
import SoftShine4 from "./SoftShine4"
import SoftShine3 from "./SoftShine3"
import SoftShine5 from "./SoftShine5"
import Spiral from "./Spiral"


function BachIndex() {
return (
<header className="App-header"> 
<GlowingSphere />
<SoftShine/>
<SoftShine2 />
<SoftShine3 />
<SoftShine4 />
<SoftShine5 />
<Spiral />
<div className="container">
<div className="titLogo">
  <h2>BachFulness</h2>
  <img src="https://images.vexels.com/media/users/3/142942/isolated/preview/08a7b5ad1ccd25f6b5c640aea11d96b5-health-flower-medicine.png" height="100" alt="" />
</div>
<div className="indexBody">
  <div className="unidad1">
  <Link to="/unidad1">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>Introducción</h4>
  </Link>
  </div>
  
  <div className="unidad2">
  <Link to="/unidad2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>Filosofía</h4>
  </Link>
  </div>
  <div className="unidad3">
  <Link to="/unidad3">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>Sistema Floral</h4>
  </Link>
  </div>
  <div className="unidad4">
  <Link to="/unidad4">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>Aplicación flores de Bach</h4>
  </Link>
  </div>
  <div className="unidad5">
  <Link to="/unidad5">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>Comó ayudar a los demás</h4>
  </Link>
  </div>
  <div className="unidad6">
  <Link to="/unidad6">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>Estados emocionales</h4>
  </Link>
  </div>
  <div className="unidad7">
  <Link to="/unidad7">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>autoconocimiento y gestión emocional</h4>
  </Link>
  </div>
  <div className="unidad8">
  <Link to="/unidad8">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>Estrategias de marketing digital aplicadas a la consulta</h4>
  </Link>
  </div>
  <div className="unidad9">
  <Link to="/unidad9">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/480px-Green_sphere.svg.png" height="20" alt="" />
  <h4>Examen final</h4>
  </Link>
  </div>  
</div>
<img src="https://bach-fulness.vercel.app/" height="50" alt="" />
</div>
</header>
)
}
export default BachIndex

