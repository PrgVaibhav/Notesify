import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              Create
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// className={splitLocation[1] === "create" ? "active" : "link"}
