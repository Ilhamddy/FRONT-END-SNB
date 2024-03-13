import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'
import { FaThList } from 'react-icons/fa'
import { FaArrowUpRightDots, FaCalendarCheck, FaFileInvoiceDollar, FaFileMedical, FaHospital, FaPills, FaVials } from 'react-icons/fa6'

const About = () => {
    const dataProduct = [
        {
            data: '120',
            client: 'Lorem Ipsum',
            value: 'Integrate system in hospital',
            title: 'SIMRS sets the standard for patient management, offering seamless integration of registration, admission, and discharge processes, ensuring unparalleled efficiency and patient satisfaction.',
            icon: FaHospital
        },
        {
            data: '90',
            client: 'Lorem Ipsum',
            value: 'Electronic Medical Records',
            title: 'Our Electronic Medical Records system revolutionizes patient information management, ensuring secure, easy access to patient histories, treatment plans, and medical documents.',
            icon: FaFileMedical
        },
        {
            data: '150',
            client: 'Lorem Ipsum',
            value: 'Appointment Scheduling',
            title: 'Streamline your appointment scheduling integarte symtem process with our intuitive platform, designed to reduce wait times, improve patient satisfaction, and optimize your staff’s workload.',
            icon: FaCalendarCheck
        },
        {
            data: '90',
            client: 'Lorem Ipsum',
            value: 'Pharmacy Management',
            title: 'Our Pharmacy Management system simplifies medication dispensing, inventory control, and prescription management, ensuring accuracy and efficiency in your pharmacy operations.',
            icon: FaPills
        },
        {
            data: '150',
            client: 'Lorem Ipsum',
            value: 'Billing and Invoicing',
            title: 'Automate your billing and invoicing processes with our comprehensive solution, designed to streamline financial operations, reduce errors, and improve revenue cycle management.',
            icon: FaFileInvoiceDollar
        },
        {
            data: '90',
            client: 'Lorem Ipsum',

            value: 'Laboratory Information System',
            title: 'Enhance your laboratory’s efficiency with our Laboratory Information System, offering seamless test order management, result entry, and compliance with regulatory standards.',
            icon: FaVials
        }

    ]
    return (
        <section className='bg-third'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:py-10 gap-10'>
                        <div className='flex flex-col justify-center mx-2'>
                            <div className='text-3xl md:text-5xl font-black text-center md:text-start ' data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false">
                                <h1><span className='text-based1'>Unlock Propedrity</span>, Choose Expert Guidance Work with PT. Solusi Nusantara Berdikari</h1>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center mx-2 md:px-5'>
                            <div className='text-justify my-5'>
                                <h5>We are dedicated to revolutionizing the healthcare industry Our platform is designed to streamline hospital operations, enhance patient care, and optimize overall efficiency within healthcare institutions.</h5>
                            </div>
                            <div className='flex justify-center md:justify-start flex-row gap-5 my-5'>
                                {/* <Button className='h-16 w-[200px] sm:text-sm  md:text-md gap-5 bg-based1'><FaEject /> Learn More</Button> */}

                                <Link href='/about'>
                                <Button className='h-12 w-[200px]  bg-based1 rounded-full sm:text-sm md:text-md gap-5'> <FaThList /> About Us</Button>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:py-10 md:p-2 md:h-full gap-5' >
                        {dataProduct.map((data) => {
                            return (
                                <Card className='transition duration-300  hover:border-white bg-transparent bg-gray-100  shadow-xl md:mx-0 m-5 rounded-2xl' key={data.value} data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <CardContent>
                                        {/* <div className='text-4xl flex items-center gap-2 text-white bg-based my-2 p-5 rounded-xl '>{data.data}+ <span className='text-3xl'>{data.client}</span></div> */}

                                        <div className='text-md md:text-xl flex items-center my-5  gap-2'><data.icon  className='text-based1'/>{data.value}</div>
                                        <div className='font-thin text-justify text-[15px]'>{data.title}</div>
                                    </CardContent>
                                    <CardFooter className='grid grid-cols-1'>
                                        <Link href='/service'>
                                        <div className='flex justify-between items-center mt-2 border rounded-full p-2 text-sm'>
                                            Click Here
                                            <Button className='rounded-full '>
                                                <FaArrowUpRightDots />
                                            </Button>
                                        </div></Link>
                                    </CardFooter>
                                </Card>
                            )
                        })}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About