"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { dataNav } from "@/hooks/dataNavbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAmazon, FaApple, FaAws, FaBarsStaggered, FaBrain } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbarsection = () => {


    const [scrollPosisition, setScorllPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScorllPosition(position);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarStyle = {
        transition: "background-color 0.9s ease",
        backgroundColor:
            scrollPosisition > 0 ? "#45474B" : "transparent",
        backdropFilter: "blur(4px)",
    };

    const textStyle = {
        color: scrollPosisition > 0 ? "orange" : "black",
        // textShadow: scrollPosisition > 0 ? "1px 1px 2px #ffffff" : "1px 1px 2px #000000",
    };


    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [isTheme, setIsTheme] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        setOpen(navbar);
        setIsTheme(isTheme);
    }, [navbar]);

    return (
        //navbar
        <header className="fixed  w-full top-0" style={navbarStyle}>
            <nav className="mx-4 items-center justify-between rounded-xl p-3  md:mx-10 md:rounded-none px-10" >
                <div className="justify-between md:grid grid-flow-col md:w-full">
                    {/* NAVBAR MOBILE */}
                    <div className="flex justify-between  gap-5 md:w-full sm:w-full">
                        <div className="flex items-center md:w-[200px] sm:w-[200px]">
                            <Link href='/'>
                                <Image src={'/image/logoSNB.png'} height={200} width={200} alt="logo PT. SOLUSI NUSANTARA BERDIKARI" />
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex gap-5 md:hidden justify-center items-center">
                                <div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => setTheme("dark")}
                                            >
                                                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                                <span className="sr-only">Toggle theme</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                    </DropdownMenu>
                                </div>
                                <Button onClick={() => setNavbar(!navbar)}>
                                    {!navbar ? (
                                        <FaBarsStaggered />
                                    ) : (
                                        <IoMdClose />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* NAVBAR DEKSTOP */}
                    <div className="flex items-center gap-5 col-span-2" style={textStyle}>
                        <div
                            className={`w-full gap-5 justify-self-center md:flex  md:bg-transparent  ${open ? "grid place-items-center p-3  md:p-0" : "hidden sm:hidden "}`}
                        >
                            {dataNav.map((data) => {
                                return (
                                    <NavigationMenu className="border-b-2 md:border-b-0 ">
                                        <NavigationMenuList>
                                            <NavigationMenuItem
                                                key={data.title}
                                                className=" my-2 flex justify-center md:my-0 w-64 md:w-full"
                                            >
                                                {data.list ? (
                                                    <>
                                                        <NavigationMenuTrigger className="text-sm rounded-md bg-transparent hover:bg-transparent px-5 py-2 dark:bg-black" >
                                                            {data.title}
                                                        </NavigationMenuTrigger>
                                                        <NavigationMenuContent className="w-full bg-transparent hover:bg-transparent ">
                                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                                <li className="row-span-3">
                                                                    <NavigationMenuLink asChild>
                                                                        <a
                                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                                            href="/"
                                                                        >
                                                                            <FaBrain className="h-6 w-6" />
                                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                                All Product
                                                                            </div>
                                                                            <div className="text-xs text-justify leading-tight text-muted-foreground">
                                                                                Healthcare Application offers robust tools for resource management, allowing hospitals to optimize their resources efficiently.
                                                                            </div>
                                                                        </a>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                                <li className="rounded-md bg-gradient-to-b from-muted/50 to-muted p-1 no-underline outline-none focus:shadow-md" title="Introduction">
                                                                    <FaAmazon className="h-5 w-5" />
                                                                    SIMRS (Sistem Informasi Manajemen Rumah Sakit)
                                                                </li>
                                                                <li className=' rounded-md bg-gradient-to-b from-muted/50 to-muted p-1 no-underline outline-none focus:shadow-md' title="Installation">
                                                                    <FaAws className="h-5 w-5" />
                                                                    E-Klinik
                                                                </li>
                                                                <li className=" rounded-md bg-gradient-to-b from-muted/50 to-muted p-1 no-underline outline-none focus:shadow-md" title="Typography">
                                                                    <FaApple className="h-5 w-5" />

                                                                    E-Puskesmas
                                                                </li>
                                                            </ul>
                                                        </NavigationMenuContent>
                                                    </>
                                                ) : (
                                                    <>
                                                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-md rounded-md bg-transparent hover:bg-transparent px-5 py-2 dark:bg-black`}>
                                                            <div >
                                                                <a href={data.link}>
                                                                    <div>{data.title}</div>
                                                                </a>
                                                            </div>
                                                        </NavigationMenuLink>
                                                    </>
                                                )}
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                );
                            })}
                        </div>
                        <div className="hidden md:block">
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                            <span className="sr-only">Toggle theme</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => setTheme("light")}>
                                            Light
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                                            Dark
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbarsection;
