"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/utils/consts";
import { Button } from "./ui/button";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("#home");
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { scrollY } = useScroll();

    // Simple scroll detection
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const handleLinkClick = (href: string) => {
        setOpen(false);

        if (!href.startsWith("#")) {
            router.push(href);
            return;
        }

        if (pathname !== "/") {
            router.push(`/${href}`);
            return;
        }

        setTimeout(() => {
            const elementId = href.substring(1);
            if (elementId === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const element = document.getElementById(elementId);
                element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    };

    useEffect(() => {
        if (pathname === "/") {
            const sections = document.querySelectorAll("section[id]");
            if (sections.length === 0) {
                setActiveSection("#home");
                return;
            }

            const observerOptions = {
                root: null,
                rootMargin: "-80px 0px -80px 0px",
                threshold: 0.1,
            };

            const observer = new IntersectionObserver((entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                if (visibleEntries.length > 0) {
                    visibleEntries.sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio
                    );
                    setActiveSection(`#${visibleEntries[0].target.id}`);
                }
            }, observerOptions);

            sections.forEach((section) => observer.observe(section));
            return () => observer.disconnect();
        } else {
            const currentNavLink = navLinks.find(
                (link) => `/${link.href}` === pathname || link.href === pathname
            );
            if (currentNavLink) {
                setActiveSection(currentNavLink.href);
            }
        }
    }, [pathname]);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash) {
                setActiveSection(window.location.hash);
            }
        };
        window.addEventListener("hashchange", handleHashChange);
        if (window.location.hash) {
            setActiveSection(window.location.hash);
        }
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <motion.nav
            className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg"
                : "bg-white/80 backdrop-blur-sm shadow-[0_0_4px_0_#968bff40]"
                }`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="mx-auto px-3 md:py-5 lg:px-10 lg:py-1 flex items-center justify-between">

                {/* Simple Logo Animation */}
                <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <motion.button
                        onClick={() => handleLinkClick("#home")}
                        aria-label="Navigate to homepage"
                        className="block cursor-pointer focus:outline-none"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            src="/logo-black.svg"
                            alt="ERP Logo"
                            width={160}
                            height={60}
                            className="object-contain w-[160px] h-[70px] md:w-[150px] md:h-[60px] lg:w-[180px] lg:h-[70px]"
                            priority
                        />
                    </motion.button>
                </motion.div>

                {/* Clean Desktop Navigation */}
                <motion.ul
                    className="hidden lg:flex flex-row items-center space-x-8 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {navLinks.map(({ label, href }) => {
                        const isActive =
                            href === activeSection ||
                            (pathname !== "/" &&
                                (`/${href}` === pathname || href === pathname));
                        return (
                            <li key={label} className="relative">
                                <motion.button
                                    onClick={() => handleLinkClick(href)}
                                    className={`flex items-center gap-3 font-medium transition-colors duration-200 py-2 px-1 ${isActive
                                        ? "text-primary-web"
                                        : "text-black hover:text-primary-web/80"
                                        }`}
                                    whileHover={{ y: -1 }}
                                    transition={{ duration: 0.2 }}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {label}
                                </motion.button>

                                {/* Smooth Active Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav-indicator"
                                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-web to-accent"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </motion.ul>

                {/* Simple CTA Button */}
                <motion.div
                    className="hidden lg:block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Button
                            onClick={() => handleLinkClick("#contact")}
                            aria-label="go to contact us"
                            className="rounded-3xl bg-[#958AFF] text-white px-6 py-2 hover:bg-[#958AFF]/90 hover:shadow-lg hover:shadow-[#958AFF]/25 transition-all duration-300"
                        >
                            Schedule a Demo
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Clean Mobile Menu */}
                <div className="lg:hidden flex items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <motion.button
                                aria-label="Open navigation menu"

                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    animate={{ rotate: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {
                                        open ? (
                                            <X size={28} className="text-primary-web" />
                                        ) : (
                                            <Menu size={28} className="text-primary-web" />
                                        )
                                    }
                                    {/* <Menu size={28} className="text-primary-web" /> */}
                                </motion.div>
                            </motion.button>
                        </SheetTrigger>

                        <SheetContent side="left" className="p-0 w-72">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                            <motion.div
                                className="p-6 flex flex-col gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Simple Mobile Header */}
                                <motion.div
                                    className="mb-6 pb-4 border-b border-gray-100"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">Navigation</h3>
                                </motion.div>

                                {/* Mobile Menu Items */}
                                {navLinks.map(({ label, href }, index) => {
                                    const isActive =
                                        href === activeSection ||
                                        (pathname !== "/" &&
                                            (`/${href}` === pathname || href === pathname));
                                    return (
                                        <motion.button
                                            key={label}
                                            onClick={() => handleLinkClick(href)}
                                            className={`block py-3 px-4 text-lg font-medium transition-all duration-200 text-left rounded-lg ${isActive
                                                ? "text-primary-web bg-primary-web/10 "
                                                : "text-text-paragraph hover:text-text-heading hover:bg-gray-50"
                                                }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {label}
                                        </motion.button>
                                    );
                                })}

                                {/* Mobile CTA */}
                                <motion.div
                                    className="mt-6 pt-4 border-t border-gray-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            onClick={() => handleLinkClick("#contact")}
                                            className="w-full rounded-2xl bg-[#958AFF] text-white py-3 hover:bg-[#958AFF]/90 font-semibold transition-all duration-300"
                                        >
                                            Schedule a Demo
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
