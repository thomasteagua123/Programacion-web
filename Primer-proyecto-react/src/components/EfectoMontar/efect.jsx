import { useState, useEffect } from "react";

export function EfectoM() {
  const [montar, setMontar] = useState([]);
  //     Variable   FuncAct.         valor Inicial
  useEffect(() => {
    console.log("Mensaje del montado");
    
  }, []);

  return (
    <>
      <h2>Fijate en la consola plis</h2>
    </>
  );
}