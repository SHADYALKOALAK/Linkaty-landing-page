import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import './Home.css'

const stepsIcons = ['fa-user-plus', 'fa-pen-to-square', 'fa-share-nodes']

export default function Home() {
  const { t, lang } = useLang()

  useEffect(() => {
    const o = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => o.observe(el))
    return () => o.disconnect()
  }, [])

  const features = t('features.list')
  const steps = t('how.steps')
  const testimonials = t('testimonials.items')

  return (
    <div className="page-enter">
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <div className="hero-badge">
              <i className="fas fa-sparkles" /> {t('hero.badge')}
            </div>
            <h1>{t('hero.headline')}</h1>
            <p className="hero-sub">{t('hero.sub')}</p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-rocket" /> {t('hero.btn1')}
              </Link>
              <a href="#how" className="btn btn-secondary">
                <i className="fas fa-arrow-right" /> {t('hero.btn2')}
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-d2">
            <div className="hero-illustration">
              <div className="hi-card hi-card--1">
                <i className="fas fa-user-circle" />
                <span>{lang === 'ar' ? 'بروفايل' : 'Profile'}</span>
              </div>
              <div className="hi-card hi-card--2">
                <i className="fas fa-folder-open" />
                <span>{lang === 'ar' ? 'مشاريع' : 'Projects'}</span>
              </div>
              <div className="hi-card hi-card--3">
                <i className="fab fa-github" />
                <span>GitHub</span>
              </div>
              <div className="hi-card hi-card--4">
                <i className="fab fa-linkedin" />
                <span>LinkedIn</span>
              </div>
              <div className="hi-card hi-card--5">
                <i className="fab fa-behance" />
                <span>Behance</span>
              </div>
              <div className="hi-card hi-card--6">
                <i className="fas fa-globe" />
                <span>{lang === 'ar' ? 'موقع' : 'Website'}</span>
              </div>
              <div className="hi-center-icon">
                <i className="fas fa-link" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="section" style={{background:'var(--bg-alt)'}} id="features">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label"><i className="fas fa-crown" /> {t('features.badge')}</div>
            <h2>{t('features.title')} <span className="hl">{t('features.titleHl')}</span></h2>
            <p>{t('features.sub')}</p>
          </div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <div key={i} className={`feat-card reveal reveal-d${(i % 4) + 1}`}>
                <span className="feat-n">0{i + 1}</span>
                <div className="feat-iw"><i className={`fas ${f.icon}`} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label"><i className="fas fa-arrow-right" /> {t('how.badge')}</div>
            <h2>{t('how.title')} <span className="hl">{t('how.titleHl')}</span></h2>
            <p>{t('how.sub')}</p>
          </div>
          <div className="steps-row">
            {steps.map((s, i) => (
              <div key={i} className={`step-card reveal reveal-d${i + 1}`}>
                <div className="step-circle">
                  <i className={`fas ${stepsIcons[i]}`} />
                </div>
                <span className="step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <div className="step-conn"><i className="fas fa-arrow-left" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section" style={{background:'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label"><i className="fas fa-quote-right" /> {t('testimonials.badge')}</div>
            <h2>{t('testimonials.title')} <span className="hl">{t('testimonials.titleHl')}</span></h2>
            <p>{t('testimonials.sub')}</p>
          </div>
          <div className="test-grid">
            {testimonials.map((item, i) => (
              <div key={i} className={`test-card reveal reveal-d${i + 1}`}>
                <div className="test-q"><i className="fas fa-quote-right" /></div>
                <p className="test-t">{item.text}</p>
                <div className="test-a">
                  <div className="test-av">{item.initials}</div>
                  <div><strong>{item.name}</strong><span>{item.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section">
        <div className="container">
          <div className="cta-box reveal">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.sub')}</p>
            <Link to="/" className="btn cta-btn">
              <i className="fas fa-magic" /> {t('cta.btn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
