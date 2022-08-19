import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function TariffTogglePoint({
  index,
  children,
  activeTariff,
  onClick,
  isRecommend,
}) {
  return (
    <StyledTariff
      onClick={() => onClick(index)}
      index={index}
      className={activeTariff === index ? 'text-style-raleway-shows-title' : 'text-style-raleway-20-px-regular'}
      activeTariff={activeTariff}
    >
      {children}
      {isRecommend
        && (
          <div className="tariff-point-recommend">
            <img src="recommended.svg" alt="star" />
            <span className="text-style-raleway-12-px-regular">Recommended</span>
          </div>
        )}
    </StyledTariff>
  );
}

TariffTogglePoint.propTypes = {
  children: PropTypes.string.isRequired,
  activeTariff: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isRecommend: PropTypes.bool.isRequired,
};

export default TariffTogglePoint;

const StyledTariff = styled.div`
  text-align: center;
  width: 100%;
  padding: 24px 48px;
  background-color: var(${({ activeTariff, index }) => (activeTariff === index ? '--color-roxo-100' : 'transparent')});
  color: var(--color-black-10);
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 69px;
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
