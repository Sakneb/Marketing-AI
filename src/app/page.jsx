import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>AI-powered marketing agency</h1>
        <p className={styles.description}>
          An AI-powered marketing agency leverages cutting-edge artificial
          intelligence technologies to optimize marketing strategies, enhance
          customer targeting, and deliver data-driven insights for businesses
          seeking a competitive edge in the digital landscape
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
