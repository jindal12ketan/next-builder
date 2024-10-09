"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function HeroCarousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides?.length || 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [slides]);

    if (!slides || slides.length === 0) {
        return <div className={styles.carousel}>No slides available</div>;
    }

    return (
        <div className={styles.carousel}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
                    style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                >
                    <div className={styles.gradient}></div>
                    <div className={styles.content}>
                        <div className={styles.innerContent}>
                            <h1>{slide.title}</h1>
                            <h2>{slide.subtitle}</h2>
                            <p>{slide.description}</p>
                            <div className={styles.ctas}>
                                <button className={styles.cta}>{slide.cta1}</button>
                                <button className={`${styles.cta} ${styles.secondary}`}>{slide.cta2}</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
