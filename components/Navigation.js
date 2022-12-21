import styles from "./Navigation.module.scss";

export const Navigation = ({}) => {
  return (
    <ul className={`${styles[`navigation`]}`}>
      <li className={`${styles["navigation-item"]}`}>About</li>
      <li className={`${styles["navigation-item"]}`}>How it Works</li>
      <li className={`${styles["navigation-item"]}`}>Services</li>
      <li className={`${styles["navigation-item"]}`}>Get a Quote</li>
    </ul>
  );
};
