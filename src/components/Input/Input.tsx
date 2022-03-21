import React from 'react';
import styles from './Input.module.css';

interface Props {
  placeholder?: string;
  type: string;
}

const Input: React.FC<Props> = ({ placeholder, type }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
