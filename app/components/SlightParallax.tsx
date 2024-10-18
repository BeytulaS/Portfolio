"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function SlightParallax({ children }: { children: any }) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ref.current, {
      y: 100,
      duration: 2,
      scrollTrigger: {
        trigger: ref.current,
        scrub: true,
        start: "bottom 100%",
        end: "top 100%",
      },
    });
  }, [ref]);

  return (
    <div className="w-full h-full aspect-[4/5]" ref={ref}>
      {children}
    </div>
  );
}
