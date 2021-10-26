import styles from "./Header.module.css";

export default function Header() {
  const dots = [...Array(54).keys()];

  return (
    <div className={styles.header}>
      <div className={styles.des}>
        <p className={styles.text__1}>Hey!</p>
        <div className={styles.info__Name}>
          <p className={styles.text__2}>
            I’m <span className={styles.text__2__name}>Ariene Rey</span>.
          </p>
          <p className={styles.text__2}>an UI/UX Designer.</p>
          <div className={styles.line_vector}></div>
        </div>
        <div className={styles.info}>
          <p className={styles.line__1}>
            UX Designer based in Jakarta, Indonesia.
          </p>
          <p className={styles.line__2}>
            I am designing with a minimal and beautiful design in mind.
          </p>
        </div>
        <div className={styles.social}>
          <p>Follow Me </p>
          <span className="icon-instagram"></span>
          <span className="icon-youtube"></span>
          <span className="icon-dribbble"></span>
        </div>
        <div className={styles.buttons}>
          <a href="#" className={`button__bg ${styles.button}`}>
            <span class="icon-mail"></span> Mail Me
          </a>

          <a href="#" className={`button__none__bg ${styles.button}`}>
            <span class="icon-download"></span> Download CV
          </a>
        </div>
      </div>
      <div className={styles.part__right}>
        <div className={styles.image}>
          <div className={styles.imgMan}>
            <img src="./img/img-man.png" />
          </div>
        </div>
        <div className={styles.dots}>
          {dots.map((item) => (
            <div key={item} className={styles.dotsItem}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
