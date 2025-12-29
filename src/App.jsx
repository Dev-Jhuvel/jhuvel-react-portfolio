import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Introduction from './components/Introduction.jsx'
import About from './components/About.jsx'
// import Experience from './components/Experience.jsx'
// import TechStack from './components/TechStack.jsx'
import './App.css'

function App() {
  const Experience = React.lazy(() => import('./components/Experience.jsx'));
  const TechStack = React.lazy(() => import('./components/TechStack.jsx'));

  return (
    <div className='w-full'>
        <Introduction/>
        <div className='flex gap-5 max-sm:flex-col'>
          <About />
          <Suspense fallback={<div/>}>
            <Experience />
          </Suspense>
        </div>
        <Suspense fallback={<div/>}>
            <TechStack />
        </Suspense>
    </div>
  )
}

export default App
