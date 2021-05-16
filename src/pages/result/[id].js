import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";
import useSWR from "swr";
import { getMBTIResult } from "apis/mbti";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import pageState from "states/page";
import { containerMixin, flexMixin } from "styles/_mixin";
import ButtonGroup from "components/common/ButtonGroup";
import SnsButton from "components/common/SnsButton";
import { Colors } from "styles/_variables";

const mainContainer = css`
  padding-top: 2.5rem;
`;

const contentContainer = css`
  ${flexMixin({
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
  margin-bottom: 1rem;

  & > h1,
  & > h2 {
    margin-top: 0.5rem;
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
  text-decoration-line: underline;
  color: rgb(79, 79, 79);
`;

const Result = () => {
  const router = useRouter();
  const { id } = router.query;
  const setPageState = useSetRecoilState(pageState);

  // const { data } = useSWR("/api/result", getMBTIResult(id));

  useEffect(() => {
    setPageState("result");
  }, []);

  return (
    <div>
      <section css={mainContainer}>
        <div css={containerMixin()}>
          <div css={contentContainer}>
            <h1>INTP</h1>
            <h2>용감한 치와와</h2>
            <figure css={figureStyle}>
              <Image
                layout="intrinsic"
                height={350}
                width={350}
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80 332w"
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
