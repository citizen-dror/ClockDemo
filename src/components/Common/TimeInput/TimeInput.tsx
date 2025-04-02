import React from 'react';
import './TimeInput.css';

interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  'data-testid'?: string;
}

const TimeInput: React.FC<TimeInputProps> = ({
  value,
  onChange,
  id,
  name,
  className = '',
  disabled = false,
  required = false,
  'data-testid': testId,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const classes = ['timeui-time-input__field', className].filter(Boolean).join(' ');

  return (
    <div className="timeui-time-input">
      <input
        type="time"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className={classes}
        disabled={disabled}
        required={required}
        data-testid={testId}
        {...rest}
      />
    </div>
  );
};

export default TimeInput;