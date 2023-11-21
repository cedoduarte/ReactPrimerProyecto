import React from "react";
import "./PrimerComponent.css";
import PropTypes from "prop-types";

const texto = "esto es un texto";
const numero = 123456;
const arreglo = ["Curso de React","YouTube",4,1000000];
const booleano = true;
const funcion = () => 1+1;
const objeto = { nombre: "Curso de JavaScript", duracion: 4 };
const fecha = new Date();

export const PrimerComponent = ({titulo="Sin título", subtitulo="Sin subtítulo", indice=0}) => {
    return (
        <>
            <h1>{titulo}</h1>
            <h1>{subtitulo}</h1>
            <h1>Índice más 1: {indice+1}</h1>
            <h1>Texto: {texto}</h1>
            <h1>Número: {numero}</h1>
            <h1>Arreglo: {arreglo}</h1>
            <h1>Booleano: {booleano}</h1>
            <h1>Funcion: {funcion()}</h1>
            <h1>Objeto: {JSON.stringify(objeto)}</h1>
            <h1>Fecha: {JSON.stringify(fecha)}</h1>
        </>
    );
}

PrimerComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    indice: PropTypes.number.isRequired
}
