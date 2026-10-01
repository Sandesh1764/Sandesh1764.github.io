export const site = {
  name: "Sandesh Kumar",
  title:
    "Researcher in Artificial Intelligence, Computer Vision, Robotics, and Intelligent Systems",
  affiliation: "Jeonbuk National University, South Korea",
  institute: "Core Research Institute of Intelligent Robots (CRIIR)",
  department: "Department of Electronics Engineering",
  location: "Jeonju, South Korea",
  email: "sandeshkumar@jbnu.ac.kr",
  emailPersonal: "sandeshthahrani87@gmail.com",
  researchStatement:
    "Researcher in computer vision, deep learning, and intelligent robotics at Jeonbuk National University. I develop perception and control systems for autonomous agricultural robots, with experience spanning semantic segmentation, domain adaptation, hardware integration, and field evaluation.",
  currentlyWorkingOn: [
    "CUDA-accelerated Monte Carlo Localization for ROS 2",
    "UWB particle-filter localization and anchor geometry analysis",
    "Heterogeneous AI execution across CPU / GPU / Jetson platforms",
    "Perception and pin-precision actuation for agricultural field robots",
  ],
  links: {
    github: "https://github.com/Sandesh1764",
    scholar: "https://scholar.google.com/",
    linkedin: "https://www.linkedin.com/in/sandesh-kumar-77ab25209",
    email: "mailto:sandeshkumar@jbnu.ac.kr",
    emailPersonal: "mailto:sandeshthahrani87@gmail.com",
    cv: "/cv/Sandesh_Kumar_CV.pdf",
    kbs: "https://news.kbs.co.kr/news/pc/view/view.do?ncd=8365296",
    youtube: "https://www.youtube.com/watch?v=MbpG0fTchuQ",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/MbpG0fTchuQ",
  },
} as const;

export type SiteConfig = typeof site;
