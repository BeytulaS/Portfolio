"use client";
import { type } from "os";
import { createContext, useContext, useState } from "react";

interface HoverContextType {
  hoverState: { type: string | null };
  setHoverState: (hoverState: { type: string | null }) => void;
}

const HoverContext = createContext({
  hoverState: { type: null },
  setHoverState: (hoverState: { type: null | string }) => {},
});

export function useHover() {
  return useContext(HoverContext);
}

export function SmartCursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hoverState, setHoverState] = useState({ type: null });

  return (
    <HoverContext.Provider
      value={{
        hoverState,
        setHoverState,
      }}
    >
      {children}
    </HoverContext.Provider>
  );
}
