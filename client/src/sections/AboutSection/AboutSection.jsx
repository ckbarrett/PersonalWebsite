import React, { useEffect, useRef } from "react";
import pfp from "../../assets/pfp.png";
import styles from "./AboutSection.module.css";
import cx from "classnames";
import Typewriter from "typewriter-effect/dist/core";

export default function AboutSection() {
	const textContainerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const typewriter = new Typewriter(entry.target, {
							delay: 15,
						});
						typewriter
							.typeString(
								"Hello, I am a <b>Software Developer</b> that enjoys creating awesome things. " +
									"I am currently improving the patient financial experience at <b>Epic Systems</b>."
							)
							.pauseFor(500)
							.typeString(
								"<br><br>Bachelor's Degree from <b>USC</b>."
							)
							.pauseFor(500)
							.typeString("<br> Previously at <b>Meta</b>.")
							.start();
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const currentRef = textContainerRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		<div id="about" className={styles.section_container}>
			<div className={styles.content_container}>
				<div
					className={cx(
						styles.image_container,
						styles.animation_container
					)}
				>
					<img src={pfp} alt="Profile" />
				</div>
				<div className={styles.text_container} ref={textContainerRef} />
			</div>
			<div className={styles.scroll_container}>
				<a className="fa fa-angle-down page-scroll" href="#projects">
					{" "}
				</a>
			</div>
		</div>
	);
}
