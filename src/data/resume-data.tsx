import MonitoLogo from "../images/logos/monito.svg";
import Mypic from "../images/logos/mypic.jpg"
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Rahul Raikwar",
  initials: "",
  location: "MP, india, ",
  locationLink: "https://www.google.com/maps/place/india",
  about:
    "Software Engineer focused on building products with extra attention to details",
  summary:
    "As a Computer Science graduate, I led the development of an Address Syncing System at Hack the Mountain- MLH and created an Aadhaar Data Vault at Smart India Hackathon 2022. Honors include being a Grand Finalist in Smart India Hackathon 2022 and regionalist in ICPC 2020",
  avatarUrl: "https://github.com/rahulraikwar00/cv/assets/54519734/242b8680-fdba-4af9-8762-8258e2aadecb",
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
      techStack: [
        "FastAPI",
        "Twilio",
        "Python",
        "MySQL",
      ],
      description: "Developed a FastAPI Microservice integrated with Twilio for real-time synchronization of addresses. Implemented secure authentication mechanisms for agencies, ensuring data integrity and confidentiality. Engineered acknowledgment messages for users, enhancing transparency in communication for address updates.",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/rahulraikwar00/AddressSync",
      },
    },
  ],
} as const;


