import React from "react";
import style from "./empresa.module.css";
import Socio from "./Socio";

export default function Empresa(props) {
    const { socios } = props;
    console.log(socios);
    return (
        <>
            <div className={style.container}>
                <h1 className={style.title}>Empresa</h1>
                <p className={style.pharagraph}>Optim, fundada en 2007, es una empresa dedicada al diseño y desarrollo de estrategias de gestión ambiental y de desarrollo sostenible para distintos sectores y proyectos empresariales y comunitarios. Cuenta con un equipo de profesionales con amplio rango de experiencia y formación que le permite atender el desarrollo de los proyectos que sus clientes le encomiendan.</p>
                <h2 className={style.subtitle}>Nuestros Socios</h2>
                <div className={style.contentSocios}>
                    {socios.map((el) => <Socio img={el.img} name={el.name} description={el.description} key={el.id} />)}
                </div>

            </div>
        </>
    );
}
