import { css } from "@emotion/react";
import Button from "components/common/Button";
import PropTypes from "prop-types";
import { flexMixin } from "styles/_mixin";

const questionStyle = css`
  padding-bottom: 1.5rem;
  margin: 0 0 1rem 0;

  & .question {
    ${flexMixin({
      direction: "row",
      alignItems: "center",
      justifyContent: "center",
    })}
    padding: 0 2rem;
    margin-bottom: 2rem;
    height: 100px;
    &__text {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-align: center;
    }
  }

  & .answers {
    ${flexMixin({
      direction: "column",
      alignItems: "center",
      justifyContent: "center",
    })}

    & .answer {
      ${flexMixin({
        direction: "row",
        alignItems: "center",
        justifyContent: "center",
      })}
      width: 100%;
      margin-bottom: 1rem;

      &__button {
        border-radius: 0.8rem;
      }
    }
  }
`;

const Question = ({ question, answers }) => {
  return (
    <div css={questionStyle}>
      <div className="question">
        <p className="question__text">{question}</p>
      </div>
      <ul className="answers">
        {answers.map(({ answer }) => (
          <li key={`answer_${answer}`} className="answer">
            <Button className="answer__button" color="#fff" bgColor="#cca15a">
              {answer}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

export default Question;
