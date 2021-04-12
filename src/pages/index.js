import { useState, useRef, useEffect, useCallback } from "react";
import { css } from "@emotion/react";
import Head from "next/head";
import Slider from "components/home/Slider";
import { containerMixin, flexMixin } from "styles/_mixin";
import { Colors } from "styles/_variables";
import Item from "components/home/Item";
const coverSectionStyle = css`
  height: 480px;
`;

const mainCoverStyle = css`
  ${flexMixin({ direction: "row" })}
  padding: 1.8rem;
  height: 360px;
  background-color: ${Colors.purple};
  position: relative;
`;

const colStyle = css`
  position: relative;
  flex: 1;
`;

const bannerStyle = css`
  ${flexMixin({
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
  })}
  height: 80px;
  background-color: #5f5f5f;

  & h5 {
    margin: 0;
    font-size: 1.5rem;
    color: #e3e3e3;
  }
`;

const titleWrapperStyle = css`
  ${flexMixin({ direction: "column", justifyContent: "center" })}
`;

const subTitleStyle = css`
  max-width: 110px;
  color: #7c98d6;
  position: absolute;
  top: 20%;
  word-break: keep-all;
`;

const mainTitleStyle = css`
  max-width: 150px;
  font-size: 2.8rem;
  position: absolute;
  top: 50px;
  word-break: keep-all;
`;

const shareButton = css`
  width: 50px;
  height: 50px;
  font-size: 0.6rem;
  font-weight: bold;
  color: ${Colors.white};
  background-color: ${Colors.blue};
  border: none;
  border-radius: 50%;
  position: absolute;
  right: 0;
  outline: none;
  white-space: pre;
  cursor: pointer;
`;

export default function Home() {
  const [type, setType] = useState("lg");
  const sliderRef = useRef(null);

  const handleResize = useCallback(() => {
    const { innerWidth } = window;

    if (innerWidth <= 375) {
      setType("sm");
    } else if (innerWidth <= 526) {
      setType("md");
    } else {
      setType("lg");
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>일루쉐어</title>
      </Head>
      <section css={coverSectionStyle}>
        <div css={containerMixin()}>
          <div css={mainCoverStyle}>
            <div css={colStyle}>
              <div css={titleWrapperStyle}>
                <h3 css={subTitleStyle}>심심할때 재미로 하는</h3>
                <h1 css={mainTitleStyle}>심리 테스트</h1>
              </div>
            </div>
            <div css={colStyle}>
              <button css={shareButton}>공유하기</button>
            </div>
          </div>
          <div css={bannerStyle}>
            <h5>광고 배너</h5>
          </div>
        </div>
      </section>
      <section css={containerMixin()}>
        <Slider
          title={"인기 콘텐츠"}
          type={type}
          total={11}
          sliderRef={sliderRef}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
            <Item
              key={`popular_${item}`}
              title={item}
              description={"내가 동물이 였다면 어떤 동물이 였을까? MBTI 확인"}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
}
