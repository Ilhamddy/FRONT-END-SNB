import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Contactall = () => {
    return (
        <section className='bg-zinc-800'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10 '>
                    <div className='grid md:grid-cols-2 '>
                        <div className='text-start m-5'>
                            <h2 className='text-white text-3xl md:text-5xl font-black my-5'>
                                Interested in using products from SNB?
                            </h2>
                            <h3 className='text-white text-justify'>
                                SNB is committed to staying at the forefront of healthcare technology, continually innovating and improving their products to incorporate the latest advancements.
                            </h3>
                        </div>
                        <div className='flex justify-center md:justify-end items-center'>
                            <Link href={'/contact'}>
                            <Button className='h-16 w-60 bg-based1 rounded-3xl text-2xl'> Contact Us</Button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Contactall