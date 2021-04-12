import { css } from "@emotion/react";
import { containerMixin, flexMixin } from "styles/_mixin";
import { Colors } from "styles/_variables";

const footerStyle = css`
  padding: 2rem 1rem;
  width: 100%;
  background-color: ${Colors["gray-100"]};
`;

const wrapperStyle = css`
  ${flexMixin({ direction: "row" })}
  color: #8a8a8a;
`;

const labelStyle = css`
  margin-right: 1.5rem;
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <div css={containerMixin()}>
        <div css={wrapperStyle}>
          <p css={labelStyle}>광고, 제휴 문의</p>
          <p>illushare@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
