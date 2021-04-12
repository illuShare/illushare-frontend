import Layout from "components/layout";
import { globalStyles } from "../styles";

function App({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
