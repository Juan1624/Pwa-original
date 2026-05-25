"use client";

import { useState } from "react";

export default function PreguntasPage() {
  const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Colombia?",
      opciones: ["Bogotá", "Medellín", "Cali", "Cartagena"],
      respuesta: "Bogotá",
    },
    {
      pregunta: "¿Quién escribió Cien años de soledad?",
      opciones: [
        "Gabriel García Márquez",
        "Pablo Neruda",
        "Julio Cortázar",
        "Mario Vargas Llosa",
      ],
      respuesta: "Gabriel García Márquez",
    },
    {
      pregunta: "¿Cuál es la moneda de Colombia?",
      opciones: ["Peso", "Dólar", "Euro", "Bolívar"],
      respuesta: "Peso",
    },
    {
      pregunta: "¿Qué colores tiene la bandera de Colombia?",
      opciones: [
        "Rojo y blanco",
        "Azul y blanco",
        "Amarillo, azul y rojo",
        "Verde y amarillo",
      ],
      respuesta: "Amarillo, azul y rojo",
    },
  ];

  const [indice, setIndice] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const verificarRespuesta = (opcion: string) => {
    if (opcion === preguntas[indice].respuesta) {
      setMensaje("✅ Correcto");
    } else {
      setMensaje(
        `❌ Incorrecto. La respuesta correcta es: ${preguntas[indice].respuesta}`
      );
    }
  };

  const siguientePregunta = () => {
    setIndice((prev) => (prev + 1) % preguntas.length);
    setMensaje("");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#38bdf8", marginBottom: "20px" }}>
          Cultura General 🇨🇴
        </h1>

        <h2 style={{ marginBottom: "20px" }}>
          {preguntas[indice].pregunta}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {preguntas[indice].opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => verificarRespuesta(opcion)}
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "#38bdf8",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              {opcion}
            </button>
          ))}
        </div>

        {mensaje && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            {mensaje}
          </p>
        )}

        <button
          onClick={siguientePregunta}
          style={{
            marginTop: "20px",
            padding: "12px",
            width: "100%",
            borderRadius: "10px",
            border: "none",
            background: "#22c55e",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Siguiente Pregunta
        </button>
      </div>
    </main>
  );
}