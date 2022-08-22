import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function StepPoint({
  index,
  children,
  activePoint,
  onClick,
  isRecommend,
}) {
  return (
    <StyledStepPoint
      onClick={() => onClick(index)}
      index={index}
      className={activePoint === index ? 'text-style-raleway-title-20-800' : 'text-style-raleway-20-px-regular'}
      activeTariff={activePoint}
    >
      {children}
      {isRecommend
        && (
          <div className="tariff-point-recommend">
            <img src="recommended.svg" alt="star" />
            <span className="text-style-raleway-12-px-regular">Recommended</span>
          </div>
        )}
    </StyledStepPoint>
  );
}

StepPoint.defaultProps = {
  isRecommend: false,
};
StepPoint.propTypes = {
  children: PropTypes.string.isRequired,
  activePoint: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isRecommend: PropTypes.bool,
};

export default StepPoint;

const StyledStepPoint = styled.div`
  text-align: center;
  width: 100%;
  padding: 16px 56px;
  background-color: var(${({ activeTariff, index }) => (activeTariff === index ? '--color-roxo-100' : 'transparent')});
  color: var(--color-black-10);
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 69px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  .tariff-point-recommend {
    pointer-events: none;
    display: flex;
    gap: 8px;
    position: absolute;
    left: 50%;
    bottom: -16px;
    transform: translateX(-50%) translateY(100%);
  }
`;
