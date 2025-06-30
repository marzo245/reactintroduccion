// Ejemplo 2: JSX - Sintaxis de JavaScript XML
// JSX nos permite escribir HTML dentro de JavaScript

function EjemploJSX() {
  // Variables que podemos usar en JSX
  const nombre = "Ana";
  const edad = 25;
  const esEstudiante = true;

  return (
    <div>
      <h2>Ejemplo de JSX</h2>
      
      {/* Podemos usar variables dentro de llaves {} */}
      <p>Hola, mi nombre es {nombre}</p>
      <p>Tengo {edad} años</p>
      
      {/* Podemos hacer operaciones matemáticas */}
      <p>El año que viene tendré {edad + 1} años</p>
      
      {/* Renderizado condicional */}
      <p>
        {esEstudiante ? "Soy estudiante" : "No soy estudiante"}
      </p>
      
      {/* Podemos llamar funciones */}
      <p>Fecha actual: {new Date().toLocaleDateString()}</p>
    </div>
  );
}

export default EjemploJSX;
