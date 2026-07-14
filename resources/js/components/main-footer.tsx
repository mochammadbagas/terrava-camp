import { Link } from '@inertiajs/react';

export function Footer() {
    return (
        <footer className="relative z-10 w-full border-t border-line bg-bg-2 pt-20 pb-8 text-sm">
            <div className="absolute top-0 right-0 left-0 h-px bg-gold" />
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                    <div className="col-span-2 md:col-span-2">
                        <div className="mb-3 font-serif text-xl font-semibold text-ink">
                            TERRAVA CAMP
                        </div>
                        <p className="max-w-sm text-sm leading-loose font-light text-ink-soft">
                            Camping ground pribadi, kabin &amp; glamping, sewa
                            alat lengkap, dan resto lokal di lereng Gunung
                            Arjuno, Pasuruan.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h5 className="mb-5 font-mono text-xs tracking-widest text-ink-faint uppercase">
                            Navigasi
                        </h5>
                        <Link
                            href="#packages"
                            className="mb-2 block text-sm text-ink-soft transition-colors hover:text-gold"
                        >
                            Paket
                        </Link>
                        <Link
                            href="#gallery"
                            className="mb-2 block text-sm text-ink-soft transition-colors hover:text-gold"
                        >
                            Galeri
                        </Link>
                        <Link
                            href="#facilities"
                            className="mb-2 block text-sm text-ink-soft transition-colors hover:text-gold"
                        >
                            Fasilitas
                        </Link>
                        <Link
                            href="#faq"
                            className="block text-sm text-ink-soft transition-colors hover:text-gold"
                        >
                            FAQ
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <h5 className="mb-5 font-mono text-xs tracking-widest text-ink-faint uppercase">
                            Kontak
                        </h5>
                        <a
                            href="https://wa.me/6285156109600"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-2 block text-sm text-ink-soft transition-colors hover:text-gold"
                        >
                            +62 851-5610-9600
                        </a>
                        <a
                            href="mailto:halo@terravacamp.id"
                            className="mb-2 block text-sm text-ink-soft transition-colors hover:text-gold"
                        >
                            halo@terravacamp.id
                        </a>
                        <a
                            href="https://instagram.com/terravacamp.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-ink-soft transition-colors hover:text-gold"
                        >
                            @terravacamp.id
                        </a>
                    </div>
                    <div className="col-span-1">
                        <h5 className="mb-5 font-mono text-xs tracking-widest text-ink-faint uppercase">
                            Jam Operasional
                        </h5>
                        <p className="mb-2 block text-sm text-ink-soft">
                            Check-in 13.00
                        </p>
                        <p className="mb-2 block text-sm text-ink-soft">
                            Check-out 12.00
                        </p>
                        <p className="block text-sm text-ink-soft">
                            Resto 06.00–22.00
                        </p>
                    </div>
                </div>
                <div className="mt-16 flex flex-col justify-between gap-4 border-t border-line pt-6 font-mono text-xs tracking-wide text-ink-faint sm:flex-row">
                    <span>
                        © {new Date().getFullYear()} TERRAVA CAMP. All rights
                        reserved.
                    </span>
                    <span>
                        Crafted by{' '}
                        <a
                            href="https://github.com/mochammadbagas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline transition-colors hover:text-ink-soft focus-visible:ring-2 focus-visible:ring-ink/50 focus-visible:outline-none"
                        >
                            Adipati
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
