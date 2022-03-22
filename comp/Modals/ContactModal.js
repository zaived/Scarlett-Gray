import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import Link from "next/link";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ContactModal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="modal-wrapper"
      >
        <div className="exit-btn">
          <h1 onClick={handleClose}>EXIT</h1>
        </div>
        <div className="contact-text">
          <h1>a.gray.scarlett@gmail.com</h1>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default ContactModal;
