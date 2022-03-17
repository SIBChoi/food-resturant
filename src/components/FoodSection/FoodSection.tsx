import React, { useState } from 'react';
import styles from './FoodSection.module.css';

const FoodSection = () => {
  const [value, setValue] = useState('all');
  let menuStyle = `${styles.menuItem} ${styles.active}`;

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    const val = e.currentTarget.getAttribute('value') as string;

    setValue(val);
  };

  return (
    <section className={styles.foodSection}>
      {value}
      <div className={styles.header}>
        <h3>Our Menu</h3>
      </div>
      <ul className={styles.menulist}>
        <li onClick={handleFilter} value="all" className={styles.menuItem}>
          All
        </li>
        <li onClick={handleFilter} value="burger" className={styles.menuItem}>
          Burger
        </li>
        <li onClick={handleFilter} value="pizza" className={styles.menuItem}>
          Pizza
        </li>
        <li onClick={handleFilter} value="pasta" className={styles.menuItem}>
          Pasta
        </li>
        <li onClick={handleFilter} value="fries" className={styles.menuItem}>
          Fries
        </li>
      </ul>
      <div className={styles.menuCardContainer}></div>
    </section>
  );
};

export default FoodSection;
