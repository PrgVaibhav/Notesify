import { Link } from "react-router-dom";
import styles from "./emptyPage.module.css";
export const EmptyPage = () => {
  return (
    <section className={styles.empty_container}>
      <p>Why this page is still empty? :(</p>
      <p>
        Create one note <Link to="/create">now</Link> :)
      </p>
    </section>
  );
};
