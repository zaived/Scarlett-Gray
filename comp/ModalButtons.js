import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Person from "../public/assets/icons/eoman.PNG";
import Cart from "../public/assets/icons/cart.PNG";
import Brain from "../public/assets/icons/brain.PNG";
import Heart from "../public/assets/icons/heart.PNG";
import Hands from "../public/assets/icons/hands.PNG";

import AboutModal from "./Modals/AboutModal";
import ContactModal from "./Modals/ContactModal";
import ShopModal from "./Modals/ShopModal";
import { motion, AnimatePresence } from "framer-motion";

const ModalButtons = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  var [currentModalId, setCurrentModalId] = useState(null);

  var content = [
    {
      id: "about",
      modalContent: <AboutModal />,
    },
    {
      id: "shop",
      modalContent: <ShopModal />,
    },
    {
      id: "contact",
      modalContent: <ContactModal />,
    },
  ];

  {
    content.map((contentItem) => {
      const { id, modalContent } = contentItem;

      return (
        <div
          key={id}
          onClick={() => {
            setCurrrentModalId(id);
            open();
          }}
        ></div>
      );
    });
  }

  function modal() {
    if (modalOpen) {
      console.log("modal is open");
      if (currentModalId === "about") {
        console.log("currentModalId is about");
        return <AboutModal handleClose={() => close()} />;
      } else if (currentModalId === "contact") {
        return <ContactModal handleClose={() => close()} />;
      } else if (currentModalId === "shop") {
        return <ShopModal handleClose={() => close()} />;
      } else {
        console.log("no id defined", currentModalId);
        return null;
      }
    }

    return null;
  }

  return (
    <div className="m-container">
      <motion.div
        onClick={() => {
          setCurrentModalId("about");
          open();
        }}
        className="item"
      >
        <Image src={Person} alt="GuySign" width={200} height={200} />
        <h3>STORY</h3>
      </motion.div>

      <div className="item">
        <Link href="/ArtisticExpression">
          <a>
            <Image src={Hands} alt="GuySign" width={200} height={200} />
            <h3>EXPRESSION</h3>
          </a>
        </Link>
      </div>
      <div className="item">
        <Image src={Brain} alt="GuySign" width={200} height={200} />
        <h3>ADVERTISING</h3>
      </div>

      <div className="item">
        <Image src={Heart} alt="GuySign" width={200} height={200} />
        <h3>DIVERSITY</h3>
      </div>

      <div
        className="item"
        onClick={() => {
          setCurrentModalId("shop");
          open();
        }}
      >
        <Image src={Cart} alt="GuySign" width={200} height={200} />
        <h3>SHOP</h3>
      </div>

      <div
        className="item"
        onClick={() => {
          setCurrentModalId("contact");
          open();
        }}
      >
        {/* <Image src={Phone} alt="GuySign" width={200} /> */}
        <h3>CONTACT</h3>
      </div>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modal()}
      </AnimatePresence>
    </div>
  );
};

export default ModalButtons;
