"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function FooterReveal({
  children,
  delay = 0,
}: {
  children: any;
  delay?: number;
}) {
  const element = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      element.current,
      {
        y: "300%",
        rotate: 15,
      },
      {
        y: 0,
        rotate: 0,
        duration: 2,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "bottom bottom",
        },
      }
    );
  });

  return (
    <span ref={element} className="overflow-clip inline-block w-full">
      {children}
    </span>
  );
}
