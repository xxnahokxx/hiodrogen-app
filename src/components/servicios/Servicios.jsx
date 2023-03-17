import React from "react";
import style from "./servicios.module.css";
import Card from "./Card";

export default function Servicios({servicios}) {
    // console.log(servicios);

    return(
        <>
        <h1 className={style.title}>Servicios</h1>
        <div>
            <div className={style.servicios}>
                {servicios.map((el)=> <Card key={el.id} name={el.name} descripcion={el.descripcion} img={el.img} />)}
            </div>
        </div>
        </>
    );
}
