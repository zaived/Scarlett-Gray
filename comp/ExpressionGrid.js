import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import FsLightbox from "fslightbox-react";

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

  return (
    <div className="wrapper">
      <motion.div
        className="card"
        variants={galleryVariant}
        animate="visible"
        initial="hidden"
      >
        <a onClick={() => setToggler(!toggler)}>
          <Image
            src={"https:" + thumbnail.fields.file.url}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
          />
        </a>
      </motion.div>
      <FsLightbox
        toggler={toggler}
        sources={["https:" + featuredwork[0].fields.file.url]}
      />
    </div>
  );
}
