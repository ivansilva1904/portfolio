/**
 * Data Analyst Portfolio - JavaScript
 * - Dynamic bilingual translations (EN / ES) with persistent localStorage
 * - Active navigation highlighting on scroll
 * - Sticky header appearance adjustment on scroll
 * - Floating Back-to-Top button behavior
 * - Mobile responsive drawer menu
 */

// ===================================================================
// 1. TRANSLATION DICTIONARY (EN / ES)
// ===================================================================
const translations = {
  en: {
    // Nav
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Work Experience",

    // About
    about_title: "About",
    about_desc: "Hi! I'm Ivan Silva, a <b>Data Analyst</b> from <b>Corrientes, Argentina</b> 🇦🇷. I enjoy working throughout the whole process of transforming plain data into actionable insights that help people to inform themselves better and take better decisions.",

    // Skills
    skills_title: "Skills",
    skills_technical_title: "Technical Skills",
    skill_python_cat: "Pandas, NumPy, Scikit-learn",
    skill_excel_cat: "Power Query, Pivot Tables",
    skill_sql_cat: "PostgreSQL, MySQL, SQL Server, Azure",
    skill_powerbi_cat: "Dashboards, DAX, Data Modeling",
    skill_tableau_cat: "Dashboards, Data Modeling",
    skill_r_cat: "Statistical Computing, ggplot2",
    skill_etl_name: "ETL & Data Prep",
    skill_etl_cat: "Pipelines, Data Cleaning",
    skill_git_cat: "Version Control",

    skills_languages_title: "Languages",
    lang_spanish_title: "Spanish",
    lang_spanish_level: "Native",
    lang_badge_native: "Native",
    lang_english_title: "English",
    lang_english_level: "B2 - Professional Working",
    lang_chinese_title: "Mandarin Chinese",
    lang_chinese_level: "HSK1 - Elementary",

    // Projects
    projects_title: "Projects",
    project_link_repo: "GitHub Repository",
    project_link_demo: "Live Dashboard",

    p1_title: "E-Commerce Customer Segmentation & Lifetime Value",
    p1_b1: "Extracted and cleaned over 350,000 transaction records using SQL queries and Python Pandas, identifying high-value buyer clusters.",
    p1_b2: "Implemented RFM (Recency, Frequency, Monetary) segmentation and K-Means clustering algorithm to classify customer churn risk.",
    p1_b3: "Built an automated interactive Power BI dashboard featuring dynamic retention cohorts, cohort LTV projections, and margin analysis.",
    p1_b4: "Delivered data-driven strategic recommendations that contributed to a 19% increase in targeted campaign click-through rates.",

    p2_title: "Financial Anomaly & Fraud Risk Detection Engine",
    p2_b1: "Engineered predictive data pipelines handling heavily skewed datasets with over 1.2 million credit card transactions.",
    p2_b2: "Applied SMOTE resampling techniques and trained gradient boosting models, reaching a 94.6% ROC-AUC score for fraud classification.",
    p2_b3: "Constructed automated outlier detection alerts that flag suspicious multi-country transfer behaviors in real time.",
    p2_b4: "Deployed a lightweight interactive web dashboard with Streamlit for compliance officers to inspect flagged accounts.",

    p3_title: "Supply Chain Logistics & Inventory Optimization",
    p3_b1: "Consolidated multi-warehouse operational data into a unified SQL star schema, eliminating data inconsistencies across 4 distribution hubs.",
    p3_b2: "Designed an executive Tableau suite monitoring lead time variances, safety stock thresholds, and supplier reliability ratings.",
    p3_b3: "Identified supply chain bottlenecks and seasonal demand spikes using time series forecasting models.",
    p3_b4: "Helped warehouse management reduce out-of-stock incidents by 14% and cut excess holding costs by $78,000 annually.",

    // Experience
    experience_title: "Work Experience",

    exp1_role: "Senior Data Analyst",
    exp1_company: "Nexus Analytics Solutions",
    exp1_dates: "2023 - Present",
    exp1_loc: "Remote",
    exp1_b1: "Lead end-to-end data analytics lifecycle, architecting 15+ automated production dashboards in Power BI and Tableau for senior management.",
    exp1_b2: "Optimized complex SQL stored procedures and database indexation, cutting query execution time across massive datasets by 42%.",
    exp1_b3: "Partnered with cross-functional leadership to define strategic KPI frameworks that guide product development and revenue forecasting.",
    exp1_b4: "Mentored a team of 4 junior analysts on data storytelling, exploratory analysis in Python, and code review standards.",

    exp2_role: "Business Intelligence Analyst",
    exp2_company: "Omni Retail Group",
    exp2_dates: "2021 - 2023",
    exp2_loc: "Hybrid",
    exp2_b1: "Analyzed multi-channel customer journeys, sales funnels, and seasonal promotional performance using PostgreSQL and Excel.",
    exp2_b2: "Automated recurring weekly and monthly reporting pipelines using Python scripts and Power Query, eliminating ~15 hours of manual work per week.",
    exp2_b3: "Conducted A/B testing statistical analyses on pricing strategies, advising marketing teams on conversion optimization.",

    exp3_role: "Junior Data Analyst",
    exp3_company: "MetricPulse Consulting",
    exp3_dates: "2020 - 2021",
    exp3_loc: "On-site",
    exp3_b1: "Supported data ingestion, cleansing, normalization, and QA audits across raw client datasets from diverse third-party sources.",
    exp3_b2: "Developed clean, intuitive summary reports and executive slide decks translating technical numbers into business takeaways.",
    exp3_b3: "Created and maintained the team's data dictionary documentation and SQL query repository for recurring reporting requests.",

    // Footer
    footer_rights: "Portfolio"
  },

  es: {
    // Nav
    nav_about: "Sobre Mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_experience: "Experiencia Laboral",

    // About
    about_title: "Sobre Mí",
    about_desc: "¡Hola! Soy Ivan Silva, un <b>Data Analyst</b> de <b>Corrientes, Argentina</b> 🇦🇷. Disfruto trabajando a lo largo de todo el proceso de transformar datos sin procesar en conocimiento accionable que ayude a las personas a informarse mejor y tomar mejores decisiones.",

    // Skills
    skills_title: "Habilidades",
    skills_technical_title: "Habilidades Técnicas",
    skill_python_cat: "Pandas, NumPy, Scikit-learn",
    skill_excel_cat: "Power Query, Tablas Dinámicas",
    skill_sql_cat: "PostgreSQL, MySQL, SQL Server, Azure",
    skill_powerbi_cat: "Tableros, DAX, Modelado de Datos",
    skill_tableau_cat: "Tableros, Modelado de Datos",
    skill_r_cat: "Cálculo Estadístico, ggplot2",
    skill_etl_name: "ETL y Prep de Datos",
    skill_etl_cat: "Pipelines, Limpieza de Datos",
    skill_git_cat: "Control de Versiones",

    skills_languages_title: "Idiomas",
    lang_spanish_title: "Español",
    lang_spanish_level: "Nativo",
    lang_badge_native: "Nativo",
    lang_english_title: "Inglés",
    lang_english_level: "B2 - Profesional / Intermedio Avanzado",
    lang_chinese_title: "Chino Mandarín",
    lang_chinese_level: "HSK1 - Elemental",

    // Projects
    projects_title: "Proyectos",
    project_link_repo: "Repositorio GitHub",
    project_link_demo: "Dashboard En Vivo",

    p1_title: "Segmentación de Clientes y Valor del Ciclo de Vida (LTV) en E-Commerce",
    p1_b1: "Extracción y limpieza de más de 350.000 registros de transacciones mediante consultas SQL y Python Pandas, identificando grupos de compradores de alto valor.",
    p1_b2: "Implementación de modelos RFM (Recencia, Frecuencia, Monetario) y algoritmo de clustering K-Means para clasificar el riesgo de abandono de clientes (churn).",
    p1_b3: "Diseño de un dashboard interactivo automatizado en Power BI con cohortes de retención dinámica, proyecciones de LTV y análisis de rentabilidad.",
    p1_b4: "Entrega de recomendaciones estratégicas basadas en datos que generaron un aumento del 19% en la tasa de clics de campañas personalizadas.",

    p2_title: "Motor de Detección de Anomalías y Riesgo de Fraude Financiero",
    p2_b1: "Construcción de pipelines predictivos sobre datasets altamente desbalanceados de más de 1.2 millones de transacciones con tarjeta de crédito.",
    p2_b2: "Aplicación de técnicas de remuestreo SMOTE y entrenamiento de modelos Gradient Boosting, alcanzando un puntaje ROC-AUC del 94.6% en clasificación de fraude.",
    p2_b3: "Configuración de alertas automatizadas de detección de anomalías para identificar comportamientos sospechosos entre múltiples países en tiempo real.",
    p2_b4: "Despliegue de una interfaz web interactiva y ligera en Streamlit para facilitar la auditoría visual por parte de los oficiales de cumplimiento.",

    p3_title: "Optimización de Inventario y Logística en Cadena de Suministro",
    p3_b1: "Consolidación de datos operacionales de múltiples almacenes en un modelo en estrella SQL unificado, eliminando discrepancias entre 4 centros de distribución.",
    p3_b2: "Diseño de suite ejecutiva en Tableau para monitorear variaciones en tiempos de entrega (lead times), niveles de stock de seguridad y fiabilidad de proveedores.",
    p3_b3: "Identificación de cuellos de botella en la distribución y picos estacionales de demanda mediante modelos de pronóstico en series temporales.",
    p3_b4: "Asesoramiento que permitió reducir los quiebres de stock en un 14% y ahorrar $78.000 USD anuales en costos de almacenamiento innecesario.",

    // Experience
    experience_title: "Experiencia Laboral",

    exp1_role: "Analista de Datos Senior",
    exp1_company: "Nexus Analytics Solutions",
    exp1_dates: "2023 - Presente",
    exp1_loc: "Remoto",
    exp1_b1: "Liderazgo del ciclo de vida integral de analítica, diseñando más de 15 dashboards de producción en Power BI y Tableau para la alta gerencia.",
    exp1_b2: "Optimización de procedimientos almacenados SQL e indexación de bases de datos, reduciendo los tiempos de consulta en grandes volúmenes en un 42%.",
    exp1_b3: "Colaboración directa con directores de área para definir marcos estratégicos de KPIs que guían el desarrollo de productos y proyecciones de ingresos.",
    exp1_b4: "Mentoría activa a un equipo de 4 analistas junior en storytelling con datos, análisis exploratorio en Python y estándares de revisión de código.",

    exp2_role: "Analista de Business Intelligence",
    exp2_company: "Omni Retail Group",
    exp2_dates: "2021 - 2023",
    exp2_loc: "Híbrido",
    exp2_b1: "Análisis del funnel de ventas omnicanal, comportamiento de consumidores y efectividad de promociones de temporada usando PostgreSQL y Excel.",
    exp2_b2: "Automatización de flujos de reportes semanales y mensuales con scripts de Python y Power Query, ahorrando cerca de 15 horas semanales de trabajo manual.",
    exp2_b3: "Ejecución de análisis estadísticos de pruebas A/B sobre estrategias de precios, asesorando al equipo comercial en optimización de conversión.",

    exp3_role: "Analista de Datos Junior",
    exp3_company: "MetricPulse Consulting",
    exp3_dates: "2020 - 2021",
    exp3_loc: "Presencial",
    exp3_b1: "Soporte en ingesta, limpieza, normalización y auditorías de calidad (QA) sobre conjuntos de datos en bruto de diversas fuentes de clientes.",
    exp3_b2: "Creación de reportes claros y presentaciones ejecutivas traduciendo métricas técnicas en conclusiones comprensibles para perfiles no técnicos.",
    exp3_b3: "Mantenimiento del diccionario de datos corporativo y del repositorio de consultas SQL optimizadas para peticiones analíticas recurrentes.",

    // Footer
    footer_rights: "Portfolio"
  }
};

// ===================================================================
// 2. STATE & INITIALIZATION
// ===================================================================
let currentLanguage = localStorage.getItem("preferred_lang") || "en";

document.addEventListener("DOMContentLoaded", () => {
  // Update footer year dynamically
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Apply initial language
  setLanguage(currentLanguage);

  // Setup Language Switcher Button
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const newLang = currentLanguage === "en" ? "es" : "en";
      setLanguage(newLang);
    });
  }

  // Setup Mobile Menu
  setupMobileMenu();

  // Setup Scroll Listeners (Header blur, Active nav, Back to Top)
  setupScrollEffects();

  // Setup Back to top click
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

// ===================================================================
// 3. LANGUAGE SWITCHING LOGIC
// ===================================================================
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem("preferred_lang", lang);
  document.documentElement.setAttribute("lang", lang);

  // Update text/html of all data-i18n elements
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update UI indicators on language button
  const enCode = document.querySelector(".lang-code.en-code");
  const esCode = document.querySelector(".lang-code.es-code");
  if (enCode && esCode) {
    if (lang === "en") {
      enCode.classList.add("active");
      esCode.classList.remove("active");
    } else {
      enCode.classList.remove("active");
      esCode.classList.add("active");
    }
  }
}

// ===================================================================
// 4. SCROLL EFFECTS & ACTIVE NAVIGATION
// ===================================================================
function setupScrollEffects() {
  const header = document.getElementById("header");
  const backToTopBtn = document.getElementById("back-to-top");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    const scrollY = window.scrollY;

    // Header subtle shadow when scrolled
    if (header) {
      if (scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Back to top button visibility (> 300px)
    if (backToTopBtn) {
      if (scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    // Active Navigation Link Highlighting based on scroll position
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Run once on init
}

// ===================================================================
// 5. MOBILE MENU INTERACTION
// ===================================================================
function setupMobileMenu() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const icon = mobileToggle.querySelector("i");
    if (icon) {
      if (navMenu.classList.contains("open")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    }
  });

  // Close mobile menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.className = "fa-solid fa-bars";
        }
      }
    });
  });

  // Close when clicking outside of nav on mobile
  document.addEventListener("click", (event) => {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(event.target) &&
      !mobileToggle.contains(event.target)
    ) {
      navMenu.classList.remove("open");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.className = "fa-solid fa-bars";
      }
    }
  });
}
