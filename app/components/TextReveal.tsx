"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function TextReveal({ children }: { children: any }) {
  const element = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      element.current,
      {
        y: "200%",
        rotate: 15,
      },
      {
        y: 0,
        rotate: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element.current,
          start: "-100% bottom",
          end: "+=1",
        },
      }
    );
  });

  return (
    <div ref={element} className="overflow-clip inline-block">
      {children}
    </div>
  );
}
