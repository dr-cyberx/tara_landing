import React, { FunctionComponent, useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '@styles/ExtendedList.module.scss';
import classNames from 'classnames';

interface iExtendedList {
  value: number;
  heading: string;
  paraContent: string;
}

const ExtendedList: FunctionComponent<iExtendedList> = ({
  value,
  heading,
  paraContent,
}): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={styles.extendedList}
      style={isClicked ? { background: '#35384F' } : { background: '#2F3246' }}
    >
      <div className={styles.extendedList_Container}>
        <h1 className={styles.list_value}>0{value}</h1>
        <h1 className={styles.list_heading}>{heading}</h1>
        <div
          className={styles.extended_btn}
          onClick={() => setIsClicked(!isClicked)}
          style={
            isClicked ? { background: '#06cde3' } : { background: '#1d1f2d' }
          }
        >
          {isClicked ? (
            <FontAwesomeIcon
              icon={faTimes}
              size={'1x'}
              style={{ color: 'white' }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              size={'1x'}
              style={{ color: 'white' }}
            />
          )}
        </div>
      </div>
      <div
        className={classNames({
          [styles[`list_para_parent`]]: true,
          [styles[`list_para_parent__${isClicked}`]]: true,
        })}
      >
        {isClicked && (
          <div className={styles.list_para}>
            <p>{paraContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ExtendedList);
