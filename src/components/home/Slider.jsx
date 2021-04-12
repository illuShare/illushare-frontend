import { useState, useEffect } from "react";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { css } from "@emotion/react";
import ItemList from "components/home/ItemList";
import { Colors } from "styles/_variables";
import { flexMixin } from "styles/_mixin";

const sliderSectionStyle = css`
  display: flex;
  height: 280px;
  margin-top: 0.85rem;
`;

const asideStyle = css`
  width: 150px;
  padding: 5px;
  background-color: ${Colors["dark-blue"]};
  color: ${Colors["white"]};
  z-index: 1;

  & p {
    margin-left: 10px;
    font-weight: 700;
  }
`;

const buttonGroupStyle = css`
  ${flexMixin({ direction: "column", alignItems: "center" })}
`;

const buttonStyle = css`
  padding: 10px;
  margin: 5px;
  border: 3px solid #87ceeb29;
  color: white;
  background-color: inherit;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:hover {
    border: 3px solid skyblue;
  }

  & svg {
    font-size: 1.2rem;
  }
`;

const Slider = ({ children, title, type, total, sliderRef }) => {
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if (page < totalPage) {
      setPage((cur) => cur + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage((cur) => cur - 1);
    }
  };

  useEffect(() => {
    if (type === "lg") setTotalPage(Math.floor(total / 4));
    if (type === "md") setTotalPage(Math.floor(total / 3));
    if (type === "sm") setTotalPage(Math.floor(total / 2));
  }, [type, total]);

  return (
    <section css={sliderSectionStyle}>
      <aside css={asideStyle}>
        <p>{title}</p>
        <div css={buttonGroupStyle}>
          <button css={buttonStyle} onClick={handleNext}>
            <ImArrowRight2 />
          </button>
          <button css={buttonStyle} onClick={handlePrev}>
            <ImArrowLeft2 />
          </button>
        </div>
      </aside>
      <ItemList sliderRef={sliderRef} page={page} type={type}>
        {children}
      </ItemList>
    </section>
  );
};

export default Slider;
