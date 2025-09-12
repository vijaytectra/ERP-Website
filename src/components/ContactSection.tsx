import React from 'react'
import ContactForm from './ContactForm'
import Heading from './Heading'

const ContactSection = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center  bg-[linear-gradient(90deg,#FFFFFF_0%,#65B2DA_100%)] px-5 lg:px-10 py-16 mb-10"

        >       <div className="flex lg:flex-row flex-col gap-16">

                <div className="w-full lg:w-1/2 flex flex-col gap-5">
                    <Heading className=' text-2xl lg:text-3xl'>
                        Transform Institutional Operations with a Unified ERP
                    </Heading>
                    <p className='text-base  text-text-paragraph font-medium'>
                        Ready to streamline your educational institution? Get in touch with our team to schedule a personalized demo and see how our ERP can transform your operations.
                    </p>


                </div>
                <div className="w-full lg:w-1/2  lg:absolute lg:right-0 lg:-top-68">

                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactSection