import { useState, useEffect, useCallback } from 'react';
import { UseAlarmReturn } from '../types/alarmTypes';

const useAlarm = (): UseAlarmReturn => {
  const snoozeIntervalInMinutes = 1;
  const maxSnoozes = 2;

  const [alarmTime, setAlarmTime] = useState<string>(''); // Format: HH:MM
  const [isAlarmSet, setIsAlarmSet] = useState<boolean>(false);
  const [isAlarmTriggered, setIsAlarmTriggered] = useState<boolean>(false);
  const [snoozeCount, setSnoozeCount] = useState<number>(0);
  const [canSnooze, setCanSnooze] = useState<boolean>(true); // Controls snooze button availability

  const triggerAlarm = useCallback(() => {
    if (!isAlarmSet || !alarmTime) return;

    const currentTime = new Date();
    const [alarmHour, alarmMinute] = alarmTime.split(':').map(Number);

    if (
      alarmHour === currentTime.getHours() &&
      alarmMinute === currentTime.getMinutes() &&
      !isAlarmTriggered
    ) {
      console.log('Alarm triggered!');
      setIsAlarmTriggered(true);
    }
  }, [alarmTime, isAlarmSet, isAlarmTriggered]);

  const dismissAlarm = () => {
    setIsAlarmTriggered(false);
    setIsAlarmSet(false); // Reset the alarm after dismissal
    setSnoozeCount(0);
    setCanSnooze(true); // Reset snooze availability for the next alarm
  };

  const snoozeAlarm = () => {
    if (snoozeCount < maxSnoozes) {
      setSnoozeCount(prevCount => prevCount + 1);
      setIsAlarmTriggered(false); // Stop the current alarm

      const snoozeTime = new Date();
      snoozeTime.setMinutes(snoozeTime.getMinutes() + snoozeIntervalInMinutes);
      const newAlarmTime = `${snoozeTime.getHours().toString().padStart(2, '0')}:${snoozeTime.getMinutes().toString().padStart(2, '0')}`;
      setAlarmTime(newAlarmTime);

      console.log(`Snoozed. New alarm time: ${newAlarmTime}. Snooze count: ${snoozeCount + 1}`);

      if (snoozeCount + 1 >=  maxSnoozes) {
        setCanSnooze(false); // Disable snooze button after max snoozes (start count from 0)
      }
    }
  };

  const handleSetAlarm = () => {
    if (alarmTime) {
      console.log(`Alarm set for ${alarmTime}`);
      setIsAlarmSet(true);
      setSnoozeCount(0);
      setCanSnooze(true); // Reset snooze availability for the new alarm
    } else {
      console.log('Cannot set alarm: No time selected');
    }
  };

  useEffect(() => {
    let interval: number | null = null;

    if (isAlarmSet) {
      interval = window.setInterval(() => {
        triggerAlarm();
      }, 1000);
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isAlarmSet, triggerAlarm]);

  return {
    alarmTime,
    isAlarmSet,
    isAlarmTriggered,
    setAlarmTime,
    dismissAlarm,
    snoozeAlarm,
    handleSetAlarm,
    canSnooze,
  };
};

export default useAlarm;
