import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export const useIntersectionObserver = (
    options: IntersectionObserverOptions = {}
): [RefObject<HTMLDivElement>, boolean] => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                ...options,
                threshold: options.threshold || 0.1,
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return [elementRef, isIntersecting];
};
