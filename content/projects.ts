// Work grid data. Replace these placeholders with real projects — keep 6 or
// change as many as you like; the grid adapts. No client names are invented:
// every entry below is a placeholder (TODO).
//
// To add an image: put it in /public/work/ (ideally 1200×900, .jpg or .webp)
// and set `image: { src: "/work/my-project.jpg", alt: "What the image shows" }`.

export type Category = "Design" | "Entertainment" | "Marketing";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: Category;
  image?: { src: string; alt: string };
  href?: string;
};

export const projects: Project[] = [
  { slug: "project-1", title: "Project title", client: "Client name", category: "Design" },
  { slug: "project-2", title: "Project title", client: "Client name", category: "Entertainment" },
  { slug: "project-3", title: "Project title", client: "Client name", category: "Marketing" },
  { slug: "project-4", title: "Project title", client: "Client name", category: "Design" },
  { slug: "project-5", title: "Project title", client: "Client name", category: "Marketing" },
  { slug: "project-6", title: "Project title", client: "Client name", category: "Entertainment" },
];
