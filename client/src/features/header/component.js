import React from 'react';

import styles from './component.less';
import Logo from '../logo';
import Filter from '../search-filter';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.header__wrapper}>
      <Logo />
      <Filter />
      <div className={styles.header__target}>
        <div className={styles.header__cover} style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/a/a9/Christopher_Robin_poster.png)' }} />
        <div>
          <h2 className={styles.header__title}>Pupl Fiction</h2>
          <p className={styles.header__description}>Oscar-winnig Movies</p>
          <p className={styles.header__date}>
            <span>1994</span>
            <span>154 min</span>
          </p>
          <p className={styles.header__text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
    <div className={styles.header__info}>
      <div>
        <span className={styles.header__value}>7 movies found</span>
      </div>
      <div>
        <span className={styles.header__value}>Sort by</span>
        <span className={styles.header__value}>release date</span>
        <span className={styles.header__rating}>rating</span>
      </div>
    </div>
  </div>
);

export default Header;
