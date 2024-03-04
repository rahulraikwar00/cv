import MonitoLogo from "../images/logos/monito.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Rahul Raikwar",
  initials: "",
  location: "Mp, india, ",
  locationLink: "https://www.google.com/maps/place/india",
  about:
    "Software Engineer focused on building products with extra attention to details",
  summary:
    "As a Computer Science graduate, I led the development of an Address Syncing System at Hack the Mountain- MLH and created an Aadhaar Data Vault at Smart India Hackathon 2022. Honors include being a Grand Finalist in Smart India Hackathon 2022 and regionalist in ICPC 2020",
  avatarUrl: "https://avatars.githubusercontent.com/u/54519734?v=4",
  personalWebsiteUrl: "lunosis.xyz",
  contact: {
    email: "rahulraikwar.cse@gmail.com",
    tel: "+917223888360",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rahulraikwar00",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahul-raikwar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/rahulraikwar00",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sagar Institute of Science and Technology, Bhopal",
      degree: "Bachelor of Technology in Computer Science Engineering",
      start: "July 2019",
      end: "June 2023",
    },
  ],
  skills: [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "HTML",
    "SQL",
    "Bash",
    "TensorFlow",
    "Node.js",
    "FastAPI",
    "Django",
    "GIT",
    "Docker",
    "MySQL",
    "Linux",
    "Windows",
    "AWS",
  ],

  projects: [
    {
      title: "Address Syncing Service",
      techStack: ["FastAPI", "Twilio", "Python", "MySQL"],
      description:
        "FastAPI Microservice for real-time address synchronization with Twilio integration and secure authentication mechanisms.",
      link: {
        label: "GitHub",
        href: "https://github.com/rahulraikwar00/AddressSync",
      },
    },
    {
      title: "Aadhaar Data Vault",
      techStack: ["Python", "Flask", "OAuth", "JWT"],
      description:
        "Software package for hassle-free Aadhaar Data Vault creation with OAuth, JWT, and automated database architecture generation.",
      link: {
        label: "GitHub",
        href: "https://github.com/rahulraikwar00/ADvault",
      },
    },
    {
      title: "PRW CLI",
      techStack: ["Python"],
      description:
        "Command-line tool for GitHub Pull Requests workflow management with OPEN, CLOSED, MERGED support.",
      link: {
        label: "GitHub",
        href: "https://github.com/rahulraikwar00/prworkflow_tool",
      },
    },
    {
      title: "Simple File Sharing Service",
      techStack: ["Node.js", "Express", "MongoDB"],
      description:
        "User-friendly file sharing service with password protection for secure file transfers.",
      link: {
        label: "GitHub",
        href: "https://github.com/rahulraikwar00/fileSharing",
      },
    },
  ],
} as const;
