// ScrollContext.tsx
"use client";
import React, { createContext, useContext, useRef } from "react";
import { motion, useScroll } from "motion/react";

// Define a type for the context value
interface ScrollContextType {
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<any>(undefined);

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll(); // Framer Motion hook for scroll progress

  return (
    <motion.div
      className=""
      style={{ scaleX: scrollYProgress }} // Animate scale based on scroll progress
    />
  );
};
export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={{ aboutRef, projectsRef, contactRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useClickScroll = () => useContext(ScrollContext);
