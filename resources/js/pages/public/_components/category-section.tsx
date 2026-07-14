import { FadeIn } from '@/components/fade-in';
import { CategorySectionProps } from '@/types';

export function CategorySection({
    categories,
    onSelectTab,
}: CategorySectionProps) {
    const baseClasses = {
        wrap: 'max-w-7xl mx-auto px-6',
        section: 'py-24 md:py-32 relative bg-bg',
        sectionTitle:
            'font-serif font-medium tracking-tight text-3xl md:text-4xl leading-tight text-ink',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
    };

    // Helper to get SVG icons by category index
    const renderIcon = (index: number) => {
        const svgClasses = 'w-5 h-5';

        switch (index) {
            case 0:
                return (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={svgClasses}
                    >
                        <path d="M12 3L2 20h20L12 3z" />
                        <path d="M9.5 20L12 11l2.5 9" />
                    </svg>
                );
            case 1:
                return (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={svgClasses}
                    >
                        <path d="M3 20V10l9-6 9 6v10" />
                        <path d="M9 20v-6h6v6" />
                    </svg>
                );
            case 2:
                return (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={svgClasses}
                    >
                        <rect x="6" y="8" width="12" height="13" rx="2.5" />
                        <path d="M9 8V6a3 3 0 016 0v2" />
                        <path d="M9 13h6" />
                    </svg>
                );
            case 3:
            default:
                return (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={svgClasses}
                    >
                        <path d="M4 12h16a8 8 0 01-16 0z" />
                        <path d="M8 12V6M12 12V4M16 12V6" />
                    </svg>
                );
        }
    };

    // Helper for category CTA links
    const getCtaText = (id: string) => {
        switch (id) {
            case 'campground':
                return 'Lihat Harga →';
            case 'accommodation':
                return 'Lihat Tipe Unit →';
            case 'equipment':
                return 'Lihat Daftar Peralatan →';
            case 'restaurant':
                return 'Lihat Menu →';
            default:
                return 'Selengkapnya →';
        }
    };

    // Responsive border layout classes mapping for 4 columns
    const cardBorderClasses = [
        'py-10 pr-4 md:pr-8 relative border-r border-line',
        'py-10 pl-4 md:pl-8 pr-0 md:pr-8 relative border-r-0 md:border-r border-line',
        'py-10 pr-4 md:pl-8 md:pr-8 relative border-r border-line',
        'py-10 pl-4 md:pl-8 pr-0 relative',
    ];

    return (
        <section id="kategori" className={baseClasses.section}>
            <div className={baseClasses.wrap}>
                <FadeIn className="mb-14 max-w-2xl">
                    <div className={baseClasses.eyebrow}>
                        Ragam Pilihan Berpetualang
                    </div>
                    <h2 className={baseClasses.sectionTitle}>
                        Pilih Cara Terbaik Anda Menikmati Keindahan Alam
                    </h2>
                </FadeIn>
                <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
                    {(categories || []).map((cat, i) => (
                        <FadeIn key={cat.id} delay={i * 100} className="h-full">
                            <div
                                onClick={() => onSelectTab(cat.id)}
                                className={`${cardBorderClasses[i] || 'relative py-10'} group h-full cursor-pointer transition-colors duration-300 hover:bg-panel-2/10`}
                            >
                                <div className="flex h-full flex-col gap-5 transition-transform duration-300 group-hover:-translate-y-1">
                                    <div className="font-serif text-sm tracking-wide text-ink-faint">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-moss transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                                        {renderIcon(i)}
                                    </div>
                                    <h3 className="font-serif text-xl font-medium text-ink">
                                        {cat.title}
                                    </h3>
                                    <p className="flex-1 text-sm leading-relaxed font-light text-ink-soft">
                                        {cat.description}
                                    </p>
                                    <span className="font-mono text-xs tracking-widest text-gold uppercase transition-colors duration-300 group-hover:text-ember">
                                        {getCtaText(cat.id)}
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
