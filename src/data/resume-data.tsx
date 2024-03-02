import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Rahul Raikwar",
  initials: "",
  location: "MP, India",
  locationLink: "https://www.google.com/maps/place/india",
  about: "Full Stack Engineer focused on building products with extra attention to details",
  summary: "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://github.com/rahulraikwar00/cv/assets/54519734/93cf387d-3e1d-4bbd-8fcc-90603c630121",
  personalWebsiteUrl: "",
  contact: {
    email: "rahulraikwar.cse@gmail.com",
    tel: "+91-722-3888-360",
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
    ],
  },
  education: [
    {
      school: "Sagar Institute of Science and Technology, Bhopal",
      degree: "Bachelor of Technology in Computer Science Engineering",
      start: "July 2019",
      end: "June 2023",
      details: "CGPA: 7.64\nRelevant Courses: Operating Systems, Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Blockchain, Computer Networks, DBMS, Information Retrieval, Theory of Computation, Software Tools & Technology",
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
    "Java",
    "TensorFlow",
    "Keras",
    "Node.js",
    "FastAPI",
    "Django",
    "GIT",
    "Docker",
    "MySQL",
    "SQL Server Management Studio",
    "Linux",
    "Web",
    "Windows",
    "Arduino",
    "AWS",
    "Firebase",
    "Leadership",
    "Event Management",
    "Writing",
    "Public Speaking",
    "Time Management",
  ],
  work: [
    {
      company: "Hack the Mountain- MLH",
      link: "#",
      badges: ["Software Engineer"],
      title: "Project Title: Address syncing system",
      start: "Sep 2022",
      end: "Onsite",
      description: "Developed a FastAPI Microservice integrated with Twilio for real-time synchronization of addresses. Implemented secure authentication mechanisms for agencies, ensuring data integrity and confidentiality. Engineered acknowledgment messages for users, enhancing transparency in communication for address updates.",
      techStack: ["FastAPI", "Twilio", "Python", "MySQL"],
      projectLink: "https://github.com/rahulraikwar00/AddressSync",
    },
    {
      company: "Smart India Hackathon 2022",
      link: "#",
      badges: ["Software Engineer"],
      title: "Project Title: Aadhaar Data Vault",
      start: "Aug 2022",
      end: "Onsite",
      description: "Developed a software package for hassle-free creation and installation of Aadhaar Data Vault. Implemented OAuth and JWT for authentication and authorization. Automated the generation of a complete database architecture.",
      techStack: ["Python", "Flask", "OAuth", "JWT"],
      projectLink: "https://github.com/rahulraikwar00/ADvault",
    },
    {
      company: "Sagar Institute of Science and Technology (SISTec)",
      link: "#",
      badges: ["Teaching Assistant for Blockchain"],
      title: "Blockchain Fundamentals",
      start: "Feb 2023",
      end: "May 2023",
      description: "Assisted students in grasping foundational blockchain concepts and facilitated discussions on smart contract theory.",
    },
  ],
  projects: [
    {
      title: "Testcoin- Python Blockchain Implementation",
      techStack: ["Python", "Blockchain"],
      description: "Developed a simple blockchain in Python, emphasizing a hashed ledger and distributed nodes. The project’s primary goal is to elucidate the foundational structure of a blockchain.",
      projectLink: "https://github.com/rahulraikwar00/Blockchain1",
    },
  ],
  positionsOfResponsibility: [
    {
      title: "Developer Student Club, Tech Lead at SISTec",
      description: "As Tech Lead, devised and curated practice coding tests tailored for placement readiness. Fostered effective communication between participating companies and students, enhancing the overall reach and impact of the placement cell. (Apr 2021- Apr 2022)",
    },
  ],
  openSourceContributions: [
    {
      title: "Octoberfest 2023",
      description: "Active participant in Octoberfest, contributing to various open source projects and fostering collaboration within the developer community and help them in clarification of issues and Pull Requests.",
    },
    {
      title: "Rotten-Scripts Contributions",
      description: "Addressed Pull Request 936 and Pull Request 951, fixing Issue 923 and Issue 927 in the Rotten-Scripts repository.",
      projectLink: "#",
    },
  ],
  honorsAndAwards: [
    "Smart India Hackathon 2022 Grand Finalist",
    "ICPC 2020 regionalist",
    "Qualified for Google Code Jam Round 2-2021",
    "38th rank out of 23000+ participants in Code Manthan",
    "1240 global rank in Codechef December Challenge 2020 Division 2",
    "Solved over 300+ coding problems across different platforms. 190+ leetcode link",
  ],
} as const;
