import Layout from "../comp/Layout";
import "../styles/globals.scss";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SimpleReactLightbox>
  );
}

export default MyApp;
