import React, { FunctionComponent, memo } from 'react';
import styles from '@styles/Card.module.scss';
import Button, { TypeButtonSize, TypeButtontype } from './Button';

const Card: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <h1>AI-powered crypto asset investment</h1>
      </div>
      <div className={styles.card_mid_section}>
        <p className={styles.para_1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <p className={styles.para_2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <div className={styles.card_bottom}>
        <Button
          btnSize={TypeButtonSize.MEDIUM}
          btnType={TypeButtontype.SECONDARY}
          label={'Get Notified'}
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default memo(Card);
