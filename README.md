# 🚀 Introducción a React con Spring Boot

Este proyecto está diseñado para seguir una guía completa de introducción a React integrado con Spring Boot, desde los conceptos básicos hasta la comunicación entre frontend y backend.

## 👨‍💻 Autor

**Diego Chicuazuque**  
GitHub: [@marzo245](https://github.com/marzo245)  
Repositorio: [reactIntroduccion](https://github.com/marzo245/reactIntroduccion)

## 📋 Requisitos Previos

- **Java 17** o superior
- **Maven 3.6** o superior
- **Node.js** (versión 16 o superior)
- **npm** o yarn
- Editor de código (recomendado: VS Code)
- Conocimientos básicos de HTML, CSS, JavaScript y Java

## 🛠️ Instalación

### Backend (Spring Boot)
```bash
cd back
mvn clean install
```

### Frontend (React)
```bash
# En el directorio raíz del proyecto
npm install
```

## 🎯 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo de React (puerto 5173)
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar la calidad del código
- `mvn spring-boot:run` (en `/back`) - Inicia el servidor backend (puerto 8080)

## 🚀 Ejecución

### Opción 1: Ejecutar automáticamente (recomendado)

Para iniciar tanto el backend como el frontend automáticamente, usa las tareas de VS Code:

1. **Backend**: `Ctrl+Shift+P` → "Tasks: Run Task" → "Ejecutar Backend Spring Boot"
2. **Frontend**: `Ctrl+Shift+P` → "Tasks: Run Task" → "Ejecutar Frontend React"

### Opción 2: Ejecutar manualmente

**Backend (Spring Boot)**:
```bash
cd back
mvn spring-boot:run
```
El backend estará disponible en [http://localhost:8080](http://localhost:8080)

**Frontend (React)**:
```bash
npm run dev
```
El frontend estará disponible en [http://localhost:5173](http://localhost:5173)

## 📁 Estructura del Proyecto

```
reactIntroduccion/
├── back/                           # Backend Spring Boot
│   ├── src/
│   │   └── main/
│   │       ├── java/               # Código fuente Java
│   │       └── resources/          # Archivos de configuración
│   ├── .gitignore                  # Exclusiones del backend
│   └── pom.xml                     # Dependencias Maven
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/                 # Componentes reutilizables
│   ├── ejemplos/                   # Ejemplos prácticos de la guía
│   ├── App.jsx                     # Componente principal
│   ├── App.css
│   ├── index.css
│   └── main.jsx                    # Punto de entrada
├── .github/                        # Instrucciones de Copilot
├── .vscode/                        # Tareas de VS Code
├── index.html
├── package.json
├── vite.config.js
├── LICENSE                         # Licencia MIT
└── README.md                       # Este archivo
```

### 📂 Archivos y Carpetas Principales

- **[`back/`](back/)** - Backend Spring Boot con API REST
  - [`pom.xml`](back/pom.xml) - Configuración de dependencias Maven
  - [`application.properties`](back/src/main/resources/application.properties) - Configuración del backend
- **[`src/`](src/)** - Código fuente del frontend React
  - [`App.jsx`](src/App.jsx) - Componente principal de la aplicación
  - [`components/`](src/components/) - Componentes reutilizables
  - [`ejemplos/`](src/ejemplos/) - Ejemplos educativos paso a paso
- **[`package.json`](package.json)** - Dependencias y scripts del frontend
- **[`vite.config.js`](vite.config.js)** - Configuración de Vite
- **[`LICENSE`](LICENSE)** - Licencia MIT del proyecto

## 📚 Contenido de la Guía

### Ejemplos Básicos de React
1. **[Primer Componente](src/ejemplos/01-PrimerComponente.jsx)** - Crear tu primer componente en React
2. **[JSX](src/ejemplos/02-EjemploJSX.jsx)** - Sintaxis JSX y uso de variables
3. **[Props](src/ejemplos/03-EjemploProps.jsx)** - Pasar datos entre componentes
4. **[useState](src/ejemplos/04-EjemploEstado.jsx)** - Manejo de estado en componentes
5. **[Eventos](src/ejemplos/05-EjemploEventos.jsx)** - Manejo de eventos del usuario
6. **[Listas](src/ejemplos/06-EjemploListas.jsx)** - Renderizado de listas y elementos dinámicos
7. **[Renderizado Condicional](src/ejemplos/07-EjemploCondicional.jsx)** - Mostrar elementos según condiciones
8. **[Integración con API](src/ejemplos/08-EjemploAPI-correcto.jsx)** - Conectando React con Spring Boot

## 🔗 Comunicación Frontend-Backend

El **Ejemplo 8** demuestra la integración entre React y Spring Boot:

- **Frontend (React)**: Interfaz de usuario para gestionar personas
- **Backend (Spring Boot)**: API REST con base de datos H2
- **Operaciones**: Crear, ver y eliminar personas

### API Endpoints:
- `GET /api/personas` - Obtener todas las personas
- `POST /api/personas` - Crear nueva persona
- `DELETE /api/personas/{id}` - Eliminar persona

## 🎨 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de build rápida y moderna
- **ESLint** - Linter para mantener código consistente
- **CSS3** - Estilos modernos

### Backend
- **Spring Boot 3.2** - Framework de Java para aplicaciones web
- **Spring Data JPA** - Abstracción para el acceso a datos
- **H2 Database** - Base de datos en memoria para desarrollo
- **Maven** - Gestión de dependencias y construcción



## 📝 Notas Importantes

- **Orden de ejecución**: Inicia primero el backend, luego el frontend
- **Base de datos**: H2 en memoria (los datos se pierden al reiniciar)
- **Navegación**: Usa la barra superior para cambiar entre ejemplos
- **Cada ejemplo** incluye explicaciones y comentarios en el código

## 🆘 Solución de Problemas

### Si el frontend no carga:
1. Verifica que Node.js esté instalado
2. Ejecuta `npm install` en el directorio raíz
3. Revisa la consola del navegador

### Si el backend no inicia:
1. Verifica que Java 17+ esté instalado
2. Ejecuta `mvn clean install` en la carpeta `back/`
3. Comprueba que el puerto 8080 esté disponible

### Si no hay comunicación entre frontend y backend:
1. Inicia primero el backend (puerto 8080)
2. Luego inicia el frontend (puerto 5173)
3. Verifica que no haya errores CORS en la consola del navegador

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

### MIT License

```
Copyright (c) 2025 Diego Chicuazuque (@marzo245)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

¡Feliz aprendizaje con React y Spring Boot! 🎉
