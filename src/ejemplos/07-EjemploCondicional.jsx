// Ejemplo 7: Renderizado Condicional
// Mostrar diferentes elementos según condiciones

import { useState } from 'react';

function EjemploCondicional() {
  const [usuario, setUsuario] = useState(null);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [tema, setTema] = useState('claro');
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  // Simular login/logout
  const iniciarSesion = () => {
    setUsuario({
      nombre: 'María González',
      email: 'maria@ejemplo.com',
      rol: 'admin',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    });
    setMensaje({ tipo: 'exito', texto: 'Sesión iniciada correctamente' });
  };

  const cerrarSesion = () => {
    setUsuario(null);
    setMostrarDetalles(false);
    setMensaje({ tipo: 'info', texto: 'Sesión cerrada' });
  };

  // Componente de mensaje
  const Mensaje = ({ tipo, texto }) => {
    if (!texto) return null; // No renderizar si no hay texto

    const colores = {
      exito: { backgroundColor: '#d4edda', color: '#155724', border: '#c3e6cb' },
      error: { backgroundColor: '#f8d7da', color: '#721c24', border: '#f5c6cb' },
      info: { backgroundColor: '#d1ecf1', color: '#0c5460', border: '#bee5eb' },
      advertencia: { backgroundColor: '#fff3cd', color: '#856404', border: '#ffeaa7' }
    };

    return (
      <div style={{
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: `1px solid ${colores[tipo]?.border}`,
        ...colores[tipo]
      }}>
        {texto}
      </div>
    );
  };

  // Estilos para el tema
  const estilosContenedor = {
    padding: '20px',
    backgroundColor: tema === 'oscuro' ? '#2c3e50' : '#ffffff',
    color: tema === 'oscuro' ? '#ecf0f1' : '#2c3e50',
    minHeight: '100vh',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={estilosContenedor}>
      <h2>Ejemplo de Renderizado Condicional</h2>

      {/* Control de tema */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}
          style={{
            padding: '8px 16px',
            backgroundColor: tema === 'oscuro' ? '#3498db' : '#2980b9',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cambiar a tema {tema === 'claro' ? 'oscuro' : 'claro'}
        </button>
      </div>

      {/* Mensaje */}
      <Mensaje tipo={mensaje.tipo} texto={mensaje.texto} />

      {/* Renderizado condicional principal */}
      {usuario ? (
        // Usuario logueado
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '20px',
            backgroundColor: tema === 'oscuro' ? '#34495e' : '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <img 
              src={usuario.avatar} 
              alt="Avatar"
              style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%',
                marginRight: '15px'
              }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 5px 0' }}>
                Bienvenido, {usuario.nombre}
              </h3>
              <p style={{ margin: '0', opacity: 0.7 }}>
                {usuario.email}
              </p>
              {/* Renderizado condicional según el rol */}
              {usuario.rol === 'admin' && (
                <span style={{ 
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  ADMINISTRADOR
                </span>
              )}
            </div>
            
            <div>
              <button 
                onClick={() => setMostrarDetalles(!mostrarDetalles)}
                style={{
                  padding: '6px 12px',
                  marginRight: '8px',
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {mostrarDetalles ? 'Ocultar' : 'Ver'} Detalles
              </button>
              
              <button 
                onClick={cerrarSesion}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>

          {/* Detalles del usuario (renderizado condicional) */}
          {mostrarDetalles && (
            <div style={{
              padding: '20px',
              backgroundColor: tema === 'oscuro' ? '#34495e' : '#e9ecef',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <h4>Detalles del Usuario</h4>
              <p><strong>Nombre:</strong> {usuario.nombre}</p>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Rol:</strong> {usuario.rol}</p>
              <p><strong>Último acceso:</strong> {new Date().toLocaleString()}</p>
              
              {/* Renderizado condicional según permisos */}
              {usuario.rol === 'admin' ? (
                <div style={{ marginTop: '15px' }}>
                  <h5>Panel de Administrador</h5>
                  <button style={{ margin: '5px', padding: '8px 12px' }}>
                    Gestionar Usuarios
                  </button>
                  <button style={{ margin: '5px', padding: '8px 12px' }}>
                    Ver Reportes
                  </button>
                  <button style={{ margin: '5px', padding: '8px 12px' }}>
                    Configuración
                  </button>
                </div>
              ) : (
                <div style={{ marginTop: '15px' }}>
                  <h5>Panel de Usuario</h5>
                  <button style={{ margin: '5px', padding: '8px 12px' }}>
                    Mi Perfil
                  </button>
                  <button style={{ margin: '5px', padding: '8px 12px' }}>
                    Mis Documentos
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        // Usuario no logueado
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: tema === 'oscuro' ? '#34495e' : '#f8f9fa',
          borderRadius: '8px'
        }}>
          <h3>No has iniciado sesión</h3>
          <p>Inicia sesión para acceder a tu cuenta</p>
          <button 
            onClick={iniciarSesion}
            style={{
              padding: '12px 24px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      )}

      {/* Ejemplos adicionales de renderizado condicional */}
      <div style={{ marginTop: '30px' }}>
        <h3>Otros Ejemplos de Renderizado Condicional</h3>
        
        {/* Operador ternario */}
        <p>
          El tema actual es: {tema === 'claro' ? '☀️ Claro' : '🌙 Oscuro'}
        </p>
        
        {/* Operador AND lógico */}
        {usuario && usuario.rol === 'admin' && (
          <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>
            🔒 Tienes permisos de administrador
          </p>
        )}
        
        {/* Múltiples condiciones */}
        {(() => {
          if (!usuario) {
            return <p>👤 Usuario invitado</p>;
          } else if (usuario.rol === 'admin') {
            return <p>🔧 Modo administrador activo</p>;
          } else {
            return <p>👨‍💼 Usuario estándar</p>;
          }
        })()}
      </div>
    </div>
  );
}

export default EjemploCondicional;
