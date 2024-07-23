import styles from './TitleSection.module.css';

export default function TitleSection() {
  return (
    <section id='TitleSection'>
      <div
        id={styles.sizer}
        class="p-5 text-center bg-image"
        className={styles.image_div}
      >
        <div class="mask" className={styles.mask}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white text-center">
              <h1 class="mb-3 font-weight-bold animated fadeInDown delay-05s display-3">Christian Barrett</h1>
              <h3 class="mb-4 subtitle animated fadeInUp delay-05s">Software Engineer</h3>
              <a class="fa fa-angle-down page-scroll" href="#about"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}