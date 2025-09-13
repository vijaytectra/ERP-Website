"use client";

import React from "react";
import Heading from "./Heading";
import UseCaseCard from "./UseCaseCard";
import { useCasesValues } from "@/utils/consts";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.30, // Cards enter one after the other
    },
  },
};

const UseCases = () => {
  return (
    <motion.div
      className="relative flex flex-col items-center space-y-10 justify-center px-5 lg:px-10 py-5 bg-usecasees-bg"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading variant="wave" className="text-center text-white">Use Cases</Heading>

      <div className="grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
        {/* First 2 cards in regular grid */}
        {useCasesValues.slice(0, 2).map((item) => (
          <UseCaseCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
        
        {/* 3rd card centered spanning both columns */}
        {useCasesValues.length > 2 && (
          <div className="col-span-full flex justify-center">
            <div className="w-full max-w-sm">
              <UseCaseCard
                key={useCasesValues[2].id}
                title={useCasesValues[2].title}
                description={useCasesValues[2].description}
                icon={useCasesValues[2].icon}
                bgColor={useCasesValues[2].bgColor}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UseCases;
