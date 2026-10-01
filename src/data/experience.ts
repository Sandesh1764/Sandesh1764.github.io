export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  responsibilities: string[];
  projects: string[];
  technologies: string[];
  outcomes: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "criir-gra",
    role: "Graduate Research Assistant",
    organization:
      "Core Research Institute of Intelligent Robots, Department of Electronics Engineering, Jeonbuk National University",
    location: "Jeonju, South Korea",
    start: "Sep 2023",
    end: "Present",
    responsibilities: [
      "Developed and integrated perception and control components for autonomous weeding, combining camera-based sensing, deep learning, Arduino-based controllers, GPIO interfaces, and robotic actuation",
      "Conducted nearly one year of hands-on agricultural fieldwork in South Korea, including dataset collection, experiments, and evaluation of autonomous weed-management systems under real-world conditions",
      "Collaborated with researchers and engineers to develop and experimentally evaluate intelligent robotic systems for precision agriculture",
    ],
    projects: [
      "Pin-precision needle-nozzle weeding machine (perception + shooting control)",
      "Crop–weed semantic segmentation (PIDNet, DeepLab, KD, ADVENT)",
      "Ongoing localization and efficient-computing studies (CUDA MCL, UWB PF)",
    ],
    technologies: [
      "PyTorch",
      "OpenCV",
      "Deep learning",
      "ROS / ROS 2",
      "Arduino / GPIO",
      "Python",
      "C++",
      "CUDA",
    ],
    outcomes: [
      "Co-authored journal publication on pin-precision weeding (Computers and Electronics in Agriculture, 2025)",
      "Contributed to a field-robot perception stack covered by KBS News (Sep 2025)",
      "Released open research repositories for crop–weed perception methods",
      "M.S. thesis on deep learning-based accurate shooting control for needle-nozzle weeding",
    ],
  },
  {
    id: "qau-lab",
    role: "Academic Practices (Lab Assistant)",
    organization: "IT Labs (OOP Dev, CCN, LINUX), Quaid-i-Azam University",
    location: "Islamabad, Pakistan",
    start: "Oct 2017",
    end: "Sep 2021",
    responsibilities: [
      "Supported undergraduate laboratory sessions in object-oriented programming, computer communication networks, and Linux environments",
      "Assisted students with practical coursework and lab exercises",
    ],
    projects: ["Undergraduate laboratory teaching support"],
    technologies: ["OOP", "Computer networks", "Linux"],
    outcomes: ["Multi-year laboratory assistance during BSIT studies"],
  },
];
