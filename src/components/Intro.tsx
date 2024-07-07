'use client'
import Image from 'next/image'
import styles from '@/styles/Intro.module.scss'
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';

const slideUp = {
    initial: {
        top: 0
    },
    enter: {
        top: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    },
}

export function Intro() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e: any) => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
            <Image
                src="https://cdn.faystarnext.studio/20230806_151743.jpg"
                fill={true}
                alt="background"
                className='blur-5'
            />
            <div data-scroll data-scroll-speed={10} className={styles.description}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                </svg>
                <p>Student</p>
                <p>Back-End Developer</p>
            </div>
        </motion.main>
    )
}