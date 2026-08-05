// ─── Shared sub-types ────────────────────────────────────────────────────────

export interface Testimonial {
    name: string;
    role: string;
    avatar: string;
    quote: string;
    rating: number;
}

// ─── Page props ───────────────────────────────────────────────────────────────

export interface HomePageProps {
    hero: {
        imageId: string;
        eyebrow: string;
        title: string;
        description: string;
        price: string;
        stats: {
            spots: string;
            units: string;
            rating: string;
        };
    };
    categories: Array<{
        id: string;
        title: string;
        description: string;
    }>;
    packages: {
        campground: Array<{
            imageId: string;
            tag: string;
            title: string;
            price: string;
            specs: string[];
        }>;
        accommodation: Array<{
            imageId: string;
            tag: string;
            title: string;
            price: string;
            unit?: string;
            specs: string[];
        }>;
        equipment: {
            tent: Array<{
                imageId: string;
                badge: string;
                name: string;
                capacity: string;
                specs: string[];
                price: string;
                originalPrice: string;
            }>;
            package: Array<{
                name: string;
                description: string;
                price: string;
                isHighlighted?: boolean;
            }>;
            individual: {
                comfort: Array<{ name: string; price: string }>;
                kitchen: Array<{ name: string; price: string }>;
                furniture: Array<{ name: string; price: string }>;
            };
        };
        restaurant: {
            package: Array<{
                imageId: string;
                tag: string;
                title: string;
                price: string;
                unit: string;
                specs: string[];
            }>;
            food: Array<{ name: string; description: string; price: string }>;
            hotDrinks: Array<{
                name: string;
                description: string;
                price: string;
            }>;
            coldDrinks: Array<{
                name: string;
                description: string;
                price: string;
            }>;
        };
    };
    gallery: {
        backgroundImageId: string;
        items: Array<{
            colSpan: string;
            imageId: string;
            label: string;
        }>;
    };
    facilities: string[];
    location: {
        mapsEmbedUrl: string;
        items: Array<{
            label: string;
            value: string;
        }>;
    };
    contact: {
        whatsappUrl: string;
    };
    bookingSteps: Array<{
        title: string;
        description: string;
    }>;
    faqs: Array<{
        question: string;
        answer: string;
    }>;
    testimonials: Testimonial[];
}

// ─── Section props ────────────────────────────────────────────────────────────

export interface HeroSectionProps {
    hero: HomePageProps['hero'];
}

export interface CategorySectionProps {
    categories: HomePageProps['categories'];
    onSelectTab: (tab: string) => void;
}

export interface PackagesSectionProps {
    packages: HomePageProps['packages'];
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export interface GallerySectionProps {
    gallery: HomePageProps['gallery'];
}

export interface FacilitiesSectionProps {
    facilities: HomePageProps['facilities'];
}

export interface LocationSectionProps {
    location: HomePageProps['location'];
}

export interface BookingStepsSectionProps {
    bookingSteps: HomePageProps['bookingSteps'];
    contact: HomePageProps['contact'];
}

export interface FAQSectionProps {
    faqs: HomePageProps['faqs'];
}

export interface TestimonialsSectionProps {
    testimonials: HomePageProps['testimonials'];
}
