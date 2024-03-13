import Image from 'next/image'
import React from 'react'

const Profile = () => {


    return (
        <section className='bg-'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:py-10 gap-5'>

                        <div className='flex flex-col justify-center mx-2 '>
                            <div className='text-2xl md:text-4xl font-black text-center md:text-start space-y-28 mb-5'>
                                <h1>Elevate Your Living Experience with <span className='text-based'>PT Solusi Nusantara </span> Berdikari</h1>
                            </div>
                            <p></p>
                            <div className="text-justify ">
                                <h5>
                                    Experience seamless hospital management with SIMRS, our comprehensive Hospital Management Information System. From patient registration to discharge, SIMRS streamlines every aspect of hospital operations, ensuring efficiency, accuracy, and patient satisfaction.
                                </h5>
                                <h5 className='my-5'>
                                    Discover a new standard of excellence in healthcare management with PT Solusi Nusantara Berdikari's revolutionary products: SIMRS and e-Clinic. Trusted by over 100 hospitals and clinics across Indonesia, our solutions are designed to transform your healthcare institution and elevate the quality of care you provide to your patients.
                                </h5>
                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-1  my-5 md:my-0  rounded-xl gap-5'>
                         
                        <Image src={'/image/productPro.jpg'} width={500} height={500} alt='halo' className='h-64 sm:h-[250px] md:h-full w-full rounded-2xl' />
                          

                        </div>


                    </div>

                </div>
            </div>
        </section >
    )
}

export default Profile