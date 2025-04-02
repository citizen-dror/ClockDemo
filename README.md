# React Analog Clock with Alarm

A simple analog clock built with React and TypeScript using Vite. This project features a traditional analog clock interface that updates every second and includes alarm functionality with snooze options.

## Features

### ⏰ Analog Clock
- Displays the current time with an animated analog clock.
- Updates every second without relying on external libraries for time handling.
- The clock interface is built entirely with HTML, CSS, and React—no images are used.

### 🔔 Alarms
- Users can set a custom alarm time.
- When the clock reaches the alarm time, a popup or modal notifies the user.

### 😴 Snoozing
- Users can snooze the alarm, delaying it by 5 minutes.
- After 3 snoozes, further snoozing is disabled, leaving only a dismiss option.

### Reusing Components with the Common Library

To maintain consistency and reduce code duplication, the project leverages a Common library that provides reusable UI components:

- **Card**: Used to wrap sections of the UI in a structured manner.
- **Modal**: Displays alarm notifications and snooze options in a user-friendly popup.
- **Button**: Standardized buttons for setting alarms, snoozing, and dismissing.
- **TimeInput**: A custom input field for selecting alarm times efficiently.
- **Styles**: A centralized style system that defines color variables and typography.
By centralizing these components in a common library, the project ensures better maintainability and a unified design across all interactive elements.

## Constraints
- The project uses only basic **HTML, CSS, and React**.  
- **No images** are used to render the clock interface.  
- **No external UI component libraries** are included.  
- **No external libraries** are used to handle clock functionality.  

## Development Notes
- **Console logs** are included to demonstrate the app’s flow during development but should be removed in production.  
- **Unit tests** cover hooks and key components to ensure reliability.  

This project is designed to demonstrate core React capabilities while keeping dependencies minimal.
