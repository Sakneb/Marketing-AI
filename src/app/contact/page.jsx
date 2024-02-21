import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/contact.png"
          alt="Contact Page"
          fill
        />
      </div>
      <div className={styles.formContiner}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname"></input>
          <input type="text" placeholder="Email adress"></input>
          <input type="text" placeholder="Phone number (Optional)"></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>

          <button>Send</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
