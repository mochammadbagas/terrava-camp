import { FadeIn } from '@/components/fade-in';
import { TestimonialsSectionProps } from '@/types';

export function TestimonialsSection({
    testimonials,
}: TestimonialsSectionProps) {
    const baseClasses = {
        wrap: 'max-w-7xl mx-auto px-6',
        section: 'py-24 md:py-32 relative bg-bg border-b border-line',
        sectionTitle:
            'font-serif font-medium tracking-tight text-3xl md:text-4xl leading-tight text-ink',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
    };

    return (
        <section id="testimoni" className={baseClasses.section}>
            <div className={baseClasses.wrap}>
                <FadeIn className="mb-14 max-w-2xl">
                    <div className={baseClasses.eyebrow}>Cerita Pengunjung</div>
                    <h2 className={baseClasses.sectionTitle}>
                        Pengalaman Autentik di Tengah Rimba
                    </h2>
                </FadeIn>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {(testimonials || []).map((item, i) => (
                        <FadeIn key={i} delay={i * 100} className="h-full">
                            <div className="flex h-full min-h-[280px] flex-col rounded-2xl border border-line-strong bg-panel/30 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/50">
                                {/* Stars */}
                                <div className="mb-5 flex gap-1">
                                    {Array.from({ length: 5 }).map((_, idx) =>
                                        idx < item.rating ? (
                                            <svg
                                                key={idx}
                                                className="h-4 w-4 fill-current text-gold"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                key={idx}
                                                className="h-4 w-4 text-gold"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                />
                                            </svg>
                                        ),
                                    )}
                                </div>

                                {/* Quote */}
                                <p className="flex-1 text-sm leading-relaxed font-light text-ink-soft italic">
                                    &ldquo;{item.quote}&rdquo;
                                </p>

                                {/* User details divider */}
                                <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                                    <img
                                        src={`https://images.unsplash.com/photo-${item.avatar}?auto=format&fit=crop&w=100&h=100&q=80`}
                                        alt={item.name}
                                        className="h-10 w-10 rounded-full border border-line object-cover"
                                        loading="lazy"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-serif text-sm font-semibold text-ink">
                                            {item.name}
                                        </span>
                                        <span className="font-mono text-[9px] tracking-wider text-ink-faint uppercase">
                                            {item.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
