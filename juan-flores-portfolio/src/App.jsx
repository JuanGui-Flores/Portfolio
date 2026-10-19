import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Menu,
  X,
  Sparkles,
  MapPin,
  Mail,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";

const PROFILE = {
  name: "Juan Guillermo Flores",
  role: "Full Stack Developer · Product Builder",
  location: "San Juan, Argentina",
  email: "juanguiflores2002@gmail.com",
  github: "https://github.com/JuanGui-Flores",
  linkedin: "https://www.linkedin.com/in/juan-guillermo-flores-63b895245",
  studio: "https://florece-studio.vercel.app/",
};

const projects = [
  {
    number: "01",
    name: "PULSO Gym Planner",
    category: "FITNESS · APP MÓVIL",
    description:
      "Aplicación móvil para organizar rutinas de entrenamiento, registrar sesiones y consultar el progreso físico.",
    tags: ["React Native", "Expo", "Firebase"],
    theme: "pulso",
    label: "En desarrollo",
  },
  {
    number: "02",
    name: "Equilibria",
    category: "HEALTHTECH · BIENESTAR",
    description:
      "Proyecto digital de bienestar físico y mental que explora funciones de chequeo, alertas y seguimiento personal.",
    tags: ["React Native", "Expo", "Firebase"],
    theme: "equilibria",
    label: "En desarrollo",
  },
  {
    number: "03",
    name: "AgroPassport",
    category: "AGTECH · PRODUCTO DIGITAL",
    description:
      "Proyecto de producto digital que explora oportunidades para conectar tecnología y procesos del sector agropecuario.",
    tags: ["Producto digital", "UX/UI", "Tecnología"],
    theme: "agro",
    label: "Proyecto destacado",
  },
];

const services = [
  {
    number: "01",
    title: "Desarrollo web",
    description: "Sitios profesionales, responsive y preparados para crecer.",
  },
  {
    number: "02",
    title: "Aplicaciones digitales",
    description:
      "Productos móviles y herramientas para resolver problemas concretos.",
  },
  {
    number: "03",
    title: "Sistemas a medida",
    description: "Soluciones personalizadas para optimizar tu negocio.",
  },
  {
    number: "04",
    title: "Diseño de producto",
    description:
      "Jerarquía visual, estructura y experiencias centradas en las personas.",
  },
];

const skillGroups = [
  {
    title: "Frontend & Mobile",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "React Native",
      "Vue.js",
      "Responsive Design",
      "UX/UI",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "JWT", "POO"],
  },
  {
    title: "Bases de datos & Cloud",
    skills: ["Bases de datos", "Firebase", "AWS", "Docker"],
  },
  {
    title: "Herramientas & Procesos",
    skills: ["Git", "GitHub", "CI/CD", "Automatización"],
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <a
        className="brand"
        href="#inicio"
        onClick={close}
        aria-label="Juan Guillermo Flores, inicio"
      >
        <img
          className="brand-photo"
          src="/juangui.png"
          alt="Juan Guillermo Flores"
            decoding="async"
        />
        <span>
          Juan Guillermo Flores<span className="blue">.</span>
        </span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="main-navigation"
      >
        {open ? (
          <X size={21} aria-hidden="true" />
        ) : (
          <Menu size={21} aria-hidden="true" />
        )}
      </button>

      <nav
        id="main-navigation"
        className={open ? "nav nav-open" : "nav"}
        aria-label="Navegación principal"
      >
        <a href="#sobre-mi" onClick={close}>
          Sobre mí
        </a>
        <a href="#perfil" onClick={close}>
          Perfil
        </a>
        <a href="#proyectos" onClick={close}>
          Proyectos
        </a>
        <a href="#servicios" onClick={close}>
          Servicios
        </a>
        <a className="nav-cta" href="#contacto" onClick={close}>
          Hablemos <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero hero-impact wrap" id="inicio">
      <div className="hero-topline">
        <span>
          <i className="status-dot" aria-hidden="true" />
          SOFTWARE DEVELOPER · AI BUILDER
        </span>
        <span>ARGENTINA · REMOTO</span>
      </div>

      <div className="hero-impact-main">
        <div className="hero-impact-intro">
          <span className="hero-index">PORTFOLIO PERSONAL / 001</span>
          <span className="hero-intro-line" aria-hidden="true" />
          <p>
            DISEÑO, DESARROLLO Y TECNOLOGÍA
            <br />
            PARA CONSTRUIR LO QUE SIGUE.
          </p>
        </div>

        <h1 className="hero-impact-title">
          <span>NO SOLO</span>
          <span>ESCRIBO</span>
          <span className="hero-accent">
            CÓDIGO<span className="hero-period">.</span>
          </span>
          <span className="hero-last-line">CREO FUTURO.</span>
        </h1>

        <div className="hero-impact-bottom">
          <div className="hero-impact-description">
            <span className="hero-description-mark" aria-hidden="true">
              ↳
            </span>
            <p>
              Soy Juan Guillermo Flores. Desarrollo productos digitales,
              aplicaciones y soluciones que transforman ideas en proyectos
              reales.
            </p>
          </div>

          <div className="hero-impact-actions">
            <a className="button button-dark" href="#proyectos">
              Explorar proyectos <ArrowDownRight size={17} aria-hidden="true" />
            </a>

            <a className="text-link" href="#sobre-mi">
              Conocé mi enfoque <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-impact-footer">
        <span>JUAN GUILLERMO FLORES®</span>
        <span>SOFTWARE · PRODUCTO · IA</span>
        <a href="#proyectos" aria-label="Explorar proyectos">
          SCROLL TO EXPLORE <ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function Identity() {
  return (
    <section className="identity" aria-label="Identidad profesional">
      <div className="wrap identity-grid">
        <div className="identity-intro">
          <span>DOS PERSPECTIVAS.</span>
          <strong>UNA MISMA VISIÓN.</strong>
        </div>

        <a className="identity-card" href="#perfil">
          <span className="identity-icon" aria-hidden="true">
            <Code2 size={21} />
          </span>
          <div>
            <small>MARCA PERSONAL</small>
            <h2>Juan Guillermo Flores</h2>
            <p>Software Developer · Product Builder</p>
          </div>
          <ArrowUpRight
            className="identity-arrow"
            size={19}
            aria-hidden="true"
          />
        </a>

        <a className="identity-card studio-card" href="#florece-studio">
          <span className="identity-icon" aria-hidden="true">
            <Sparkles size={21} />
          </span>
          <div>
            <small>ESTUDIO DIGITAL</small>
            <h2>
              Florece Studio<span className="blue">.</span>
            </h2>
            <p>Software · Web · Soluciones</p>
          </div>
          <ArrowUpRight
            className="identity-arrow"
            size={19}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading reveal">
      <div className="section-label">
        <span>{number}</span>
        <i aria-hidden="true" />
        {label}
      </div>

      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function ProjectVisual({ theme }) {
  if (theme === "pulso") {
    return (
      <div className="project-visual visual-pulso" aria-hidden="true">
        <div className="visual-top">
          <span className="visual-logo">
            P<span>.</span>
          </span>
          <span className="visual-chip">TU PROGRESO</span>
        </div>

        <p className="visual-big-title">
          KEEP
          <br />
          <span>MOVING.</span>
        </p>

        <div className="workout-stat">
          <div>
            <small>SESIONES SEMANALES</small>
            <strong>
              04 <span>/ 04</span>
            </strong>
            <div className="stat-bars">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="progress-ring">
            <span>100%</span>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "equilibria") {
    return (
      <div className="project-visual visual-equilibria" aria-hidden="true">
        <div className="visual-top">
          <span className="visual-logo">e.</span>
          <span className="visual-chip">HOY, CON VOS</span>
        </div>

        <p className="wellness-title">
          Un momento
          <br />
          para <em>vos.</em>
        </p>

        <div className="wellness-sun" />

        <span className="visual-footnote">BIENESTAR INTEGRAL</span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-agro" aria-hidden="true">
      <div className="visual-top">
        <span className="agro-logo">
          agro<span>passport</span>
        </span>
        <span className="visual-chip">AG / 001</span>
      </div>

      <p className="agro-title">
        Growing
        <br />a better <em>future.</em>
      </p>

      <div className="field field-one" />
      <div className="field field-two" />
      <div className="field field-three" />

      <span className="visual-footnote">TECHNOLOGY MEETS EARTH</span>
    </div>
  );
}

function Projects() {
  return (
    <section
      className="wrap section-space"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        number="01"
        label="TRABAJO SELECCIONADO"
        title={
          <>
            Proyectos con
            <br />
            <span>intención.</span>
          </>
        }
        description="Productos e ideas que exploran cómo la tecnología puede resolver problemas reales. Una selección de proyectos y conceptos en evolución."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.number}>
            <div className="project-preview">
              <ProjectVisual theme={project.theme} />
              <span className="preview-number" aria-hidden="true">
                {project.number}
              </span>
            </div>

            <div className="project-meta">
              <span>{project.category}</span>
              <span className="project-status">{project.label}</span>
            </div>

            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tags" aria-label={`Tecnologías de ${project.name}`}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="coming-project reveal">
        <div className="coming-copy">
          <span className="coming-label">
            <i className="status-dot" aria-hidden="true" />
            PRÓXIMO LANZAMIENTO
          </span>

          <h3>
            EstaJoya<span className="blue">.</span>
          </h3>

          <p>
            Una plataforma en preparación para explorar el mercado automotor y
            encontrar tu próximo vehículo.
          </p>

          <span className="coming-badge">PRÓXIMAMENTE</span>
        </div>

        <div
          className="car-mockup"
          role="img"
          aria-label="Vista conceptual de la futura plataforma automotriz EstaJoya"
        >
          <div className="car-header">
            <strong>
              estajoya<span>.</span>
            </strong>
            <span>EXPLORAR VEHÍCULOS ↗</span>
          </div>

          <div className="car-copy">
            <small>ENCONTRÁ TU PRÓXIMO AUTO</small>
            <h4>
              Tu próximo camino
              <br />
              empieza acá.
            </h4>
            <span>VER VEHÍCULOS ↗</span>
          </div>

          <div className="car-shape" aria-hidden="true">
            <svg viewBox="0 0 500 180">
              <path
                d="M40 117 L67 99 L121 86 L161 43 Q170 32 193 32 L312 32 Q332 34 352 56 L390 88 L442 103 Q458 108 463 126 L463 139 L420 139 Q413 114 386 114 Q359 114 352 139 L157 139 Q150 114 123 114 Q96 114 89 139 L43 139 Z"
                fill="#65778c"
                stroke="#d3deeb"
                strokeWidth="2"
              />
              <path d="M174 46 L238 46 L238 84 L139 84 Z" fill="#263342" />
              <path
                d="M251 46 L309 46 Q324 48 339 67 L353 84 L251 84 Z"
                fill="#263342"
              />
              <circle
                cx="123"
                cy="139"
                r="23"
                fill="#111820"
                stroke="#aebccc"
                strokeWidth="4"
              />
              <circle
                cx="386"
                cy="139"
                r="23"
                fill="#111820"
                stroke="#aebccc"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div className="car-footer">
            <span>ESTAJOYA / 001</span>
            <span>PLATAFORMA AUTOMOTRIZ</span>
          </div>
        </div>
      </article>
    </section>
  );
}

function About() {
  const principles = [
    {
      icon: <Layers3 aria-hidden="true" />,
      title: "Pensamiento de producto",
      description: "Entender el problema antes de diseñar la solución.",
    },
    {
      icon: <Code2 aria-hidden="true" />,
      title: "Desarrollo con criterio",
      description: "Código claro, interfaces útiles y foco en lo importante.",
    },
    {
      icon: <Sparkles aria-hidden="true" />,
      title: "Curiosidad tecnológica",
      description: "Explorar herramientas para construir mejores experiencias.",
    },
  ];

  return (
    <section
      className="wrap section-space"
      id="sobre-mi"
      aria-labelledby="about-title"
    >
      <SectionHeading
        number="02"
        label="SOBRE MÍ"
        title={
          <>
            Tecnología con
            <br />
            <span>criterio humano.</span>
          </>
        }
      />

      <div className="about-grid">
        <div className="about-lead reveal">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <p>
            Me interesa construir cosas que no solo funcionen bien, sino que
            también tengan sentido para las personas que las usan.
          </p>
        </div>

        <div className="about-copy reveal">
          <p>
            Trabajo entre el desarrollo de software, el diseño de experiencias y
            la exploración de nuevas herramientas tecnológicas. Me gusta
            involucrarme en el producto completo: entender el problema, ordenar
            las ideas y convertirlas en una solución concreta.
          </p>

          <p>
            Desde mi marca personal y Florece Studio, busco colaborar con
            personas y negocios que quieran transformar una idea en un producto
            digital útil.
          </p>

          <a className="text-link" href="#contacto">
            Hablemos de tu proyecto <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="principles">
        {principles.map((item, index) => (
          <article className="principle reveal" key={item.title}>
            <span className="principle-number">0{index + 1}</span>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section
      className="profile-section section-space"
      id="perfil"
      aria-labelledby="profile-title"
    >
      <div className="wrap">
        <SectionHeading
          number="03"
          label="PERFIL PROFESIONAL"
          title={
            <>
              Desarrollo con
              <br />
              <span>visión integral.</span>
            </>
          }
          description="Una combinación de desarrollo, producto y exploración tecnológica para llevar ideas a soluciones concretas."
        />

        <div className="profile-grid">
          <div className="profile-photo-wrap reveal">
            <img
              className="profile-photo"
              src="/juangui.png"
              alt="Juan Guillermo Flores, desarrollador de software en San Juan, Argentina"
              loading="lazy"
              decoding="async"
            />

            <div className="profile-photo-caption">
              <span>JUAN GUILLERMO FLORES</span>
              <span>-</span>
              <span>FULL STACK DEVELOPER</span>
            </div>
          </div>

          <div className="profile-details reveal">
            <div className="profile-location">
              <MapPin size={15} aria-hidden="true" />
              {PROFILE.location}
            </div>

            <h3>Desarrollo software con visión de producto.</h3>

            <p>
              Soy desarrollador Full Stack y fundador de Florece Studio. Trabajo
              en proyectos digitales que combinan desarrollo de software, diseño
              de interfaces y soluciones.
            </p>

            <p>
              Mi enfoque es comprender las necesidades del proyecto, construir
              una base técnica sólida y crear experiencias digitales claras y
              funcionales.
            </p>

            <div className="profile-facts">
              <div>
                <span>01</span>
                <p>Desarrollo de software</p>
              </div>
              <div>
                <span>02</span>
                <p>Productos digitales</p>
              </div>
              <div>
                <span>03</span>
                <p>IA y automatización</p>
              </div>
            </div>

            <div className="profile-socials">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar GitHub de Juan Guillermo Flores"
              >
                <Code2 size={17} aria-hidden="true" />
                GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar LinkedIn de Juan Guillermo Flores"
              >
                <BriefcaseBusiness size={17} aria-hidden="true" />
                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="skills-area reveal">
          <div className="skills-heading">
            <span>STACK TECNOLÓGICO</span>
            <p>
              Herramientas y tecnologías con las que trabajo y continúo
              desarrollando proyectos.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      className="wrap section-space services"
      id="servicios"
      aria-labelledby="services-title"
    >
      <SectionHeading
        number="04"
        label="QUÉ HAGO"
        title={
          <>
            De la idea al
            <br />
            <span>próximo paso.</span>
          </>
        }
        description="Soluciones digitales que combinan estrategia, diseño y tecnología para acompañar cada etapa de un proyecto."
      />

      <div className="service-list">
        {services.map((service) => (
          <article className="service-row reveal" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ArrowUpRight size={20} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}

function FloreceStudio() {
  return (
    <section
      className="wrap section-space"
      id="florece-studio"
      aria-labelledby="studio-title"
    >
      <div className="agency-panel reveal">
        <div className="agency-topline">
          <span>
            <Sparkles size={15} aria-hidden="true" />
            MI ESTUDIO DIGITAL
          </span>
          <span>FLORECE STUDIO / 001</span>
        </div>

        <div className="agency-intro">
          <div>
            <span className="agency-kicker">
              TECNOLOGÍA PARA HACER CRECER IDEAS
            </span>

            <h2>
              Las ideas crecen
              <br />
              cuando se <span>construyen.</span>
            </h2>
          </div>

          <p className="agency-description">
            Florece Studio es mi proyecto de desarrollo de software. Ayudamos a
            convertir necesidades de negocios en experiencias digitales,
            herramientas y procesos más eficientes.
          </p>
        </div>

        <div className="agency-services">
          <article className="agency-service">
            <Code2 size={21} aria-hidden="true" />
            <h3>Desarrollo digital</h3>
            <p>
              Sitios web y soluciones de software pensadas para cada negocio.
            </p>
          </article>

          <article className="agency-service">
            <Layers3 size={21} aria-hidden="true" />
            <h3>Productos y aplicaciones</h3>
            <p>
              Experiencias digitales que organizan procesos y resuelven
              necesidades concretas.
            </p>
          </article>

          <article className="agency-service">
            <Sparkles size={21} aria-hidden="true" />
            <h3>Agentes de IA</h3>
            <p>
              Automatización de consultas, atención comercial y tareas
              repetitivas mediante flujos inteligentes.
            </p>
          </article>
        </div>

        <div className="agency-footer">
          <span>IDEAS · SOFTWARE · SOLUCIONES</span>

          <a
            href={PROFILE.studio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Conocer Florece Studio <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const email = PROFILE.email;

  return (
    <section
      className="wrap contact-section"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="contact-panel">
        <div className="contact-content">
          <p className="eyebrow">EL PRÓXIMO PROYECTO PUEDE SER EL TUYO</p>

          <h2>
            ¿Lo hacemos
            <br />
            <span>real?</span>
          </h2>

          <p>
            Si tenés una idea, un desafío o querés llevar tu negocio al
            siguiente nivel digital, hablemos.
          </p>

          <a
            className="button button-light"
            href={`mailto:${email}?subject=Hablemos%20de%20un%20proyecto`}
          >
            <Mail size={17} aria-hidden="true" />
            Empezar una conversación
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>

          <a className="contact-email" href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <div className="contact-decoration" aria-hidden="true">
          <div className="contact-orbit orbit-one" />
          <div className="contact-orbit orbit-two" />
          <span>
            MAKE IT
            <br />
            MEANINGFUL.
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wrap footer">
      <a
        className="brand"
        href="#inicio"
        aria-label="Juan Guillermo Flores, volver al inicio"
      >
        <BrandMark />
        <span>
          Juan Guillermo Flores <span className="blue">.</span>
        </span>
      </a>

      <p>Diseñado y desarrollado con intención.</p>

      <div className="footer-links">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
          GitHub <ArrowUpRight size={13} aria-hidden="true" />
        </a>

        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
        </a>

        <a href={PROFILE.studio} target="_blank" rel="noopener noreferrer">
          Florece Studio <Globe size={13} aria-hidden="true" />
        </a>

        <a href="#inicio">Volver arriba ↑</a>
      </div>

      <small>© {new Date().getFullYear()} JUAN GUILLERMO FLORES</small>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px 40px 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Identity />
        <Projects />
        <About />
        <Profile />
        <Services />
        <FloreceStudio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
