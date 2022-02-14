import React, {
  CSSProperties,
  FunctionComponent,
  memo,
  MouseEventHandler,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import styles from '@styles/Button.module.scss';

export enum TypeButtontype {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum TypeButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

interface IButton {
  label?: string;
  btnType?: TypeButtontype;
  btnSize?: TypeButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  style?: CSSProperties;
}

const Button: FunctionComponent<IButton> = ({
  label,
  btnType,
  btnSize,
  onClick,
  icon,
  style,
}): JSX.Element => {
  return (
    <>
      <button
        className={classnames({
          [styles['btn']]: true,
          [styles[`btn__${btnType}`]]: true,
          [styles[`btn__${btnSize}`]]: true,
        })}
        onClick={onClick}
        style={style}
      >
        {label}
        {icon && icon}
      </button>
    </>
  );
};

Button.defaultProps = {
  label: 'Click me',
  btnType: TypeButtontype.PRIMARY,
  btnSize: TypeButtonSize.MEDIUM,
  onClick: () => console.log('i got clicked'),
  icon: <FontAwesomeIcon icon={faArrowRightLong} size={'1x'} />,
};

export default memo(Button);
