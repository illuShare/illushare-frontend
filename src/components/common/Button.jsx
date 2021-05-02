import React from 'react';
import {css} from '@emotion/react';


const buttonStyles = ({bgColor,color,size = "md",fullSize = false}) => {

  if(fullSize) {
    return css`
      width:100%;
      height:100%;
      color: ${color};
      background-color: ${bgColor};
      font-weight: bold;
    `;
  }

  return css`
    ${size=== "sm"&& `
        height: 30px;
        width: 80%;
        font-size: 0.75rem;
    `}
    ${size=== "md"&& `
        height: 50px;
        width: 80%;
        font-size: 1.15rem;
    `}
    ${size=== "lg"&& `
        height: 70px;
        width: 80%;
        font-size: 1.3rem;
    `}
    color: ${color};
    background-color: ${bgColor};
    font-weight: bold;
  `;
}

const Button = React.forwardRef(({type,children , handleOnClick, size = "md", fullSize = false, bgColor = 'inherit', color = "white"},ref) => {
  return <button css={buttonStyles({size, fullSize, bgColor, color})} type={type} onClick={handleOnClick} ref={ref}>{children}</button>
});

export default Button;
