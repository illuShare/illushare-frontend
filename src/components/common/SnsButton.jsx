import React, { useCallback, useRef } from "react";
import { ImBlogger, ImFacebook, ImTwitter, ImShare2 } from "react-icons/im";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const SnsButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 2px solid #a3bfff;
  border-radius: 50%;
  background-color: white;
`;

const TextAreaStyle = css`
  position: absolute;
  width: 0px;
  height: 0px;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

const SnsButton = ({ type, title = "" }) => {
  const router = useRouter();
  const copyRef = useRef();

  const ShareSNS = useCallback((snsType) => {
    if (snsType === "share") {
      copyRef.current.select();
      document.execCommand("copy");
    } else {
      const currentPath = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`;
      const snsUrl = {
        twitter: `http://twitter.com/intent/tweet?url=${currentPath}`,
        fackbook: `http://www.facebook.com/sharer/sharer.php?u=${currentPath}`,
        naver: `https://share.naver.com/web/shareView?url=${currentPath}&title=${title}`,
      };
      window.open(snsUrl[snsType]);
    }
  }, []);

  return (
    <>
      <button type="button" css={SnsButtonStyle} onClick={() => ShareSNS(type)}>
        {type === "naver" && <ImBlogger />}
        {type === "facebook" && <ImFacebook />}
        {type === "twitter" && <ImTwitter />}
        {type === "share" && <ImShare2 />}
      </button>
      {type === "share" && (
        <form>
          <textarea
            css={TextAreaStyle}
            ref={copyRef}
            value={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
            readOnly
          />
        </form>
      )}
    </>
  );
};

SnsButton.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default SnsButton;
