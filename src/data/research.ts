export type ResearchGroup = {
  id: string;
  title: string;
  description: string;
  topics: string[];
};

export const researchGroups: ResearchGroup[] = [
  {
    id: "perception",
    title: "Perception & AI",
    description:
      "Learning-based perception for outdoor and robotic environments, with emphasis on semantic understanding and reliable inference.",
    topics: [
      "Computer vision",
      "Deep learning",
      "Semantic segmentation",
      "Machine learning",
      "Domain adaptation",
    ],
  },
  {
    id: "autonomous",
    title: "Autonomous Systems",
    description:
      "Localization and navigation methods that remain robust under sensor noise, geometric uncertainty, and real-world deployment constraints.",
    topics: [
      "Robot localization",
      "Navigation",
      "Sensor fusion",
      "Particle filters",
      "UWB / GNSS",
    ],
  },
  {
    id: "efficient",
    title: "Efficient Computing",
    description:
      "Making perception and localization workloads practical on the hardware that robots actually carry.",
    topics: [
      "CUDA / GPU acceleration",
      "Edge AI",
      "Heterogeneous computing",
      "Jetson deployment",
      "Inference efficiency",
    ],
  },
  {
    id: "applied",
    title: "Applied AI",
    description:
      "Closing the loop between learned perception and physical action in agriculture and scientific monitoring.",
    topics: [
      "Precision agriculture",
      "Field robotics",
      "Scientific machine learning",
      "Environmental sensing",
    ],
  },
];
