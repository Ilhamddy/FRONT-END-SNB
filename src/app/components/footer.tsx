import Image from 'next/image'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaDribbble, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6'
const Footersection = () => {
    return (
        <footer className="bg-white">
            <div className=" mx-10 space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="text-teal-600">
                            <Image src={'/image/logoSNB.png'} width={300} height={300} alt='logo snb' />
                        </div>

                        <p className="mt-4 max-w-xs text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                            molestias.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <FaFacebook />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <FaInstagram />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <FaTwitter />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">GitHub</span>

                                    <FaGithub />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Dribbble</span>

                                    <FaDribbble />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">


                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> SIMRS </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> E-Klinik </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
                                </li>


                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Helpful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Hiring Statistics </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-500">&copy; 2024. PT. Solusi Nusantara Berdikari. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footersection