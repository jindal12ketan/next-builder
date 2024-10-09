"use client";
import React from "react";
import CTAButton from "../common/CTAButton/CTAButton";
import styles from "./styles.module.css";

export default function CTABlock({ ctaHook, ctaDetails, ctaButton }) {
    return (
        <div className={styles.ctaBlock}>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaHook}>{ctaHook}</h2>
                <p className={styles.ctaDetails} dangerouslySetInnerHTML={{ __html: ctaDetails }}></p>
                <CTAButton text={ctaButton.text} link={ctaButton.link} />
            </div>
        </div>
    );
}
