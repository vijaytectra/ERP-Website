import React from 'react'
import Heading from './Heading'
import { features1 } from '@/utils/consts'
import FeaturesCard from './FeaturesCard'

const Features = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-16  px-5 lg:px-10 py-10 bg-white"'>
            <Heading className=''>Features</Heading>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features1.map((item) => (
                    <FeaturesCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        imageUrl={item.imageUrl}
                        iconbg={item.iconbg}
                        iconColor={item.iconColor}
                    />
                ))}
            </div>





        </div>
    )
}

export default Features