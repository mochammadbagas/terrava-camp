import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

import { Footer } from '@/components/main-footer';
import { Navbar } from '@/components/main-navbar';
import { MobileMenu } from '@/components/mobile-menu';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import { PublicMainLayoutProps } from '@/types';

export default function PublicMainLayout({ children }: PublicMainLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuRef = useFocusTrap(isMobileMenuOpen);

    // Tutup menu mobile saat navigasi halaman (penting untuk persistent layout)
    useEffect(() => {
        return router.on('navigate', () => {
            setIsMobileMenuOpen(false);
        });
    }, []);

    // Scroll detection — navbar berubah style saat user scroll ke bawah
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        handleScroll(); // set initial state
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll lock — layout hanya peduli state menu-nya sendiri.
    // State isVideoOpen milik halaman, dikunci oleh halaman itu sendiri.
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMobileMenuOpen]);

    // Escape key — hanya tutup menu, urusan modal video diserahkan ke halaman
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleEsc);

        return () => document.removeEventListener('keydown', handleEsc);
    }, [isMobileMenuOpen]);

    return (
        <>
            <div className="relative min-h-dvh overflow-x-clip bg-bg font-sans text-ink selection:bg-gold selection:text-bg">
                <Navbar
                    isMobileMenuOpen={isMobileMenuOpen}
                    isScrolled={isScrolled}
                    onToggleMobileMenu={() =>
                        setIsMobileMenuOpen((prev) => !prev)
                    }
                />

                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    menuRef={menuRef}
                    onClose={() => setIsMobileMenuOpen(false)}
                />

                <main id="main-content">{children}</main>

                <Footer />
            </div>
        </>
    );
}
