import React, { Suspense, useEffect } from 'react'
import AOS from 'aos';
import About from '../components/About.jsx'
import Project from '../components/Project.jsx'
import Experience from '../components/Experience.jsx'
import TechStack from '../components/TechStack.jsx'
import Footer from '../components/Footer.jsx'
import useAOSRefresh from '../useAOSRefresh.js';

const HomePage = () =>{
    useAOSRefresh();
    return (
        <main className='px-5 pb-5'>
            <div className='flex gap-5 max-sm:flex-col'>
            <About />
            <Suspense fallback={<div/>}>
                <Experience />
            </Suspense>
            </div>
            <div className='flex gap-5 max-sm:flex-col'>
                <Suspense fallback={<div/>}>
                <TechStack />
                </Suspense>
                <Project />
            </div>
            <Footer />
        </main>
    )
}

export default HomePage;