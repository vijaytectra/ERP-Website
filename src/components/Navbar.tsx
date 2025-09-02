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
import { navLinks } from "@/utils/consts";
import { Button } from "./ui/button";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("#home");
    const router = useRouter();
    const pathname = usePathname();

    const handleLinkClick = (href: string) => {
        setOpen(false);

        if (href === "#home") {
            // Navigate to home page
            router.push("/");
            setActiveSection("#home");
        } else if (href.startsWith("#")) {
            // If we're not on the home page, navigate to home first
            if (pathname !== "/") {
                router.push(`/${href}`);
            } else {
                // We're on home page, scroll to section
                const element = document.getElementById(href.substring(1));
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        } else {
            // Navigate to other pages
            router.push(`/${href}`);
        }
    };

    useEffect(() => {
        // Set active section based on current pathname
        if (pathname === "/") {
            // We're on home page, set up intersection observer
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
                // Find the entry with the largest intersection ratio
                const visibleEntries = entries.filter(entry => entry.isIntersecting);

                if (visibleEntries.length > 0) {
                    // Sort by intersection ratio and take the most visible one
                    visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                    const mostVisible = visibleEntries[0];
                    setActiveSection(`#${mostVisible.target.id}`);
                }
            }, observerOptions);

            sections.forEach((section) => {
                observer.observe(section);
            });

            return () => observer.disconnect();
        } else {
            // We're on a different page, find matching navLink
            const currentNavLink = navLinks.find(link => `/${link.href}` === pathname || link.href === pathname);
            if (currentNavLink) {
                setActiveSection(currentNavLink.href);
            }
        }
    }, [pathname]);

    // Handle hash changes (when user navigates directly via URL with hash)
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash) {
                setActiveSection(window.location.hash);
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        // Check for hash on initial load
        if (window.location.hash) {
            setActiveSection(window.location.hash);
        }

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <nav className="w-full shadow-[0_0_4px_0_#968bff40] bg-black sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-3 py-2 md:py-5 lg:px-10 lg:py-1 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <button
                        onClick={() => handleLinkClick("#home")}
                        className="block cursor-pointer"
                    >
                        <Image
                            src="/log1.svg"
                            alt="CarbonLab Logo"
                            width={160}
                            height={60}
                            className="object-contain w-[160px] h-[80px] md:w-[150px] md:h-[60px] lg:w-[180px] lg:h-[70px]"
                            priority
                        />
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex flex-row items-center space-x-8 text-sm">
                    {navLinks.map(({ label, href }) => {
                        const isActive = href === activeSection ||
                            (pathname !== "/" && (`/${href}` === pathname || href === pathname));
                        return (
                            <li key={label}>
                                <button
                                    onClick={() => handleLinkClick(href)}
                                    className={`flex items-center gap-3 font-medium transition cursor-pointer ${isActive
                                        ? "text-web font-medium"
                                        : "text-white hover:text-web/80"
                                        }`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {label}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop "Schedule a Demo" */}
                <div className="hidden lg:block">
                    <Button
                        onClick={() => handleLinkClick("#contact")}
                        className="rounded-4xl bg-web text-black font-semibold px-4 py-2 hover:bg-web/95 cursor-pointer transition"
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
                                <Menu size={28} className="text-white" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0">
                            <SheetTitle className="sr-only">
                                Navigation Menu
                            </SheetTitle>
                            <div className="p-6 flex flex-col gap-3">
                                {navLinks.map(({ label, href }) => {
                                    const isActive = href === activeSection ||
                                        (pathname !== "/" && (`/${href}` === pathname || href === pathname));
                                    return (
                                        <button
                                            key={label}
                                            onClick={() => handleLinkClick(href)}
                                            className={`block py-3 text-lg font-medium transition text-left ${isActive
                                                ? "text-web"
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