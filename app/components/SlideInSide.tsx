"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SlideInSide({
  children,
  element,
  direction = "left",
  delay = 0,
  toOpacity = 1,
}: {
  children: any;
  element: string;
  direction?: "left" | "right";
  delay?: number;
  toOpacity?: number;
}) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      element,
      {
        x: direction === "left" ? "-100%" : "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: toOpacity,

        duration: 2,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
        },
      }
    );
  });

  return <>{children}</>;
}
