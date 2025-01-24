import React from "react";
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
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
