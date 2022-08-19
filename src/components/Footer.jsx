import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter>
      <div className="_container footer-container">
        <img className="footer-logo" src="./icons/logo.svg" alt="logo" />
        <div className="footer-navigation">
          <ul className="footer-list">
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Audio Description</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Media Center</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Cookies Preferences</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Devices</a></li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Gift Cards</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Jobs Information</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Corporate Information</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Legal Notices</a></li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Contact Us</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Terms of Use</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Privacy</a></li>
            <li className="footer-item"><a className="footer-link text-style-raleway-16-px-regular" href="/">Help Center</a></li>
          </ul>
          <div className="footer-lang-social">
            <select className="footer-select">
              <option className="footer-option" value="en">English</option>
              <option className="footer-option" value="ru">Russian</option>
            </select>
            <div className="footer-socials">
              <a href="/">
                <svg className="footer-social-icon">
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
              <a href="/">
                <svg className="footer-social-icon">
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
              <a href="/">
                <svg className="footer-social-icon">
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
              <a href="/">
                <svg className="footer-social-icon">
                  <use xlinkHref="#youtube" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-line" />
        <p className="footer-copyright text-style-raleway-16-px-regular">© 2022 Infinity & Beyond, LLC. All rights reserved to Rodrigo Oliveira Santos.</p>
      </div>
      <svg display="none">
        <symbol id="facebook" viewBox="0 0 40 41">
          <path d="M22.3283 35.2829V21.6229H26.9366L27.6216 16.2745H22.3283V12.8679C22.3283 11.3245 22.7583 10.2679 24.9733 10.2679H27.78V5.49955C26.4144 5.3532 25.0417 5.28253 23.6683 5.28788C19.595 5.28788 16.7983 7.77455 16.7983 12.3395V16.2645H12.22V21.6129H16.8083V35.2829H22.3283Z" />
        </symbol>
        <symbol id="instagram" viewBox="0 0 40 41">
          <path d="M19.9999 12.2766C15.5663 12.2766 11.9882 15.8547 11.9882 20.2883C11.9882 24.7219 15.5663 28.3 19.9999 28.3C24.4335 28.3 28.0117 24.7219 28.0117 20.2883C28.0117 15.8547 24.4335 12.2766 19.9999 12.2766ZM19.9999 25.4953C17.1328 25.4953 14.7929 23.1555 14.7929 20.2883C14.7929 17.4211 17.1328 15.0812 19.9999 15.0812C22.8671 15.0812 25.207 17.4211 25.207 20.2883C25.207 23.1555 22.8671 25.4953 19.9999 25.4953ZM28.3398 10.0812C27.3046 10.0812 26.4687 10.9172 26.4687 11.9523C26.4687 12.9875 27.3046 13.8234 28.3398 13.8234C29.3749 13.8234 30.2109 12.9914 30.2109 11.9523C30.2112 11.7065 30.163 11.4631 30.0691 11.2359C29.9752 11.0088 29.8373 10.8024 29.6635 10.6286C29.4897 10.4548 29.2833 10.317 29.0562 10.223C28.829 10.1291 28.5856 10.0809 28.3398 10.0812ZM35.6171 20.2883C35.6171 18.132 35.6367 15.9953 35.5156 13.843C35.3945 11.343 34.8242 9.12421 32.996 7.29608C31.164 5.46405 28.9492 4.89765 26.4492 4.77655C24.2929 4.65546 22.1562 4.67499 20.0038 4.67499C17.8476 4.67499 15.7109 4.65546 13.5585 4.77655C11.0585 4.89765 8.83979 5.46796 7.01166 7.29608C5.17963 9.12811 4.61322 11.343 4.49213 13.843C4.37103 15.9992 4.39057 18.1359 4.39057 20.2883C4.39057 22.4406 4.37103 24.5812 4.49213 26.7336C4.61322 29.2336 5.18353 31.4523 7.01166 33.2805C8.84369 35.1125 11.0585 35.6789 13.5585 35.8C15.7148 35.9211 17.8515 35.9016 20.0038 35.9016C22.1601 35.9016 24.2968 35.9211 26.4492 35.8C28.9492 35.6789 31.1679 35.1086 32.996 33.2805C34.8281 31.4484 35.3945 29.2336 35.5156 26.7336C35.6406 24.5812 35.6171 22.4445 35.6171 20.2883ZM32.1796 29.4992C31.8945 30.2101 31.5507 30.7414 30.9999 31.2883C30.4492 31.8391 29.9218 32.1828 29.2109 32.468C27.1562 33.2844 22.2773 33.1008 19.9999 33.1008C17.7226 33.1008 12.8398 33.2844 10.7851 32.4719C10.0742 32.1867 9.54291 31.843 8.99604 31.2922C8.44525 30.7414 8.1015 30.2141 7.81635 29.5031C7.00385 27.4445 7.18744 22.5656 7.18744 20.2883C7.18744 18.0109 7.00385 13.1281 7.81635 11.0734C8.1015 10.3625 8.44525 9.83124 8.99604 9.28437C9.54682 8.73749 10.0742 8.38983 10.7851 8.10468C12.8398 7.29218 17.7226 7.47577 19.9999 7.47577C22.2773 7.47577 27.1601 7.29218 29.2148 8.10468C29.9257 8.38983 30.457 8.73358 31.0038 9.28437C31.5546 9.83515 31.8984 10.3625 32.1835 11.0734C32.996 13.1281 32.8124 18.0109 32.8124 20.2883C32.8124 22.5656 32.996 27.4445 32.1796 29.4992Z" />
        </symbol>
        <symbol id="twitter" viewBox="0 0 32 33">
          <path d="M31.5239 6.87053C30.4106 7.36386 29.2146 7.6972 27.9573 7.84786C29.2546 7.07159 30.2252 5.84982 30.6879 4.41053C29.4691 5.13452 28.1351 5.64412 26.7439 5.9172C25.8084 4.91835 24.5693 4.2563 23.219 4.03383C21.8687 3.81136 20.4827 4.04092 19.2763 4.68687C18.0698 5.33282 17.1103 6.35901 16.5468 7.60613C15.9833 8.85326 15.8473 10.2515 16.1599 11.5839C13.6902 11.4599 11.2741 10.8179 9.0685 9.69974C6.8629 8.58154 4.91706 7.01208 3.35727 5.0932C2.82393 6.0132 2.51727 7.07986 2.51727 8.21586C2.51667 9.23852 2.76851 10.2455 3.25044 11.1475C3.73237 12.0495 4.42948 12.8186 5.27993 13.3865C4.29364 13.3551 3.3291 13.0886 2.4666 12.6092V12.6892C2.4665 14.1235 2.96264 15.5137 3.87084 16.6239C4.77904 17.734 6.04336 18.4958 7.44927 18.7799C6.53431 19.0275 5.57505 19.064 4.64393 18.8865C5.0406 20.1207 5.81326 21.1999 6.85376 21.9731C7.89425 22.7463 9.15049 23.1748 10.4466 23.1985C8.24638 24.9257 5.52912 25.8626 2.73193 25.8585C2.23644 25.8587 1.74137 25.8297 1.24927 25.7719C4.08857 27.5974 7.39372 28.5663 10.7693 28.5625C22.1959 28.5625 28.4426 19.0985 28.4426 10.8905C28.4426 10.6239 28.4359 10.3545 28.4239 10.0879C29.639 9.20916 30.6878 8.12106 31.5213 6.87453L31.5239 6.87053Z" />
        </symbol>
        <symbol id="youtube" viewBox="0 0 40 41">
          <path d="M36.7695 11.8545C36.5703 11.1125 36.1797 10.4358 35.6367 9.89213C35.0938 9.3485 34.4176 8.95701 33.6758 8.75684C30.9453 8.02246 20 8.02246 20 8.02246C20 8.02246 9.05469 8.02246 6.32422 8.75293C5.58211 8.95246 4.90556 9.34373 4.36252 9.88746C3.81948 10.4312 3.42906 11.1082 3.23047 11.8506C2.5 14.585 2.5 20.2881 2.5 20.2881C2.5 20.2881 2.5 25.9912 3.23047 28.7217C3.63281 30.2295 4.82031 31.417 6.32422 31.8193C9.05469 32.5537 20 32.5537 20 32.5537C20 32.5537 30.9453 32.5537 33.6758 31.8193C35.1836 31.417 36.3672 30.2295 36.7695 28.7217C37.5 25.9912 37.5 20.2881 37.5 20.2881C37.5 20.2881 37.5 14.585 36.7695 11.8545ZM16.5234 25.5225V15.0537L25.5859 20.249L16.5234 25.5225Z" />
        </symbol>
      </svg>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  padding: 24px 0 16px 0;
  background: linear-gradient(180deg, #1A1A1A 1.56%, rgba(26, 26, 26, 0) 100%);
  .footer-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .footer-logo {
    margin: 0 0 40px 0;
    display: block;
    width: 300px;
  }
  .footer-navigation {
    margin: 0 0 48px 0;
    display: flex;
    flex-flow: nowrap;
    gap: 153px;
  }
  .footer-list {
    display: flex;
    flex-flow: nowrap column;
    gap: 24px;
    list-style: none;
  }
  .footer-link {
    color: var(--color-black-40);
    text-decoration: none;
    :hover {
      color: var(--color-black-10);
    }
  }
  .footer-select {
    padding: 9px 16px;
    background: transparent;
    outline: none;
    border: 1px solid var(--color-black-40);
    color: var(--color-black-40);
    border-radius: 83px;
    cursor: pointer;
    :hover {
      color: var(--color-black-10);
      border: 1px solid var(--color-black-10);
    }
    .footer-option {
      background: transparent;
    }
  }
  .footer-socials {
    display: flex;
    align-items: center;
    gap: 48px;
    .footer-social-icon {
      width: 40px; 
      height: 40px;
      fill: var(--color-black-40);
      :hover {
        fill: var(--color-black-10);
      }
    }
  }
  .footer-line {
    margin: 0 0 16px 0;
    width: 100%;
    border-top: 1px solid var(--color-black-40);
  }
  .footer-copyright {
    color: var(--color-black-40);
  }
`;
