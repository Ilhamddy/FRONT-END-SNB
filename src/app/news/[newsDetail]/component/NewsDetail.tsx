'use client'
import Image from "next/image";


import useGetNewsById from "@/hooks/getNewsByid";

  interface INews {
    id: number,
    title: string,
    description: string,
    createdAt : Date,
    }

const NewsDetail = () => {
 
    const getNewsById: any = useGetNewsById();


    return (
        <section className="bg-third">
            <div className="mx-3 h-full bg-cover py-10 sm:mx-10 md:mx-10">
                <div className="sm:mx-10 md:mx-10">
                    <div className="my-10 grid grid-cols-1 gap-5 text-center sm:grid-cols-1 md:mx-10 md:grid-cols-1">
                        <div>
                            <Image
                                className="my-5 h-64 w-full rounded-xl sm:h-[500px] md:my-0 md:h-[550px]"
                                height={500}
                                width={500}
                                alt="Kemenkes SNB"
                                src={"/news/bridging.jpeg"}
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <h1 className="my-5 text-justify text-gray-500 text-2xl">
                                {getNewsById.title} {/* Access title property from getNewsById */}
                            </h1>
                            <h1 className="my-5 text-justify text-black">
                                {getNewsById.description}
                            </h1>

                        </div>
                        <p className="text-end">
                            {getNewsById.createdAt}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsDetail;