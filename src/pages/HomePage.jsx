import React, { Suspense } from 'react'
import About from '../components/About.jsx'
import Project from '../components/Project.jsx'
import Experience from '../components/Experience.jsx'
import TechStack from '../components/TechStack.jsx'

const HomePage = () =>{
    return (
        <>
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
        </>
    )
}

export default HomePage;