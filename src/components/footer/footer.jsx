import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image width={20} height={20} src="/logo.svg" alt="" />
      </div>
      <div className={styles.text}>MindSpace Media © All rights reserved.</div>
    </div>
  );
};

export default Footer;
