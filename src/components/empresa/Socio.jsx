import React from "react";
import style from "./socio.module.css";


export default function Socio(props) {
    return (
        <div className={style.container}>
            <img className={style.img} src={props.img} alt="" />
            <h2 className={style.name}>{props.name}</h2>
            <p className={style.paragraph}>{props.description}</p>
        </div>
    );
}
