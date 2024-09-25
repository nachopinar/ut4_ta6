import React, { useState } from "react";
// import uuid from "uuid"; // Librería para generar un id único

function App() {
  const [task, setTask] = useState(""); // Estado para la tarea actual
  const [tasks, setTasks] = useState([]); // Estado para la lista de tareas

  
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  // Maneja la adición de una nueva tarea
  const handleAddTask = () => {
    if (task.trim() !== "") { // Verifica que la tarea no esté vacía
      setTasks([...tasks, task]); // Agrega la nueva tarea a la lista, con los ... tengo se agrega el contenido anterior
      setTask(""); // Limpia el input
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Ingresa una tarea"
        style={{ padding: "5px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "5px 10px" }}>
        Agregar
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> //ya se que no es recomendable usar el indice pero no me andaba la libreria de uuid
        ))}
      </ul>
    </div>
  );
}

export default App;
