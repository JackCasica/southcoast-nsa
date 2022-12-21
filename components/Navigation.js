import styles from "./Navigation.module.scss";
import Link from "next/link";
export const Navigation = ({}) => {
  return (
    <ul className={`${styles[`navigation`]}`}>
      <li className={`${styles["navigation-item"]}`}>
        <a href="#about">About</a>
      </li>
      <li className={`${styles["navigation-item"]}`}>
        <a href="#services">Services</a>
      </li>
      <li className={`${styles["navigation-item"]}`}>
        <a href="#quote">Get a Quote</a>
      </li>
    </ul>
  );
};
