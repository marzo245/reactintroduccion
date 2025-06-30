// Ejemplo 3: Props - Pasar datos entre componentes
// Las props nos permiten pasar información de un componente padre a un hijo

// Componente hijo que recibe props
function TarjetaPersona({ nombre, edad, profesion, avatar }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '16px', 
      margin: '8px',
      maxWidth: '300px'
    }}>
      <img 
        src={avatar || "https://via.placeholder.com/100"} 
        alt={`Avatar de ${nombre}`}
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <h3>{nombre}</h3>
      <p>Edad: {edad} años</p>
      <p>Profesión: {profesion}</p>
    </div>
  );
}

// Componente padre que usa el componente hijo
function EjemploProps() {
  return (
    <div>
      <h2>Ejemplo de Props</h2>
      <p>Aquí pasamos datos a diferentes componentes:</p>
      
      <TarjetaPersona 
        nombre="María García"
        edad={28}
        profesion="Desarrolladora"
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
      />
      
      <TarjetaPersona 
        nombre="Carlos López"
        edad={32}
        profesion="Diseñador"
        avatar="https://randomuser.me/api/portraits/men/2.jpg"
      />
      
      <TarjetaPersona 
        nombre="Ana Rodríguez"
        edad={24}
        profesion="Estudiante"
      />
    </div>
  );
}

export default EjemploProps;
