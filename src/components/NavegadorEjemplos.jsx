// Navegador de Ejemplos - Permite ver todos los ejemplos de React
import { useState } from 'react';

// Importar todos los ejemplos
import PrimerComponente from '../ejemplos/01-PrimerComponente';
import EjemploJSX from '../ejemplos/02-EjemploJSX';
import EjemploProps from '../ejemplos/03-EjemploProps';
import EjemploEstado from '../ejemplos/04-EjemploEstado';
import EjemploEventos from '../ejemplos/05-EjemploEventos';
import EjemploListas from '../ejemplos/06-EjemploListas';
import EjemploCondicional from '../ejemplos/07-EjemploCondicional';
import EjemploAPI from '../ejemplos/08-EjemploAPI-correcto';

function NavegadorEjemplos() {
  const [ejemploActivo, setEjemploActivo] = useState('intro');

  const ejemplos = [
    { 
      id: 'intro', 
      titulo: 'Introducción', 
      descripcion: 'Bienvenida al curso de React',
      componente: null 
    },
    { 
      id: 'primer-componente', 
      titulo: '1. Primer Componente', 
      descripcion: 'Crear tu primer componente en React',
      componente: <PrimerComponente /> 
    },
    { 
      id: 'jsx', 
      titulo: '2. JSX', 
      descripcion: 'Sintaxis JSX y uso de variables',
      componente: <EjemploJSX /> 
    },
    { 
      id: 'props', 
      titulo: '3. Props', 
      descripcion: 'Pasar datos entre componentes',
      componente: <EjemploProps /> 
    },
    { 
      id: 'estado', 
      titulo: '4. useState', 
      descripcion: 'Manejo de estado en componentes',
      componente: <EjemploEstado /> 
    },
    { 
      id: 'eventos', 
      titulo: '5. Eventos', 
      descripcion: 'Manejo de eventos del usuario',
      componente: <EjemploEventos /> 
    },
    { 
      id: 'listas', 
      titulo: '6. Listas', 
      descripcion: 'Renderizado de listas y elementos dinámicos',
      componente: <EjemploListas /> 
    },
    { 
      id: 'condicional', 
      titulo: '7. Renderizado Condicional', 
      descripcion: 'Mostrar elementos según condiciones',
      componente: <EjemploCondicional /> 
    },
    { 
      id: 'api', 
      titulo: '8. Integración con API', 
      descripcion: 'Conectando React con Spring Boot',
      componente: <EjemploAPI /> 
    }
  ];

  const ejemploSeleccionado = ejemplos.find(ej => ej.id === ejemploActivo);

  const PaginaIntro = () => (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>🚀 Introducción a React</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
        Bienvenido al curso interactivo de React. Aquí aprenderás los conceptos 
        fundamentales de React paso a paso con ejemplos prácticos.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '40px'
      }}>
        {ejemplos.slice(1).map((ejemplo) => (
          <div 
            key={ejemplo.id}
            style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onClick={() => setEjemploActivo(ejemplo.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>
              {ejemplo.titulo}
            </h3>
            <p style={{ margin: 0, color: '#666' }}>
              {ejemplo.descripcion}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e7f3ff', borderRadius: '8px' }}>
        <h3>💡 Qué vas a aprender:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li>Crear componentes funcionales</li>
          <li>Usar JSX para escribir interfaces</li>
          <li>Pasar datos con props</li>
          <li>Manejar estado con useState</li>
          <li>Responder a eventos del usuario</li>
          <li>Renderizar listas dinámicas</li>
          <li>Mostrar contenido condicionalmente</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Barra de navegación */}
      <nav style={{ 
        backgroundColor: '#343a40',
        padding: '10px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center',
          padding: '0 20px'
        }}>
          <h2 style={{ 
            color: 'white', 
            margin: '0 30px 0 0',
            fontSize: '20px'
          }}>
            React Introducción
          </h2>
          
          <div style={{ 
            display: 'flex', 
            gap: '5px',
            flexWrap: 'wrap',
            flex: 1
          }}>
            {ejemplos.map((ejemplo) => (
              <button
                key={ejemplo.id}
                onClick={() => setEjemploActivo(ejemplo.id)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: ejemploActivo === ejemplo.id ? '#007bff' : 'transparent',
                  color: 'white',
                  border: '1px solid #007bff',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (ejemploActivo !== ejemplo.id) {
                    e.target.style.backgroundColor = '#007bff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (ejemploActivo !== ejemplo.id) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {ejemplo.titulo}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main>
        {ejemploSeleccionado?.componente || <PaginaIntro />}
      </main>

      {/* Pie de página */}
      <footer style={{ 
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #dee2e6',
        marginTop: '40px'
      }}>
        <p style={{ margin: 0, color: '#6c757d' }}>
          📚 Curso de Introducción a React - Ejemplos interactivos paso a paso
        </p>
      </footer>
    </div>
  );
}

export default NavegadorEjemplos;
