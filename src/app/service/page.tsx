'use client'
import Services from './component/Services'
import Team from './component/Team'
import Core from './component/Core'
import Question from './component/Question'
import Contactall from '../components/contactall'
import Detail from './component/Detail'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react'
const page = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 1800,
            }
        );
        AOS.refresh();
    }, []);

    return (
        <main>
            <Services />
            <Core />
            {/* <Detail /> */}
            {/* <Team /> */}
            <Question />
            <Contactall />
        </main>
    )
}

export default page