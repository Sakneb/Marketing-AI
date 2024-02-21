import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <div className={styles.NavLogo}>
          <Image
            width={50}
            height={50}
            className={styles.svglogo}
            src="/logo.svg"
            alt=""
          />
        </div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
