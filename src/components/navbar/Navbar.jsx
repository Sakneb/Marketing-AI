import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css";
// import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
