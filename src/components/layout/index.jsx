import { css } from "@emotion/react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { flexMixin } from "styles/_mixin";

const containerStyle = css`
  ${flexMixin({ direction: "column" })}
  min-height: 100vh;
`;

const mainStyle = css`
  flex: 1 1;
  padding-bottom: 10px;
  margin-bottom: 50px;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <div css={containerStyle}>
      <Header />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
