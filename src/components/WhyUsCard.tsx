"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface WhyUsCardProps {
  key?: number;
  title: string;
  description: string;
  icon: LucideIcon;
  iconbg?: string;
  iconColor?: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  iconbg, 
  iconColor 
}) => {
  return (
    <motion.div
      className="flex items-start gap-4 p-3 rounded-2xl bg-white border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 group relative overflow-hidden"
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hover effect background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-web/5 to-accent/5 opacity-0 group-hover:opacity-100 z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Animated Icon */}
      <motion.div
        className={`flex-shrink-0 p-3 rounded-2xl z-10`}
        style={{ backgroundColor: iconbg }}
        whileHover={{
          rotate: [0, -5, 5, 0],
          scale: 1.1,
          transition: { duration: 0.4 },
        }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Icon className="text-4xl" style={{ color: iconColor }} />
        </motion.div>
      </motion.div>
      
      {/* Content */}
      <div className="z-10">
        <motion.h3 
          className="text-lg font-semibold text-primary-web"
          whileHover={{ color: "#4a90e2" }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-sm font-medium text-text-paragraph mt-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary-web/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default WhyUsCard;