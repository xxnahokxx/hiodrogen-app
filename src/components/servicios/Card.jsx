import React from "react";
import style from "./card.module.css"

export default function Card(props) {
    return(
        <div className={style.contentCard}>
            <img className={style.img} src={props.img} alt="" />
            <h2 className={style.title}>{props.name}</h2>
            <p className={style.parrafo}>{props.descripcion}</p>
        </div>
    );
}
