import React from 'react';
import './Button.css';

function Button( props: any ) {
  return (
    <button { ...props } className={'button ' + props.className}></button>
  )
}

export default Button