import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { flexMixin } from "styles/_mixin";
import { Colors } from "styles/_variables";

const containerStyle = css`
  ${flexMixin({ direction: "column" })}
  height: 250px;
  min-width: 120px;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    height: 8px;
    width: 100%;
    background-color: ${Colors["dark-blue"]};
  }
`;

const figureStyle = css`
  margin: 0;
  width: 100%;

  & > img {
    width: inherit;
    height: 100%;
  }
`;

const titleWrapperStyle = css`
  padding: 0.5rem;
`;
const titleStyle = css`
  margin: 0.35rem 0 0 0;
  font-size: 0.8rem;
  font-weight: bold;
`;
const descriptionStyle = css`
  margin-top: 0.3rem;
  font-size: 0.6rem;
  color: #9a9a9a;
`;

const Item = ({ title, description }) => {
  return (
    <div css={containerStyle}>
      <figure css={figureStyle}>
        <img
          src="https://d2k6w3n3qf94c4.cloudfront.net/media/test_detail/thumb_min/%EC%84%B8%EB%A0%9D%EA%B2%8C%ED%8B%B0%EB%8F%99%EB%AC%BC%ED%85%8C%EC%8A%A4%ED%8A%B8_BcaM8Vh.png"
          alt="mbti"
        />
      </figure>
      <div css={titleWrapperStyle}>
        <p css={titleStyle}>{title}</p>
        <p css={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
