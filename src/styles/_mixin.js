import { css } from "@emotion/react";
import { breakUp } from "./_media";

export const containerMixin = () => css`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${breakUp.sm`
  max-width: 570px;
`}

  ${breakUp.md`
 max-width: 730px;
`}
`;

export const flexMixin = ({
  direction = "row",
  alignItems = "flex-start",
  justifyContent = "flex-start",
}) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;
