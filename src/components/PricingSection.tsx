"use client";

import { FC, useState, useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { plans } from "@/utils/consts";
import { Plan } from "@/utils/types";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";

const YEARLY_DISCOUNT_PERCENTAGE = 20;

const PricingSection: FC = () => {
  const [billing, setBilling] = useState<"half_yearly" | "yearly">("yearly");
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for subtle parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 75, damping: 100 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 75, damping: 100 });

  // Global transforms for all cards (keeping your exact styling)
  const globalCardRotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-2deg", "2deg"]);
  const globalCardRotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["2deg", "-2deg"]);

  const calculateDiscountedPrice = (price: number) =>
    price - (price * YEARLY_DISCOUNT_PERCENTAGE) / 100;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left - width / 2) / width);
    mouseY.set((e.clientY - top - height / 2) / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="w-full py-5"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enhanced Billing Toggle */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 20 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-4 mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Label
            htmlFor="billing-switch"
            className={`text-sm font-medium cursor-pointer transition-all duration-300 ${
              billing === "half_yearly" ? "text-text-heading" : "text-gray-500"
            }`}
          >
            Half-Yearly
          </Label>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Switch
            id="billing-switch"
            checked={billing === "yearly"}
            className="border-web border-2"
            onCheckedChange={(checked: boolean) =>
              setBilling(checked ? "yearly" : "half_yearly")
            }
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Label
            htmlFor="billing-switch"
            className={`text-sm font-medium cursor-pointer transition-all duration-300 ${
              billing === "yearly" ? "text-text-heading" : "text-gray-500"
            }`}
          >
            Yearly
          </Label>
        </motion.div>

        <AnimatePresence>
          {billing === "yearly" && (
            <motion.span
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-xs text-violet-600 font-medium"
            >
              Save {YEARLY_DISCOUNT_PERCENTAGE}%
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced Plans Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {plans.map((plan: Plan, index) => {
          const yearlyDiscountedPrice = calculateDiscountedPrice(plan.price.yearly).toFixed(0);

          return (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 60,
                  rotateX: -20,
                  scale: 0.9
                },
                show: { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1
                },
              }}
              transition={{ 
                duration: 0.7, 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1
              }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: plan.popular ? 0 : 3,
                z: 30,
                boxShadow: "0px 8px 25px rgba(0,0,0,0.1)"
              }}
              style={{
                rotateY: plan.popular ? 0 : globalCardRotateY,
                rotateX: plan.popular ? 0 : globalCardRotateX,
                transformStyle: "preserve-3d"
              }}
              className={`relative border rounded-2xl p-6 flex flex-col shadow-sm transition-transform duration-300 ${
                plan.popular
                  ? "border-[#968BFF] ring-[1px] ring-[#968BFF]"
                  : "border-gray-200"
              }`}
            >
              {/* Enhanced Popular Badge */}
              <AnimatePresence>
                {plan.popular && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0, y: -10, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.2 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#968BFF] text-white text-xs px-3 py-1 rounded-full"
                  >
                    Most Popular
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Animated Title */}
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                className="text-xl font-bold text-text-heading"
              >
                {plan.name}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="text-sm text-text-paragraph mt-1"
              >
                {plan.tagline}
              </motion.p>

              {/* Animated Price with Smooth Transitions */}
              <div className="my-6">
                <AnimatePresence mode="wait">
                  {billing === "yearly" ? (
                    <motion.div
                      key="yearly"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                      className="flex items-end gap-2"
                    >
                      <motion.p 
                        className="xl:text-3xl text-2xl font-bold text-text-heading"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Rs.{yearlyDiscountedPrice}
                      </motion.p>
                      <motion.p 
                        className="text-xl font-medium text-gray-400 line-through"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        Rs.{plan.price.yearly}
                      </motion.p>
                      <p className="text-text-paragraph text-sm">/ year</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="half-yearly"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                      className="flex items-end gap-2"
                    >
                      <motion.p 
                        className="text-4xl font-bold text-text-heading"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Rs.{plan.price.half_yearly}
                      </motion.p>
                      <p className="text-text-paragraph text-sm">/ 6 months</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Animated Description */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                className="text-sm text-text-paragraph"
              >
                {plan.description}
              </motion.p>

              {/* Enhanced Features List */}
              <motion.ul 
                className="mt-6 space-y-3 text-sm flex-1"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20, scale: 0.9 },
                      show: { opacity: 1, x: 0, scale: 1 }
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex items-center gap-2 text-text-paragraph cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                    >
                      <Check className="w-4 h-4 text-shadow-primary-web shrink-0" />
                    </motion.div>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Enhanced CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8"
              >
                <Button
                  className={`w-full rounded-lg py-2 font-medium text-sm cursor-pointer transition-colors ${
                    plan.popular
                      ? "bg-[#968BFF] text-white hover:bg-violet-500"
                      : "bg-[#968BFF]/50 text-black hover:text-white hover:bg-[#968BFF]"
                  }`}
                >
                  <motion.span
                    whileHover={{ letterSpacing: "0.02em" }}
                    transition={{ duration: 0.2 }}
                  >
                    Get Started
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default PricingSection;
