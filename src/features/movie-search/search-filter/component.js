// @flow

import React from 'react';
import Button from '../../../shared/button';
import RadioButton from '../../../shared/radio-button';
import styles from './component.less';

type Props = {
  getInputRef: Object,
  onButtonClick: Function,
  onButtonClickSort: Function,
  onButtonClickSearch: Function,
  filmsLength: number,
}

const FilterComponent = ({
  getInputRef, onButtonClick, onButtonClickSort, onButtonClickSearch, filmsLength,
}: Props) => (
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
        <RadioButton selector="title" name="search" val="title" onButtonClick={onButtonClickSearch} />
        <RadioButton selector="genres" name="search" val="genre" onButtonClick={onButtonClickSearch} />
      </div>
      <Button selector="btnSearch" text="search" color="white" backgroundColor="deeppink" width="200px" onButtonClick={onButtonClick} />
    </div>
    <div style={{ display: !filmsLength ? 'none' : null }} className={styles.filter__btns}>
      <span id="btnSortBy" className={styles.filter__value}>Sort by</span>
      <RadioButton selector="release_date" name="sort" val="release date" onButtonClick={onButtonClickSort} />
      <RadioButton selector="vote_average" name="sort" val="rating" onButtonClick={onButtonClickSort} />
    </div>
  </div>
);

export default FilterComponent;
