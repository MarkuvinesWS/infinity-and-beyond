import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
  return (
    <StyledDefaultLayout>
      <img className="default-layout-logo" src="/icons/logo.svg" alt="logo" />
      <div className="_container default-layout-container">
        {children}
      </div>
      <footer className="default-layout-footer">
        <div className="default-layout-footer-container">
          <div className="default-layout-site-map">
            <a className="default-layout-footer-link text-style-raleway-16-px-regular" href="/">Contact Us</a>
            <a className="default-layout-footer-link text-style-raleway-16-px-regular" href="/">Terms of Use</a>
            <a className="default-layout-footer-link text-style-raleway-16-px-regular" href="/">Privacy</a>
            <a className="default-layout-footer-link text-style-raleway-16-px-regular" href="/">Need Help?</a>
            <select className="footer-select">
              <option className="footer-option" value="en">English</option>
              <option className="footer-option" value="ru">Russian</option>
            </select>
          </div>
          <div className="default-layout-footer-copyright text-style-raleway-12-px-regular">
            © 2022 Infinity & Beyond, LLC. All rights reserved to Rodrigo Oliveira Santos.
          </div>
        </div>
      </footer>
    </StyledDefaultLayout>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DefaultLayout;

const StyledDefaultLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  background: linear-gradient(117.98deg, #1A1A1A 14.77%, #1D1056 117.86%);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%);
  }
  .default-layout-container {
    flex-grow: 1;
  }
  .default-layout-logo {
    padding: 48px 0 0 0;
    position: relative;
    display: block;
    width: 282px;
    margin: 0 auto;
  }
  
  .default-layout-footer {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.5;
      background: var(--color-black-95);
    }
  }
  .default-layout-footer-container {
    position: relative;
    z-index: 1;
    padding: 16px 0 28px 0;
    max-width: 820px;
    margin: 0 auto;
  }
  .default-layout-site-map {
    margin: 0 0 24px 0;
    display: flex;
    gap: 80px;
  }
  .default-layout-footer-copyright {
    color: var(--color-black-40);
    text-align: center;
  }
  .default-layout-footer-link {
    color: var(--color-black-40);
    :hover {
      color: var(--color-black-10);
    }
  }
`;
