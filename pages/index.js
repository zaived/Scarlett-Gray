import styles from "../styles/Home.module.scss";
import ModalButtons from "../comp/ModalButtons";
import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    name: "Photo 1",
    url: "https://images.unsplash.com/photo-1643273038626-59942bbad9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 2",
    url: "https://images.unsplash.com/photo-1643273038626-59942bbad9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 3",
    url: "https://images.unsplash.com/photo-1643041447984-ff891bdf0815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 4",
    url: "https://images.unsplash.com/photo-1642866737821-532bc817c068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 5",
    url: "https://images.unsplash.com/photo-1643273038626-59942bbad9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 6",
    url: "https://images.unsplash.com/photo-1487695396764-5e73255e78d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 7",
    url: "https://images.unsplash.com/photo-1642420062605-a68fcf3002bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 8",
    url: "https://images.unsplash.com/photo-1642420062605-a68fcf3002bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 9",
    url: "https://images.unsplash.com/photo-1642420062605-a68fcf3002bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 10",
    url: "https://images.unsplash.com/photo-1642420062605-a68fcf3002bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 11",
    url: "https://images.unsplash.com/photo-1642420062605-a68fcf3002bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 12",
    url: "https://images.unsplash.com/photo-1642420062605-a68fcf3002bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 13",
    url: "https://images.unsplash.com/photo-1642420062605-a68fcf3002bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Photo 14",
    url: "https://images.unsplash.com/photo-1642420062605-a68fcf3002bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Home() {
  return (
    <div>
      <ModalButtons />
      <div className="container">
        <div id="carousel">
          {photos.map((photo) => {
            return (
              <figure>
                <img src={photo.url} />
                <div className="p-title">
                  <h1>Project-Title</h1>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
