import React from "react";
import styles from "../../styles/layouts/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-content"]}>
				<div className={styles["footer-links"]}>
					<a href="/about" className={styles["footer-link"]}>
						About Us
					</a>
					<a href="/services" className={styles["footer-link"]}>
						Services
					</a>
					<a href="/contact" className={styles["footer-link"]}>
						Contact
					</a>
					<a href="/privacy" className={styles["footer-link"]}>
						Privacy Policy
					</a>
				</div>
				<div className={styles["footer-socials"]}>
					<a
						href="https://facebook.com"
						className={styles["footer-social-link"]}
						target="_blank"
						rel="noopener noreferrer"
					>
						Facebook
					</a>
					<a
						href="https://twitter.com"
						className={styles["footer-social-link"]}
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
					<a
						href="https://instagram.com"
						className={styles["footer-social-link"]}
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram
					</a>
				</div>
			</div>
			<div className={styles["footer-bottom"]}>
				<p>
					&copy; {new Date().getFullYear()} Your Company Name. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
