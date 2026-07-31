import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './App.css'
import { company } from './config'
import { solutions } from './data'
import { CTA, Layout, LeadForm, PageHero, SectionHeading } from './components'

const industries = [
  { title:'Schools', icon:'◇', summary:'Technology for primary, high and independent schools, designed around teaching, administration and safe access.', services:['School Wi-Fi','Computer laboratories','Microsoft 365 Education','Parent and learner portals','Managed printing','Technical support'] },
  { title:'Universities and Higher Education', icon:'▥', summary:'Connected campus technology for students, lecturers, administrators and support teams.', services:['Campus Wi-Fi','Computer laboratories','Student Information Systems','Moodle LMS','Microsoft 365 Education','Student and lecturer portals','Identity and access management','Managed printing','Network infrastructure','Reporting and integrations','Technical support'] },
  { title:'Colleges and Training Providers', icon:'△', summary:'Practical platforms and infrastructure for colleges, private colleges, TVET and vocational training environments.', services:['Admissions and applications','Learner registration','Programme management','Moodle for training providers','Training-centre Wi-Fi','Computer labs for training centres'] },
  { title:'QCTO and Skills Development', icon:'◎', summary:'Technology systems designed to support QCTO and skills-development operations.', services:['Learner registration systems','Programme and qualification management','QCTO-ready learner records','Assessment and moderation workflows','Attendance tracking','Portfolio of Evidence management','Learner dashboards','Facilitator and assessor access','Moodle course environments','Online applications','Certification and completion records','Reporting dashboards','Microsoft 365','Computer labs','Training-centre Wi-Fi','Data backups','Technical support'] },
  { title:'Non-Profit Organisations', icon:'♡', summary:'Dependable, cost-conscious systems for community training and non-profit education organisations.', services:['Community programme systems','Cloud collaboration','Secure connectivity','Learner and volunteer records','Reporting tools','Managed support'] },
  { title:'Businesses and Professional Offices', icon:'□', summary:'Connected technology for growing businesses, professional offices and corporate training departments.', services:['Managed IT services','Cloud and Microsoft 365','Corporate training platforms','Workplace-training workflows','Secure networks','Software and automation'] },
] as const
function HeroVisual() {
  return <div className="hero-visual hero-visual--photo" aria-label="Connected education, skills-development and business technology environment">
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
    { category:'School Wi-Fi', title:'Connected Campus Wi-Fi', description:'Reliable coverage across classrooms, offices and shared spaces.', details:'Wireless survey • Segmentation • Managed access', image:'/assets/projects/school-wifi.webp', alt:'Wireless network access point providing connected campus Wi-Fi' },
    { category:'Computer Laboratory', title:'Learning-Ready Computer Lab', description:'A complete laboratory environment designed for daily teaching.', details:'Workstations • Network • Printing', image:'/assets/projects/computer-lab.webp', alt:'Modern computer laboratory equipped for classroom learning' },
    { category:'Microsoft 365 Migration', title:'Secure Cloud Collaboration', description:'A structured move to modern email, files and teamwork.', details:'Identity • Migration • Onboarding', image:'/assets/projects/microsoft-365.webp', alt:'Microsoft 365 cloud collaboration workspace on a laptop' },
    { category:'Moodle and SIS', title:'Connected Learning Platforms', description:'Learning and student administration designed to work together.', details:'Moodle • SIS • Portals', image:'/assets/projects/moodle-sis.webp', alt:'Digital learning platform connecting Moodle and student information systems' },
    { category:'Managed Printing', title:'Controlled Campus Printing', description:'Clearer access, tracking and support across user groups.', details:'PaperCut • Quotas • Secure release', image:'/assets/projects/managed-printing.webp', alt:'Managed office printer supporting secure campus printing' },
    { category:'Network Infrastructure', title:'Secure Network Foundation', description:'A scalable core for reliable organisational connectivity.', details:'Cabling • Switching • VLANs', image:'/assets/projects/network-infrastructure.webp', alt:'Professional network infrastructure rack with switches and structured cabling' },
  ]
  const [active, setActive] = useState<number | null>(null)
  return <section className="section project-showcase"><div className="container"><SectionHeading eyebrow="Featured projects" title="Technology Projects Built Around Real Environments" text="Selected technology solutions designed for real education, business and organisational environments."/><div className="project-showcase__grid">{projects.map((project,i)=><article className={`showcase-card showcase-${i} ${active===i?'is-active':''}`} key={project.category} onClick={()=>setActive(active===i?null:i)}><div className="showcase-image"><img src={project.image} alt={project.alt} loading="lazy" decoding="async" /></div><div className="showcase-copy"><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p><b>{project.details}</b><a href="/projects" onClick={e=>e.stopPropagation()}>View Project <span>↗</span></a></div></article>)}</div></div></section>
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
    ['websites-software','Websites, Software & POS','Websites, custom systems and Point of Sale software built around real operational workflows.','⌗',['Point of Sale Systems','Custom software','Business websites']],
  ] as const
  const [active,setActive]=useState<number|null>(null)
  function activate(i:number){setActive(active===i?null:i)}
  return <section className="section section--soft premium-services" id="services" data-spotlight><div className="container"><SectionHeading eyebrow="Core services" title="Technology Capabilities That Work as One" text="Select a capability to see how one accountable partner connects infrastructure, users, systems and support." /><div className={`service-grid service-bento ${active!==null?'has-active':''}`}>{services.map((s,i) => <article className={`service-card bento-${i} ${active===i?'is-active':''}`} key={`${s[0]}-${i}`} onClick={()=>activate(i)}><div className="card-shine"></div><div className="icon-box">{s[3]}</div><small>0{i+1}</small><h3>{s[1]}</h3><p>{s[2]}</p><div className="service-extra" aria-hidden={active!==i}><ul>{s[4].map(x=><li key={x}>✓ {x}</li>)}</ul></div><a href={`/solutions/${s[0]}`} onClick={e=>e.stopPropagation()}>Explore solution <span>↗</span></a></article>)}</div></div></section>
}

function PortfolioMockup({type}:{type:string}) {
  const lineSet = <span className="preview-lines"><i></i><i></i><i></i></span>
  const visuals:Record<string,ReactNode> = {
    logo:<div className="identity-board preview-stage">
      <div className="identity-meta"><b>VISUAL IDENTITY / 01</b><span>Core system</span></div>
      <div className="identity-primary"><i>✦</i><strong>FORM</strong><small>Design with purpose.</small></div>
      <div className="identity-mark"><i>F</i><span>MONOGRAM<br/>01—03</span></div>
      <div className="identity-grid"><b>F</b><i></i><i></i><i></i><span>Clear space<br/>2× module</span></div>
      <div className="identity-type"><small>TYPE SYSTEM</small><b>Aa</b><span>MANROPE<br/>Bold / Regular</span></div>
      <div className="identity-colours"><i></i><i></i><i></i><i></i><span>01&nbsp;&nbsp;02&nbsp;&nbsp;03&nbsp;&nbsp;04</span></div>
    </div>,
    profile:<div className="profile-stack preview-stage">
      <div className="document page-back"><small>03 / CAPABILITY</small><b>Measured<br/>progress.</b><span className="mini-chart"><i></i><i></i><i></i><i></i></span></div>
      <div className="document page-middle"><small>02 / CONTENTS</small><ol><li>Who we are <b>04</b></li><li>What we do <b>08</b></li><li>Our approach <b>14</b></li></ol><span className="profile-photo"></span></div>
      <div className="document page-cover"><small>COMPANY PROFILE</small><span className="cover-image"></span><b>Built for<br/>what’s next.</b><i>2026 / CONCEPT</i></div>
    </div>,
    website:<div className="website-suite preview-stage">
      <div className="browser-mock"><span className="browser-bar"><i></i><i></i><i></i><b>concept.preview</b></span><div className="web-nav"><strong>STUDIO</strong><span>Work&nbsp;&nbsp; Services&nbsp;&nbsp; About</span><i>Start a project</i></div><div className="web-hero"><small>DIGITAL EXPERIENCES</small><b>Clear ideas.<br/><em>Powerful design.</em></b><span>Explore work →</span></div><div className="web-cards"><i></i><i></i><i></i></div></div>
      <div className="phone-mock"><span></span><div className="phone-ui"><small>STUDIO</small><b>Ideas that<br/>move.</b><i></i><i></i><i></i></div></div>
      <div className="ui-note"><b>RESPONSIVE UI</b><span>Desktop / Mobile</span></div>
    </div>,
    cards:<div className="card-suite preview-stage">
      <div className="paper-shadow"></div>
      <div className="business-card card-back"><span>FORM / STUDIO</span><b>Creative direction<br/>Digital design</b><i>concept.preview</i></div>
      <div className="business-card card-front"><i>✦</i><b>FORM</b><small>DESIGN STUDIO</small></div>
      <div className="business-card card-angle"><b>Alex Morgan</b><span>Creative Director</span>{lineSet}</div>
      <small className="stock-note">PREMIUM STOCK · SOFT TOUCH · 450GSM</small>
    </div>,
    print:<div className="print-suite preview-stage">
      <div className="print-sheet poster"><small>CONCEPT SERIES / 01</small><b>MAKE<br/>IDEAS<br/><em>VISIBLE.</em></b><i>Creative services →</i></div>
      <div className="print-sheet brochure"><span className="brochure-fold"></span><small>DESIGN / DIGITAL / PRINT</small><b>Made to<br/>communicate.</b><i></i>{lineSet}</div>
      <div className="print-sheet flyer"><small>NEW PERSPECTIVES</small><span></span><b>Creative<br/>thinking.</b><i>VIEW THE SERIES</i></div>
      <div className="print-caption">CAMPAIGN COLLATERAL <b>03 PIECES</b></div>
    </div>,
    social:<div className="social-suite preview-stage">
      <div className="social-post post-one"><small>01 / INSIGHT</small><b>BUILD<br/><em>BETTER.</em></b><i>→</i></div>
      <div className="social-post post-two"><small>02 / PROCESS</small><span>THINK</span><b>CREATE</b><i>REFINE</i></div>
      <div className="social-post post-three"><small>03 / RESULT</small><b>Design that<br/>performs.</b><i></i></div>
      <div className="social-story"><small>STORY / 9:16</small><b>NEW<br/>IDEAS</b><span>Swipe up ↑</span></div>
      <div className="campaign-key"><i></i><i></i><i></i><span>CAMPAIGN SYSTEM / 04</span></div>
    </div>,
    slides:<div className="slides-suite preview-stage">
      <div className="laptop"><span className="laptop-screen"><small>STRATEGY / 2026</small><b>Ideas into<br/><em>impact.</em></b><i>01</i></span><span className="laptop-base"></span></div>
      <div className="slide-card slide-data"><small>03 / GROWTH</small><b>72%</b><span className="data-bars"><i></i><i></i><i></i><i></i></span></div>
      <div className="slide-card slide-content"><small>02 / APPROACH</small><b>One clear<br/>direction.</b>{lineSet}</div>
      <span className="deck-count">16:9 DECK · 24 SLIDES</span>
    </div>,
    marketing:<div className="marketing-suite preview-stage">
      <div className="pullup"><span></span><small>CAMPAIGN / 01</small><b>MOVE<br/><em>FORWARD.</em></b><i>Explore →</i></div>
      <div className="campaign-poster"><small>DESIGN FOR GROWTH</small><b>Make your<br/>next move.</b><span></span></div>
      <div className="brand-document"><small>CAMPAIGN BRIEF</small><b>2026</b>{lineSet}<i></i></div>
      <div className="digital-banner"><small>DIGITAL / 1200×628</small><b>Ideas that connect.</b><i>LEARN MORE</i></div>
      <span className="campaign-note">ONE CAMPAIGN · EVERY TOUCHPOINT</span>
    </div>,
  }
  return <div className={`portfolio-mockup mockup-${type} mockup-premium`} aria-hidden="true"><span className="concept-label">Concept Preview</span>{visuals[type]}</div>
}

function CreativePortfolio() {
  const projects = [
    {category:'Logo Design',title:'Identity Systems',description:'Distinctive visual identities for businesses, education institutions and organisations.',tags:['Brand Strategy','Logo Systems','Brand Guidelines'],deliverables:['Primary and secondary logo concepts','Colour and typography direction','Brand-guideline document'],type:'logo'},
    {category:'Company Profiles',title:'Company Profile Design',description:'Editorial documents that communicate capability, credibility and purpose.',tags:['Editorial Layout','Corporate Design','Print Ready'],deliverables:['Cover and visual direction','Internal page system','Print and digital exports'],type:'profile'},
    {category:'Websites',title:'Website Experiences',description:'Responsive digital experiences designed around real audiences and goals.',tags:['UX Design','Responsive UI','Content Design'],deliverables:['Desktop and mobile layouts','Reusable interface system','Developer-ready design direction'],type:'website'},
    {category:'Business Cards',title:'Business Card Systems',description:'Tactile, professional contact pieces with a consistent brand hierarchy.',tags:['Print Design','Typography','Brand Details'],deliverables:['Front and back concepts','Print-ready artwork','Digital contact-card option'],type:'cards'},
    {category:'Flyers & Brochures',title:'Campaign Print Design',description:'Layered flyers, brochures and posters built to make information easy to act on.',tags:['Flyers','Brochures','Posters'],deliverables:['Campaign cover direction','Flexible page layouts','Print-ready production files'],type:'print'},
    {category:'Social Media Design',title:'Social Campaign Systems',description:'Coordinated post, story and carousel formats for consistent campaigns.',tags:['Social Posts','Stories','Carousel'],deliverables:['Square post templates','Story-format designs','Campaign carousel system'],type:'social'},
    {category:'Presentations',title:'Presentation Design',description:'Clear, confident presentation systems for pitches, reports and training.',tags:['Slide Systems','Data Stories','Presentations'],deliverables:['Presentation cover','Content-slide system','Chart and data styles'],type:'slides'},
    {category:'Marketing Materials',title:'Integrated Brand Collateral',description:'Connected physical and digital materials that extend the brand consistently.',tags:['Banners','Digital Ads','Email Signatures'],deliverables:['Pull-up banner direction','Branded document system','Digital campaign assets'],type:'marketing'},
  ]
  const categories = ['All',...projects.map(p=>p.category)]
  const descriptors = ['Brand Identity','Digital Design','Marketing','Web Experiences']
  const [filter,setFilter]=useState('All')
  const [preview,setPreview]=useState<number|null>(null)
  const [active,setActive]=useState<number|null>(null)
  const touchStart=useRef(0)
  const closeButton=useRef<HTMLButtonElement>(null)
  const navigate=useCallback((direction:number)=>setPreview(current=>current===null?null:(current+direction+projects.length)%projects.length),[projects.length])
  useEffect(()=>{
    function key(e:KeyboardEvent){if(e.key==='Escape')setPreview(null);if(e.key==='ArrowRight'&&preview!==null)navigate(1);if(e.key==='ArrowLeft'&&preview!==null)navigate(-1)}
    window.addEventListener('keydown',key)
    return()=>window.removeEventListener('keydown',key)
  },[preview,navigate])
  useEffect(()=>{
    if(preview===null)return
    const previous=document.body.style.overflow
    document.body.style.overflow='hidden'
    closeButton.current?.focus()
    return()=>{document.body.style.overflow=previous}
  },[preview])
  const visible = projects.map((p,i)=>({...p,index:i})).filter(p=>filter==='All'||p.category===filter)
  return <section className="section brand-section creative-brand" id="creative-studio" data-spotlight><div className="creative-bg" aria-hidden="true"><b>CREATE</b><i></i><i></i><span>+</span></div><div className="container creative-container"><div className="creative-heading"><div className="creative-heading__copy"><span className="creative-kicker">Creative Studio</span><h2>Technology Meets <em>Creative Design</em></h2><p>From infrastructure and business systems to logos, websites and company profiles, we help organisations build both their technology and their brand.</p><div className="descriptor" aria-label="Brand Identity, Digital Design, Marketing and Web Experiences">{descriptors.map((x,i)=><span style={{animationDelay:`${i*2.4}s`}} key={x}>{x}</span>)}</div></div><div className="creative-actions"><a className="button button--creative" href="/solutions/branding-marketing">Explore Creative Services <span>↗</span></a><a href="/solutions/branding-marketing#process">View Our Design Process →</a></div></div><div className="portfolio-filters" role="group" aria-label="Portfolio filters">{categories.map(x=><button type="button" aria-pressed={filter===x} className={filter===x?'is-active':''} key={x} onClick={()=>{setFilter(x);setActive(null)}}>{x}</button>)}</div><div className={`creative-bento ${filter!=='All'?'is-filtered':''}`}>{visible.map(p=><article key={p.category} className={`portfolio-piece piece-${p.type} ${active===p.index?'is-active':''}`} onClick={()=>setActive(active===p.index?null:p.index)}><PortfolioMockup type={p.type}/><div className="piece-copy"><small>{p.category}</small><h3>{p.title}</h3><p>{p.description}</p><div>{p.tags.map(x=><span key={x}>{x}</span>)}</div><button type="button" onClick={e=>{e.stopPropagation();setPreview(p.index)}}>View Service <span>↗</span></button></div></article>)}</div></div>{preview!==null&&<div className="portfolio-modal studio-modal" role="dialog" aria-modal="true" aria-label={`${projects[preview].category} concept preview`} onClick={()=>setPreview(null)} onTouchStart={e=>touchStart.current=e.touches[0].clientX} onTouchEnd={e=>{const distance=e.changedTouches[0].clientX-touchStart.current;if(Math.abs(distance)>55)navigate(distance<0?1:-1)}}><div onClick={e=>e.stopPropagation()}><button ref={closeButton} className="modal-close" type="button" onClick={()=>setPreview(null)} aria-label="Close preview">×</button><button className="modal-nav modal-prev" type="button" onClick={()=>navigate(-1)} aria-label="Previous service">‹</button><button className="modal-nav modal-next" type="button" onClick={()=>navigate(1)} aria-label="Next service">›</button><PortfolioMockup type={projects[preview].type}/><div className="modal-copy"><span>Concept Preview • {projects[preview].category}</span><h3>{projects[preview].title}</h3><p>{projects[preview].description}</p><b>Typical deliverables</b><ul>{projects[preview].deliverables.map(x=><li key={x}>✓ {x}</li>)}</ul><a className="button" href="/contact?type=quote">Request This Service</a></div></div></div>}</section>
}

function Home() {
  return <Layout>
    <section className="hero-home" data-spotlight>
      <div className="hero-grid-pattern"></div><div className="container hero-home__grid">
        <div className="hero-copy"><p className="hero-trust"><span></span> Operating since 2016</p><p className="hero-service-area">◎ Nationwide Service Across {company.country}</p><h1>Technology That Keeps Your Organisation <em>Connected</em></h1><p>Nanotechnology IT Solutions designs, installs, secures and supports complete technology environments for schools, universities, colleges, QCTO-accredited providers, skills-development institutions, organisations and growing businesses across {company.country}.</p><div className="button-row"><a className="button button--hero" href="/contact?type=assessment">Request a Site Assessment <span>↗</span></a><a className="button button--outline" href="#services">Explore Our Solutions</a><a className="button button--text" href="/support">Get Technical Support</a></div></div>
        <HeroVisual />
      </div>
      <ReactiveTrustStrip />
    </section>

    <section className="section intro-section"><div className="container split-intro"><SectionHeading eyebrow="One technology partner" title="Complete Technology Solutions Under One Roof" text="We combine infrastructure, cloud services, education technology, software development, technical support and creative business services to help organisations operate more effectively." /><div className="trust-list">{['Infrastructure Planning', 'Professional Installation', 'Secure Configuration', 'Ongoing Support', 'Education Technology Experience', 'Scalable Business Solutions'].map(x => <div key={x}><span>✓</span>{x}</div>)}</div></div></section>

    <ServiceBento />

    <InfrastructureFeature />
    <TechnologyEnvironment />

    <section className="section"><div className="container"><SectionHeading eyebrow="Who we serve" title="Technology Solutions Built Around Your Organisation" text={`Schools, universities, colleges, QCTO-accredited providers, training organisations and skills-development institutions across ${company.country}.`}/><div className="industry-grid education-industries">{industries.map(x => <a href="/industries" key={x.title}><span>{x.icon}</span><h3>{x.title}</h3><p>{x.summary}</p><ul>{x.services.slice(0,4).map(service=><li key={service}>{service}</li>)}</ul><i>Explore {x.services.length} capabilities →</i></a>)}</div></div></section>

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
  const education = solution.slug === 'education-technology'
  return <Layout><PageHero eyebrow="Solutions" title={solution.pageTitle || solution.title} text={solution.intro} actions={<><a className="button" href="/contact">{solution.cta}</a><a className="button button--ghost-white" href="/support">Get Technical Support</a></>} />
    <section className="section"><div className="container"><SectionHeading eyebrow="Capabilities" title={`Complete ${solution.title} Support`} text={solution.short}/><div className="capability-grid">{solution.groups.map(g => <article key={g.title}><div className="icon-box">{solution.icon}</div><h2>{g.title}</h2><ul>{g.items.map(x => <li key={x}><span>✓</span>{x}</li>)}</ul></article>)}</div></div></section>
    {education && <EducationSectors />}
    {solution.slug === 'networking-wifi' && <NetworkDiagram />}
    {solution.slug === 'branding-marketing' && <Portfolio />}
    <section className="section section--soft"><div className="container two-col"><div><SectionHeading eyebrow="Our approach" title="Practical by Design. Supported for the Long Term." text="Every recommendation is shaped around your environment, users, budget and growth plans." /></div><div className="mini-process">{['Assess the current environment','Design the right-fit solution','Deploy, test and document','Support and continuously improve'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></div></section>{education?<CTA title="Planning a technology project for your school, university, college, QCTO provider or training institution?" discussionLabel="Discuss Your Education Project" discussionHref="/contact?type=education"/>:<CTA title={solution.cta}/>}</Layout>
}

function NetworkDiagram() { return <section className="section network-section"><div className="container two-col"><div><SectionHeading light eyebrow="Network architecture" title="Secure Separation. Reliable Connectivity." text="A well-designed network keeps staff, students, guests, systems and internet services connected without putting everything on the same lane."/></div><div className="diagram"><div className="diagram-core">Secure Core<small>Firewall + switching</small></div>{['Internet','Staff','Students','Guests','Servers'].map((x,i)=><div key={x} className={`diagram-node dn-${i}`}>{x}</div>)}</div></div></section> }
function EducationSectors() {
  const sectors = [
    ['Schools','Primary, high and independent school environments.',['School and campus Wi-Fi','Computer, CAT, coding and robotics laboratories','Learner and parent portals','Microsoft 365 Education','Managed printing','Technical support']],
    ['Universities and Colleges','IT solutions for universities and colleges across South Africa.',['Student Information Systems','Admissions and application workflows','Lecturer and student portals','Moodle LMS','Campus Wi-Fi South Africa','Identity, access and single sign-on','Finance integration','Reporting and analytics']],
    ['QCTO and Occupational Training','Technology systems designed to support QCTO and skills-development operations.',['QCTO-ready learner records','Programme and qualification management','Assessment and moderation workflows','Portfolio of Evidence management','Assessor and moderator access','Certification and completion records','Reporting dashboards','Data backups']],
    ['Skills-Development Providers','Systems for accredited providers, applicants, learnerships and workplace-training programmes.',['Learner registration','Course enrolment and attendance','Learner dashboards','Facilitator management','Moodle for training providers','Online applications','Computer labs for training centres','Training-centre Wi-Fi']],
    ['Corporate Training','Connected learning and administration for internal training and professional development.',['Programme and module management','Employee enrolment','Learning portals','Microsoft 365','Role-based permissions','Completion records','Reporting and integrations','Technical support']],
    ['Community Education Programmes','Practical platforms for community training and non-profit education organisations.',['Online applications','Learner records','Attendance and assessments','Cloud collaboration','Accessible learning platforms','Secure backups','Reporting tools','Ongoing support']],
  ] as const
  return <section className="section education-sector-section"><div className="container"><SectionHeading light eyebrow="Education environments" title="Built Around Every Stage of Learning" text="From school classrooms and university campuses to occupational training, learnerships and community programmes, we connect infrastructure, learning and administration."/><div className="education-sector-grid">{sectors.map((sector,i)=><article key={sector[0]}><span>0{i+1}</span><h2>{sector[0]}</h2><p>{sector[1]}</p><ul>{sector[2].map(item=><li key={item}>✓ {item}</li>)}</ul></article>)}</div></div></section>
}
function Portfolio() { return <section className="section"><div className="container"><SectionHeading eyebrow="Portfolio format" title="Brand Work, Presented with Context" text="Placeholder layouts only. Verified client work will be added after approval."/><div className="portfolio-grid">{['Brand Identity','Company Profile','Campaign Graphics','Corporate Presentation','Print Collateral','Digital Assets'].map((x,i)=><div key={x} className={`portfolio-item pi-${i}`}><span>PROJECT 0{i+1}</span><b>{x}</b><small>Approved work to be supplied</small></div>)}</div></div></section> }

function SolutionsIndex() { return <Layout><PageHero eyebrow="Solutions" title="One Partner Across Your Technology Environment" text="Build a secure, connected and supportable organisation with services designed to work together."/><section className="section"><div className="container service-grid service-grid--all">{solutions.map(s=><article className="service-card" key={s.slug}><div className="icon-box">{s.icon}</div><h2>{s.title}</h2><p>{s.short}</p><a href={`/solutions/${s.slug}`}>Explore service <span>→</span></a></article>)}</div></section><CTA/></Layout> }

function Industries() { return <Layout><PageHero eyebrow="Industries" title="Technology Shaped Around the Way You Work" text={`Technology for education and skills-development institutions, non-profits and businesses across ${company.country}.`}/><section className="section"><div className="container industry-detail-grid expanded-industries">{industries.map((industry,i)=><article key={industry.title}><span>{String(i+1).padStart(2,'0')}</span><h2>{industry.title}</h2><p>{industry.summary}</p><ul>{industry.services.map(service=><li key={service}>✓ {service}</li>)}</ul><a href="/contact">Discuss your needs →</a></article>)}</div></section><CTA/></Layout> }

function Projects() { const cats=['Campus-wide Network & Wi-Fi','Education Computer Laboratory','Microsoft 365 Migration','Moodle & Student/Learner Systems','Managed Printing Deployment','CCTV & Multi-site Monitoring']; return <Layout><PageHero eyebrow="Projects" title="Technology Projects with Clear Operational Purpose" text="This case-study library is ready for verified challenges, solutions, technologies, outcomes, images and testimonials."/><section className="section"><div className="container project-grid project-grid--six">{cats.map((x,i)=><article className="project-card" key={x}><div className={`project-art art-${i%3+1}`}><span>{['⌘','▦','☁','◇','▣','◉'][i]}</span></div><div><small>Case study placeholder</small><h2>{x}</h2><p><b>Client:</b> Name available on request</p><p><b>Outcome:</b> Verified outcome to be supplied</p><a href="/contact">Request project information →</a></div></article>)}</div></section><CTA/></Layout> }

function About() { return <Layout><PageHero eyebrow="About" title="A Practical Technology Partner for Organisations That Serve and Grow" text={`Based in ${company.headOfficeCity} and serving clients nationwide, Nanotechnology IT Solutions delivers practical technology and creative solutions to organisations throughout ${company.country}.`}/><section className="section"><div className="container about-grid"><div><SectionHeading eyebrow="Our purpose" title="Technology Should Make Work Simpler, Safer and More Effective" text="Nanotechnology IT Solutions supports schools, universities, colleges, QCTO-accredited providers, occupational training organisations and skills-development institutions with infrastructure, learning platforms, information systems, cloud services and ongoing technical support."/><p className="verified-note">Operating since <strong>2016</strong> · {company.serviceAreaStatement}</p></div><div className="mission-cards"><article><span>01</span><h2>Mission</h2><p>To provide reliable, secure and practical technology solutions that help organisations connect, operate, grow and serve their communities.</p></article><article><span>02</span><h2>Vision</h2><p>To become a trusted technology partner for education and skills-development institutions, organisations and growing businesses across {company.country}.</p></article></div></div></section><section className="section section--soft"><div className="container"><SectionHeading eyebrow="What guides us" title="Values Built into Every Engagement"/><div className="values-grid">{['Reliability','Integrity','Innovation','Service','Security','Education','Partnership','Continuous Improvement'].map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</div></div></section><CTA/></Layout> }

function Support() { return <Layout><PageHero eyebrow="Technical Support" title="Get the Right Help, Without the Runaround" text="Request remote or onsite assistance, follow up as an existing client, or tell us about an urgent issue."/><section className="section"><div className="container contact-grid"><div><SectionHeading eyebrow="Support options" title="How Can We Help?"/><div className="support-options">{[['Remote support','For issues that can be diagnosed securely without a site visit.'],['Onsite support','For hardware, infrastructure or complex environment issues.'],['Existing clients','Use your service agreement contact route where available.'],['Urgent assistance','Call us for time-sensitive operational interruptions.']].map(x=><div key={x[0]}><span>→</span><div><h3>{x[0]}</h3><p>{x[1]}</p></div></div>)}</div><div className="contact-panel"><small>Support hours</small><b>{company.hours}</b><a href={company.phoneHref}>{company.phone}</a><a href={company.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp support</a><p>Do not include passwords or remote access credentials in this form.</p></div></div><div><LeadForm kind="support"/></div></div></section><InteractiveFAQ/><CTA title="Need a More Proactive Support Plan?"/></Layout> }

function Contact() { const serviceOptions=[`Remote support nationwide`,`Microsoft 365 and cloud services nationwide`,`Website, software and branding services nationwide`,`Project-based networking and infrastructure installations`,`School and campus technology deployments`,`Onsite visits arranged according to project scope and location`]; return <Layout><PageHero eyebrow="Contact" title="Tell Us What Your Organisation Needs Next" text={`Request a quote, arrange a project assessment or discuss your technology requirements anywhere in ${company.country}.`}/><section className="section"><div className="container contact-grid"><div><SectionHeading eyebrow="Contact details" title="Let’s Start with Your Priorities"/><div className="contact-cards"><a href={company.phoneHref}><span>☎</span><small>Call us</small><b>{company.phone}</b></a><a href={company.whatsappUrl} target="_blank" rel="noreferrer"><span>◉</span><small>WhatsApp</small><b>{company.phone}</b></a><a href={`mailto:${company.email}`}><span>✉</span><small>Email</small><b>{company.email}</b></a><a href={company.mapsUrl} target="_blank" rel="noreferrer"><span>⌖</span><small>Head Office</small><b>{company.address}</b></a></div><div className="map-placeholder"><span>⌖</span><div><b>Head Office: {company.headOfficeCity}</b><small>Service Area: {company.serviceArea}</small></div><a href={company.mapsUrl} target="_blank" rel="noreferrer">Open map ↗</a></div></div><LeadForm/></div></section><section className="section section--soft where-we-work"><div className="container"><SectionHeading eyebrow={company.serviceArea} title="Where We Work" text={`Our head office is based in ${company.headOfficeCity}, and we support clients across ${company.country} through remote services, project-based deployments, onsite installations and ongoing support agreements.`}/><div className="service-area-options">{serviceOptions.map((option,i)=><div key={option}><span>{String(i+1).padStart(2,'0')}</span><b>{option}</b></div>)}</div></div></section><CTA/></Layout> }

function ClientPortal() { return <Layout><PageHero eyebrow="Client Portal" title="Secure Access for Authorised Customers" text="A future access point for approved support, billing, project and platform systems—without exposing private system addresses."/><section className="section"><div className="container portal-grid">{['Support Systems','Invoicing Systems','SIS Platforms','LMS Platforms','Project Dashboards','Documentation'].map(x=><article key={x}><span>↗</span><h2>{x}</h2><p>Authorised link to be configured securely.</p><button disabled>Access not yet configured</button></article>)}</div></section><CTA title="Need Help Accessing a Client System?"/></Layout> }

function Legal({type}:{type:'privacy'|'terms'}){return <Layout><PageHero eyebrow={type==='privacy'?'Privacy':'Terms'} title={type==='privacy'?'Privacy Policy':'Terms & Conditions'} text="Launch-ready policy placeholder requiring final legal review and approval."/><section className="section"><div className="container legal"><p className="verified-note">This content must be reviewed and approved before production launch.</p><h2>{type==='privacy'?'Information handling':'Website use'}</h2><p>{type==='privacy'?'Contact information submitted through this website will be used only to respond to enquiries and provide requested services. The production form must connect to an approved secure endpoint with an appropriate retention policy.':'Information on this website is provided for general service enquiries. Formal scopes, pricing, timelines and service commitments are established through approved quotations or agreements.'}</p><h2>Contact</h2><p>Questions may be sent to <a href={`mailto:${company.email}`}>{company.email}</a>.</p></div></section></Layout>}

function NotFound(){return <Layout><PageHero eyebrow="404" title="That Page Isn’t Connected" text="The address may have changed, or the page may not exist." actions={<a className="button" href="/">Return Home</a>}/></Layout>}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
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
