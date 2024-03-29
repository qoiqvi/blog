import { classNames } from "shared/lib/classNames/className"
import { Theme, useTheme } from "App/provider/ThemeProvider"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import LightIcon from "shared/assets/icons/theme-light.svg"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { memo } from "react"

export interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<AppButton
			theme={ButtonTheme.CLEAR}
			onClick={toggleTheme}
			className={classNames("", {}, [className])}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</AppButton>
	)
})
