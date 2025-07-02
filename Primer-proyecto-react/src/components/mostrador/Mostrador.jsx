import { useState, useEffect } from "react";

export function Mostrador() {
  const [mostrar, setMostrar] = useState("");



  const handleInputChange = (event) => {


    setMostrar(event.target.value); /*Toma el valor de event dentro del input */


  };

  return (<>
    <input


        type="text"


        placeholder="Escribi algo"


        onChange={handleInputChange}


        value={mostrar}></input>


    

      {mostrar && <h2>{mostrar}</h2>}
      </>
)}
