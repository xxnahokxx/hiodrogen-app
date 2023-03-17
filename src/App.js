import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/navbar/NavBar';
import Inicio from './components/inicio/Inicio';
import Servicios from './components/servicios/Servicios';
import dataServicios from "./db.js"
import socios from "./db_socios"
import Empresa from './components/empresa/Empresa';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/home' element={<Inicio />}></Route>
        <Route path='/servicio' element={<Servicios servicios={dataServicios}/>}></Route>
        <Route path='/empresa' element={<Empresa socios={socios} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
