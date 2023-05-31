import { classNames } from 'shared/lib/className'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'App/provider/ThemeProvider'
import DarcIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { AppButton } from 'shared/AppButton'
import { ThemeButton } from 'shared/AppButton/ui/AppButton'

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
        <>
            <AppButton theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
                {theme !== Theme.DARK ? <DarcIcon /> : <LightIcon />}
            </AppButton>
        </>
  )
}
