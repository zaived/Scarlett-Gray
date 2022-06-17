import styles from "../styles/Home.module.scss";
import ModalButtons from "../comp/ModalButtons";
import { useState } from "react";
import Image from "next/image";
import HomeSlider from "../comp/HomeSlider";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-text">
          <h2>
          &ldquo;At first, art imitates life. Then life will imitate art. Then life
            will find its very existence from the arts.&rdquo; - Fyodor Dostoevsky
          </h2>
        </div>
      </div>
      <HomeSlider />
    </div>
  );
}
