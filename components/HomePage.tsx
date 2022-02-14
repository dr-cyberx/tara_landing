import React, { FunctionComponent } from 'react';
import Header from './reusable/Header';
import styles from '@styles/HomePage.module.scss';
import Button, { TypeButtonSize, TypeButtontype } from './reusable/Button';

const HomePage: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />
      <img src="star1.svg" className={styles.star1} alt="star1" />
      <img src="star2.svg" className={styles.star2} alt="star2" />
      <div className={styles.midSubContainer}>
        <div className={styles.midSubContainerChild1}>
          <h1 className={styles.midSubContainerChild1_h1}>
            AI-powered crypto Dashboard
          </h1>
          <p className={styles.midSubContainerChild1_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            numquam a voluptatibus, odio voluptas quae illum sit accusantium
            optio alias minus! Iure enim aliquid accusamus accusantium sint
            magni at consequatur.
          </p>
          <Button
            btnType={TypeButtontype.PRIMARY}
            btnSize={TypeButtonSize.MEDIUM}
            onClick={() => console.log('clicked')}
          />
        </div>
        <div className={styles.midSubContainerChild2}>
          <img src="sideView.jpeg" alt="sideView" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
