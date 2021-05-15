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
  background-color: ${Colors.white};
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <Link href="/">
        <a href="/">
          <Image src="/images/logo.png" height={90} width={90} />
        </a>
      </Link>
    </header>
  );
};

export default Header;
