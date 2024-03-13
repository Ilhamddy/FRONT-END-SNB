import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnyRecord } from "dns";
import { INews } from "@/types/news";
import useNews from "@/hooks/getNews";


const Listnews = () => {
  const getNews = useNews(); 
  return (
    <section className="bg-">
      <div className="mx-3 h-full bg-cover py-10 sm:mx-10 md:mx-10">
        <div className="sm:mx-10 md:mx-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:py-10 ">
            <div className="mx-2 my-5 flex flex-col md:flex-row md:justify-between">
              <div className="mb-5 space-y-28 text-center text-3xl font-black md:text-start md:text-5xl">
                <h1>News SNB</h1>
              </div>
              <p></p>
              <Button className="h-12 text-justify">
                <h5>We are dedicated to revolutionizing.</h5>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 md:py-10 ">
              {getNews.map((news: INews, index: number, ) => {
                return (
                  <Link href={`/news/${news.id}`}>  
                                        <Card>
                                            <div className='flex flex-col justify-between p-5 md:h-[500px]' key={index}>

                                                <Image src={"/image/aboutPro.jpg"} width={500} height={400} alt='' className='rounded-xl md:h-[250px] text-3xl md:text-5xl  text-center md:text-start' />
                                                <p></p>
                                                <div>
                                                    <h2 className='text-2xl my-2'>{news.title}.</h2>
                                                </div>
                                                <div
                                                    className=' '>
                                                    <h5 className='text-[10px] text-justify h-12 line-clamp-1 truncate'>{news.description}</h5>
                                                </div>
                                                <div className='text-[9px] flex justify-end' >
                                                    <Date />
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listnews;
