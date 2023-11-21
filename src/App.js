import './App.css';
import { PrimerComponent } from "./components/PrimerComponent/PrimerComponent.jsx"
import { ContadorApp } from "./components/ContadorApp/ContadorApp.jsx";
import { ListadoApp } from "./components/ListadoApp/ListadoApp.jsx";

function App() {
  return (
    <div className="App">
      <ListadoApp/>
      <ContadorApp value={0}/>
      <PrimerComponent
        titulo="esta sección es de props"
        subtitulo="este es el subtítulo"
        indice={5}
        />
      <PrimerComponent
        titulo="título de ejemplo"
        subtitulo="subtítulo de ejemplo"
        indice={1}
      /> 
    </div>
  );
}

export default App;
