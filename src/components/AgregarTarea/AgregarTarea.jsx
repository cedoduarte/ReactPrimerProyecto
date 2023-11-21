import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        {/*
            const envio = {
                nombre: inputValue,
                visto: false
            };
            event.preventDefault();
            agregarTarea(arrayOriginal => [...arrayOriginal, envio]);
        */}
        event.preventDefault();
        agregarTarea(inputValue);       
    }

    return (
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input
                    type="text"
                    placeholder="Ingresar tarea nueva"
                    value={inputValue}
                    onChange={(event) => onInputChange(event)}
                />
            </form>
        </>
    );
}