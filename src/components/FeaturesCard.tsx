"use client";

import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "motion/react";

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
  return (
    <motion.div
      className="flex flex-col gap-8 p-6 rounded-2xl shadow-2xl bg-white border border-gray-100 relative overflow-hidden group"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(101, 178, 218, 0.25)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.4
        },
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      {/* Hover effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-web/5 to-accent/5 opacity-0 group-hover:opacity-100 z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Floating border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary-web/20 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Image */}
      <motion.div
        className="relative w-full aspect-video z-10"
        initial={{ opacity: 0, y: 20, rotateY: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={700}
            className="w-full h-48 object-contain drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Subtle glow behind image */}
        <motion.div
          className="absolute inset-0 -z-10 bg-primary-web/20 blur-xl rounded-lg mx-auto w-4/5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <div className="flex flex-col gap-4 z-10">
        <div className="flex items-center gap-4">
          {/* Animated Icon Container */}
          <motion.div
            className="flex-shrink-0 p-3 rounded-2xl"
            style={{ backgroundColor: iconbg }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              rotate: [0, -5, 5, 0],
              scale: 1.1,
              transition: { duration: 0.4 },
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

          <motion.h3
            className="text-lg font-semibold text-primary-web"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
        </div>

        <motion.p
          className="text-sm text-text-paragraph mt-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary-web/40"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      />

      <motion.div
        className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-accent/40"
        animate={{
          y: [0, 6, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.div>
  );
};

export default FeaturesCard;