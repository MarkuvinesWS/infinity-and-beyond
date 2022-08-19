import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TariffCardButton from './premitives/TariffCardButton';

function TariffCard({
  title,
  description,
  list,
  tariff,
  index,
  isRecommend,
  activeTariff,
  setActiveTariff,
}) {
  function isActive() {
    return index === activeTariff;
  }
  return (
    <StyledBorder active={isActive()}>
      <StyledTariffCard className="tariff-card" active={isActive()} onClick={() => { setActiveTariff(index); }}>
        <h3 className="tariff-card__title text-style-raleway-titles-02">{title}</h3>
        <div className={`tariff-card__line ${isActive() ? 'tariff-card__line_active' : ''}`}>
          {isRecommend
            && (
              <div className="tariff-card__recommended">
                <img src="recommended.svg" alt="star" />
                <span className="text-style-raleway-12-px-regular">Recommended</span>
              </div>
            )}
        </div>
        <p className="tariff-card__description text-style-raleway-texts">{description}</p>
        <ul className="tariff-card__list text-style-raleway-16-px-regular">
          {list.map((listItem) => <li className="tariff-card__list-item">{listItem}</li>)}
        </ul>
        <p className="tariff-card__price-container text-style-raleway-shows-title">
          <span className={`tariff-card__price text-style-raleway-title-03 ${isActive() ? 'tariff-card__price_active' : ''}`}>{tariff}</span>
          /month
        </p>
        <div className="tariff-card__button-container">
          <TariffCardButton active={isActive()}>
            Sign&nbsp;Up&nbsp;Now!
          </TariffCardButton>
        </div>
      </StyledTariffCard>
    </StyledBorder>
  );
}

TariffCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  tariff: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  activeTariff: PropTypes.number.isRequired,
  setActiveTariff: PropTypes.func.isRequired,
  isRecommend: PropTypes.bool.isRequired,
};

export default TariffCard;
const StyledBorder = styled.div`
  display: flex;
  justify-content: center;
  padding: 3px;
  width: fit-content;
  border-radius: 20px;
  background: var(${({ active }) => (active ? '--border-gradient-active' : '--border-gradient-default')})
`;

const StyledTariffCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
  text-align: center;
  padding: 36px;
  max-width: 377px;
  color: var(--color-black-10);
  border: 3px solid transparent ;
  border-radius: 20px;
  background-color: var(--color-black-95);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  .tariff-card__line {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--color-black-65);
    .tariff-card__recommended {
      display: flex;
      gap: 6px;
      padding: 4px 24px;
      border-radius: 62px;
      background-color: var(${({ active }) => (active ? '--color-roxo-100' : '--color-black-65')});
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .tariff-card__line_active {
    border-top: 1px solid var(--color-roxo-100);
  }
  .tariff-card__list {
    list-style: none;
    text-align: left;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    gap: 10px;
  }
  .tariff-card__price-container {
    align-self: center;
    display: flex;
    align-items: flex-end;
    line-height: 28px;
    color: var(--color-black-40);
    .tariff-card__price {
      line-height: 38px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      letter-spacing: -0.06em;
      transition: all .3s ease-out;
      &_active {
        color: var(--color-roxo-100);
      }
    }
  }
  .tariff-card__button-container {
    align-self: center;
  }
`;
