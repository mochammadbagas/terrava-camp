import { Button } from '@/components/button';
import { NAV_LINKS } from '@/config/navigation';
import { Link } from '@inertiajs/react';
import { Instagram, Phone } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
    menuRef: React.RefObject<HTMLDivElement | null>;
    onClose: () => void;
}

const LINK_DESCRIPTIONS: Record<string, string> = {
    Paket: 'Pilihan kabin, glamping, & camping ground',
    Galeri: 'Momen & keindahan alam lereng Arjuno',
    Fasilitas: 'Resto, alat sewa, & kenyamanan lengkap',
    Lokasi: 'Akses petualangan & petunjuk arah',
    FAQ: 'Informasi penting & pertanyaan umum',
};

export function MobileMenu({ isOpen, menuRef, onClose }: MobileMenuProps) {
    return (
        <div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className={`fixed inset-0 z-40 flex flex-col overflow-hidden bg-bg-2/95 backdrop-blur-2xl transition-all duration-500 ease-in-out lg:hidden ${
                isOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'pointer-events-none invisible -translate-y-full opacity-0'
            }`}
        >
            {/* Background elements */}

            <nav
                aria-label="Mobile menu"
                className="relative z-10 flex flex-1 scrollbar-none flex-col overflow-y-auto px-6 pt-20 pb-4"
            >
                <ul className="my-auto flex flex-col gap-4">
                    {NAV_LINKS.map((item, i) => (
                        <li
                            key={item.title}
                            className={`border-b border-line pb-4 transition-all duration-500 ${
                                isOpen
                                    ? 'translate-y-0 opacity-100'
                                    : '-translate-y-4 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isOpen
                                    ? `${i * 60 + 100}ms`
                                    : '0ms',
                            }}
                        >
                            <Link
                                href={item.href}
                                onClick={onClose}
                                className="group flex items-center justify-between"
                            >
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-baseline gap-2.5">
                                        <span className="font-mono text-[9px] tracking-widest text-gold/80">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="font-serif text-2xl font-light tracking-wide text-ink-soft transition-colors duration-300 group-hover:text-ink">
                                            {item.title}
                                        </span>
                                    </div>
                                    <span className="pl-5 text-[10px] font-light text-ink-faint transition-colors duration-300 group-hover:text-ink-soft">
                                        {LINK_DESCRIPTIONS[item.title] || ''}
                                    </span>
                                </div>
                                <svg
                                    className="h-4 w-4 -translate-x-2 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-gold group-hover:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div
                className={`relative z-10 mt-auto border-t border-line bg-bg/40 px-6 pt-5 pb-6 backdrop-blur-md transition-all duration-500 ${
                    isOpen
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? '420ms' : '0ms' }}
            >
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                        <span className="font-mono text-[9px] tracking-[0.2em] text-ink-faint uppercase">
                            Hubungi Kami
                        </span>
                        <a
                            href="https://wa.me/6285156109600"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-light text-ink-soft transition-colors hover:text-gold"
                        >
                            <Phone className="h-3.5 w-3.5 text-moss" />
                            <span>+62 851-5610-9600</span>
                        </a>
                        <a
                            href="https://instagram.com/terravacamp.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-light text-ink-soft transition-colors hover:text-gold"
                        >
                            <Instagram className="h-3.5 w-3.5 text-gold" />
                            <span>@terravacamp.id</span>
                        </a>
                    </div>

                    <div className="flex flex-col items-end justify-between gap-4">
                        <div className="flex flex-col items-end gap-0.5 text-right">
                            <span className="font-mono text-[9px] tracking-[0.2em] text-gold uppercase">
                                Ready for adventure?
                            </span>
                            <span className="text-[10px] font-light text-ink-soft">
                                Lereng Gunung Arjuno
                            </span>
                        </div>
                        <Button
                            variant="default"
                            size="sm"
                            className="w-full cursor-pointer rounded-full border-none bg-gold px-6 font-mono text-[10px] font-semibold tracking-widest text-bg uppercase shadow-[0_4px_20px_rgba(216,182,115,0.15)] transition-colors duration-300 hover:bg-ember"
                            onClick={onClose}
                            asChild
                        >
                            <a href="#booking">Booking Now</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
