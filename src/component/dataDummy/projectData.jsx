import ProjectImage1 from "../../assets/dumImages/wayslink.png";
import ProjectImage2 from "../../assets/dumImages/wow.png";
import ProjectImage3 from "../../assets/dumImages/thread.png";
import ProjectImage4 from "../../assets/dumImages/WorkGroup-Navigation.png";
import ProjectImage5 from "../../assets/dumImages/WorldGuideforNerds.png";
import ProjectImage6 from "../../assets/dumImages/nextstep.png";
import ProjectImage7 from "../../assets/dumImages/slotify.jpg";

const projects = [
  {
    title: "WaysLink",
    description: "Ways-Link is a social media reference landing page",
    image: ProjectImage1,
    tech: ["React", "Material UI", "express", "MySQL"],
    isGithubPrivate: true,
    githubUrl: "https://github.com/Richardo33/Dumb-link.git",
    demoUrl: "",
  },
  {
    title: "Window of World",
    description:
      "WoW is an application that allows users to read books online for free. Users can also add books to their personal list without any subscription required.",
    image: ProjectImage2,
    tech: ["React", "Material UI"],
    isGithubPrivate: false,
    githubUrl: "https://github.com/Richardo33/window-world",
    demoUrl: "https://window-world.netlify.app/",
  },
  {
    title: "Circle App",
    description:
      "A social media app enabling users to create/view threads, manage profiles, comment, like, dislike, and plans to add direct chat for real-time communication and enhanced user interaction.",
    image: ProjectImage3,
    tech: ["React TS", "Tailwind", "express", "postgreSQL"],
    isGithubPrivate: false,
    githubUrl: "https://github.com/Richardo33/Circle-FE",
    demoUrl: "",
  },
  {
    title: "WorkGroup Navigation",
    description:
      "A personal to-do list project with category grouping, drag-and-drop task movement, enabling efficient task organization and management.",
    image: ProjectImage4,
    tech: ["Next TS", "Tailwind", "Supabase"],
    isGithubPrivate: false,
    githubUrl: "https://github.com/Richardo33/to-do-list-portfolio",
    demoUrl: "https://wgnavigation.richardoo.cyou/",
  },
  {
    title: "NextStep-rms",
    description:
      "NextStep is an AI-driven recruitment platform automating screening-to-interview workflows, scoring candidates, centralizing jobs, and streamlining HR communications via email notifications.",
    image: ProjectImage6,
    tech: ["Next TS", "Tailwind", "Supabase", "n8n"],
    isGithubPrivate: false,
    githubUrl: "https://github.com/Richardo33/NextStep-rms",
    demoUrl: "https://nexstep-b234a6wsa-alvin-rikardos-projects.vercel.app/",
  },
  {
    title: "Slotify",
    description:
      "Slotify is a booking platform that manages services, time slots, checks availability, prevents double bookings, and automates confirmations through webhooks.",
    image: ProjectImage7,
    tech: ["Next TS", "Tailwind", "Express", "Neon"],
    isGithubPrivate: false,
    githubUrl: "https://github.com/Richardo33/NextStep-rms",
    demoUrl: "",
  },
];

export default projects;
