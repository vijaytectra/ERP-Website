"use client";

import React, { FC } from "react";
import Heading from "./Heading";
import PricingSection from "./PricingSection";
import { motion } from "motion/react";

const Pricing: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-5 lg:px-10 py-10 space-y-8 bg-white">
      {/* Heading with Fade + Slide Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Heading variant="fade" className="text-center text-black">Choose Your Plan</Heading>
      </motion.div>

      {/* Paragraph with Slight Delay */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center text-base md:text-lg text-text-paragraph font-medium"
      >
        Flexible pricing that scales with your institution. Get started with a
        plan that fits your needs.
      </motion.p>

      {/* Pricing Cards with Staggered Animation */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="w-full"
      >
        <PricingSection />
      </motion.div>
    </section>
  );
};

export default Pricing;
