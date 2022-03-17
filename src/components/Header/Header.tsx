import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/">
          <span>Feane</span>
        </Link>
        <ul className={styles.navlist}>
          <li>
            <Link className={styles.navlistItem} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className={styles.navlistItem} to="/">
              MENU
            </Link>
          </li>
          <li>
            <Link className={styles.navlistItem} to="/">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className={styles.navlistItem} to="/">
              BOOK TABLE
            </Link>
          </li>
        </ul>
        <div className={styles.userOption}>
          <FaUser className={styles.icon} />
          <FaShoppingCart className={styles.icon} />
          <FaSearch className={styles.icon} />
          <Button>Order Online</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
