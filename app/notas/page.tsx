"use client";

import { useState } from "react";

export default function Notas() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const saveNote = () => {
    if (note.trim() === "") return;

    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-10">
        Notes
      </h1>

      <div className="w-full max-w-2xl bg-zinc-900 p-6 rounded-2xl shadow-2xl">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Escribe una nota..."
          className="w-full h-40 p-4 rounded-xl bg-zinc-800 border border-zinc-700 outline-none"
        />

        <button
          onClick={saveNote}
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl w-full font-bold"
        >
          Guardar Nota
        </button>

        <div className="mt-8 space-y-4">
          {notes.map((n, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-4 rounded-xl"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}