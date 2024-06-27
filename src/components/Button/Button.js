import React from "react";
import "./Button.scss";

const Button = ({
  children,
  style = {},
  buttonType = "button",
  onClick = () => {},
  color = "primary",
  size = "md",
  loading = false,
  disabled = false,
}) => {
  const handleClick = () => {
    if (!loading && !disabled) {
      onClick();
    }
  };

  return (
    <button
      style={style}
      type={buttonType}
      onClick={handleClick}
      className={`button-comp ${size} ${color} ${disabled ? "disabled" : ""}`}
      disabled={loading || disabled}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;


const Spinner = () => (
    <div className="spinner">
      <div className="spinner-inner"></div>
    </div>
  );