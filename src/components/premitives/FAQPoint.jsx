import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FaqPoint({ question, text }) {
  const [active, setActive] = useState(false);
  return (
    <StyledFaqPoint
      active={active}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div className="title-container">
        <h3 className={`${active ? 'text-style-raleway-title-01 title_active' : 'text-style-raleway-20-px-regular'}`}>{question}</h3>
        <img src={`${active ? './icons/minus.png' : './icons/plus.png'}`} alt="dropMenu" />
      </div>
      {active ? <p className="text-style-raleway-20-px-regular text">{text}</p> : ''}
    </StyledFaqPoint>
  );
}

FaqPoint.propTypes = {
  question: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FaqPoint;

const StyledFaqPoint = styled.div`
  padding: 20px 24px;
  border: 1px solid var(--color-black-25);
  border-radius: ${({ active }) => (active ? '32' : '76')}px;
  color: var(--color-black-10);
  background-color:  var(${({ active }) => (active ? '--faq-gradient-active' : '--color-black-95')});
  cursor: pointer;
  &:hover {
    background: rgba(245, 245, 245, 0.1);
    transition: background-color ease .2s;
  }
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_active {
    text-transform: none;
   margin: 0 0 24px 0;
  }
`;
