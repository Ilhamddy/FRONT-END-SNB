
const Service = () => {
    return (
        <section className="bg-based dark:bg-based" id="detail">
            <div className="mx-3 h-full bg-cover py-10 sm:mx-10 md:mx-10">
                {/* class detail service */}
                <div className="my-10 md:mx-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                    <div className="mx-4 flex flex-col justify-center">
                        <div className="mb-5 space-y-28 text-start text-3xl md:text-5xl font-black  my-5">
                            <h1>
                                <span className=" text-white"> Healtcares </span> - SNB{" "}
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
                    <div className="mx-2 h-64 rounded-3xl shadow-2xl bg-about bg-center bg-cover sm:h-[500px] md:h-[500px]"></div>

                </div>
            </div>
        </section>
    );
};

export default Service;
