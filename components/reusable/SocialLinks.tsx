import React, { FunctionComponent } from 'react';
import email from 'public/email.svg';
import telegram from 'public/telegram.svg';
import twitter from 'public/twitter.svg';
import Image from 'next/image';
import styles from '@styles/SocialLinks.module.scss';

const Sociallinks = [
  {
    icon: email,
    alt: 'email',
  },
  {
    icon: telegram,
    alt: 'telegram',
  },
  {
    icon: twitter,
    alt: 'twitter',
  },
];

export enum TypeLinks {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}
interface iSocialLinks {
  types: TypeLinks;
}

const SocialLinks: FunctionComponent<iSocialLinks> = ({
  types,
}): JSX.Element => {
  const handlelinks = (key: TypeLinks): { height: number; width: number } => {
    switch (key) {
      case TypeLinks.LARGE:
        return { height: 28, width: 31 };
        break;

      case TypeLinks.MEDIUM:
        return { height: 18, width: 21 };
        break;

      case TypeLinks.SMALL:
        return { height: 14, width: 16 };
        break;

      default:
        return { height: 18, width: 21 };
        break;
    }
  };

  return (
    <>
      <div
        className={styles.SocialLinks}
        style={
          types === TypeLinks.MEDIUM
            ? { width: '133.33px' }
            : { width: '100px' }
        }
      >
        {Sociallinks.map((d) => (
          <>
            <Image src={d.icon} alt={d.alt} {...handlelinks(types)} />
          </>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
