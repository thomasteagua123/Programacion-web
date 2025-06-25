import { useState, useEffect } from "react";

export function RickMorty() {
  const [characters, setCharacters] = useState({});
  //     Variable   FuncAct.         valor Inicial
  // el useEffect va a ejecutar el codigo qure se encuentra dentro
  // tantas veces como se actualicen sus dependencias
  // si no hay dependencias se ejecuta solo antes del primer
  // renderizado
  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e67b0040")
      .then((data) => data.json())
      .then((response) => console.log(response.Ratings));
  }, []);
  return <>{characters ? characters.Source : <> Cargando...</>}</>;
}
