import styles from "../styles/Home.module.scss";
import ModalButtons from "../comp/ModalButtons";
import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div>
      <div className="container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lVJLNsLNnWs"
          controls
        />
      </div>
    </div>
  );
}
