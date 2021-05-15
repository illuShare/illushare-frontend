import { useRouter } from "next/router";
import Link from "next/link";
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { resultState } from "states/result";
import { containerMixin, flexMixin } from "styles/_mixin";

const mainContainer = css`
  padding-top: 5rem;
`;

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
  const result = useRecoilValue(resultState);

  return (
    <div>
      <section css={mainContainer}>
        <div css={containerMixin()}>
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
