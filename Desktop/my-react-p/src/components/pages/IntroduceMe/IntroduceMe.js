import Rating from "../../commons/rating";
import styles from "./IntroduceMe.module.css";

export default function IntroduceMe() {
  return (
    <div className={styles.IntroduceMe}>
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="./img/img-about.png" />
        </div>
        <div className={styles.des}>
          <div className={styles.header}>
            <div className={styles.number}>
              <p>
                120<span className={styles.plus}>+</span>
              </p>
              <p className={styles.text}>Completed Projects</p>
            </div>
            <div className={styles.rate}>
              <div>
                <span className={styles.b_plus}>B+</span> <Rating />
              </div>
              <p className={styles.text}>Positive Review’s</p>
            </div>
          </div>
          <div className={styles.info}>
            <p className={styles.title}>Glad to Help You!</p>
            <p className={styles.texts}>
              As a full-service digital designer, I work closely with my clients
              to define, design and develop transformative user experiences
              across all platforms and brand’s touchpoints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
