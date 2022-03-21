import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './BookSection.module.css';

const BookSection = () => {
  return (
    <section className={styles.bookSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Book A Table</h3>
        </div>
        <div className={styles.bookSectionMain}>
          <div className={styles.formCatainer}>
            <Input type="text" placeholder="Your Name" />
            <Input type="tel" placeholder="Phone Number" />
            <Input type="email" placeholder="Your Email" />
            <select name="people" id="people-count" className={styles.select}>
              <option value="">How Many Person?</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <Input type="date" />
          </div>
          <div className={styles.mapContainer}>map api</div>
        </div>
        <Button>BOOK NOW</Button>
      </div>
    </section>
  );
};

export default BookSection;
