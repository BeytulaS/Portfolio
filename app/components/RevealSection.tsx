"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function RevealSection({ children }: { children: any }) {
  const divRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      divRef.current,
      {
        y: 200,
        scale: 0.9,
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 100%",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, [divRef]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      ref={divRef}
    >
      {children}
    </div>
  );
}
