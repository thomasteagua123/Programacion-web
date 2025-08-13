import { Personas2 } from "./personas2";
export function Personas({ nombre }) {
  return (
    <>
      <h3>este es el componente persona</h3>
      <div>hola{nombre}</div>
      <Personas2 />
    </>
  );
}
