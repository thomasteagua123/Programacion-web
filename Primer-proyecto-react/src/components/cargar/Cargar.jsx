import { useState, useEffect } from "react";

export function Cargador() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(()=> 
          {setIsLoading(false)},3000)
      }, []);

  return <>{isLoading ? <h2>Cargando...</h2> : <h2>Listo</h2>}</>;
}
