"use client";

import React from 'react';
import ContactForm from './ContactForm';
import { motion, useInView } from 'motion/react';

const ContactSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className="relative flex flex-col items-center justify-center bg-[#65B2DA] lg:bg-[linear-gradient(90deg,#FFFFFF_0%,#65B2DA_100%)] px-5 lg:px-10 py-16 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex lg:flex-row flex-col gap-16">

                {/* Left Content */}
                <motion.div
                    className="w-full lg:w-1/2 flex flex-col gap-5"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-text-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        Transform Institutional Operations with a Unified ERP
                    </motion.h1>

                    <motion.p
                        className="text-base text-text-paragraph font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    >
                        Ready to streamline your educational institution? Get in touch with our team to schedule a personalized demo and see how our ERP can transform your operations.
                    </motion.p>
                </motion.div>

                {/* Right Form */}
                <motion.div
                    className="w-full lg:w-1/2 lg:absolute lg:right-0 lg:-top-68"
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ y: -5 }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactSection;
