import React from 'react';
import useAlarm from '../../hooks/useAlarm';
import AlarmModal from './AlarmModal';

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
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
        disabled={isAlarmSet}
      />
      <button onClick={handleSetAlarm} disabled={isAlarmSet}>
        Set Alarm
      </button>
      {isAlarmTriggered && <AlarmModal onDismiss={dismissAlarm} onSnooze={snoozeAlarm} canSnooze={canSnooze} />}
    </div>
  );
};

export default AlarmClock;