import pfp from '../../assets/pfp.jpg'
import styles from './AboutSection.module.css'

export default function AboutSection() {
    return (
        <div id="about" className={styles.section_container}>
            <div className={styles.content_container}>
                <div className={styles.image_container}>
                    <img src={pfp} alt="Profile" />
                </div>
                <div className={styles.text_container}>
                    <p>
                        Hello, I am a <b>Software Developer</b> that enjoys creating awesome things. I am currently improving the patient financial experience at <b>Epic Systems</b>.
                    </p>
                    <p2>
                        Bachelor's Degree from <b>USC</b>.<br></br>Previously at <b className={styles.meta}>Meta</b>.
                    </p2>
                </div>
            </div>
            <div className={styles.scroll_container}>
                <a class="fa fa-angle-down page-scroll" href="#projects"></a>
            </div>
        </div>
    )
}