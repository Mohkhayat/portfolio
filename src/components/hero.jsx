import React from "react";
import styles from "./Hero.module.css";
import animation from "../assets/animation.mp4";
import wavesImage from "../assets/shifaaz-shamoon-9K9ipjhDdks-unsplash.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.nameOverlay}>Mohammed Khayat</h1>
        <div className={styles.framedVideo}>
          <video autoPlay loop muted playsInline className={styles.video}>
            <source src={animation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
