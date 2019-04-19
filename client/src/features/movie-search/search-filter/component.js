import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../../shared/button/index';
import styles from './component.less';

const FilterComponent = ({
  getInputRef, onButtonClick, onButtonClickRelease, onButtonClickRating, onButtonClickSearch, filmsLength,
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
          <input defaultChecked type="radio" id="btnTitle" name="search" title="title" onClick={onButtonClickSearch} />
          <span className={styles.filter__btn}>title</span>
        </label>
        <label htmlFor="btnGenre">
          <input type="radio" id="btnGenre" name="search" title="genres" onClick={onButtonClickSearch} />
          <span className={styles.filter__btn}>genre</span>
        </label>
      </div>
      <Button selector="btnSearch" text="search" modifier="pink" size="big" onButtonClick={onButtonClick} />
    </div>
    {
      filmsLength > 0 ?
        (<div className={styles.filter__btns}>
          <span id="btnSortBy" className={styles.filter__value}>Sort by</span>
          <label htmlFor="btnRelease">
            <input type="radio" id="btnRelease" name="sort" onClick={onButtonClickRelease} />
            <span className={styles.filter__value}>release date</span>
          </label>
          <label htmlFor="btnRating">
            <input defaultChecked type="radio" id="btnRating" name="sort" onClick={onButtonClickRating} />
            <span className={styles.filter__value}>rating</span>
          </label>
        </div>)
      : null
    }

  </div>
);

FilterComponent.propTypes = {
  getInputRef: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onButtonClickRating: PropTypes.func.isRequired,
  onButtonClickSearch: PropTypes.func.isRequired,
  onButtonClickRelease: PropTypes.func.isRequired,
  filmsLength: PropTypes.number,
};

export default FilterComponent;
