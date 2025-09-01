import Image from 'next/image'
import React from 'react'
import WhyUsCard from './WhyUsCard'
import Heading from './Heading'
import { features1, features2 } from '@/utils/consts'

const Features = () => {
    return (
        <div className='flex flex-col items-center justify-center  px-5 lg:px-10 py-3 bg-white"'>
            <Heading className='mt-6'>Why choose Our ERP</Heading>

            <div className="flex flex-col md:flex-row gap-5 mt-10">

                <div className="grid grid-cols-1 gap-6">
                    {features1.map((item) => (
                        <WhyUsCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>

                <div className="relative w-full  mt-10">
                    <Image
                        src="/fea-1.png"
                        alt="Hero Illustration"
                        width={1200}
                        height={700}
                        className="w-full h-auto object-contain drop-shadow-lg"
                        priority
                    />
                </div>

            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-10">
                <div className="relative w-full  mt-10 ">
                    <Image
                        src="/fea-2.png"
                        alt="Hero Illustration"
                        width={1200}
                        height={700}
                        className="w-full h-auto object-contain drop-shadow-lg"
                        priority
                    />
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {features2.map((item) => (
                        <WhyUsCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>



            </div>

        </div>
    )
}

export default Features