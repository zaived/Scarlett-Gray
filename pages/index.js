import styles from "../styles/Home.module.scss";
import ModalButtons from "../comp/ModalButtons";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ModalButtons />
      <div className="container"></div>
    </div>
  );
}
