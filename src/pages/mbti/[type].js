import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Slider from "react-slick";
import { useRecoilState, useSetRecoilState } from "recoil";
import pageState from "states/page";
import { resultState } from "states/result";
import { convertedName } from "constants/type";
import mbtiQuestions from "constants/questions";
import Stepper from "components/mbti/Stepper";
import Question from "components/mbti/Question";
import { filterTypes, getMbtiResult } from "libs/utils";
import { containerMixin } from "styles/_mixin";

const mainContainer = css`
  padding-top: 5rem;
`;

const sliderContainer = css`
  padding-top: 1.5rem;

  & .slick-arrow {
    display: none !important;
  }
`;

const Mbti = ({ questions }) => {
  const router = useRouter();
  const setPageState = useSetRecoilState(pageState);
  const [result, setResultState] = useRecoilState(resultState);
  const [step, setStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState([
    { j: 0, p: 0 },
    { s: 0, n: 0 },
    { t: 0, f: 0 },
    { e: 0, i: 0 },
  ]);

  const sliderRef = useRef();

  const { type } = router.query;

  const sliderSettings = {
    dots: false,
    swipe: false,
    infinite: false,
  };

  const handleNextStep = ({ type: answerType }) => async () => {
    if (sliderRef.current && step < mbtiQuestions[type]?.length - 1) {
      const answer = [...userAnswer];
      answer[Math.floor(step / 3)] = {
        ...answer[Math.floor(step / 3)],
        [answerType]: userAnswer[Math.floor(step / 3)][answerType] + 1,
      };

      setUserAnswer(answer);
      setStep((prev) => prev + 1);
      sliderRef.current.slickNext();
    } else {
      const mbtiResult = getMbtiResult(filterTypes(userAnswer)).toUpperCase();
      setResultState(mbtiResult);
      router.push({
        pathname: `/result/${mbtiResult}`,
      });
    }
  };

  useEffect(() => {
    if (result.length) setResultState([]);
    setPageState("mbti");
  }, []);

  return (
    <div>
      <Head>
        <title>{convertedName[type]} | 일루쉐어</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <section css={mainContainer}>
        <div css={containerMixin()}>
          <Stepper step={step + 1} end={mbtiQuestions[type]?.length} />
          <div css={sliderContainer}>
            <Slider ref={sliderRef} {...sliderSettings} slickNext>
              <Question
                key={questions[step]?.question}
                question={questions[step]?.question}
                answers={questions[step]?.answers}
                handleNextStep={handleNextStep}
              />
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { type } = params;

  return { props: { questions: mbtiQuestions[type] } };
}

export default Mbti;
