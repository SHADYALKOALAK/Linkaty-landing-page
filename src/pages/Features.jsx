import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import './Features.css'

export default function Features() {
  const { t } = useLang()

  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => o.observe(el))
    return () => o.disconnect()
  }, [])

  const details = t('features.details')

  return (
    <div className="page-enter">
      <section className="f-hero">
        <div className="container" style={{textAlign:'center'}}>
          <div className="reveal">
            <div className="section-label" style={{margin:'0 auto 16px'}}><i className="fas fa-crown" /> {t('features.heroBadge')}</div>
            <h1 style={{fontSize:42,fontWeight:700,marginBottom:16}}>{t('features.heroTitle')} <span className="hl">{t('features.heroTitleHl')}</span></h1>
            <p style={{fontSize:17,color:'var(--text-secondary)',maxWidth:560,margin:'0 auto'}}>{t('features.heroP')}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:40}}>
        <div className="container">
          {details.map((f, i) => (
            <div key={i} className={`fd-card reveal ${i % 2 === 1 ? 'fd-rev' : ''}`}>
              <div className="fd-vis"><div className="fd-icon"><i className={`fas ${f.icon}`} /></div></div>
              <div className="fd-content">
                <span className="fd-n">0{i + 1}</span>
                <h2>{f.title}</h2>
                <p>{f.desc}</p>
                <div className="fd-tags">
                  {f.highlights.map((h, j) => <span key={j} className="fd-tag"><i className="fas fa-check" /> {h}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-alt)'}}>
        <div className="container">
          <div className="cta-box reveal">
            <h2>{t('featuresCtaTitle')}</h2>
            <p>{t('featuresCtaP')}</p>
            <Link to="/" className="btn cta-btn"><i className="fas fa-rocket" /> {t('featuresCtaBtn')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
