import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import { PiMonitor } from "react-icons/pi";
import { motion, useInView, useAnimation } from "framer-motion";
import TechImg from "../../assets/tech-stack.png";

const data = [
	{
		id: 1,
		weburl: "https://pricewise-omega-peach.vercel.app",
		title: "PriceWise",
		date: "April 24 - Present",
		techStack: "NextJs, TypeScript, Web Scraping, CRON Jobs, Node Mailer",
		desc: `Pricewise is a web application that helps users track product prices and search for deals. Featuring a sleek interface with a search bar, product cards, and price tracking, it notifies users of price changes via email. Using web scraping and daily updates through cron jobs, Pricewise ensures shoppers stay informed about the best offers.`,
		url: "https://raw.githubusercontent.com/annnanya/annnanya/master/src/assets/pricewise.png",
		github: "https://github.com/annnanya/pricewise",
	},
	{
		id: 2,
		weburl: "https://bookstack-omega-peach.vercel.app",
		title: "BookStack",
		date: "August 24 - Present",
		techStack: "ReactJs, NodeJs, ExpressJs, MongoDB",
		desc: `Stack Store is an online bookstore where users can browse, purchase, and manage books effortlessly. It includes secure user authentication, theme toggling (light/dark mode), and a responsive interface for an enhanced user experience.`,
		url: "https://raw.githubusercontent.com/annnanya/annnanya/master/src/assets/bookstack.png",
		github: "https://github.com/annnanya/stackstore",
	},
	{
		id: 3,
		weburl: "https://spacetourism-iota.vercel.app/SpaceTourism/",
		title: "Space Tourism",
		date: "September 24 - Present",
		techStack: "ReactJs, CSS",
		desc: `Discover the universe with Space Tourism, your digital gateway to everything about space travel. Dive in for engaging, insightful education on extraterrestrial adventures right from the comfort of your home!`,
		url: "https://raw.githubusercontent.com/annnanya/annnanya/master/src/assets/spacetourism.png",
		github: "https://github.com/annnanya/spacetourism",
	},
	{
		id: 4,
		weburl: "https://envshare-puce-one.vercel.app",
		title: "EnvShare",
		date: "November 24 - Present",
		techStack: "JavaScript, TypeScript, CSS",
		desc: `EnvShare is a lightweight and secure tool designed for sharing environment variables safely. Using AES-GCM encryption, your sensitive data is encrypted directly in your browser, ensuring the encryption key never leaves your system.`,
		url: "https://raw.githubusercontent.com/annnanya/annnanya/master/src/assets/envshare.png",
		github: "https://github.com/annnanya/envshare",
	},
];

const Portfolio = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	useEffect(() => {
		mainControls.start(isInView && "visible");
	}, [isInView]);

	return (
		<section id="portfolio" className="portfolio">
			<>
				<h1>Skills</h1>
				<div className="skills-image">
					<img src={TechImg} alt="Skills and Technologies"></img>
				</div>
			</>
			<>
				<h1>Portfolio</h1>
				<h5>My Recent Works</h5>
				<div ref={ref} className="portfolio__container">
					{data.map(({ id, url, title, github, weburl, desc, date, techStack }) => {
						return (
							<motion.article
								variants={{
									hidden: { opacity: 0, translateY: 30 },
									visible: { opacity: 1, translateY: 0 },
								}}
								key={id}
								initial="hidden"
								animate={mainControls}
								transition={{
									duration: 1,
									delay: 0.2,
								}}
								className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={url} alt={title}></img>
								</div>
								<div className="details">
									<div className="projectDetails">
										<h3>{title}</h3>
										<p className="date">{date}</p>
										<p className="techStack">{techStack}</p>
									</div>

									<p className="desc">{desc}</p>
									<div className="button-flex">
										<div className="portfolio__item-cta">
											<a
												href={github}
												className="btn btn-primary ctaBtn"
												target="_blank">
												<AiFillGithub fontSize={24} />
												Github
											</a>
										</div>
										<div className="portfolio__item-cta">
											<a
												href={weburl}
												className="btn btn-primary ctaBtn"
												target="_blank">
												<PiMonitor fontSize={24} />
											</a>
										</div>
									</div>
								</div>
							</motion.article>
						);
					})}
				</div>
			</>
		</section>
	);
};

export default Portfolio;
