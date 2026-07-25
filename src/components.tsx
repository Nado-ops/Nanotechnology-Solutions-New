import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { company } from './config'
import { solutions } from './data'

export function Logo({ compact = false }: { compact?: boolean }) {
  return <a className={`brand brand-logo-wrap ${compact ? 'brand--compact' : ''}`} href="/" aria-label={`${company.name} home`}>
    <img className="brand-logo" src="/images/logo/nanotechnology-logo-dark.png" alt="Nanotechnology IT Solutions logo" />
  </a>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
    <div className="topbar"><div className="container topbar__inner"><span>Complete technology solutions for organisations</span><div><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a></div></div></div>
    <div className="container nav-wrap">
      <Logo />
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span></span><span></span><span></span><b className="sr-only">Menu</b></button>
      <nav id="main-nav" className={open ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
        <a href="/">Home</a>
        <div className="nav-drop"><a href="/solutions">Solutions <span>⌄</span></a><div className="mega">{solutions.map(s => <a key={s.slug} href={`/solutions/${s.slug}`}><i>{s.icon}</i><span>{s.title}<small>{s.short}</small></span></a>)}</div></div>
        <a href="/industries">Industries</a><a href="/projects">Projects</a><a href="/about">About</a><a href="/support">Support</a><a href="/contact">Contact</a>
        <a className="button button--small nav-cta" href="/contact?type=assessment">Request a Site Assessment</a>
      </nav>
    </div>
  </header>
}

export function Footer() {
  return <footer className="footer">
    <div className="container footer__grid">
      <div><Logo compact /><p>Reliable infrastructure, cloud, education technology, software and support for schools, universities, colleges, QCTO providers, skills-development institutions and organisations across {company.country}.</p><p className="tagline">{company.tagline}</p></div>
      <div><h3>Company</h3><a href="/about">About</a><a href="/industries">Industries</a><a href="/projects">Projects</a><a href="/contact">Contact</a><a href="/client-portal">Client Portal</a></div>
      <div><h3>Solutions</h3>{solutions.slice(0, 6).map(s => <a key={s.slug} href={`/solutions/${s.slug}`}>{s.title}</a>)}</div>
      <div className="footer-contact"><h3>Contact</h3><address><b>Head Office:</b>{company.address}</address><span><b>Service Area:</b>{company.serviceArea}</span><a href={company.phoneHref}><b>Telephone:</b>{company.phone}</a><a href={company.whatsappUrl} target="_blank" rel="noreferrer"><b>WhatsApp:</b>{company.phone}</a><a href={`mailto:${company.email}`}><b>Email:</b>{company.email}</a></div>
    </div>
    <div className="container footer__bottom"><span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a></div></div>
  </footer>
}

export function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const revealTargets = document.querySelectorAll('.section, .service-card, .showcase-card, .industry-grid a')
    const observer = !reduced && 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      })
    }, { threshold: .08, rootMargin: '0px 0px -35px' }) : null
    revealTargets.forEach(el => observer ? observer.observe(el) : el.classList.add('is-revealed'))

    function pointerMove(event: PointerEvent) {
      if (!finePointer || reduced) return
      const target = (event.target as Element).closest<HTMLElement>('[data-spotlight], .service-card, .portfolio-piece')
      if (!target) return
      const rect = target.getBoundingClientRect()
      target.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      target.style.setProperty('--my', `${event.clientY - rect.top}px`)
      if (target.classList.contains('hero-home')) {
        target.style.setProperty('--px', `${(event.clientX / window.innerWidth - .5) * 10}px`)
        target.style.setProperty('--py', `${(event.clientY / window.innerHeight - .5) * 8}px`)
      }
    }
    function magneticMove(event: PointerEvent) {
      if (!finePointer || reduced) return
      const button = (event.target as Element).closest<HTMLElement>('.button')
      if (!button) return
      const rect = button.getBoundingClientRect()
      const x = (event.clientX - rect.left - rect.width / 2) * .08
      const y = (event.clientY - rect.top - rect.height / 2) * .08
      button.style.setProperty('--mag-x', `${Math.max(-4, Math.min(4, x))}px`)
      button.style.setProperty('--mag-y', `${Math.max(-3, Math.min(3, y))}px`)
    }
    function magneticLeave(event: PointerEvent) {
      const button = (event.target as Element).closest<HTMLElement>('.button')
      if (!button) return
      button.style.removeProperty('--mag-x')
      button.style.removeProperty('--mag-y')
    }
    document.addEventListener('pointermove', pointerMove)
    document.addEventListener('pointermove', magneticMove)
    document.addEventListener('pointerout', magneticLeave)
    return () => {
      observer?.disconnect()
      document.removeEventListener('pointermove', pointerMove)
      document.removeEventListener('pointermove', magneticMove)
      document.removeEventListener('pointerout', magneticLeave)
    }
  }, [])
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /><a className="support-fab" href="/support" aria-label="Get technical support"><span>?</span> Technical support</a></>
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading--light' : ''}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function PageHero({ eyebrow, title, text, actions }: { eyebrow: string; title: string; text: string; actions?: ReactNode }) {
  return <section className="page-hero"><div className="orb orb--one"></div><div className="orb orb--two"></div><div className="container page-hero__content"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>{eyebrow}</span></nav><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p>{actions && <div className="button-row">{actions}</div>}</div></section>
}

export function CTA({ title = `Planning a technology project anywhere in ${company.country}?`, text = 'Let us assess your requirements and design a practical technology solution for your organisation.', discussionLabel = 'Discuss Your Project', discussionHref = '/contact?type=project' }: { title?: string; text?: string; discussionLabel?: string; discussionHref?: string }) {
  return <section className="cta" data-spotlight><div className="container cta__inner"><div><span>{company.serviceArea}</span><h2>{title}</h2><p>{text}</p></div><div className="button-row"><a className="button button--ghost-white" href={discussionHref}>{discussionLabel}</a><a className="button button--white" href="/contact?type=assessment">Request a Site Assessment</a><a className="button button--ghost-white" href="/contact">Contact Our Team</a></div></div></section>
}

export function LeadForm({ kind = 'contact' }: { kind?: 'contact' | 'support' }) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [sending, setSending] = useState(false)
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return
    const form = e.currentTarget
    if (!form.checkValidity()) { form.reportValidity(); return }
    setSending(true)
    window.setTimeout(() => { setSending(false); setStatus('success'); form.reset() }, 700)
  }
  if (status === 'success') return <div className="form-success" role="status"><span>✓</span><h3>Request prepared</h3><p>This demonstration form is ready to connect to your approved secure email or CRM endpoint. No information has been transmitted yet.</p><button className="text-button" onClick={() => setStatus('idle')}>Send another request</button></div>
  return <form className="lead-form" onSubmit={submit}>
    <div className="honeypot" aria-hidden="true"><label>Leave blank<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="field-grid"><label>Full name *<input name="name" required autoComplete="name" /></label><label>Company or organisation<input name="organisation" autoComplete="organization" /></label></div>
    <div className="field-grid"><label>Email *<input name="email" type="email" required autoComplete="email" /></label><label>Phone number *<input name="phone" type="tel" required autoComplete="tel" /></label></div>
    <div className="field-grid"><label>{kind === 'support' ? 'Support type' : 'Service required'} *<select name="service" required defaultValue=""><option value="" disabled>Select an option</option>{kind === 'support' ? <><option>Remote support</option><option>Onsite support</option><option>Existing client support</option><option>Urgent assistance</option></> : solutions.map(s => <option key={s.slug}>{s.title}</option>)}</select></label><label>Preferred contact method<select name="contactMethod"><option>Email</option><option>Phone</option></select></label></div>
    {kind === 'contact' && <div className="field-grid"><label>Location<input name="location" autoComplete="address-level2" /></label><label>Budget range<select name="budget"><option>Not sure yet</option><option>Under R10,000</option><option>R10,000–R50,000</option><option>R50,000–R150,000</option><option>R150,000+</option></select></label></div>}
    <label>{kind === 'support' ? 'Describe the issue' : 'Project description'} *<textarea name="description" rows={5} required></textarea></label>
    {kind === 'contact' && <label>Required timeframe<select name="timeframe"><option>Exploring options</option><option>As soon as possible</option><option>Within one month</option><option>1–3 months</option><option>3+ months</option></select></label>}
    <label className="check"><input type="checkbox" required /> <span>I consent to {company.name} using these details to respond to my request. *</span></label>
    <button className="button" type="submit" disabled={sending}>{sending ? 'Preparing…' : kind === 'support' ? 'Submit Support Request' : 'Send Enquiry'}</button>
    <p className="form-note">Spam-protected demonstration. Connect an approved secure form endpoint before launch.</p>
  </form>
}
