import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { title } from 'process'
import React from 'react'
import { FaThList } from 'react-icons/fa'

const About = () => {
    const dataProduct = [
        {
            value: '120',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta blanditiis eius, quo illo saepe alias. Enim quae facilis quaerat repudiandae?'
        }
        , {
            value: '250',
            title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },
        {
            value: '340',
            title: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.'
        }]
    return (
        <section className='bg-third'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10 md:py-24'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:py-10 gap-10'>
                        <div className='flex flex-col justify-center mx-2'>
                            <div className='text-3xl md:text-5xl font-black text-center md:text-start '>
                                <h1><span className='text-based1'>Unlock Propedrity</span>, Choose Expert Guidance Work with PT. Solusi Nusantara Berdikari</h1>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center mx-2 md:px-5'>
                            <div className='text-justify my-5'>
                                <h5>We are dedicated to revolutionizing the healthcare industry Our platform is designed to streamline hospital operations, enhance patient care, and optimize overall efficiency within healthcare institutions.</h5>
                            </div>
                            <div className='flex flex-row gap-5 my-5'>
                                {/* <Button className='h-16 w-[200px] sm:text-sm  md:text-md gap-5 bg-based1'><FaEject /> Learn More</Button> */}
                                <Button className='h-12  rounded-full sm:text-sm md:text-md gap-5'> <FaThList /> See Our Product</Button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:py-10 md:h-64 gap-5'>
                        {dataProduct.map((data) => {
                            return (
                                <Card className='hover:border-based1 p-5 bg-transparent hover:bg-gray-100 ' key={data.value}>
                                    <div className='text-6xl'>{data.value}</div>
                                    <div className='font-thin text-justify my-5'><span className='font-black'> Total Vanue </span> {data.title}</div>
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