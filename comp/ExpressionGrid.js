import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";

export default function ExpressionGrid({ expression }) {
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
    <SRLWrapper options={options}>
      <motion.div
        className="card"
        variants={galleryVariant}
        animate="visible"
        initial="hidden"
      >
        <Image
          className="grid-img"
          src={"https:" + expression.fields.file.url}
          width={500}
          height={600}
        />
      </motion.div>
    </SRLWrapper>
  );
}
