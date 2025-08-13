import { useContext } from "react";
import { NombreContext } from "../main";

export function Personas2() {
  const nombre = useContext(NombreContext);

  return (
    <>
      <div>hola {nombre}</div>
    </>
  );
}
