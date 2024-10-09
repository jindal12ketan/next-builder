"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const defaultList = [
    {
        icon: "https://via.placeholder.com/50",
        itemName: "Default Item 1",
        link: "#",
        image: "https://via.placeholder.com/600x400"
    },
    {
        icon: "https://via.placeholder.com/50",
        itemName: "Default Item 2",
        link: "#",
        image: "https://via.placeholder.com/600x400"
    }
];

export default function InteractiveListWithImage({ image, title, subtitle, text, list = defaultList }) {
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        if (list.length > 0) {
            setHoveredItem(list[0]);
        }
    }, [list]);

    return (
        <div className={styles.interactiveListWithImage}>
            <div className={styles.listContainer}>
                <h3 className={styles.listSubTitle}>{subtitle}</h3>
                <h2 className={styles.listTitle}>{title}</h2>
                <p className={styles.listText}>{text}</p>
                <ul>
                    {list.map((item, index) => (
                        <li
                            key={index}
                            className={styles.listItem}
                            onMouseEnter={() => setHoveredItem(item)}
                        >
                            <img src={item.icon} alt={item.itemName} className={styles.icon} />
                            <div className={styles.itemText}>
                                <h3>{item.itemName}</h3>
                            </div>
                            <a href={item.link}>
                                Learn More
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.imageContainer}>
                {hoveredItem && <img src={hoveredItem.image} alt={hoveredItem.itemName} />}
            </div>
        </div>
    );
}
