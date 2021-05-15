import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Slider from "react-slick";
import { useSetRecoilState } from "recoil";
import pageState from "states/page";
import mbti from "constants/type";
import mbtiQuestions from "constants/questions";
import Stepper from "components/mbti/Stepper";
import Question from "components/mbti/Question";
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

const Mbti = () => {
  const router = useRouter();
  const setPageState = useSetRecoilState(pageState);
  const [step, setStep] = useState(1);
  const [userAnswer, setUserAnswer] = useState([]);

  const sliderRef = useRef();

  const { type } = router.query;

  const sliderSettings = {
    dots: false,
    swipe: false,
    infinite: false,
  };

  const handleNextStep = (answer) => () => {
    if (sliderRef.current && step < mbtiQuestions[type]?.length) {
      setStep((prev) => prev + 1);
      setUserAnswer((prev) => [...prev, answer]);
      sliderRef.current.slickNext();
    } else {
      setUserAnswer((prev) => [...prev, answer]);
    }
    // 데이터 처리
  };

  useEffect(() => {
    setPageState("mbti");
  }, []);

  return (
    <div>
      <Head>
        <title>{mbti[type]} | 일루쉐어</title>
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
          <Stepper step={step} end={mbtiQuestions[type]?.length} />
          <div css={sliderContainer}>
            <Slider ref={sliderRef} {...sliderSettings} slickNext>
              {mbtiQuestions[type]?.map(({ question, answers }) => (
                <Question
                  question={question}
                  answers={answers}
                  handleNextStep={handleNextStep}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section />
    </div>
  );
};

export default Mbti;
