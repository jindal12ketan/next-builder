"use client";
import React from "react";
import Masonry from 'react-masonry-css';
import styles from "./styles.module.css";
import CTAButton from "../common/CTAButton/CTAButton";

const defaultImages = [
    "https://via.placeholder.com/500x700",
    "https://via.placeholder.com/500x500",
    "https://via.placeholder.com/500x700",
    "https://via.placeholder.com/500x500",
    "https://via.placeholder.com/500x500",
    "https://via.placeholder.com/500x700",
    "https://via.placeholder.com/500x500",
    "https://via.placeholder.com/500x700",
    "https://via.placeholder.com/500x700",
    "https://via.placeholder.com/500x500",
    "https://via.placeholder.com/500x700",
    "https://via.placeholder.com/500x500",
];

const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1
};

export default function MasonryGallery({ images = defaultImages, title="title", subtitle="subtitle", ctaText="View More" }) {
    return (
        <section className={styles.galleryContainer}>
            <h3 className={styles.gallerySubTitle}>{subtitle}</h3>
            <h2 className={styles.galleryTitle}>{title}</h2>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
        >
            {images.map((src, index) => (
                <div key={index} className={styles.masonryItem}>
                    <img src={src} alt={`Gallery Image ${index + 1}`} />
                </div>
            ))}
        </Masonry>
        <CTAButton text={ctaText} link="#" />
        </section>
    );
}
