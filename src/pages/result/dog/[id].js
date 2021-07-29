import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import pageState from "states/page";
import ButtonGroup from "components/common/ButtonGroup";
import SnsButton from "components/common/SnsButton";
import { Colors } from "styles/_variables";
import { containerMixin, flexMixin } from "styles/_mixin";
import { resultState } from "states/result";
import { mbti } from "constants/result";

const contentContainer = css`
  ${containerMixin()};
  padding: 2.5rem 1.5rem 1rem 1.5rem;
  background-color: ${Colors.yellow};
`;

const content = css`
  ${flexMixin({
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
  padding-top: 2rem;
  margin-bottom: 1rem;
  border: 0.35rem solid rgba(0, 0, 0, 0.85);
  border-radius: 1rem;
  background-color: ${Colors.white};

  & > h1 {
    margin: 0;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }

  & > p {
    margin-top: 0;
  }

  & .sns-container {
    ${flexMixin({
      direction: "row",
      alignItems: "center",
      justifyContent: "space-between",
    })}
    margin: 0.8rem 0;

    & button {
      margin: 0 0.5rem;
    }
  }
`;

const figureStyle = css`
  margin-bottom: 0;
`;

const mbtiTypeStyle = css`
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: ${Colors["gray-900"]};
  color: ${Colors.white};
`;

const descriptionContainerStyle = css`
  ${flexMixin({
    direction: "column",
    alignItems: "center",
    justifyContent: "space-between",
  })}
  margin-bottom: 1rem;
  padding: 1rem;
  width: 90%;
  background-color: #cca15a;
  color: ${Colors.white};
  line-height: 1.65rem;
  word-spacing: 0.15rem;
  border-radius: 1.25rem;
`;

const summary = css`
  margin: 0 2rem 1rem 2rem;
  text-align: center;
`;

const descriptionStyle = css`
  margin: 0;
`;

const subTypeContainer = css``;

const linkContainer = css`
  ${flexMixin({
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
  })}
  color: rgb(79, 79, 79);

  & > a {
    padding: 1rem 2rem 1rem 2rem;
    font-weight: 800;
    background-color: inherit;
    border: 0.2rem solid black;
    border-radius: 1rem;
  }
`;

const Result = () => {
  const router = useRouter();
  const [result, setResult] = useRecoilState(resultState);
  const setPageState = useSetRecoilState(pageState);

  const { id } = router.query;

  useEffect(() => {
    setPageState("result");
  }, []);

  useEffect(() => {
    setResult(id);

    return () => {
      setResult("");
    };
  }, [id]);

  if (!result) return null;

  return (
    <div>
      <section>
        <div css={contentContainer}>
          <div css={content}>
            <h1 css={mbtiTypeStyle}>
              {result}: {mbti[result].name}
            </h1>
            <figure css={figureStyle}>
              <Image
                layout="intrinsic"
                height={350}
                width={350}
                src={mbti[result].img}
              />
            </figure>
            <p css={summary}>{mbti[result].summary}</p>
            <div css={descriptionContainerStyle}>
              <p css={descriptionStyle}>{mbti[result].description}</p>
            </div>
            <div css={subTypeContainer}>
              <h4>나랑 잘 맞는 유형은?</h4>
            </div>
            <ButtonGroup className="sns-container">
              <SnsButton type="facebook" />
              <SnsButton type="twitter" />
              <SnsButton type="share" />
            </ButtonGroup>
          </div>
          <div css={linkContainer}>
            <Link href="/">
              <a href="/">다시 테스트하기</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;
