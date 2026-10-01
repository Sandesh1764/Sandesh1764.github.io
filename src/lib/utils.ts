import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAuthors(authors: string[], highlight = "Kumar Sandesh") {
  return authors.map((a) => {
    const isMe =
      a === highlight ||
      a.toLowerCase().includes("sandesh") ||
      a === "Sandesh Kumar";
    return { name: a, highlight: isMe };
  });
}
