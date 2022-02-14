import React, { FunctionComponent } from 'react';
import email from 'public/email.svg';
import telegram from 'public/telegram.svg';
import twitter from 'public/twitter.svg';
import Image from 'next/image';
import styles from '@styles/SocialLinks.module.scss';

const SocialLinks: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.SocialLinks}>
      <Image src={email} alt="email" height={18} width={21} />
      <Image src={telegram} alt="telegram" height={18} width={21} />
      <Image src={twitter} alt="twitter" height={18} width={21} />
    </div>
  );
};

export default SocialLinks;
