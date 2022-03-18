import React from 'react';
import Button from '../Button/Button';
import styles from './AboutSection.module.css';
import aboutImg from '../../images/about-img.png';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.about}>
        <div className={styles.aboutImgDiv}>
          <img src={aboutImg} alt="" />
        </div>
        <div className={styles.aboutDetails}>
          <h2 className={styles.aboutTitle}>We Are Feane</h2>
          <p className={styles.aboutText}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
