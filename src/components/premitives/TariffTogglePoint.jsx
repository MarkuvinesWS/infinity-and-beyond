import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function TariffTogglePoint({
  index,
  children,
  activeTariff,
  onClick,
}) {
  return (
    <StyledTariff
      onClick={() => onClick(index)}
      index={index}
      className={activeTariff === index ? 'text-style-raleway-shows-title' : 'text-style-raleway-20-px-regular'}
      activeTariff={activeTariff}
    >
      {children}
    </StyledTariff>
  );
}

TariffTogglePoint.propTypes = {
  children: PropTypes.string.isRequired,
  activeTariff: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
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
`;
