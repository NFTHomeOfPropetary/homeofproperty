"use client";

import { useState } from "react";

export default function Home() {

  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState("");

  const generar = () => {
    const texto = `🏡 Propiedad destacada:
${input}

Descripción profesional:
Fantástica propiedad ubicada en Canarias, ideal tanto para vivir como para inversión. Cuenta con excelentes características, buena ubicación y gran potencial de revalorización.

💰 Oportunidad única en el mercado.`;

    setResultado(texto);
  };

  return (
    <main style={{ padding: "60px", fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh" }}>

      <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
        🏡 Home of Property
      </h1>

      <p style={{ marginTop: "20px" }}>
        Portal inmobiliario inteligente con IA
      </p>

      {/* GENERADOR IA */}
      <div style={{ marginTop: "40px" }}>
        <h3>Generar anuncio con IA</h3>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ej: casa en Tenerife con piscina"
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />

        <button
          onClick={generar}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Generar
        </button>

        <pre style={{ marginTop: "20px", background: "white", padding: "20px" }}>
          {resultado}
        </pre>
      </div>

    </main>
  );
}