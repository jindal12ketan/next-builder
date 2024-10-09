"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

const defaultMenuItems = [
  {
    name: { Default: "About", "fr-CA": "À propos" },
    link: "#",
    hasDropdown: true,
    dropdownList: [
      { name: { Default: "Our Story", "fr-CA": "Notre histoire" }, link: "#" },
      { name: { Default: "Leadership", "fr-CA": "Leadership" }, link: "#" },
      { name: { Default: "Careers", "fr-CA": "Carrières" }, link: "#" },
    ],
    dropdownImages: [
      { src: "https://via.placeholder.com/300", alt: "Our Story", link: "#", name: { Default: "Our Story", "fr-CA": "Notre histoire" } },
      { src: "https://via.placeholder.com/300", alt: "Leadership", link: "#", name: { Default: "Leadership", "fr-CA": "Leadership" } },
      { src: "https://via.placeholder.com/300", alt: "Careers", link: "#", name: { Default: "Careers", "fr-CA": "Carrières" } },
    ],
  },
];

const defaultLogo = "https://bathfittercom-prod-backend.azurewebsites.net/wp-content/uploads/2020/09/SvgLogo.svg";
const defaultCta = "Book a Free Consultation";

function Header({ logo = defaultLogo, menuItems = defaultMenuItems, cta = defaultCta }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    if (menu.hasDropdown) {
      setActiveMenu(menu);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const items = Array.isArray(menuItems) ? menuItems : [];

  return (
    <div onMouseLeave={handleMouseLeave} className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.innerHeader}>
          <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
            <span />
            <span />
            <span />
          </div>
          <Link href="home">
          <img
            src={logo}
            alt="Logo"
            className={`${styles.logo} ${styles.mobileLogo}`}
          />
          </Link>
          <nav className={styles.nav}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ""}`}
                onMouseEnter={() => handleMouseEnter(item)}
              >
                <Link href={item.link || '#'}>
                  {item.name}
                </Link>
              </div>
            ))}
            <Link href="#" className={styles.consultation}>{cta}</Link>
          </nav>
        </div>
      </header>
      {activeMenu && <MegaMenu menuContent={activeMenu} />}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {items.map((item, index) => (
            <Link href={item.link || '#'} key={index} onClick={toggleMobileMenu}>
              {item.name}
            </Link>
          ))}
          <Link href="#" className={styles.mobileConsultation}>{cta}</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
