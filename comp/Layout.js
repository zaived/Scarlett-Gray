import Header from "./Header";
import Footer from "./Footer";
import ModalButtons from "./ModalButtons";
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="mask">
        <h2>PLEASE SWITCH TO DESKTOP TO EXPERIENCE SITE</h2>
      </div>
      <div className="layout-content">
        <Header />
        <ModalButtons />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
