import { FadeIn } from '@/components/fade-in';
import { PackagesSectionProps } from '@/types';

export function PackagesSection({
    packages,
    activeTab,
    setActiveTab,
}: PackagesSectionProps) {
    const baseClasses = {
        wrap: 'max-w-7xl mx-auto px-6',
        section: 'py-24 md:py-32 relative bg-panel border-y border-line',
        sectionTitle:
            'font-serif font-medium tracking-tight text-3xl md:text-4xl leading-tight text-ink',
        eyebrow:
            "font-mono text-xs tracking-widest uppercase text-gold flex items-center gap-3 mb-5 font-medium before:content-[''] before:w-7 before:h-px before:bg-gold before:inline-block",
    };

    return (
        <section id="packages" className={baseClasses.section}>
            <div className={baseClasses.wrap}>
                <FadeIn className="mb-14 max-w-2xl">
                    <div className={baseClasses.eyebrow}>
                        Tarif Sewa &amp; Paket
                    </div>
                    <h2 className={baseClasses.sectionTitle}>
                        Pilih Paket Sesuai Rencana Liburan Anda
                    </h2>
                </FadeIn>

                {/* Segmented Control Tabs Navigation */}
                <div className="mt-10 flex w-full max-w-md gap-1 rounded-full border border-line-strong bg-bg-2 p-1.5 md:w-max md:max-w-none">
                    {[
                        { id: 'campground', label: 'Camping' },
                        { id: 'accommodation', label: 'Kabin' },
                        { id: 'equipment', label: 'Alat' },
                        { id: 'restaurant', label: 'Resto' },
                    ].map((tab) => {
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 cursor-pointer rounded-full py-2.5 font-mono text-[10px] tracking-wider whitespace-nowrap uppercase transition-all duration-300 outline-none md:px-6 md:text-xs ${
                                    isActive
                                        ? 'border border-line-strong bg-panel-2 font-semibold text-gold shadow-lg shadow-black/40'
                                        : 'border border-transparent text-ink-soft hover:text-ink'
                                }`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* TAB: campground */}
                {activeTab === 'campground' && (
                    <div className="mt-8 grid animate-[fadeIn_0.3s_ease-in-out] grid-cols-1 gap-5 md:grid-cols-3">
                        {(packages?.campground || []).map((item, i) => (
                            <FadeIn
                                key={item.title}
                                delay={i * 300}
                                className="h-full"
                            >
                                <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-line bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/60">
                                    {/* Image Container */}
                                    <div className="relative -mx-5 -mt-5 mb-2 aspect-[16/10] overflow-hidden rounded-t-xl">
                                        <div
                                            className="h-full w-full bg-cover bg-center brightness-75 contrast-110 saturate-75 transition-transform duration-500 group-hover:scale-105"
                                            style={{
                                                backgroundImage: `url('https://images.unsplash.com/photo-${item.imageId}?auto=format&fit=crop&w=600&q=70')`,
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />

                                        {/* Floating Tag */}
                                        <span className="absolute top-4 left-4 rounded-full border border-line-strong bg-bg/70 px-3 py-1 font-mono text-[9px] tracking-widest text-gold uppercase backdrop-blur-md">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col gap-1.5">
                                        <h4 className="font-serif text-xl leading-tight font-medium text-ink transition-colors duration-200 group-hover:text-gold">
                                            {item.title}
                                        </h4>
                                        <div className="mt-1 flex items-baseline gap-1 font-mono text-lg font-semibold text-ember">
                                            {item.price}
                                            <span className="font-sans text-[10px] font-normal tracking-wider text-ink-soft uppercase">
                                                / orang / malam
                                            </span>
                                        </div>
                                        <ul className="mt-3 flex flex-1 list-none flex-col gap-2 border-t border-line pt-3 text-xs text-ink-soft">
                                            {item.specs.map((s, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2"
                                                >
                                                    <span className="mt-0.5 text-[10px] text-moss">
                                                        •
                                                    </span>
                                                    <span>{s}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                )}

                {/* TAB: accommodation */}
                {activeTab === 'accommodation' && (
                    <div className="mt-8 grid animate-[fadeIn_0.3s_ease-in-out] grid-cols-1 gap-5 md:grid-cols-3">
                        {(packages?.accommodation || []).map((item, i) => (
                            <FadeIn
                                key={item.title}
                                delay={i * 300}
                                className="h-full"
                            >
                                <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-line bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/60">
                                    {/* Image Container */}
                                    <div className="relative -mx-5 -mt-5 mb-2 aspect-[16/10] overflow-hidden rounded-t-xl">
                                        <div
                                            className="h-full w-full bg-cover bg-center brightness-75 contrast-110 saturate-75 transition-transform duration-500 group-hover:scale-105"
                                            style={{
                                                backgroundImage: `url('https://images.unsplash.com/photo-${item.imageId}?auto=format&fit=crop&w=600&q=70')`,
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />

                                        {/* Floating Tag */}
                                        <span className="absolute top-4 left-4 rounded-full border border-line-strong bg-bg/70 px-3 py-1 font-mono text-[9px] tracking-widest text-gold uppercase backdrop-blur-md">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col gap-1.5">
                                        <h4 className="font-serif text-xl leading-tight font-medium text-ink transition-colors duration-200 group-hover:text-gold">
                                            {item.title}
                                        </h4>
                                        <div className="mt-1 flex items-baseline gap-1 font-mono text-lg font-semibold text-ember">
                                            {item.price}
                                            {item.unit && (
                                                <span className="font-sans text-[10px] font-normal tracking-wider text-ink-soft uppercase">
                                                    {item.unit}
                                                </span>
                                            )}
                                        </div>
                                        <ul className="mt-3 flex flex-1 list-none flex-col gap-2 border-t border-line pt-3 text-xs text-ink-soft">
                                            {item.specs.map((s, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2"
                                                >
                                                    <span className="mt-0.5 text-[10px] text-moss">
                                                        •
                                                    </span>
                                                    <span>{s}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                )}

                {/* TAB: Sewa equipment */}
                {activeTab === 'equipment' && (
                    <div className="mt-8 block animate-[fadeIn_0.3s_ease-in-out]">
                        {/* Block 1: Pilihan tent */}
                        <div className="mb-12">
                            <div className="mb-5 flex items-baseline justify-between border-b border-line pb-3">
                                <h4 className="font-serif text-xl text-ink">
                                    Pilihan Tenda
                                </h4>
                                <span className="hidden font-mono text-xs tracking-widest text-ink-faint uppercase sm:block">
                                    Double Layer — Siap Pakai
                                </span>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {(packages?.equipment?.tent || []).map(
                                    (tent, i) => (
                                        <FadeIn
                                            key={tent.name}
                                            delay={i * 300}
                                            className="h-full"
                                        >
                                            <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-bg transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/60">
                                                <div className="relative aspect-[16/10] overflow-hidden">
                                                    <div
                                                        className="h-full w-full bg-cover bg-center brightness-75 contrast-110 saturate-75 transition-transform duration-500 group-hover:scale-105"
                                                        style={{
                                                            backgroundImage: `url('https://images.unsplash.com/photo-${tent.imageId}?auto=format&fit=crop&w=500&q=70')`,
                                                        }}
                                                    />
                                                    {tent.badge && (
                                                        <span className="absolute top-3 left-3 rounded-full border border-line-strong bg-bg/70 px-2 py-0.5 font-mono text-[9px] tracking-widest text-gold uppercase backdrop-blur-md">
                                                            {tent.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex flex-1 flex-col gap-2 p-4">
                                                    <h5 className="font-serif text-base leading-snug font-medium text-ink transition-colors duration-200 group-hover:text-gold">
                                                        {tent.name}
                                                    </h5>
                                                    <div className="font-mono text-[10px] tracking-wider text-moss uppercase">
                                                        {tent.capacity}
                                                    </div>
                                                    <ul className="specs mt-2 flex flex-1 list-none flex-col gap-1.5 border-t border-line pt-2 text-[11px] text-ink-soft">
                                                        {tent.specs.map(
                                                            (s, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-start gap-2"
                                                                >
                                                                    <span className="mt-0.5 text-[9px] text-moss">
                                                                        •
                                                                    </span>
                                                                    <span>
                                                                        {s}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                    <div className="mt-3 flex items-baseline gap-2 border-t border-line pt-2 font-mono">
                                                        <span className="text-lg font-medium text-ember">
                                                            {tent.price}
                                                        </span>
                                                        {tent.originalPrice && (
                                                            <span className="text-xs text-ink-soft line-through">
                                                                {
                                                                    tent.originalPrice
                                                                }
                                                            </span>
                                                        )}
                                                        <span className="ml-auto font-sans text-[9px] font-normal text-ink-faint uppercase">
                                                            / hari
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Block 2: Paket Camping */}
                        <div className="mb-12">
                            <div className="mb-5 flex items-baseline justify-between border-b border-line pb-3">
                                <h4 className="font-serif text-xl text-ink">
                                    Paket Camping Praktis
                                </h4>
                                <span className="font-mono text-xs tracking-widest text-ink-faint uppercase">
                                    Praktis, Tinggal Datang &amp; Nikmati
                                </span>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                {(packages?.equipment?.package || []).map(
                                    (pkg, i) => (
                                        <FadeIn key={pkg.name} delay={i * 100}>
                                            <div
                                                key={i}
                                                className={`group relative flex flex-col gap-3 rounded-xl border bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 ${
                                                    pkg.isHighlighted
                                                        ? 'border-ember shadow-[0_0_15px_rgba(224,150,79,0.08)]'
                                                        : 'border-line hover:border-gold/30'
                                                }`}
                                            >
                                                {pkg.isHighlighted && (
                                                    <span className="absolute -top-2.5 right-4 rounded-full bg-ember px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-bg uppercase shadow-md">
                                                        Best Value
                                                    </span>
                                                )}
                                                <h5 className="font-serif text-base leading-snug font-medium text-ink transition-colors duration-200 group-hover:text-gold">
                                                    {pkg.name}
                                                </h5>
                                                <p className="flex-1 text-xs leading-relaxed font-light text-ink-soft">
                                                    {pkg.description}
                                                </p>
                                                <div className="mt-1 flex items-baseline justify-between border-t border-line pt-3 font-mono text-base font-semibold text-ember">
                                                    <span>{pkg.price}</span>
                                                    <span className="font-sans text-[10px] font-normal text-ink-soft uppercase">
                                                        / hari
                                                    </span>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Block 3: Daftar Peralatan Individual */}
                        <div className="mt-16 border-t border-line pt-12">
                            <div className="mb-8 flex flex-col">
                                <h4 className="font-serif text-xl text-ink">
                                    Sewa Peralatan Satuan
                                </h4>
                                <p className="mt-1 text-xs text-ink-soft">
                                    Sewa peralatan tambahan untuk melengkapi
                                    kenyamanan berkemah Anda.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {/* Column 1: Kenyamanan & Penerangan */}
                                <FadeIn className="flex flex-col gap-4 rounded-xl border border-line bg-bg-2/30 p-5 backdrop-blur-md">
                                    <h5 className="border-b border-line pb-2 font-serif text-base font-medium text-gold">
                                        Kenyamanan &amp; Penerangan
                                    </h5>
                                    <div className="flex flex-col gap-3">
                                        {(
                                            packages?.equipment?.individual
                                                ?.comfort || []
                                        ).map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-baseline justify-between border-b border-line/40 pb-2 text-xs"
                                            >
                                                <span className="text-ink-soft">
                                                    {item.name}
                                                </span>
                                                <span className="ml-4 shrink-0 font-mono font-medium text-ember">
                                                    {item.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </FadeIn>

                                {/* Column 2: Peralatan Masak */}
                                <FadeIn
                                    delay={200}
                                    className="flex flex-col gap-4 rounded-xl border border-line bg-bg-2/30 p-5 backdrop-blur-md"
                                >
                                    <h5 className="border-b border-line pb-2 font-serif text-base font-medium text-gold">
                                        Dapur &amp; Peralatan Masak Camping
                                    </h5>
                                    <div className="flex flex-col gap-3">
                                        {(
                                            packages?.equipment?.individual
                                                ?.kitchen || []
                                        ).map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-baseline justify-between border-b border-line/40 pb-2 text-xs"
                                            >
                                                <span className="text-ink-soft">
                                                    {item.name}
                                                </span>
                                                <span className="ml-4 shrink-0 font-mono font-medium text-ember">
                                                    {item.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </FadeIn>

                                {/* Column 3: furniture & Outdoors */}
                                <FadeIn
                                    delay={400}
                                    className="flex flex-col gap-4 rounded-xl border border-line bg-bg-2/30 p-5 backdrop-blur-md"
                                >
                                    <h5 className="border-b border-line pb-2 font-serif text-base font-medium text-gold">
                                        Furnitur &amp; Pelindung Outdoor
                                    </h5>
                                    <div className="flex flex-col gap-3">
                                        {(
                                            packages?.equipment?.individual
                                                ?.furniture || []
                                        ).map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-baseline justify-between border-b border-line/40 pb-2 text-xs"
                                            >
                                                <span className="text-ink-soft">
                                                    {item.name}
                                                </span>
                                                <span className="ml-4 shrink-0 font-mono font-medium text-ember">
                                                    {item.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB: restaurant */}
                {activeTab === 'restaurant' && (
                    <div className="mt-8 block animate-[fadeIn_0.3s_ease-in-out]">
                        <div className="mb-12">
                            <div className="mb-5 flex items-baseline justify-between border-b border-line pb-3">
                                <h4 className="font-serif text-xl text-ink">
                                    Paket Barbeque &amp; Grill
                                </h4>
                                <span className="font-mono text-xs tracking-widest text-ink-faint uppercase">
                                    Bahan Segar &amp; Peralatan Lengkap
                                </span>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                                {(packages?.restaurant?.package || []).map(
                                    (item, i) => (
                                        <FadeIn
                                            key={item.title}
                                            delay={i * 300}
                                            className="h-full"
                                        >
                                            <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-line bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/60">
                                                {/* Image Container */}
                                                <div className="relative -mx-5 -mt-5 mb-2 aspect-[16/10] overflow-hidden rounded-t-xl">
                                                    <div
                                                        className="h-full w-full bg-cover bg-center brightness-75 contrast-110 saturate-75 transition-transform duration-500 group-hover:scale-105"
                                                        style={{
                                                            backgroundImage: `url('https://images.unsplash.com/photo-${item.imageId}?auto=format&fit=crop&w=600&q=70')`,
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />

                                                    {/* Floating Tag */}
                                                    <span className="absolute top-4 left-4 rounded-full border border-line-strong bg-bg/70 px-3 py-1 font-mono text-[9px] tracking-widest text-gold uppercase backdrop-blur-md">
                                                        {item.tag}
                                                    </span>
                                                </div>

                                                <div className="flex flex-1 flex-col gap-1.5">
                                                    <h4 className="font-serif text-xl leading-tight font-medium text-ink transition-colors duration-200 group-hover:text-gold">
                                                        {item.title}
                                                    </h4>
                                                    <div className="mt-1 flex items-baseline gap-1 font-mono text-lg font-semibold text-ember">
                                                        {item.price}
                                                        <span className="font-sans text-[10px] font-normal tracking-wider text-ink-soft uppercase">
                                                            {item.unit}
                                                        </span>
                                                    </div>
                                                    <ul className="mt-3 flex flex-1 list-none flex-col gap-2 border-t border-line pt-3 text-xs text-ink-soft">
                                                        {item.specs.map(
                                                            (s, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-start gap-2"
                                                                >
                                                                    <span className="mt-0.5 text-[10px] text-moss">
                                                                        •
                                                                    </span>
                                                                    <span>
                                                                        {s}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Block 2: Menu individual (food & Minuman) */}
                        <div className="mt-16 border-t border-line pt-12">
                            <div className="mb-8 flex flex-col">
                                <h4 className="font-serif text-xl text-ink">
                                    Menu Makanan &amp; Minuman Khas Terrava Cafe
                                    &amp; Resto
                                </h4>
                                <p className="mt-1 text-xs text-ink-soft">
                                    Sajian hidangan lezat dan minuman
                                    menyegarkan untuk menemani momen bersantai
                                    Anda.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                {/* food */}
                                <FadeIn className="flex flex-col gap-4 rounded-xl border border-line bg-bg-2/30 p-5 backdrop-blur-md">
                                    <h5 className="border-b border-line pb-2 font-serif text-base font-medium text-gold">
                                        Makanan Nusantara &amp; Camilan
                                    </h5>
                                    <div className="flex flex-col gap-4">
                                        {(packages?.restaurant?.food || []).map(
                                            (item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-baseline justify-between border-b border-line/20 pb-3 text-sm"
                                                >
                                                    <div className="flex flex-col pr-4">
                                                        <span className="font-medium text-ink">
                                                            {item.name}
                                                        </span>
                                                        <span className="mt-0.5 text-[10px] font-light text-ink-soft">
                                                            {item.description}
                                                        </span>
                                                    </div>
                                                    <span className="shrink-0 font-mono font-semibold text-ember">
                                                        {item.price}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </FadeIn>

                                {/* Minuman Hangat */}
                                <FadeIn
                                    delay={200}
                                    className="flex flex-col gap-4 rounded-xl border border-line bg-bg-2/30 p-5 backdrop-blur-md"
                                >
                                    <h5 className="border-b border-line pb-2 font-serif text-base font-medium text-gold">
                                        Minuman Hangat &amp; Wedang Tradisional
                                    </h5>
                                    <div className="flex flex-col gap-4">
                                        {(
                                            packages?.restaurant?.hotDrinks ||
                                            []
                                        ).map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-baseline justify-between border-b border-line/20 pb-3 text-sm"
                                            >
                                                <div className="flex flex-col pr-4">
                                                    <span className="font-medium text-ink">
                                                        {item.name}
                                                    </span>
                                                    <span className="mt-0.5 text-[10px] font-light text-ink-soft">
                                                        {item.description}
                                                    </span>
                                                </div>
                                                <span className="shrink-0 font-mono font-semibold text-ember">
                                                    {item.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </FadeIn>

                                {/* Minuman Dingin */}
                                <FadeIn
                                    delay={400}
                                    className="flex flex-col gap-4 rounded-xl border border-line bg-bg-2/30 p-5 backdrop-blur-md"
                                >
                                    <h5 className="border-b border-line pb-2 font-serif text-base font-medium text-gold">
                                        Minuman Dingin &amp; Penyegar Dahaga
                                    </h5>
                                    <div className="flex flex-col gap-4">
                                        {(
                                            packages?.restaurant?.coldDrinks ||
                                            []
                                        ).map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-baseline justify-between border-b border-line/20 pb-3 text-sm"
                                            >
                                                <div className="flex flex-col pr-4">
                                                    <span className="font-medium text-ink">
                                                        {item.name}
                                                    </span>
                                                    <span className="mt-0.5 text-[10px] font-light text-ink-soft">
                                                        {item.description}
                                                    </span>
                                                </div>
                                                <span className="shrink-0 font-mono font-semibold text-ember">
                                                    {item.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
