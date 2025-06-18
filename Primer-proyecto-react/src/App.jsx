import "./App.css";
import Usuario from "./components/usuario/Usuario";
import { Proveedor } from "./components/proveedor/Proveedor";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  //     Variable   FuncAct.         valor Inicial
  // el useEffect va a ejecutar el codigo qure se encuentra dentro
  // tantas veces como se actualicen sus dependencias
  // si no hay dependencias se ejecuta solo antes del primer
  // renderizado
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));
  }, []);

  return (
    <>
      {characters ? (
        characters.map((item, index) => <p>{item.name}</p>)
      ) : (
        <> Cargando...</>
      )}
      Hola Mundo
      <button>Soy un boton</button>
      <Usuario />
      <Proveedor name={"Pepe"} />
    </>
  );
}

export default App;
