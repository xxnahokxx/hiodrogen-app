import React from "react";
import style from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className={style.bar}>
            <div className={style.navbar}>
                <Link className={style.options} to="/home">
                    <div>logo</div>
                </Link>
                <div className={style.links}>
                    <NavLink className={style.options} to="/home">Inicio</NavLink>
                    <NavLink className={style.options} to="/servicio">Servicio</NavLink>
                    <NavLink className={style.options} to="/empresa">Empresa</NavLink>
                    <NavLink className={style.options} to="#">Clientes</NavLink>
                </div>
                <a href="#" className={style.contact}>Contacto</a>
            </div>
        </div>
    );
}
