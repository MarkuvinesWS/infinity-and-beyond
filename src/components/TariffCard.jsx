import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TariffCardButton from './premitives/TariffCardButton';

function TariffCard({
  title,
  description,
  list,
  tariff,
}) {
  const [active, setActive] = useState(false);
  return (
    <StyledBorder active={active}>
      <StyledTariffCard onClick={() => { setActive(!active); }}>
        <h3 className="tariff-card__title text-style-raleway-titles-02">{title}</h3>
        <div className={`tariff-card__line ${active ? 'tariff-card__line_active' : ''}`} />
        <p className="tariff-card__description text-style-raleway-texts">{description}</p>
        <ul className="tariff-card__list text-style-raleway-16-px-regular">
          {list.map((listItem) => <li className="tariff-card__list-item">{listItem}</li>)}
        </ul>
        <p className="tariff-card__price-container text-style-raleway-shows-title">
          <span className={`tariff-card__price text-style-raleway-title-03 ${active ? 'tariff-card__price_active' : ''}`}>{tariff}</span>
          /month
        </p>
        <div className="tariff-card__button-container">
          <TariffCardButton active={active}>
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
};

export default TariffCard;
const StyledBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    border-top: 1px solid var(--color-black-65);
  }
  .tariff-card__line_active {
    border-top: 1px solid var(--color-roxo-100);
  }
  .tariff-card__list {
    list-style: none;
    text-align: left;
    display: flex;
    flex-flow: column nowrap;
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