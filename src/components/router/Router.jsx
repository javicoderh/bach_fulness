import React from "react";
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import BachIndex from "../Index";
import Unidad1 from "../unidades/Unidad1";
import Unidad2 from "../unidades/Unidad2";
import Unidad3 from "../unidades/Unidad3";
import Unidad4 from "../unidades/Unidad4";
import Unidad5 from "../unidades/Unidad5";
import Unidad6 from "../unidades/Unidad6";
import Unidad7 from "../unidades/Unidad7";
import Unidad8 from "../unidades/Unidad8";
import Unidad9 from "../unidades/Unidad9";


function Router() {

 return (
 
 <HashRouter>
  <Routes> 
  <Route path="/" element={<BachIndex />}/>
  <Route path="/unidad1" element={<Unidad1 />}/>
  <Route path="/unidad2" element={<Unidad2 />}/>
  <Route path="/unidad3" element={<Unidad3 />}/>
  <Route path="/unidad4" element={<Unidad4 />}/>
  <Route path="/unidad5" element={<Unidad5 />}/>
  <Route path="/unidad6" element={<Unidad6 />}/>
  <Route path="/unidad7" element={<Unidad7 />}/>
  <Route path="/unidad8" element={<Unidad8 />}/>
  <Route path="/unidad9" element={<Unidad9 />}/>
  </Routes>
 </HashRouter>
 ) 
 }
 
 export default Router