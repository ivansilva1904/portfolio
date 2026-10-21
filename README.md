# Data Analyst Portfolio Website

Un portfolio web moderno, elegante y optimizado para **Analistas de Datos**, desarrollado con **HTML5, CSS3 y JavaScript puro (Vanilla JS)** sin dependencias pesadas.

---

## 🚀 Características Implementadas

Basado exactamente en los bocetos y requerimientos proporcionados:

- **Sticky Header Moderno**:
  - Navegación rápida con scroll suave hacia: `About`, `Skills`, `Projects`, `Work Experience`.
  - Efecto de desenfoque de fondo (*glassmorphism*) al desplazarse.
  - **Selector de Idioma Dinámico**: Alterna al instante entre **Inglés** (idioma por defecto) y **Español** sin recargar la página, guardando la preferencia en `localStorage`.
  - Menú hamburguesa responsivo para dispositivos móviles.

- **Tema Oscuro Premium (Sin modo claro)**:
  - Paleta de colores sobria y profesional inspirada en el análisis de datos (fondos oscuros profundos con detalles en cian `#38bdf8`, índigo `#818cf8` y esmeralda `#34d399`).
  - Tipografías modernas de alta legibilidad en color blanco: *Plus Jakarta Sans* y *JetBrains Mono*.

- **Sección About (Sobre Mí)**:
  - Recuadro dedicado con marco para foto de perfil (incluye avatar vectorial temático por defecto).
  - Título y descripción profesional enfocada en analítica de negocio y toma de decisiones.
  - Botones con iconos y enlaces directos a **LinkedIn**, **GitHub** y **Email**.

- **Sección Skills (Habilidades Técnicas e Idiomas)**:
  - Cada habilidad técnica (*Python, Excel, SQL, Power BI, Tableau, R, ETL, Git*) está contenida en su **propio recuadro** con su respectivo icono estilizado y sub-herramientas.
  - Cada idioma (*Español Nativo, Inglés B2, Chino Mandarín HSK1*) cuenta con su recuadro individual, bandera y etiqueta de nivel.

- **Sección Projects (Proyectos)**:
  - Cada proyecto posee su **recuadro independiente**.
  - Formato de **bullet points** estilizados para destacar metodología, volumen de datos procesados e impacto en el negocio.
  - Botones para ver el **Repositorio de GitHub** y el **Dashboard / Demo en Vivo**.

- **Sección Work Experience (Experiencia Laboral)**:
  - Cada experiencia laboral se presenta en su **propio recuadro** con rol, empresa, fechas, modalidad y lista en formato **bullet points**.
  - **Línea vertical continua** que une cronológicamente cada experiencia laboral, con nodos indicadores luminosos.

- **Botón Flotante "Volver Arriba" (Back to Top)**:
  - Ubicado en la esquina inferior derecha.
  - Aparece suavemente al hacer scroll hacia abajo y permite volver al inicio con un solo clic.

---

## 📂 Estructura del Proyecto

```plaintext
portfolio/
├── index.html         # Estructura semántica del sitio
├── style.css          # Estilos del tema oscuro, componentes y diseño responsivo
├── script.js          # Lógica de traducción EN/ES, scroll activo y navegación
├── assets/
│   └── avatar.svg     # Avatar vectorial moderno de reemplazo
└── README.md          # Guía de uso y personalización
```

---

## 🛠️ Cómo Personalizar tu Información

1. **Tu Foto de Perfil**:
   - Guarda tu foto dentro de la carpeta `assets/` (por ejemplo `assets/mi-foto.jpg`).
   - En `index.html`, busca la línea:
     ```html
     <img src="assets/avatar.svg" alt="Profile Photo" class="profile-photo" id="profile-img">
     ```
   - Reemplázala por:
     ```html
     <img src="assets/mi-foto.jpg" alt="Profile Photo" class="profile-photo" id="profile-img">
     ```

2. **Tus Redes Sociales y Correo**:
   - En `index.html`, busca la clase `.about-social-links` y actualiza los atributos `href`:
     - LinkedIn: `href="https://linkedin.com/in/tu-usuario"`
     - GitHub: `href="https://github.com/tu-usuario"`
     - Email: `href="mailto:tu-correo@gmail.com"`

3. **Modificar o Agregar Textos y Traducciones**:
   - Los textos del sitio se gestionan tanto en `index.html` (para la carga inicial en inglés) como en el objeto `translations` dentro de `script.js` (para las versiones en inglés y español).
   - Puedes editar fácilmente las descripciones, proyectos y experiencias en `script.js` para mantener sincronizados ambos idiomas.

---

## 🌐 Cómo Abrir el Sitio

No necesitas instalar servidores ni herramientas adicionales:
- Haz doble clic en el archivo `index.html` para abrirlo directamente en tu navegador web preferido (Chrome, Edge, Firefox, Safari).
- Si usas VS Code, también puedes hacer clic derecho en `index.html` y seleccionar **"Open with Live Server"**.
