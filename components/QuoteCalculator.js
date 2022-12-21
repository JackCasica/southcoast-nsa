import styles from "./QuoteCalculator.module.scss";

export const QuoteCalculator = ({}) => {
  return (
    <div className={`${styles[`quote-calculator`]}`}>
      <div className={`${styles["inner-container"]}`}>
        <div className={`${styles["left"]}`}>
          <h1 className={`${styles["quote-instructions"]}`}>
            Get a Quote <br />
            Book an Appointment.
          </h1>
          <p className={`${styles["quote-instructions-details"]}`}>
            Use the SouthCoast NSA Notary Fee calculator to get a quote and book your signing appointment today! Once
            submitted, I will be in touch with you as soon as possible to confirm your appointment Need to schedule
            ASAP? Call or text @ (562) 387-9074
          </p>
        </div>
        <div className={`${styles["right"]}`}>
          {/* <div
            className="calconic-calculator"
            data-calculatorid="5ecf0a057f051800291c0387"
          ></div>

          <script>
            {(function () {
              let qs,
                j,
                q,
                s,
                d = document,
                gi = d.getElementById,
                ce = d.createElement,
                gt = d.getElementsByTagName,
                id = "calconic_",
                b = "https://cdn.calconic.com/static/js/";
              if (!gi.call(d, id)) {
                j = ce.call(d, "script");
                j.id = id;
                j.type = "text/javascript";
                j.async = true;
                j.dataset.calconic = true;
                j.src = b + "calconic.min.js";
                q = gt.call(d, "script")[0];
                q.parentNode.insertBefore(j, q);
              }
            })()}
          </script> */}
        </div>
      </div>
    </div>
  );
};
