import { useEffect } from 'react'
import './App.css'
import { company } from './config'
import { solutions } from './data'
import { CTA, Layout, LeadForm, PageHero, SectionHeading } from './components'

const industries = ['Schools', 'Colleges & Universities', 'Training Providers', 'Non-Profit Organisations', 'Small & Medium Businesses', 'Professional Offices', 'Retail & Service Businesses', 'SOHO & Residential Clients']
function HeroVisual() {
  return <div className="hero-visual hero-visual--photo" aria-label="Connected school and business technology environment">
    <img src="/assets/technology-environment.png" alt="Network cabinet, Wi-Fi access point, secure cloud systems and a connected computer laboratory" />
    <div className="hero-visual__shade"></div>
    <div className="visual-top"><span className="status-dot"></span>Technology environment <b>Connected & monitored</b></div>
    <div className="float-card fc-network"><i>⌘</i><span><b>Network core</b><small>Secure infrastructure</small></span></div>
    <div className="float-card fc-cloud"><i>☁</i><span><b>Cloud systems</b><small>Integrated services</small></span></div>
    <div className="float-card fc-campus"><i>◇</i><span><b>Education ready</b><small>Campus connectivity</small></span></div>
    <div className="visual-stats"><div><span>Wi-Fi</span><b>Managed</b></div><div><span>Security</span><b>Layered</b></div><div><span>Support</span><b>Responsive</b></div></div>
  </div>
}

function InfrastructureFeature() {
  const items = ['Network planning and cabling','School and campus Wi-Fi','Point-to-point wireless links','Computer laboratories','Managed printing','Microsoft 365','Moodle and SIS platforms','CCTV and access control']
  return <section className="section infra-feature"><div className="infra-glow"></div><div className="container infra-grid">
    <div className="infra-photo"><img src="/assets/technology-environment.png" alt="Integrated network infrastructure supporting a computer laboratory" loading="lazy"/><div className="infra-status"><span></span><b>Environment connected</b><small>Infrastructure • Cloud • Security</small></div></div>
    <div><SectionHeading light eyebrow="Infrastructure, integrated" title="We Build Complete Technology Environments" text="Every layer is planned to work together—from the physical network and wireless coverage to cloud platforms, security and ongoing support."/><div className="infra-list">{items.map(x=><div key={x}><span>✓</span>{x}</div>)}</div><div className="tech-labels">{['VLAN Segmentation','Managed Wi-Fi','Secure Access','Cloud Integration','Remote Monitoring'].map(x=><span key={x}>{x}</span>)}</div><a className="button button--white" href="/contact?type=assessment">Request a Site Assessment</a></div>
  </div></section>
}

function EducationPlatform() {
  const platforms = ['Student Information System','Moodle LMS','Microsoft 365','Student Portal','Lecturer Portal','Admissions','Finance Integration','Reporting']
  return <section className="section education-premium"><div className="edu-grid-lines"></div><div className="container education-premium__grid"><div><SectionHeading light eyebrow="Education technology" title="Technology Built for Education" text="Connected platforms, secure access and dependable infrastructure designed around administrators, lecturers and students."/><div className="tech-labels"><span>Single sign-on</span><span>Role-based access</span><span>Connected data</span></div><a className="button" href="/solutions/education-technology">Explore Education Technology</a></div><div className="platform-map"><div className="platform-core"><span>◇</span><b>Connected Campus</b><small>One digital environment</small></div>{platforms.map((x,i)=><div key={x} className={`platform-card platform-${i}`}><span>{['▦','M','☁','S','L','A','F','↗'][i]}</span><b>{x}</b><i></i></div>)}</div></div></section>
}

function ProjectShowcase() {
  const projects = [
    ['School Wi-Fi','Connected Campus Wi-Fi','Reliable coverage across classrooms, offices and shared spaces.','Wireless survey • Segmentation • Managed access'],
    ['Computer Laboratory','Learning-Ready Computer Lab','A complete laboratory environment designed for daily teaching.','Workstations • Network • Printing'],
    ['Microsoft 365 Migration','Secure Cloud Collaboration','A structured move to modern email, files and teamwork.','Identity • Migration • Onboarding'],
    ['Moodle and SIS','Connected Learning Platforms','Learning and student administration designed to work together.','Moodle • SIS • Portals'],
    ['Managed Printing','Controlled Campus Printing','Clearer access, tracking and support across user groups.','PaperCut • Quotas • Secure release'],
    ['Network Infrastructure','Secure Network Foundation','A scalable core for reliable organisational connectivity.','Cabling • Switching • VLANs'],
  ]
  return <section className="section project-showcase"><div className="container"><SectionHeading eyebrow="Featured projects" title="Technology Projects Built Around Real Environments" text="Representative project formats shown with replaceable image placeholders until approved project photography is supplied."/><div className="project-showcase__grid">{projects.map((p,i)=><article className={`showcase-card showcase-${i}`} key={p[0]}><div className="showcase-image"><div className="photo-label"><span>PHOTO</span><small>Approved project image to be supplied</small></div></div><div className="showcase-copy"><small>{p[0]}</small><h3>{p[1]}</h3><p>{p[2]}</p><b>{p[3]}</b><a href="/projects">View Project <span>↗</span></a></div></article>)}</div></div></section>
}

function Home() {
  return <Layout>
    <section className="hero-home">
      <div className="hero-grid-pattern"></div><div className="container hero-home__grid">
        <div className="hero-copy"><p className="hero-trust"><span></span> Operating since 2016</p><h1>Technology That Keeps Your Organisation <em>Connected</em></h1><p>Nanotechnology IT Solutions designs, installs, secures and supports complete technology environments for schools, organisations and growing businesses.</p><div className="button-row"><a className="button button--hero" href="/contact?type=assessment">Request a Site Assessment <span>↗</span></a><a className="button button--outline" href="#services">Explore Our Solutions</a><a className="button button--text" href="/support">Get Technical Support</a></div></div>
        <HeroVisual />
      </div>
      <div className="trust-band"><div className="container trust-strip">{[['◷','Operating since 2016'],['◇','Education Technology'],['⌘','Network Infrastructure'],['☁','Cloud & Microsoft 365'],['⌁','Managed IT Support'],['⌗','Software & Automation']].map(x=><span key={x[1]}><i>{x[0]}</i>{x[1]}</span>)}</div></div>
    </section>

    <section className="section intro-section"><div className="container split-intro"><SectionHeading eyebrow="One technology partner" title="Complete Technology Solutions Under One Roof" text="We combine infrastructure, cloud services, education technology, software development, technical support and creative business services to help organisations operate more effectively." /><div className="trust-list">{['Infrastructure Planning', 'Professional Installation', 'Secure Configuration', 'Ongoing Support', 'Education Technology Experience', 'Scalable Business Solutions'].map(x => <div key={x}><span>✓</span>{x}</div>)}</div></div></section>

    <section className="section section--soft premium-services" id="services"><div className="container"><SectionHeading eyebrow="Core services" title="Technology Capabilities That Work as One" text="One accountable partner across infrastructure, users, systems and support." /><div className="service-grid service-bento">{[['networking-wifi','School & Campus Wi-Fi','Secure, high-density wireless coverage built around learning and work environments.','⌘'],['education-technology','Computer Laboratories','Complete, teaching-ready labs with devices, networks, printing and support.','▦'],['managed-it-services','Managed IT Support','Proactive, responsive support that keeps people productive and systems dependable.','⌁'],['cloud-microsoft-365','Microsoft 365 & Cloud','Secure collaboration, identity and cloud services configured around your team.','☁'],['education-technology','Moodle & Student Systems','Connected learning, administration, portal and reporting platforms.','◇'],['networking-wifi','Networking & Wireless Links','Structured networks and point-to-point connectivity designed for growth.','↔']].map((s,i) => <article className={`service-card bento-${i}`} key={`${s[0]}-${i}`}><div className="card-shine"></div><div className="icon-box">{s[3]}</div><small>0{i+1}</small><h3>{s[1]}</h3><p>{s[2]}</p><a href={`/solutions/${s[0]}`}>Explore solution <span>↗</span></a></article>)}</div></div></section>

    <InfrastructureFeature />

    <section className="section"><div className="container"><SectionHeading eyebrow="Who we serve" title="Technology Solutions Built Around Your Organisation" text="Different environments have different priorities. We start by understanding how your people work."/><div className="industry-grid">{industries.map((x, i) => <a href="/industries" key={x}><span>{['◇','▥','△','♡','◫','□','▦','⌂'][i]}</span><h3>{x}</h3><p>Infrastructure, platforms and support aligned to your environment.</p><i>Explore →</i></a>)}</div></div></section>

    <section className="section process-section"><div className="container"><SectionHeading eyebrow="How we work" title="A Clear Path from Challenge to Solution" /><div className="process-grid">{[['01','Assess','We inspect your environment, identify challenges and understand your organisation’s goals.'],['02','Design','We create a practical solution covering infrastructure, security, cost and future growth.'],['03','Deploy','We install, configure, test and document the complete solution.'],['04','Support','We maintain your environment through remote support, onsite assistance and service agreements.']].map(x => <article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>

    <EducationPlatform />

    <ProjectShowcase />

    <section className="section brand-section creative-brand"><div className="container brand-grid"><div><SectionHeading eyebrow="Creative business services" title="Technology Meets Creative Design" text="From infrastructure and business systems to logos, websites and company profiles, we help organisations build both their technology and their brand."/><div className="pill-list">{['Logo designs','Company profiles','Business cards','Websites','Social media designs','Flyers & brochures'].map(x=><span key={x}>✦ {x}</span>)}</div><a className="button button--dark" href="/solutions/branding-marketing">Explore Creative Services</a></div><div className="creative-wall"><div className="cw-profile"><small>COMPANY PROFILE</small><b>Build a brand<br/>people trust.</b></div><div className="cw-logo"><span>N</span><small>IDENTITY</small></div><div className="cw-card"><b>NANO</b><small>BUSINESS CARD</small></div><div className="cw-social"><span>MAKE<br/>AN IMPACT.</span></div><div className="cw-web"><i></i><i></i><b>Web</b></div></div></div></section>
    <CTA />
  </Layout>
}

function SolutionPage({ slug }: { slug: string }) {
  const solution = solutions.find(s => s.slug === slug) || solutions[0]
  return <Layout><PageHero eyebrow="Solutions" title={solution.title} text={solution.intro} actions={<><a className="button" href="/contact">{solution.cta}</a><a className="button button--ghost-white" href="/support">Get Technical Support</a></>} />
    <section className="section"><div className="container"><SectionHeading eyebrow="Capabilities" title={`Complete ${solution.title} Support`} text={solution.short}/><div className="capability-grid">{solution.groups.map(g => <article key={g.title}><div className="icon-box">{solution.icon}</div><h2>{g.title}</h2><ul>{g.items.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></article>)}</div></div></section>
    {solution.slug === 'networking-wifi' && <NetworkDiagram />}
    {solution.slug === 'branding-marketing' && <Portfolio />}
    <section className="section section--soft"><div className="container two-col"><div><SectionHeading eyebrow="Our approach" title="Practical by Design. Supported for the Long Term." text="Every recommendation is shaped around your environment, users, budget and growth plans." /></div><div className="mini-process">{['Assess the current environment','Design the right-fit solution','Deploy, test and document','Support and continuously improve'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></div></section><CTA title={solution.cta}/></Layout>
}

function NetworkDiagram() { return <section className="section network-section"><div className="container two-col"><div><SectionHeading light eyebrow="Network architecture" title="Secure Separation. Reliable Connectivity." text="A well-designed network keeps staff, students, guests, systems and internet services connected without putting everything on the same lane."/></div><div className="diagram"><div className="diagram-core">Secure Core<small>Firewall + switching</small></div>{['Internet','Staff','Students','Guests','Servers'].map((x,i)=><div key={x} className={`diagram-node dn-${i}`}>{x}</div>)}</div></div></section> }
function Portfolio() { return <section className="section"><div className="container"><SectionHeading eyebrow="Portfolio format" title="Brand Work, Presented with Context" text="Placeholder layouts only. Verified client work will be added after approval."/><div className="portfolio-grid">{['Brand Identity','Company Profile','Campaign Graphics','Corporate Presentation','Print Collateral','Digital Assets'].map((x,i)=><div key={x} className={`portfolio-item pi-${i}`}><span>PROJECT 0{i+1}</span><b>{x}</b><small>Approved work to be supplied</small></div>)}</div></div></section> }

function SolutionsIndex() { return <Layout><PageHero eyebrow="Solutions" title="One Partner Across Your Technology Environment" text="Build a secure, connected and supportable organisation with services designed to work together."/><section className="section"><div className="container service-grid service-grid--all">{solutions.map(s=><article className="service-card" key={s.slug}><div className="icon-box">{s.icon}</div><h2>{s.title}</h2><p>{s.short}</p><a href={`/solutions/${s.slug}`}>Explore service <span>→</span></a></article>)}</div></section><CTA/></Layout> }

function Industries() { return <Layout><PageHero eyebrow="Industries" title="Technology Shaped Around the Way You Work" text="From learning environments to professional offices, we design around your users, risk, operations and plans for growth."/><section className="section"><div className="container industry-detail-grid">{industries.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><h2>{x}</h2><p>{['Connected campuses, safe access, dependable labs and platforms that support administration and learning.','Scalable connectivity, student systems and collaboration tools across complex learning environments.','Practical platforms for enrolment, course delivery, reporting and learner support.','Cost-conscious, dependable technology that helps teams focus on community impact.','Flexible support, cloud systems and secure infrastructure that can grow with the business.','Reliable devices, communications, security and workflows for client-focused teams.','Connected stores, business systems, managed connectivity and responsive support.','Secure home-office connectivity, device support and practical technology advice.'][i]}</p><a href="/contact">Discuss your needs →</a></article>)}</div></section><CTA/></Layout> }

function Projects() { const cats=['Campus-wide Network & Wi-Fi','School Computer Laboratory','Microsoft 365 Migration','Moodle & SIS Implementation','Managed Printing Deployment','CCTV & Multi-site Monitoring']; return <Layout><PageHero eyebrow="Projects" title="Technology Projects with Clear Operational Purpose" text="This case-study library is ready for verified challenges, solutions, technologies, outcomes, images and testimonials."/><section className="section"><div className="container project-grid project-grid--six">{cats.map((x,i)=><article className="project-card" key={x}><div className={`project-art art-${i%3+1}`}><span>{['⌘','▦','☁','◇','▣','◉'][i]}</span></div><div><small>Case study placeholder</small><h2>{x}</h2><p><b>Client:</b> Name available on request</p><p><b>Outcome:</b> Verified outcome to be supplied</p><a href="/contact">Request project information →</a></div></article>)}</div></section><CTA/></Layout> }

function About() { return <Layout><PageHero eyebrow="About" title="A Practical Technology Partner for Organisations That Serve and Grow" text="Nanotechnology IT Solutions brings infrastructure, education technology, cloud, software and support together under one accountable team."/><section className="section"><div className="container about-grid"><div><SectionHeading eyebrow="Our purpose" title="Technology Should Make Work Simpler, Safer and More Effective" text="We focus on solutions that fit the organisation—not technology for its own sake. Our approach combines careful assessment, clear recommendations, professional deployment and responsive support."/><p className="verified-note">Operating since <strong>2016</strong></p></div><div className="mission-cards"><article><span>01</span><h2>Mission</h2><p>To provide reliable, secure and practical technology solutions that help organisations connect, operate, grow and serve their communities.</p></article><article><span>02</span><h2>Vision</h2><p>To become a trusted technology partner for schools, organisations and growing businesses across South Africa.</p></article></div></div></section><section className="section section--soft"><div className="container"><SectionHeading eyebrow="What guides us" title="Values Built into Every Engagement"/><div className="values-grid">{['Reliability','Integrity','Innovation','Service','Security','Education','Partnership','Continuous Improvement'].map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</div></div></section><CTA/></Layout> }

function Support() { return <Layout><PageHero eyebrow="Technical Support" title="Get the Right Help, Without the Runaround" text="Request remote or onsite assistance, follow up as an existing client, or tell us about an urgent issue."/><section className="section"><div className="container contact-grid"><div><SectionHeading eyebrow="Support options" title="How Can We Help?"/><div className="support-options">{[['Remote support','For issues that can be diagnosed securely without a site visit.'],['Onsite support','For hardware, infrastructure or complex environment issues.'],['Existing clients','Use your service agreement contact route where available.'],['Urgent assistance','Call us for time-sensitive operational interruptions.']].map(x=><div key={x[0]}><span>→</span><div><h3>{x[0]}</h3><p>{x[1]}</p></div></div>)}</div><div className="contact-panel"><small>Support hours</small><b>{company.hours}</b><a href={`tel:${company.phone.replace(/\s/g,'')}`}>{company.phone}</a><p>Do not include passwords or remote access credentials in this form.</p></div></div><div><LeadForm kind="support"/></div></div></section><FAQ/><CTA title="Need a More Proactive Support Plan?"/></Layout> }
function FAQ(){return <section className="section section--soft"><div className="container faq-wrap"><SectionHeading eyebrow="Frequently asked" title="Support Questions"/>{[['Can you support organisations on a monthly basis?','Yes. Managed support agreements can combine helpdesk, monitoring, maintenance, documentation and onsite assistance.'],['Do you provide remote and onsite support?','Yes. The right support method depends on the issue, urgency and access available.'],['What should I include in a support request?','Describe what changed, who is affected, any error message, and how urgently the issue is affecting operations. Never send passwords.']].map(x=><details key={x[0]}><summary>{x[0]}<span>+</span></summary><p>{x[1]}</p></details>)}</div></section>}

function Contact() { return <Layout><PageHero eyebrow="Contact" title="Tell Us What Your Organisation Needs Next" text="Request a quote, arrange a site assessment or start a conversation about your technology environment."/><section className="section"><div className="container contact-grid"><div><SectionHeading eyebrow="Contact details" title="Let’s Start with Your Priorities"/><div className="contact-cards"><a href={`tel:${company.phone.replace(/\s/g,'')}`}><span>☎</span><small>Call us</small><b>{company.phone}</b></a><a href={`mailto:${company.email}`}><span>✉</span><small>Email</small><b>{company.email}</b></a><a href={company.mapsUrl} target="_blank" rel="noreferrer"><span>⌖</span><small>Visit</small><b>{company.address}</b></a></div><div className="map-placeholder"><span>⌖</span><div><b>Cape Town service area</b><small>{company.serviceArea}</small></div><a href={company.mapsUrl} target="_blank" rel="noreferrer">Open map ↗</a></div></div><LeadForm/></div></section></Layout> }

function ClientPortal() { return <Layout><PageHero eyebrow="Client Portal" title="Secure Access for Authorised Customers" text="A future access point for approved support, billing, project and platform systems—without exposing private system addresses."/><section className="section"><div className="container portal-grid">{['Support Systems','Invoicing Systems','SIS Platforms','LMS Platforms','Project Dashboards','Documentation'].map(x=><article key={x}><span>↗</span><h2>{x}</h2><p>Authorised link to be configured securely.</p><button disabled>Access not yet configured</button></article>)}</div></section><CTA title="Need Help Accessing a Client System?"/></Layout> }

function Legal({type}:{type:'privacy'|'terms'}){return <Layout><PageHero eyebrow={type==='privacy'?'Privacy':'Terms'} title={type==='privacy'?'Privacy Policy':'Terms & Conditions'} text="Launch-ready policy placeholder requiring final legal review and approval."/><section className="section"><div className="container legal"><p className="verified-note">This content must be reviewed and approved before production launch.</p><h2>{type==='privacy'?'Information handling':'Website use'}</h2><p>{type==='privacy'?'Contact information submitted through this website will be used only to respond to enquiries and provide requested services. The production form must connect to an approved secure endpoint with an appropriate retention policy.':'Information on this website is provided for general service enquiries. Formal scopes, pricing, timelines and service commitments are established through approved quotations or agreements.'}</p><h2>Contact</h2><p>Questions may be sent to <a href={`mailto:${company.email}`}>{company.email}</a>.</p></div></section></Layout>}

function NotFound(){return <Layout><PageHero eyebrow="404" title="That Page Isn’t Connected" text="The address may have changed, or the page may not exist." actions={<a className="button" href="/">Return Home</a>}/></Layout>}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  useEffect(()=>{window.scrollTo(0,0)},[path])
  if(path==='/') return <Home/>
  if(path==='/solutions') return <SolutionsIndex/>
  if(path.startsWith('/solutions/')) return <SolutionPage slug={path.split('/')[2]}/>
  if(path==='/industries') return <Industries/>
  if(path==='/projects') return <Projects/>
  if(path==='/about') return <About/>
  if(path==='/support') return <Support/>
  if(path==='/contact') return <Contact/>
  if(path==='/client-portal') return <ClientPortal/>
  if(path==='/privacy') return <Legal type="privacy"/>
  if(path==='/terms') return <Legal type="terms"/>
  return <NotFound/>
}

export default App
