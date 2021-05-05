import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { flexMixin } from "styles/_mixin";
import { Colors } from "styles/_variables";

const stepperStyle = css`
  margin: auto auto 1rem auto;
  width: 100%;
  height: 2rem;
  position: relative;
`;
const lineStyle = css`
  margin: 1rem 0;
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 2px;
  background-color: ${Colors.purple};
  z-index: 1;
`;
const circleStyle = css`
  ${flexMixin({
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
  })}
  height: 2rem;
  width: 2rem;
  font-weight: 600;
  font-size: 1.2rem;
  position: absolute;
  color: white;
  border-radius: 50%;
  background-color: ${Colors.mattpurple};
  z-index: 2;
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
