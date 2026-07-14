import { FadeIn } from '@/components/fade-in';
import { LocationSectionProps } from '@/types';

export function LocationSection({ location }: LocationSectionProps) {
    const baseClasses = {
        wrap: 'max-w-7xl mx-auto px-6',
        section: 'py-24 md:py-32 relative bg-bg border-b border-line',
        sectionTitle:
            'font-serif font-medium tracking-tight text-3xl md:text-4xl leading-tight text-ink',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
    };

    return (
        <section id="location" className={baseClasses.section}>
            <div className={baseClasses.wrap}>
                <FadeIn className="mb-14 max-w-2xl">
                    <div className={baseClasses.eyebrow}>Rute Perjalanan</div>
                    <h2 className={baseClasses.sectionTitle}>
                        Panduan Akses Menuju Terrava Camp
                    </h2>
                </FadeIn>
                <div className="mt-10 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                    {/* Real Google Maps Embed with Dark Theme Filters */}
                    <FadeIn
                        delay={100}
                        className="relative min-h-[18rem] overflow-hidden rounded-xl border border-line"
                    >
                        <iframe
                            src={location.mapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 h-full w-full"
                        />
                    </FadeIn>

                    {/* Information List */}
                    <div className="flex flex-col justify-center gap-6">
                        {(location.items || []).map((row, i) => (
                            <FadeIn key={i} delay={100 + i * 100}>
                                <div className="flex gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-line hover:bg-panel/30">
                                    <div className="w-6 shrink-0 text-lg font-semibold text-ember">
                                        →
                                    </div>
                                    <div>
                                        <strong className="mb-1 block text-sm font-semibold text-ink">
                                            {row.label}
                                        </strong>
                                        <span className="text-sm leading-relaxed font-light text-ink-soft">
                                            {row.value}
                                        </span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
