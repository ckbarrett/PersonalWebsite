import { React } from "react";
import styles from "./FooterSection.module.css";
import raspberrypi from "../../assets/raspberrypi.png";
import Links from "../../components/Links/Links.jsx"

export default function FooterSection() {
	return (
		<div id="footer" className={styles.section_container}>
			<Links/>
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
