import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveStep } from '../../store/signUpSteps';

function StepPoint({
  index,
  children,
  isRecommend,
}) {
  const { activeStep } = useSelector((state) => state.steps);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <StyledStepPoint
      onClick={() => {
        dispatch(setActiveStep(index));
        navigate(`/sign-up/step${index}`);
      }}
      index={index}
      className={activeStep === index ? 'text-style-raleway-title-20-800' : 'text-style-raleway-20-px-regular'}
      activeTariff={activeStep}
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
  index: PropTypes.number.isRequired,
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
