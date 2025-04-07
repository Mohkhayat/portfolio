import React from "react";
import styles from "./about-me.module.css";
import memoji from "../assets/memoji.png"; 

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={memoji} alt="Memoji Avatar" className={styles.gif} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            My name is <strong>Mohammed Khayat</strong> — a passionate software developer who loves bringing ideas to life through code. Whether it's building full-stack web applications, immersive mobile experiences, or creative game mechanics, I thrive on solving problems and creating digital magic.
            <br /><br />
            Recently, I’ve been diving into the world of <strong>Artificial Intelligence</strong>, with a particular focus on <strong>Large Language Models (LLMs)</strong>. I’m fascinated by how AI can understand and generate human language, and I’ve been exploring <strong>fine-tuning, prompt engineering, and building intelligent agents</strong> that do more than just respond — they help.
            <br /><br />
            What excites me most is the intersection of <strong>creativity and technology</strong>. I believe in building tools that are not only powerful but also beautifully designed, intuitive, and accessible to everyone.
            <br /><br />
            In every project I take on, I bring a mindset of constant learning, curiosity, and a deep desire to push boundaries. Whether I’m crafting code or leading a product vision, I aim to create experiences that leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
