import React from 'react';
import './component.less';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './component.less';

const Button = ({ modifier, text, size, onButtonClick }) => (
    <input
        onClick={onButtonClick}
        type="button"
        value={text}
        className={classNames(styles.btn,
            modifier === 'pink' && styles.btn_pink,
            modifier === 'gray' && styles.btn_gray,
            modifier === 'white' && styles.btn_white,
            size === 'big' ? styles.btn_big : null)}
    />
);

Button.propTypes = {
    modifier: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.string,
    onButtonClick: PropTypes.func,
};

Button.defaultProps = {
    modifier: 'gray',
    text: '',
    size: '',
    onButtonClick: null,
};

export default Button;