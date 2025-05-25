import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Micoworks",
        duration: "March 2025 - Present",
        responsibilities: [
            " - Identified and proposed frontend performance optimizations through in-depth analysis of New Relic reports, leading to a 20% improvement in load times.",
            " - Collaborated on new feature development in a fast-paced, Agile team environment, contributing to rapid iteration and delivery."
        ]
    },
    {
        id: 2,
        role: "Developer",
        company: "Cogitate Technology Solutions",
        duration: "May 2024 - February 2025",
        responsibilities: [
            " - Automated critical processes using Azure Functions, reducing manual intervention by 60% and improving system efficiency.",
            " - Migrated 200,000+ records from a legacy system to a modern Node.js stack, improving data retrieval speed by 30% with optimized SQL queries and Cosmos DB integration.",
            " - Crafted robust RESTful and GraphQL APIs through Node.js architecture, enabling efficient data processing and reducing latency by 25%.",
        ]
    },
    {
        id: 3,
        role: "Associate Developer",
        company: "Cogitate Technology Solutions",
        duration: "May 2022 - May 2024",
        responsibilities: [
            " - Engineered a reusable React.js and Next.js frontend framework with Redux, enhancing load times and improving state management for a smoother user experience.",
            " - Developed a scalable backend system with Node.js, Azure Serverless Functions, and Cosmos DB, reducing response times and improving performance over the legacy .NET system.",
            " - Automated document generation with Azure Queue-Triggered Functions and REST API integration, ensuring robust code quality with 90% test coverage through Jest unit testing.",
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h1>Experience</h1>
            <div className="experience__container">
                {experiences.map(({ id, role, company, duration, responsibilities }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, translateY: 30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="experience__item"
                    >
                        <div className="desc">
                            <h3 className="experience__role">{role}</h3>
                            <p className="experience__company">{company}</p>
                            <p className="experience__duration">{duration}</p>
                        </div>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="experience__responsibilities"
                        >
                            {responsibilities.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
