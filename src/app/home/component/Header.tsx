import { Button } from '@/components/ui/button'
import { FaThList } from 'react-icons/fa'
import { FaEject } from 'react-icons/fa6'

const Header = () => {
    return (
        <header className='bg-hero-pattern'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-28'>
                <div className='md:mx-10 sm:mx-10  '>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:py-10 '>
                        <div className='flex flex-col justify-center mx-2'>
                            <div className='text-3xl md:text-5xl font-black text-center md:text-start space-y-28 mb-5'>
                                <h1>PT. Solusi <span className='text-based'>Nusantara</span> Berdikari</h1>
                            </div>
                            <p></p>
                            <div className='text-justify'>

                                <h5>We are dedicated to revolutionizing the healthcare industry Our platform is designed to streamline hospital operations, enhance patient care, and optimize overall efficiency within healthcare institutions.</h5>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-20 my-'>
                                <Button className='h-16 sm:text-sm  md:text-md gap-5 bg-based'><FaEject /> Learn More</Button>
                                <Button className='h-16  sm:text-sm md:text-md gap-5'> <FaThList /> See Our Product</Button>
                            </div>
                        </div>
                        <div className='bg-myimage bg-cover h-64 sm:h-[500px] md:h-[500px] my-5  md:my-0 mx-2 rounded-xl'>
                        </div>
                    </div>

                </div>
            </div>
        </header >
    )
}

export default Header