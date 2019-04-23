import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../../shared/button/index';
import styles from './component.less';

const FilterComponent = ({
  getInputRef, onButtonClick, onButtonClickSort, onButtonClickSearch, filmsLength,
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
        <label htmlFor="title">
          <input type="radio" id="title" name="search" title="title" onClick={onButtonClickSearch} />
          <span className={styles.filter__btn}>title</span>
        </label>
        <label htmlFor="genres">
          <input type="radio" id="genres" name="search" title="genres" onClick={onButtonClickSearch} />
          <span className={styles.filter__btn}>genre</span>
        </label>
      </div>
      <Button selector="btnSearch" text="search" modifier="pink" size="big" onButtonClick={onButtonClick} />
    </div>
    <div style={{ display: !filmsLength ? 'none' : null }} className={styles.filter__btns}>
      <span id="btnSortBy" className={styles.filter__value}>Sort by</span>
      <label htmlFor="release_date">
        <input type="radio" id="release_date" name="sort" title="release" onClick={onButtonClickSort} />
        <span className={styles.filter__value}>release date</span>
      </label>
      <label htmlFor="vote_average">
        <input type="radio" id="vote_average" title="rating" name="sort" onClick={onButtonClickSort} />
        <span className={styles.filter__value}>rating</span>
      </label>
    </div>
  </div>
);

FilterComponent.propTypes = {
  getInputRef: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onButtonClickSort: PropTypes.func.isRequired,
  onButtonClickSearch: PropTypes.func.isRequired,
  filmsLength: PropTypes.number,
};

FilterComponent.defaultProps = {
  filmsLength: 0,
};

export default FilterComponent;
