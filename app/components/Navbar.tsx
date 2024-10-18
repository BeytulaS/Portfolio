"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { text: "About", href: "#about" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 w-screen flex flex-col justify-center items-center px-4 md:px-24 z-50 overflow-hidden mix-blend-difference`}
    >
      <div
        className={` text-lg flex w-full max-w-[1500px] md:border-b-0 md:border-emerald-200  justify-between py-4 md:mt-4 bg-transparent transition-all duration-150`}
      >
        <Logo />
        <ul className="hidden md:flex links uppercase  gap-16 font-thunderLc text-3xl">
          {links.map((link) => (
            <li key={link.text}>
              <LinkItem href={link.href} text={link.text} />
            </li>
          ))}
        </ul>
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
}

function LinkItem({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} className="cursor-pointer hover:text-shadow-sm">
      {text}
    </a>
  );
}

function MenuButton({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <button
      type="button"
      className="md:hidden menu-button flex flex-col items-center justify-center gap-2 max-h-7 z-50"
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
  );
}

function Logo() {
  return (
    <a
      href="#hero"
      aria-label="Back to top"
      className="font-thunderLc cursor-pointer  text-3xl difference z-50"
    >
      BSS
    </a>
  );
}

function MobileMenu({ menuOpen }: { menuOpen: boolean }) {
  return (
    <div
      className={`fixed top-0 right-0 mobile-links bg-slate-800  overflow-hidden w-full  md:hidden   ${
        menuOpen ? "h-48 border-b-2 border-yellowBright" : "h-0"
      } transition-all duration-300`}
    >
      <ul className="flex place-content-end gap-4 font-thunderLc text-3xl w-full mt-36 px-8">
        {links.map((link) => (
          <li key={link.text}>
            <LinkItem href={link.href} text={link.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
