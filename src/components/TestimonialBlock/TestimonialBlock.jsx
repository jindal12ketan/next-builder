"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const defaultTestimonials = [
    {
        backgroundImage: "https://via.placeholder.com/1920x1080",
        review: "I can't say enough good things about the quality of the workmanship...",
        starsCount: 5,
        reviewDescription: "We just had our tub/shower converted to a shower by Bath Fitter in Fort Myers, FL. I can't say enough good things about the quality of the workmanship and the knowledge and professionalism of our installer, Michael H. I would not hesitate to recommend this company and their product.",
        reviewerName: "Elaine Stashak",
        reviewerLocation: "Fort Myers, FL"
    },
    // Add more testimonial objects here
];

export default function TestimonialBlock({ testimonials = defaultTestimonials }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const renderStars = (count) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < count ? styles.activeStar : styles.inactiveStar}>★</span>
            );
        }
        return stars;
    };

    return (
        <section 
            className={styles.testimonialBlock}
            style={{ backgroundImage: `url(${testimonials[currentSlide].backgroundImage})` }}
        >
            <div className={styles.content}>
                <blockquote className={styles.blockquote}>
                    <p className={styles.review}>{testimonials[currentSlide].review}</p>
                    <div className={styles.stars}>
                        {renderStars(testimonials[currentSlide].starsCount)}
                    </div>
                    <p className={styles.reviewDescription}>{testimonials[currentSlide].reviewDescription}</p>
                    <footer>
                        <cite className={styles.reviewerName}>{testimonials[currentSlide].reviewerName}</cite>
                        <p className={styles.reviewerLocation}>{testimonials[currentSlide].reviewerLocation}</p>
                    </footer>
                </blockquote>
                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}
