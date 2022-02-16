import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from '@styles/footer.module.scss';
import Logo from './Logo';
import SocialLinks, { TypeLinks } from './SocialLinks';
import poweredBy from 'public/poweredby.svg';

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.Logo_container}>
          <Logo />
        </div>
        <div className={styles.socialLinks_container}>
          <SocialLinks types={TypeLinks.SMALL} />
        </div>
      </div>
      <div className={styles.footer_right_item}>
        <div className={styles.footer_right_semi_left}>
          <span>powered by</span>
          <Image src={poweredBy} alt="powered by" />
        </div>
        <p>© 2022 jarvis labs </p>
      </div>
    </div>
  );
};

export default Footer;
