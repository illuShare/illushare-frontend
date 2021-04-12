import { css } from "@emotion/react";

const listWrapperStyle = css`
  display: flex;
  padding: 0;
  overflow: hidden;
`;

const listStyle = ({ type, page }) => css`
  display: flex;
  padding: 0;
  width: 100%;
  transition: 0.3s;
  ${type === "lg" && `transform: translateX(-${page * 515}px);`}
  ${type === "md" && `transform: translateX(-${page * 380}px);`}
  ${type === "sm" && `transform: translateX(-${page * 260}px);`}
`;

const ItemList = ({ children, sliderRef, page, type }) => {
  return (
    <div css={listWrapperStyle}>
      <ul ref={sliderRef} css={listStyle({ type, page })}>
        {children}
      </ul>
    </div>
  );
};

export default ItemList;
