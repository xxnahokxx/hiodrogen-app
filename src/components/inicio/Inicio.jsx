import React from "react";
import style from "./inicio.module.css";

export default function Inicio() {
    return (
        <>
            <div className={style.fondoInicio} id="inicio">
                <div className={style.mensajeP}>
                    <p className={style.mensaje1}>Optim consult sas</p>
                    <p className={style.mensaje2}>Consultoría Socio Ambiental Estratégica</p>
                </div>
            </div>
            <div className={style.contentServicios}>
                <div>
                    <h2 className={style.title} id="servicio"><div className={style.symbol}><h3>¿</h3></div>Qué hacemos?</h2>
                    <p className={style.parrafo}>Ofrecemos servicios de consultoría para la gestión ambiental y social de los sectores productivos. Hemos desarrollado proyectos para los sectores agropecuario, pesquero, agroindustrial, forestal, transporte, infraestructura, alimentos y bebidas, y construcción de vivienda a nivel nacional e internacional.</p>
                    <p className={style.parrafo}>Nuestro propósito es optimizar y fortalecer organizaciones públicas, privadas y de cooperacion internacional para desarrollar estrategias sostenibles que contribuyan a la generación de bienestar social y a la prosperidad económica.</p>
                </div>
                <div>
                    <img className={style.img1} src="https://images.pexels.com/photos/236214/pexels-photo-236214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className={style.img2} src="https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                    <img className={style.img3} src="https://images.unsplash.com/photo-1609884610438-c22fec256708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                </div>
            </div>
        </>
    );
}
