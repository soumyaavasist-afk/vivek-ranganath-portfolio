/**
 * Central content source for the site.
 *
 * PLACEHOLDER NOTICE: every entry marked `placeholder: true` (projects, imagery,
 * client logos, press image) is temporary concept material. Replace the values
 * and swap the files in /public/images with Vivek's approved photography and
 * verified project data — the layout adapts without code changes.
 */

export const contact = {
  phoneDisplay: '+91 988 613 1904',
  phoneHref: 'tel:+919886131904',
  whatsappHref: 'https://wa.me/919886131904',
  email: 'hello@vivekranganath.com',
  location: 'Bengaluru, India',
  // TODO: replace with verified profile URLs
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://www.instagram.com/',
}

export const portfolio = {
  label: 'Architect & Developer Portfolio',
  // TODO: replace with the final 10–15 page sales portfolio PDF
  href: '/portfolio/vivek-ranganath-architect-developer-portfolio.pdf',
  meta: 'PDF · Sales portfolio',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Applications', href: '#applications' },
  { label: 'Approach', href: '#approach' },
  { label: 'Clients', href: '#clients' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
]

export const images = {
  hero: '/images/hero.png',
  portrait: '/images/artist-portrait.png',
  approach: '/images/approach.png',
  logo: '/images/logo.svg',
}

export const heroStats = [
  { value: '22+', label: 'Years of Experience' },
  { value: '1000+', label: 'Murals' },
  { value: 'Site-Specific', label: 'Commissioned Works' },
]

export const credentials = [
  { value: '22+', label: 'Years of Experience' },
  { value: '1000+', label: 'Murals' },
  { value: 'Masters in Visual Arts', label: 'Karnataka Chitrakala Parishath' },
  { value: 'Bengaluru, India', label: 'Based out of' },
]

export type Project = {
  number: string
  name: string
  medium: string
  size: string
  location: string
  application: string
  customisedForSite?: boolean
  image: string
  imageAlt: string
  placeholder: boolean
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Project Title — To Be Confirmed',
    medium: 'Mural — Mixed Media',
    size: '00 ft (W) × 00 ft (H)',
    location: 'Location to be confirmed',
    application: 'Hotel Lobby',
    customisedForSite: true,
    image: '/images/works/project-01.png',
    imageAlt: 'Concept image: large mural across a hotel lobby wall above a stone reception desk',
    placeholder: true,
  },
  {
    number: '02',
    name: 'Project Title — To Be Confirmed',
    medium: 'Sculpture — Bronze & Steel',
    size: '00 ft (H)',
    location: 'Location to be confirmed',
    application: 'Corporate Campus · Water Body',
    customisedForSite: true,
    image: '/images/works/project-02.png',
    imageAlt: 'Concept image: monumental sculpture in a reflecting pool before a corporate building',
    placeholder: true,
  },
  {
    number: '03',
    name: 'Project Title — To Be Confirmed',
    medium: 'Suspended Installation — Brass & Terracotta',
    size: '00 ft (W) × 00 ft (H)',
    location: 'Location to be confirmed',
    application: 'Corporate Lobby',
    customisedForSite: true,
    image: '/images/works/project-03.png',
    imageAlt: 'Concept image: suspended wave installation in a double-height corporate lobby',
    placeholder: true,
  },
  {
    number: '04',
    name: 'Project Title — To Be Confirmed',
    medium: 'Relief Mural — Textured Mixed Media',
    size: '00 ft (W) × 00 ft (H)',
    location: 'Location to be confirmed',
    application: 'Apartment Entrance',
    image: '/images/works/project-04.png',
    imageAlt: 'Concept image: textured relief mural in a residential entrance lobby',
    placeholder: true,
  },
  {
    number: '05',
    name: 'Project Title — To Be Confirmed',
    medium: 'Outdoor Sculpture — Stone & Metal',
    size: '00 ft (H)',
    location: 'Location to be confirmed',
    application: 'Resort · Landscape',
    customisedForSite: true,
    image: '/images/works/project-05.png',
    imageAlt: 'Concept image: outdoor sculpture in a resort courtyard beside a pool',
    placeholder: true,
  },
  {
    number: '06',
    name: 'Project Title — To Be Confirmed',
    medium: 'Mural — Acrylic on Wall',
    size: '00 ft (W) × 00 ft (H)',
    location: 'Location to be confirmed',
    application: 'Clubhouse',
    image: '/images/works/project-06.png',
    imageAlt: 'Concept image: vibrant figurative mural across the curved wall of a clubhouse lounge',
    placeholder: true,
  },
]

export type Application = {
  name: string
  image: string
  imageAlt: string
}

export const applications: Application[] = [
  { name: 'Luxury Residences', image: '/images/applications/luxury-residences.png', imageAlt: 'Artwork in a luxury residence living room' },
  { name: 'Apartment Entrances', image: '/images/works/project-04.png', imageAlt: 'Mural in an apartment entrance lobby' },
  { name: 'Clubhouses', image: '/images/works/project-06.png', imageAlt: 'Mural in a clubhouse lounge' },
  { name: 'Corporate Lobbies', image: '/images/applications/corporate-lobbies.png', imageAlt: 'Wall installation in a corporate lobby' },
  { name: 'Hotel Lobbies', image: '/images/works/project-01.png', imageAlt: 'Mural in a hotel lobby' },
  { name: 'Resorts', image: '/images/works/project-05.png', imageAlt: 'Sculpture in a resort courtyard' },
  { name: 'Landscape Areas', image: '/images/applications/landscape-areas.png', imageAlt: 'Sculpture in a landscaped garden' },
  { name: 'Water Bodies', image: '/images/applications/water-bodies.png', imageAlt: 'Sculpture rising from still water' },
  { name: 'Reception Spaces', image: '/images/applications/reception-spaces.png', imageAlt: 'Mural above a reception desk' },
  { name: 'Commercial Developments', image: '/images/works/project-03.png', imageAlt: 'Installation in a commercial development' },
  { name: 'Industrial Campuses', image: '/images/works/project-02.png', imageAlt: 'Sculpture on an industrial campus' },
  { name: 'Government / Public Spaces', image: '/images/applications/public-spaces.png', imageAlt: 'Monument sculpture in a public plaza' },
]

export const processSteps = [
  { number: '01', title: 'Understand', detail: 'Space · Purpose · Context' },
  { number: '02', title: 'Conceptualise', detail: 'Ideas · Visual Direction' },
  { number: '03', title: 'Develop', detail: 'Materials · Form · Finish' },
  { number: '04', title: 'Create', detail: 'Fabrication · Execution' },
  { number: '05', title: 'Install', detail: 'On-site Placement · Final Detailing' },
]

/**
 * Only verified references from the existing profile.
 * `logo` is null until official logo files are supplied — a typographic
 * wordmark is rendered in the meantime.
 */
export const clients: { name: string; logo: string | null }[] = [
  { name: 'World Trade Center', logo: null },
  { name: 'Biocon', logo: null },
  { name: 'Sun Pharma', logo: null },
  { name: 'GRT Jewellers', logo: null },
]

export const press = {
  publication: 'The Times of India',
  // TODO: add the real article image path, verified excerpt and article URL
  image: null as string | null,
  excerpt: null as string | null,
  articleUrl: null as string | null,
}

export const commissionOfferings = [
  ['Custom Sculptures', 'Murals', 'Art Installations'],
  ['Site-Specific Concepts', 'Custom Dimensions', 'Material & Finish Development'],
]

export const projectTypes = [
  'Custom Sculpture',
  'Mural',
  'Art Installation',
  'Site-Specific Concept',
  'Other',
]
