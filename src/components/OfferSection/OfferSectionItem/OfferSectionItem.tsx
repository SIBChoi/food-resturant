import React from 'react';
import styles from './OfferSectionItem.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../../Button/Button';

interface Props {
  img: string;
  day: string;
  discount: string;
}

const OfferSectionItem: React.FC<Props> = ({ img, day, discount }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardimgDiv}>
        <img className={styles.cardimg} src={img} alt="bugger" />
      </div>
      <div className={styles.details}>
        <p className={styles.offerday}>{day}</p>
        <p className={styles.offerDiscount}>
          {discount} <small>Off</small>
        </p>
        <Button>
          Order Now
          <FaShoppingCart className={styles.icon} />
        </Button>
      </div>
    </div>
  );
};

export default OfferSectionItem;
