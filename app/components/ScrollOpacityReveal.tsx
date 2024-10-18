"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

export default function ScrollOpacityReveal({ text }: { text: string }) {
  const element = useRef(null);
  const [showTechFlyer, setShowTechFlyer] = useState(false);
  const [showCreativityFlyer, setShowCreativityFlyer] = useState(false);

  const words = text.split(" ");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wordsRef = gsap.utils.toArray(".words");

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#textSection",
          start: "top 20%",
          end: "+=100%",
          pin: true,
          scrub: true,
        },
      })
      .fromTo(wordsRef, { opacity: 0.1 }, { opacity: 1, stagger: 0.3 });
  });

  function toggleFlyer(flyer: string) {
    if (flyer === "technology") {
      setShowCreativityFlyer(false);
      setShowTechFlyer(!showTechFlyer);
    } else {
      setShowTechFlyer(false);
      setShowCreativityFlyer(!showCreativityFlyer);
    }
  }

  return (
    <>
      <p
        ref={element}
        id="textSection"
        className=" text-charcoal max-w-[1300px] select-none font-thunderSemibold text-6xl leading-none md:text-9xl uppercase flex flex-wrap"
      >
        {words.map((word, index) => {
          return (
            <Word key={index} toggleFlyer={toggleFlyer}>
              {word}
            </Word>
          );
        })}
      </p>
      <CreativityFlyer isOpen={showCreativityFlyer} toggleFlyer={toggleFlyer} />
      <TechnologyFlyer isOpen={showTechFlyer} toggleFlyer={toggleFlyer} />
    </>
  );
}

function Word({ children, toggleFlyer }: { children: any; toggleFlyer: any }) {
  if (children === "creativity") {
    return (
      <>
        <span className="relative mr-6 mt-2 cursor-pointer">
          <span
            onClick={() => toggleFlyer("creativity")}
            className="  words text-navy"
          >
            {children}
          </span>
          <span className="absolute -top-3 -right-3 words  size-4 text-shadow text-base">
            &#9432;
          </span>
        </span>
      </>
    );
  }
  if (children === "technology") {
    return (
      <>
        <span className="mr-6 mt-2 relative">
          <span
            onClick={() => toggleFlyer("technology")}
            className="  words text-navy"
          >
            {children}
          </span>

          <span className="absolute words -right-3 -top-3 size-4 text-shadow text-base">
            &#9432;
          </span>
        </span>
      </>
    );
  }

  return <span className="mr-6 mt-2  words">{children}</span>;
}

function TechnologyFlyer({
  isOpen,
  toggleFlyer,
}: {
  isOpen: boolean;
  toggleFlyer: any;
}) {
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 shadow-charcoal  w-[325px] h-fit bg-white !opacity-100 ${
        isOpen ? "scale-100 -translate-y-1/2" : "scale-0 translate-y-[100vh]"
      } transition-transform duration-300 origin-top-left z-10`}
      onClick={() => toggleFlyer("technology")}
    >
      <div className="flex flex-col items-center justify-center text-lg p-8 font-thunderSemibold uppercase">
        <p className="text-3xl">Technology</p>
        <p className="text-base">I use these tools to build stuff</p>
        <ul className="w-full text-2xl my-2">
          <li>1. Next.js</li>
          <li>2. Tailwind CSS</li>
          <li>3. GSAP</li>
          <li>4. React</li>
          <li>5. Javascript</li>
          <li>6. Supabase</li>
        </ul>
        <p>{"(click inside to dismiss)"}</p>
      </div>
    </div>
  );
}

function CreativityFlyer({
  isOpen,
  toggleFlyer,
}: {
  isOpen: boolean;
  toggleFlyer: any;
}) {
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 shadow-charcoal  w-[325px] h-fit bg-white !opacity-100 ${
        isOpen ? "scale-100 -translate-y-1/2" : "scale-0 translate-y-[100vh]"
      } transition-transform duration-300 origin-top-left z-10`}
      onClick={() => toggleFlyer("creativity")}
    >
      <div className="flex flex-col items-center justify-center text-lg p-8 font-thunderSemibold uppercase">
        <p className="text-3xl">Creativity</p>
        <p className="">I use these tools to design stuff</p>
        <ul className="w-full text-2xl my-2">
          <li>1. Figma</li>
          <li>3. Photoshop</li>
          <li>4. Illustrator</li>
          <li>5. Canva</li>
        </ul>
        <p className="">{"(click inside to dismiss)"}</p>
      </div>
    </div>
  );
}
