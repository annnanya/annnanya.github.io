import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import TechImg from "../../assets/tech-stack.png";

const Skills = () => {
    const initial = {
        translateY: 30,
        opacity: 0,
    };
    const animate = {
        translateY: 0,
        opacity: 1,
    };
    const transition = {
        duration: 0.8,
        delay: 0,
    };

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <motion.div
                    className="skills"
                    initial={initial}
                    animate={animate}
                    transition={transition}
                >
                    <motion.img
                        src={TechImg}
                        alt="Skills and Technologies"
                        className="skills-image"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
