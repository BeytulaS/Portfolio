"use client";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type HoverState = { type: string | null };

const HoverContext = createContext<{
  hoverState: HoverState;
  setHoverState: Dispatch<SetStateAction<HoverState>>;
}>({
  hoverState: { type: null },
  setHoverState: () => {},
});

export function useHover() {
  return useContext(HoverContext);
}

export function SmartCursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hoverState, setHoverState] = useState<HoverState>({ type: null });

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
