import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.contact}>
            <h5>Contact Us</h5>
            <Link className={styles.link} to="/">
              Location
            </Link>
            <Link className={styles.link} to="/">
              Call +01 1234567890
            </Link>
            <Link className={styles.link} to="/">
              demo@gmail.com
            </Link>
          </div>
          <div className={styles.desc}>
            <h5>Feane</h5>
            <p className={styles.description}>
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <FaLinkedinIn />
              </li>
              <li className={styles.listItem}>
                <FaFacebookF />
              </li>
              <li className={styles.listItem}>
                <FaPinterest />
              </li>
              <li className={styles.listItem}>
                <FaTwitter />
              </li>
              <li className={styles.listItem}>
                <FaInstagram />
              </li>
            </ul>
          </div>
          <div className={styles.open}>
            <h5>Opening Hours</h5>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <div className={styles.copyContainer}>
          <p className={styles.copy}>
            © 2022 All Rights Reserved By Free Html Templates
          </p>
          <p className={styles.copy}>© Distributed By ThemeWagon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
