import { HomePageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { BookingStepsSection } from './_components/booking-steps-section';
import { CategorySection } from './_components/category-section';
import { FacilitiesSection } from './_components/facilities-section';
import { FAQSection } from './_components/faq-section';
import { GallerySection } from './_components/gallery-section';
import { HeroSection } from './_components/hero-section';
import { LocationSection } from './_components/location-section';
import { PackagesSection } from './_components/packages-section';
import { TestimonialsSection } from './_components/testimonials-section';

export default function HomePage({
    hero,
    categories,
    packages,
    gallery,
    facilities,
    location,
    contact,
    bookingSteps,
    faqs,
    testimonials,
}: HomePageProps) {
    const [activePackageTab, setActivePackageTab] =
        useState<string>('campground');

    return (
        <>
            <Head title="Home">
                <meta
                    name="description"
                    content="Terrava Camp — camping ground, kabin, glamping, dan sewa peralatan terlengkap di lereng Gunung Arjuno, Prigen, Pasuruan, Jawa Timur. Nikmati petualangan alam dan kenyamanan premium di ketinggian 800 MDPL."
                />
                <meta
                    name="keywords"
                    content="Terrava Camp, camping Gunung Arjuno, glamping Prigen, camping Pasuruan, kabin Arjuno, camping Jawa Timur, sewa alat camping, camp ground Pasuruan, glamping Jawa Timur, wisata alam Arjuno, camping keluarga Prigen"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Terrava Camp — Camping & Glamping Premium di Lereng Gunung Arjuno"
                />
                <meta
                    property="og:description"
                    content="Terrava Camp — camping ground, kabin, glamping, dan sewa peralatan terlengkap di lereng Gunung Arjuno, Prigen, Pasuruan, Jawa Timur. Nikmati petualangan alam dan kenyamanan premium di ketinggian 800 MDPL."
                />
                <meta property="og:image" content="/logo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Terrava Camp — Camping & Glamping Premium di Lereng Gunung Arjuno"
                />
                <meta
                    name="twitter:description"
                    content="Terrava Camp — camping ground, kabin, glamping, dan sewa peralatan terlengkap di lereng Gunung Arjuno, Prigen, Pasuruan, Jawa Timur. Nikmati petualangan alam dan kenyamanan premium di ketinggian 800 MDPL."
                />
            </Head>

            <main id="home">
                <HeroSection hero={hero} />
                <CategorySection
                    categories={categories}
                    onSelectTab={(tab) => {
                        setActivePackageTab(tab);

                        const el = document.getElementById('packages');

                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                />
                <PackagesSection
                    packages={packages}
                    activeTab={activePackageTab}
                    setActiveTab={setActivePackageTab}
                />
                <GallerySection gallery={gallery} />
                <FacilitiesSection facilities={facilities} />
                <LocationSection location={location} />
                <BookingStepsSection
                    bookingSteps={bookingSteps}
                    contact={contact}
                />
                <TestimonialsSection testimonials={testimonials} />
                <FAQSection faqs={faqs} />
            </main>
        </>
    );
}
