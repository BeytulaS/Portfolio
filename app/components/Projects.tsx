import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import SlideInBottom from "./SlideInBottom";
import Image1 from "@/public/portfolio/topbikini-grid.webp";
import Image2 from "@/public/portfolio/bevelo-grid.webp";
import Image3 from "@/public/portfolio/toraban-grid.webp";
import Image4 from "@/public/portfolio/bss-grid.webp";

type Project = {
  id: number;
  name: string;
  nameColor: string;
  content: string;
  bg: string;
  image: StaticImageData;
  headline: string;
  description: string;
  techStack: string[];
};

const projects = [
  {
    id: 1,
    name: "top bikini",
    nameColor: "text-pink-600",
    content: "Item 1",
    bg: "bg-pink-50",
    image: Image1,
    headline: "Ecommerce store from scratch",
    description:
      "A fully custom-built ecommerce platform for a swimwear brand, leveraging Next.js for fast performance and Supabase for seamless backend operations. This project includes product listings, a shopping cart, and custom payment integration.",
    techStack: ["Next.JS", "Supabase", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: 2,
    name: "bevelo web",
    nameColor: "text-blue-600",
    content: "Item 2",
    bg: "bg-blue-50",
    image: Image2,
    headline: "Web design agency website",
    description:
      "The official website for my digital agency, Bevelo Web, created to showcase services, previous projects, and client testimonials. Built with Next.js for fast, responsive performance and optimized with Tailwind CSS.",
    techStack: ["Next.JS", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    name: "toraban",
    nameColor: "text-orange-600",
    content: "Item 3",
    bg: "bg-orange-400/20",
    image: Image3,
    headline: "web app",
    description:
      "A functional and intuitive Kanban board web application named Toraban. Developed with React for smooth drag-and-drop task management, and Supabase to handle real-time data synchronization. Ideal for task tracking and project management.",
    techStack: ["React", "Supabase", "Tailwind CSS", "React DnD"],
  },
  {
    id: 4,
    name: "this portfolio",
    nameColor: "text-navy",
    content: "my portfolio",
    bg: "bg-charcoal/10",
    image: Image4,
    headline: "Personal portfolio website",
    description:
      "A personal portfolio designed to present my projects, skills, and professional background. Built with Next.js and styled using Tailwind CSS to deliver a clean, modern, and responsive user experience.",
    techStack: ["Next.JS", "Tailwind CSS", "GSAP"],
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <SlideInBottom key={project.id} element={`#project-${project.id}`}>
          <ProjectCard project={project} />
        </SlideInBottom>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      key={project.id}
      id={`project-${project.id}`}
      className="group border border-neutral-950/20 hover:border-neutral-950 transition-colors duration-150 shadow-none rounded-none bg-transparen"
    >
      <CardContent className="grid grid-cols-1 md:grid-cols-2 p-0">
        <div className={`${project.bg} w-fit`}>
          <Image
            src={project.image}
            alt={project.name}
            width={740}
            height={460}
            placeholder="blur"
            className="max-w-full max-h-full object-cover"
          />
        </div>
        <div className="py-4 px-1 md:py-1 flex flex-col justify-between md:ml-4">
          <div>
            <p
              className={`font-sans font-semibold uppercase ${project.nameColor}`}
            >
              {project.name}
            </p>
            <h4 className="font-thunderLc  uppercase text-2xl lg:text-4xl py-1">
              {project.headline}
            </h4>
            <p className="opacity-80 md:opacity-60 w-4/5 transition-opacity duration-300 group-hover:opacity-100 text-sm md:text-base">
              {project.description}
            </p>
          </div>
          <div className="mt-4">
            <p>Built with:</p>
            <p className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm md:text-base bg-neutral-100 border border-neutral-950 px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
