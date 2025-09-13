"use client";

import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface FeaturesCardProps {
  key?: number;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: StaticImageData;
  iconbg?: string;
  iconColor?: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  title,
  description,
  icon: Icon,
  imageUrl,
  iconbg,
  iconColor,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-8 p-6 rounded-2xl shadow-lg bg-white border border-gray-100 relative overflow-hidden group"
      style={{
        willChange: 'transform, box-shadow',
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
      whileHover={!shouldReduceMotion ? {
        y: -5, // Reduced from scale for better performance
        boxShadow: "0 20px 40px -12px rgba(101, 178, 218, 0.2)",
        transition: {
          duration: 0.3,
          ease: "easeOut"
        },
      } : {}}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Optimized hover background - single layer */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-web/3 to-accent/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
        style={{ willChange: 'opacity' }}
      />

      {/* Simplified border effect */}
      <div
        className="absolute inset-0 rounded-2xl border border-primary-web/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ willChange: 'opacity' }}
      />

      {/* Optimized Image Container */}
      <div className="relative w-full aspect-video z-10">
        <motion.div
          style={{ willChange: 'transform' }}
          animate={!shouldReduceMotion ? {
            y: [-2, 2, -2],
          } : {}}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={700}
            className="w-full h-48 object-contain drop-shadow-md"
            priority
          />
        </motion.div>

        {/* Simplified glow effect */}
        <div
          className="absolute inset-0 -z-10 bg-primary-web/10 blur-lg rounded-lg mx-auto w-3/4 h-3/4 opacity-60"
          style={{ willChange: 'opacity' }}
        />
      </div>

      <div className="flex flex-col gap-4 z-10">
        <div className="flex items-center gap-4">
          {/* Optimized Icon Container */}
          <motion.div
            className="flex-shrink-0 p-3 rounded-2xl transition-transform duration-300 ease-out"
            style={{
              backgroundColor: iconbg,
              willChange: 'transform'
            }}
            whileHover={!shouldReduceMotion ? {
              scale: 1.05,
              rotate: 3,
              transition: { duration: 0.2 }
            } : {}}
          >
            <Icon
              className="text-4xl transition-transform duration-500 ease-in-out"
              style={{ color: iconColor }}
            />
          </motion.div>

          <h3 className="text-lg font-semibold text-primary-web">
            {title}
          </h3>
        </div>

        <p className="text-sm text-text-paragraph font-medium mt-1">
          {description}
        </p>
      </div>

      {/* Simplified floating elements */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary-web/30"
            style={{ willChange: 'transform' }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          />

          <motion.div
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-accent/30"
            style={{ willChange: 'transform' }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
              delay: 1
            }}
          />
        </>
      )}
    </motion.div>
  );
};

export default FeaturesCard;
