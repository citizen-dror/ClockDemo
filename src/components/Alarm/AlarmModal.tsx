import React from 'react';
import Modal from '../Common/Modal'; 

interface AlarmModalProps {
  onDismiss: () => void;
  onSnooze: () => void;
  canSnooze: boolean;
}

const AlarmModal: React.FC<AlarmModalProps> = ({ onDismiss, onSnooze, canSnooze }) => {
  return (
    <Modal>
      <h2>Alarm!</h2>
      {canSnooze && <button onClick={onSnooze}>Snooze</button>}
      <button onClick={onDismiss}>Dismiss</button>
    </Modal>
  );
};

export default AlarmModal;
