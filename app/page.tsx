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

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#f5f7fa", minHeight: "100vh" }}>
      
      {/* HERO */}
      <section style={{ padding: "90px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "54px", fontWeight: "bold" }}>
          🏡 Home of Property
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "20px auto", color: "#555" }}>
          Plataforma moderna para encontrar, comprar e invertir en propiedades en Canarias.
        </p>

        <a
          href="#properties"
          style={{
            padding: "14px 26px",
            background: "#000",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "20px"
          }}
        >
          Ver propiedades
        </a>
      </section>

      {/* PROPERTIES */}
      <section id="properties" style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Propiedades disponibles
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          
          {properties.map((p, i) => (
            <div key={i} style={{
              background: "white",
              padding: "20px",
              borderRadius: "14px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)"
            }}>
              <h3>{p.title}</h3>
              <p style={{ color: "#666" }}>{p.desc}</p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>{p.price}</p>
              <p style={{ fontSize: "12px", color: "#999" }}>{p.city}</p>

              <a
                href="https://wa.me/34600000000"
                target="_blank"
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: "10px 14px",
                  background: "#25D366",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none"
                }}
              >
                Contactar por WhatsApp
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "40px", color: "#777" }}>
        © {new Date().getFullYear()} Home of Property
      </footer>

    </main>
  );
}