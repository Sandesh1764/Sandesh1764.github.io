export type ProjectMedia = {
  type: "image" | "video" | "plot" | "diagram" | "youtube";
  src: string;
  caption: string;
  placeholder?: boolean;
};

export type ResearchProject = {
  slug: string;
  title: string;
  status: "ongoing" | "completed" | "featured";
  year: string;
  summary: string;
  problem: string;
  whyItMatters: string;
  contribution: string;
  methods: string[];
  environment: string[];
  results: string[];
  significance: string;
  topics: string[];
  github?: string;
  publication?: string;
  external?: { label: string; href: string }[];
  media: ProjectMedia[];
};

export const projects: ResearchProject[] = [
  {
    slug: "cuda-mcl-ros2",
    title: "CUDA-Accelerated Monte Carlo Localization for ROS 2",
    status: "ongoing",
    year: "2025–",
    summary:
      "A comparative study of serial CPU, parallel CPU, and CUDA particle-filter implementations for LiDAR-based Monte Carlo Localization in ROS 2.",
    problem:
      "Monte Carlo Localization (MCL) is a foundational method for mobile-robot pose estimation, but particle-filter updates become computationally expensive as the number of particles and LiDAR beams grows. On resource-constrained robot PCs this latency can limit real-time closed-loop navigation.",
    whyItMatters:
      "Localization latency is not merely an engineering detail: it determines whether a robot can maintain consistent pose estimates while moving, especially in large maps or dense scan configurations. Understanding CPU versus GPU trade-offs under realistic ROS 2 workloads is essential for deploying MCL on field and indoor platforms.",
    contribution:
      "I am designing and benchmarking MCL pipelines that isolate the effect of compute backend (serial CPU, multi-threaded CPU, CUDA) across controlled particle counts and LiDAR configurations, with reproducible timing and accuracy evaluation in ROS 2.",
    methods: [
      "Monte Carlo Localization",
      "Particle filters",
      "CUDA kernels for weight update / resampling stages",
      "ROS 2 integration",
      "CPU vs GPU benchmarking",
    ],
    environment: [
      "ROS 2",
      "C++ / CUDA",
      "LiDAR range data",
      "Workstation + embedded GPU targets",
    ],
    results: [
      "Placeholder: wall-clock latency vs particle count (CPU serial / CPU parallel / CUDA)",
      "Placeholder: localization accuracy under matched compute budgets",
      "Placeholder: scaling behavior with LiDAR beam density",
    ],
    significance:
      "Provides an empirical basis for choosing MCL compute strategies in ROS 2 systems where both accuracy and real-time constraints matter.",
    topics: [
      "Monte Carlo Localization",
      "Particle filters",
      "CUDA",
      "GPU acceleration",
      "ROS 2",
      "LiDAR localization",
    ],
    github: "https://github.com/Sandesh1764",
    media: [
      {
        type: "diagram",
        src: "/images/projects/cuda-mcl-architecture.svg",
        caption: "System architecture: ROS 2 MCL with CPU and CUDA backends",
        placeholder: true,
      },
      {
        type: "plot",
        src: "/images/projects/cuda-mcl-benchmark.svg",
        caption: "Benchmark placeholder: latency vs number of particles",
        placeholder: true,
      },
    ],
  },
  {
    slug: "uwb-particle-filter",
    title: "UWB-Based Particle Filter Localization for Autonomous Robots",
    status: "ongoing",
    year: "2025–",
    summary:
      "Investigation of robust UWB ranging localization with particle filters, focusing on how anchor geometry influences uncertainty and filter performance.",
    problem:
      "Ultra-wideband (UWB) ranging can localize robots where GNSS is degraded, but ranging noise and poor anchor geometry produce highly anisotropic uncertainty. Particle filters can represent multi-modal posteriors, yet their reliability depends strongly on anchor layout and measurement models.",
    whyItMatters:
      "Indoor, greenhouse, and under-canopy agricultural settings often deny reliable GNSS. Understanding the coupling between anchor geometry and particle-filter behavior is necessary before UWB can be trusted as a primary or complementary localization modality.",
    contribution:
      "I am studying UWB particle-filter localization under controlled anchor geometries, quantifying trajectory error against ground truth and relating filter performance to geometric dilution-style metrics.",
    methods: [
      "UWB ranging",
      "Particle filtering",
      "Anchor-geometry analysis",
      "GNSS / UWB integration studies",
      "ROS 2 experimentation",
    ],
    environment: ["ROS 2", "UWB anchors & tags", "Ground-truth reference", "Python / C++ analysis"],
    results: [
      "Placeholder: localization trajectories vs ground truth",
      "Placeholder: position error distributions by anchor layout",
      "Placeholder: HDOP-style geometry vs filter consistency",
    ],
    significance:
      "Clarifies when UWB particle filters are geometrically well-conditioned and how anchor placement should be designed for autonomous platforms.",
    topics: [
      "UWB ranging",
      "Particle filtering",
      "Anchor geometry",
      "Localization uncertainty",
      "GNSS/UWB integration",
      "ROS 2",
    ],
    github: "https://github.com/Sandesh1764",
    media: [
      {
        type: "diagram",
        src: "/images/projects/uwb-anchor-layout.svg",
        caption: "Anchor-layout diagram (placeholder)",
        placeholder: true,
      },
      {
        type: "plot",
        src: "/images/projects/uwb-trajectory.svg",
        caption: "Trajectory / ground-truth comparison (placeholder)",
        placeholder: true,
      },
      {
        type: "plot",
        src: "/images/projects/uwb-error.svg",
        caption: "Error plots and geometry analysis (placeholder)",
        placeholder: true,
      },
    ],
  },
  {
    slug: "compost-maturity-ml",
    title: "Machine Learning for Livestock Manure Compost Maturity Prediction",
    status: "ongoing",
    year: "2025–",
    summary:
      "Ensemble learning study of compost maturity prediction under realistic feature-availability constraints, with interpretability via SHAP and permutation importance.",
    problem:
      "Predicting compost maturity from environmental and process measurements can support livestock-waste management, but laboratory-grade feature sets are not always available in the field. Models trained on rich sensors may not transfer to sparse sensing regimes.",
    whyItMatters:
      "Operational decisions depend on whether a model remains useful when only a subset of sensors is deployed. Explicitly studying feature-availability scenarios reveals the trade-off between predictive performance and practical sensing cost.",
    contribution:
      "I evaluate ensemble models across controlled feature subsets, compare predictive metrics, and analyze feature importance with SHAP and permutation methods to identify which measurements are most informative under constrained sensing.",
    methods: [
      "Ensemble learning",
      "Feature-availability scenarios",
      "SHAP explanations",
      "Permutation importance",
      "Model comparison",
    ],
    environment: ["Python", "scikit-learn / gradient boosting stacks", "Tabular environmental features"],
    results: [
      "Placeholder: prediction metrics by feature scenario",
      "Placeholder: SHAP summary plots",
      "Placeholder: permutation importance rankings",
    ],
    significance:
      "Supports sensor-selection decisions for scientific monitoring systems where completeness of instrumentation cannot be assumed.",
    topics: [
      "Machine learning",
      "Environmental monitoring",
      "Feature availability",
      "Model interpretability",
      "SHAP",
      "Ensemble learning",
    ],
    github: "https://github.com/Sandesh1764",
    media: [
      {
        type: "plot",
        src: "/images/projects/compost-predictions.svg",
        caption: "Prediction results (placeholder)",
        placeholder: true,
      },
      {
        type: "plot",
        src: "/images/projects/compost-shap.svg",
        caption: "SHAP / feature-importance plots (placeholder)",
        placeholder: true,
      },
    ],
  },
  {
    slug: "precision-agriculture-cv",
    title: "AI and Computer Vision for Precision Agriculture",
    status: "featured",
    year: "2023–2025",
    summary:
      "Perception and intelligent actuation for crop–weed understanding on field robots, including real-time segmentation, domain adaptation, and pin-precision weeding systems featured in national media.",
    problem:
      "Field robots must distinguish crop from weed under variable lighting, growth stages, and farm domains, then act with spatial precision. Dense herbicide application is environmentally costly; perception errors directly waste chemical and damage crop.",
    whyItMatters:
      "Reliable perception is the gating factor for chemical-sparing, autonomous weeding. Systems that only work in one field or offline are insufficient for physical AI in agriculture.",
    contribution:
      "I developed and evaluated crop–weed–soil segmentation pipelines (U-Net, DeepLab, PIDNet, knowledge distillation, ADVENT domain adaptation) and contributed to pin-precision weeding perception used on an autonomous field platform.",
    methods: [
      "Semantic segmentation",
      "PIDNet / DeepLab / U-Net",
      "Knowledge distillation",
      "Unsupervised domain adaptation (ADVENT)",
      "Real-time inference",
    ],
    environment: [
      "PyTorch",
      "Field RGB / RGB-D imagery",
      "Agricultural robot platform",
      "Edge-oriented inference targets",
    ],
    results: [
      "PIDNet-S crop–weed segmentation ≈ 0.887 mIoU at ~91 FPS @ 1080p",
      "KD student retaining strong accuracy at reduced capacity",
      "Field robot perception covered by KBS News (Sep 2025)",
      "System demo video: https://www.youtube.com/watch?v=MbpG0fTchuQ",
      "Co-author on pin-precision weeding paper (Computers and Electronics in Agriculture, 2025)",
    ],
    significance:
      "Demonstrates a perception-to-actuation research line spanning supervised segmentation, compression, domain shift, and deployment on a physical weeding robot.",
    topics: [
      "Precision agriculture",
      "Crop–weed segmentation",
      "Field robotics",
      "Pin-precision spraying",
      "Real-time perception",
    ],
    github: "https://github.com/Sandesh1764/pidnet-cropweed",
    publication: "https://doi.org/10.1016/j.compag.2025.110990",
    external: [
      {
        label: "Demo video (YouTube)",
        href: "https://www.youtube.com/watch?v=MbpG0fTchuQ",
      },
      {
        label: "KBS News coverage",
        href: "https://news.kbs.co.kr/news/pc/view/view.do?ncd=8365296",
      },
      {
        label: "pidnet-cropweed",
        href: "https://github.com/Sandesh1764/pidnet-cropweed",
      },
      {
        label: "cropweed-kd",
        href: "https://github.com/Sandesh1764/cropweed-kd",
      },
      {
        label: "advent-cropweed",
        href: "https://github.com/Sandesh1764/advent-cropweed",
      },
    ],
    media: [
      {
        type: "youtube",
        src: "https://www.youtube-nocookie.com/embed/MbpG0fTchuQ",
        caption: "Field robot / pin-precision weeding demo",
      },
      {
        type: "image",
        src: "/images/projects/ag-perception-placeholder.svg",
        caption: "Field perception / overlay placeholder",
        placeholder: true,
      },
    ],
  },
  {
    slug: "heterogeneous-ai-execution",
    title: "Efficient AI Execution on Heterogeneous Computing Platforms",
    status: "ongoing",
    year: "2025–",
    summary:
      "Study of how identical AI workloads behave across server GPUs, laptop GPUs, NVIDIA Jetson-class embedded GPUs, and CPUs, with attention to compute, memory, communication, and energy.",
    problem:
      "An inference graph that is efficient on a datacenter GPU may become memory-bound, communication-bound, or energy-prohibitive on embedded platforms. Naïve porting ignores scheduling and data-movement costs that dominate on heterogeneous systems.",
    whyItMatters:
      "Robots and edge scientific instruments cannot assume server-class accelerators. Characterizing execution regimes is a research prerequisite for deploying the same model family across laboratory and field hardware.",
    contribution:
      "I am framing and measuring AI workload behavior across heterogeneous targets, separating compute, memory, and communication contributions and relating them to scheduling and energy constraints.",
    methods: [
      "Cross-platform inference profiling",
      "CPU / GPU / Jetson comparison",
      "Memory and bandwidth analysis",
      "Energy-aware evaluation",
      "Scheduling considerations",
    ],
    environment: [
      "Server GPU",
      "Laptop GPU",
      "NVIDIA Jetson",
      "CPU baselines",
      "PyTorch / TensorRT-style toolchains (as applicable)",
    ],
    results: [
      "Placeholder: latency / throughput by platform",
      "Placeholder: memory footprint and transfer overhead",
      "Placeholder: energy per inference comparisons",
    ],
    significance:
      "Connects model-level AI research to systems-level deployment realities on heterogeneous computing platforms.",
    topics: [
      "CPU",
      "GPU",
      "Jetson",
      "Edge AI",
      "Model inference",
      "Scheduling",
      "Energy efficiency",
    ],
    github: "https://github.com/Sandesh1764",
    media: [
      {
        type: "diagram",
        src: "/images/projects/hetero-platforms.svg",
        caption: "Heterogeneous platform comparison (placeholder)",
        placeholder: true,
      },
      {
        type: "plot",
        src: "/images/projects/hetero-benchmarks.svg",
        caption: "Execution / energy benchmarks (placeholder)",
        placeholder: true,
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
