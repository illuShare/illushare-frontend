import { css } from "@emotion/react";
import PropTypes from "prop-types";

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

  & .rank {
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

const Stat = ({ rank, type, name }) => {
  return (
    <li css={StatContainer}>
      <div css={StatInfo}>
        <p className="rank">{`${rank}위`}</p>
        <p className="type">{type}</p>
        <p className="name">{name}</p>
      </div>
    </li>
  );
};

Stat.propTypes = {
  rank: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Stat;
