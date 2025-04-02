import React, { ReactNode } from 'react';
import "./Modal.css";

interface ModalProps {
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ children, className }) => {
  return (
    <div className={`modal-overlay`}>
      <div className={`modal-content ${className || ""}`}> 
        {children}
      </div>
    </div>
  );
};

export default Modal;