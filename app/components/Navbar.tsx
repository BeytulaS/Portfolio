"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }

  useEffect(() => {
    const scrollHandler = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", scrollHandler);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-screen flex flex-col justify-center items-center md:px-24 z-50 overflow-hidden`}
    >
      <div
        className={` text-lg flex w-full max-w-6xl md:border-2 md:border-emerald-200 md:border-opacity-0   justify-between px-8 md:rounded-full ${
          scrolled || menuOpen
            ? "md:bg-black/50 bg-neutral-800/60 backdrop-blur-md py-2 md:mt-4 shadow-md md:border-opacity-40"
            : "py-8 "
        }  transition-all duration-150`}
      >
        <div className="font-mono cursor-pointer">
          <a onClick={() => scrollToTop()} aria-label="Back to top">
            BSS
          </a>
        </div>
        <ul className="hidden md:flex links  gap-16 font-mono">
          <li className="link-animation cursor-pointer">
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li className="link-animation cursor-pointer">
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li className="link-animation cursor-pointer">
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
        <button
          type="button"
          className="md:hidden menu-button flex flex-col items-center justify-center gap-2 max-h-7"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`h-0.5 w-8 bg-white origin-center ${
              menuOpen ? " rotate-[45deg] translate-y-[5px] " : "rotate-0"
            } transition-all duration-150`}
          />

          <div
            className={`h-0.5 w-8 bg-white origin-center ${
              menuOpen ? " -rotate-45 -translate-y-[5px] " : "rotate-0"
            } transition-all duration-150`}
          />
          <span className="sr-only">
            {menuOpen ? "Close navigation" : "Open navigation"}
          </span>
        </button>
      </div>
      <div
        className={`mobile-links bg-neutral-800/60  backdrop-blur-md h-0 md:hidden w-full  ${
          menuOpen ? "h-36 border-b-2 border-emerald-700" : ""
        } transition-all duration-300`}
      >
        <ul className="flex flex-col items-center gap-4 font-mono w-full py-4 ">
          <li className="link-animation cursor-pointer">
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li className="link-animation cursor-pointer">
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li className="link-animation cursor-pointer">
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
