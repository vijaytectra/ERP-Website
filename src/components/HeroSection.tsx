import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center space-y-16  px-5 lg:px-10 py-10  bg-[linear-gradient(1deg,#65B2DAB3_0.83%,rgba(255,255,255,0.7)_99.12%)]">
            {/* Text Content */}
            <div className="max-w-4xl text-center space-y-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-heading leading-tight">
                    All-in-One ERP for Schools, Colleges, and Preschools — Admissions to{" "}
                    <span className="text-primary-web">Accreditation, Automated</span>
                </h1>

                <p className="text-base md:text-lg text-text-paragraph font-medium">
                    Cloud-based, secure, and customizable ERP that streamlines admissions,
                    fees, academics, compliance, analytics, and real-time parent
                    communication — in one powerful platform.
                </p>
                <div className="mt-8 flex flex-col sm:justify-center sm:flex-row gap-4">
                    <a href="#contact" >
                        <Button className="rounded-full w-48 cursor-pointer bg-web text-text-heading font-semibold px-6 py-3 hover:bg-web/90 transition">
                            Request a Demo
                        </Button>
                    </a>
                    <a href="#pricing">
                        <Button className="rounded-full w-48 cursor-pointer border-[1px] border-web text-text-heading  bg-white font-semibold px-6 py-3 hover:bg-white transition">
                            Get Pricing
                        </Button>
                    </a>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-5xl ">
                <Image
                    src="/hero.svg"
                    alt="Hero Illustration"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-contain drop-shadow-lg"
                    priority
                />
            </div>

            {/* Buttons */}

        </section>
    );
};

export default HeroSection;

