"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView
} from "motion/react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Subtle mouse tracking for gentle interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 50 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 50 });

  // Very subtle 3D effects
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left - width / 2) / width);
    mouseY.set((e.clientY - top - height / 2) / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Split the heading text for word-by-word animation
  const mainText = "All-in-One ERP for Schools, Colleges, and Preschools — From Admissions through";
  const highlightText = "Accreditation, Automated";

  return (
    <div className="relative overflow-hidden">
      <motion.section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="flex flex-col items-center justify-center space-y-16 px-5 lg:px-10 py-20 pb-32
          bg-gradient-to-b from-[#65B2DA] via-[#87C4E5] via-30% to-white to-85%
          backdrop-blur-[50px]
          overflow-visible
          relative min-h-screen"
      >
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Text Content */}
        <motion.div
          className="max-w-4xl text-center space-y-8 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Enhanced heading with word-by-word animation */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-heading leading-tight">
            {mainText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}{" "}
            <motion.span
              className="text-primary-web inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                ease: "backOut",
                delay: mainText.split(" ").length * 0.08 + 0.2
              }}
            >
              {highlightText}
            </motion.span>
          </div>

          {/* Paragraph */}
          <motion.p
            className="text-base md:text-lg text-text-paragraph font-medium"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
          >
            Cloud-based, secure, and customizable ERP that streamlines admissions,
            fees, academics, compliance, analytics, and real-time parent
            communication — in one powerful platform.
          </motion.p>

          {/* Enhanced buttons with Figma-style shadows */}
          <motion.div
            className="mt-8 flex flex-col sm:justify-center sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 1.5 },
              },
            }}
          >
            <motion.a
              href="#contact"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Button 
                aria-label="Go to contact us" 
                className="rounded-full w-48 cursor-pointer bg-[#8B7EFF] text-white font-semibold px-6 py-3 hover:bg-[#7B6EEF] shadow-[0_8px_32px_rgba(139,126,255,0.4)] hover:shadow-[0_12px_40px_rgba(139,126,255,0.6)] transition-all duration-300"
              >
                Request a Demo
              </Button>
            </motion.a>

            <motion.a
              href="#pricing"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}  
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Button 
                aria-label="Go to Pricing section" 
                className="rounded-full w-48 cursor-pointer bg-white/90 backdrop-blur-sm text-text-heading font-semibold px-6 py-3 hover:bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 border border-white/20"
              >
                Get Pricing
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced Hero Image */}
        <motion.div
          className="relative w-full max-w-5xl z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B7EFF]/15 via-[#65B2DA]/10 to-transparent blur-3xl scale-110 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent blur-xl scale-105 -z-10" />
            
            <Image
              src="/hero.svg"
              alt="Hero Illustration"
              width={1200}
              height={700}
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Ambient light effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#65B2DA]/25 rounded-full blur-3xl -z-10" />
      </motion.section>

      {/* Smooth transition section */}
      <div className="relative -mt-16 h-32 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none z-20" />
    </div>
  );
};

export default HeroSection;
