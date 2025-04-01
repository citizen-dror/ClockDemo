import React from 'react';
import Modal from '../Common/Modal'; 
import './AlarmModal.css';

interface AlarmModalProps {
  onDismiss: () => void;
  onSnooze: () => void;
  canSnooze: boolean;
}

const AlarmModal: React.FC<AlarmModalProps> = ({ onDismiss, onSnooze, canSnooze }) => {
  return (
    <Modal className="alarm-modal">
      <h2>Alarm!</h2>
      {canSnooze && <button id="snooze-button" onClick={onSnooze}>Snooze</button>}
      <button id="dismiss-button" onClick={onDismiss}>Dismiss</button>
    </Modal>
  );
};

export default AlarmModal;