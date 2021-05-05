import { useEffect, useCallback } from "react";
import { css } from "@emotion/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { deviceState } from "states/device";
import Button from "components/common/Button";
import ButtonGroup from "components/common/ButtonGroup";
import SnsButton from "components/common/SnsButton";
import { containerMixin, flexMixin } from "styles/_mixin";
import { Colors } from "styles/_variables";
import Stat from "components/common/Stat";

const mainCoverContainerStyle = css`
  ${flexMixin({ direction: "row" })}
  padding: 1.8rem;
  height: 400px;
  background-color: ${Colors.purple};
  position: relative;
`;

const mainCoverStyle = css`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1024px;
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
  ${flexMixin({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  text-shadow: 0px 3px 4px white;
`;

const subTitleStyle = css`
  top: 20%;
  word-break: keep-all;
`;

const mainTitleStyle = css`
  font-size: 3rem;
  top: 50px;
  word-break: keep-all;
`;

const mainCoverBgStyle = css`
  background-image: url("images/dog.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
`;

const mainImageStyle = css`
  width: 350px;
  height: 100%;
  position: relative;
`;

const buttonContainer = css`
  ${flexMixin({
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
  })}
  height: 80px;
  background-color: #e2ddff;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`;

const snsContainer = css`
  ${flexMixin({
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
  })}
  min-height: 80px;
  padding-bottom: 1rem;
  background-color: #e2ddff;
`;

const snsContentWrapper = css`
  display: flex;
  padding: 10px;
  width: 80%;

  & > p {
    display: inline-block;
    position: relative;
    font-weight: bold;

    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 100%;
      background-color: black;
      margin-left: 10px;
    }
  }

  & .button-group {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;

    & button {
      margin: 5px;
    }
  }
`;

const infoArea = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 500px;
  background-color: #292929;
  color: white;

  & .area-title {
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      top: 50%;
      right: 100%;
      margin-right: 1rem;
      background-color: white;
    }

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      top: 50%;
      left: 100%;
      margin-left: 1rem;
      background-color: white;
    }
  }
`;

const StatsContainer = css`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
`;

export default function Home() {
  const [device, setDeviceState] = useRecoilState(deviceState);
  const handleResize = useCallback(() => {
    const { innerWidth } = window;

    if (innerWidth <= 768) {
      setDeviceState("mobile");
    } else {
      setDeviceState("web");
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
      <section>
        <div css={containerMixin()}>
          <div css={mainCoverContainerStyle}>
            <div css={mainCoverStyle}>
              <div css={colStyle}>
                {device === "mobile" && <div css={mainCoverBgStyle} />}
                <div css={titleWrapperStyle}>
                  <h3 css={subTitleStyle}>
                    나는 어떤 강아지의 성격과 비슷할까?
                  </h3>
                  <h1 css={mainTitleStyle}>&apos;강아지 MBTI&apos;</h1>
                </div>
              </div>
              {device === "web" && (
                <div css={colStyle}>
                  <div css={mainImageStyle}>
                    <Image layout="fill" src="/images/dog.png" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div css={buttonContainer}>
            <Button type="button" bgColor="#a3bfff">
              <Link href="/mbti/dog">
                <a href="/">테스트 시작</a>
              </Link>
            </Button>
          </div>
          <div css={snsContainer}>
            <div css={snsContentWrapper}>
              <p>공유하기</p>
              <ButtonGroup className="button-group">
                <SnsButton type="naver" title="강아지 MBTI | 일루쉐어" />
                <SnsButton type="facebook" />
                <SnsButton type="twitter" />
              </ButtonGroup>
            </div>
          </div>
          <div css={bannerStyle}>
            <h5>광고 배너</h5>
          </div>
        </div>
      </section>
      <section css={containerMixin()}>
        <div css={infoArea}>
          <p className="area-title">많이 나온 유형</p>
          <ul css={StatsContainer}>
            <Stat rank={1} type="INTJ" name="용감한 치와와" />
            <Stat rank={2} type="INTJ" name="용감한 치와와" />
            <Stat rank={3} type="INTJ" name="용감한 치와와" />
          </ul>
          <Button type="button" bgColor="#a3bfff">
            모든 유형 보기
          </Button>
        </div>
      </section>
    </div>
  );
}
