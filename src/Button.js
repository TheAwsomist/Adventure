import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const STYLE = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize, Id, Class}) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : STYLE[0];

  return (
      <Link to="/" className="btn-mobile" style={{padding:"0.3% 0%"}}>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize} ${Class}`}
          id={Id}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
  );
};

export default Button;
