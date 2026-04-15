export default function Home() {
  return (
    <main style={{ padding: "60px", fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh" }}>
      
      <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
        🏡 Home of Property
      </h1>

      <p style={{ fontSize: "18px", marginTop: "20px", maxWidth: "600px" }}>
        Encuentra las mejores propiedades para vivir o invertir en Canarias y más allá.
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
        
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Casa en Las Palmas</h3>
          <p>Moderna, 3 habitaciones, vista al mar.</p>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Apartamento en Tenerife</h3>
          <p>Centro ciudad, ideal inversión.</p>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Villa en Gran Canaria</h3>
          <p>Lujo, piscina privada y jardín.</p>
        </div>

      </div>

      <button
        style={{
          marginTop: "40px",
          padding: "14px 24px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Ver todas las propiedades
      </button>

    </main>
  );
}