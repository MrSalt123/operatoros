// file: /animations/animationVariants.js

export const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.1 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeIn' } }
};