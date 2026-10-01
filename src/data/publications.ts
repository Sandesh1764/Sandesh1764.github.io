export type PublicationVenue = "journal" | "conference" | "under-review" | "preprint";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueType: PublicationVenue;
  year: number;
  volumePages?: string;
  doi?: string;
  pdf?: string;
  code?: string;
  dataset?: string;
  highlightName?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    id: "jin-cea-2025",
    title:
      "A deep learning-based pin precision weeding machine with densely placed needle nozzles",
    authors: [
      "Hyungjun Jin",
      "Dewa Made Sri Arsa",
      "Talha Ilyas",
      "Jong-Hoon Lee",
      "Okjae Won",
      "Seok-Hwan Park",
      "Kumar Sandesh",
      "Sang-Cheol Kim",
      "Hyongsuk Kim",
    ],
    venue: "Computers and Electronics in Agriculture",
    venueType: "journal",
    year: 2025,
    volumePages: "239:110990",
    doi: "https://doi.org/10.1016/j.compag.2025.110990",
    highlightName: "Kumar Sandesh",
    note: "Pin-precision agricultural weeding; field-robot perception contribution.",
  },
];

export const publicationFilters: { id: PublicationVenue | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "journal", label: "Journal" },
  { id: "conference", label: "Conference" },
  { id: "under-review", label: "Under Review" },
  { id: "preprint", label: "Preprint" },
];
