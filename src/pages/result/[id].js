import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
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

  & > h1,
  & > h2 {
    margin-top: 0;
    letter-spacing: 0.1rem;
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
  margin-bottom: 2rem;
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
  margin: 0 2rem 2rem 2rem;
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
    padding: 1rem 2.5rem 1rem 2.5rem;
    font-weight: 800;
    background-color: inherit;
    border: 0.15rem solid black;
    border-radius: 1rem;
  }
`;

const Result = () => {
  const result = useRecoilValue(resultState);
  const setPageState = useSetRecoilState(pageState);

  useEffect(() => {
    setPageState("result");
  }, []);

  return (
    <div>
      <section>
        <div css={contentContainer}>
          <div css={content}>
            <h1>{result}</h1>
            <h2>{mbti[result].title}</h2>
            <figure css={figureStyle}>
              <Image
                layout="intrinsic"
                height={350}
                width={350}
                src={mbti[result].img}
              />
            </figure>
            <p css={summary}>
              &quot;평범한 것을 싫어하고 독특한 관점을 지닌 고민 상담가형
              친구&quot;
            </p>
            <div css={descriptionContainerStyle}>
              <p css={descriptionStyle}>
                뻔하고, 평범한 것을 죽기보다 싫어하는 당신! 수줍음이 많긴 하지만
                독특한 관점과 독창성이 뛰어나 대다수의 친구들에게 관심과
                부러움의 대상이 되기도 하는 사람입니다. 창의력이 뛰어난 타입으로
                함께 있는 주변 친구들에게 많은 영감을 주고, 고민이 많거나 방향을
                잃은 친구에게 항상 좋은 길잡이가 되기도 합니다. 단, 트집을 잡고
                늘어지는 성향 때문에 친구들과 대화할 때 분위기를 흩트려놓는
                경우가 있을 수 있으니 가끔은 모른 척 넘어가 주는 연습도 해두면
                좋습니다. 통찰력이 뛰어난 당신은 친구들에게 최고의 고민 상담가
                입니다.
              </p>
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
