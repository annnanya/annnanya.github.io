import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";
const footer = () => {
	return (
		<footer>
			<div className="footer__copyright">
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
				<small>&copy;Ananya Singh. ALL rights reserved</small>
			</div>
		</footer>
	);
};

export default footer;
