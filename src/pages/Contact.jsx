import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './Contact.css'

const WA_NUMBER = '96877685747'

export default function Contact() {
  const { t, lang } = useLang()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => o.observe(el))
    return () => o.disconnect()
  }, [])

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.id]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    setLoading(true)

    const text = `Hello, I am ${form.name.trim()}\nEmail: ${form.email.trim()}\nMessage: ${form.message.trim()}`
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      setLoading(false)
      setForm({ name: '', email: '', message: '' })
    }, 400)
  }

  return (
    <div className="page-enter">
      <section className="c-hero">
        <div className="container" style={{textAlign:'center'}}>
          <div className="reveal">
            <div className="section-label" style={{margin:'0 auto 16px'}}><i className="fas fa-envelope" /> {t('contact.heroBadge')}</div>
            <h1 className="c-hero-title">{t('contact.heroTitle')} <span className="hl">{t('contact.heroTitleHl')}</span></h1>
            <p className="c-hero-p">{t('contact.heroP')}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:20}}>
        <div className="container c-grid">
          <div className="reveal c-info">
            <h2 className="c-info-title">{t('contact.sidebarTitle')}</h2>
            <p className="c-info-p">{t('contact.sidebarP')}</p>
            <div className="c-info-items">
              {[
                { icon: 'fa-envelope', label: t('contact.email'), val: t('contact.emailVal') },
                { icon: 'fa-location-dot', label: t('contact.location'), val: t('contact.locationVal') },
                { icon: 'fa-phone', label: t('contact.phone'), val: t('contact.phoneVal') },
              ].map((item, i) => (
                <div key={i} className="c-info-item">
                  <div className="c-icon"><i className={`fas ${item.icon}`} /></div>
                  <div><strong>{item.label}</strong><span className="en">{item.val}</span></div>
                </div>
              ))}
            </div>
          </div>

          <form className="reveal reveal-d2 c-form" onSubmit={handleSubmit}>
            <div className="c-form-row">
              <div className="fg">
                <label htmlFor="name">{t('contact.formName')}</label>
                <input type="text" id="name" value={form.name} onChange={handleChange} placeholder={t('contact.formNamePl')} required />
              </div>
              <div className="fg">
                <label htmlFor="email">{t('contact.formEmail')}</label>
                <input type="email" id="email" value={form.email} onChange={handleChange} placeholder={t('contact.formEmailPl')} required />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="message">{t('contact.formMessage')}</label>
              <textarea id="message" rows={5} value={form.message} onChange={handleChange} placeholder={t('contact.formMessagePl')} required />
            </div>
            <button type="submit" className="btn btn-primary c-form-btn" disabled={loading}>
              {loading ? (
                <><i className="fas fa-spinner fa-spin" /> {lang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</>
              ) : (
                <><i className="fab fa-whatsapp" /> {t('contact.formBtn')}</>
              )}
            </button>
            <p className="c-form-note">
              <i className="fab fa-whatsapp" style={{color:'#25D366'}} />
              {' '}{lang === 'ar' ? 'سيتم فتح واتساب لإرسال رسالتك' : 'WhatsApp will open to send your message'}
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
