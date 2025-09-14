import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Darío",
  lastName: "A.",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Staff & Desarrollador",
  avatar: "/images/avatar.jpg",
  email: "dario@warkcorp.com",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["España"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>¡Suscríbete a mi Newsletter!</>,
  description: (
    <>
      A veces escribo acerca de mis proyectos, tecnología y comparto cosas relacionadas con
      ingeniería o noticias.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Wark-Corp",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/warkcorp/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@dario57923_",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `Portfolio de ${person.name}`,
  description: `Portfolio personal de Darío.`,
  headline: <>Desarrollando y moderando desde 2020.</>,
  featured: {
    display: true,
    title: <>Proyecto más reciente: <strong className="ml-4">Wark Corp.</strong></>,
    href: "/work/wark",
  },
  subline: (
    <>
      Soy Darío, configurador, desarrollador y Staff avanzado, dónde he aprendido muchas cosas acerca de mejorar
      <br /> la experiencia del usuario. Después de mucho tiempo, fundé mi empresa con el fin de aprender todo lo posible.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre mí",
  title: `Sobre mí – ${person.name}`,
  description: `Información acerca de ${person.name} y sus habilidades.`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Soy Darío, me dedico a la informática y a la gestión activa o pasiva de comunidades en
        entornos como Discord, Minecraft, Slack o Telegram. Aparte de la programación y de la
        moderación, me gusta contribuir a la música que me gusta mediante Musixmatch.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencias",
    experiences: [
      {
        company: "XeroHost (XeroGroup LLC)",
        timeframe: "2024 - Presente",
        role: "Director de Operaciones (COO)",
        achievements: [
          <>
            Decidí formar parte de XeroHost para apoyar a todos los clientes y para dar soporte
            en general.
          </>,
          <>
            Después, cuando comencé a formar parte de los ejecutivos, me centré en mantener una
            infraestructura sólida y lo más rápida posible.
          </>,
        ],
        images: [],
      },
      {
        company: "Wark Corporation",
        timeframe: "2023 - Presente",
        role: "Fundador & CEO",
        achievements: [
          <>
            Creé la compañía pensando en lo mejor para los usuarios de Discord, buscando mejorar
            la experiencia de los miembros de los servidores que usen nuestras aplicaciones.
          </>,
          <>
            Desde 2023 hemos conseguido la increíble cifra de +160 servidores entre ambas aplicaciones,
            lo que es más del triple que la mayoría de apliaciones de moderación y seguridad.
          </>,
        ],
        images: [],
      },
      {
        company: "Motion Network",
        timeframe: "2023 - Presente",
        role: "Fundador & Configurador principal",
        achievements: [
          <>
            Configuré el servidor entero solo con mis conocimientos y con mis propias herramientas.
            Tengo conocimientos en el sistema de archivos YML, databases como MySQL o MariaDB para
            gestión de permisos o usuarios. Y mucho más.
          </>,
          <>
            Lideré al Equipo de Desarrollo para coordinar el buen funcionamiento del mismo.
            Aparte, durante un tiempo me encargué del Equipo de Staff, con guías y documentación personalizada.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills y habilidades",
    skills: [
      {
        title: "Next.js, PHP, HTML y CSS",
        description: <>Disponibilidad para configurar páginas web con diferentes formatos y lenguajes.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Java, Javascript y Python",
        description: <>También tengo conocimiento de programación en todo tipo de Java. Incluyendo la creación de plugins de Minecraft sencillos.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Artículos",
  title: `Artículos y Novedades`,
  description: `Lee las publicaciones recientes de ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projectos",
  title: `Projectos – ${person.name}`,
  description: `Projectos en los que colaboró ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
