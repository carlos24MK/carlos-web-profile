/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */

const ES = {

  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title": "Sobre Mí",

  "about.text": "Soy estudiante de programación web y disfruto aprender sobre tecnología. Me gusta estudiar inglés, jugar videojuegos y mejorar mis conocimientos en programación, especialmente con Laravel. Me considero una persona extrovertida e introvertida dependiendo del ambiente. Me gusta mucho mi carrera y quiero seguir creciendo como desarrollador y aprendiendo nuevas herramientas.",

  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Saldaña, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.web":           "Programación Web",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.date":  "2026 - Actualidad",
  "edu.1.text":  "Actualmente estudio el Técnico Profesional en Programación Web.",

  "edu.2.title": "Formación en Inglés",
  "edu.2.organization": "Formación académica",
  "edu.2.date": "Desde los 13 años",
  "edu.2.text":  "He estudiado inglés desde los 13 años porque siempre me ha gustado aprender idiomas extranjeros.",

  "exp.1.title": "Programación Web",
  "exp.1.date":  "Actualidad",
  "exp.1.text":  "He adaptado una plantilla académica para crear un portafolio personal bilingüe con HTML, CSS y JavaScript.",

  "exp.2.title": "Proyectos académicos de desarrollo web",
  "exp.2.organization": "Proyectos académicos",
  "exp.2.date": "Actualidad",
  "exp.2.text":  "He practicado desarrollo web mediante proyectos académicos. Actualmente estoy desarrollando Match Educativo con PHP y Laravel.",

  "portfolio.title": "Proyectos",

  "project.1.title": "Perfil web personal",
  "project.1.text":  "HTML · CSS · JavaScript",
  "project.1.description": "Adapté una plantilla académica para crear mi portafolio personal. Presenta mi formación, habilidades y proyectos, y permite cambiar entre español e inglés.",
  "project.1.live": "Ver página",
  "project.1.code": "Ver código",

  "project.2.title": "Match Educativo",
  "project.2.status": "En desarrollo",
  "project.2.text": "PHP · Laravel",
  "project.2.description": "Proyecto web educativo en desarrollo. He creado una API de registro de usuarios que valida los datos y aplica hash a las contraseñas. El backend utiliza PHP y Laravel.",
  "project.2.code": "Ver código",

  "project.3.title": "Taller de saludos con Laravel",
  "project.3.status": "Práctica académica",
  "project.3.text": "PHP · Laravel · Blade · HTML",
  "project.3.description": "Ejercicio académico que conecta una ruta, un controlador y una vista Blade. El controlador envía el nombre de un estudiante a una página con una plantilla reutilizable que muestra un saludo.",
  "project.3.code": "Ver código",

  "contact.title": "Contacto",

  "contact.intro": "Puedes contactarme por correo electrónico o por medio de mi perfil de GitHub.",

  "contact.emailLabel": "Correo",

  "footer.note": "Carlos Andres Lozano Gonzalez · Técnico Profesional en Programación Web · UniEspinal"

};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */

const EN = {

  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title": "About Me",

  "about.text": "I am a web programming student who enjoys learning about technology. I like studying English, playing video games, and improving my programming skills, especially with Laravel. I really enjoy my career, and I want to keep growing as a developer and learning new tools.",

  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Saldaña, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.web":           "Web Programming",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.date":  "2026 – Present",
  "edu.1.text":  "I am currently studying for a professional technical qualification in Web Programming.",

  "edu.2.title": "English Education",
  "edu.2.organization": "Academic training",
  "edu.2.date": "Since age 13",
  "edu.2.text":  "I have studied English since I was 13 years old because I have always enjoyed learning foreign languages.",

  "exp.1.title": "Web Programming",
  "exp.1.date":  "Present",
  "exp.1.text":  "I have adapted an academic template to create a bilingual personal portfolio with HTML, CSS, and JavaScript.",

  "exp.2.title": "Academic Web Development Projects",
  "exp.2.organization": "Academic projects",
  "exp.2.date": "Present",
  "exp.2.text":  "I have practiced web development through academic projects. I am currently developing Match Educativo with PHP and Laravel.",

  "portfolio.title": "Projects",

  "project.1.title": "Personal Web Profile",
  "project.1.text":  "HTML · CSS · JavaScript",
  "project.1.description": "I adapted an academic template to create my personal portfolio. It presents my education, skills, and projects, and lets visitors switch between Spanish and English.",
  "project.1.live": "View live site",
  "project.1.code": "View source code",

  "project.2.title": "Educational Match",
  "project.2.status": "In progress",
  "project.2.text": "PHP · Laravel",
  "project.2.description": "An educational web project in progress. I have created a user registration API that validates input and hashes passwords. The backend uses PHP and Laravel.",
  "project.2.code": "View source code",

  "project.3.title": "Laravel Greeting Workshop",
  "project.3.status": "Academic practice",
  "project.3.text": "PHP · Laravel · Blade · HTML",
  "project.3.description": "An academic exercise that connects a route, a controller, and a Blade view. The controller passes a student name to a reusable page layout that displays a greeting.",
  "project.3.code": "View source code",

  "contact.title": "Contact",

  "contact.intro": "You can contact me by email or through my GitHub profile.",

  "contact.emailLabel": "Email",

  "footer.note": "Carlos Andres Lozano Gonzalez · Professional Technician in Web Programming · UniEspinal"

};


/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = {
  es: ES,
  en: EN
};

let idiomaActual = "es";


function aplicarIdioma(idioma) {

  const textos = DICCIONARIOS[idioma];

  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {

    const clave = elemento.getAttribute("data-i18n");

    if (textos[clave] !== undefined) {

      elemento.textContent = textos[clave];

    } else {

      console.warn("Missing translation key:", clave);

    }

  });


  document.documentElement.lang = idioma;


  const boton = document.getElementById("btn-idioma");

  if (boton) {

    const otro = idioma === "es" ? "en" : "es";

    boton.innerHTML =
      '<span class="idioma-activo">' + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase() + '</span>';

    boton.setAttribute(
      "aria-label",
      idioma === "es"
        ? "Switch to English"
        : "Cambiar a español"
    );

  }

  idiomaActual = idioma;

}


function cambiarIdioma() {

  aplicarIdioma(
    idiomaActual === "es"
      ? "en"
      : "es"
  );

}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;


function mostrarOcultarMenu() {

  const nav = document.getElementById("nav");

  menuVisible = !menuVisible;

  nav.className =
    menuVisible
      ? "responsive"
      : "";

}


function cerrarMenu() {

  document.getElementById("nav").className = "";

  menuVisible = false;

}


/* ============================================================
   5. SKILL BARS
   ============================================================ */

function animarHabilidades() {

  const barras = document.querySelectorAll(".progreso");


  const mostrar = barra => {

    const porcentaje =
      barra.getAttribute("data-percent") || "0";

    barra.style.width =
      porcentaje + "%";

    const etiqueta =
      barra.querySelector("span");

    if (etiqueta) {

      etiqueta.textContent =
        porcentaje + "%";

    }

  };


  if (!("IntersectionObserver" in window)) {

    barras.forEach(mostrar);

    return;

  }


  const observador =
    new IntersectionObserver(
      (entradas, obs) => {

        entradas.forEach(entrada => {

          if (entrada.isIntersecting) {

            mostrar(entrada.target);

            obs.unobserve(
              entrada.target
            );

          }

        });

      },
      {
        threshold: 0.4
      }
    );


  barras.forEach(
    barra =>
      observador.observe(barra)
  );

}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    aplicarIdioma("es");

    animarHabilidades();

  }
);
