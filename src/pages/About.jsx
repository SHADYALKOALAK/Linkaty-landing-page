import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './About.css'

export default function About() {
  const { t } = useLang()

  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => o.observe(el))
    return () => o.disconnect()
  }, [])

  const values = t('about.values')

  return (
    <div className="page-enter">
      <section className="a-hero">
        <div className="container" style={{textAlign:'center'}}>
          <div className="reveal">
            <div className="section-label" style={{margin:'0 auto 16px'}}><i className="fas fa-info-circle" /> {t('about.heroBadge')}</div>
            <h1 className="a-hero-title">{t('about.heroTitle')} <span className="hl">{t('about.heroTitleHl')}</span></h1>
            <p className="a-hero-p">{t('about.heroP')}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-alt)'}}>
        <div className="container a-story">
          <div className="reveal" style={{flex:1}}>
            <div className="section-label"><i className="fas fa-bullseye" /> {t('about.storyBadge')}</div>
            <h2 className="a-story-title">{t('about.storyTitle')} <span className="hl">{t('about.storyTitleHl')}</span></h2>
            <p className="a-story-p">{t('about.storyP1')}</p>
            <p className="a-story-p">{t('about.storyP2')}</p>
          </div>
          <div className="reveal reveal-d2 a-quote">
            <i className="fas fa-quote-right a-quote-icon" />
            <blockquote className="a-quote-text">{t('about.quote')}</blockquote>
            <cite className="a-quote-cite">{t('about.quoteCite')}</cite>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label"><i className="fas fa-heart" /> {t('about.valuesBadge')}</div>
            <h2>{t('about.valuesTitle')} <span className="hl">{t('about.valuesTitleHl')}</span></h2>
          </div>
          <div className="v-grid">
            {values.map((v, i) => (
              <div key={i} className={`v-card reveal reveal-d${i + 1}`}>
                <div className="v-icon"><i className={`fas ${v.icon}`} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
