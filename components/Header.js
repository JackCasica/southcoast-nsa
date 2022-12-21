"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo3.png";
import { Button } from "./Button";
import styles from "./Header.module.scss";
import { Navigation } from "./Navigation";
import menuIcon from "../assets/menu-icon.svg";
import { HozontalProgressBar } from "./HozontalProgressBar";

export const Header = ({}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div
      className={`${styles[`header`]} ${isSticky ? styles[`sticky`] : styles[`fixed`]}`}
      ref={headerRef}
    >
      <div className={`${styles["left"]}`}>
        <Image
          src={logo}
          className={`${styles["logo"]}`}
          alt="SouthCoast NSA"
          height={40}
          // width={32}
        />
        {/* <span className={`${styles["company-name"]}`}>SouthCoast NSA</span> */}
      </div>
      <div className={`${styles["right"]}`}>
        {windowWidth < 700 ? "" : <Navigation />}
        {windowWidth < 500 ? "" : <Button text="562-387-9074" />}
        {windowWidth < 700 ? (
          <Image
            src={menuIcon}
            className={`${styles["menu"]}`}
            alt="Menu"
            height={30}
            style={{ color: "white" }}
            // width={32}
          />
        ) : (
          ""
        )}
      </div>
      <HozontalProgressBar />
    </div>
  );
};
