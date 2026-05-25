"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-10">
        Task App
      </h1>

      <div className="w-full max-w-2xl bg-zinc-900 p-6 rounded-2xl shadow-2xl">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Escribe una tarea..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700"
          />

          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl text-xl font-bold"
          >
            +
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {tasks.map((t, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-4 rounded-xl flex justify-between items-center"
            >
              <span className="text-lg">
                {t}
              </span>

              <button
                onClick={() =>
                  setTasks(tasks.filter((_, i) => i !== index))
                }
                className="bg-red-500 px-4 py-2 rounded-lg"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}