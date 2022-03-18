import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './FoodItem.module.css';

interface Props {
  img: string;
  name: string;
  price: string;
  text: string;
}

const FoodItem: React.FC<Props> = ({ img, name, price, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgDiv}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.cardDetails}>
        <p className={styles.menuName}>{name}</p>
        <p className={styles.menuText}>{text}</p>
        <div className={styles.cardOption}>
          <p className={styles.price}>${price}</p>
          <button className={styles.cart}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
