import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Service = () => {
    return (
        <section className="bg-third dark:bg-based">
            <div className="mx-3 h-full bg-cover py-10 sm:mx-10 md:mx-10">
                <div className="sm:mx-10 md:mx-10 ">
                    {/* card service */}
                    <div className=" grid text-center sm:grid-cols-1 md:-mt-32 md:h-[250px] md:grid-cols-2">
                        <Card className="grid w-full place-items-center  md:ml-5 md:grid-cols-2">
                            <div>
                                <CardHeader>
                                    <CardTitle className="text-based text-5xl font-extrabold">
                                        200
                                    </CardTitle>
                                    <CardDescription>Client Hospital.</CardDescription>
                                </CardHeader>
                                <CardContent></CardContent>
                            </div>
                            <div>
                                <CardHeader>
                                    <CardTitle className="text-based text-5xl font-extrabold">
                                        87
                                    </CardTitle>
                                    <CardDescription>Client Clinic</CardDescription>
                                </CardHeader>
                                <CardContent></CardContent>
                            </div>
                        </Card>
                        <Card className="bg-based grid w-full  place-items-center md:-ml-5 md:grid-cols-2">
                            <div>
                                <CardHeader>
                                    <CardTitle className="text-5xl font-extrabold text-white">
                                        100
                                    </CardTitle>
                                    <CardDescription>Client Puskesmas</CardDescription>
                                </CardHeader>
                                <CardContent></CardContent>
                            </div>
                            <div>
                                <CardHeader className="text-justify text-white">
                                    <CardDescription className="text-white">
                                        Our application seamlessly integrates various hospital
                                        functions, including patient management, electronic health
                                        records (EHR), billing and invoicing, inventory management,
                                        and more.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent></CardContent>
                            </div>
                        </Card>
                    </div>
                    {/* class detail service */}
                    <div className="my-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                        <div className="mx-2 h-64 rounded-xl bg-myimage2 bg-cover sm:h-[500px] md:h-[500px]"></div>
                        <div className="mx-2 flex flex-col justify-center">
                            <div className="mb-5 space-y-28 text-start text-3xl md:text-5xl font-black  my-5">
                                <h1>
                                    <span className="text-based "> Healtcares </span> - SNB{" "}
                                </h1>
                            </div>
                            <p></p>
                            <div className="text-justify">
                                <h5>
                                    PT Solusi Nusantara Berdikari is dedicated to empowering
                                    healthcare institutions with advanced solutions that enable
                                    them to deliver superior patient care, optimize operations,
                                    and achieve sustainable growth in a rapidly evolving
                                    healthcare environment.
                                </h5>
                            </div>
                            <div className="text-justify my-5">
                                <h5>
                                    The vision of PT Solusi Nusantara Berdikari is to be a
                                    trusted partner and a driving force in transforming the
                                    healthcare landscape through technology, innovation, and
                                    excellence.
                                </h5>{" "}
                            </div>
                            <div className="grid grid-cols-1 gap-5 px-5 md:mt-20 md:grid-cols-2 ">
                                {/* <Button className='h-16 sm:text-sm  md:text-md gap-5 bg-based'><FontAwesomeIcon icon={faEject} /> Learn More</Button> */}
                                {/* <Button className='h-16  sm:text-sm md:text-md gap-5'> <FontAwesomeIcon icon={faList} /> See Our Product</Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
