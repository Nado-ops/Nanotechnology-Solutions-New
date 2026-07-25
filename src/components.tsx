import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { company } from './config'
import { solutions } from './data'

export function Logo({ compact = false }: { compact?: boolean }) {
  return <a className={`brand ${compact ? 'brand--compact' : ''}`} href="/" aria-label={`${company.name} home`}>
    <img src="/assets/nanotechnology-logo.png" alt="" width="54" height="54" />
    <span><strong>{company.shortName}</strong><small>IT Solutions</small></span>
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
    <div className="topbar"><div className="container topbar__inner"><span>Complete technology solutions for organisations</span><div><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a></div></div></div>
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
      <div><Logo compact /><p>Reliable infrastructure, cloud, education technology, software and support for organisations across Cape Town.</p><p className="tagline">{company.tagline}</p></div>
      <div><h3>Company</h3><a href="/about">About</a><a href="/industries">Industries</a><a href="/projects">Projects</a><a href="/contact">Contact</a><a href="/client-portal">Client Portal</a></div>
      <div><h3>Solutions</h3>{solutions.slice(0, 6).map(s => <a key={s.slug} href={`/solutions/${s.slug}`}>{s.title}</a>)}</div>
      <div><h3>Contact</h3><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a><a href={`tel:${company.mobile.replace(/\s/g, '')}`}>{company.mobile}</a><a href={`mailto:${company.email}`}>{company.email}</a><address>{company.address}</address><span>{company.hours}</span></div>
    </div>
    <div className="container footer__bottom"><span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a></div></div>
  </footer>
}

export function Layout({ children }: { children: ReactNode }) {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /><a className="support-fab" href="/support" aria-label="Get technical support"><span>?</span> Technical support</a></>
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading--light' : ''}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function PageHero({ eyebrow, title, text, actions }: { eyebrow: string; title: string; text: string; actions?: ReactNode }) {
  return <section className="page-hero"><div className="orb orb--one"></div><div className="orb orb--two"></div><div className="container page-hero__content"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>{eyebrow}</span></nav><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p>{actions && <div className="button-row">{actions}</div>}</div></section>
}

export function CTA({ title = 'Ready to Transform Your Technology Environment?', text = 'Let us assess your current infrastructure and design a practical technology solution for your organisation.' }) {
  return <section className="cta"><div className="container cta__inner"><div><span>Ready to move forward?</span><h2>{title}</h2><p>{text}</p></div><div className="button-row"><a className="button button--white" href="/contact?type=assessment">Request a Site Assessment</a><a className="button button--ghost-white" href="/contact">Contact Our Team</a></div></div></section>
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
