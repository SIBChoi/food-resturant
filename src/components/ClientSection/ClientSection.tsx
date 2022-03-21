import React from 'react';
import styles from './ClientSection.module.css';
import client1 from '../../images/client1.jpg';
const ClientSection = () => {
  return (
    <section className={styles.clientSection}>
      <div className={styles.container}>
        <div className={styles.clientSectionHeader}>
          <h2>What Says Our Customers</h2>
        </div>
        <div className={styles.clientSectionMain}>
          <div className={styles.clientItem}>
            <div className={styles.clientDatil}>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <p className={styles.name}>Moana Michell</p>
              <p className={styles.desc}>magna aliqua</p>
            </div>
            <div className={styles.clientImgDiv}>
              <img src={client1} alt="person" />
            </div>
          </div>
          <div className={styles.clientItem}>
            <div className={styles.clientDatil}>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <p className={styles.name}>Moana Michell</p>
              <p className={styles.desc}>magna aliqua</p>
            </div>
            <div className={styles.clientImgDiv}>
              <img src={client1} alt="person" />
            </div>
          </div>
        </div>
        <div className={styles.btnZone}>
          <button className={styles.btn}>&lt;</button>
          <button className={styles.btn}> &gt;</button>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
