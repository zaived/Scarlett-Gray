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
            <h1>SCARLETT - The Story</h1> <br />
            <p>
              Freelance Creative Director & Artist & DEI advocate <br />
              Scarlett Rose Gray <br />
              is currently living ❝the traditional narrative usually involving
              supernatural or imaginary <br /> persons and embodying popular
              ideas on natural or social phenomena❞ <br />
              Key Character - Scarlett : Creative Director - Artist - Hockey
              Player <br />
              storyline : Enter Scarlett born to a blonde actress and a Lebanese
              Prince. She did the <br /> better part of her growing up in a
              small beach town on the west cost called Carmel - by - <br /> the
              - Sea. Left the Beach town for the Desert (amman, jordan). <br />
              Over her career, she moved from the Desert of Jordan to Portugal,
              to the big Apple to <br /> the city of love to amsterdam, before
              finally landing back in Brooklyn, building brands <br /> and
              creative campaigns for the likes of Nike, Verizon, Zalando, the
              NBA and Child & <br /> Youth Finance International. <br />
              approach: I create ideas that translate globally. <br />
              Marketing today exists on a global scale. This makes translation
              the biggest hurdle to <br /> creative ideas. Not translation in
              terms of language, but translation in terms of culture. <br />
              Across sub-cultures, across National cultures, across verticals.
              <br />
              My superpower is making sure that the way the idea was conceived
              in the culture it was <br /> conceived in, is received in the same
              way as it bounces around the internet and is <br /> moved from
              global to local.
            </p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default AboutModal;
