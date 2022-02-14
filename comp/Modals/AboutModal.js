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

const AboutModal = ({ handleClose }) => {
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
        <div className="a-modal">
          <div className="bio">
            <p>
              A NATIVE SAN FRANCISCAN EXECUTIVE CREATIVE DIRECTOR, WRITING MY
              HEART OUT SINCE 2009.... <br />
              <br /> currently executive creative director at
              <span className="red">
                <Link href="#">
                  <a target="_blank"> grey nyc</a>
                </Link>
              </span>
              .<br /> ADWEEK
              <span className="red">
                <Link href="#">
                  <a target="_blank"> Creative Top 100 21</a>
                </Link>
              </span>
              <br />
              <br />
              <br /> let’s try to tell stories that move people and make people
              think, whether that's through a 30s spot, a documentary on YT or a
              tea cup. where a story is told is less important than why or how.
              ads should be fun. because we are talking to people and people
              will always surprise you. <br /> <br /> Say hello at
              <span className="red">
                <Link href="#">
                  <a> andrewritescopy@gmail.com</a>
                </Link>
              </span>
              <br />
              <span className="red">
                <Link href="#">
                  <a target="_blank"> /andreggray </a>
                </Link>
              </span>
              +
              <span className="red">
                <Link href="#">
                  <a target="_blank"> @andregray </a>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default AboutModal;
