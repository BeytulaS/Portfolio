"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useHover } from "../providers/SmartCursorProvider";
import { IoMdArrowForward } from "react-icons/io";

export default function CustomCursor() {
  const size = 30;
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const circle = useRef(null);
  const { hoverState } = useHover();
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const manageMouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    mouse.current = { x: clientX, y: clientY };
  };

  const lerp = (x: number, y: number, amount: number) =>
    x * (1 - amount) + y * amount;

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.03),
      y: lerp(y, mouse.current.y, 0.03),
    };

    window.requestAnimationFrame(animate);
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)"); // Detect if device has a fine pointer (mouse or similar)
    setIsCursorVisible(mediaQuery.matches);

    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  useEffect(() => {
    if (hoverState.type === "button") {
      gsap.to(circle.current, { width: 60, height: 60 });
      // Add logic to display arrow icon
    } else if (hoverState.type === "image") {
      gsap.to(circle.current, { width: 60, height: 60 });
      // Add logic to display magnifying glass icon
    } else if (hoverState.type === "carousel") {
      gsap.to(circle.current, { width: 60, height: 60 });
      // Add logic to display
    } else {
      gsap.to(circle.current, { width: size, height: size });
    }
  }, [hoverState]);

  return (
    isCursorVisible && (
      <div
        ref={circle}
        className="hidden fixed top-0 left-0 bg-yellowBright rounded-full mix-blend-difference pointer-events-none md:flex justify-center items-center z-[999]"
        style={{ width: size, height: size }}
      >
        {hoverState.type === "button" && (
          <IoMdArrowForward
            className={`size-8 m-auto transform transition-all duration-500 mix-blend-difference ${
              hoverState.type === "button"
                ? "scale-100 -rotate-45"
                : "scale-0 rotate-0"
            }`}
          />
        )}
        {hoverState.type === "carousel" && (
          <span
            className={`font-thunderSemibold text-2xl uppercase text-center mix-blend-difference ${
              hoverState.type === "carousel" ? "scale-100" : "scale-0"
            }`}
          >
            SWIPE
          </span>
        )}
      </div>
    )
  );
}
