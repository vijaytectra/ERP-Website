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
import { Menu } from "lucide-react";
import { navLinks } from "@/utils/consts"; // Assuming this is your links array
import { Button } from "./ui/button";
import { motion } from "motion/react"; // <-- Make sure to import motion

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("#home");
    const router = useRouter();
    const pathname = usePathname();

    const handleLinkClick = (href: string) => {
        // Always close the mobile navigation sheet first.
        setOpen(false);

        // Case 1: The link is for a different page (e.g., "/about").
        if (!href.startsWith("#")) {
            router.push(href);
            return;
        }

        // Case 2: The link is an anchor on another page.
        // Navigate to the home page with the hash.
        if (pathname !== "/") {
            router.push(`/${href}`);
            return;
        }

        // Case 3: We are on the home page, and it's an anchor link.
        // Use a small timeout to prevent a race condition with the Sheet's
        // closing animation, which can otherwise block the scroll command.
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
        }, 100); // 100ms is a safe delay for the animation to start.
    };

    // IntersectionObserver for active section on scroll (Your logic is good)
    useEffect(() => {
        if (pathname === "/") {
            const sections = document.querySelectorAll("section[id]");
            if (sections.length === 0) {
                setActiveSection("#home");
                return;
            }

            const observerOptions = {
                root: null,
                rootMargin: "-80px 0px -80px 0px", // Adjust margin to trigger earlier/later
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

    // Handle direct navigation to hash links (Your logic is good)
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
        <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-[0_0_4px_0_#968bff40]">
            <div className="max-w-7xl mx-auto px-3 py-2 md:py-5 lg:px-10 lg:py-1 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <button
                        onClick={() => handleLinkClick("#home")}
                        className="block cursor-pointer"
                    >
                        <Image
                            src="/logo-black.svg"
                            alt="ERP Logo"
                            width={160}
                            height={60}
                            className="object-contain w-[160px] h-[60px] md:w-[150px] md:h-[60px] lg:w-[180px] lg:h-[70px]"
                            priority
                        />
                    </button>
                </div>

                {/* Desktop Navigation Links with Animated Indicator */}
                <ul className="hidden lg:flex flex-row items-center space-x-8 text-sm">
                    {navLinks.map(({ label, href }) => {
                        const isActive =
                            href === activeSection ||
                            (pathname !== "/" &&
                                (`/${href}` === pathname || href === pathname));
                        return (
                            <li key={label} className="relative">
                                <button
                                    onClick={() => handleLinkClick(href)}
                                    className={`flex items-center gap-3 font-medium transition cursor-pointer ${isActive
                                        ? "text-primary-web"
                                        : "text-black hover:text-primary-web/80"
                                        }`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {label}
                                </button>
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav-indicator"
                                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-web"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop "Schedule a Demo" */}
                <div className="hidden lg:block">
                    <Button
                        onClick={() => handleLinkClick("#contact")}
                        className="rounded-4xl bg-[#958AFF] text-white  px-4 py-2 hover:bg-[#958AFF]/95 cursor-pointer transition"
                    >
                        Schedule a Demo
                    </Button>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden flex items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button
                                aria-label="Open navigation menu"
                                className="p-2 text-primary"
                            >
                                <Menu size={28} className="text-primary-web" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="p-6 flex flex-col gap-3">
                                {navLinks.map(({ label, href }) => {
                                    const isActive =
                                        href === activeSection ||
                                        (pathname !== "/" &&
                                            (`/${href}` === pathname || href === pathname));
                                    return (
                                        <button
                                            key={label}
                                            onClick={() => handleLinkClick(href)}
                                            className={`block py-3 text-lg font-medium transition text-left ${isActive
                                                ? "text-primary-web"
                                                : "text-text-paragraph hover:text-text-heading"
                                                }`}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {label}
                                        </button>
                                    );
                                })}
                                <Button
                                    onClick={() => handleLinkClick("#contact")}
                                    className="w-full rounded-4xl text-center bg-web hover:bg-web/95 font-semibold text-black"
                                >
                                    Schedule a Demo
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
