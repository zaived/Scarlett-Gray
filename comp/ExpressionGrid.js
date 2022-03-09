import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
import { useState } from "react";
import { motion } from "framer-motion";
import FsLightbox from "fslightbox-react";
import ReactPlayer from "react-player";

export default function ExpressionGrid({ expression }) {
  const [toggler, setToggler] = useState(false);

  const { thumbnail, featuredwork } = expression.fields;

  const galleryVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  // const galleryItems = {
  //   hidden: {
  //     y: 10,
  //   },
  //   visible: {
  //     y: 0,
  //     transition: {
  //       delay: 1,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  const options = {
    buttons: {
      backgroundColor: "rgba(30,30,36,0.8)",
      iconColor: "rgba(255, 255, 255, 0.8)",
      iconPadding: "10px",
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
      size: "40px",
    },
  };
  return (
    <div className="wrapper">
      <motion.div
        className="card"
        variants={galleryVariant}
        animate="visible"
        initial="hidden"
      >
        <a onClick={() => setToggler(!toggler)}>
          {/* <Image
            src={"https:" + thumbnail.fields.file.url}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
          /> */}
        </a>
      </motion.div>
      <FsLightbox
        toggler={toggler}
        sources={["https:" + thumbnail.fields.file.url]}
      />
    </div>
  );
}
