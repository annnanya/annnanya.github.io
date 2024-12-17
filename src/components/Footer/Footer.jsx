import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";
const footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				Ananya Singh
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="mailto:singh.ananya2406@gmail.com">Email</a>
				</li>
				<li>
					<a href="#contacts">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a href="https://www.github.com/annnanya/">
					<BsGithub />
				</a>
				<a href="https://www.instagram.com/annnnnnnanya/">
					<BsInstagram />
				</a>
				<a href="https://www.linkedin.com/in/ananyasingh2406/">
					<BsLinkedin />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy;Ananya Singh. ALL rights reserved</small>
			</div>
		</footer>
	);
};

export default footer;
