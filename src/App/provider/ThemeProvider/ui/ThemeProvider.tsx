import { type FC, useMemo, useState, type ReactNode } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/themeContext"

interface ThemeProviderProps {
	initialTheme: Theme
	children: ReactNode
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const { initialTheme, children } = props
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
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
