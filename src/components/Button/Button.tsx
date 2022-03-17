import React from 'react';
import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return <div className={styles.btn}>{children}</div>;
};

export default Button;
