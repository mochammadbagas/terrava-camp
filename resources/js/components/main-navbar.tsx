import { Button } from '@/components/button';
import { NAV_LINKS } from '@/config/navigation';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    isMobileMenuOpen: boolean;
    isScrolled: boolean;
    onToggleMobileMenu: () => void;
}

export function Navbar({
    isMobileMenuOpen,
    isScrolled,
    onToggleMobileMenu,
}: NavbarProps) {
    return (
        <nav
            aria-label="Main navigation"
            className={`sticky top-0 z-50 items-center justify-between py-4 transition-all duration-300 ${
                isMobileMenuOpen
                    ? 'bg-bg shadow-[0_1px_0_0_var(--color-line)]'
                    : isScrolled
                      ? 'bg-bg/80 backdrop-blur-xl'
                      : ''
            }`}
        >
            <div className="mx-auto flex max-w-7xl px-6">
                <div className="flex flex-1 items-center">
                    <Link href="/" aria-label="Terrava Camp — main page">
                        <img
                            src="/terrava.svg"
                            alt="Terrava Camp"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="hidden flex-1 justify-center lg:flex">
                    <div className="flex items-center gap-8 font-mono text-xs tracking-widest text-ink-soft uppercase">
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`transition hover:text-ink ${item.href === '/' ? 'text-ink' : ''}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end gap-5">
                    <Button
                        variant="default"
                        size="sm"
                        className="hidden cursor-pointer rounded-full border-none bg-gold px-6 font-mono text-[10px] font-semibold tracking-widest text-bg uppercase transition-colors duration-300 hover:bg-ember lg:inline-flex"
                        asChild
                    >
                        <a href="#booking">Booking</a>
                    </Button>

                    <button
                        type="button"
                        className="inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-ink transition-colors focus-visible:ring-2 focus-visible:ring-ink/50 focus-visible:outline-none lg:hidden"
                        aria-label={
                            isMobileMenuOpen ? 'Close menu' : 'Open menu'
                        }
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={onToggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
