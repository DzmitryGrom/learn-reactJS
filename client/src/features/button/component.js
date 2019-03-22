import React from 'react';

import './component.less'

const Button = ({isState, text}) => {
  return  (
    <button className={"btn" + (isState ? ' btn_white' : ' btn_pink')}>{text}</button>
  )
};

export default Button;