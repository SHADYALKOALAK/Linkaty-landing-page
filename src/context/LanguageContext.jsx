import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import t from '../translations/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('linkaty-lang') || 'en' } catch { return 'en' }
  })

  useEffect(() => {
    try { localStorage.setItem('linkaty-lang', lang) } catch { /* noop */ }
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleLanguage = useCallback(() => setLang(prev => prev === 'en' ? 'ar' : 'en'), [])

  const tr = useCallback((path) => {
    const keys = path.split('.')
    let result = t[lang]
    for (const key of keys) {
      if (result?.[key] === undefined) return path
      result = result[key]
    }
    return result
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
