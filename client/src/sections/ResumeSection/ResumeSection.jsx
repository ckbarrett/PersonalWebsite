import React from "react";
import styles from "./ResumeSection.module.css";
import resume from "../../assets/resume.pdf";

const ResumeSection = () => {
	let resumeHighlights = [
		"1.5+ years of experience as a full-stack engineer",
		"Expert with modern front-end web technologies",
		"Proven track record of delivering high-quality projects on time",
		"Excellent customer engagement and research",
		"Strong problem-solving and analytical skills",
	];

	return (
		<div id="resume" className={styles.sectionContainer}>
			<div id="resume" className={styles.resumeSection}>
				<div className={styles.highlights}>
					{resumeHighlights.map((highlight, index) => (
						<p key={index}>{highlight}</p>
					))}
				</div>
				<a
					href={resume}
					className={styles.downloadLink}
				>
					View Resume
				</a>
			</div>
		</div>
	);
};

export default ResumeSection;
