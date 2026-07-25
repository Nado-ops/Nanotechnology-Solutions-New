export type Solution = {
  slug: string
  title: string
  pageTitle?: string
  short: string
  icon: string
  intro: string
  groups: { title: string; items: string[] }[]
  cta: string
}

export const solutions: Solution[] = [
  {
    slug: 'managed-it-services', title: 'Managed IT Services', icon: '⌁',
    short: 'Proactive support that keeps your people productive and your technology dependable.',
    intro: 'Practical, accountable IT management for organisations that need reliable systems without building a full internal IT department.',
    cta: 'Request a Managed IT Assessment',
    groups: [
      { title: 'Everyday support', items: ['Monthly IT support agreements', 'Remote and onsite support', 'Helpdesk services', 'Computer and server maintenance', 'Software updates and patch management', 'User account administration'] },
      { title: 'Operations & resilience', items: ['Proactive monitoring', 'IT asset management', 'IT procurement', 'Backup monitoring', 'Disaster recovery planning', 'Service-level agreements'] },
      { title: 'Planning & governance', items: ['IT consulting', 'IT audits', 'Infrastructure assessments', 'Technology planning', 'Technical documentation', 'Environment roadmaps'] },
    ],
  },
  {
    slug: 'networking-wifi', title: 'Networking & Wi-Fi', icon: '⌘',
    short: 'Secure, high-performance wired and wireless networks designed around your environment.',
    intro: 'From a single office to an entire campus, we design networks for coverage, capacity, security and future growth.',
    cta: 'Book a Network Site Survey',
    groups: [
      { title: 'Network infrastructure', items: ['Network planning and design', 'Structured cabling and fibre', 'Network cabinets and racks', 'Routers, firewalls and managed switches', 'VLANs and segmentation', 'Bandwidth management and monitoring', 'Internet failover and VPNs', 'Site-to-site connectivity'] },
      { title: 'Wireless services', items: ['School, campus and office Wi-Fi', 'Indoor and outdoor access points', 'Coverage surveys and heatmapping', 'High-density wireless deployments', 'Guest Wi-Fi portals', 'Student and staff separation', 'Building-to-building links', 'Long-range wireless connectivity'] },
      { title: 'Platforms & support', items: ['MikroTik deployments', 'UniFi deployments', 'Point-to-point wireless links', 'Point-to-multipoint links', 'Network troubleshooting', 'Network upgrades'] },
    ],
  },
  {
    slug: 'education-technology', title: 'Education Technology', icon: '◇',
    pageTitle: 'Technology for Education, Higher Education and Skills Development',
    short: 'Infrastructure, learning platforms and information systems for education and skills-development institutions.',
    intro: 'Technology environments designed for schools, universities, colleges, QCTO-accredited providers, occupational training organisations and skills-development institutions across South Africa.',
    cta: 'Discuss Your Education Technology Project',
    groups: [
      { title: 'Learner and student systems', items: ['Student and learner information systems', 'Admissions and application workflows', 'Learner registration', 'Programme, module and subject management', 'Course enrolment and attendance', 'Assessment and moderation workflows', 'Portfolio of Evidence management', 'Certification and completion records'] },
      { title: 'Learning, access and data', items: ['Moodle LMS environments', 'Student, learner and lecturer portals', 'Parent portals where applicable', 'Facilitator management', 'Assessor and moderator access', 'Role-based permissions and single sign-on', 'Finance integration', 'Reporting, analytics and data migration'] },
      { title: 'Infrastructure and support', items: ['Microsoft 365 Education', 'Computer laboratories for schools and training centres', 'School, campus and training-centre Wi-Fi', 'Network infrastructure', 'Managed printing', 'Cloud backups', 'Technical support', 'User onboarding and platform integrations'] },
    ],
  },
  {
    slug: 'printing-solutions', title: 'Printing Solutions', icon: '▣',
    short: 'Controlled, trackable and dependable printing for campuses and organisations.',
    intro: 'Make printing easier to manage, more secure and more transparent across departments and user groups.',
    cta: 'Discuss Your Printing Environment',
    groups: [
      { title: 'Print infrastructure', items: ['Network printer installation', 'Multifunction printer setup', 'Print servers', 'Printer access across VLANs', 'Printer monitoring', 'Managed printer support'] },
      { title: 'PaperCut & control', items: ['PaperCut installation and management', 'Secure print release', 'Follow-me printing', 'Student print quotas', 'Staff print tracking', 'Department reporting'] },
      { title: 'Document workflows', items: ['Scan-to-email', 'Scan-to-folder', 'Consumables planning', 'Printer troubleshooting', 'Document workflow automation'] },
    ],
  },
  {
    slug: 'cloud-microsoft-365', title: 'Cloud & Microsoft 365', icon: '☁',
    short: 'Secure cloud collaboration, identity and hosting configured for the way your team works.',
    intro: 'Move, manage and protect your organisation’s communication and files with a practical cloud roadmap.',
    cta: 'Plan Your Cloud Migration',
    groups: [
      { title: 'Microsoft 365', items: ['Business and Education setup', 'Microsoft 365 migration', 'Exchange Online', 'Teams, SharePoint and OneDrive', 'Email migration', 'User and group administration'] },
      { title: 'Identity & security', items: ['Multi-factor authentication', 'Identity management', 'User onboarding and offboarding', 'Security configuration', 'Domain and DNS management', 'Cloudflare configuration'] },
      { title: 'Cloud operations', items: ['Cloud file storage', 'Cloud backup', 'Website and application hosting', 'Cloud migration planning', 'Licensing guidance'] },
    ],
  },
  {
    slug: 'cybersecurity', title: 'Cybersecurity', icon: '⬡',
    short: 'Layered safeguards that reduce everyday cyber risk and support business continuity.',
    intro: 'Security is built into every environment we design, with sensible controls your organisation can actually maintain.',
    cta: 'Request a Security Review',
    groups: [
      { title: 'Protection', items: ['Firewall installation and management', 'Endpoint and malware protection', 'Email security', 'Ransomware protection planning', 'Multi-factor authentication', 'Access controls'] },
      { title: 'Visibility & resilience', items: ['Security monitoring', 'Account and device audits', 'Backup and recovery', 'Disaster recovery', 'Business continuity planning', 'Network segmentation'] },
      { title: 'People & policy', items: ['Security awareness training', 'Data protection policies', 'Secure onboarding and offboarding', 'Practical risk recommendations'] },
    ],
  },
  {
    slug: 'cctv-access-control', title: 'CCTV & Access Control', icon: '◉',
    short: 'Integrated surveillance and access systems for safer, more visible facilities.',
    intro: 'Plan, install and support physical security technology as part of your wider network environment.',
    cta: 'Request a Security Site Assessment',
    groups: [
      { title: 'CCTV', items: ['CCTV system design', 'IP camera installations', 'Remote viewing', 'Multi-site monitoring', 'Camera recording', 'Storage configuration', 'Camera maintenance'] },
      { title: 'Access systems', items: ['Access control', 'Door controllers', 'Intercom systems', 'Attendance systems', 'Network integration', 'Remote support'] },
      { title: 'Resilience', items: ['Backup power planning', 'Network readiness', 'Storage planning', 'System documentation'] },
    ],
  },
  {
    slug: 'voip-communications', title: 'VoIP Communications', icon: '◌',
    short: 'Flexible business telephony configured for offices, teams and remote users.',
    intro: 'Modern voice systems with sensible call flows, dependable network configuration and ongoing support.',
    cta: 'Assess Your Communications Setup',
    groups: [
      { title: 'Platforms', items: ['VoIP telephone systems', '3CX deployments', 'Yeastar systems', 'Extension configuration', 'Mobile extensions', 'Remote users'] },
      { title: 'Call experience', items: ['Call routing', 'Auto attendants', 'Call queues', 'Voicemail', 'Business-hours routing'] },
      { title: 'Readiness & support', items: ['Network readiness assessments', 'QoS configuration', 'Telephone system support', 'Configuration documentation'] },
    ],
  },
  {
    slug: 'websites-software', title: 'Websites, Software and Business Systems', icon: '⌗',
    short: 'Custom and cloud-based Point of Sale systems for retail stores, service businesses and multi-branch organisations, with sales, inventory, customer management, reporting and accounting integration.',
    intro: 'We create maintainable websites, software and business systems—including Point of Sale solutions—that connect customers, teams, transactions and operational workflows.',
    cta: 'Discuss Your Digital Project',
    groups: [
      { title: 'Websites', items: ['Business, school, college and non-profit websites', 'WordPress, Divi and Elementor', 'Responsive website design', 'Website maintenance and hosting', 'Website copy and content structure'] },
      { title: 'Software and business systems', items: ['Custom web applications', 'Student and customer portals', 'CRM and invoicing systems', 'Point of Sale Systems', 'Online application systems', 'Database systems'] },
      { title: 'Integration & support', items: ['Workflow automation', 'API integrations', 'Moodle and Microsoft 365 integrations', 'Supabase applications', 'Cloudflare deployments', 'Software maintenance'] },
      { title: 'Point of Sale Systems', items: ['Retail point of sale systems', 'Product and service sales', 'Inventory and stock management', 'Barcode scanning', 'Sales and transaction history', 'Customer management', 'Supplier management', 'User roles and cashier permissions', 'Multiple tills and branches', 'Quotations and invoices', 'Receipts', 'Discounts and promotions', 'Cash, card and electronic payment recording', 'Daily cash-up reports', 'Sales reports and dashboards', 'Low-stock alerts', 'Stock transfers between branches', 'Expense tracking', 'Accounting-system integration where configured and supported', 'Cloud-based access', 'Secure backups', 'Mobile and tablet-friendly interfaces', 'Custom POS development', 'Ongoing support and maintenance', 'Ready for integration with supported payment and accounting platforms'] },
    ],
  },
  {
    slug: 'branding-marketing', title: 'Branding & Marketing', icon: '✦',
    short: 'Professional brand and marketing materials that complement your digital presence.',
    intro: 'Present a consistent, credible organisation across every customer touchpoint—from your website to everyday documents.',
    cta: 'Start a Branding Project',
    groups: [
      { title: 'Brand foundations', items: ['Logo design', 'Brand identity and guidelines', 'Company profile design', 'Business cards', 'Letterheads', 'Email signatures'] },
      { title: 'Marketing material', items: ['Flyers and brochures', 'Posters and banners', 'Social media graphics', 'Marketing campaigns', 'Presentation design', 'Corporate documents'] },
      { title: 'Digital support', items: ['Website content', 'Digital marketing support', 'Social media marketing support', 'Campaign-ready asset systems'] },
    ],
  },
  {
    slug: 'repairs-data-recovery', title: 'Repairs & Data Recovery', icon: '＋',
    short: 'Device repair and recovery services within a broader, business-focused IT offering.',
    intro: 'Get individual devices working again—and identify the wider improvements that can prevent repeat issues.',
    cta: 'Request a Repair Assessment',
    groups: [
      { title: 'Repairs', items: ['Laptop and desktop repairs', 'Hardware diagnostics', 'SSD and memory upgrades', 'Operating system installation', 'Software troubleshooting', 'Virus and malware removal'] },
      { title: 'Data & continuity', items: ['Data recovery', 'Backup configuration', 'Device collection and delivery', 'Recovery planning'] },
      { title: 'Workstations', items: ['Custom computer builds', 'Workstation deployment', 'Business computer maintenance', 'Device lifecycle guidance'] },
    ],
  },
]

export const coreServices = [
  solutions[0], solutions[1], solutions[2], solutions[4],
  { ...solutions[3], title: 'Printing & Communications', short: 'Managed printing and flexible voice systems for connected teams.' },
  { ...solutions[8], title: 'Websites, Software & POS', short: 'Websites, custom software and Point of Sale systems designed around real operational needs.' },
]
