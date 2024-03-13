import Link from 'next/link'
import React from 'react'

const Apps = () => {
    return (
        <section className='bg-'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10 '>
                    <div className='text-center'>
                        <h2 className='text-based text-3xl md:text-5xl font-black my-5'>
                            Healthcare landscape through technology.

                        </h2>
                        <h3>
                            The company also provides implementation support to ensure seamless integration and efficient adoption of its solutions.
                        </h3>
                    </div>

                    <div className='grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 my-10 gap-5'>
                        <Link href={'/product-detail'}>
                            <div className='mx-2 border rounded-2xl p-5'>
                                <div className='bg-product1 bg-cover h-64 sm:h-[500px] md:h-[500px] my-5  md:my-0 rounded-xl'></div>
                                <h3 className='text-center text-based font-black text-xl md:text-2xl my-5 '>SIMRS (Sistem Informasi Manajemen RS)</h3>
                                <h4 className='text-justify p-5 line-clamp-3'>SIMRS by PT Solusi Nusantara Berdikari is a comprehensive Hospital Management Information System designed to streamline hospital operations and enhance patient care. With SIMRS, healthcare institutions can effectively manage patient information, medical records, appointments, billing, and more, all within a single integrated platform.</h4>

                            </div>
                        </Link>
                        <Link href={'/product-detail'}>
                            <div className='mx-2 border rounded-2xl p-5'>
                                <div className='bg-product2 bg-cover h-64 sm:h-[500px] md:h-[500px] my-5  md:my-0  rounded-xl'></div>
                                <h3 className='text-center text-based font-black text-xl md:text-2xl my-5'>e-Klinik (Elektronik Klinik):</h3>
                                <h4 className='text-justify p-5 line-clamp-3'>e-Klinik by PT Solusi Nusantara Berdikari is a user-friendly electronic medical records (EMR) solution designed for outpatient clinics and medical practices. This intuitive platform empowers healthcare providers to digitize patient records, streamline administrative tasks, and deliver personalized care efficiently.</h4>

                            </div>
                        </Link>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Apps