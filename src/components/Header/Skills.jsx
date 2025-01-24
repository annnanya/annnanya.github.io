import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Vite",
    "Webpack",
    "Babel",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "Git",
    "GitHub",
    "Vercel",
    "Azure",
    "Jest",
    "npm",
    "Postman",
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h1>Skills</h1>
            <div className="skills-container">
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="skills-list"
                >
                    {skills.map((skill, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="skill-item"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
};

export default Skills;
