import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

// Основной компонент для индивидуальной анимации
const FadeInWhenVisible = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.15 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                hidden: { opacity: 0, scale: 1 },
                visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
            exit="hidden"
        >
            {children}
        </motion.div>
    );
};

export default FadeInWhenVisible;