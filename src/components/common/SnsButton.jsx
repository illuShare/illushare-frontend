import React, { useCallback } from "react";
import { ImBlogger, ImFacebook, ImTwitter } from "react-icons/im";
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

const SnsButton = ({ type, title = "" }) => {
  const router = useRouter();

  const ShareSNS = useCallback((snsType) => {
    const currentPath = `${process.env.NEXT_PUBLIC_URL}${router.pathname}`;
    const snsUrl = {
      twitter: `http://twitter.com/intent/tweet?url=${currentPath}`,
      fackbook: `http://www.facebook.com/sharer/sharer.php?u=${currentPath}`,
      naver: `https://share.naver.com/web/shareView?url=${currentPath}&title=${title}`,
    };
    window.open(snsUrl[snsType]);
  }, []);
  return (
    <button type="button" css={SnsButtonStyle} onClick={() => ShareSNS(type)}>
      {type === "naver" && <ImBlogger />}
      {type === "facebook" && <ImFacebook />}
      {type === "twitter" && <ImTwitter />}
    </button>
  );
};

SnsButton.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default SnsButton;
