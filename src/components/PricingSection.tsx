"use client";

import { FC, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch"; // Import the Switch component
import { Label } from "./ui/label"; // Import the Label component

// --- Configuration ---
// Easily edit the discount percentage here
const YEARLY_DISCOUNT_PERCENTAGE = 20;

// --- Data Structure ---
type Plan = {
    name: string;
    tagline: string;
    description: string;
    price: {
        half_yearly: number;
        yearly: number;
    };
    features: string[];
    popular?: boolean;
};

const plans: Plan[] = [
    {
        name: "Starter",
        tagline: "Perfect for Preschools & Small Schools",
        description:
            "Ideal for preschools and small schools looking to digitize admissions, fees, attendance, and basic communication.",
        price: {
            half_yearly: 499,
            yearly: 999,
        },
        features: [
            "Student Admission Management",
            "Fee Collection & Tracking",
            "Attendance Management",
            "Basic Parent Communication",
            "Up to 200 Students",
            "Standard Support",
        ],
    },
    {
        name: "Growth",
        tagline: "Best for Mid-size Institutions",
        description:
            "For mid-size schools/colleges needing advanced academics, timetable automation, wallet, and parent engagement.",
        price: {
            half_yearly: 999,
            yearly: 1999,
        },
        features: [
            "All Starter Features",
            "Advanced Exam Management",
            "Timetable Automation",
            "Student Wallet Integration",
            "Advanced Analytics",
            "Dedicated Account Manager",
            "Up to 1000 Students",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        tagline: "Complete Solution for Universities",
        description:
            "For universities/groups requiring multi-board accreditation, advanced analytics, custom workflows, and priority support.",
        price: {
            half_yearly: 1999,
            yearly: 3999,
        },
        features: [
            "All Growth Features",
            "Multi-Board Accreditation Reports",
            "Custom Workflow Automation",
            "API Access & Integrations",
            "24/7 Priority Support",
            "Unlimited Students",
        ],
    },
];

const PricingSection: FC = () => {
    const [billing, setBilling] = useState<"half_yearly" | "yearly">("yearly");

    const calculateDiscountedPrice = (price: number) => {
        return price - (price * YEARLY_DISCOUNT_PERCENTAGE) / 100;
    };

    return (
        <section className="w-full py-5">
            {/* Billing Toggle */}
            <div className="flex justify-center items-center gap-4 mb-12">
                <Label htmlFor="billing-switch" className={`text-sm font-medium ${billing === "half_yearly" ? "text-text-heading" : "text-gray-500"}`}>
                    Half-Yearly
                </Label>
                <Switch
                    id="billing-switch"
                    checked={billing === "yearly"}
                    className="border-web border-2 "
                    onCheckedChange={(checked: unknown) => setBilling(checked ? "yearly" : "half_yearly")}
                />
                <Label htmlFor="billing-switch" className={`text-sm font-medium ${billing === "yearly" ? "text-text-heading" : "text-gray-500"}`}>
                    Yearly
                </Label>
                {billing === "yearly" && (
                    <span className="text-xs text-violet-600 font-medium">
                        Save {YEARLY_DISCOUNT_PERCENTAGE}%
                    </span>
                )}
            </div>

            {/* Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {plans.map((plan) => {
                    const yearlyDiscountedPrice = calculateDiscountedPrice(
                        plan.price.yearly
                    ).toFixed(0)

                    return (
                        <div
                            key={plan.name}
                            className={`relative border rounded-2xl p-6 flex flex-col shadow-sm ${plan.popular
                                ? "border-[#968BFF] ring-[1px] ring-[#968BFF]"
                                : "border-gray-200"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#968BFF] text-white text-xs px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            {/* Title */}
                            <h3 className="text-xl font-bold text-text-heading">{plan.name}</h3>
                            <p className="text-sm text-text-paragraph mt-1">{plan.tagline}</p>

                            {/* Price */}
                            <div className="my-6">
                                {billing === "yearly" ? (
                                    <div className="flex items-end gap-2">
                                        <p className="xl:text-3xl text-2xl font-bold text-text-heading">
                                            Rs.{yearlyDiscountedPrice}
                                        </p>
                                        <p className="text-xl font-medium text-gray-400 line-through">
                                            Rs.{plan.price.yearly}
                                        </p>
                                        <p className="text-text-paragraph text-sm">/ year</p>
                                    </div>
                                ) : (
                                    <div className="flex items-end gap-2">
                                        <p className="text-4xl font-bold text-text-heading">
                                            Rs.{plan.price.half_yearly}
                                        </p>
                                        <p className="text-text-paragraph text-sm">/ 6 months</p>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-sm text-text-paragraph">{plan.description}</p>

                            {/* Features */}
                            <ul className="mt-6 space-y-3 text-sm flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-text-paragraph">
                                        <Check className="w-4 h-4 text-shadow-primary-web shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button
                                className={`mt-8 w-full rounded-lg py-2 font-medium text-sm cursor-pointer transition-colors ${plan.popular
                                    ? "bg-[#968BFF] text-white hover:bg-violet-500"
                                    : "bg-[#968BFF]/50 text-black hover:text-white hover:bg-[#968BFF]"
                                    }`}
                            >
                                Get Started
                            </Button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PricingSection;
