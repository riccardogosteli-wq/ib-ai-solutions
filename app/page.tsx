'use client'

import { useState } from 'react'
import Image from 'next/image'
import Logo from '../components/Logo'
import './page.css'

const t = {
  navBrand: 'IB AI Solutions',
  heroTag: '🇨🇭 Für den Schweizer Markt',
  heroTitle: 'KI-Videos für Ihr Business',
  heroSubtitle: 'Hochwertige Produkt- und Werbevideos mit modernster KI-Technologie — ohne Filmteam, ohne Studio.',
  heroCta: 'Jetzt Projekt besprechen',
  heroSub: 'Unverbindlich · Kostenlos · In 24h Rückmeldung',

  statsTitle: 'Warum KI-Produktion?',
  stat1: 'Bis zu 8× günstiger als klassische Studioproduktion',
  stat2: 'Fertig in 7–14 Tagen — kein Dreh nötig',
  stat3: 'Sofort einsetzbar für Shop, Ads & Social Media',

  servicesTitle: 'Unsere Leistungen',
  servicesSubtitle: 'Massgeschneiderte KI-Videoproduktion für Ihr Unternehmen',
  service1Title: 'Produkt-Video',
  service1Desc: 'Professionelle Produktpräsentation direkt aus Ihren Produktbildern — ideal für Shops, Marktplätze und Produktseiten.',
  service1List: ['Konzept & Drehbuch', 'KI-Videoproduktion aus Bildern', 'Schnitt & Postproduktion', 'Für Shop, Amazon & Marktplätze'],
  service2Title: 'Werbevideo',
  service2Desc: 'Emotionale Werbevideos für Social Media, Ads und Online-Kampagnen — die Ihre Zielgruppe wirklich erreichen.',
  service2List: ['Story & Skript', 'Visuelle Konzeption', 'Voiceover & Sound', 'Für Meta, YouTube & TikTok Ads'],
  service3Title: 'Erklär-Video',
  service3Desc: 'Komplexe Produkte oder Prozesse verständlich erklärt — ideal für Industrie, Technik und erklärungsbedürftige Lösungen.',
  service3List: ['Strukturiertes Storytelling', 'Visualisierung von Abläufen', 'Filmische Übergänge & Effects', 'Für B2B, Messen & Vertrieb'],

  ablaufTitle: 'Wie läuft ein Projekt ab?',
  ablaufSubtitle: 'Von der ersten Idee bis zum fertigen Video — strukturiert, transparent und effizient.',
  steps: [
    { num: '01', title: 'Anfrage & Erstgespräch', desc: 'Sie schildern Ihr Projekt und Ihre Ziele. Wir besprechen, welches Videoformat am besten passt und wie wir Ihren Mehrwert optimal kommunizieren.' },
    { num: '02', title: 'Story & Konzept', desc: 'Unser Team entwickelt ein massgeschneidertes Konzept: Kernbotschaft, Zielgruppe, Ton und visueller Stil — abgestimmt auf Ihre Marke.' },
    { num: '03', title: 'Skript & Storyboard', desc: 'Das Skript wird ausgearbeitet und in einem Storyboard visualisiert. Sie sehen genau, was entstehen wird — bevor die Produktion beginnt.' },
    { num: '04', title: 'Bilder & Material senden', desc: 'Sie stellen uns Ihre Produktbilder, Logos und relevante Informationen zur Verfügung. In den meisten Fällen reichen vorhandene Bilder vollständig aus.' },
    { num: '05', title: 'KI-Produktion', desc: 'Unser KI-Video-Team produziert das Video — ohne Dreh, ohne Filmequipment. Hochwertig, schnell und kosteneffizient.' },
    { num: '06', title: 'Feedback & Freigabe', desc: 'Sie erhalten eine Vorschau und können Änderungswünsche mitteilen. Wir passen an, bis das Video perfekt passt — dann liefern wir das finale Video.' },
  ],

  whyTitle: 'Was KI-Videos leisten',
  why1Title: 'Produkte werden verstanden',
  why1Desc: 'Videos machen den Produktnutzen sofort verständlich. Kunden sehen Anwendung und Vorteile — und entscheiden schneller.',
  why2Title: 'Weniger Kaufzweifel',
  why2Desc: 'Wenn der Produktnutzen visuell klar wird, sinkt die Hemmschwelle. Mehr Vertrauen — mehr Conversions.',
  why3Title: 'Skalierbar & effizient',
  why3Desc: 'Statt 1 Video pro Jahr: 10–50 Videos pro Quartal. Jedes Produkt optimal präsentiert, ohne explodierende Kosten.',
  why4Title: 'Sofort einsatzbereit',
  why4Desc: 'Fertig für Shop-Listings, Google & Meta Ads, Social Media und Marktplätze wie Amazon oder Ricardo.',

  refsTitle: 'Marken, die auf KI-Videos setzen',
  refsSubtitle: 'Unternehmen aus Handel, Industrie und E-Commerce vertrauen auf unsere Produktionen.',

  aboutTitle: 'Über IB AI Solutions',
  aboutText: 'IB AI Solutions entstand aus der Praxis: IB-Elektroniks, seit 2009 im E-Commerce aktiv, entwickelte die KI-Videoproduktion zunächst für den eigenen Vertrieb. Die Ergebnisse überzeugten — und heute helfen wir Unternehmen im gesamten DACH-Raum, ihre Produkte mit KI-Videos effizienter zu vermarkten. Praxisnah, erprobt, gemacht für echtes Business.',

  formTitle: 'Projekt anfragen',
  formSubtitle: 'Erzählen Sie uns von Ihrem Vorhaben — wir melden uns innerhalb von 24 Stunden.',
  formName: 'Ihr Name',
  formEmail: 'E-Mail',
  formPhone: 'Telefon (optional)',
  formCompany: 'Unternehmen',
  formService: 'Gewünschte Leistung',
  formMessage: 'Beschreiben Sie Ihr Produkt / Projekt',
  formSubmit: 'Anfrage senden →',
  formSuccess: '✅ Danke! Wir melden uns innerhalb von 24 Stunden.',

  footerText: '© 2026 IB AI Solutions · Partner von IB-Elektroniks · Für den Schweizer Markt',
}

export default function Home() {
  const [formStatus, setFormStatus] = useState('')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    // TODO: wire to email endpoint
    setTimeout(() => setFormStatus('success'), 800)
  }

  return (
    <main className="ib-site">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <Logo size="sm" />
          <div className="nav-links">
            <a href="#leistungen">Leistungen</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#ueber-uns">Über uns</a>
            <a href="#anfrage" className="nav-cta">Projekt anfragen</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">{t.heroTag}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <div className="hero-actions">
              <a href="#anfrage" className="btn-primary">{t.heroCta}</a>
              <span className="hero-sub-note">{t.heroSub}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-video-wrap">
              <video
                src="/videos/produktvideos.mp4"
                autoPlay muted loop playsInline
                className="hero-video"
              />
              <div className="hero-video-label">▶ Produkt-Showcase</div>
            </div>
            <div className="gradient-blob blob-1"></div>
            <div className="gradient-blob blob-2"></div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip">
        <div className="container stats-grid">
          <div className="stat-item">⚡ {t.stat1}</div>
          <div className="stat-divider">·</div>
          <div className="stat-item">📅 {t.stat2}</div>
          <div className="stat-divider">·</div>
          <div className="stat-item">🎯 {t.stat3}</div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="services">
        <div className="container">
          <h2>{t.servicesTitle}</h2>
          <p className="section-subtitle">{t.servicesSubtitle}</p>
          <div className="services-grid">
            {[
              { title: t.service1Title, desc: t.service1Desc, list: t.service1List, icon: '🎬' },
              { title: t.service2Title, desc: t.service2Desc, list: t.service2List, icon: '📢' },
              { title: t.service3Title, desc: t.service3Desc, list: t.service3List, icon: '💡' },
            ].map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-list">
                  {s.list.map((item, j) => <li key={j}>✓ {item}</li>)}
                </ul>
                <a href="#anfrage" className="service-cta">Anfrage stellen →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="showcase">
        <div className="container">
          <h2>Beispiel-Videos</h2>
          <p className="section-subtitle">Sehen Sie, was mit KI-Produktion möglich ist</p>
          <div className="video-grid">
            {[
              { src: '/videos/produktvideos.mp4', label: 'Produkt-Showcase' },
              { src: '/videos/product-video.mp4', label: 'Produkt-Präsentation' },
              { src: '/videos/E_913_X.mp4', label: 'Industrie-Video' },
              { src: '/videos/EH4747.mp4', label: 'Premium-Produktion' },
              { src: '/videos/Earth.mp4', label: 'Brand-Video' },
              { src: '/videos/man.mp4', label: 'Werbe-Video' },
            ].map((v, i) => (
              <div key={i} className="video-card" onClick={() => setLightboxSrc(v.src)}>
                <video
                  src={v.src}
                  muted
                  loop
                  playsInline
                  onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={e => { (e.currentTarget as HTMLVideoElement).pause(); (e.currentTarget as HTMLVideoElement).currentTime = 0; }}
                />
                <div className="video-label">▶ {v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="why-section">
        <div className="container">
          <h2>{t.whyTitle}</h2>
          <div className="why-grid">
            {[
              { icon: '🧠', title: t.why1Title, desc: t.why1Desc },
              { icon: '💬', title: t.why2Title, desc: t.why2Desc },
              { icon: '📈', title: t.why3Title, desc: t.why3Desc },
              { icon: '🚀', title: t.why4Title, desc: t.why4Desc },
            ].map((w, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="ablauf">
        <div className="container">
          <h2>{t.ablaufTitle}</h2>
          <p className="section-subtitle">{t.ablaufSubtitle}</p>
          <div className="ablauf-steps">
            {t.steps.map((step, i) => (
              <div key={i} className="ablauf-step">
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {i < t.steps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="references">
        <div className="container">
          <h2>{t.refsTitle}</h2>
          <p className="section-subtitle">{t.refsSubtitle}</p>
          <div className="brands-grid">
            {[
              { file: 'brand-1.svg', alt: 'Kaufmann' },
              { file: 'brand-2.svg', alt: 'Fitness Imperium' },
              { file: 'brand-3.svg', alt: 'Kaiser' },
              { file: 'brand-4.svg', alt: 'IB Elektroniks' },
            ].map((b, i) => (
              <div key={i} className="brand-item">
                <Image src={`/brands/${b.file}`} alt={b.alt} width={140} height={60} style={{objectFit:'contain', maxWidth:'100%', maxHeight:'60px'}} />
              </div>
            ))}
          </div>

          {/* Trustami Certificate */}
          <div className="trustami-wrap">
            <Image src="/brands/certificate.svg" alt="Trustami – 11.051 Bewertungen" width={120} height={120} />
            <p className="trustami-text">Über 11.000 verifizierte Bewertungen auf Trustami</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="ueber-uns" className="about">
        <div className="container about-inner">
          <div className="about-badge">Über uns</div>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
          <div className="about-stats">
            <div><strong>Seit 2009</strong><span>Im E-Commerce aktiv</span></div>
            <div><strong>7–14 Tage</strong><span>Produktionszeit</span></div>
            <div><strong>Bis 8×</strong><span>Günstiger als Studio</span></div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="anfrage" className="contact">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-content">
              <h2>{t.formTitle}</h2>
              <p>{t.formSubtitle}</p>
              {formStatus === 'success' ? (
                <div className="form-success-msg">{t.formSuccess}</div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="name" placeholder={t.formName} required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder={t.formEmail} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="company" placeholder={t.formCompany} required />
                    </div>
                    <div className="form-group">
                      <input type="tel" name="phone" placeholder={t.formPhone} />
                    </div>
                  </div>
                  <div className="form-group">
                    <select name="service" required>
                      <option value="">{t.formService}</option>
                      <option value="produkt">Produkt-Video</option>
                      <option value="werbung">Werbevideo</option>
                      <option value="erklaer">Erklär-Video</option>
                      <option value="sonstiges">Sonstiges / Noch unklar</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder={t.formMessage} rows={4}></textarea>
                  </div>
                  <button type="submit" className="btn-primary full-width" disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? 'Wird gesendet...' : t.formSubmit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {lightboxSrc && (
        <div className="lightbox" onClick={() => setLightboxSrc(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>✕</button>
            <video src={lightboxSrc} controls autoPlay className="lightbox-video" />
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container">
          <p>{t.footerText}</p>
        </div>
      </footer>
    </main>
  )
}
