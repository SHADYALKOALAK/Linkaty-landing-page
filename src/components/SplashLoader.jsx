import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './SplashLoader.css'

export default function SplashLoader() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const prevPath = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      setLoading(true)
      prevPath.current = location.pathname
      const timer = setTimeout(() => setLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [location.pathname])

  if (!loading) return null

  return (
    <div className="splash-overlay">
      <div className="splash-content">
        <img src="/logo.png" alt="Linkaty" className="splash-logo" />
        <div className="splash-loader">
          <div className="splash-dot splash-dot--1" />
          <div className="splash-dot splash-dot--2" />
          <div className="splash-dot splash-dot--3" />
        </div>
      </div>
    </div>
  )
}
