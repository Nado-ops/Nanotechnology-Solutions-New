# WordPress Transfer Map

The React build intentionally uses standard, reusable sections that map cleanly to Divi or Elementor.

| Coded section | Divi equivalent | Elementor equivalent |
|---|---|---|
| Home and page hero | Fullwidth Header | Container + Heading + Buttons |
| Service and industry grids | Blurb modules | Icon Box grid |
| Featured solutions | Text + Button + rows | Containers + Icon Lists |
| Process | Blurb row | Steps / Icon Box containers |
| Projects | Portfolio / custom post grid | Loop Grid / Portfolio |
| Calls to action | CTA module | Call to Action widget |
| Contact and support forms | Contact Form | Form widget |
| FAQ | Accordion | Accordion widget |
| Footer | Theme Builder global footer | Theme Builder footer |

## Content model

- Solutions should become a custom post type or one page per solution.
- Projects should become a case-study custom post type with fields for industry, challenge, solution, technologies, outcome, gallery and testimonial.
- Company contact details should use global options rather than page-level text.
- Reusable CTA, header and footer blocks should be global modules.

## Launch notes

- Replace marked project, founding year, legal and portal placeholders only with verified information.
- Connect forms to an approved secure CRM/email endpoint with server-side validation and spam protection.
- Configure page-level SEO titles, descriptions, canonical URLs, Open Graph images and breadcrumbs in the selected SEO plugin.
