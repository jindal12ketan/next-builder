import React from "react";
import styles from "./styles.module.css";

export default function CTAButton({ text, link }) {
    return (
        <a href={link}
            className={styles.cta}>
            {text}
        </a>
    );
}