import React, { FunctionComponent } from 'react';
import Logo, { TypeLogo } from './Logo';
import Button, { TypeButtontype, TypeButtonSize } from './Button';
import styles from '@styles/Header.module.scss';
import SocialLinks from './SocialLinks';

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Logo type={TypeLogo.MEDIUM} />
      <div className={styles.itemLeft}>
        <p>Contact us</p>
        <Button
          btnSize={TypeButtonSize.MEDIUM}
          btnType={TypeButtontype.SECONDARY}
          label="Dashboard"
          onClick={() => console.log('dashboard')}
        />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Header;
