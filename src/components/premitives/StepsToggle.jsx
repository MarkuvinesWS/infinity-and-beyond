import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import StepPoint from './StepPoint';
import config from '../../config';

function StepsToggle({
  className,
}) {
  const {
    activeStep,
  } = useSelector((state) => state.steps);
  return (
    <StyledStepsToggle className={className}>
      <div className="steps-container">
        {config.registerSteps.map(({
          id,
          text,
        }) => (
          <StepPoint
            index={id}
            activePoint={activeStep}
          >
            {text}
          </StepPoint>
        ))}
      </div>
    </StyledStepsToggle>
  );
}

StepsToggle.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StepsToggle;

const StyledStepsToggle = styled.div`
  position: relative;
  max-width: fit-content;
  background-color: var(--color-black-95-06);
  border-radius: 69px;

  .steps-container {
    width: 670px;
    display: flex;
    flex-flow: row nowrap;
  }

  .steps-link {
    text-decoration: none;
  }
`;
