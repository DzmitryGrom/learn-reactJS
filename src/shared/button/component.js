import React from 'react';

import injectSheet from 'react-jss';

type Props = {
  classes: string,
  text: string,
  onButtonClick: Function,
  selector: string,
};

const styles = {
  button: {
    border: 'none',
    textTransform: 'uppercase',
    fontSize: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '2px',
    cursor: 'pointer',
    backgroundColor: props => props.backgroundColor,
    color: props => props.color,
    width: props => props.width,
  },
};

const Button = ({
  classes, text, onButtonClick, selector,
}: Props) => (
  <input
    onClick={onButtonClick}
    type="button"
    value={text}
    id={selector}
    className={classes.button}
  />
);

export default injectSheet(styles)(Button);
