"use client";

import React from "react";
import Heading from "./Heading";
import { features1 } from "@/utils/consts";
import FeaturesCard from "./FeaturesCard";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-16 px-5 lg:px-10 py-20 bg-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary-web/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Heading variant="wave">Features</Heading>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {features1.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { 
                opacity: 0, 
                scale: 0.8, 
                y: 50,
                rotateX: -15,
              },
              visible: { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                rotateX: 0,
              },
            }}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{
              y: -15,
              scale: 1.03,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            style={{
              transformStyle: "preserve-3d"
            }}
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