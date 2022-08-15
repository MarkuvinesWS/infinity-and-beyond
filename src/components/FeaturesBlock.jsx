import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FeatureCard from './FeatureCard';

function FeaturesBlock({ features }) {
  return (
    <StyledFeaturesBlock>
      {features.map(({ src, title, description }) => (
        <FeatureCard
          src={src}
          title={title}
          description={description}
        />
      ))}
    </StyledFeaturesBlock>
  );
}

FeaturesBlock.propTypes = {
  features: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default FeaturesBlock;

const StyledFeaturesBlock = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
