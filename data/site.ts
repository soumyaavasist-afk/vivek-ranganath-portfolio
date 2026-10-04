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
  about: '/images/about-artwork-final.png',
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
  conceptNote: string
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
    conceptNote: 'A sweeping mixed-media mural gives the hotel lobby a strong focal point, carrying warm ochre, deep blue and stone tones across the arrival space.',
    customisedForSite: true,
    image: '/images/first-work.png',
    imageAlt: 'Wide view of a contemporary hotel lobby with a large mural and seating area',
    placeholder: true,
  },
  {
    number: '02',
    name: 'Project Title — To Be Confirmed',
    medium: 'Sculpture — Bronze & Steel',
    size: '00 ft (H)',
    location: 'Location to be confirmed',
    application: 'Corporate Campus · Water Body',
    conceptNote: 'A sculptural bronze-and-steel form is imagined beside still water, where its geometric silhouette meets the architecture and landscape.',
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
    conceptNote: 'A suspended brass-and-terracotta installation introduces movement overhead, bringing material warmth and rhythm to the lobby.',
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
    conceptNote: 'A textured relief mural adds depth to the entrance, creating a tactile first impression that sits naturally within the architecture.',
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
    conceptNote: 'An outdoor sculpture is positioned within a garden setting, using material and scale to create a quiet landmark.',
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
    conceptNote: 'Layered acrylic forms bring color and character to the clubhouse lounge, complementing its curved walls and social atmosphere.',
    image: '/images/works/project-06.png',
    imageAlt: 'Concept image: vibrant figurative mural across the curved wall of a clubhouse lounge',
    placeholder: true,
  },
]

export type Application = {
  name: string
  image: string
  imageAlt: string
  href?: string
}

export const applications: Application[] = [
  { name: 'Luxury Residences', image: '/images/applications/luxury-residences.png', imageAlt: 'Artwork in a luxury residence living room', href: '/applications/luxury-residences' },
  { name: 'Apartment Entrances', image: '/images/apartments/Luxurious Lobby with Abstract Gold Art.png', imageAlt: 'Abstract artwork integrated into a luxury apartment entrance lobby', href: '/applications/apartment-entrances' },
  { name: 'Clubhouses', image: '/images/clubhouses/hero-mural-lounge.jpg', imageAlt: 'Mural-led clubhouse lounge', href: '/applications/clubhouses' },
  { name: 'Corporate Lobbies', image: '/images/applications/corporate-lobbies.png', imageAlt: 'Wall installation in a corporate lobby', href: '/applications/corporate-lobbies' },
  { name: 'Hotel Lobbies', image: '/images/hotel-lobbies/hotel-hero.jpg', imageAlt: 'Art-led reception in a contemporary hotel lobby', href: '/applications/hotel-lobbies' },
  { name: 'Resorts', image: '/images/resorts/resort-hero.jpg', imageAlt: 'Reflecting pool and sculptural arrival arch at a tropical resort', href: '/applications/resorts' },
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
export const clients: { name: string; logo: string; width: number; height: number; logoClassName: string }[] = [
  {
    name: 'World Trade Center',
    logo: '/images/clients/wtc-bengaluru-transparent.png',
    width: 612,
    height: 126,
    logoClassName: 'h-10 max-w-[230px] md:h-12',
  },
  {
    name: 'Biocon',
    logo: '/images/clients/biocon.png',
    width: 240,
    height: 92,
    logoClassName: 'h-12 max-w-[190px] md:h-14',
  },
  {
    name: 'Sun Pharma',
    logo: '/images/clients/sun-pharma.svg',
    width: 312,
    height: 419,
    logoClassName: 'h-20 max-w-[5.5rem]',
  },
  {
    name: 'GRT Jewellers',
    logo: '/images/clients/grt-jewellers.png',
    width: 339,
    height: 220,
    logoClassName: 'h-14 max-w-[8rem] mix-blend-multiply md:h-16',
  },
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
