import React from "react";
import { LucideIcon } from "lucide-react";

interface WhyUsCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ title, description, icon: Icon }) => {
    return (
        <div className="flex items-start gap-4 p-4 rounded-lg border-b-[1px] transition hover:bg-gray-50">
            <div className=" flex-shrink-0">
                <Icon className="text-primary-web text-xl" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-primary-web">{title}</h3>
                <p className="text-sm text-text-paragraph mt-1">{description}</p>
            </div>
        </div>
    );
};

export default WhyUsCard;
