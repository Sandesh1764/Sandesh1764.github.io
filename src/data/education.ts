export type EducationItem = {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  notes?: string[];
};

export const education: EducationItem[] = [
  {
    id: "jbnu-phd",
    degree: "Ph.D. in Electronics Engineering",
    field: "Electronics Engineering",
    institution: "Jeonbuk National University",
    location: "Jeonju, South Korea",
    start: "Mar 2026",
    end: "Present",
    notes: [
      "Core Research Institute of Intelligent Robots (CRIIR), Department of Electronics Engineering",
      "Research in computer vision, intelligent robotics, and autonomous agricultural systems",
    ],
  },
  {
    id: "jbnu-ms",
    degree: "M.S. in Electronics Engineering",
    field: "Electronics Engineering",
    institution: "Jeonbuk National University",
    location: "Jeonju, South Korea",
    start: "Sep 2023",
    end: "Dec 2025",
    notes: [
      "Thesis: Deep Learning-based Accurate Shooting Control for Needle-Nozzle Weeding Machine",
      "CGPA: 4.0 / 4.0",
      "Core Research Institute of Intelligent Robots (CRIIR)",
    ],
  },
  {
    id: "qau-bs",
    degree: "B.S. in Information Technology (BSIT)",
    field: "Information Technology",
    institution: "Quaid-i-Azam University",
    location: "Islamabad, Pakistan",
    start: "Sep 2017",
    end: "Dec 2021",
    notes: [
      "Thesis: Face Mask Detection System (A Machine Learning Model)",
      "CGPA: 3.2 / 4.0",
    ],
  },
];
