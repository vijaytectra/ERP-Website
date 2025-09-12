"use client";

import React from "react";
import {
  motion,
  useInView,
} from "motion/react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "typewriter" | "wave" | "fade" | "flip" | "magnetic";
  delay?: number;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  variant = "default",
  delay = 0
}) => {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Mouse tracking for magnetic variant



  // Convert children to string for text processing
  const text = typeof children === 'string' ? children : React.Children.toArray(children).join('');

  const renderAnimatedText = () => {
    switch (variant) {

      case "wave":
        return (
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: delay }
              }
            }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    rotateX: -90
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0
                  }
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}

                className="inline-block cursor-default"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );


      default:
        return (
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: delay,
              type: "spring",
              stiffness: 100
            }}
          >
            {children}
          </motion.span>
        );
    }
  };

  return (
    <motion.h1
      ref={ref}

      className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-text-heading ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: delay }}

    >
      {renderAnimatedText()}

      {/* Animated Underline Effect */}

    </motion.h1>
  );
};

export default Heading;
