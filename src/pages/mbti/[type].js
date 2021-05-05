import Head from "next/head";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Slider from "react-slick";
import mbti from "constants/type";
import { containerMixin } from "styles/_mixin";
import Stepper from "components/mbti/Stepper";

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
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section />
    </div>
  );
};

export default Mbti;
