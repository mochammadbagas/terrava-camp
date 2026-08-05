export interface NavLink {
    title: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { title: 'Paket', href: '#packages' },
    { title: 'Galeri', href: '#gallery' },
    { title: 'Fasilitas', href: '#facilities' },
    { title: 'Lokasi', href: '#location' },
    { title: 'FAQ', href: '#faq' },
] as const;
