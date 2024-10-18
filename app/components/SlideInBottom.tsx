"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SlideInBottom({
  children,
  element,
}: {
  children: any;
  element: string;
}) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      element,
      {
        y: 150,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "-100% bottom",
          end: "+=1",
        },
      }
    );
  });

  return <>{children}</>;
}
