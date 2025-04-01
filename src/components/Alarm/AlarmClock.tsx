import React from 'react';
import useAlarm from '../../hooks/useAlarm';
import AlarmModal from './AlarmModal';
import './AlarmClock.css'

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
    <div className="alarm-clock">
      <input
        id="alarm-time-input"
        data-testid="alarm-time-input"
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
        disabled={isAlarmSet}
      />
      <button id="set-alarm-button" data-testid="set-alarm-button" onClick={handleSetAlarm} disabled={isAlarmSet || alarmTime === '' }>
        Set Alarm
      </button>
      {isAlarmTriggered && <AlarmModal onDismiss={dismissAlarm} onSnooze={snoozeAlarm} canSnooze={canSnooze} />}
    </div>
  );
};

export default AlarmClock;