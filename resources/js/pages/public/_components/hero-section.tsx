import { FadeIn } from '@/components/fade-in';
import { HeroSectionProps } from '@/types';
import { ArrowRight } from 'lucide-react';

// --- Komponen Bintang untuk Hero ---
const generateStars = (count: number) => {
    const stars = [];
    let seed = 12345;
    const random = () => {
        const x = Math.sin(seed++) * 10000;

        return x - Math.floor(x);
    };

    for (let i = 0; i < count; i++) {
        const baseOpacity = random() * 0.7 + 0.25;
        stars.push({
            top: `${(random() * 65).toFixed(4)}%`,
            left: `${(random() * 100).toFixed(4)}%`,
            opacity: baseOpacity.toFixed(2),
            animationDelay: `${(random() * 6).toFixed(2)}s`,
            animationDuration: `${(random() * 3 + 2).toFixed(2)}s`,
        });
    }

    return stars;
};

const STARS = generateStars(70);

const StarField = () => {
    return (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden opacity-50">
            {STARS.map((star, i) => (
                <span
                    key={i}
                    className="absolute h-0.5 w-0.5 rounded-full bg-white"
                    style={{
                        top: star.top,
                        left: star.left,
                        ['--star-opacity-from' as string]: star.opacity,
                        ['--star-opacity-to' as string]: String(
                            Math.min(1, Number(star.opacity) + 0.45),
                        ),
                        animation: `twinkle ${star.animationDuration} ease-in-out ${star.animationDelay} infinite`,
                    }}
                />
            ))}
        </div>
    );
};

export function HeroSection({ hero }: HeroSectionProps) {
    const baseClasses = {
        wrap: 'max-w-7xl mx-auto px-6',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
        btnPrimary:
            'inline-flex items-center gap-2 px-7 py-4 rounded-sm font-medium text-xs tracking-widest uppercase transition-colors duration-300 font-mono bg-ember text-bg hover:bg-ember-deep',
        btnGhost:
            'inline-flex items-center gap-2 px-0 py-4 font-medium text-xs tracking-widest uppercase transition-colors duration-300 font-mono bg-transparent text-ink hover:text-gold group',
    };

    return (
        <header className="relative -mt-24 w-full overflow-hidden bg-bg-2 pt-44 pb-32 text-left md:-mt-20">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center brightness-75 contrast-125 saturate-50"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-${hero?.imageId}?auto=format&fit=crop&w=1600&q=70')`,
                }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg-2/40 to-bg to-90%" />

            <StarField />

            <div
                className={`${baseClasses.wrap} relative z-30 grid grid-cols-1 items-end gap-16 md:grid-cols-12`}
            >
                <div className="md:col-span-8">
                    <FadeIn delay={0} duration="slow">
                        <div className={baseClasses.eyebrow}>
                            {hero?.eyebrow}
                        </div>
                    </FadeIn>
                    <FadeIn delay={100} duration="slow">
                        <h1
                            className="max-w-sm font-serif text-4xl leading-none font-medium tracking-tight text-ink md:max-w-lg md:text-6xl"
                            dangerouslySetInnerHTML={{ __html: hero?.title }}
                        />
                    </FadeIn>
                    <FadeIn delay={200} duration="slow">
                        <p className="mt-6 max-w-md text-sm leading-relaxed font-light text-ink-soft md:text-base">
                            {hero?.description}
                        </p>
                    </FadeIn>
                    <FadeIn delay={300} duration="slow">
                        <div className="mt-12 flex flex-wrap items-center gap-8">
                            <a
                                href="#packages"
                                className={baseClasses.btnPrimary}
                            >
                                Lihat Semua Paket
                            </a>
                            <a href="#booking" className={baseClasses.btnGhost}>
                                Booking via WhatsApp <ArrowRight size={16} />
                            </a>
                        </div>
                    </FadeIn>
                </div>
                <FadeIn
                    delay={400}
                    duration="slow"
                    className="relative border-t border-gold bg-panel/60 p-6 backdrop-blur-xl md:col-span-4"
                >
                    <div className="font-mono text-xs tracking-widest text-ink-faint uppercase">
                        Mulai dari
                    </div>
                    <div className="mt-2 font-serif text-3xl font-medium text-ember">
                        {hero?.price}
                        <span className="ml-1 font-sans text-xs font-normal text-ink-soft">
                            /malam
                        </span>
                    </div>
                    <div className="mt-5 flex justify-between border-t border-line pt-5">
                        <div className="text-[10px] tracking-wider text-ink-faint uppercase">
                            Kapasitas
                            <strong className="mt-0.5 block font-serif text-base font-medium tracking-normal text-ink capitalize">
                                {hero?.stats?.spots}
                            </strong>
                        </div>
                        <div className="text-[10px] tracking-wider text-ink-faint uppercase">
                            Kabin &amp; Glamping
                            <strong className="mt-0.5 block font-serif text-base font-medium tracking-normal text-ink capitalize">
                                {hero?.stats?.units}
                            </strong>
                        </div>
                        <div className="text-[10px] tracking-wider text-ink-faint uppercase">
                            Rating Tamu
                            <strong className="mt-0.5 block font-serif text-base font-medium tracking-normal text-ink capitalize">
                                {hero?.stats?.rating}
                            </strong>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </header>
    );
}
