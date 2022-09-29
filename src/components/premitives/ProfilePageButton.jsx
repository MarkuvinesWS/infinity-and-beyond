import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProfilePageButton({ children }) {
  return (
    <StyledProfilePageButton className="text-style-raleway-16-px-regular" type="button">
      {children}
    </StyledProfilePageButton>
  );
}

ProfilePageButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ProfilePageButton;

const StyledProfilePageButton = styled.button`
  min-width: 267px;
  padding: 16px 32px;
  outline: none;
  border: 2px solid var(--color-black-65);
  border-radius: 62px;
  color: var(--color-black-65);
  background: transparent;
  cursor: pointer;
`;
