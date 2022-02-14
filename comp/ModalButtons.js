import { useState } from "react";
import Image from "next/image";
import Guy from "../public/assets/icons/guy.gif";
import Cart from "../public/assets/icons/cart.gif";
import Phone from "../public/assets/icons/phone.gif";
import AboutModal from "./Modals/AboutModal";
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
        >
          <Image />
          <h3></h3>
        </div>
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
        return <ContactModal />;
      } else if (currentModalId === "shop") {
        return <ShopModal />;
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
        <Image src={Guy} alt="GuySign" width={200} />
        <h3>ABOUT</h3>
      </motion.div>

      <div
        className="item"
        // onClick={() => setCurrentModalId('shop')}
      >
        <Image src={Cart} alt="GuySign" width={200} />
        <h3>SHOP</h3>
      </div>
      <div className="item" onClick={() => setCurrentModalId("contact")}>
        <Image src={Phone} alt="GuySign" width={200} />
        <h3>CONTACT</h3>
      </div>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modal()}
      </AnimatePresence>
    </div>
  );
};

export default ModalButtons;
