"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface SlideAnimationProps {
  className?: string;
  once?: boolean;
  direction?: "left" | "right";
  children: React.ReactNode;
}

export default function Slide({
  className,
  once,
  direction,
  children,
}: SlideAnimationProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        hidden: {
          opacity: 0,
          x: direction === "left" ? -100 : 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      className={className}
      style={{ originX: direction === "left" ? 0 : 1, height: "100%" }}
    >
      {children}
    </motion.div>
  );
}
