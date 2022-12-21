import first from "../assets/1st.png";
import second from "../assets/2nd.png";
import third from "../assets/3rd.png";
import fourth from "../assets/4th.png";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { heroText } from "../utils/copy";

export const Hero = ({}) => {
  return (
    <div className={`${styles[`hero`]}`}>
      <div className={`${styles["hero-content"]}`}>
        <h1 className={`${styles["hero-text"]}`}>
          LA & OC 24.7 <br />
          Mobile Notary
          <br />
          Signing Service
          <br />
          brought to You!
        </h1>
        <div className={`${styles["learn-more"]}`}>Learn More ✨</div>
      </div>
      <video
        autoPlay
        muted
        loop
        className={`${styles["hero-video-background"]}`}
      >
        <source
          src="/hero-video-background.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
