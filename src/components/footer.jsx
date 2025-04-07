import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";
import sand from "../assets/dongsh-AHaaWiSZJbY-unsplash.jpg"; // ✅ import image

const Footer = () => {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${sand})` }}
    >
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Mohammed Khayat. All Rights Reserved.</p>

        <nav className={styles.footerNav}>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.socialLinks}>
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohammed-khayat-ba1071297/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
