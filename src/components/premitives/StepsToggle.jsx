import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StepPoint from './StepPoint';

function StepsToggle({ steps, onClick, activePoint }) {
  return (
    <StyledStepsToggle>
      <div className="steps-container">
        {steps.map(({ id, text }) => (
          <StepPoint
            onClick={onClick}
            index={id}
            activePoint={activePoint}
          >
            {text}
          </StepPoint>
        ))}
      </div>
    </StyledStepsToggle>
  );
}

StepsToggle.propTypes = {
  steps: PropTypes.arrayOf(PropTypes
    .objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))).isRequired,
  onClick: PropTypes.func.isRequired,
  activePoint: PropTypes.number.isRequired,
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
`;
