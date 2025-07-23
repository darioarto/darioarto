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
      A veces escribo acerca de mis proyectos, tecnología, y comparto cosas relacionadas con
      ingeniería y noticias.
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
  headline: <>Desarrolando y moderando desde 2020.</>,
  featured: {
    display: true,
    title: <>Proyecto más reciente: <strong className="ml-4">Wark Corp.</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
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
        company: "Wark Corporation",
        timeframe: "2023 - Presente",
        role: "Fundador & CEO",
        achievements: [
          <>
            Creé la compañía pensando en lo mejor de los usuarios de Discord, buscando mejorar
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
            Tengo conocimientos en el sistema de archivos YML, databases como MySQL o MongoDB para
            gestión de permisos o usuarios. Y mucho más.
          </>,
          <>
            Lideré al Equipo de Desarrollo para coordinar el buen funcionamiento del mismo.
            Aparte durante un tiempo me encargué del Equipo de Staff, con guías y documentación personalizada.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
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
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
