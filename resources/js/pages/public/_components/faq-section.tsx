import { FadeIn } from '@/components/fade-in';
import { FAQSectionProps } from '@/types';
import { useState } from 'react';

function FAQItem({
    question,
    answer,
    isOpen,
    onToggle,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-line">
            <button
                className="group flex w-full cursor-pointer items-center justify-between gap-5 py-7 text-left font-serif text-lg font-medium text-ink focus:outline-none"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="transition-colors duration-300 group-hover:text-gold">
                    {question}
                </span>

                {/* +/− icon */}
                <div className="relative h-4 w-4 shrink-0" aria-hidden="true">
                    {/* Horizontal bar — always visible */}
                    <span className="absolute top-1/2 left-0 block h-px w-4 -translate-y-px bg-gold" />
                    {/* Vertical bar — rotates 90° to merge with horizontal bar → becomes − */}
                    <span
                        className="absolute top-0 left-1/2 block h-4 w-px -translate-x-px bg-gold transition-transform duration-300 ease-in-out"
                        style={{
                            transformOrigin: 'center',
                            transform: isOpen
                                ? 'rotate(90deg)'
                                : 'rotate(0deg)',
                        }}
                    />
                </div>
            </button>

            {/*
                CSS grid-template-rows trick: animates from 0fr → 1fr smoothly
                without needing JS height measurement, works on first render too.
            */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition:
                        'grid-template-rows 380ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <div className="overflow-hidden">
                    <p
                        className="max-w-xl pb-7 text-sm leading-relaxed font-light text-ink-soft"
                        style={{
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen
                                ? 'translateY(0)'
                                : 'translateY(-6px)',
                            transition:
                                'opacity 300ms ease, transform 300ms ease',
                            transitionDelay: isOpen ? '80ms' : '0ms',
                        }}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function FAQSection({ faqs }: FAQSectionProps) {
    const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

    const toggleFaq = (index: number) => {
        setOpenFaqs((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index],
        );
    };

    const baseClasses = {
        wrap: 'max-w-3xl mx-auto px-6',
        section: 'py-24 md:py-32 relative bg-panel',
        sectionTitle:
            'font-serif font-medium tracking-tight text-3xl md:text-4xl leading-tight text-ink',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
    };

    return (
        <section id="faq" className={baseClasses.section}>
            <div className={baseClasses.wrap}>
                <FadeIn className="mb-14 max-w-2xl">
                    <div className={baseClasses.eyebrow}>Tanya Jawab Umum</div>
                    <h2 className={baseClasses.sectionTitle}>
                        Temukan Jawaban Atas Pertanyaan Anda
                    </h2>
                </FadeIn>
                <FadeIn delay={100} className="mt-8">
                    {(faqs || []).map((faq, i) => (
                        <FAQItem
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaqs.includes(i)}
                            onToggle={() => toggleFaq(i)}
                        />
                    ))}
                </FadeIn>
            </div>
        </section>
    );
}
