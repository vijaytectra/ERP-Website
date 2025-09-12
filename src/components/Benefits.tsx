// Make sure this is a client component
'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';
import Heading from './Heading';
import { benefitsValues } from '@/utils/consts';

// Define the type for a single benefit item
interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl: StaticImageData;
}

// Child component for individual text blocks (for desktop view)
const BenefitItem = ({
  id,
  title,
  description,
  icon: Icon,
  setActiveId,
}: Benefit & { setActiveId: (id: number) => void }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the item is visible
  });

  useEffect(() => {
    if (inView) {
      setActiveId(id);
    }
  }, [inView, id, setActiveId]);



  return (
    // Set height for each scrolling section on desktop
    <div ref={ref} className="h-[32rem] flex items-center">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-8 h-8 text-text-heading" />
          <h3 className="text-2xl font-bold text-text-heading">{title}</h3>
        </div>
        <p className="text-lg text-text-heading">{description}</p>
      </div>
    </div>
  );
};

// Main Benefits component
const Benefits = () => {
  const [activeId, setActiveId] = useState(benefitsValues[0].id);
  const activeBenefit = benefitsValues.find((b) => b.id === activeId);

  return (
    <section className="relative flex flex-col items-center justify-center px-5 lg:px-10 py-10 space-y-16 bg-[#65B2DA]  lg:bg-[linear-gradient(90deg,#FFFFFF_0%,#65B2DA_90%)]">
      <Heading className=" text-center">Benefits</Heading>

      {/* DESKTOP VIEW - Two-column sticky layout */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-2 gap-16">
       


        <div>
          {benefitsValues.map((benefit) => (
            <BenefitItem
              key={benefit.id}
              {...benefit}
              setActiveId={setActiveId}
            />
          ))}
        </div>

        <div className="sticky top-16 h-96 flex items-center justify-center">
          <div className="relative w-full aspect-video transition-opacity duration-300">
            {activeBenefit && (
              <Image
                src={activeBenefit.imageUrl}
                alt={activeBenefit.title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>

      {/* MOBILE VIEW - Stacked layout */}
      <div className="lg:hidden w-full max-w-md mx-auto">
        <div className="flex flex-col gap-12">
          {benefitsValues.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.id} className="flex flex-col gap-6">
                {/* Image */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Text Content */}
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <Icon className="w-7 h-7 text-text-heading" />
                    <h3 className="text-xl font-bold text-text-heading">{benefit.title}</h3>
                  </div>
                  <p className="text-base text-white">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
