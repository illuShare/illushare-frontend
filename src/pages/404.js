import { css } from "@emotion/react";
import { flexMixin } from "styles/_mixin";

const titleStyle = css`
  ${flexMixin({
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
  })}
  text-align: center;
`;

export default function PageNotFound() {
  return <h1 css={titleStyle}>404 - Page Not Found</h1>;
}
