import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { flexMixin } from "styles/_mixin";
import { Colors } from "styles/_variables";

const stepperStyle = css`
  margin: 1.4rem auto 1.4rem auto;
  width: 90%;
  height: 2rem;
  position: relative;

  & > p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    width: 100%;
    font-weight: bold;
  }
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

const getInnerLineStyle = (step, end) => {
  const innerWidth = (step / end) * 100;

  return css`
    ${flexMixin({
      direction: "row",
      alignItems: "center",
      justifyContent: "center",
    })}
    height: 100%;
    width: ${innerWidth}%;
    font-weight: 600;
    font-size: 1.2rem;
    color: white;
    background-color: ${Colors.mattpurple};
    z-index: 2;
  `;
};

const Stepper = ({ step = 1, end = 1 }) => {
  return (
    <div css={stepperStyle}>
      <div css={lineStyle}>
        <div css={getInnerLineStyle(step, end)} />
      </div>
      <p>{`${step} / ${end}`}</p>
    </div>
  );
};

Stepper.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Stepper;
