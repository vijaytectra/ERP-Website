"use client";

import { FC } from "react";
import { LucideIcon } from "lucide-react";
import { motion, Variants } from "motion/react";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  className?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const UseCaseCard: FC<UseCaseCardProps> = ({
  title,
  description,
  icon: Icon,
  bgColor,
  className = "",
}) => {
  return (
    <motion.div
      className={`rounded-2xl shadow-md p-6 flex flex-col gap-3 cursor-pointer ${className}`}
      style={{ backgroundColor: bgColor }}
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        transition: { type: "spring", stiffness: 200, damping: 15 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow"
        whileHover={{
          y: [0, -3, 0],
          transition: { duration: 0.4 },
        }}
      >
        <Icon className="w-6 h-6 text-text-heading" />
      </motion.div>

      <h3 className="text-lg font-semibold text-text-heading">{title}</h3>
      <p className="text-sm text-text-paragraph leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default UseCaseCard;
