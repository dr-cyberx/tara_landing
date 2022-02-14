import React, { FunctionComponent, memo } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import styles from '@styles/Logo.module.scss';

export enum TypeLogo {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

interface ILogo {
  type?: TypeLogo;
}

const Logo: FunctionComponent<ILogo> = ({ type }): JSX.Element => {
  const handleLogo = (
    type: TypeLogo | undefined
  ): { height: number; width: number } => {
    switch (type) {
      case TypeLogo.SMALL:
        return { height: 100, width: 100 };

      case TypeLogo.MEDIUM:
        return { height: 36, width: 143 };

      case TypeLogo.LARGE:
        return { height: 100, width: 100 };

      default:
        return { height: 36, width: 143 };
    }
  };

  return (
    <>
      <Image
        src={logo}
        className={styles.Logo}
        alt="Logo"
        {...handleLogo(type)}
      />
    </>
  );
};

Logo.defaultProps = {
  type: TypeLogo.MEDIUM,
};

export default memo(Logo);
