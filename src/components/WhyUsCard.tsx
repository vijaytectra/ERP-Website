import React from "react";
import { LucideIcon } from "lucide-react";

interface WhyUsCardProps {
    key?:number;
    title: string;
    description: string;
    icon: LucideIcon;
    iconbg?: string;
    iconColor?: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ title, description, icon: Icon, iconbg, iconColor }) => {
    return (
        <div className="flex items-start gap-4 p-4  border-b-[1px] border-gray-400 rounded-none transition hover:bg-gray-50">
            <div className={`flex-shrink-0  p-3  rounded-full`}  style={{ backgroundColor: iconbg }} >
                <Icon className={`text-[${iconColor}] text-4xl`} style={{ color: iconColor }}/>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-primary-web">{title}</h3>
                <p className="text-sm text-text-paragraph mt-1">{description}</p>
            </div>
        </div>
    );
};

export default WhyUsCard;
