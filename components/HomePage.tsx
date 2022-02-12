import React, { FunctionComponent } from 'react';
import styles from '@styles/HomePage.module.scss';
import Header from './reusable/Header';

const HomePage: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default HomePage;
