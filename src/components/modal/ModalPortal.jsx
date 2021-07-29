import { css } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const containerStyle = css`
  display: flex;
  align-items: center;
  justify-contents: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 10;
  }
`;

const ModalPortal = ({ children, closePortal }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.querySelector("#root-modal");
      ref.current = dom;
    }
  }, []);

  if (ref && ref.current && mounted) {
    return createPortal(
      <div css={containerStyle}>
        <div
          className="modal-background"
          role="presentation"
          onClick={closePortal}
        />
        {children}
      </div>,
      ref.current,
    );
  }

  return null;
};

export default ModalPortal;
