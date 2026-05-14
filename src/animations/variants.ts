import { Variants } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const pageTransition: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.45, ease: smoothEase }
    },
    exit: {
        opacity: 0,
        position: "absolute",
        inset: 0,
        width: "100%",
        transition: { duration: 0.2, ease: smoothEase }
    }
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: smoothEase }
    }
};

export const softScaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: smoothEase }
    }
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren
        }
    }
});

export const viewportReveal = { once: false, amount: 0.18 };
export const viewportRevealOnce = { once: true, amount: 0.18 };