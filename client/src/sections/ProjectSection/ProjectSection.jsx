import React from "react";
import styles from "./ProjectSection.module.css";
import snake from "../../assets/snake.PNG";
import volumeModerator from "../../assets/volumeModerator.PNG";
import mapf from "../../assets/MAPF.png";
import fitbet from "../../assets/fitbet.png";
import nondle from "../../assets/nondle.PNG";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectSection() {
	const projects = [
		{
			image_path: snake,
			text: "Snake AI",
			link: "https://eligottlieb.github.io/",
		},
		{
			image_path: volumeModerator,
			text: "Volume Moderator",
			link: "https://github.com/ckbarrett/VolumeModerator/tree/main",
		},
		{
			image_path: fitbet,
			text: "FitBet",
			link: "https://github.com/greengro/FitBet",
		},
		{
			image_path: mapf,
			text: "Multi Agent Path Finding",
			link: "https://github.com/ckbarrett/CSCI360_Project3",
		},
		{
			image_path: nondle,
			text: "Nondle",
			link: "https://github.com/ckbarrett/Nondle",
		},
	];

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div id="projects" className={styles.section_container}>
			<div className={styles.carousel_container}>
				<Carousel
					className={styles.carousel}
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					centerMode={true}
				>
					{projects.map((project) => (
						<div className={styles.card} key={project.text}>
							<img
								className={styles.card_image}
								src={project.image_path}
								alt={project.text}
							/>
							<a href={project.link}>
								<p className={styles.card_text}>
									{project.text}
								</p>
							</a>
						</div>
					))}
				</Carousel>
				<div className={styles.scroll_container}>
					<a class="fa fa-angle-down page-scroll" href="#resume"></a>
				</div>
			</div>
		</div>
	);
}
