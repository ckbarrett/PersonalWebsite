import styles from "./Links.module.css"
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/email.png";
import cx from "classnames";

export default function Links(props) {
    let additionalStyles = props.hideOnMobile ? styles.hide_on_mobile : ""
    return (
        <div className={cx(styles.image_container, additionalStyles)}>
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
    )
}

