import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/button';

import styles from './component.less';

const FilterComponent = ({ getInputRef, onEventClick }) => (

    <div className={styles.filter}>
        <span className={styles.filter__label}>Find your movie</span>
        <input
            ref={getInputRef}
            placeholder="Type your value"
            type="text"
            className={styles.filter__input}
        />
        <div className={styles.filter__buttons}>
            <span className={styles.filter__buttonsLabel}>search by</span>
            <Button text="title" modifier="white" />
            <Button text="genre" modifier="gray" />
        </div>
        <Button text="search" modifier="pink" size="big" onButtonClick={onEventClick} />
    </div>

);

FilterComponent.propTypes = {
    getInputRef: PropTypes.func,
    onEventClick: PropTypes.func,
};

FilterComponent.defaultProps = {
    getInputRef: null,
    onEventClick: null,
};

export default FilterComponent;