import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Slider from "react-slick";
import { useRecoilState, useSetRecoilState } from "recoil";
import pageState from "states/page";
import { resultState } from "states/result";
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

const Mbti = ({ questions }) => {
  const router = useRouter();
  const setPageState = useSetRecoilState(pageState);
  const [result, setResultState] = useRecoilState(resultState);
  const [step, setStep] = useState(1);
  const [userAnswer, setUserAnswer] = useState([]);

  const sliderRef = useRef();

  const { type } = router.query;

  const sliderSettings = {
    dots: false,
    swipe: false,
    infinite: false,
  };

  const handleNextStep = ({ type: answerType }) => async () => {
    if (sliderRef.current && step < mbtiQuestions[type]?.length) {
      setStep((prev) => prev + 1);
      setUserAnswer((prev) => [...prev, answerType]);
      sliderRef.current.slickNext();
    } else {
      setResultState([...userAnswer, answerType]);
      router.push({
        pathname: "/result/pZoIz9WqZFw98w",
      });
    }
    // 데이터 처리
  };

  useEffect(() => {
    if (result.length) setResultState([]);

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
              <Question
                key={questions[step - 1]?.question}
                question={questions[step - 1]?.question}
                answers={questions[step - 1]?.answers}
                handleNextStep={handleNextStep}
              />
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(mbti).map((type) => ({
    params: { type },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { type } = params;

  return { props: { questions: mbtiQuestions[type] } };
}

export default Mbti;
