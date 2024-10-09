"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

export default function ImageWithList({
    image = "defaultImage.jpg",
    title = "Default Title",
    subtitle = "Default Subtitle",
    list = [
        { title: "Default Item 1", text: "This is the default text for item 1." },
        { title: "Default Item 2", text: "This is the default text for item 2." },
        { title: "Default Item 3", text: "This is the default text for item 3." },
        { title: "Default Item 4", text: "This is the default text for item 4." },
        { title: "Default Item 5", text: "This is the default text for item 5." },
    ],
}) {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const handleNextPage = () => {
        if ((currentPage + 1) * itemsPerPage < list.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < Math.ceil(list.length / itemsPerPage); i++) {
            dots.push(
                <span
                    key={i}
                    className={`${styles.dot} ${i === currentPage ? styles.active : ""}`}
                    onClick={() => setCurrentPage(i)}
                ></span>
            );
        }
        return dots;
    };

    return (
        <div className={styles.imageWithList}>
            <div className={styles.imageContainer}>
                <img src={image} alt="List" />
            </div>
            <div className={styles.listContainer}>
                <h3 className={styles.listSubTitle}>{subtitle}</h3>
                <h2 className={styles.listTitle}>{title}</h2>
                <ul>
                    {list.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (
                        <li key={index} className={styles.listItem}>
                            <svg className={styles.check} fill="#fff" stroke="#fff" viewBox="0 0 67 59" version="1.1"><title>812D0486-46AD-4335-A093-108F525EC467</title><desc>Created with sketchtool.</desc><g id="E-Booking-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="eBooking_Confirmed" transform="translate(-927.000000, -187.000000)" fill="#fff"><g id="AddToCalendar" transform="translate(685.000000, 99.000000)"><g id="Group-7" transform="translate(50.000000, 65.000000)"><g id="4.-Elements-/Black/-Icons-/-Basic-/-Check" transform="translate(192.000000, 23.000000)"><path d="M65.0658643,1.86870149 C67.1467734,3.48662262 67.522387,6.48514581 65.9044325,8.56610262 L28.7966211,56.2931367 C27.9702234,57.3560231 26.7333711,58.020864 25.3908507,58.1230004 C24.048378,58.2251367 22.725187,57.7555004 21.7474939,56.8295913 L1.58239659,37.7388254 C-0.331754837,35.9266208 -0.414417041,32.9058663 1.39776841,30.9917163 C3.20995387,29.0775663 6.23073705,28.9949026 8.14488705,30.8070594 L24.4898552,46.2812913 L58.3682961,2.70708353 C59.9862507,0.626137214 62.9849552,0.250780351 65.0658643,1.86870149 Z" id="Path"></path></g></g></g></g></g></svg>
                            <div className={styles.itemText}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={styles.dotsContainer}>
                    {renderDots()}
                </div>
            </div>
        </div>
    );
}
