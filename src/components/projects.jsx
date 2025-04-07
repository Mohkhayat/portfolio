import React from "react";
import styles from "./projects.module.css"; // ✅ Import CSS
import gif from "../assets/labeik-unscreen.gif"; // Example Project Image

const projects = [
    {
        name: "Labeik",
        description: "Labaik is a mobile application designed to assist Hajj pilgrims with real-time navigation, location tracking, and essential information. Built with React Native and Firebase, it ensures a seamless experience by offering multilingual support, offline accessibility, and instant notifications.",
        image: gif, // ✅ Example Image
        tech: ["React Native", "Firebase", "Google Maps API"],
        link: "https://apps.apple.com/app/id6450485062"
    },
    {
        name: "The Lost Relic (2D Game)",
        description: "The Lost Relic is a 2D adventure platformer where players take on the role of an archaeologist exploring ancient ruins. Developed using Unity and C#, the game features immersive pixel-art graphics, interactive puzzles, and a captivating storyline.",
        image: null, // No image available yet
        tech: ["Unity", "C#", "Game Design"],
        link: "https://mohkhayat.github.io/FinalGameTest/"
    }
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.sectionTitle}>My Projects</h2>
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        {project.image && (
                            <img src={project.image} alt={project.name} className={styles.projectImage} />
                        )}
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectName}>{project.name}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <ul className={styles.techStack}>
                                {project.tech.map((tech, i) => (
                                    <li key={i} className={styles.techItem}>{tech}</li>
                                ))}
                            </ul>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Projects;
