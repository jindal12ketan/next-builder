"use client";
import React from "react";
import styles from "./styles.module.css";

export default function InformativeStrip({ info }) {
    return (
        <div className={styles.informativeStrip}>
            <div className={styles.innerInformativeStrip}>
                {info && info.length > 0 ? (
                    info.map((item, index) => (
                        <div className={styles.informativeStripItem} key={index}>
                            <img src={item.icon} alt={item.title} />
                            <h3>{item.info}</h3>
                        </div>
                    ))
                ) : (
                    <div className={styles.emptyMessage}>No information available</div>
                )}
            </div>
        </div>
    );
}
