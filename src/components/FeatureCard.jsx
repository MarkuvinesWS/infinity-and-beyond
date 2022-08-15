import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FeatureCard({ src, title, description }) {
  const [active, setActive] = useState(false);
  return (
    <StyledFeatureCard>
      <StyledBorder
        active={active}
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img className="feature-card__card-image" src={src} alt="space" />
      </StyledBorder>
      <h3 className="feature-card__title text-style-raleway-shows-title">{title}</h3>
      <p className="feature-card__description text-style-raleway-16-px-regular">{description}</p>
    </StyledFeatureCard>
  );
}

FeatureCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;

const StyledFeatureCard = styled.div`
  max-width: 400px;
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  .feature-card__title {
    color: var(--color-black-10);
  }
  .feature-card__description {
    color: var(--color-black-10);
  }
`;

const StyledBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: fit-content;
  border-radius: 20px;
  background: var(${({ active }) => (active ? '--border-gradient-active' : '--border-gradient-default')});
  cursor: pointer;

  .feature-card__card-image {
    border-radius: 20px;
    width: 400px;
    height: 256px;
    object-fit: cover;
    object-position: center;
  }
`;
