"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/utils/consts';
import { Mail } from 'lucide-react';
import { motion, useInView, useReducedMotion, Variants } from 'motion/react';

const Footer = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for performance
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.footer
      ref={ref}
      className="bg-usecasees-bg text-white relative overflow-hidden"
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      animate={shouldReduceMotion ? {} : (isInView ? { opacity: 1 } : {})}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-web/5"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/5"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      <div className=" mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main footer content grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Column 1: Logo and Tagline */}
          <motion.div
            className="space-y-4"
            variants={itemVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ willChange: 'transform' }}
            >
              <Image
                src="/logo-white.svg"
                alt="EduSuite Logo"
                width={160}
                height={50}
                className="object-contain"
              />
            </motion.div>
            <motion.p
              className="text-sm leading-relaxed text-gray-300"
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={shouldReduceMotion ? {} : (isInView ? { opacity: 1 } : {})}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Trusted By Academic Institutions For Reliability, Security, And Measurable Outcomes.
            </motion.p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            className="space-y-4 flex xl:justify-center xl:items-center"
            variants={itemVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            <div>
              <motion.h3
                className="text-lg font-semibold text-white mb-6 relative"
                initial={shouldReduceMotion ? {} : { x: -10, opacity: 0 }}
                animate={shouldReduceMotion ? {} : (isInView ? { x: 0, opacity: 1 } : {})}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Quick Links

              </motion.h3>
              <ul className="space-y-3">
                {navLinks.map(({ label, href }, index) => (
                  <motion.li
                    key={label}
                    initial={shouldReduceMotion ? {} : { x: -20, opacity: 0 }}
                    animate={shouldReduceMotion ? {} : (isInView ? { x: 0, opacity: 1 } : {})}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : {
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      style={{ willChange: 'transform' }}
                    >
                      <Link
                        href={href}
                        className="text-sm text-white hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <motion.div
                          className="w-0 h-0.5 bg-web mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                        />
                        {label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Contact Us */}
          <motion.div
            className="space-y-4 flex xl:justify-center xl:items-start"
            variants={itemVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            <div>
              <motion.h3
                className="text-lg font-semibold text-white mb-6 relative"
                initial={shouldReduceMotion ? {} : { x: -10, opacity: 0 }}
                animate={shouldReduceMotion ? {} : (isInView ? { x: 0, opacity: 1 } : {})}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Contact Us

              </motion.h3>
              <ul className="space-y-4 text-sm">
                <motion.li
                  className="flex items-center gap-3"
                  initial={shouldReduceMotion ? {} : { x: -20, opacity: 0 }}
                  animate={shouldReduceMotion ? {} : (isInView ? { x: 0, opacity: 1 } : {})}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >


                </motion.li>
                <motion.li
                  className="flex items-center gap-3"
                  initial={shouldReduceMotion ? {} : { x: -20, opacity: 0 }}
                  animate={shouldReduceMotion ? {} : (isInView ? { x: 0, opacity: 1 } : {})}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <motion.div
                    className="p-2 rounded-full "
                    whileHover={shouldReduceMotion ? {} : {
                      scale: 1.1,
                      backgroundColor: "rgba(124, 111, 255, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                    style={{ willChange: 'transform, background-color' }}
                  >
                    <Mail size={14} className="text-accent" />
                  </motion.div>
                  <motion.a
                    href="mailto:teamedusuite@yahoo.com"
                    className="text-white hover:text-white/90 transition-colors duration-200"
                    whileHover={shouldReduceMotion ? {} : {
                      x: 3,
                      transition: { duration: 0.2 }
                    }}
                  >
                    teamedusuite@yahoo.com

                  </motion.a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

     

        {/* Bottom Bar with Animated Border */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm relative"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : (isInView ? { opacity: 1, y: 0 } : {})}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          {/* Animated top border */}
          <motion.div
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-primary-web via-accent to-transparent"
            initial={shouldReduceMotion ? {} : { width: 0 }}
            animate={shouldReduceMotion ? {} : (isInView ? { width: "100%" } : {})}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
          />

          {/* Copyright Notice */}
          <motion.p
            className="text-gray-100 order-2 sm:order-1 mt-4 sm:mt-0"
            initial={shouldReduceMotion ? {} : { x: -10, opacity: 0 }}
            animate={shouldReduceMotion ? {} : (isInView ? { x: 0, opacity: 1 } : {})}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            &copy; {new Date().getFullYear()}{" "}
            <motion.a
              href="https://www.tectratechnologies.com"
              target="_blank"
              className="hover:text-white transition-colors duration-200"
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Tectratechnologies
            </motion.a>
            . All Rights Reserved.
          </motion.p>

          {/* Legal Links */}
          <motion.div
            className="flex space-x-6 order-1 sm:order-2"
            initial={shouldReduceMotion ? {} : { x: 10, opacity: 0 }}
            animate={shouldReduceMotion ? {} : (isInView ? { x: 0, opacity: 1 } : {})}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms Of Service" },
              { href: "/data-security", label: "Data Security" }
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={shouldReduceMotion ? {} : { y: 10, opacity: 0 }}
                animate={shouldReduceMotion ? {} : (isInView ? { y: 0, opacity: 1 } : {})}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                whileHover={shouldReduceMotion ? {} : {
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <Link
                  href={link.href}
                  className="hover:text-white cursor-pointer transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
