import {
  php,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  git2,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  web,
  intro,
  MySQL,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "download", // Add this new part
    title: "Download App",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "javascript", icon: javascript },
  { title: "php", icon: php },
  { title: "MySQL", icon: MySQL },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Frontend Developer (Student Projects)",
    company_name: "Personal & Academic Projects",
    icon: intro,
    iconBg: "#161329",
    date: "2024 - Present",
    points: [
      "Built responsive web interfaces using React, Vite, HTML, CSS, and JavaScript.",
      "Created reusable components and maintained clean folder structures for scalability.",
      "Practiced integrating libraries and tools to improve UI and functionality.",
      "Used Git and GitHub for version control and project management.",
    ],
  },
  {
    title: "Web Development Learner",
    company_name: "Self-Taught / Online Resources",
    icon: web,
    iconBg: "#161329",
    date: "2023 - Present",
    points: [
      "Learning core web development concepts including JavaScript, React, and frontend tooling.",
      "Practicing building small projects to strengthen coding and problem-solving skills.",
      "Exploring basic backend concepts like APIs and authentication.",
    ],
  },
  {
    title: "Version Control & Collaboration",
    company_name: "Git & GitHub",
    icon: git2,
    iconBg: "#161329",
    date: "2023 - Present",
    points: [
      "Tracked project history and managed changes using Git.",
      "Hosted projects on GitHub and practiced clean commit messages.",
      "Learned branching, merging, and basic collaboration workflows.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "",
  },
  {
    name: "PayloadMaster",
    description: "Tool to automate payload creation using the Metasploit framework",
    tags: [{ name: "shell", color: "blue-text-gradient" }],
    image: payloadmaster,
    source_code_link: "",
  },
];
