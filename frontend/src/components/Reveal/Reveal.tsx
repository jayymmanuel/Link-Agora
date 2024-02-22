// Importing the React library, which is required for creating and working with React components.
import React from "react";

// Importing the useRef and useEffect hooks from the React library.
// - The useRef hook is used to create mutable object references that persist across renders, commonly employed for accessing and interacting with DOM elements.
// - The useEffect hook is utilized for handling side effects in functional components, such as data fetching or subscribing to external events.
import { useEffect, useRef } from "react";

// Importing motion, useInView, and useAnimation from the "framer-motion" library.
// - The motion object provides components for animating elements with Framer Motion.
// - The useInView hook is used to determine if an element is in the viewport, facilitating the triggering of animations based on visibility.
// - The useAnimation hook provides a way to control animations and create dynamic animations by accessing the animation controls.
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const Reveal = ({ children, delay, duration }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Fire the animation
      controls.start("visible");
    } else {
      // Reset the animation when out of view (for repeated animations)
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      exit="hidden" // Add exit property to hide the child when scrolling past it
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
