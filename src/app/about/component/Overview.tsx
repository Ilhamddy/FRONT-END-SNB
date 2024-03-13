import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Overview = () => {
    return (
        <section className='bg-'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:py-10 gap-5'>
                        <div className='bg-about2 bg-cover h-64 sm:h-[500px] md:h-[550px] w-full my-5 md:my-0  rounded-xl'>
                        </div>
                        <div className='flex flex-col justify-center mx-2 '>
                            <div className='text-3xl md:text-5xl font-black text-center md:text-start space-y-28 mb-5'>
                                <h1>PT. Solusi <span className='text-based'>Nusantara</span> Berdikari</h1>
                            </div>
                            <p></p>
                            <div className="text-justify ">
                                <h5>
                                    PT Solusi Nusantara Berdikari is dedicated to empowering
                                    healthcare institutions with advanced.
                                </h5>
                                <h5 className='my-5'>
                                    Our application seamlessly integrates various hospital functions, including patient management, electronic health records (EHR), billing and invoicing, inventory management, and more. This integration ensures smooth communication and coordination across different departments.
                                </h5>
                            </div>
                            <div className='my-5 py-5 rounded-lg'>
                                <Accordion type="single" collapsible className="w-full p-5 bg-based  rounded-lg">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger >Vision PT. Solusi Nusantara Berdikari</AccordionTrigger>
                                        <AccordionContent className='bg-third p-5 rounded-lg'>
                                            The vision of PT Solusi Nusantara Berdikari is to be a
                                            trusted partner and a driving force in transforming the
                                            healthcare landscape through technology, innovation, and
                                            excellence.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Mision PT. Solusi Nusantara Berdikari</AccordionTrigger>

                                        <AccordionContent className='bg-third p-5 rounded-lg'>

                                            The mission of PT Solusi Nusantara Berdikari is to revolutionize the healthcare industry by offering cutting-edge solutions that enhance patient care, streamline operations, and improve overall efficiency in healthcare institutions.
                                        </AccordionContent>
                                    </AccordionItem>
                                    {/* <AccordionItem value="item-3">
                                        <AccordionTrigger>Goals PT. Solusi Nusantara Berdikari?</AccordionTrigger>
                                        <AccordionContent className='bg-third p-5 rounded-lg'>

                                            Overall, PT Solusi Nusantara Berdikari is dedicated to empowering healthcare institutions with advanced solutions that enable them to deliver superior patient care, optimize operations, and achieve sustainable growth in a rapidly evolving healthcare environment.
                                        </AccordionContent>
                                    </AccordionItem> */}
                                </Accordion>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section >
    )
}

export default Overview