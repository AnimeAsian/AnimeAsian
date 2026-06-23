// Central content file — edit this to update site content.
// No JSX here, just plain data, so it's easy to scan and modify.

export const profile = {
  name: "Varad Kolte",
  role: "Game Developer",
  tag: "Unity Certified Developer",
  status: "Available for game dev roles",
  bio: "Results-driven developer with 2+ years in Android (Java), now fully committed to game development. Certified Unity Developer skilled in C# with hands-on experience building interactive game experiences. Passionate about performance optimization, immersive gameplay, and clean, maintainable code.",
  location: "Pune, India",
};

export const contact = {
  email: "varadkolte2019@gmail.com",
  phone: "+91 9168799940",
  phoneDisplay: "+91 9168 799 940",
  linkedin: { handle: "varadkolte", url: "https://linkedin.com/in/varadkolte" },
  github: { handle: "varadkolte", url: "https://github.com/varadkolte" },
  itch: { handle: "animeasian", url: "https://animeasian.itch.io/" },
};

// === PROJECTS ===
// Each project is a placeholder by default (isPlaceholder: true).
// To add a real project: fill in title/description/link, set thumbnail
// to an image path (e.g. "/projects/my-game.jpg" placed in /public/projects/),
// and set isPlaceholder to false.
export const projects = [
  {
    id: "proj-1",
    title: "[ Project Name ]",
    description:
      "Short description of the game — genre, core mechanic, and what makes it stand out. Replace this with a line or two about the actual project.",
    source: "itch.io — animeasian",
    sourceIcon: "🕹",
    icon: "🚀",
    thumbnail: null,
    tags: ["Unity", "C#", "2D"],
    linkLabel: "Play on itch.io",
    linkUrl: "https://animeasian.itch.io/",
    isPlaceholder: true,
  },
  {
    id: "proj-2",
    title: "[ Project Name ]",
    description:
      "Replace with the real game description — e.g. a runner-to-spaceship game built in Unreal Engine 4.27, or a Unity prototype.",
    source: "itch.io — animeasian",
    sourceIcon: "🕹",
    icon: "🛰️",
    thumbnail: null,
    tags: ["Unreal Engine", "Arcade"],
    linkLabel: "Play on itch.io",
    linkUrl: "https://animeasian.itch.io/",
    isPlaceholder: true,
  },
  {
    id: "proj-3",
    title: "[ Repo Name ]",
    description:
      "Pull this in from one of your GitHub repositories — describe the system you built (combat, inventory, save system, etc).",
    source: "GitHub repo",
    sourceIcon: "📦",
    icon: "⚔️",
    thumbnail: null,
    tags: ["C#", "Game Systems"],
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/varadkolte",
    isPlaceholder: true,
  },
  {
    id: "proj-4",
    title: "[ Repo Name ]",
    description:
      "Another slot for a side project, jam game, or tool you built — Android app, Unity plugin, or anything worth showing off.",
    source: "GitHub repo",
    sourceIcon: "📦",
    icon: "🧩",
    thumbnail: null,
    tags: ["Android", "Kotlin"],
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/varadkolte",
    isPlaceholder: true,
  },
];

export const skills = [
  {
    icon: "🎮",
    title: "Game Engines",
    items: ["Unity 3D", "Unreal Engine 4", "C#"],
  },
  {
    icon: "💻",
    title: "Languages",
    items: ["C#", "Kotlin", "Java", "PHP"],
  },
  {
    icon: "🛠️",
    title: "Tools & Software",
    items: ["Android Studio", "VS Code", "MySQL", "MS Office"],
  },
  {
    icon: "🔧",
    title: "Dev Ops & OS",
    items: ["Git", "GitHub", "Linux", "RHEL", "Windows"],
  },
  {
    icon: "📡",
    title: "APIs & Protocols",
    items: ["PHP API", "Bluetooth", "WiFi (IoT)"],
  },
  {
    icon: "🌐",
    title: "Languages Spoken",
    items: ["English", "Marathi", "Hindi", "Japanese"],
  },
];

export const experience = [
  {
    company: "Shakti Electrotech",
    role: "Software Developer",
    date: "Aug 2023 — Present",
    accent: "accent",
    points: [
      "Designed and developed an Android app for company panels, enabling secure communication between hardware panels and the application.",
      "Implemented WiFi and Bluetooth-based communication with multiple devices including Raspberry Pi and ESP32 microcontrollers.",
      "Developed new protection features to enhance security of company applications.",
      "Collaborated with IT teams to design and integrate PHP API features into mobile applications.",
      "Handled defect troubleshooting and resolution management throughout the product lifecycle.",
    ],
  },
  {
    company: "Sigileum Pvt. Ltd. — Chennai",
    role: "Game Developer (Internship)",
    date: "Aug 2021 — Nov 2021",
    accent: "accent2",
    points: [
      "Designed and developed a runner-to-spaceship game in collaboration with a partner using Unreal Engine 4.27.",
      "Maintained daily updates to the game development GitHub repository ensuring team visibility and version control.",
      "Participated in regular team meetings to identify, reproduce, and resolve bugs encountered during development.",
    ],
  },
];

export const certifications = [
  {
    icon: "🏅",
    name: "Unity Certified Associate: Game Developer",
    date: "Mar 2026",
  },
  {
    icon: "🎓",
    name: "Introduction to C# Programming and Unity",
    date: "Jul 2023",
  },
  {
    icon: "🗂️",
    name: "Asset Creation and Management",
    date: "Apr 2021",
  },
  {
    icon: "🐧",
    name: "Red Hat Certified System Administrator (RHCSA)",
    date: "Apr 2021",
  },
];

export const education = {
  degree: "B.Tech",
  school: "G.H. Raisoni College of Engineering & Management",
  field: "Information Technology · Pune",
  cgpa: "7.76",
};

export const volunteer = [
  {
    title: "Technowave 2020 Coordinator",
    description:
      "Managed all activities of the Technical Event at G.H. Raisoni College of Engineering & Management (IT Department).",
  },
  {
    title: "Webmaster (IT Department)",
    description: "Managed all web activities under the IT Department at GHRCEM.",
  },
];
