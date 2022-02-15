import React, { FunctionComponent } from 'react';
import Logo, { TypeLogo } from './Logo';
import Button, { TypeButtontype, TypeButtonSize } from './Button';
import styles from '@styles/Header.module.scss';
import SocialLinks, { TypeLinks } from './SocialLinks';

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <Logo type={TypeLogo.MEDIUM} />
      </div>
      <div className={styles.itemLeft}>
        <p>Contact us</p>
        <div className={styles.btn_container}>
          <Button
            btnSize={TypeButtonSize.MEDIUM}
            btnType={TypeButtontype.SECONDARY}
            label="Dashboard"
            onClick={() => console.log('dashboard')}
          />
        </div>
        <div className={styles.header_right}>
          <SocialLinks types={TypeLinks.MEDIUM} />
        </div>
      </div>
    </div>
  );
};

export default Header;
