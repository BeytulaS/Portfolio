"use client";

import { useEffect, useState } from "react";

export default function ScrollController() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const scrollHandler = () => {
      const scrollY = window.scrollY;
      const hero = document.getElementById("hero")?.offsetTop;
      const about = document.getElementById("about")?.offsetTop;
      const projects = document.getElementById("projects")?.offsetTop;
      const contact = document.getElementById("contact")?.offsetTop;

      if (about !== undefined && scrollY < about) {
        setActiveSection("hero");
      } else if (projects !== undefined && scrollY < projects) {
        setActiveSection("about");
      } else if (contact !== undefined && (scrollY < contact || !contact)) {
        setActiveSection("projects");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="hidden fixed h-screen top-0 right-0 mr-2 md:mr-8 z-30 text-8xl md:flex flex-col gap-2 items-center justify-center">
      <div
        className={`w-4 aspect-square ring-2 ring-white ring-inset p-2  ${
          activeSection === "hero" ? "bg-emerald-400 rotate-0" : "rotate-45"
        } transition-all duration-300`}
        onClick={() => scrollToTop()}
      />
      <div
        className={`w-4 aspect-square ring-2 ring-white ring-inset p-2  ${
          activeSection === "about" ? "bg-emerald-400 rotate-0" : "rotate-45"
        } transition-all duration-300`}
        onClick={() => scrollToSection("about")}
      />
      <div
        className={`w-4 aspect-square ring-2 ring-white ring-inset p-2  ${
          activeSection === "projects" ? "bg-emerald-400 rotate-0" : "rotate-45"
        } transition-all duration-300`}
        onClick={() => scrollToSection("projects")}
      />
      <div
        className={`w-4 aspect-square ring-2 ring-white ring-inset p-2  ${
          activeSection === "contact" ? "bg-emerald-400 rotate-0" : "rotate-45"
        } transition-all duration-300`}
        onClick={() => scrollToSection("contact")}
      />
    </div>
  );
}
