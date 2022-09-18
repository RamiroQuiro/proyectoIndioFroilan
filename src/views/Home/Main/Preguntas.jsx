import React, { useState } from "react";
import Section from "../../../component/Section";
import TituloTarjetas from "../../../component/TituloTarjetas";
import AcordionSingle from "../../../component/AcordionSingle";
import H1 from "../../../component/H1";
export default function Preguntas() {
  const datosAcordion = [
    {
      title: "¿Como llegar al Patio?",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Hospedaje cercanos al patio",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Fechas importantes",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Marcha de los Bombos",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Costo de los eventos",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
  ];

  return (
    <Section id="preguntas" className={" flex-col"}>
      
        <H1>Preguntas Frecuentes</H1>
      <div className="flex flex-wrap w-full items-start justify-start gap-4 my-5 p-5 duration-300">
        {!datosAcordion ? (
          <h1>'Cargando'</h1>
        ) : (
          datosAcordion.map((element, i) => (
            <AcordionSingle
              key={i}
              title={element.title}
              descripcion={element.descripcion}
            />
          ))
        )}
      </div>
    </Section>
  );
}