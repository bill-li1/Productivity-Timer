export interface ITimerSettings {
  pomdoroTime: number
  shortBreakTime: number
  longBreaktime: number
  numBreaks: number
  autoStartPomdoro: boolean
  autoStartShortTimer: boolean
  autoStartLongTimer: boolean
  circleTimer: boolean
}

export interface TimerSettingProps {
  timerSettings: ITimerSettings
  setTimerSettings: (newSettings: ITimerSettings) => void
}
