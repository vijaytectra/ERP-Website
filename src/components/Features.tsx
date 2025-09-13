"use client";

import React from "react";
import Heading from "./Heading";
import { features1 } from "@/utils/consts";
import FeaturesCard from "./FeaturesCard";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-16 px-5 lg:px-10 py-20 bg-white overflow-hidden">
      {/* Optimized background elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary-web/8 blur-2xl"
        style={{ 
          willChange: 'transform, opacity',
          transform: 'translateZ(0)' // Force hardware acceleration
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent/6 blur-2xl"
        style={{ 
          willChange: 'transform, opacity',
          transform: 'translateZ(0)'
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
          repeatType: "reverse"
        }}
      />
      
      {/* Heading animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother feel
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading variant="fade">Features</Heading>
      </motion.div>

      {/* Optimized grid animations */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15, // Slightly faster stagger
              delayChildren: 0.1
            },
          },
        }}
      >
        {features1.map((item, index) => (
          <motion.div
            key={item.id}
            style={{ 
              willChange: 'transform, opacity',
              transform: 'translateZ(0)' // Force hardware acceleration
            }}
            variants={{
              hidden: { 
                opacity: 0, 
                y: 30, // Reduced from 50
                scale: 0.95, // Less dramatic scale change
              },
              visible: { 
                opacity: 1, 
                y: 0,
                scale: 1,
              },
            }}
            transition={{ 
              duration: 0.5, // Faster duration
              ease: [0.25, 0.46, 0.45, 0.94], // Optimized easing
              delay: index * 0.1 // Additional per-item delay for wave effect
            }}
            whileHover={{
              y: -8, // Reduced hover movement
              scale: 1.02, // Subtle scale
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            whileTap={{ scale: 0.98 }} // Add tap feedback
          >
            <FeaturesCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              imageUrl={item.imageUrl}
              iconbg={item.iconbg}
              iconColor={item.iconColor}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
