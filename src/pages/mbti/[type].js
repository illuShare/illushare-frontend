import Head from "next/head";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Slider from "react-slick";
import mbti from "constants/type";
import { containerMixin } from "styles/_mixin";
import Stepper from "components/mbti/Stepper";
import Question from "components/mbti/Question";

const mainContainer = css``;

const Mbti = () => {
  const router = useRouter();
  const { type } = router.query;

  const sliderSettings = {
    dots: false,
    swipe: false,
  };

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
      <section>
        <div css={containerMixin()}>
          <Stepper step={1} />
          <div css={mainContainer}>
            <Slider {...sliderSettings}>
              <Question
                question="강아지를 입양하기로 한 상황 당신은?"
                answers={[
                  {
                    answer: "입양하기 전에 물건을 산다",
                    type: "j",
                  },
                  {
                    answer: "살면서 한개씩 구매한다",
                    type: "p",
                  },
                ]}
              />
            </Slider>
          </div>
        </div>
      </section>
      <section />
    </div>
  );
};

export default Mbti;
