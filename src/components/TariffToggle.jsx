import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import TariffTogglePoint from './premitives/TariffTogglePoint';
import { setActiveTariff } from '../store/tariffs';

function TariffToggle() {
  const { tariffsList } = useSelector((state) => state.tariffs);
  const dispatch = useDispatch();
  return (
    <StyledTariffToggle>
      <div className="tariffs-container">
        {tariffsList.map(({ id, name, isRecommend }, index) => (
          <TariffTogglePoint
            key={id}
            isRecommend={isRecommend}
            onClick={() => dispatch(setActiveTariff(index))}
            index={index}
            className="tariff text-style-raleway-20-px-regular"
          >
            {name}
          </TariffTogglePoint>
        ))}
      </div>
    </StyledTariffToggle>
  );
}

export default TariffToggle;

const StyledTariffToggle = styled.div`
  position: relative;
  max-width: fit-content;
  background-color: var(--color-black-95-06);
  border-radius: 69px;
  .tariffs-container {
    width: 670px;
    display: flex;
    flex-flow: row nowrap;
  }
`;
