import { FadeIn } from '@/components/fade-in';
import { FacilitiesSectionProps } from '@/types';

export function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
    const baseClasses = {
        wrap: 'max-w-7xl mx-auto px-6',
        section: 'py-24 md:py-32 relative bg-panel border-b border-line',
        sectionTitle:
            'font-serif font-medium tracking-tight text-3xl md:text-4xl leading-tight text-ink',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
    };

    return (
        <section id="facilities" className={baseClasses.section}>
            <div className={baseClasses.wrap}>
                <div className="mb-14 max-w-2xl">
                    <FadeIn delay={0} className={baseClasses.eyebrow}>
                        Kelengkapan Kawasan
                    </FadeIn>
                    <FadeIn delay={100} className={baseClasses.sectionTitle}>
                        Fasilitas Lengkap Demi Kenyamanan Anda
                    </FadeIn>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-0 border-t border-l border-line md:grid-cols-4">
                    {(facilities || []).map((f, i) => (
                        <FadeIn key={i} delay={(i % 4) * 100}>
                            <div className="flex min-h-44 cursor-default flex-col gap-4 border-r border-b border-line p-6 transition-colors duration-300 hover:bg-panel-2/30 md:min-h-32">
                                <span className="font-serif text-sm text-gold italic">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="text-sm font-light text-ink">
                                    {f}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
