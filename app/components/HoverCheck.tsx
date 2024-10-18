"use client";
import { useHover } from "../providers/SmartCursorProvider";

export default function HoverCheck({
  children,
  hoverType,
}: {
  children: React.ReactNode;
  hoverType: string;
}) {
  const { setHoverState } = useHover();

  return (
    <div
      onMouseEnter={() => setHoverState({ type: hoverType })}
      onMouseLeave={() => setHoverState({ type: null })}
    >
      {children}
    </div>
  );
}
