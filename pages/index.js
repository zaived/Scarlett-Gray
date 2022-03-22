import styles from "../styles/Home.module.scss";
import ModalButtons from "../comp/ModalButtons";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <h2>
          “At first, art imitates life. Then life will imitate art. Then life
          will find its very existence from the arts." - Fyodor Dostoevsky
        </h2>
      </div>
    </div>
  );
}
