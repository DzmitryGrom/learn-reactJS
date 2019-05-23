import React from 'react';

import injectSheet from 'react-jss';

type Props = {
  classes: string,
  val: string,
  name: string,
  onButtonClick: Function,
  selector: string,
};

const styles = {
  button: {
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'inline-flex',
    marginLeft: '10px',
    '& input[type=radio]': {
      display: 'none',
      '&[name="sort"]': {
        '&:checked + span': {
          color: 'deeppink',
        },
      },
      '&[name="search"]': {
        '& + span': {
          backgroundColor: 'slategray',
          color: 'white',
          paddingLeft: '10px',
          paddingRight: '10px',
          textTransform: 'uppercase',
          fontSize: '10px',
          paddingTop: '5px',
          paddingBottom: '5px',
          borderRadius: '2px',
        },
        '&:checked + span': {
          backgroundColor: 'deeppink',
        },
      },
    },
  },
};

const RadioButton = ({
  classes, onButtonClick, selector, name, val,
}: Props) => (
  <label htmlFor={selector} className={classes.button}>
    <input type="radio" id={selector} name={name} onClick={onButtonClick} />
    <span className={styles.filter__value}>{val}</span>
  </label>

);

export default injectSheet(styles)(RadioButton);
