// Ejemplo 6: Renderizado de Listas
// Cómo mostrar listas de elementos en React

import { useState } from 'react';

function EjemploListas() {
  // Lista estática
  const frutas = ['Manzana', 'Plátano', 'Naranja', 'Fresa', 'Uva'];
  
  // Lista de objetos
  const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, carrera: 'Informática' },
    { id: 2, nombre: 'Carlos', edad: 22, carrera: 'Diseño' },
    { id: 3, nombre: 'María', edad: 19, carrera: 'Matemáticas' },
    { id: 4, nombre: 'Pedro', edad: 21, carrera: 'Física' },
  ];

  // Estado para lista dinámica
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Hacer ejercicios', completada: true },
    { id: 3, texto: 'Crear un proyecto', completada: false },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');

  // Funciones para manejar la lista de tareas
  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      const nueva = {
        id: Date.now(), // Usar timestamp como ID único
        texto: nuevaTarea,
        completada: false
      };
      setTareas([...tareas, nueva]);
      setNuevaTarea('');
    }
  };

  const alternarTarea = (id) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id 
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ejemplo de Renderizado de Listas</h2>

      {/* Lista simple */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Lista Simple de Frutas</h3>
        <ul>
          {frutas.map((fruta, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>
              {fruta}
            </li>
          ))}
        </ul>
      </div>

      {/* Lista de objetos */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Lista de Estudiantes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {estudiantes.map((estudiante) => (
            <div 
              key={estudiante.id}
              style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '15px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h4>{estudiante.nombre}</h4>
              <p>Edad: {estudiante.edad} años</p>
              <p>Carrera: {estudiante.carrera}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lista interactiva (To-Do List) */}
      <div>
        <h3>Lista de Tareas Interactiva</h3>
        
        {/* Agregar nueva tarea */}
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nueva tarea..."
            style={{ 
              padding: '8px', 
              marginRight: '10px',
              width: '200px'
            }}
            onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
          />
          <button 
            onClick={agregarTarea}
            style={{ 
              padding: '8px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Agregar
          </button>
        </div>

        {/* Lista de tareas */}
        <div>
          {tareas.length === 0 ? (
            <p>No hay tareas. ¡Agrega una nueva!</p>
          ) : (
            tareas.map((tarea) => (
              <div 
                key={tarea.id}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  marginBottom: '8px',
                  backgroundColor: tarea.completada ? '#d4edda' : '#fff3cd',
                  border: `1px solid ${tarea.completada ? '#c3e6cb' : '#ffeeba'}`,
                  borderRadius: '4px'
                }}
              >
                <input 
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => alternarTarea(tarea.id)}
                  style={{ marginRight: '10px' }}
                />
                
                <span 
                  style={{ 
                    flex: 1,
                    textDecoration: tarea.completada ? 'line-through' : 'none',
                    color: tarea.completada ? '#6c757d' : '#000'
                  }}
                >
                  {tarea.texto}
                </span>
                
                <button 
                  onClick={() => eliminarTarea(tarea.id)}
                  style={{ 
                    padding: '5px 10px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        {/* Estadísticas */}
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
          <p><strong>Estadísticas:</strong></p>
          <p>Total de tareas: {tareas.length}</p>
          <p>Completadas: {tareas.filter(t => t.completada).length}</p>
          <p>Pendientes: {tareas.filter(t => !t.completada).length}</p>
        </div>
      </div>
    </div>
  );
}

export default EjemploListas;
