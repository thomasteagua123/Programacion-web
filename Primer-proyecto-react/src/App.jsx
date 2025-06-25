import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] =
    useState(""); /*Hace que el valor de nombre sea un str vacio */
  const handleClick = () => {
    console.log(nombre); /*Muestra nombre cuando se hace click */
  };
  const handleInputChange = (event) => {
    setNombre(event.target.value); /*Toma el valor de event dentro del input */
  };
  return (
    <>
      <input
        type="text"
        placeholder="Escribi tu nombre"
        onChange={handleInputChange}
        value={nombre}
      />
      <button onClick={handleClick}>Mostrar</button>
      {nombre && <h2>{nombre}</h2>}
      {/* /*Si nombre es igual a str vacio
      print Hola, sino chau */}
      {nombre === "" ? <> Hola</> : <>chau</>}
    </>
  );
}
export default App;
