"use client";

import { useState } from "react";

const PHONE = "34627655158"; // tu número en formato internacional

const properties = [
  {
    title: "Casa en Las Palmas",
    desc: "Moderna, 3 habitaciones, vista al mar",
    price: "320.000€",
    city: "Gran Canaria",
  },
  {
    title: "Apartamento en Tenerife",
    desc: "Centro ciudad, ideal inversión",
    price: "210.000€",
    city: "Tenerife",
  },
  {
    title: "Villa de lujo",
    desc: "Piscina privada, jardín y vistas",
    price: "850.000€",
    city: "Gran Canaria",
  },
];

/* =========================
   CHAT IA (SIMULADO + PREPARADO PARA API)
========================= */
function ChatIA() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    setLoading(true);

    try {
      // 🔥 AQUÍ LUEGO CONECTAMOS OPENAI REAL
      const text = input.toLowerCase();

      if (text.includes("barato")) {
        setResponse("🏡 Casas económicas desde 150.000€ en Canarias y Portugal");
      } else if (text.includes("lujo")) {
        setResponse("🏝️ Villas premium en Marbella, Ibiza y Mallorca");
      } else if (text.includes("playa")) {
        setResponse("🌊 Propiedades frente al mar en España, Grecia y Portugal");
      } else if (text.includes("inversión")) {
        setResponse("💰 Zonas top: Valencia, Madrid, Lisboa, Dubái");
      } else {
        setResponse("Escribe: barato, lujo, playa o inversión");
      }

    } catch (e) {
      setResponse("Error al buscar propiedades");
    }

    setLoading(false);
  };

  return (
    <div
      role="region"
      aria-label="Asistente IA inmobiliario"
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ej: casa barata en la playa"
        style={{
          padding: "10px",
          width: "70%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={askAI}
        style={{
          marginLeft: "10px",
          padding: "10px 14px",
          background: "black",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {loading ? "Buscando..." : "Buscar"}
      </button>

      <p style={{ marginTop: "15px" }}>{response}</p>
    </div>
  );
}

/* =========================
   HOME
========================= */
export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#f5f7fa", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ padding: "90px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "54px", fontWeight: "bold" }}>
          🏡 Home of Property
        </h1>

        <p style={{ color: "#555", maxWidth: "700px", margin: "20px auto" }}>
          Plataforma inteligente para encontrar propiedades en Europa con ayuda de IA.
        </p>
      </section>

      {/* PROPERTIES */}
      <section style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2>Propiedades</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: "20px" }}>
          {properties.map((p, i) => (
            <div key={i} style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <strong>{p.price}</strong>
              <p>{p.city}</p>

              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  background: "#25D366",
                  color: "white",
                  padding: "10px",
                  borderRadius: "8px",
                  textDecoration: "none"
                }}
              >
                Contactar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CHAT IA */}
      <section style={{ padding: "60px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>🤖 Asistente IA inmobiliario</h2>
        <ChatIA />
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "40px", color: "#777" }}>
        © {new Date().getFullYear()} Home of Property
      </footer>

    </main>
  );
}