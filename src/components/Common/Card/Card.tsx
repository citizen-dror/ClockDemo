import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardSubComponentProps>;
  Body: React.FC<CardSubComponentProps>;
  Footer: React.FC<CardSubComponentProps>;
} = ({ children, className = '', ...rest }) => {
  const classes = ['timeui-card', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

interface CardSubComponentProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardSubComponentProps> = ({ children, className = '', ...rest }) => {
  const classes = ['timeui-card-header', className].filter(Boolean).join(' ');
  
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

const CardBody: React.FC<CardSubComponentProps> = ({ children, className = '', ...rest }) => {
  const classes = ['timeui-card-body', className].filter(Boolean).join(' ');
  
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

const CardFooter: React.FC<CardSubComponentProps> = ({ children, className = '', ...rest }) => {
  const classes = ['timeui-card-footer', className].filter(Boolean).join(' ');
  
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

// Assign subcomponents to the Card component
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
