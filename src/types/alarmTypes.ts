export interface UseAlarmReturn {
    alarmTime: string;
    isAlarmSet: boolean;
    isAlarmTriggered: boolean;
    canSnooze: boolean;
    setAlarmTime: (time: string) => void;
    dismissAlarm: () => void;
    snoozeAlarm: () => void;
    handleSetAlarm: () => void;
  }