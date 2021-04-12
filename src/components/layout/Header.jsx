import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { Colors } from "styles/_variables";

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 70px;
  width: 100%;
  backgroun-color: ${Colors.white};
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <Link href="/">
        <a>
          <Image src="/images/logo.jpeg" height={70} width={70} />
        </a>
      </Link>
    </header>
  );
};

export default Header;
