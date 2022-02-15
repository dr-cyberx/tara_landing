import React, { FunctionComponent } from 'react';
import Header from './reusable/Header';
import Button, { TypeButtonSize, TypeButtontype } from './reusable/Button';
import styles from '@styles/HomePage.module.scss';
import Card from './reusable/Card';
import ExtendedList from './reusable/ExtendedList';
import Footer from './reusable/Footer';

const extendedList_Array = [
  {
    id: 0,
    heading: 'Alright, but what exactly do you do?',
    para: 'As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.',
  },
  {
    id: 1,
    heading:
      "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
    para: 'As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.',
  },
  {
    id: 2,
    heading: 'Are your rates competitive?',
    para: 'As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.',
  },
  {
    id: 3,
    heading: 'Why do you have a monthly project cap?',
    para: 'As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.',
  },
];

const HomePage: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />

      {/* ------------------mid container---------------------- */}

      <div className={styles.midSubContainer}>
        <div className={styles.midSubContainerChild1}>
          <img src="star2.svg" className={styles.star2} alt="star2" />
          <div className={styles.midSubContainerChild1_h1}>
            <h1>AI-powered crypto Dashboard</h1>
          </div>
          <div className={styles.midSubContainerChild1_p}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className={styles.midSubContainerChild1_btn}>
            <Button
              btnType={TypeButtontype.PRIMARY}
              btnSize={TypeButtonSize.MEDIUM}
              onClick={() => console.log('clicked')}
              label="Buy Now"
            />
          </div>
        </div>
        <div className={styles.midSubContainerChild2}>
          <img src="star1.svg" className={styles.star1} alt="star1" />

          <img src="sideView.jpeg" alt="sideView" />
        </div>
      </div>

      <div className={styles.bottom_container}>
        <div className={styles.bottom_container_card}>
          <Card />
        </div>
        <div className={styles.List_Container}>
          {extendedList_Array.map((d) => (
            <ExtendedList
              key={d.id}
              heading={d.heading}
              value={d.id + 1}
              paraContent={d.para}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
