"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function ParallaxImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [translateY, setTranslateY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const translateY = Math.min(50, scrollY / 10);
      setTranslateY(translateY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full aspect-[4/5] " ref={ref}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className={`object-cover scale-110 select-none`}
      />
    </div>
  );
}
