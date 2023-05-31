import { classNames } from 'shared/lib/className'
import cls from './AppButton.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ThemeButton
}

export enum ThemeButton {
  CLEAR = 'clear'
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props
  return (
    <button {...otherProps} className={classNames(cls.AppButton, {}, [className, cls[theme]])}>
      {children}
    </button>
  )
}
