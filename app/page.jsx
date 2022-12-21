"use client";
import styles from "../styles/page.module.scss";
import { Hero } from "../components/Hero";
import { Map } from "../components/Map";
import { Services } from "../components/Services";
import { QuoteCalculator } from "../components/QuoteCalculator";
export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Map />
      <Services />
      <QuoteCalculator />
    </div>
  );
}
