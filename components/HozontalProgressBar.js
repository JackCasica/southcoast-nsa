import styles from "./HozontalProgressBar.module.scss";

export const HozontalProgressBar = ({}) => {
  return (
    <div className={`${styles[`hozontal-progress-bar`]}`}>
      <div className={`${styles["progress"]}`}></div>
      <div className={`${styles["remaining"]}`}></div>
    </div>
  );
};
