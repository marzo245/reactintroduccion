// Ejemplo 5: Manejo de Eventos
// React maneja eventos de manera similar a HTML pero con algunas diferencias

import { useState } from 'react';

function EjemploEventos() {
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('#000000');
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Eventos de mouse
  const manejarClick = () => {
    setMensaje('¡Botón clickeado!');
  };

  const manejarMouseEnter = () => {
    setMensaje('Mouse sobre el botón');
  };

  const manejarMouseLeave = () => {
    setMensaje('Mouse fuera del botón');
  };

  // Eventos de teclado
  const manejarTecla = (evento) => {
    if (evento.key === 'Enter') {
      setMensaje(`Presionaste Enter. Texto: "${evento.target.value}"`);
    }
  };

  // Eventos de formulario
  const manejarCambioFormulario = (evento) => {
    const { name, value } = evento.target;
    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault(); // Previene el comportamiento por defecto
    alert(`Formulario enviado:\nNombre: ${formulario.nombre}\nEmail: ${formulario.email}\nMensaje: ${formulario.mensaje}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ejemplo de Manejo de Eventos</h2>
      
      {/* Mensaje de estado */}
      <p style={{ 
        padding: '10px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '5px',
        minHeight: '20px'
      }}>
        {mensaje || 'Interactúa con los elementos...'}
      </p>

      {/* Eventos de mouse */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Eventos de Mouse</h3>
        <button 
          onClick={manejarClick}
          onMouseEnter={manejarMouseEnter}
          onMouseLeave={manejarMouseLeave}
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Pasa el mouse y haz click
        </button>
      </div>

      {/* Eventos de teclado */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Eventos de Teclado</h3>
        <input 
          type="text"
          onKeyDown={manejarTecla}
          placeholder="Escribe algo y presiona Enter"
          style={{ 
            padding: '8px', 
            fontSize: '16px',
            width: '300px'
          }}
        />
      </div>

      {/* Evento de cambio */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Evento de Cambio</h3>
        <label>
          Elige un color: 
          <input 
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
        <div 
          style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: color,
            border: '1px solid #ccc',
            marginTop: '10px'
          }}
        ></div>
      </div>

      {/* Formulario */}
      <div>
        <h3>Formulario Completo</h3>
        <form onSubmit={manejarEnvio} style={{ maxWidth: '400px' }}>
          <div style={{ marginBottom: '10px' }}>
            <input 
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambioFormulario}
              placeholder="Tu nombre"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <input 
              type="email"
              name="email"
              value={formulario.email}
              onChange={manejarCambioFormulario}
              placeholder="Tu email"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <textarea 
              name="mensaje"
              value={formulario.mensaje}
              onChange={manejarCambioFormulario}
              placeholder="Tu mensaje"
              rows="4"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <button 
            type="submit"
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EjemploEventos;
