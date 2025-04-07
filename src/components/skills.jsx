import React from "react";
import { FaPython, FaRProject, FaCode } from "react-icons/fa";
import styles from "./skills.module.css";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: <FaPython style={{ color: "#FFD43B" }} />,
      description:
        "I am proficient in Python, using it for data analysis, automation, and web development with libraries like Pandas, NumPy, and Flask. Recently, I have been exploring Large Language Models (LLMs) and AI-driven applications, leveraging Python's machine learning ecosystem to develop innovative solutions.",
      level: 90,
    },
    {
      name: "R",
      icon: <FaRProject style={{ color: "#74C0FC" }} />,
      description:
        "I am skilled in R, utilizing it for data analysis, visualization, and statistical modeling. I enjoy leveraging R’s powerful libraries like ggplot2 and dplyr to derive insights and solve complex problems efficiently.",
      level: 75,
    },
    {
      name: "Full-Stack Dev",
      icon: <FaCode style={{ color: "#007BFF" }} />,
      description:
        "I am experienced in full-stack development, building dynamic web applications using modern front-end and back-end technologies. I enjoy creating user-friendly interfaces and robust server-side solutions to deliver seamless, end-to-end functionality.",
      level: 95,
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillsContent}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.skillDescription}>{skill.description}</div>
            <div className={styles.skillBar}>
              <div
                className={styles.skillLevel}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
