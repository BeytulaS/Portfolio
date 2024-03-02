"use client";
import Image from "next/image";
import { useState } from "react";
import { IoClose, IoInformation } from "react-icons/io5";

interface Project {
  title: string;
  description: string;
  tech?: string[];
  image: string;
  link: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: "This portfolio",
    description:
      "My personal portfolio website. Built to showcase my current and future projects.",
    image: "/Portfolio.png",
    link: "",
    repo: "",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Toraban",
    description:
      "Toraban is a personal kanban board style task manager. It is designed to be a simple and easy to use task manager that can be used by anyone.",
    image: "/Toraban.png",
    tech: ["React", "Tailwind", "Supabase", "dnd-kit"],
    link: "",
    repo: "",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <article className="relative w-full group border border-emerald-400/50 p-2 flex-grow-0 h-52 md:h-72">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={300}
        className="w-full h-full object-cover border border-neutral-700"
      />
      <div
        className={`absolute w-full top-0 left-0 h-0 bg-black/50 backdrop-blur-md group-hover:h-full ${
          infoOpen ? "h-full" : ""
        } transition-all duration-300 overflow-hidden `}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          <h2 className="text-xl font-mono mt-2 text-center">
            {project.title}
          </h2>
          <p className="text-sm text-neutral-400 text-center">
            {project.description}
          </p>
          {project.tech && (
            <div className="flex justify-center gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-emerald-400/50 px-2 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <div className="flex justify-between w-full gap-4">
            <button
              type="button"
              className="w-full bg-neutral-700 py-0.5 border border-emerald-400/50"
            >
              Github
            </button>
            <button
              type="button"
              className="w-full bg-neutral-700 py-0.5 border border-emerald-400/50"
            >
              Live
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="md:hidden absolute top-0 right-0 m-4 text-lg bg-emerald-700 p-1 shadow-lg rounded-full"
        onClick={() => setInfoOpen(!infoOpen)}
      >
        {infoOpen ? <IoClose /> : <IoInformation />}
      </button>
    </article>
  );
}

export default function ProjectsCarousel() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}
