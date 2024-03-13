import { Button } from '@/components/ui/button'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Price = () => {
    const dataPrice = [{
        id: 1,

    },
    {
        id: 1,

    }, {
        id: 1,

    }]
    return (
        <section className='bg-cover bg-center'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10 '>
                    <div className=" text-center my-10 md:mx-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                        <div className='flex flex-col justify-center '>
                            <h1 className="text-4xl md:text-6xl font-medium text-black mb-4 md:mb-6">SIMRS / E-Klinik</h1>
                            <p className="text-gray-500  text-justify">You have 3 plans to choose from for using FWR blocks. Basic blocks are FREE forever. Other premium blocks are also free. You can use it for your personal or commercial projects. Just don't forget to share our website or give attribution.</p>
                            <p className="text-gray-500 text-justify my-5">SIMRS by PT Solusi Nusantara Berdikari is a comprehensive Hospital Management Information System designed to streamline hospital operations and enhance patient care. With SIMRS, healthcare institutions can effectively manage patient information, medical records, appointments, billing, and more, all within a single integrated platform.</p>

                        </div>
                        <div className='bg-product1 bg-cover h-64 sm:h-[500px] md:h-[500px] my-5  md:my-0 rounded-xl'></div>

                    </div>
                    <div className='md:mx-10 sm:mx-10 text-white'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:py-10  '>
                            <div className="max-w-3xl mx-auto text-center">
                                <h1 className="text-3xl md:text-4xl font-medium  mb-4 md:mb-6 text-based1">Pricing Plans</h1>
                                <p className="text-gray-500 xl:mx-12">You have 3 plans to choose from for using FWR blocks. Basic blocks are FREE forever. Other premium blocks are also free. You can use it for your personal or commercial projects. Just don't forget to share our website or give attribution.</p>
                            </div>

                            <div className="pricing-plans lg:flex mx-5 gap-5 mt-6 md:mt-12">
                                {dataPrice.map((data, index) => {
                                    return (
                                        <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 text-black"
                                            data-aos='fade-left'
                                            data-aos-offset="200"
                                            data-aos-delay="50"
                                            data-aos-duration="1000"
                                            data-aos-easing="ease-in-out"
                                            data-aos-mirror="true"
                                            data-aos-once="false" key={index}>
                                            <div className="pricing-plan border-t-4 border-solid border-based1 bg-gray-200 hover:text-white hover:bg-based rounded-2xl text-center max-w-sm mx-auto hover:border-based1 transition-colors duration-300">
                                                <div className="p-6 md:py-8">
                                                    <h4 className="font-medium leading-tight text-2xl mb-2">Small Business</h4>
                                                    <p className="text-gray-600">For small projects</p>
                                                </div>
                                                <div className="pricing-amount   p-6 transition-colors duration-300">
                                                    <div className=""><span className="text-4xl font-semibold">$19</span> /year</div>
                                                </div>
                                                <div className="p-6">
                                                    <ul className="leading-loose">
                                                        <li>Upto 5 uses</li>
                                                        <li>Max 100 items/month</li>
                                                        <li>500 queries/month</li>
                                                        <li>Basic statistics</li>
                                                        <li>Email Support</li>
                                                    </ul>
                                                    <div className="mt-6 py-4 ">
                                                        <button className="bg-yellow-300 text-xl hover:text-black  hover:border-white border hover:bg-white text-white py-2 px-6 rounded-full transition-colors duration-300">Get Started</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </section >
    )
}

export default Price