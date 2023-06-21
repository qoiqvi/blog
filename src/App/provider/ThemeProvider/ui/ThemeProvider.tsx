import { type FC, useMemo, useState, type ReactNode } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/themeContext"

interface ThemeProviderProps {
	initialTheme?: Theme
	children: ReactNode
}

// получает тему из локал стора но все равно применяет лайт в качестве дефолтной

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const { initialTheme, children } = props
	const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT
	// const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
	const [theme, setTheme] = useState<Theme>(defaultTheme)
	console.log("-------------------------------" + defaultTheme, theme)
	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	)

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
