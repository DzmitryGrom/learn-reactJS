import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../shared/button';
import styles from './component.less';

const FilterComponent = ({
  getInputRef, onButtonClick, onButtonClickRelease,
  onButtonClickRating, onButtonClickTitle, onButtonClickGenre,
}) => (
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
        <label htmlFor="btnTitle">
          <input type="radio" id="btnTitle" name="search" onClick={onButtonClickTitle} />
          <span className={styles.filter__btn}>title</span>
        </label>
        <label htmlFor="btnGenre">
          <input type="radio" id="btnGenre" name="search" onClick={onButtonClickGenre} />
          <span className={styles.filter__btn}>genre</span>
        </label>
      </div>
      <Button selector="btnSearch" text="search" modifier="pink" size="big" onButtonClick={onButtonClick} />
    </div>
    <div className={styles.filter__btns}>
      <span id="btnSortBy" className={styles.filter__value}>Sort by</span>
      <label htmlFor="btnRelease">
        <input type="radio" id="btnRelease" name="sort" onClick={onButtonClickRelease} />
        <span className={styles.filter__value}>release date</span>
      </label>
      <label htmlFor="btnRating">
        <input type="radio" id="btnRating" name="sort" onClick={onButtonClickRating} />
        <span className={styles.filter__value}>rating</span>
      </label>
    </div>
  </div>
);

FilterComponent.propTypes = {
  getInputRef: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onButtonClickTitle: PropTypes.func.isRequired,
  onButtonClickGenre: PropTypes.func.isRequired,
  onButtonClickRating: PropTypes.func.isRequired,
  onButtonClickRelease: PropTypes.func.isRequired,
};

export default FilterComponent;
