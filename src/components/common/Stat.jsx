import {css} from '@emotion/react';

const StatContainer = css`
  width: 20%;
  margin: 1rem;
`;

const StatInfo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 10%;
  background-color: #505050;
 
  & > p {
    margin: 0 0 0.5rem 0;
    padding: 8px 0;
  }

  & .lank {
    margin-top: 0.8rem;
    padding: 0 0.2rem;
    width: 2.5rem;
    font-weight: bold;
    color: white;
    background-color: #cca15a;
    text-align: center;
    border-radius: 15%;
  }

  & .type {
    margin-bottom: 0.25rem;
    font-size: 0.8rem;
  }

  & .name {
    margin-bottom: 0.8rem;
    max-width: 120px;
    font-weight: 500;
    text-align: center;
    line-height: 1.25;
  }
`;

const Stat = () => {
  return (
  <li css={StatContainer}>
    <div css={StatInfo}>
      <p className="lank">n위</p>
      <p className="type">INTJ</p>
      <p className="name">
        용감한 치와와
      </p>
    </div>
  </li>
  );
}

export default Stat;
