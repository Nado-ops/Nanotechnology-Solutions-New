import { useEffect, useState } from 'react'
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
  const descriptions = ['Keeps student records, enrolment and administration in one structured system.','Connects course delivery, learning resources, activities and assessments.','Brings secure email, files, collaboration and identity together.','Gives students a clear place to access services, information and learning.','Helps lecturers manage teaching, communication and student information.','Moves applicant information into the connected education workflow.','Connects approved financial processes and student account information.','Turns connected information into useful operational and academic insight.']
  const [active, setActive] = useState(0)
  return <section className="section education-premium" data-spotlight><div className="edu-grid-lines"></div><div className="container education-premium__grid"><div><SectionHeading light eyebrow="Education technology" title="Technology Built for Education" text="Connected platforms, secure access and dependable infrastructure designed around administrators, lecturers and students."/><p className="ecosystem-label">One connected education ecosystem</p><div className="education-info" aria-live="polite"><small>Selected platform</small><h3>{platforms[active]}</h3><p>{descriptions[active]}</p><span>Information flows securely through shared identity, roles and connected workflows.</span></div><a className="button" href="/solutions/education-technology">Explore Education Technology</a></div><div className="platform-map"><div className="platform-core"><span>◇</span><b>Connected Campus</b><small>{platforms[active]}</small></div>{platforms.map((x,i)=><button type="button" onClick={()=>setActive(i)} aria-pressed={active===i} key={x} className={`platform-card platform-${i} ${active===i?'is-active':''}`}><span>{['▦','M','☁','S','L','A','F','↗'][i]}</span><b>{x}</b><i></i></button>)}</div></div></section>
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
  const [active, setActive] = useState<number | null>(null)
  return <section className="section project-showcase"><div className="container"><SectionHeading eyebrow="Featured projects" title="Technology Projects Built Around Real Environments" text="Representative project formats shown with replaceable image placeholders until approved project photography is supplied."/><div className="project-showcase__grid">{projects.map((p,i)=><article className={`showcase-card showcase-${i} ${active===i?'is-active':''}`} key={p[0]} onClick={()=>setActive(active===i?null:i)}><div className="showcase-image"><div className="photo-label"><span>PHOTO</span><small>Approved project image to be supplied</small></div></div><div className="showcase-copy"><small>{p[0]}</small><h3>{p[1]}</h3><p>{p[2]}</p><b>{p[3]}</b><a href="/projects" onClick={e=>e.stopPropagation()}>View Project <span>↗</span></a></div></article>)}</div></div></section>
}

function TechnologyEnvironment() {
  const nodes = [
    ['Internet','External connectivity delivered into the organisation.',[1]],['Firewall','Protects and controls traffic entering the environment.',[0,2,10]],['Network','The secure wired foundation connecting every service.',[1,3,4,5,9]],['School Wi-Fi','Managed wireless access for staff, students and guests.',[2,4]],['Computer Laboratory','Connected workstations, teaching software and user access.',[2,3,5]],['Printers','Managed printing, secure release and department controls.',[2,4]],['Microsoft 365','Cloud identity, email, files and collaboration.',[2,7,8,10]],['Moodle','Course delivery, learning resources and assessment.',[6,8]],['Student Information System','Student administration, portals, admissions and reporting.',[6,7]],['CCTV','Network-connected visibility and physical security.',[2,10]],['Backups','Recovery protection for critical systems and information.',[1,6,9,11]],['Technical Support','Monitoring, maintenance and responsive assistance.',[2,6,10]],
  ] as const
  const [active, setActive] = useState(2)
  const related = new Set<number>([active, ...nodes[active][2]])
  return <section className="section environment-section"><div className="container"><SectionHeading light eyebrow="Connected by design" title="Your Complete Technology Environment" text="Select a service to see how each part contributes to one secure, supportable environment."/><div className="environment-layout"><div className="environment-nodes" role="group" aria-label="Technology environment services">{nodes.map((n,i)=><button type="button" key={n[0]} className={`${active===i?'is-active':''} ${related.has(i)?'is-related':''}`} onClick={()=>setActive(i)} onFocus={()=>setActive(i)}><span>{['◎','⬡','⌘','◌','▦','▣','☁','M','◇','◉','↻','⌁'][i]}</span><b>{n[0]}</b></button>)}</div><aside className="environment-info" aria-live="polite"><small>Selected service</small><span className="environment-info__icon">{['◎','⬡','⌘','◌','▦','▣','☁','M','◇','◉','↻','⌁'][active]}</span><h3>{nodes[active][0]}</h3><p>{nodes[active][1]}</p><div><b>Connected to</b>{nodes[active][2].map(i=><span key={nodes[i][0]}>{nodes[i][0]}</span>)}</div><a href="/solutions">Explore all solutions →</a></aside></div></div></section>
}

function InteractiveProcess() {
  const stages = [['Assess','We inspect your environment, identify challenges and understand your organisation’s goals.','⌕'],['Design','We create a practical solution covering infrastructure, security, cost and future growth.','◇'],['Deploy','We install, configure, test and document the complete solution.','↗'],['Support','We maintain your environment through remote support, onsite assistance and service agreements.','⌁']]
  const [active,setActive]=useState(0)
  return <section className="section process-section"><div className="container"><SectionHeading eyebrow="How we work" title="A Clear Path from Challenge to Solution" /><div className="interactive-process"><div className="process-tabs" role="tablist" aria-label="Our process">{stages.map((s,i)=><button type="button" role="tab" aria-selected={active===i} key={s[0]} onClick={()=>setActive(i)} onFocus={()=>setActive(i)} className={active===i?'is-active':''}><span>0{i+1}</span><i>{s[2]}</i><b>{s[0]}</b></button>)}</div><div className="process-progress"><i style={{width:`${(active/3)*100}%`}}></i></div><div className="process-detail" role="tabpanel" aria-live="polite"><span>{stages[active][2]}</span><div><small>Stage 0{active+1}</small><h3>{stages[active][0]}</h3><p>{stages[active][1]}</p></div></div></div></div></section>
}

function InteractiveFAQ() {
  const questions = [
    ['Do you provide onsite IT support?','Yes. Support can be delivered onsite or remotely according to the issue and service agreement.'],['Do you install Wi-Fi for schools?','Yes. We plan and deploy school and campus Wi-Fi, including coverage, capacity and network separation.'],['Can you build complete computer laboratories?','Yes. We can coordinate workstations, connectivity, printing, platforms and deployment support.'],['Do you support Microsoft 365?','Yes. Services include setup, migration, identity, security, user administration and ongoing support.'],['Can you install and manage Moodle?','Yes. We support Moodle installation, migration, upgrades, enrolment and platform integrations.'],['Do you provide networking between buildings?','Yes. Options include fibre and appropriately designed point-to-point or point-to-multipoint wireless links.'],['Do you support printers and PaperCut?','Yes. We support managed printing, PaperCut, quotas, secure release and printer troubleshooting.'],['Do you design websites and company profiles?','Yes. Creative services complement our technology work and include websites, branding and company profiles.'],['Can you provide monthly IT support?','Yes. Managed agreements can include helpdesk, monitoring, maintenance, documentation and onsite support.'],
  ]
  const [open,setOpen]=useState(0)
  return <section className="section section--soft"><div className="container faq-wrap"><SectionHeading eyebrow="Frequently asked" title="Technology Questions"/>{questions.map((q,i)=><div className={`faq-item ${open===i?'is-open':''}`} key={q[0]}><h3><button type="button" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}>{q[0]}<span>{open===i?'−':'+'}</span></button></h3><div className="faq-answer" aria-hidden={open!==i}><p>{q[1]}</p></div></div>)}</div></section>
}

function ReactiveTrustStrip() {
  const items = [['◷','Operating since 2016','Established experience supporting real organisations.'],['⌘','Network Infrastructure','Secure wired and wireless foundations.'],['◇','Education Technology','Platforms and infrastructure built for learning.'],['☁','Microsoft 365','Cloud identity, communication and collaboration.'],['⌁','Managed IT Support','Responsive help and proactive maintenance.'],['⌗','Software & Automation','Practical systems that improve workflows.']]
  const [active,setActive]=useState<number|null>(null)
  return <div className="trust-band"><div className="container trust-strip">{items.map((x,i)=><button type="button" key={x[1]} className={active===i?'is-active':''} onClick={()=>setActive(active===i?null:i)} onFocus={()=>setActive(i)} aria-describedby={`trust-tip-${i}`}><i>{x[0]}</i><span>{x[1]}</span><small id={`trust-tip-${i}`} role="tooltip">{x[2]}</small></button>)}</div></div>
}

function ServiceBento() {
  const services = [
    ['networking-wifi','School & Campus Wi-Fi','Secure, high-density wireless coverage built around learning and work environments.','⌘',['Coverage surveys','Managed access','Network separation']],
    ['education-technology','Computer Laboratories','Complete, teaching-ready labs with devices, networks, printing and support.','▦',['Workstation planning','Lab networking','User onboarding']],
    ['networking-wifi','Networking & Point-to-Point Links','Structured networks and building-to-building connectivity designed for growth.','↔',['Structured cabling','Wireless links','VLAN design']],
    ['managed-it-services','Managed IT Support','Proactive, responsive support that keeps people productive and systems dependable.','⌁',['Remote helpdesk','Onsite support','Proactive monitoring']],
    ['cloud-microsoft-365','Microsoft 365 & Cloud','Secure collaboration, identity and cloud services configured around your team.','☁',['Cloud migration','Identity security','User administration']],
    ['education-technology','Moodle & Student Systems','Connected learning, administration, portal and reporting platforms.','◇',['Moodle LMS','SIS platforms','Connected portals']],
    ['printing-solutions','Printing Solutions','Controlled, trackable printing for campuses and growing organisations.','▣',['PaperCut','Secure release','Print reporting']],
    ['branding-marketing','Websites, Branding & Marketing','Digital products and creative materials that strengthen your organisation.','✦',['Websites','Brand identity','Marketing assets']],
  ] as const
  const [active,setActive]=useState<number|null>(null)
  function activate(i:number){setActive(active===i?null:i)}
  return <section className="section section--soft premium-services" id="services" data-spotlight><div className="container"><SectionHeading eyebrow="Core services" title="Technology Capabilities That Work as One" text="Select a capability to see how one accountable partner connects infrastructure, users, systems and support." /><div className={`service-grid service-bento ${active!==null?'has-active':''}`}>{services.map((s,i) => <article className={`service-card bento-${i} ${active===i?'is-active':''}`} key={`${s[0]}-${i}`} onClick={()=>activate(i)}><div className="card-shine"></div><div className="icon-box">{s[3]}</div><small>0{i+1}</small><h3>{s[1]}</h3><p>{s[2]}</p><div className="service-extra" aria-hidden={active!==i}><ul>{s[4].map(x=><li key={x}>✓ {x}</li>)}</ul></div><a href={`/solutions/${s[0]}`} onClick={e=>e.stopPropagation()}>Explore solution <span>↗</span></a></article>)}</div></div></section>
}

function CreativePortfolio() {
  const categories = ['All','Logo Design','Company Profiles','Websites','Business Cards','Flyers & Brochures','Social Media Design','Presentations','Marketing Materials']
  const [filter,setFilter]=useState('All')
  const [preview,setPreview]=useState<string|null>(null)
  useEffect(()=>{
    function key(e:KeyboardEvent){if(e.key==='Escape')setPreview(null)}
    window.addEventListener('keydown',key)
    return()=>window.removeEventListener('keydown',key)
  },[])
  const visible = categories.slice(1).filter(x=>filter==='All'||x===filter)
  return <section className="section brand-section creative-brand"><div className="container"><div className="creative-heading"><SectionHeading eyebrow="Creative business services" title="Technology Meets Creative Design" text="From infrastructure and business systems to logos, websites and company profiles, we help organisations build both their technology and their brand."/><a className="button button--dark" href="/solutions/branding-marketing">Explore Creative Services</a></div><div className="portfolio-filters" aria-label="Portfolio filters">{categories.map(x=><button type="button" aria-pressed={filter===x} className={filter===x?'is-active':''} key={x} onClick={()=>setFilter(x)}>{x}</button>)}</div><div className="interactive-portfolio">{visible.map((x,i)=><button type="button" key={x} onClick={()=>setPreview(x)} className={`portfolio-placeholder pp-${i%4}`}><span>APPROVED WORK TO BE SUPPLIED</span><b>{x}</b><small>Open placeholder preview ↗</small></button>)}</div></div>{preview&&<div className="portfolio-modal" role="dialog" aria-modal="true" aria-label={`${preview} preview`} onClick={()=>setPreview(null)}><div onClick={e=>e.stopPropagation()}><button className="modal-close" type="button" onClick={()=>setPreview(null)} aria-label="Close preview">×</button><span>Portfolio placeholder</span><h3>{preview}</h3><p>Verified project imagery and details will appear here once approved. No client work has been invented.</p></div></div>}</section>
}

function Home() {
  return <Layout>
    <section className="hero-home" data-spotlight>
      <div className="hero-grid-pattern"></div><div className="container hero-home__grid">
        <div className="hero-copy"><p className="hero-trust"><span></span> Operating since 2016</p><h1>Technology That Keeps Your Organisation <em>Connected</em></h1><p>Nanotechnology IT Solutions designs, installs, secures and supports complete technology environments for schools, organisations and growing businesses.</p><div className="button-row"><a className="button button--hero" href="/contact?type=assessment">Request a Site Assessment <span>↗</span></a><a className="button button--outline" href="#services">Explore Our Solutions</a><a className="button button--text" href="/support">Get Technical Support</a></div></div>
        <HeroVisual />
      </div>
      <ReactiveTrustStrip />
    </section>

    <section className="section intro-section"><div className="container split-intro"><SectionHeading eyebrow="One technology partner" title="Complete Technology Solutions Under One Roof" text="We combine infrastructure, cloud services, education technology, software development, technical support and creative business services to help organisations operate more effectively." /><div className="trust-list">{['Infrastructure Planning', 'Professional Installation', 'Secure Configuration', 'Ongoing Support', 'Education Technology Experience', 'Scalable Business Solutions'].map(x => <div key={x}><span>✓</span>{x}</div>)}</div></div></section>

    <ServiceBento />

    <InfrastructureFeature />
    <TechnologyEnvironment />

    <section className="section"><div className="container"><SectionHeading eyebrow="Who we serve" title="Technology Solutions Built Around Your Organisation" text="Different environments have different priorities. We start by understanding how your people work."/><div className="industry-grid">{industries.map((x, i) => <a href="/industries" key={x}><span>{['◇','▥','△','♡','◫','□','▦','⌂'][i]}</span><h3>{x}</h3><p>Infrastructure, platforms and support aligned to your environment.</p><i>Explore →</i></a>)}</div></div></section>

    <InteractiveProcess />

    <EducationPlatform />

    <ProjectShowcase />

    <CreativePortfolio />
    <InteractiveFAQ />
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

function Support() { return <Layout><PageHero eyebrow="Technical Support" title="Get the Right Help, Without the Runaround" text="Request remote or onsite assistance, follow up as an existing client, or tell us about an urgent issue."/><section className="section"><div className="container contact-grid"><div><SectionHeading eyebrow="Support options" title="How Can We Help?"/><div className="support-options">{[['Remote support','For issues that can be diagnosed securely without a site visit.'],['Onsite support','For hardware, infrastructure or complex environment issues.'],['Existing clients','Use your service agreement contact route where available.'],['Urgent assistance','Call us for time-sensitive operational interruptions.']].map(x=><div key={x[0]}><span>→</span><div><h3>{x[0]}</h3><p>{x[1]}</p></div></div>)}</div><div className="contact-panel"><small>Support hours</small><b>{company.hours}</b><a href={company.phoneHref}>{company.phone}</a><a href={company.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp support</a><p>Do not include passwords or remote access credentials in this form.</p></div></div><div><LeadForm kind="support"/></div></div></section><InteractiveFAQ/><CTA title="Need a More Proactive Support Plan?"/></Layout> }

function Contact() { return <Layout><PageHero eyebrow="Contact" title="Tell Us What Your Organisation Needs Next" text="Request a quote, arrange a site assessment or start a conversation about your technology environment."/><section className="section"><div className="container contact-grid"><div><SectionHeading eyebrow="Contact details" title="Let’s Start with Your Priorities"/><div className="contact-cards"><a href={company.phoneHref}><span>☎</span><small>Call us</small><b>{company.phone}</b></a><a href={company.whatsappUrl} target="_blank" rel="noreferrer"><span>◉</span><small>WhatsApp</small><b>{company.phone}</b></a><a href={`mailto:${company.email}`}><span>✉</span><small>Email</small><b>{company.email}</b></a><a href={company.mapsUrl} target="_blank" rel="noreferrer"><span>⌖</span><small>Visit</small><b>{company.address}</b></a></div><div className="map-placeholder"><span>⌖</span><div><b>Cape Town service area</b><small>{company.serviceArea}</small></div><a href={company.mapsUrl} target="_blank" rel="noreferrer">Open map ↗</a></div></div><LeadForm/></div></section></Layout> }

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
