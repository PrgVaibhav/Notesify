import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by{" "}
        <a
          href="https://kumarvaibhav.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vaibhav
        </a>{" "}
        with ❤
      </p>
    </footer>
  );
};
