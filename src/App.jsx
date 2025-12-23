import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Introduction from './components/Introduction.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import './App.css'

function App() {

  return (
    <div className='w-full'>
        <Introduction/>
        <div className='flex gap-5'>
          <About />
          <Experience />
        </div>
    </div>
  )
}

export default App
