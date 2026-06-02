import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { t, lang, toggleLanguage } = useLang()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const links = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.features'), path: '/features' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.contact'), path: '/contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-brand">
          <img src="/logo.png" alt="Linkaty" className="nav-logo-img" />
          <span className="nav-name">
            {lang === 'ar' ? 'لينكاتي' : 'Linkaty'}
            <span className="nav-ar en"> – لينكاتي</span>
          </span>
        </Link>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <Link key={l.path} to={l.path} className={`nav-link${pathname === l.path ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <a href="#download" className="btn btn-primary nav-cta-btn">
            <i className="fas fa-download" /> {t('nav.cta')}
          </a>
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </nav>
  )
}
