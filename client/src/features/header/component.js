import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { getVisibleFilmsLength } from '../../core/store/selectors';

import styles from './component.less';
import Logo from '../logo';
import Filter from '../search-filter';

const Header = (props) => {
  const { filmsLength } = props;
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <Logo />
        <Filter />
        {/* <div className={styles.header__target}>
          <div className={styles.header__cover} style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/a/a9/Christopher_Robin_poster.png)' }} />
          <div>
            <h2 className={styles.header__title}>Pupl Fiction</h2>
            <p className={styles.header__description}>Oscar-winnig Movies</p>
            <p className={styles.header__date}>
              <span>1994</span>
              <span>154 min</span>
            </p>
            <p className={styles.header__text}>a type specimen book.</p>
          </div>
        </div> */}
      </div>
      <div className={styles.header__info}>
        <div>
          <span id="movieValue" className={styles.header__value}>
            {filmsLength}
            {' '}
movies found
          </span>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  filmsLength: PropTypes.number,
};

Header.defaultProps = {
  filmsLength: 0,
};

const mapStateToProps = state => ({
  filmsLength: getVisibleFilmsLength(state),
});

export default connect(mapStateToProps)(Header);
