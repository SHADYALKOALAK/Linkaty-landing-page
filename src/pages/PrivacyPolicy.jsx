import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  const { t } = useLang()

  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => o.observe(el))
    return () => o.disconnect()
  }, [])

  const sections = t('privacy.sections')

  return (
    <div className="page-enter">
      <section className="p-hero">
        <div className="container" style={{textAlign:'center'}}>
          <div className="reveal">
            <div className="section-label" style={{margin:'0 auto 16px'}}><i className="fas fa-shield-halved" /> {t('privacy.heroBadge')}</div>
            <h1 className="p-hero-title"><span className="hl">{t('privacy.heroTitle')}</span></h1>
            <p className="p-hero-date">{t('privacy.date')}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:20}}>
        <div className="container">
          <div className="p-content reveal">
            <p className="p-intro">{t('privacy.intro')}</p>

            {sections.map((sec, i) => (
              <div key={i} className="p-block">
                <h2>{sec.title}</h2>
                {sec.text && <p dangerouslySetInnerHTML={{ __html: sec.text }} />}
                {sec.items?.length > 0 && (
                  <ul>
                    {sec.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
                {sec.contact && (
                  <div className="p-contact">
                    <strong>{t('contact.email')}:</strong> <span className="en">{t('privacy.contactEmail')}</span><br />
                    <strong>{t('contact.location')}:</strong> {t('privacy.contactAddress')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
