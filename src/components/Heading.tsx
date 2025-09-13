"use client";

import React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "typewriter" | "wave" | "fade" | "flip" | "magnetic" | "smooth-wave" | "bounce-wave";
  delay?: number;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  variant = "default",
  delay = 0
}) => {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  // Convert children to string for text processing
  const text = typeof children === 'string' ? children : React.Children.toArray(children).join('');

  const renderAnimatedText = () => {
    if (shouldReduceMotion) {
      return (
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay }}
        >
          {children}
        </motion.span>
      );
    }

    switch (variant) {
      case "wave":
        return (
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: delay
                }
              }
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    scale: 0.8
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom smooth easing
                }}
                className="inline-block cursor-default"
                style={{ willChange: 'transform, opacity' }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );

      case "smooth-wave":
        return (
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: delay
                }
              }
            }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 15,
                    filter: "blur(4px)"
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                  }
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="inline-block cursor-default"
                style={{ willChange: 'transform, opacity, filter' }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );

      case "bounce-wave":
        return (
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: delay
                }
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
                    scale: 0.3
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120,
                  damping: 8,
                }}
                className="inline-block cursor-default"
                style={{ willChange: 'transform, opacity' }}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );

      case "fade":
        return (
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: delay
                }
              }
            }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="inline-block cursor-default"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );

      case "flip":
        return (
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: delay
                }
              }
            }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    rotateY: 90,
                    scale: 0.8
                  },
                  visible: {
                    opacity: 1,
                    rotateY: 0,
                    scale: 1
                  }
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="inline-block cursor-default"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: 'transform, opacity'
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );

      default:
        return (
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: delay,
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
      style={{ willChange: 'opacity' }}
    >
      {renderAnimatedText()}

      {/* Optional animated underline */}
      <motion.div
        className="h-1 bg-gradient-to-r from-web to-primary-web rounded-full mt-2"
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "60%", opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.5, ease: "easeOut" }}
      />
    </motion.h1>
  );
};

export default Heading;
