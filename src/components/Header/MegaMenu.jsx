"use client";
import React from "react";
import styles from "./styles.module.css";

export default function MegaMenu({ menuContent }) {

  return (
    <div className={styles.megaMenu}>
      <div className={styles.megaMenuContent}>
        {menuContent.dropdownList && menuContent.dropdownList.length > 0 && (
          <div className={styles.megaMenuList}>
            {menuContent.dropdownList.map((item, index) => (
              <a href={item.link} key={index}>
                {item.name || "Item Name"}
              </a>
            ))}
          </div>
        )}
        {menuContent.dropdownImages && menuContent.dropdownImages.length > 0 && (
          <div className={styles.megaMenuImages}>
            {menuContent.dropdownImages?.map((image, index) => (
              <div key={index} className={styles.megaMenuImageLink}>
                <a href={image.link}>
                  <img src={image.src} alt={image.alt} />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
