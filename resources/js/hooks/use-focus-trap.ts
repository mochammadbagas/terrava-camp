import { useEffect, useRef } from 'react';

// Return type eksplisit RefObject<HTMLDivElement | null> agar komponen penerima
// tidak perlu cast "as React.RefObject<HTMLDivElement>" sebagai workaround.
export function useFocusTrap(
    isActive: boolean,
): React.RefObject<HTMLDivElement | null> {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isActive || !containerRef.current) {
            return;
        }

        const container = containerRef.current;
        const focusableSelectors =
            'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
        const focusableElements = Array.from(
            container.querySelectorAll<HTMLElement>(focusableSelectors),
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        first?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') {
                return;
            }

            if (focusableElements.length === 0) {
                e.preventDefault();

                return;
            }

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last?.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first?.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isActive]);

    return containerRef;
}
