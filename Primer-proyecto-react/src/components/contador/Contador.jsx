import { useState, useEffect } from "react";

export function Contador() {
    const [contador, setContador] = useState(0); 
    const sumar = () => {
        setContador(contador+1)}
    const restar = () => {
        setContador(contador-1)
    }

  return (
      <>
      <h1>{contador}</h1>
  <button onClick={sumar}>sumar</button>
  <button onClick={restar}>restar</button>
  </>);
}
