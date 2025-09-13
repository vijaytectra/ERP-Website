"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "motion/react";
import Heading from "./Heading";
import { benefitsValues } from "@/utils/consts";

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl: StaticImageData;
}

const BenefitItem = ({
  id,
  title,
  description,
  icon: Icon,
  setActiveId,
}: Benefit & { setActiveId: (id: number) => void }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActiveId(id);
  }, [inView, id, setActiveId]);

  return (
    <motion.div
      ref={ref}
      className="h-[32rem] flex items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-8 h-8 text-text-heading" />
          <h3 className="text-2xl font-bold text-text-heading">{title}</h3>
        </div>
        <p className="text-lg text-text-heading">{description}</p>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const [activeId, setActiveId] = useState(benefitsValues[0].id);
  const activeBenefit = benefitsValues.find((b) => b.id === activeId);

  return (
    <section className="relative flex flex-col items-center justify-center px-5 lg:px-10 py-20 space-y-16 bg-[#65B2DA] lg:bg-[linear-gradient(90deg,#65B2DA_0%,#FFFFFF_100%)]">
      <Heading variant="fade" className="text-center">Benefits</Heading>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:grid  mx-auto grid-cols-2 gap-16">
        {/* Left column with scroll-triggered fade */}
        <div>
          {benefitsValues.map((benefit) => (
            <BenefitItem key={benefit.id} {...benefit} setActiveId={setActiveId} />
          ))}
        </div>

        {/* Right column with animated image */}
        <div className="sticky top-20 h-96 flex items-center justify-center">
          <div className="relative w-full aspect-video">
            <AnimatePresence mode="wait">
              {activeBenefit && (
                <motion.div
                  key={activeBenefit.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeBenefit.imageUrl}
                    alt={activeBenefit.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden w-full max-w-md mx-auto">
        <div className="flex flex-col gap-12">
          {benefitsValues.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                {/* Image */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <Icon className="w-7 h-7 text-text-heading" />
                    <h3 className="text-xl font-bold text-text-heading">{benefit.title}</h3>
                  </div>
                  <p className="text-base text-white">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
