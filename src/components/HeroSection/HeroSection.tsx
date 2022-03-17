import React from 'react';
import Button from '../Button/Button';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.details}>
        <h1 className={styles.title}>Fast Food Restaurant</h1>
        <p className={styles.text}>
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
        <Button>Order Now</Button>
      </div>
    </section>
  );
};

export default HeroSection;
