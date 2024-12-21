import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

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
        <section id="portfolio" className="portfolio">
            <div className="skills__container">
                <motion.div className="skills">
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={transition}
                        src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                        alt="C++"
                    />

                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 0.4 }}
                        src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                        alt="HTML"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 1.8 }}
                        src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                        alt="Redux"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 2 }}
                        src="https://img.shields.io/badge/vite-%23384137.svg?style=for-the-badge&logo=vite&logoColor=ffd62e"
                        alt="Vite"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 0.6 }}
                        src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                        alt="CSS3"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 0.8 }}
                        src="https://img.shields.io/badge/scss-hotpink.svg?style=for-the-badge&logo=sass&logoColor=white"
                        alt="SCSS"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 1.4 }}
                        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                        alt="React"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 1.6 }}
                        src="https://img.shields.io/badge/next-black?style=for-the-badge&logo=next.js&logoColor=white"
                        alt="Next JS"
                    />
                </motion.div>

                <motion.div className="skills">
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 0.2 }}
                        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                        alt="JavaScript"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 1 }}
                        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                        alt="TailwindCSS"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 2.2 }}
                        src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"
                        alt="Webpack"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 2.4 }}
                        src="https://img.shields.io/badge/babel-%23F9DC3e?style=for-the-badge&logo=babel&logoColor=black"
                        alt="Babel"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 1.2 }}
                        src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                        alt="TypeScript"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 2.8 }}
                        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                        alt="Express.js"
                    />
                    <motion.img
                        initial={initial}
                        animate={animate}
                        transition={{ ...transition, delay: 2.6 }}
                        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                        alt="Node.js"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
