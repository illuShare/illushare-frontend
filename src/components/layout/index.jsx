import { css } from "@emotion/react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { flexMixin } from "styles/_mixin";
import { useRecoilValue } from "recoil";
import pageState from "states/page";

const containerStyle = css`
  ${flexMixin({ direction: "column" })}
`;

const mainStyle = css`
  flex: 1 1;
  padding-bottom: 10px;
  width: 100%;
`;

const Layout = ({ children }) => {
  const page = useRecoilValue(pageState);

  return (
    <div css={containerStyle}>
      <Header />
      <main css={mainStyle}>{children}</main>
      {page === "home" && <Footer />}
    </div>
  );
};

export default Layout;
