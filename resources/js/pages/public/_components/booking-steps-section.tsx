import { FadeIn } from '@/components/fade-in';
import { BookingStepsSectionProps } from '@/types';

export function BookingStepsSection({
    bookingSteps,
    contact,
}: BookingStepsSectionProps) {
    const baseClasses = {
        wrap: 'max-w-7xl mx-auto px-6',
        section: 'py-24 md:py-32 relative bg-panel border-y border-line',
        sectionTitle:
            'font-serif font-medium tracking-tight text-3xl md:text-4xl leading-tight text-ink',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
    };

    return (
        <section id="booking" className={baseClasses.section}>
            <div className={baseClasses.wrap}>
                <FadeIn className="mb-14 max-w-2xl">
                    <div className={baseClasses.eyebrow}>
                        Prosedur Reservasi
                    </div>
                    <h2 className={baseClasses.sectionTitle}>
                        4 Langkah Mudah Mengamankan Slot Kemah Anda
                    </h2>
                </FadeIn>
                <div className="mt-4 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {(bookingSteps || []).map((step, i) => (
                        <FadeIn key={i} delay={i * 100}>
                            <div className="relative border-t border-line-strong pt-5">
                                <div className="font-serif text-base leading-none text-gold italic">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <h4 className="mt-4 font-serif text-base font-medium text-ink">
                                    {step.title}
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed font-light text-ink-soft">
                                    {step.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                <FadeIn delay={400} className="mt-12 flex">
                    <a
                        href={contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-mono text-xs font-medium tracking-widest text-bg uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember hover:shadow-xl"
                    >
                        Booking via WhatsApp
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
