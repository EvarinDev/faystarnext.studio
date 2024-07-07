import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
    "Hi 👋 My name is FAY",
    "I'm a Backend Developer",
    "I have been working in the IT industry for 4 years",
];

export function Description() {
    return (
        <div className="h-screen">
            <div className="gap-20vw mt-300 mb-300 flex flex-col items-center justify-center h-screen text-center ">
                <MaskText />
            </div>
        </div>
    );
}

export function MaskText() {
    const animation = {
        initial: { y: "100%" },
        enter: (i: number) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
    };

    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return (
        <div ref={ref} className="text-2xl">
            {
                phrases.map((phrase, index) => (
                    <div key={index} className="overflow-hidden">
                        <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className="font-bold m-0">
                            {phrase}
                        </motion.p>
                    </div>
                ))
            }
        </div>
    );
}
