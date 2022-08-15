import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ContentCard({ src, tagText }) {
  const [active, setActive] = useState(false);
  return (
    <StyledContentCard
      active={active}
      onMouseOver={() => { setActive(true); }}
      onMouseLeave={() => { setActive(false); }}
    >
      <StyledBorder active={active}>
        <img className="content-card__image" src={src} alt="content" />
        <div className="content-card__tag">
          <img src="recommended.svg" alt="star" />
          <span className="content-card__tag-text text-style-raleway-12-px-regular">{tagText}</span>
        </div>
        {active ? <img className="content-card__play" src="./image/playButton.png" alt="play" /> : ''}
      </StyledBorder>
    </StyledContentCard>
  );
}

ContentCard.propTypes = {
  src: PropTypes.string.isRequired,
  tagText: PropTypes.string.isRequired,
};

export default ContentCard;

const StyledContentCard = styled.div`
  width: fit-content;
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  transform: scale(${({ active }) => (active ? '110%' : '100%')});
  z-index: ${({ active }) => (active ? '10' : '0')} ;
  transition: all ease .3s;
  cursor: pointer;
`;

const StyledBorder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: fit-content;
  border-radius: 20px;
  background: var(${({ active }) => (active ? '--border-gradient-active' : '--border-gradient-default')});
  .content-card__image {
    border-radius: 20px;
    width: 295px;
    height: 398px;
  }
  .content-card__play {
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
  }
  .content-card__tag {
    display: flex;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 62px;
    background-color: var(${({ active }) => (active ? '--color-roxo-100' : '--color-black-40')});
    position: absolute;
    left: 14px;
    bottom: 16px;
  }
  .content-card__tag-text {
    color: var(--color-black-10);
  }
`;
