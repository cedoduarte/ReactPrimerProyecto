import { useState } from "react";
import "./ListadoApp.css";
import { AgregarTarea } from "../AgregarTarea/AgregarTarea.jsx";

const Item = ({ nombre, visto }) => {
    return (
        <li>
            {nombre} ({ visto ? "visto" : "no visto"})
        </li>
    );
}



export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, {
            nombre: "nuevo",
            visto: false
        }]);
    }

    let listadoSecciones = [
        { id: 1, nombre: "Instalaciones necesarias", visto: true },
        { id: 2, nombre: "Uso de Vite", visto: true },
        { id: 3, nombre: "Componentes", visto: true },
        { id: 4, nombre: "Variables en JSX", visto: true },
        { id: 5, nombre: "Props", visto: true },
        { id: 6, nombre: "Eventos", visto: true },
        { id: 7, nombre: "useState", visto: true },
        { id: 8, nombre: "Redux", visto: false },
        { id: 9, nombre: "customHooks", visto: false }
    ];
    const [arreglo, setArreglo] = useState(listadoSecciones);

    const onAgregarTarea = (val) => {
        const valor = val.trim();
        if (valor.length === 0) {
            return;
        }
        setArreglo([...arreglo, {
            id: arreglo.length + 1,
            nombre: valor,
            visto: false
        }]);
    }

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
            
            {/* <AgregarTarea agregarTarea={setArreglo}></AgregarTarea> */}

            <ol>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto} />)}
            </ol>
            <button onClick={() => addTask()}>Agregar tarea</button>
        </>
    );
}