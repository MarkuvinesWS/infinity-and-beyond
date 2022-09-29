import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProfileTab({ src, name, id }) {
  return (
    <StyledProfile to={`${id}`}>
      <div className="profile-image-container">
        <img className="profile-image" src={src} alt="profile_image" />
      </div>
      <span className="profile-name">{name}</span>
    </StyledProfile>
  );
}

export default ProfileTab;

ProfileTab.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const StyledProfile = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 36px;
  max-width: 144px;
  transition: all .2s linear;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
  .profile-image-container {
    overflow: hidden;
    border-radius: 100%;
    border: 4px solid #595959;
    width: 100%;
    .profile-image {
      display: block;
      width: 100%;
    }
  }
`;
