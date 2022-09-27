import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveStep } from '../../store/signUpSteps';

function TariffCardButton({ children, active }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <StyledButton
      onClick={() => {
        navigate('/sign-up/step2');
        dispatch(setActiveStep(2));
      }}
      active={active}
      className="text-style-raleway-title-01"
      type="button"
    >
      {children}
    </StyledButton>
  );
}

TariffCardButton.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default TariffCardButton;

const StyledButton = styled.div`
  padding: 14px 36px;
  width: fit-content;
  height: fit-content;
  background: var(${({ active }) => (active ? '--color-roxo-100' : '--color-black-65')});
  border-radius: 63px;
  color: var(--color-black-10);
  transition: all .3s ease-out;
`;
