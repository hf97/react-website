import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']

function Button({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  
  const checkButtonSize = SIZES.includes(buttonStyle) ? buttonSize : SIZES[0];
  
  const checkButtonColor = COLOR.includes(buttonStyle) ? buttonColor : null;

  return (
    <div className='button'>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    </div>
  )
}

export default Button
