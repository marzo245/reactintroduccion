// Ejemplo 8: Integración con API - Conectando React con Spring Boot
// Este ejemplo muestra cómo hacer peticiones HTTP al backend usando fetch API

import { useState, useEffect } from 'react';

function EjemploAPI() {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [nuevaPersona, setNuevaPersona] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: ''
  });

  // URL base del backend
  const API_BASE_URL = 'http://localhost:8080/api/personas';

  // useEffect para cargar datos al montar el componente
  useEffect(() => {
    cargarPersonas();
  }, []);

  // Función para obtener todas las personas del backend
  const cargarPersonas = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(API_BASE_URL);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setPersonas(data);
    } catch (err) {
      setError(`Error al cargar personas: ${err.message}`);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar una nueva persona
  const agregarPersona = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!nuevaPersona.nombre || !nuevaPersona.apellido || !nuevaPersona.email) {
      setError('Por favor, completa todos los campos obligatorios');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...nuevaPersona,
          edad: parseInt(nuevaPersona.edad) || 0
        })
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      // Limpiar formulario
      setNuevaPersona({
        nombre: '',
        apellido: '',
        email: '',
        edad: ''
      });

      // Recargar la lista
      await cargarPersonas();
      
    } catch (err) {
      setError(`Error al agregar persona: ${err.message}`);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para eliminar una persona
  const eliminarPersona = async (id) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta persona?')) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      // Recargar la lista
      await cargarPersonas();
      
    } catch (err) {
      setError(`Error al eliminar persona: ${err.message}`);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Manejar cambios en el formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevaPersona(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>Ejemplo de Integración con API</h2>
      <p>Este ejemplo muestra cómo React se comunica con el backend Spring Boot.</p>

      {/* Mensaje de error */}
      {error && (
        <div style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '10px',
          borderRadius: '4px',
          marginBottom: '20px',
          border: '1px solid #f5c6cb'
        }}>
          {error}
        </div>
      )}

      {/* Estado de carga */}
      {loading && (
        <div style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#e3f2fd',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <p>⏳ Cargando...</p>
        </div>
      )}

      {/* Formulario para agregar nueva persona */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h3>Agregar Nueva Persona</h3>
        <form onSubmit={agregarPersona}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <input
              type="text"
              name="nombre"
              value={nuevaPersona.nombre}
              onChange={manejarCambio}
              placeholder="Nombre *"
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
              required
            />
            <input
              type="text"
              name="apellido"
              value={nuevaPersona.apellido}
              onChange={manejarCambio}
              placeholder="Apellido *"
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
              required
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <input
              type="email"
              name="email"
              value={nuevaPersona.email}
              onChange={manejarCambio}
              placeholder="Email *"
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
              required
            />
            <input
              type="number"
              name="edad"
              value={nuevaPersona.edad}
              onChange={manejarCambio}
              placeholder="Edad"
              min="0"
              max="120"
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Agregando...' : 'Agregar Persona'}
          </button>
        </form>
      </div>

      {/* Lista de personas */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3>Lista de Personas ({personas.length})</h3>
          <button
            onClick={cargarPersonas}
            disabled={loading}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            🔄 Actualizar
          </button>
        </div>

        {personas.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#e9ecef',
            borderRadius: '8px'
          }}>
            <p>No hay personas registradas.</p>
            <p>Agrega una nueva persona usando el formulario de arriba.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
            {personas.map((persona) => (
              <div
                key={persona.id}
                style={{
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  padding: '15px',
                  backgroundColor: 'white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <h4 style={{ margin: '0 0 10px 0', color: '#495057' }}>
                  {persona.nombre} {persona.apellido}
                </h4>
                <p style={{ margin: '5px 0', color: '#6c757d' }}>
                  📧 {persona.email}
                </p>
                <p style={{ margin: '5px 0', color: '#6c757d' }}>
                  🎂 {persona.edad} años
                </p>
                <p style={{ margin: '5px 0', fontSize: '12px', color: '#adb5bd' }}>
                  ID: {persona.id}
                </p>
                <button
                  onClick={() => eliminarPersona(persona.id)}
                  disabled={loading}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    padding: '6px 12px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginTop: '10px',
                    fontSize: '12px'
                  }}
                >
                  🗑️ Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Información técnica */}
      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        <h4>💡 Conceptos Técnicos Utilizados:</h4>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li><strong>useEffect:</strong> Para cargar datos cuando el componente se monta</li>
          <li><strong>fetch API:</strong> Para realizar peticiones HTTP al backend</li>
          <li><strong>async/await:</strong> Para manejar operaciones asíncronas</li>
          <li><strong>Estados de carga:</strong> Para mostrar feedback al usuario</li>
          <li><strong>Manejo de errores:</strong> Para gestionar fallos en las peticiones</li>
          <li><strong>CRUD completo:</strong> Create (POST), Read (GET), Delete (DELETE)</li>
        </ul>
      </div>
    </div>
  );
}

export default EjemploAPI;
