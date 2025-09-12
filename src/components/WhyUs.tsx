import React from 'react'
import Heading from './Heading'
import { whyUsValues } from '@/utils/consts'
import WhyUsCard from './WhyUsCard'
import Image from 'next/image'

const WhyUs = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-16   px-5 lg:px-10 py-10 bg-white"'>
            <Heading className=''>Why choose Our ERP</Heading>

            <div className="flex flex-col md:flex-row gap-16 ">
                <div className="relative w-full  ">
                    <Image
                        src="/why.svg"
                        alt="Hero Illustration"
                        width={1200}
                        height={700}
                        className="w-full h-auto object-contain drop-shadow-lg"
                        priority
                    />
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {whyUsValues.map((item) => (
                        <WhyUsCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            iconbg={item.iconbg}
                            iconColor={item.iconColor}
                        />
                    ))}
                </div>



            </div>

        </div>
    )
}

export default WhyUs