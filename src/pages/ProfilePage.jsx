import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layouts/DefaultLayout';
import mock from '../mock';
import ProfileTab from '../components/profile/ProfileTab';
import ProfilePageButton from '../components/premitives/ProfilePageButton';

function ProfilePage() {
  return (
    <DefaultLayout>
      <StyledProfilePage>
        <p className="text-style-raleway-32-px-bold profile-page-text">Who is watching?</p>
        <div className="profile-page-profiles-container">
          {mock.profiles.map(({
            id,
            name,
            src,
          }) => <ProfileTab src={src} name={name} id={id} key={id} />)}
        </div>
        <div className="profile-page-buttons-container">
          <ProfilePageButton>Manage Profiles</ProfilePageButton>
          <ProfilePageButton>Create New Profiles</ProfilePageButton>
        </div>
      </StyledProfilePage>
    </DefaultLayout>
  );
}

export default ProfilePage;

const StyledProfilePage = styled.div`
  padding: 112px 0 58px 0;
  .profile-page-profiles-container {
    margin: 0 0 208px 0;
    display: flex;
    gap: 112px;
  }
  .profile-page-text {
    margin: 0 0 152px 0;
    text-align: center;
    color: white;
  }
  .profile-page-buttons-container {
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
  }
`;
