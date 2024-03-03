/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { FaLinkedin } from "react-icons/fa";
import Reveal from "./components/Reveal";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { TypeReveal } from "./components/TypeReveal";
import Image from "next/image";
import TechCards from "./components/TechCards";
import DesignCards from "./components/DesignCards";
import HobbyCards from "./components/HobbyCards";
import Slide from "./components/Slide";
import ContactForm from "./components/ContactForm";
import ProjectsCarousel from "./components/ProjectsCarousel";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="fixed top-0 left-0 p-8 bg-neutral-950 overflow-hidden w-screen h-screen flex items-center justify-center -z-10"
    >
      <Image
        src="/bg.png"
        alt="Bg"
        width={1920}
        height={1080}
        quality={60}
        placeholder="blur"
        blurDataURL="/bg.png"
        className="absolute top-0 left-0 z-0 w-screen h-screen object-cover"
      />
      <div className="absolute top-0 left-0 z-0 w-screen h-screen transparent-radial" />
      <div className="max-w-3xl md:grid md:grid-cols-3 md:relative">
        <div className="md:py-16 md:col-start-1 md:col-end-3 ">
          <Reveal>
            <div className=" last:text-emerald-400">
              <TypeReveal
                el="h1"
                text={"Welcome."}
                className="font-mono text-5xl md:text-8xl "
                once
              />
            </div>

            <p className="mt-6 font-sans text-xl md:text-2xl ">
              I'm a web developer based in Bulgaria, passionate about creating
              beautiful and functional websites with focus on user experience.
            </p>
            <div className="flex gap-4 mt-6 text-4xl">
              <a
                href={"https://www.linkedin.com/in/beytula-smail-ab8560295/"}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Linked In"
              >
                <FaLinkedin className="hover:text-blue-700 " />
              </a>
              <a
                href={"https://github.com/BeytulaS"}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Github"
              >
                <FaGithub className="hover:text-zinc-400" />
              </a>
              <a href="mailto:beytula.smail@gmail.com" aria-label="Gmail">
                <SiGmail className="hover:text-red-600" />
              </a>
            </div>
          </Reveal>
          <div className="absolute animate-float top-0 max-md:pt-10 max-md:size-60 right-0 z-10 ">
            <Image
              src="/laptop1.png"
              alt="Laptop"
              width={300}
              height={300}
              className="rotate-12"
            />
          </div>
          <div className="absolute animate-float bottom-0 md:ml-12 mb-12 md:left-1/2 z-10 ">
            <Image
              src="/mouse.png"
              alt="Mouse"
              width={300}
              height={300}
              className="-rotate-[30deg] size-28"
            />
          </div>
          <div className="absolute animate-float top-0 left-1/3 mb-10 z-10 text-4xl text-emerald-300 font-mono font-bold rotate-12"></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="mt-[100vh] w-screen min-h-screen shadow-lg grid md:grid-cols-2 border-b-2 border-gray-500 z-10"
    >
      <div className="px-8 py-12 md:px-24 min-h-screen  bg-emerald-950">
        <Slide
          direction="left"
          once
          className="flex flex-col items-center justify-evenly"
        >
          <h1 className="text-4xl md:text-6xl font-mono w-full">// About me</h1>
          <p className="text-lg mt-8 opacity-90">
            Hi there! I'm Beytula, a web developer based in Bulgaria. I like to
            create user friendly and visually appealing websites. I enjoy the
            challanges of learning new technologies and I'm always looking to
            improve my skills. I'm currently looking for new opportunities, so
            feel free to{" "}
            <a
              href="#contact"
              className="underline underline-offset-4 hover:text-emerald-400"
            >
              contact
            </a>{" "}
            me.
          </p>
          <Image
            src="/laptop.png"
            alt="Beytula"
            width={400}
            height={400}
            className="rounded-lg mb-12"
          />
        </Slide>
      </div>

      <div className="bg-emerald-900 min-h-screen px-8 md:px-24">
        <Slide direction="right" className="flex flex-col justify-evenly" once>
          <div className="w-full">
            <h2 className="text-2xl mb-4 font-mono">
              // Full stack development
            </h2>
            <TechCards />
          </div>
          <div>
            <h2 className=" text-2xl mb-4 font-mono">// Design</h2>
            <DesignCards />
          </div>
          <div>
            <h2 className=" text-2xl mb-4 font-mono">// Hobbies</h2>
            <HobbyCards />
          </div>
        </Slide>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="w-screen min-h-screen bg-neutral-900  px-8 md:px-24 p-12  flex flex-col items-center justify-evenly border-b-2 border-gray-500 z-10"
    >
      <div className="text-center space-y-8">
        <TypeReveal
          el="h1"
          text={"// Projects"}
          className="text-4xl md:text-6xl font-mono"
          once
        />

        <p className="md:text-lg text-white/70 max-w-2xl">
          Links to the project repos will be added soon along with a few other
          projects that I have been working on. Please, feel free to{" "}
          <a
            href="#contact"
            className="underline underline-offset-4 hover:text-emerald-400"
          >
            contact
          </a>{" "}
          me for more info.
        </p>
      </div>
      <div className=" w-full h-full max-w-7xl">
        <ProjectsCarousel />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-screen px-8 md:px-24  bg-emerald-950 z-10 flex flex-col items-center justify-evenly gap-4 md:gap-10"
    >
      <h1 className="text-3xl md:text-5xl font-mono text-center">// Contact</h1>

      <div className="max-w-7xl grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16 mt-2">
        <div className="flex flex-col justify-between">
          <p className="text-lg">
            Do you have an idea you would like to see come to life? Shoot me a
            message and let's make it happen.
          </p>
          <div className="hidden md:block">
            <p className="text-lg">Or get in touch here</p>
            <div
              id="links"
              className="flex gap-4 mt-4 text-2xl md:text-4xl w-full"
            >
              <a
                href={"https://www.linkedin.com/in/beytula-smail-ab8560295/"}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Linked In"
              >
                <FaLinkedin className="hover:text-blue-700 " />
              </a>
              <a
                href={"https://github.com/BeytulaS"}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Github"
              >
                <FaGithub className="hover:text-zinc-400" />
              </a>
              <a href="mailto:beytula.smail@gmail.com" aria-label="Gmail">
                <SiGmail className="hover:text-red-600" />
              </a>
            </div>
          </div>
        </div>

        <ContactForm />

        <div className="md:hidden">
          <p className="text-lg">Or get in touch here</p>
          <div
            id="mobile-links"
            className="flex gap-4 mt-4 text-3xl md:text-4xl w-full"
          >
            <a
              href={"https://www.linkedin.com/in/beytula-smail-ab8560295/"}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Linked In"
            >
              <FaLinkedin className="hover:text-blue-700 " />
            </a>
            <a
              href={"https://github.com/BeytulaS"}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Github"
            >
              <FaGithub className="hover:text-zinc-400" />
            </a>
            <a href="mailto:beytula.smail@gmail.com" aria-label="Gmail">
              <SiGmail className="hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
