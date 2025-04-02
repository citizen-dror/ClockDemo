
import React from 'react';
import { Card, Button } from '../Common';
import './AlarmModal.css';

interface AlarmModalProps {
  onDismiss: () => void;
  onSnooze: () => void;
  canSnooze: boolean;
}

const AlarmModal: React.FC<AlarmModalProps> = ({ onDismiss, onSnooze, canSnooze }) => {
  return (
    <div className="alarm-modal-overlay">
      <Card className="alarm-modal-card">
        <Card.Header>
          <h3 className="alarm-modal-title">Alarm!</h3>
        </Card.Header>
        
        <Card.Body>
          <div className="alarm-modal-content">
            <div className="alarm-icon">⏰</div>
            <p className="alarm-message">Time to wake up!</p>
          </div>
        </Card.Body>
        
        <Card.Footer>
          <div className="alarm-modal-actions">
            <Button 
              variant="primary" 
              onClick={onDismiss}
              data-testid="dismiss-alarm-button"
            >
              Dismiss
            </Button>
            
            {canSnooze && (
              <Button 
                variant="secondary" 
                onClick={onSnooze}
                data-testid="snooze-alarm-button"
              >
                Snooze 5 min
              </Button>
            )}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default AlarmModal;