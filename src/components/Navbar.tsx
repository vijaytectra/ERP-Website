"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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
    const [activeSection, setActiveSection] = useState<string>("#");

    const handleLinkClick = () => setOpen(false);
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.5 } // adjust sensitivity
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [activeSection]);

    return (
        <nav className=" w-full  shadow-[0_0_4px_0_#968bff40] bg-yellow-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-3 py-2  md:py-5 lg:px-10 lg:py-1  flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="block">
                        <Image
                            src="/logo.svg" // ✅ use SVG for best clarity (or PNG if no SVG available)
                            alt="CarbonLab Logo"
                            width={160}  // base width
                            height={60}  // base height
                            className="object-contain 
                 w-[160px] h-[80px]   // mobile
                 md:w-[150px] md:h-[60px]  // tablet
                 lg:w-[180px] lg:h-[70px]" // desktop
                            priority
                        />
                    </Link>
                </div>



                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex flex-row items-center space-x-8 text-sm">
                    {navLinks.map(({ label, href }) => {
                        const isActive = href === activeSection;

                        return (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className={`flex items-center gap-3 font-sa font-[400] transition ${isActive
                                        ? "text-web font-medium"
                                        : "text-heading "
                                        }`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop Download Brochure */}
                <div className="hidden lg:block">
                    <a href="/brochure.pdf" download>
                        <Button className="rounded-4xl bg-primary text-white font-semibold px-4 py-2 hover:text-white transition">
                            Download Brochure
                        </Button>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden flex items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button aria-label="Open navigation menu" className="p-2 text-primary">
                                <Menu size={28} />
                            </button>
                        </SheetTrigger>

                        <SheetContent side="left" className="p-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="p-6 flex flex-col gap-3">
                                {navLinks.map(({ label, href }) => {
                                    const isActive = href === activeSection;

                                    return (
                                        <Link
                                            key={label}
                                            href={href}
                                            onClick={handleLinkClick}
                                            className={`block py-3 text-lg font-medium transition ${isActive
                                                ? "text-web"
                                                : "text-paragraph hover:text-primary"
                                                }`}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {label}
                                        </Link>
                                    );
                                })}

                                <Button
                                    onClick={handleLinkClick}
                                    asChild
                                    className=" w-full rounded-4xl text-center  font-semibold text-white "
                                >
                                    <a href="/brochure.pdf" download>
                                        Download Brochure
                                    </a>
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