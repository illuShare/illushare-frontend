import { css } from "@emotion/react";
import PropTypes from "prop-types";

const stepperStyle = css`
  margin: auto auto 1rem auto;
  width: 100%;
  height: 2rem;
  position: relative;
`;
const lineStyle = css``;
const circleStyle = css`
  border-radius: 50%;
`;

const Stepper = ({ step = 1 }) => {
  return (
    <div css={stepperStyle}>
      <div css={lineStyle} />
      <div css={circleStyle}>
        <span>{step}</span>
      </div>
    </div>
  );
};

Stepper.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Stepper;
