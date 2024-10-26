// ScrollContext.tsx
"use client";
import React, { createContext, useContext, useRef } from "react";

// Define a type for the context value
interface ScrollContextType {
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<any>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={{ aboutRef, projectsRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
