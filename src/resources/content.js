import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Darío",
  lastName: "A.",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Staff & Desarrollador de software",
  avatar: "/images/avatar.jpg",
  email: "dario@warkcorp.com",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>¡Suscríbete a mi Newsletter!</>,
  description: (
    <>
      Suelo escribir acerca de novedades, tecnológia, y noticias interesantes relacionadas con alguno de mis proyectos.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/WarkCorp",
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
  title: `${person.name}' - Portfolio`,
  description: `Portfolio de Darío A.`,
  headline: <>Mejorando como configurador en Discord desde 2021</>,
  featured: {
    display: true,
    title: <>Proyecto reciente: <strong className="ml-4">WarkCorp</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Somos el equipo de Wark, diseñamos los mejor para ti y tu <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> comunidad. Después de mucho trabajo y sacrificio, lanzamos oficialmente nuestra web.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Acerca De",
  title: `Acerca De – ${person.name}`,
  description: `Concierta una cita con ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://dsc.gg/wark",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Soy Darío, me dedico a programar y moderar en Minecraft y Discord activamente,
        dedico mucho de mi tiempo libre a todo eso, y hasta ahora me va bien.
        Tengo muchas experiencias en distinos proyectos a lo largo de todos estos años.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia",
    experiences: [
      {
        company: "Wark Corporation",
        timeframe: "2023 - Presente",
        role: "Fundador, CEO & Desarrollador",
        achievements: [
          <>
            Creé la compañía para mejorar la experiencia de los usuarios en Discord, logré que nuestras aplicaciones se usen en +90 servidores y comunidades.
          </>,
          <>
            Mejoré la seguridad de todos mis proyectos y aprendí mucho por el camino, todo gracias a Wark.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
