import React from 'react';
import useAlarm from '../../hooks/useAlarm';
import AlarmModal from './AlarmModal';
import { Card, Button, TimeInput } from '../Common';
import './AlarmClock.css';

const AlarmClock: React.FC = () => {
  const {
    isAlarmSet,
    isAlarmTriggered,
    alarmTime,
    setAlarmTime,
    dismissAlarm,
    snoozeAlarm,
    handleSetAlarm,
    canSnooze
  } = useAlarm();

  return (
    <Card className="alarm-clock-card">
      <Card.Header>Alarm Clock</Card.Header>
      <Card.Body>
        <div className="alarm-clock-content">
          <div className="alarm-time-container">
            <TimeInput
              id="alarm-time-input"
              data-testid="alarm-time-input"
              value={alarmTime}
              onChange={setAlarmTime}
              disabled={isAlarmSet}
            />
          </div>
          
          <div className="alarm-actions">
            <Button 
              variant="primary"
              onClick={handleSetAlarm}
              disabled={isAlarmSet || alarmTime === ''}
              data-testid="set-alarm-button"
            >
              Set Alarm
            </Button>
            
            {isAlarmSet && !isAlarmTriggered && (
              <div className="alarm-status">
                Alarm set for {alarmTime}
              </div>
            )}
          </div>
        </div>
      </Card.Body>
      
      {isAlarmTriggered && <AlarmModal onDismiss={dismissAlarm} onSnooze={snoozeAlarm} canSnooze={canSnooze} />}
    </Card>
  );
};

export default AlarmClock;