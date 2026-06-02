import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t, lang, toggleLanguage } = useLang()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="Linkaty" className="footer-logo-img" />
            <div>
              <div className="footer-name">{lang === 'ar' ? 'لينكاتي' : 'Linkaty'}</div>
              <div className="footer-tag en">{t('tagline')}</div>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter" /></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github" /></a>
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>{t('footer.product')}</h4>
            <Link to="/features">{t('nav.features')}</Link>
            <a href="#download">{t('nav.cta')}</a>
            <Link to="/about">{t('nav.about')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('footer.support')}</h4>
            <Link to="/contact">{t('footer.contactPage')}</Link>
            <a href="#">{t('footer.helpCenter')}</a>
            <a href="#">{t('footer.docs')}</a>
          </div>
          <div className="footer-col">
            <h4>{t('footer.legal')}</h4>
            <Link to="/privacy-policy">{t('footer.privacy')}</Link>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Linkaty. {t('footer.rights')}</span>
          <span>
            {t('footer.madeWith')} <i className="fas fa-heart" style={{ color: 'var(--accent)' }} /> {t('footer.forDevs')}
            <button className="lang-toggle footer-lang" onClick={toggleLanguage} aria-label="Toggle language">
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
          </span>
        </div>
      </div>
    </footer>
  )
}
