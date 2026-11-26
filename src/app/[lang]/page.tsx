import Image from 'next/image'
import { notFound } from 'next/navigation'
import RoutePhone from '@/components/RoutePhone'
import { contact, dict, isLocale, stack } from '@/content'

const groupLabel: Record<string, { es: string; en: string }> = {
  Mobile: { es: 'Móvil', en: 'Mobile' },
  Frontend: { es: 'Frontend', en: 'Frontend' },
  Backend: { es: 'Backend', en: 'Backend' },
  Data: { es: 'Datos', en: 'Data' },
  Integraciones: { es: 'Integraciones', en: 'Integrations' },
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = dict[lang]
  const cvHref = `/cv/gonzalo-lobo-cv-${lang}.pdf`

  return (
    <>
      <a className="skip" href="#main">
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <header className="top">
        <div className="wrap top-inner">
          <a className="brand" href={`/${lang}`}>
            Gonzalo Lobo
          </a>
          <nav aria-label={lang === 'es' ? 'Secciones' : 'Sections'}>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="top-actions">
            <a className="lang" href={t.nav.otherHref} hrefLang={lang === 'es' ? 'en' : 'es'}>
              {t.nav.otherLang}
            </a>
            <a className="btn btn-small" href={cvHref} download>
              {t.nav.cv}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="hero-role">{t.hero.role}</p>
              <h1>{t.hero.title}</h1>
              <p className="hero-lead">{t.hero.lead}</p>
              <div className="hero-cta">
                <a className="btn" href="#projects">
                  {t.hero.primary}
                </a>
                <a className="btn btn-ghost" href={cvHref} download>
                  {t.hero.secondary}
                </a>
              </div>
              <ul className="facts">
                {t.hero.facts.map((f) => (
                  <li key={f.big}>
                    <strong>{f.big}</strong>
                    <span>{f.small}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero-visual">
              <RoutePhone {...t.hero.phone} />
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.projects.title}</h2>
              <p>{t.projects.intro}</p>
            </div>

            <div className="featured">
              {t.projects.featured.map((p) => (
                <article key={p.id} className={`case case-${p.id}`}>
                  <div className="case-text">
                    <p className="case-context">
                      {p.context}, {p.period}
                    </p>
                    <h3>
                      {p.name}
                      {p.badge && <span className="badge">{p.badge}</span>}
                    </h3>
                    <p className="case-summary">{p.summary}</p>
                    <ul className="case-points">
                      {p.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <ul className="chips" aria-label="Stack">
                      {p.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    {p.link && (
                      <a className="ext" href={p.link.href} target="_blank" rel="noopener noreferrer">
                        {p.link.label}
                      </a>
                    )}
                  </div>
                  <div className="case-visual">
                    {p.image ? (
                      <Image src={p.image} alt={`${p.name}`} width={720} height={720} sizes="(max-width: 860px) 90vw, 440px" />
                    ) : (
                      <dl className="spec">
                        {p.specs?.map((s) => (
                          <div key={s.k}>
                            <dt>{s.k}</dt>
                            <dd>{s.v}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <h3 className="more-title">{t.projects.moreTitle}</h3>
            <div className="more">
              {t.projects.more.map((p) => (
                <article key={p.name} className="tile">
                  {p.image ? (
                    <div className="tile-img">
                      <Image src={p.image} alt={p.name} width={p.image.includes('pricing') ? 960 : 720} height={720} sizes="(max-width: 860px) 90vw, 300px" />
                    </div>
                  ) : (
                    <div className="tile-img tile-mark" aria-hidden="true">
                      <span>{p.mark}</span>
                    </div>
                  )}
                  <h4>{p.name}</h4>
                  <p className="tile-context">{p.context}</p>
                  <p>{p.text}</p>
                  <p className="tile-stack">{p.stack.join(', ')}</p>
                  {p.link && (
                    <a className="ext" href={p.link.href} target="_blank" rel="noopener noreferrer">
                      {p.link.label}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-tint">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.experience.title}</h2>
            </div>
            <ol className="timeline">
              {t.experience.jobs.map((j) => (
                <li key={j.period + j.org}>
                  <p className="tl-period">{j.period}</p>
                  <div>
                    <h3>
                      {j.role} <span>{j.org}</span>
                    </h3>
                    <p>{j.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap about-grid">
            <div className="about-photo">
              <Image src="/gonzalo.webp" alt="Gonzalo Lobo" width={900} height={1047} sizes="(max-width: 860px) 60vw, 320px" />
            </div>
            <div>
              <h2>{t.about.title}</h2>
              {t.about.text.map((p) => (
                <p key={p} className="about-p">
                  {p}
                </p>
              ))}
              <h3 className="sub">{t.about.stackTitle}</h3>
              <dl className="stack">
                {stack.map((g) => (
                  <div key={g.group}>
                    <dt>{groupLabel[g.group][lang]}</dt>
                    <dd>{g.items.join(', ')}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="sub">{t.about.eduTitle}</h3>
              <ul className="edu">
                {t.about.edu.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p className="langs">{t.about.langs}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>{t.contactSec.title}</h2>
            <p className="contact-text">{t.contactSec.text}</p>
            <a className="contact-mail" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <ul className="contact-links">
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="/cv/gonzalo-lobo-cv-es.pdf" download>
                  {t.contactSec.cvEs}
                </a>
              </li>
              <li>
                <a href="/cv/gonzalo-lobo-cv-en.pdf" download>
                  {t.contactSec.cvEn}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">{t.footer}</div>
      </footer>
    </>
  )
}
