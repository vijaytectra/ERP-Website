import { LucideIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface FeaturesCardProps {
    key?: number;
    title: string;
    description: string;
    icon: LucideIcon;
    imageUrl: StaticImageData;
    iconbg?: string;
    iconColor?: string;

}
const FeaturesCard: React.FC<FeaturesCardProps> = ({ title, description, icon: Icon, imageUrl, iconbg, iconColor }) => {
    return (
        <div className='flex flex-col gap-8 p-4 rounded-lg shadow-2xl transition hover:bg-gray-50'>
            <div className="relative w-full aspect-video transition-opacity duration-300">

                <Image
                    src={imageUrl}
                    alt="Hero Illustration"
                    width={1200}
                    height={700}
                    className="w-full h-48 object-contain  drop-shadow-lg"
                    priority
                />

            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">

                    <div className={`flex-shrink-0  p-3  rounded-full`} style={{ backgroundColor: iconbg }} >
                        <Icon className={`text-[${iconColor}] text-4xl`} style={{ color: iconColor }} />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-web">{title}</h3>
                </div>
                <div>
                    <p className="text-sm text-text-paragraph mt-1">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesCard