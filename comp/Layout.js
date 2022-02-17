import Header from "./Header";
import Footer from "./Footer";
import ModalButtons from "./ModalButtons";
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <ModalButtons />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
