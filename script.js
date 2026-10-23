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
    about_desc: "Hi! I'm Ivan Silva, a <b>Data Analyst</b> from <b>Corrientes, Argentina</b> 🇦🇷. I enjoy working throughout the whole process of transforming plain data into actionable insights that help people stay informed and make better decisions.",

    // Skills
    skills_title: "Skills",
    skills_technical_title: "Technical Skills",
    skill_python_cat: "Pandas, NumPy, Scikit-learn, Matplotlib",
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
    project_link_demo: "Website",

    p1_title: "Suicidio en Datos",
    p1_b1: "Analyzed 25+ years of public data on suicide in Argentina across diverse dimensions of the issue.",
    p1_b2: "Cleaned nearly 200,000 records from three different Argentine government sources using Pandas.",
    p1_b3: "Built a full analysis of the data in a website using both Power BI and Tableau.",

    p2_title: "RFM Analysis on Online Retail",
    p2_b1: "Cleaned more than 400,000 transactional records from the UCI 'Online Retail' repository and created a pipeline to calculate RFM metrics using Pandas.",
    p2_b2: "Segmented 4,338 customers based on a K-means algorithm using Scikit-learn.",
    p2_b3: "Data visualization using Power BI for interactive dashboards and Matplotlib for static graphs.",
    p2_b4: "Calculated customers churn rate based on a recency threshold during a one-year period.",

    p3_title: "Cybersecurity Tendencies",
    p3_b1: "Consolidated 5 years of public cybercrime data collected by the IC3 using Power Query.",
    p3_b2: "Designed a dashboard in Power BI that showed the most significant crime trends.",

    p4_title: "Olist Store Analysis (In progress)",
    p4_b1: "Cleaned and restructured the data model using SQL in a PostgreSQL database.",
    p4_b2: "Answered several business questions using SQL.",

    // Experience
    experience_title: "Work Experience",

    exp1_role: "Food Server",
    exp1_company: "Dr. Jekyll & Mr. Hyde",
    exp1_dates: "2020 - 2023",
    exp1_loc: "On-site",
    exp1_b1: "I worked as a food server for a restaurant with a capacity of over 100 people.",

    exp1_skill1: "Effective Communication",
    exp1_skill2: "Multi-tasking",
    exp1_skill3: "Cooperativeness",

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
    about_desc: "¡Hola! Soy Ivan Silva, un <b>Data Analyst</b> de <b>Corrientes, Argentina</b> 🇦🇷. Disfruto trabajar a lo largo de todo el proceso de transformar datos simples en información procesable que ayude a las personas a mantenerse informadas y tomar mejores decisiones.",

    // Skills
    skills_title: "Habilidades",
    skills_technical_title: "Habilidades Técnicas",
    skill_python_cat: "Pandas, NumPy, Scikit-learn, Matplotlib",
    skill_excel_cat: "Power Query, Tablas Dinámicas",
    skill_sql_cat: "PostgreSQL, MySQL, SQL Server, Azure",
    skill_powerbi_cat: "Dashboards, DAX, Modelado de Datos",
    skill_tableau_cat: "Dashboards, Modelado de Datos",
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
    project_link_demo: "Sitio Web",

    p1_title: "Suicidio en Datos",
    p1_b1: "Análisis de más de 25 años de datos públicos sobre el suicidio en Argentina a través de diversas dimensiones de la problemática.",
    p1_b2: "Limpieza de casi 200.000 registros de tres fuentes oficiales del gobierno argentino utilizando Pandas.",
    p1_b3: "Desarrollo de un análisis integral de los datos en un sitio web interactivo utilizando Power BI y Tableau.",

    p2_title: "Análisis RFM en Online Retail",
    p2_b1: "Limpieza de más de 400.000 registros transaccionales del repositorio 'Online Retail' de UCI y creación de un pipeline para calcular métricas RFM utilizando Pandas.",
    p2_b2: "Segmentación de 4.338 clientes basada en el algoritmo K-means utilizando Scikit-learn.",
    p2_b3: "Visualización de datos con Power BI para dashboards interactivos y Matplotlib para gráficos estáticos.",
    p2_b4: "Cálculo de la tasa de abandono de clientes (churn rate) basada en un umbral de recencia durante un período de un año.",

    p3_title: "Tendencias en Ciberseguridad",
    p3_b1: "Consolidación de 5 años de datos públicos de ciberdelincuencia recopilados por el IC3 utilizando Power Query.",
    p3_b2: "Diseño de un dashboard en Power BI que muestra las tendencias delictivas más significativas.",

    p4_title: "Análisis de Tienda Olist (En progreso)",
    p4_b1: "Limpieza y reestructuración del modelo de datos mediante SQL en una base de datos PostgreSQL.",
    p4_b2: "Resolución de diversas preguntas de negocio clave mediante consultas SQL.",

    // Experience
    experience_title: "Experiencia Laboral",

    exp1_role: "Mozo",
    exp1_company: "Dr. Jekyll & Mr. Hyde",
    exp1_dates: "2020 - 2023",
    exp1_loc: "Presencial",
    exp1_b1: "Trabajé como mozo en un restaurante con una capacidad de más de 100 personas.",

    exp1_skill1: "Comunicación Efectiva",
    exp1_skill2: "Multitarea",
    exp1_skill3: "Trabajo en Equipo",

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
