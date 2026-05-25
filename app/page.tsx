"use client";
import { useState } from "react";

interface Pregunta {
  pregunta: string;
  opciones: string[];
  respuesta: string;
}

export default function Home() {
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿Cuál es la capital de Colombia?",
      opciones: ["Medellín", "Bogotá", "Cali", "Barranquilla"],
      respuesta: "Bogotá",
    },
    {
      pregunta: "¿Qué mar baña la costa norte de Colombia?",
      opciones: ["Océano Pacífico", "Mar Caribe", "Océano Atlántico", "Mar Rojo"],
      respuesta: "Mar Caribe",
    },
    {
      pregunta: "¿Cuál es la moneda oficial de Colombia?",
      opciones: ["Peso colombiano", "Dólar", "Euro", "Bolívar"],
      respuesta: "Peso colombiano",
    },
    {
      pregunta: "¿Quién escribió Cien años de soledad?",
      opciones: [
        "Pablo Neruda",
        "Gabriel García Márquez",
        "Mario Vargas Llosa",
        "Julio Cortázar",
      ],
      respuesta: "Gabriel García Márquez",
    },
    {
      pregunta: "¿Cuál es la flor nacional de Colombia?",
      opciones: ["Rosa", "Orquídea", "Girasol", "Tulipán"],
      respuesta: "Orquídea",
    },
  ];

  // Estados para controlar el flujo del juego
  const [indicePregunta, setIndicePregunta] = useState<number>(0);
  const [correctas, setCorrectas] = useState<number>(0);
  const [incorrectas, setIncorrectas] = useState<number>(0);
  const [juegoTerminado, setJuegoTerminado] = useState<boolean>(false);

  // Función para manejar la respuesta del usuario
  const manejarRespuesta = (opcionSeleccionada: string) => {
    const esCorrecta = opcionSeleccionada === preguntas[indicePregunta].respuesta;

    if (esCorrecta) {
      alert("✅ ¡Correcto!");
      setCorrectas(correctas + 1);
    } else {
      alert(`❌ Incorrecto. La respuesta era: ${preguntas[indicePregunta].respuesta}`);
      setIncorrectas(incorrectas + 1);
    }

    // Avanzar a la siguiente pregunta o terminar el juego
    const siguienteIndex = indicePregunta + 1;
    if (siguienteIndex < preguntas.length) {
      setIndicePregunta(siguienteIndex);
    } else {
      setJuegoTerminado(true);
    }
  };

  // Función para reiniciar el juego
  const reiniciarJuego = () => {
    setIndicePregunta(0);
    setCorrectas(0);
    setIncorrectas(0);
    setJuegoTerminado(false);
  };

  // Función para calcular el veredicto final
  const obtenerVeredicto = () => {
    if (correctas >= 4) {
      return {
        titulo: "¡Colombiano desde la cuuna mi papa",
        desc: "Te sabías casi todas. Desayunas changua o caldo con arepa fijote."
      };
    } else {
      return {
        titulo: "¡Falso colombiano debes ser de venezuela no? 🤡",
        desc: "Mucho extranjero o te falta viajar más por el país. ¡A estudiar la cultura!"
      };
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          width: "420px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#38bdf8" }}>
          Cultura General de Colombia 🇨🇴
        </h1>

        {!juegoTerminado ? (
          // PANTALLA DE JUEGO (Preguntas en curso)
          <div>
            <p style={{ color: "#94a3b8", marginBottom: "10px" }}>
              Pregunta {indicePregunta + 1} de {preguntas.length}
            </p>
            
            <h2 style={{ fontSize: "20px", marginBottom: "25px", minHeight: "60px" }}>
              {preguntas[indicePregunta].pregunta}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {preguntas[indicePregunta].opciones.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => manejarRespuesta(opcion)}
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    background: "#38bdf8",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "0.2s",
                  }}
                >
                  {opcion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // PANTALLA DE RESULTADOS (Juego terminado)
          <div>
            <h2 style={{ fontSize: "24px", color: correctas >= 4 ? "#22c55e" : "#ef4444", marginBottom: "10px" }}>
              {obtenerVeredicto().titulo}
            </h2>
            <p style={{ color: "#cbd5e1", marginBottom: "20px", fontSize: "16px" }}>
              {obtenerVeredicto().desc}
            </p>

            <hr style={{ border: "1px solid #334155", marginBottom: "20px" }} />

            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "25px" }}>
              <div>
                <span style={{ fontSize: "24px", color: "#22c55e", fontWeight: "bold" }}>{correctas}</span>
                <p style={{ color: "#94a3b8", fontSize: "14px" }}>Bien</p>
              </div>
              <div>
                <span style={{ fontSize: "24px", color: "#ef4444", fontWeight: "bold" }}>{incorrectas}</span>
                <p style={{ color: "#94a3b8", fontSize: "14px" }}>Mal</p>
              </div>
            </div>

            <button
              onClick={reiniciarJuego}
              style={{
                padding: "12px 25px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: "#e2e8f0",
                color: "#1e293b",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Intentar de nuevo 🔄
            </button>
          </div>
        )}
      </div>
    </main>
  );
}