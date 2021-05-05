import Head from "next/head";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import mbti from "constants/type";
import { containerMixin } from "styles/_mixin";

const mainContainer = css``;

const Mbti = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div>
      <Head>
        <title>{mbti[type]} | 일루쉐어</title>
      </Head>
      <section>
        <div css={containerMixin()}>
          <div css={mainContainer} />
        </div>
      </section>
      <section />
    </div>
  );
};

export default Mbti;
