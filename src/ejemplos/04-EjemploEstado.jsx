// Ejemplo 4: useState - Manejo de estado en componentes
// useState nos permite agregar estado a los componentes funcionales

import { useState } from 'react';

function ContadorSimple() {
  // useState retorna un array con dos elementos:
  // 1. El valor actual del estado
  // 2. Una función para actualizar el estado
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>Contador Simple</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Valor: {contador}
      </p>
      
      <div>
        <button onClick={decrementar} style={{ margin: '5px' }}>
          - Decrementar
        </button>
        <button onClick={reiniciar} style={{ margin: '5px' }}>
          Reiniciar
        </button>
        <button onClick={incrementar} style={{ margin: '5px' }}>
          + Incrementar
        </button>
      </div>
    </div>
  );
}

function EjemploEstado() {
  // Ejemplo con diferentes tipos de estado
  const [nombre, setNombre] = useState('');
  const [mostrarSaludo, setMostrarSaludo] = useState(false);

  const manejarCambioNombre = (evento) => {
    setNombre(evento.target.value);
  };

  const alternarSaludo = () => {
    setMostrarSaludo(!mostrarSaludo);
  };

  return (
    <div>
      <h2>Ejemplo de useState</h2>
      
      <ContadorSimple />
      
      <div style={{ padding: '20px', border: '1px solid #ddd', margin: '20px 0' }}>
        <h3>Entrada de Texto</h3>
        <input 
          type="text"
          value={nombre}
          onChange={manejarCambioNombre}
          placeholder="Escribe tu nombre"
          style={{ padding: '8px', margin: '8px' }}
        />
        
        <button onClick={alternarSaludo} style={{ margin: '8px' }}>
          {mostrarSaludo ? 'Ocultar' : 'Mostrar'} Saludo
        </button>
        
        {mostrarSaludo && nombre && (
          <p>¡Hola, {nombre}! 👋</p>
        )}
      </div>
    </div>
  );
}

export default EjemploEstado;
