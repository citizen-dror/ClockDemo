import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'regular' | 'large';
  outline?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'regular',
  outline = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {
  const classes = [
    'timeui-button', 
    `timeui-button--${variant}`,
    size !== 'regular' ? `timeui-button--${size}` : '',
    outline ? 'timeui-button--outline' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;