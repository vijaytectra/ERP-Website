import React from 'react'
import Heading from './Heading'
import UseCaseCard from './UseCaseCard'
import { useCasesValues } from '@/utils/consts'

const UseCases = () => {
    return (
        <div className="relative flex flex-col items-center space-y-10 justify-center px-5 lg:px-10 py-10 bg-usecasees-bg">
            <Heading className=" text-center text-white">Use Cases</Heading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
                {useCasesValues.map((item) => (
                    <UseCaseCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        bgColor={item.bgColor}
                    />
                ))}
            </div>


        </div>
    )
}

export default UseCases