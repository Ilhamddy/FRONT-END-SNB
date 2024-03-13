import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const Modul = () => {
    return (
        <section className='bg-zinc-900'>
            <div className='h-full bg-cover md:mx-10 sm:mx-10 mx-3 py-10'>
                <div className='md:mx-10 sm:mx-10 '>
                    <div className="grid">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 text-based1">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-xl font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" className="px-6 py-4"></th>
                                                <th scope="col" className="px-6 py-4  rounded-md ">STANDART</th>
                                                <th scope="col" className="px-6 py-4  rounded-md ">ENTERPRISE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Register</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">DOctor</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Policlinic</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">ICU</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>  <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Inpatient</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>  <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Laboratorium</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>  <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Radiology</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>  <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Medical Rehabilitation</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Hemodialysis</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Nutrient</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Pharmacy</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4">Cashier</td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                                <td className="whitespace-nowrap px-6 py-4"><FaCheck /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Modul