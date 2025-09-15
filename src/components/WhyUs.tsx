"use client";

import React from "react";
import Heading from "./Heading";
import { whyUsValues } from "@/utils/consts";
import WhyUsCard from "./WhyUsCard";
import Image from "next/image";
import { motion } from "motion/react";

const WhyUs = () => {
  return (
    <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center space-y-5 px-5 lg:px-10 py-5 bg-white overflow-hidden">
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

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Heading variant="fade">Why choose Our ERP</Heading>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-5 lg:gap-10 justify-center items-center relative z-10">
        {/* Enhanced Image Animation */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: -50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className=" flex flex-col h-96 justify-center items-center"
          >
            <Image
              src="/why.svg"
              alt="Why Choose Our ERP Illustration"
              width={1200}
              height={700}
              className="w-full h-96 object-contain object-center drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* Glow effect behind image */}
          <motion.div
            className="absolute inset-0 -z-10 bg-primary-web/20 blur-3xl rounded-full mx-auto w-4/5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Enhanced Cards with Stagger Animation */}
        <motion.div
          className="grid grid-cols-1 lg:gap-2 gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {whyUsValues.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  x: 30,
                  rotateZ: -5
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotateZ: 0
                },
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <WhyUsCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                iconbg={item.iconbg}
                iconColor={item.iconColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-primary-web/20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-10 w-4 h-4 rounded-full bg-accent/30"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default WhyUs;