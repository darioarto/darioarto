import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Darío",
  lastName: "A.",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "SysAdmin & Developer",
  avatar: "/images/avatar.jpg",
  email: "dario@xerohost.net",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spain"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/darioarto",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/darioarto_/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/darioarto",
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
  label: "Home",
  title: `${person.name} – Portfolio`,
  description: `Portfolio of ${person.name}, systems administrator and developer.`,
  headline: <>Building infrastructure and communities since 2020.</>,
  featured: {
    display: true,
    title: "Currently COO & SysAdmin at XeroHost",
    href: "/work/xerohost",
  },
  subline: (
    <>
      I’m Darío, a systems administrator and developer.
      <br /> I run VPS and game server infrastructure as COO of XeroHost, and founded Wark Corp. to
      build tools for online communities.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `About ${person.name}: experience, education and skills.`,
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
    title: "Introduction",
    description: (
      <>
        I’m Darío, a systems administrator and developer based in Spain. My work spans systems,
        networking and hosting infrastructure, from VPS to game servers, alongside software
        development and the management of online communities on platforms such as Discord,
        Minecraft and Slack. Outside of work, I’m a Curator at Musixmatch, contributing to the
        lyrics of the music I enjoy.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "XeroHost",
        timeframe: "2025 — Present",
        role: "COO & SysAdmin",
        achievements: [
          <>
            VPS and game server hosting provider, part of XeroGroup LLC (AS216102), with
            infrastructure in Miami, Dallas and São Paulo.
          </>,
          <>Administration of VPS infrastructure, alongside customer and billing management.</>,
          <>
            Troubleshooting of support incidents (FiveM, Minecraft Java and Bedrock) and
            development of a knowledge base for the support team.
          </>,
          <>Marketing and communications, including email, Discord and Trustpilot campaigns.</>,
        ],
        images: [],
      },
      {
        company: "Wark Corp.",
        timeframe: "2023 — Present",
        role: "Founder & CEO",
        achievements: [
          <>
            Founded the company to improve the experience of Discord communities, building
            applications focused on moderation and security for their members.
          </>,
          <>
            Since 2023, our applications have reached more than 160 servers combined, over three
            times the reach of most moderation and security applications.
          </>,
          <>
            Management of the company’s own infrastructure, including databases and the migration
            of PostgreSQL to self-hosted infrastructure.
          </>,
          <>
            Brand and public presence, and development of Vynk, a social network currently in
            development under Wark Corp.
          </>,
        ],
        images: [],
      },
      {
        company: "CosmixMC Network",
        timeframe: "2023 — Present",
        role: "Founder, Owner & Lead Developer",
        achievements: [
          <>
            Configured the entire server using my own knowledge and tooling, including YAML
            configuration files and MySQL/MariaDB databases for permission and user management.
          </>,
          <>
            Led the development team to keep the project running smoothly, and managed the Staff
            team for a period with custom guides and documentation.
          </>,
        ],
        images: [],
      },
      {
        company: "Junta Vecinal de Verdeña",
        timeframe: "2026 — Present",
        role: "Website & Social Media Management",
        achievements: [
          <>Management of the village’s website and its presence on social media.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Microcomputer Systems and Networks (SMR)",
        description: <>Intermediate Vocational Training Diploma (Grado Medio). In progress.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Systems & Infrastructure",
        description: <>Running Linux servers and hosting platforms for VPS and game servers.</>,
        tags: ["Linux", "VirtFusion", "WHMCS", "Pterodactyl", "Velocity", "MySQL", "MariaDB", "PostgreSQL"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Networking & Security",
        description: <>Securing access to infrastructure and testing it for weaknesses.</>,
        tags: ["Cloudflare Zero Trust", "Kali Linux", "Pentesting (basic)", "SSH", "Access best practices"],
        images: [],
      },
      {
        title: "Web Development",
        description: <>Building and configuring websites across different frameworks and languages.</>,
        tags: ["Next.js", "PHP", "HTML", "CSS"],
        images: [],
      },
      {
        title: "Programming",
        description: <>Software across the Java ecosystem, including Minecraft plugins.</>,
        tags: ["Java", "JavaScript", "Python"],
        images: [],
      },
      {
        title: "Mobile Development",
        description: <>Native iOS development.</>,
        tags: ["Swift", "SwiftUI"],
        images: [],
      },
      {
        title: "Management & Communication",
        description: <>Leading teams and the communities around them.</>,
        tags: ["Team coordination", "Customer support", "Marketing", "Community management"],
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Articles & Updates",
  description: `Read the latest posts by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, blog, work };
