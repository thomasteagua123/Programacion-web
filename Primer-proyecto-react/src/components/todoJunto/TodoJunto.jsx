import { useState, useEffect } from "react";

export function TodoJunto() {
    const [nombre, setNombre] = useState("");
  const [saludo, setSaludo] = useState("");

  const mostrarSaludo = () => {
    if (nombre) {
        const saludoPersonalizado = `¡Hola!, ${nombre}`;
        setSaludo(saludoPersonalizado);
        console.log("Saludo actualizado");
    } else{
        setSaludo('')
  }
  }
  return (<>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Introduce tu nombre</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
        style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
      />
      <br />
      <button
        onClick={mostrarSaludo}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
        Mostrar Saludo
      </button>
      {saludo && <p style={{ marginTop: '20px' }}>{saludo}</p>}
    </div>
    </>
  )}