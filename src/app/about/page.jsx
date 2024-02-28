import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          Our agency blends innovation and strategy for impactful business
          results.
        </h1>
        <p className={styles.desc}>
          At our AI-powered marketing agency, our team is the driving force
          behind our success. We follow a collaborative approach, combining
          creativity and data-driven methods to craft effective and tailored
          marketing solutions. Together, we work seamlessly to bring innovation
          to every campaign.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          sizes="(max-width: 100vw)"
          src="/about.png"
          alt="About Image"
          fill
        />
      </div>
    </div>
  );
};

export default About;
