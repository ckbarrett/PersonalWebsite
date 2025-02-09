import { React } from "react";
import styles from "./FooterSection.module.css";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import raspberrypi from "../../assets/raspberrypi.png";
import email from "../../assets/email.png";

export default function FooterSection() {
	return (
		<div id="footer" className={styles.section_container}>
			<div className={styles.image_container}>
				<a href="https://www.instagram.com/cbar16/">
					<img
						className={styles.image}
						src={instagram}
						alt="instagram"
					></img>
				</a>
				<a href="https://www.linkedin.com/in/ckbarrett//">
					<img
						className={styles.image}
						src={linkedin}
						alt="linkedin"
					></img>
				</a>
				<a href="https://github.com/ckbarrett">
					<img
						className={styles.image}
						src={github}
						alt="github"
					></img>
				</a>
				<a href="mailto:ckbarrett116@gmail.com">
					<img className={styles.image} src={email} alt="email"></img>
				</a>
			</div>
			<div className={styles.text_container}>
				<p className={styles.text}>Created by Christian Barrett</p>

				<p className={styles.text}>
					Hosted on my raspberry pi&nbsp;&nbsp;
					<img
						className={styles.small_image}
						src={raspberrypi}
						alt="raspberry pi"
					></img>
				</p>
			</div>
		</div>
	);
}
