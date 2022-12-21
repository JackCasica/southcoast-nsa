import styles from "./Services.module.scss";
import { notarialActsDescription, residentialDescription, commercialDescription, services } from "../utils/copy";

export const Services = ({}) => {
  return (
    <div className={`${styles[`services`]}`}>
      <h2 className={`${styles["section-title"]}`}>Services</h2>
      <div className={`${styles["columns-container"]}`}>
        <div className={`${styles["column"]} ${styles["notarial-acts"]}`}>
          <h2 className={`${styles["column-title"]}`}>Notarial Acts</h2>
          <div className={`${styles["description"]}`}>{notarialActsDescription}</div>
          <div className={`${styles["list-container"]}`}>
            <ul className={`${styles["list"]}`}>
              {services.notarialActs.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${styles["column"]} ${styles["residential"]}`}>
          <h2 className={`${styles["column-title"]}`}>Residential</h2>
          <div className={`${styles["description"]}`}>{residentialDescription}</div>
          <div className={`${styles["list-container"]}`}>
            <ul className={`${styles["list"]}`}>
              {services.residential.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${styles["column"]} ${styles["commercial"]}`}>
          <h2 className={`${styles["column-title"]}`}>Commercial</h2>
          <div className={`${styles["description"]}`}>{commercialDescription}</div>
          <div className={`${styles["list-container"]}`}>
            <ul className={`${styles["list"]}`}></ul>
          </div>
        </div>
      </div>
    </div>
  );
};
