import './App.css'
import { useState, useEffect } from 'react'
import LandingPage from './pages/landing.tsx'
import Resume from './pages/resume.tsx'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'resume'>('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'resume') {
        setCurrentPage('resume')
      } else {
        setCurrentPage('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="App">
      {currentPage === 'home' ? <LandingPage /> : <Resume />}
    </div>
  )
}

export default App
