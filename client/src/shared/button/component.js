import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './component.less';

const Button = ({
  modifier, text, size, onButtonClick, selector,
}) => (
  <input
    onClick={onButtonClick}
    type="button"
    value={text}
    id={selector}
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
  selector: PropTypes.string,
};

Button.defaultProps = {
  modifier: 'gray',
  text: '',
  size: '',
  onButtonClick: null,
  selector: null,
};

export default Button;