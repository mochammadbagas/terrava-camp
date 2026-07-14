import { FadeIn } from '@/components/fade-in';
import { GallerySectionProps } from '@/types';
import { useEffect, useState } from 'react';

export function GallerySection({ gallery }: GallerySectionProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedLabel, setSelectedLabel] = useState<string>('');

    // --- Close Lightbox on Escape Key ---
    useEffect(() => {
        if (!selectedImage) {
            return;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    // --- Lock body scroll when lightbox is open ---
    useEffect(() => {
        if (selectedImage) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [selectedImage]);

    const baseClasses = {
        wrap: 'max-w-7xl mx-auto px-6',
        sectionTitle:
            'font-serif font-medium tracking-tight text-3xl md:text-4xl leading-tight text-ink',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
    };

    const openLightbox = (imgSrc: string, label: string) => {
        if (window.innerWidth >= 768) {
            setSelectedImage(imgSrc);
            setSelectedLabel(label);
        }
    };

    return (
        <section
            id="gallery"
            className="relative border-y border-line bg-cover bg-fixed bg-center py-24 md:py-32"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(12,18,14,0.95), rgba(12,18,14,0.88) 40%, rgba(12,18,14,0.97)), url('https://images.unsplash.com/photo-${gallery.backgroundImageId}?auto=format&fit=crop&w=1800&q=60')`,
            }}
        >
            <div className={baseClasses.wrap}>
                <FadeIn className="mb-14 max-w-2xl">
                    <div className={baseClasses.eyebrow}>Koleksi Momen</div>
                    <h2 className={baseClasses.sectionTitle}>
                        Intip Keindahan Alam di Terrava Camp
                    </h2>
                </FadeIn>
                <div className="mt-10 flex flex-col gap-4 md:grid md:auto-rows-[11rem] md:grid-cols-4 md:gap-4">
                    {(gallery.items || []).map((g, i) => (
                        <FadeIn
                            key={i}
                            delay={(i % 4) * 100}
                            className={g.colSpan}
                        >
                            <div
                                onClick={() => openLightbox(g.imageId, g.label)}
                                className="group relative aspect-[16/10] h-full overflow-hidden rounded-sm border border-line-strong shadow-2xl shadow-black/50 transition-all duration-300 hover:border-gold/50 md:aspect-auto md:cursor-pointer"
                            >
                                <img
                                    src={`https://images.unsplash.com/photo-${g.imageId}?auto=format&fit=crop&w=900&q=70`}
                                    alt={g.label}
                                    className="absolute inset-0 h-full w-full object-cover brightness-75 contrast-125 saturate-[0.6] transition-transform duration-700 group-hover:brightness-90 group-hover:contrast-100 group-hover:saturate-100 hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent" />
                                {/* Text label */}
                                <span className="pointer-events-none absolute bottom-4 left-4 z-20 font-mono text-[10px] tracking-widest text-ink uppercase md:text-xs">
                                    {g.label}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal (Desktop Only Feature) */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex animate-[fadeIn_0.2s_ease-in-out] cursor-zoom-out flex-col items-center justify-center bg-bg/95 px-6 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 cursor-pointer rounded-full border border-transparent p-2 text-ink transition-colors duration-200 hover:border-line-strong hover:bg-panel-2/50 hover:text-gold focus:outline-none"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Tutup Galeri"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative flex max-h-[80vh] max-w-5xl cursor-default items-center justify-center overflow-hidden rounded-xl border border-line-strong shadow-2xl shadow-black/80"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={`https://images.unsplash.com/photo-${selectedImage}?auto=format&fit=crop&w=1200&q=90`}
                            alt={selectedLabel}
                            className="max-h-[80vh] max-w-full rounded-xl object-contain"
                        />
                    </div>

                    {/* Image Label */}
                    <div className="mt-5 font-serif text-lg font-medium tracking-wide text-ink">
                        {selectedLabel}
                    </div>
                </div>
            )}
        </section>
    );
}
