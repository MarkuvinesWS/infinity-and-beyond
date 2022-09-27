import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Subscription from '../components/Subscription';
import ButtonDefault from '../components/premitives/ButtonDefault';
import ButtonSignUp from '../components/premitives/ButtonSignUp';
import FeaturesBlock from '../components/FeaturesBlock';
import TariffsBlock from '../components/TariffsBlock';
import ContentBlock from '../components/ContentBlock';
import DeviseList from '../components/premitives/DeviseList';
import FAQPoint from '../components/premitives/FAQPoint';
import Footer from '../components/Footer';

const features = [
  {
    id: 1,
    src: './image/space.png',
    title: 'Cosmic Cliffs',
    description: 'This landscape of “mountains” and “valleys” speckled with glittering stars is actually the edge of a nearby, young, star-forming region called NGC 3324 in the Carina Nebula.',
  },
  {
    id: 2,
    src: './image/fever.jpg',
    title: 'Particle Fever',
    description: 'As the Large Hadron Collider is about to be launched for the first time, physicists are on the cusp of the greatest scientific discovery of all time -- or perhaps their greatest failure.',
  },
  {
    id: 3,
    src: './image/spacemens.jpg',
    title: 'Red Heaven',
    description: 'After a year of living on “Mars” the lines between reality and simulation blur. Following a crew of 6 led by a female physicist, RED HEAVEN takes viewers inside a year-long NASA psychological experiment',
  },
];
const contentCards = [
  {
    id: 1, src: './image/content1.jpg', tagText: 'Original Infinity & Beyond ', title: 'Life As An Astronaut', subText: 'Click to see an exclusive trailer',
  },
  {
    id: 2, src: './image/content2.jpg', tagText: 'Original Infinity & Beyond ', title: 'The Space Suttle', subText: 'Click to see an exclusive trailer',
  },
  {
    id: 3, src: './image/content3.jpg', tagText: 'Original Infinity & Beyond ', title: 'The Future of Fiction', subText: 'Click to see an exclusive trailer',
  },
  {
    id: 4, src: './image/content4.jpg', tagText: 'Original Infinity & Beyond ', title: ' Life Outside The Sola...', subText: 'Click to see an exclusive trailer',
  },
];
const devices = [
  { title: 'Computer', list: ['Chrome OS', 'MacOS', 'Windows PC', 'Linux', 'See More'] },
  { title: 'Tv', list: ['Amazon Fire TV', 'Android TV', 'Apple TV', 'Chromecast', 'See More'] },
  { title: 'video games', list: ['PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'See More'] },
  { title: 'cellphones and&nbsp;tablets', list: ['Sansung', 'Iphones', 'Xiomy', 'Windows Phone', 'See More'] },
];
const faqs = [
  { question: 'Already subscribed to Infinity & Beyond?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consectetur deserunt dicta distinctio doloremque doloribus ducimus, itaque, laboriosam magnam molestias mollitia nam nostrum perferendis possimus quod repellendus sequi, similique.' },
  { question: 'What is included in the Infinity & Beyond subscription plan?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consectetur deserunt dicta distinctio doloremque doloribus ducimus, itaque, laboriosam magnam molestias mollitia nam nostrum perferendis possimus quod repellendus sequi, similique.' },
  { question: 'What are the payment methods?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consectetur deserunt dicta distinctio doloremque doloribus ducimus, itaque, laboriosam magnam molestias mollitia nam nostrum perferendis possimus quod repellendus sequi, similique.' },
  { question: 'How many profiles can I create?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consectetur deserunt dicta distinctio doloremque doloribus ducimus, itaque, laboriosam magnam molestias mollitia nam nostrum perferendis possimus quod repellendus sequi, similique.' },
  { question: 'What are the differences in subscription plans?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consectetur deserunt dicta distinctio doloremque doloribus ducimus, itaque, laboriosam magnam molestias mollitia nam nostrum perferendis possimus quod repellendus sequi, similique.' },
];

function InfoPage() {
  return (
    <StyledInfoPage>
      <StyledHeader>
        <div className="_container header-container">
          <img className="header-logo" src="./icons/logo.svg" alt="logo" />
          <ButtonDefault>
            <Link to="/login" className="text-style-raleway-13-px-regular">LOGIN</Link>
          </ButtonDefault>
          <ButtonSignUp>
            <Link to="/sign-up" className="text-style-raleway-title-14">Sign&nbsp;Up</Link>
          </ButtonSignUp>
        </div>
      </StyledHeader>
      <main className="main">
        <StyledSubscriptionSection>
          <img className="_ibg" src="./image/bacgroundIfoPage.png" alt="background" />
          <img className="major-play-btn" src="./icons/playMajor.svg" alt="play" />
          <div className="gradient-container" />
          <div className="_container subscription-block-container">
            <div className="subscription-block__description">
              <h2 className="subscription-block__title text-style-raleway-title-28">
                How One Supernova Measured The Universe
              </h2>
              <p className="subscription-block__text text-style-raleway-16-px-regular">
                In 2015 astronomers successfully predicted
                the appearance of a supernova within a couple weeks. How did they do it?
              </p>
            </div>
            <Subscription />
          </div>
        </StyledSubscriptionSection>
        <StyledFeatureSection>
          <div className="_container features-container">
            <h2 className="text-style-raleway-titles-02 feature-block-title">Sponsored Series</h2>
            <FeaturesBlock features={features} />
          </div>
        </StyledFeatureSection>
        <StyledTariffSection>
          <div className="_container tariffs-container">
            <h2 className="text-style-raleway-title-36 tariffs-title">
              Choose your plan
            </h2>
            <p className="text-style-raleway-texts tariffs-sub-title">
              Discover our plans and choose the best option for you to enjoy our content.
            </p>
            <TariffsBlock />
            <p className="text-style-raleway-16-px-regular tariffs-bottom">
              *See more information about payment plans&nbsp;
              <a className="tariffs-link" href="/">clicking here</a>
              .
            </p>
          </div>
        </StyledTariffSection>
        <StyledContentSection>
          <div className="_container content-container">
            <h2 className="text-style-raleway-title-36 content-title">
              See Infinity & Beyond exclusive content
            </h2>
            <p className="text-style-raleway-texts content-sub-title">
              See our exclusive content and learn more about
              what has been researched and produced about the space and beyond
            </p>
            <ContentBlock contentCards={contentCards} />
          </div>
        </StyledContentSection>
        <StyledDeviceChose>
          <div className="_container device-container">
            <h2 className="text-style-raleway-title-36 device-title">
              A complete experience available on your favorite devices
            </h2>
            <p className="text-style-raleway-texts device-sub-title">
              Compatible with all devices and download available depending on subscription plan
            </p>
            <img className="device-image" src="./image/devicesMockup.png" alt="devices" />
            <div className="device-lists">
              {devices.map(({ title, list }) => <DeviseList title={title} list={list} />)}
            </div>
          </div>
        </StyledDeviceChose>
        <StyledFaqSection>
          <div className="_container faq-container">
            <h2 className="text-style-raleway-title-36 faq-title">
              A complete experience available on your favorite devices
            </h2>
            <div className="faq-list">
              {faqs.map(({ question, text }) => <FAQPoint question={question} text={text} />)}
            </div>
            <a className="text-style-raleway-16-px-regular faq-link" href="/">See more questions that can help you!</a>
          </div>
        </StyledFaqSection>
      </main>
      <Footer />
    </StyledInfoPage>
  );
}

export default InfoPage;

const StyledInfoPage = styled.div`
  background: linear-gradient(117.98deg, #1A1A1A 14.77%, #1D1056 117.86%);
  .main {
    padding: 0 0 190px 0;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  z-index: 100;
  top: 0;
  .header-container {
    width: 100%;
    padding: 52px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
  .header-logo {
    margin: 0 auto 0 0;
  }
`;

const StyledSubscriptionSection = styled.section`
  z-index: 10;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding: 0 0 17px 0;
  .gradient-container {
    z-index: 50;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: center;
    background: linear-gradient(180deg, #1A1A1A 10%, rgba(26,26,26,0) 25%, rgba(26,26,26,0) 90%, #1A1A1A 100%) ;
  }
  .major-play-btn {
    position: absolute;
    z-index: 100;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
  }
  .subscription-block-container {
    display: flex;
    gap: 56px;
    z-index: 100;
    flex-flow: column nowrap;
    align-items: center;
  }
  .subscription-block__description {
    margin: auto 0 0 0;
    text-align: center;
    .subscription-block__title {
      margin: 0 0 16px 0;
      color: white;
      text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
    .subscription-block__text {
      text-align: center;
      color: white;
      text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
  }
`;

const StyledFeatureSection = styled.section`
  padding: 71px 0 0 0;
  margin: 0 0 88px 0;
  background: linear-gradient(180deg, #1A1A1A 39.58%, rgba(26, 26, 26, 0) 100%);
  .feature-block-title {
    margin: 0 0 52px 0;
    text-transform: none;
    text-align: center;
    color: var(--color-black-10);
  }
`;

const StyledTariffSection = styled.section`
  margin: 0 0 88px 0;
  .tariffs-title {
    margin: 0 0 32px 0;
    text-transform: none;
    text-align: center;
    color: var(--color-black-10);
  }
  .tariffs-sub-title {
    margin: 0 0 55px 0;
    text-align: center;
    color: var(--color-black-10);
  }
  .tariffs-bottom {
    margin: 16px 0 0 0;
    text-align: center;
    color: var(--color-black-10);
  }
  .tariffs-link {
    color: var(--color-black-10);
    :hover {
      color: var(--color-roxo-100);
    }
  }
`;

const StyledContentSection = styled.section`
  margin: 0 0 88px 0;
 .content-title {
   margin: 0 0 32px 0;
   text-transform: none;
   text-align: center;
   color: var(--color-black-10);
 }
  .content-sub-title {
    margin: 0 0 55px 0;
    text-align: center;
    color: var(--color-black-10);
  }
`;

const StyledDeviceChose = styled.section`
  margin: 0 0 88px 0;
 .device-title {
   margin: 0 0 32px 0;
   text-transform: none;
   text-align: center;
   color: var(--color-black-10);
 }
  .device-sub-title {
    margin: 0 0 55px 0;
    text-align: center;
    color: var(--color-black-10);
  }
  .device-image {
    margin: 0 auto;
    display: block;
  }
  .device-lists {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    gap: 20px;
  }
`;

const StyledFaqSection = styled.section`
  margin: 0 0 88px 0;
  .faq-title {
    margin: 0 0 55px 0;
    text-align: center;
    color: var(--color-black-10);
  }
 .faq-list {
   margin: 0 0 24px 0;
   display: flex;
   flex-flow: column;
   gap: 24px;
 }
  .faq-link {
    margin: 0 0 0 20px;
    color: var(--color-black-25);
    text-decoration: underline;
    :hover {
      color: var(--color-roxo-45);
    }
  }
`;
