import React, { useState, useEffect } from 'react';
import styles from './Slide.module.css';
import { BsCircle } from 'react-icons/bs';

interface Props {
  children: React.ReactNode;
}

const Slide: React.FC<Props> = ({ children }) => {
  const [left, setLeft] = useState('0');

  const handleSlide = (e: React.MouseEvent<HTMLElement>) => {
    const value = e.currentTarget.getAttribute('value') as string;
    setLeft(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      left === '0' && setLeft('-100');
      left === '-100' && setLeft('-200');
      left === '-200' && setLeft('0');
    }, 4000);

    return () => clearInterval(interval);
  }, [left]);

  return (
    <>
      <div style={{ left: `${left}%` }} className={styles.slide}>
        {children}
      </div>
      <ul className={styles.icons}>
        <li value="0" onClick={handleSlide}>
          <BsCircle
            className={
              left === '0' ? `${styles.icon} ${styles.active}` : styles.icon
            }
            color="orange"
          />
        </li>
        <li value="-100" onClick={handleSlide}>
          <BsCircle
            className={
              left === '-100' ? `${styles.icon} ${styles.active}` : styles.icon
            }
            color="orange"
          />
        </li>
        <li value="-200" onClick={handleSlide}>
          <BsCircle
            className={
              left === '-200' ? `${styles.icon} ${styles.active}` : styles.icon
            }
            color="orange"
          />
        </li>
      </ul>
    </>
  );
};

export default Slide;
