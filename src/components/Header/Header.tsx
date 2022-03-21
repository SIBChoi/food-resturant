import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';

interface Props {
  full: string;
}

const Header: React.FC<Props> = ({ full }) => {
  const height = full || '0';

  return (
    <div style={{ height }} className="bg-img">
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={styles.logo} to="/">
            <span>Feane</span>
          </NavLink>
          <ul className={styles.navlist}>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'orange' : 'white',
                })}
                className={styles.navlistItem}
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'orange' : 'white',
                })}
                className={styles.navlistItem}
                to="/menu"
              >
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'orange' : 'white',
                })}
                className={styles.navlistItem}
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'orange' : 'white',
                })}
                className={styles.navlistItem}
                to="/book"
              >
                BOOK TABLE
              </NavLink>
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
    </div>
  );
};

export default Header;
