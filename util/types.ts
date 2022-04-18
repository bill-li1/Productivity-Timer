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
  hideQuote: boolean
}

export interface ITempTimerSettings {
  pomodoroTime: string
  shortBreakTime: string
  longBreakTime: string
  numBreaks: string
  autoStartPomodoro: boolean
  autoStartShortTimer: boolean
  autoStartLongTimer: boolean
  pomodoroColor: string
  shortBreakColor: string
  longBreakColor: string
  hideQuote: boolean
}

export interface TimerSettingProps {
  timerSettings: ITempTimerSettings
  setTimerSettings: (newSettings: ITempTimerSettings) => void
}

export interface ITime {
  minutes: number
  seconds: number
}

export interface ITimerContext {
  timerSettings: ITimerSettings
  setTimerSettings: (value: ITimerSettings) => void
}

export interface ITodo {
  id: string
  createdAt: Date
  indent: number
  completed: boolean
  description: string
}
