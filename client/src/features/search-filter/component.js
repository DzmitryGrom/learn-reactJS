import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../shared/button';
import styles from './component.less';

const FilterComponent = ({ getInputRef, onButtonClick, onButtonClickRelease, onButtonClickRating, onButtonClickTitle, onButtonClickGenre }) => (
  <div className={styles.filter}>
    <div className={styles.filter__top}>
      <span className={styles.filter__label}>Find your movie</span>
      <input
        ref={getInputRef}
        placeholder="Type your value"
        type="text"
        className={styles.filter__input}
      />
      <div className={styles.filter__buttons}>
        <span className={styles.filter__buttonsLabel}>search by</span>
        <input type="radio" id="btnTitle" name="search" onClick={onButtonClickTitle} />
        <label className={styles.filter__btn} htmlFor="btnTitle">title</label>
        <input type="radio" id="btnGenre" name="search" onClick={onButtonClickGenre}/>
        <label className={styles.filter__btn} htmlFor="btnGenre">genre</label>
      </div>
      <Button selector="btnSearch" text="search" modifier="pink" size="big" onButtonClick={onButtonClick} />
    </div> 
    <div className={styles.filter__btns}>
      <span id="btnSortBy" className={styles.filter__value}>Sort by</span>
      <input type="radio" id="btnRelease" name="sort" onClick={onButtonClickRelease} />
      <label className={styles.filter__value} htmlFor="btnRelease">release date</label>
      <input type="radio" id="btnRating" name="sort" onClick={onButtonClickRating} />
      <label className={styles.filter__value} htmlFor="btnRating">rating</label>
    </div>
  </div>
);

FilterComponent.propTypes = {
  getInputRef: PropTypes.func,
  onButtonClick: PropTypes.func,
  onButtonClickTitle: PropTypes.func,
  onButtonClickGenre: PropTypes.func,
  onButtonClickRating: PropTypes.func,
  onButtonClickRelease: PropTypes.func
};

FilterComponent.defaultProps = {
  getInputRef: null,
  onButtonClick: null,
  onButtonClickTitle: null,
  onButtonClickGenre: null,
  onButtonClickRelease: null,
  onButtonClickRating: null
};

export default FilterComponent;
