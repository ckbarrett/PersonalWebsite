import styles from "./TitleSection.module.css";
import { React } from "react";

export default function TitleSection() {
	return (
		<section id="TitleSection" className={styles.image_div}>
			<div className={styles.mask}>
				<div className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white text-center">
						<h1 className="mb-3 font-weight-bold animated fadeInDown delay-05s display-3">
							Christian Barrett
						</h1>
						<h3 className="mb-4 subtitle animated fadeInUp delay-05s">
							Software Engineer
						</h3>
						<a
							className="fa fa-angle-down page-scroll"
							href="#about"
						>
							{" "}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
