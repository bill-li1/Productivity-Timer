export interface ITimerSettings {
  pomodoroTime: number
  shortBreakTime: number
  longBreakTime: number
  numBreaks: number
  autoStartPomodoro: boolean
  autoStartShortTimer: boolean
  autoStartLongTimer: boolean
  pomodoroColor: string
  shortBreakColor: string
  longBreakColor: string
  circleTimer: boolean
}

export interface TimerSettingProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
}
