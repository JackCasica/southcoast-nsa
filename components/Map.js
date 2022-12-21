import styles from "./Map.module.scss";

export const Map = (props) => {
  return (
    <div className={`${styles["map"]}`}>
      <div className={`${styles["about"]}`}>
        <span>Notarizations when and where your clients need them</span>
      </div>
      <div className={`${styles["map-background-container"]}`}>
        <iframe
          className={styles["map-background"]}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs503l9It3YARtwiMzI0ot5Y&key=AIzaSyDFnC2g0_lrAfnhViJTlPtJamdgAOrtdjk"
        ></iframe>
        <div className={`${styles["marker"]}`}>f</div>
      </div>
    </div>
  );
};
