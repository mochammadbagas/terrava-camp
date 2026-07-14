import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: 'normal' | 'slow' | 'slower';
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = 'up',
    duration = 'normal',
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px',
            },
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const directionClasses = {
        up: 'translate-y-8',
        down: '-translate-y-8',
        left: 'translate-x-8',
        right: '-translate-x-8',
        none: '',
    };

    const durationClasses = {
        normal: 'duration-700',
        slow: 'duration-1000',
        slower: 'duration-[1200ms]',
    };

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all ease-out',
                durationClasses[duration],
                isVisible
                    ? 'translate-x-0 translate-y-0 opacity-100'
                    : `opacity-0 ${directionClasses[direction]}`,
                className,
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
