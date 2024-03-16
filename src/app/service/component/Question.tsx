import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Question = () => {
    const anyQuestion = [

        {
            value: 'item-2',
            title: "How can I access my medical records?",
            description: "You can access your medical records through our patient portal or by contacting our medical records department."
        },
        {
            value: 'item-3',
            title: "What insurance plans do you accept?",
            description: "We accept a wide range of insurance plans. Please contact our billing department for more information on accepted insurances."
        },
        {
            value: 'item-4',
            title: "Can I schedule an appointment online?",
            description: "Yes, you can schedule an appointment online through our website or patient portal."
        },
        {
            value: 'item-5',
            title: "What should I bring to my first appointment?",
            description: "Please bring a photo ID, your insurance card, and any medical records that can help us understand your medical history."
        },
        {
            value: 'item-6',
            title: "How do I request a prescription refill?",
            description: "You can request a prescription refill through our patient portal or by calling our pharmacy directly."
        },
        {
            value: 'item-7',
            title: "What are your visiting hours?",
            description: "Our visiting hours are from 9 AM to 8 PM. Special arrangements can be made in certain circumstances."
        }
    ]
    return (
        <section className='bg-hero-pattern'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10 '>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:py-10 place-item gap-5 '>
                        <div className='text-center flex justify-center flex-col'>
                            <h2 className=' text-3xl md:text-5xl font-black my-5'>
                                Frequatly Asked Question

                            </h2>
                            <h3 className='text-sm text-justify'>
                                <p className='my-5'>
                                    PT Solusi Nusantara Berdikari adalah pelopor dalam menyediakan solusi perawatan kesehatan mutakhir yang dirancang untuk meningkatkan institusi perawatan kesehatan di seluruh Indonesia. Dengan komitmen yang teguh terhadap inovasi, keunggulan, dan kepuasan pelanggan, kami memberdayakan rumah sakit, klinik, dan praktik medis dengan solusi perangkat lunak komprehensif yang dirancang untuk merampingkan operasi, meningkatkan perawatan pasien, dan mendorong efisiensi.
                                </p>

                                <p>
                                    Untuk pertanyaan yang lebih rinci atau pertanyaan spesifik yang tidak tercakup dalam FAQ kami, jangan ragu untuk menghubungi tim dukungan kami. Kami siap membantu Anda dengan masalah atau informasi tambahan yang Anda perlukan. Hubungi kami melalui saluran resmi kami atau kunjungi halaman Hubungi Kami untuk opsi lainnya.
                                </p>

                            </h3>

                        </div>
                        <div>
                            {anyQuestion.map((data) => {
                                return (
                                    <>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value={data.value} >
                                                <AccordionTrigger className='text-md bg-third p-5 rounded'>{data.title}</AccordionTrigger>
                                                <AccordionContent className='bg-white p-5'>
                                                    {data.description}
                                                </AccordionContent>
                                            </AccordionItem>

                                        </Accordion>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Question