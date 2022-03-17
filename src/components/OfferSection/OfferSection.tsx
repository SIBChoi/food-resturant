import React from 'react';
import styles from './OfferSection.module.css';
import of1 from '../../images/o1.jpg';
import of2 from '../../images/o2.jpg';
import OfferSectionItem from './OfferSectionItem/OfferSectionItem';

const OfferSection = () => {
  return (
    <section className={styles.offerSection}>
      <OfferSectionItem img={of1} day="Tasty Thursdays" discount="20" />
      <OfferSectionItem img={of2} day="Pizza Days" discount="15" />
    </section>
  );
};

export default OfferSection;
