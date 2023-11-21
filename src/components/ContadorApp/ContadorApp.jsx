import { useState } from "react";

let mensaje = "Mensaje sin texto";

const Button = () => {
    return (
        <button onClick={
            () => {
                console.log(mensaje);
            }
        }>Imprime variable mensaje</button>
    );
}

export const ContadorApp = ({value}) => {
    const handleClick = (event, arg) => {
        console.log(event);
        console.log(arg);
    }

    const aumenta = () => {
        setContador(contador + 1);
        //value += 1;
        //console.log(value);
    }

    const [ contador, setContador ] = useState(value);

    return (
        <>
            <h1>Contador: </h1>
            <p>{contador}</p>
            <button onClick={aumenta}>Aumenta</button>
            <Button/>
            <button onClick={
                (event) => handleClick(event, "otro argumento")
            }
            >Imprime evento</button>
            Un simple mensaje: {mensaje}
        </>
    );
}