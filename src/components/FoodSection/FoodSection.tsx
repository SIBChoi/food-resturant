import React, { useState } from 'react';
import styles from './FoodSection.module.css';
import f1 from '../../images/f1.png';
import f2 from '../../images/f2.png';
import f3 from '../../images/f3.png';
import f4 from '../../images/f4.png';
import f5 from '../../images/f5.png';
import f6 from '../../images/f6.png';
import f7 from '../../images/f7.png';
import f8 from '../../images/f8.png';
import f9 from '../../images/f9.png';
import FoodItem from './FoodItem/FoodItem';
import Button from '../Button/Button';

const categories = ['All', 'Burger', 'Pizza', 'Pasta', 'Fries'];

const menus = [
  {
    name: 'Delicious Pizza',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '20',
    img: f1,
  },
  {
    name: 'Delicious Burger',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '15',
    img: f2,
  },
  {
    name: 'Tasty Burger',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '12',
    img: f7,
  },
  {
    name: 'Tasty Burger',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '14',
    img: f8,
  },
  {
    name: 'Delicious Pizza',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '17',
    img: f3,
  },
  {
    name: 'Delicious Pizza',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '15',
    img: f6,
  },
  {
    name: 'Delicious Pasta',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '18',
    img: f4,
  },
  {
    name: 'Delicious Pasta',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '10',
    img: f9,
  },
  {
    name: 'French Fries',
    text: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
    price: '10',
    img: f5,
  },
];

const FoodSection = () => {
  const [value, setValue] = useState('All');

  const menuStyle = (category: string) => {
    return value === category
      ? `${styles.menuItem} ${styles.active}`
      : styles.menuItem;
  };

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    const val = e.currentTarget.getAttribute('value') as string;
    setValue(val);
  };

  const renderMenus = () => {
    if (value === 'All') {
      return menus.map((menu) => (
        <FoodItem
          key={menu.img}
          img={menu.img}
          name={menu.name}
          text={menu.text}
          price={menu.price}
        />
      ));
    } else {
      const condition = RegExp(`${value}`);
      const filterdMenus = menus.filter((menu) => menu.name.match(condition));
      return filterdMenus.map((menu) => (
        <FoodItem
          key={menu.img}
          img={menu.img}
          name={menu.name}
          text={menu.text}
          price={menu.price}
        />
      ));
    }
  };

  return (
    <section className={styles.foodSection}>
      <div className={styles.header}>
        <h3>Our Menu</h3>
      </div>
      <ul className={styles.menulist}>
        {categories.map((category) => (
          <li
            key={category}
            onClick={handleFilter}
            value={category}
            className={menuStyle(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className={styles.menuCardContainer}>{renderMenus()}</div>
      <div className={styles.btn}>
        <Button>View More</Button>
      </div>
    </section>
  );
};

export default FoodSection;
