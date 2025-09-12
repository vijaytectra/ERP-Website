import React from 'react'
import Heading from './Heading'
import PricingSection from './PricingSection'

const Pricing = () => {
    return (
        <div className="relative flex flex-col items-center justify-center px-5 lg:px-10 py-10 space-y-10  bg-white">
            <Heading className=" text-center text-black">Choose Your Plan</Heading>
            <p className='text-base md:text-lg text-text-paragraph font-medium'>Flexible pricing that scales with your institution. Get started with a plan that fits your needs.</p>



            <PricingSection />
        </div>
    )
}

export default Pricing